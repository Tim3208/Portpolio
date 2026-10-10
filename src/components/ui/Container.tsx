import type { ReactNode } from "react";

/**
 * 섹션 거터. 창 안의 좌우 여백은 여기 한 곳에서만 준다.
 *
 * 본문 전체의 최대 폭은 두지 않는다. 실제 화면과 도식은 이 폭을 다 쓰고,
 * 긴 문단만 각자 max-w-measure(672px)로 읽기 폭을 지킨다. 안쪽 요소에 다시
 * 좌우 패딩을 주어 화면을 줄이지 않는다.
 */
export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={["w-full px-4 md:px-6 2xl:px-8", className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}
