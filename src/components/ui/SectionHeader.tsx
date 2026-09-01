import type { ReactNode } from "react";

type SectionHeaderProps = {
  /** mono 라벨. 섹션이 무엇인지 한 단어로 */
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  /**
   * 페이지에서 가장 위에 오는 섹션만 1 을 준다.
   * 탭마다 라우트가 갈라져 있어서, 각 페이지에 h1 이 정확히 하나 있어야 한다.
   */
  level?: 1 | 2;
  className?: string;
};

/**
 * 섹션 헤더.
 *
 * Case Study 와 달리 번호를 붙이지 않는다. Case Study 는 Problem → Decision →
 * Result 로 이어지는 실제 순서라 번호가 정보지만, 이쪽 섹션들은 탭으로 아무
 * 데나 들어올 수 있어 번호가 거짓말이 된다.
 */
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
      <p className="font-mono text-label uppercase text-hue-deep">{eyebrow}</p>
      <Heading className="text-h2">{title}</Heading>
      {lede ? (
        <p className="max-w-measure text-ink-2">{lede}</p>
      ) : null}
    </div>
  );
}
