import type { ReactNode } from "react";

type SectionHeaderProps = {
  /** mono 라벨. 섹션이 무엇인지 한 단어로 */
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  className?: string;
};

/**
 * 홈 섹션 헤더.
 *
 * Case Study 와 달리 번호를 붙이지 않는다. Case Study 는 Problem → Decision →
 * Result 로 이어지는 실제 순서라 번호가 정보지만, 홈 섹션은 내비게이션으로
 * 아무 순서나 들어올 수 있어 번호가 거짓말이 된다.
 */
export function SectionHeader({
  eyebrow,
  title,
  lede,
  className,
}: SectionHeaderProps) {
  return (
    <div
      data-reveal
      className={["flex flex-col gap-3.5", className].filter(Boolean).join(" ")}
    >
      <p className="font-mono text-label uppercase text-hue-deep">{eyebrow}</p>
      <h2 className="text-h2">{title}</h2>
      {lede ? (
        <p className="max-w-measure text-ink-2">{lede}</p>
      ) : null}
    </div>
  );
}
