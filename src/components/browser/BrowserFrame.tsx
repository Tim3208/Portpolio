import type { ReactNode } from "react";

import { BrowserChrome } from "@/components/browser/BrowserChrome";

/**
 * 사이트 전체를 감싸는 창 (AGENTS.md §48.1)
 *
 * 데스크 위에 창 하나가 떠 있고, 그 안에서 포트폴리오가 열린다.
 * 탭을 누르면 주소창의 경로가 실제로 바뀐다 — 라우트가 진짜로 갈라져
 * 있기 때문이고, 그래서 이 연출은 흉내가 아니다.
 *
 * ⚠️ 아래 창 셸(div)에 overflow-* / transform / filter 를 추가하지 말 것.
 *    셋 중 무엇이든 걸리는 순간 이 요소가 스크롤 컨테이너 또는 containing
 *    block 이 되고, 크롬바의 sticky 가 조용히 죽는다. 크롬바는 화면에
 *    붙어 있어야지 콘텐츠와 같이 흘러가면 안 된다.
 *    창 하단의 둥근 모서리는 Footer 가 rounded-b-window 로 처리한다.
 */
export function BrowserFrame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-desk p-frame">
      <div
        id="top"
        className="mx-auto w-full max-w-window rounded-window bg-paper shadow-(--window-shadow)"
      >
        <BrowserChrome />
        {children}
      </div>
    </div>
  );
}
