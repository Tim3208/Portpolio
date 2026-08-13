import type { ElementType, ReactNode } from "react";

import { HUE_CLASS, type Hue } from "@/lib/hue";

type HueScopeProps = {
  hue: Hue;
  /** 기본 div. 섹션이면 "section", 카드면 "article" 을 넘긴다. */
  as?: ElementType;
  className?: string;
  /** 색 스트립처럼 내용 없이 면만 필요한 경우가 있어 옵셔널이다. */
  children?: ReactNode;
};

/**
 * 색맥락 스코프.
 *
 * 이 안에서는 --hue-wash / --hue-tint / --hue-deep 이 해당 계열로 교체되므로
 * bg-hue-wash, text-hue-deep, border-hue-deep 같은 유틸리티가 전부 그 색을
 * 따라간다. 하위 컴포넌트는 자기가 무슨 색인지 알 필요가 없다.
 */
export function HueScope({
  hue,
  as: Tag = "div",
  className,
  children,
}: HueScopeProps) {
  return (
    <Tag className={[HUE_CLASS[hue], className].filter(Boolean).join(" ")}>
      {children}
    </Tag>
  );
}
