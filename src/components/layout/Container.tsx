import type { ElementType, ReactNode } from "react";

/** AGENTS.md §26 / Blueprint 04 — 폭은 이 네 가지만 쓴다. */
const WIDTH = {
  /** 1120px — 홈 전 섹션의 기본 폭 */
  shell: "max-w-shell",
  /** 1080px — Case Study 다이어그램 · 스크린샷 breakout */
  break: "max-w-break",
  /** 720px — Case Study 본문 */
  case: "max-w-case",
  /** 66ch — 순수 본문 measure */
  measure: "max-w-measure",
} as const;

type ContainerProps = {
  as?: ElementType;
  width?: keyof typeof WIDTH;
  className?: string;
  children: ReactNode;
};

/**
 * 좌우 gutter 는 20 / 40 / 64px 로 고정한다.
 * 섹션의 상하 여백은 Container 가 아니라 섹션이 담당한다 —
 * full-bleed 색면 위에서도 gutter 만 필요하기 때문이다.
 */
export function Container({
  as: Tag = "div",
  width = "shell",
  className,
  children,
}: ContainerProps) {
  return (
    <Tag
      className={[
        "mx-auto w-full px-gutter md:px-gutter-md lg:px-gutter-lg",
        WIDTH[width],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Tag>
  );
}
