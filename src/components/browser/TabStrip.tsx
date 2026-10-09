"use client";

import { useBrowser } from "@/components/browser/BrowserProvider";
import { current } from "@/components/browser/tabStore";

/**
 * 창 안의 탭줄.
 *
 * 탭은 라우트 링크가 아니라 방문자가 연 페이지다. 그래서 링크가 아닌
 * 버튼으로 두고, 활성 탭에 aria-current 를 붙인다. 마운트 전에는 저장된
 * 탭을 알 수 없으므로 현재 경로로 탭 하나를 그린다 — 첫 방문과 같은 모양이다.
 */
export function TabStrip() {
  const { state, pathname, titleOf, switchTo, close, openNewTab } = useBrowser();

  const tabs = state
    ? state.tabs.map((t) => ({ id: t.id, url: current(t), active: t.id === state.activeId }))
    : [{ id: "initial", url: pathname, active: true }];

  return (
    <nav aria-label="열린 탭" className="flex min-w-0 items-end gap-1 px-2 pt-2">
      <ul className="flex min-w-0 items-end gap-1 overflow-x-auto">
        {tabs.map((tab) => {
          const title = titleOf(tab.url);
          return (
            <li
              key={tab.id}
              className={`flex w-48 shrink-0 items-center border border-b-0 ${
                tab.active ? "border-line-strong bg-paper" : "border-line text-ink-2"
              }`}
            >
              <button
                type="button"
                onClick={() => switchTo(tab.id)}
                aria-current={tab.active ? "page" : undefined}
                className="min-h-10 min-w-0 flex-1 truncate px-3 text-left text-sm"
              >
                {title}
              </button>
              <button
                type="button"
                onClick={() => close(tab.id)}
                aria-label={`${title} 탭 닫기`}
                className="min-h-10 shrink-0 px-2 text-xs text-ink-2 underline"
              >
                닫기
              </button>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        onClick={openNewTab}
        className="mb-1 min-h-9 shrink-0 border border-line px-3 text-sm"
      >
        새 탭
      </button>
    </nav>
  );
}
