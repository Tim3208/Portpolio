"use client";

import { useLinkStatus } from "next/link";

/**
 * 탭 전환이 지연될 때만 뜨는 힌트 라인.
 *
 * 대부분의 경우 보이지 않는다. 탭은 sticky 라 언제나 뷰포트 안에 있고,
 * Next 는 뷰포트 안의 <Link> 를 미리 받아두기 때문에 pending 상태 자체가
 * 생략된다. 느린 네트워크의 첫 방문을 위한 보험이다.
 *
 * 100ms 지연 후에 나타나게 해서, 빠른 전환에서 깜빡이지 않게 한다
 * (표시는 globals.css §8 — useLinkStatus 문서의 권장 패턴).
 */
export function TabPending() {
  const { pending } = useLinkStatus();

  return (
    <span
      aria-hidden="true"
      data-tab-pending=""
      data-pending={pending ? "" : undefined}
      className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-accent"
    />
  );
}
