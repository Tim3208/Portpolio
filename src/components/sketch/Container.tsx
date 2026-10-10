import type { ReactNode } from "react";

/**
 * 노트 한 면의 본문 칸. 붉은 여백선 오른쪽에서 시작해 왼쪽에 정렬된다.
 * 여백 주석(.margin-note)은 이 칸의 시작선에 붙은 요소(.hang)에서 왼쪽 여백으로 걸린다.
 */
export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={[
        "w-full max-w-[calc(var(--content-x)+var(--container-main)+2.5rem)] pr-5 pl-(--content-x) md:pr-10",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
