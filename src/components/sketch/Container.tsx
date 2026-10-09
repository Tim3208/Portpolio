import type { ReactNode } from "react";

/** 창 안 본문 폭과 좌우 여백 */
export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={["mx-auto w-full max-w-content px-5 md:px-10", className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}
