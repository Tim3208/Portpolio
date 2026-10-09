import { pathOf } from "@/lib/address";

/**
 * 창 안의 탭 상태.
 *
 * 탭은 라우트가 아니라 방문자가 열고 닫는 상태다. 실제 URL 은 언제나
 * 활성 탭의 현재 주소와 같고, 다른 탭들은 각자의 방문 기록만 들고 있다.
 *
 * React state 가 아니라 외부 저장소로 둔다. sessionStorage 에서 복원한
 * 값은 서버가 알 수 없으므로, 하이드레이션까지는 null 을 보여주고
 * (BrowserProvider 가 현재 경로로 탭 하나를 그린다) 마운트 후에 init 한다.
 * sessionStorage 라서 새로고침에는 유지되고 실제 브라우저 탭을 닫으면 사라진다.
 */
export type Tab = {
  id: string;
  /** 이 탭의 방문 기록. 뒤로·앞으로가 이 안에서 움직인다. */
  history: string[];
  index: number;
};

export type TabState = {
  tabs: Tab[];
  activeId: string | null;
};

const KEY = "browser-tabs";

let state: TabState | null = null;
/** 마지막으로 반영한 실제 주소. 같은 주소로 sync 가 다시 와도 무시한다. */
let lastUrl: string | null = null;
const listeners = new Set<() => void>();

function emit(next: TabState) {
  state = next;
  try {
    sessionStorage.setItem(KEY, JSON.stringify(next));
  } catch {}
  listeners.forEach((l) => l());
}

function newId() {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : String(Date.now() + Math.random());
}

function isTabState(value: unknown): value is TabState {
  if (!value || typeof value !== "object") return false;
  const v = value as TabState;
  return (
    Array.isArray(v.tabs) &&
    v.tabs.every(
      (t) =>
        typeof t.id === "string" &&
        Array.isArray(t.history) &&
        t.history.length > 0 &&
        t.history.every((h) => typeof h === "string" && h.startsWith("/")) &&
        Number.isInteger(t.index) &&
        t.index >= 0 &&
        t.index < t.history.length,
    ) &&
    (v.activeId === null || v.tabs.some((t) => t.id === v.activeId))
  );
}

export const current = (tab: Tab) => tab.history[tab.index];

export function activeTab(s: TabState | null) {
  return s?.tabs.find((t) => t.id === s.activeId);
}

function updateActive(s: TabState, fn: (tab: Tab) => Tab): TabState {
  return { ...s, tabs: s.tabs.map((t) => (t.id === s.activeId ? fn(t) : t)) };
}

function openTab(s: TabState, url: string): TabState {
  const tab: Tab = { id: newId(), history: [url], index: 0 };
  return { tabs: [...s.tabs, tab], activeId: tab.id };
}

export const tabStore = {
  subscribe(listener: () => void) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
  getSnapshot: () => state,
  getServerSnapshot: () => null,

  /** 마운트 직후 한 번. 저장된 탭을 복원하고 활성 탭을 실제 주소에 맞춘다. */
  init(url: string) {
    if (state) return;
    let saved: unknown = null;
    try {
      saved = JSON.parse(sessionStorage.getItem(KEY) ?? "null");
    } catch {}

    if (!isTabState(saved)) {
      lastUrl = url;
      emit(openTab({ tabs: [], activeId: null }, url));
      return;
    }
    // 모든 탭을 닫은 채 새로고침했다면 빈 창을 그대로 둔다.
    state = saved;
    if (saved.activeId) this.sync(url);
    lastUrl = url;
    // sync 가 바꿀 것이 없어도 구독자에게는 알려야 복원된 탭이 그려진다.
    emit(state);
  },

  /**
   * 실제 주소가 바뀌었을 때. 창의 버튼이 아니라 본문 링크나 실제 브라우저의
   * 뒤로·앞으로로 이동한 경우를 활성 탭의 방문 기록에 반영한다.
   */
  sync(url: string) {
    if (!state || url === lastUrl) return;
    lastUrl = url;
    const tab = activeTab(state);
    if (!tab) {
      emit(openTab(state, url));
      return;
    }
    const path = pathOf(url);
    const { history, index } = tab;
    if (pathOf(history[index]) === path) return;

    if (index > 0 && pathOf(history[index - 1]) === path) {
      emit(updateActive(state, (t) => ({ ...t, index: index - 1 })));
    } else if (index < history.length - 1 && pathOf(history[index + 1]) === path) {
      emit(updateActive(state, (t) => ({ ...t, index: index + 1 })));
    } else {
      emit(
        updateActive(state, (t) => ({
          ...t,
          history: [...history.slice(0, index + 1), url],
          index: index + 1,
        })),
      );
    }
  },

  /** 주소창 입력처럼 창이 직접 일으킨 이동. 활성 탭에 기록을 쌓는다. */
  navigate(url: string) {
    if (!state) return;
    const tab = activeTab(state);
    if (!tab) {
      emit(openTab(state, url));
      return;
    }
    if (current(tab) === url) return;
    emit(
      updateActive(state, (t) => ({
        ...t,
        history: [...t.history.slice(0, t.index + 1), url],
        index: t.index + 1,
      })),
    );
  },

  go(delta: -1 | 1) {
    if (!state) return;
    emit(updateActive(state, (t) => ({ ...t, index: t.index + delta })));
  },

  open(url: string) {
    if (state) emit(openTab(state, url));
  },

  switchTo(id: string) {
    if (state && state.activeId !== id) emit({ ...state, activeId: id });
  },

  /** 닫은 탭이 활성 탭이었다면 오른쪽, 없으면 왼쪽 탭을 활성화한다. */
  close(id: string) {
    if (!state) return;
    const at = state.tabs.findIndex((t) => t.id === id);
    if (at === -1) return;
    const tabs = state.tabs.filter((t) => t.id !== id);
    const activeId =
      state.activeId === id ? (tabs[at] ?? tabs[at - 1])?.id ?? null : state.activeId;
    emit({ tabs, activeId });
  },
};
