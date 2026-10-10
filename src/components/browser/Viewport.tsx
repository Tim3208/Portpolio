"use client";

import type { ReactNode } from "react";

import { useBrowser } from "@/components/browser/BrowserProvider";

/**
 * 창의 본문 영역. 데스크톱에서는 창 높이에 맞춰 고정되고 이 안에서만
 * 스크롤된다. 모바일에서는 창 연출을 풀고 문서 전체가 스크롤된다.
 * 한 화면에서 스크롤 주체는 언제나 하나다.
 *
 * 새로고침은 key 를 바꿔 본문을 다시 마운트한다. 모든 탭을 닫으면
 * 데스크톱에서는 빈 창을 보여주고, 크롬이 없는 모바일에서는 본문을 그대로 둔다.
 */
export function Viewport({ children }: { children: ReactNode }) {
  const { state, viewportRef, reloadKey, openNewTab } = useBrowser();
  const empty = state !== null && state.tabs.length === 0;

  return (
    // relative: 본문 안의 absolute 요소(sr-only 라벨 등)가 이 스크롤 영역을 기준으로
    // 잡히게 한다. 없으면 문서 루트 기준으로 놓여 바깥 문서까지 스크롤이 생기고 창이 밀린다.
    <div
      ref={viewportRef}
      className="relative md:min-h-0 md:flex-1 md:overflow-y-auto md:rounded-b-window"
    >
      {empty ? (
        <div className="hidden min-h-full flex-col items-center justify-center gap-4 p-10 md:flex">
          <p className="text-lead text-ink-2">열린 탭이 없습니다.</p>
          <button
            type="button"
            onClick={openNewTab}
            className="min-h-11 rounded-chip bg-hue-deep px-5 text-sm font-semibold text-paper transition-colors duration-150 hover:bg-ink"
          >
            새 탭 열기
          </button>
        </div>
      ) : null}
      <div key={reloadKey} className={empty ? "md:hidden" : undefined}>
        {children}
      </div>
    </div>
  );
}
