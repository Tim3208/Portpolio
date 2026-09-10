import type { ReactNode } from "react";

type SectionHeaderProps = {
  /** 제목과 다른 맥락을 보충할 때만 쓰는 선택 라벨. */
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  /**
   * 페이지에서 가장 위에 오는 섹션만 1 을 준다.
   * 탭마다 라우트가 갈라져 있어서, 각 페이지에 h1 이 정확히 하나 있어야 한다.
   */
  level?: 1 | 2;
  className?: string;
};

/** 제목 계층을 유지하며 필요한 경우에만 라벨과 도입문을 표시한다. */
export function SectionHeader({
  eyebrow,
  title,
  lede,
  level = 2,
  className,
}: SectionHeaderProps) {
  const Heading = level === 1 ? "h1" : "h2";

  return (
    <div
      data-reveal
      className={["flex flex-col gap-3.5", className].filter(Boolean).join(" ")}
    >
      {eyebrow ? <p className="text-small text-hue-deep">{eyebrow}</p> : null}
      <Heading className="text-h2">{title}</Heading>
      {lede ? (
        <p className="max-w-measure text-ink-2">{lede}</p>
      ) : null}
    </div>
  );
}
