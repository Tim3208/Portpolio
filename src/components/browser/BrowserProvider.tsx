"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  use,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
  type RefObject,
} from "react";

import {
  activeTab,
  current,
  tabStore,
  type TabState,
} from "@/components/browser/tabStore";
import { externalHref, parseAddress, pathOf } from "@/lib/address";
import { NEW_TAB_PATH } from "@/lib/pages";

type Browser = {
  /** 마운트 전(서버 렌더 · 하이드레이션)에는 null */
  state: TabState | null;
  pathname: string;
  host: string;
  titleOf: (url: string) => string;
  viewportRef: RefObject<HTMLDivElement | null>;
  reloadKey: number;
  switchTo: (id: string) => void;
  close: (id: string) => void;
  openNewTab: () => void;
  submitAddress: (input: string) => void;
  back: () => void;
  forward: () => void;
  reload: () => void;
};

const BrowserContext = createContext<Browser | null>(null);

export function useBrowser() {
  const browser = use(BrowserContext);
  if (!browser) throw new Error("useBrowser 는 BrowserProvider 안에서만 쓴다.");
  return browser;
}

/**
 * 창 안의 탭 · 방문 기록 · 스크롤을 실제 라우터와 이어 붙인다.
 *
 * 이동 경로는 두 갈래다.
 *   · 창이 일으킨 이동 (탭 전환, 뒤로·앞으로, 주소창) — 저장소를 먼저 바꾸고
 *     router 로 따라간다. 탭 전환과 뒤로·앞으로는 replace 를 써서 실제
 *     브라우저 기록을 쌓지 않는다.
 *   · 본문 링크나 실제 브라우저의 뒤로·앞으로 — 경로가 먼저 바뀌고
 *     sync 가 활성 탭의 기록에 반영한다.
 */
export function BrowserProvider({
  host,
  titles,
  children,
}: {
  host: string;
  titles: Record<string, string>;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const state = useSyncExternalStore(
    tabStore.subscribe,
    tabStore.getSnapshot,
    tabStore.getServerSnapshot,
  );

  const viewportRef = useRef<HTMLDivElement>(null);
  const scrollByTab = useRef(new Map<string, number>());
  const pendingScroll = useRef<{ path: string; top: number } | null>(null);
  const [reloadKey, setReloadKey] = useState(0);

  // 쿼리까지 기록해야 외부 주소 안내(/external?to=…)를 새로고침해도
  // 주소창이 방문자가 친 주소를 계속 보여준다.
  useEffect(() => {
    const url = pathname + window.location.search;
    if (tabStore.getSnapshot()) tabStore.sync(url);
    else tabStore.init(url);
  }, [pathname]);

  // 경로가 바뀌면 본문을 맨 위에서 시작한다. 탭 전환이면 그 탭의 위치로
  // 되돌리고, 해시 이동이면 브라우저가 맞춘 위치를 건드리지 않는다.
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const pending = pendingScroll.current;
    if (pending) {
      if (pending.path !== pathname) return;
      el.scrollTop = pending.top;
      pendingScroll.current = null;
      return;
    }
    if (!window.location.hash) el.scrollTop = 0;
  }, [pathname]);

  function titleOf(url: string) {
    return titles[pathOf(url)] ?? "페이지를 찾을 수 없음";
  }

  function rememberScroll() {
    const id = tabStore.getSnapshot()?.activeId;
    if (id && viewportRef.current) {
      scrollByTab.current.set(id, viewportRef.current.scrollTop);
    }
  }

  /** 다른 탭(또는 같은 탭의 다른 기록)을 보여준다. 실제 기록은 쌓지 않는다. */
  function show(url: string, top: number) {
    const path = pathOf(url);
    if (path === pathname) {
      if (viewportRef.current) viewportRef.current.scrollTop = top;
    } else {
      pendingScroll.current = { path, top };
    }
    router.replace(url, { scroll: false });
  }

  function switchTo(id: string) {
    rememberScroll();
    tabStore.switchTo(id);
    const tab = activeTab(tabStore.getSnapshot());
    if (tab) show(current(tab), scrollByTab.current.get(id) ?? 0);
  }

  function close(id: string) {
    const wasActive = tabStore.getSnapshot()?.activeId === id;
    tabStore.close(id);
    scrollByTab.current.delete(id);
    const next = activeTab(tabStore.getSnapshot());
    if (wasActive && next) show(current(next), scrollByTab.current.get(next.id) ?? 0);
  }

  function openNewTab() {
    rememberScroll();
    tabStore.open(NEW_TAB_PATH);
    if (pathname === NEW_TAB_PATH && viewportRef.current) {
      viewportRef.current.scrollTop = 0;
    }
    router.push(NEW_TAB_PATH);
  }

  function submitAddress(input: string) {
    const parsed = parseAddress(input, host);
    if (!parsed) return;
    const url =
      parsed.kind === "internal" ? parsed.href : externalHref(parsed.address);
    tabStore.navigate(url);
    router.push(url);
    // 실제 브라우저처럼 주소를 입력한 뒤에는 본문으로 초점을 옮긴다.
    document.getElementById("content")?.focus({ preventScroll: true });
  }

  function step(delta: -1 | 1) {
    const tab = activeTab(tabStore.getSnapshot());
    const target = tab?.history[tab.index + delta];
    if (!target) return;
    tabStore.go(delta);
    show(target, 0);
  }

  function reload() {
    setReloadKey((k) => k + 1);
    router.refresh();
    if (viewportRef.current) viewportRef.current.scrollTop = 0;
  }

  return (
    <BrowserContext
      value={{
        state,
        pathname,
        host,
        titleOf,
        viewportRef,
        reloadKey,
        switchTo,
        close,
        openNewTab,
        submitAddress,
        back: () => step(-1),
        forward: () => step(1),
        reload,
      }}
    >
      {children}
    </BrowserContext>
  );
}
