"use client";

import { useBrowser } from "@/components/browser/BrowserProvider";
import { current } from "@/components/browser/tabStore";
import { pathOf } from "@/lib/address";
import { FLAG_CLASS, type Hue } from "@/lib/hue";

/**
 * 창 안의 탭줄 — 노트의 색인 탭.
 *
 * 탭은 라우트 링크가 아니라 방문자가 연 페이지다. 그래서 링크가 아닌
 * 버튼으로 두고, 활성 탭에 aria-current 를 붙인다. 마운트 전에는 저장된
 * 탭을 알 수 없으므로 현재 경로로 탭 하나를 그린다 — 첫 방문과 같은 모양이다.
 * 프로젝트 탭에는 그 프로젝트의 플래그 색을 붙인다.
 */
export function TabStrip({ flags }: { flags: Record<string, Hue> }) {
  const { state, pathname, titleOf, switchTo, close, openNewTab } = useBrowser();

  const tabs = state
    ? state.tabs.map((t) => ({ id: t.id, url: current(t), active: t.id === state.activeId }))
    : [{ id: "initial", url: pathname, active: true }];

  return (
    <nav aria-label="열린 탭" className="flex min-w-0 items-end gap-1.5 bg-chrome px-3 pt-2.5">
      <ul className="-mb-px flex min-w-0 items-end gap-1 overflow-x-auto">
        {tabs.map((tab) => {
          const title = titleOf(tab.url);
          const flag = flags[pathOf(tab.url)];
          return (
            <li
              key={tab.id}
              className={`flex w-52 shrink-0 items-center rounded-t-md border border-b-0 ${
                tab.active
                  ? "relative z-10 border-line-strong bg-paper text-ink"
                  : "border-transparent bg-tab text-ink-2 hover:text-ink"
              }`}
            >
              {flag ? <span aria-hidden="true" className={`ml-3 h-3.5 w-1.5 shrink-0 ${FLAG_CLASS[flag]}`} /> : null}
              <button
                type="button"
                onClick={() => switchTo(tab.id)}
                aria-current={tab.active ? "page" : undefined}
                className={`min-h-10 min-w-0 flex-1 truncate px-3 text-left text-sm focus-visible:-outline-offset-2 ${tab.active ? "font-semibold" : ""}`}
              >
                {title}
              </button>
              <button
                type="button"
                onClick={() => close(tab.id)}
                aria-label={`${title} 탭 닫기`}
                className="min-h-10 shrink-0 px-2.5 text-xs text-ink-2 hover:text-pen focus-visible:-outline-offset-2"
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
        className="mb-1.5 min-h-8 shrink-0 px-3 text-sm font-medium text-ink-2 hover:text-pen"
      >
        새 탭
      </button>
    </nav>
  );
}
