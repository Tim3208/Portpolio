"use client";

import { useBrowser } from "@/components/browser/BrowserProvider";
import { CloseIcon, PlusIcon } from "@/components/browser/icons";
import { current } from "@/components/browser/tabStore";

/**
 * 창 안의 탭줄.
 *
 * 탭은 라우트 링크가 아니라 방문자가 연 페이지다. 그래서 링크가 아닌
 * 버튼으로 두고, 활성 탭에 aria-current 를 붙인다. 마운트 전에는 저장된
 * 탭을 알 수 없으므로 현재 경로로 탭 하나를 그린다 — 첫 방문과 같은 모양이다.
 *
 * 활성 탭은 도구줄과 같은 면(omnibox)으로 이어지고, 위쪽 Accent 선은 글자가
 * 닿지 않는 장식이다. 탭이 많아지면 폭을 줄이다가 가로로 스크롤한다.
 */
export function TabStrip() {
  const { state, pathname, titleOf, switchTo, close, openNewTab } = useBrowser();

  const tabs = state
    ? state.tabs.map((t) => ({ id: t.id, url: current(t), active: t.id === state.activeId }))
    : [{ id: "initial", url: pathname, active: true }];

  return (
    <nav aria-label="열린 탭" className="flex h-10 min-w-0 items-end gap-1 px-2">
      <ul className="flex min-w-0 items-end gap-0.5 overflow-x-auto [scrollbar-width:none]">
        {tabs.map((tab) => {
          const title = titleOf(tab.url);
          return (
            <li
              key={tab.id}
              className={`relative flex h-9 w-56 min-w-28 shrink items-center gap-1 rounded-t-panel pr-1.5 pl-3 text-[0.8125rem] transition-colors duration-150 ${
                tab.active ? "bg-omnibox text-ink" : "text-ink-2 hover:bg-paper-sunk hover:text-ink"
              }`}
            >
              {tab.active ? (
                <span aria-hidden="true" className="absolute inset-x-3 top-0 h-0.5 rounded-b-full bg-accent" />
              ) : null}
              <button
                type="button"
                onClick={() => switchTo(tab.id)}
                aria-current={tab.active ? "page" : undefined}
                className="h-full min-w-0 flex-1 truncate text-left focus-visible:outline-offset-[-2px]"
              >
                {title}
              </button>
              <button
                type="button"
                onClick={() => close(tab.id)}
                aria-label={`${title} 탭 닫기`}
                className="flex size-6 shrink-0 items-center justify-center rounded-chip text-ink-2 transition-colors duration-150 hover:bg-rule hover:text-ink"
              >
                <CloseIcon />
              </button>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        onClick={openNewTab}
        aria-label="새 탭"
        className="mb-1 flex size-8 shrink-0 items-center justify-center rounded-chip text-ink-2 transition-colors duration-150 hover:bg-paper-sunk hover:text-ink"
      >
        <PlusIcon />
      </button>
    </nav>
  );
}
