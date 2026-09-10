import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AWARDS } from "@/data/awards";

/**
 * Awards — hairline 리스트 (Blueprint 05-06)
 *
 * 아이콘 0개, 뱃지 0개, 카드 0개. 위계는 오직 타이포 크기로만 표현한다.
 * 지면은 Cloud Dancer 순지면 — 앞뒤 색면 사이에서 쉼표 역할을 한다.
 */
export function Awards() {
  return (
    <section className="hue-mocha py-section md:py-section-md">
      <Container>
        <SectionHeader title="수상" />

        <ol className="mt-10 border-t-2 border-ink">
          {AWARDS.map((award) => (
            <li
              key={`${award.year}-${award.title}`}
              className="grid gap-x-6 gap-y-2 border-b border-rule py-6 sm:grid-cols-[4rem_minmax(0,1fr)] md:grid-cols-[4rem_7rem_minmax(0,1fr)]"
            >
              <p className="font-mono text-small tabular-nums text-ink-3">
                {award.year}
              </p>
              <p
                className={
                  award.primary
                    ? "text-h3 text-hue-deep"
                    : "text-small text-ink-2"
                }
              >
                {award.prize}
              </p>
              <div className="flex flex-col gap-1.5 sm:col-span-2 md:col-span-1">
                <p className={award.primary ? "text-h3" : "text-ink"}>
                  {award.title}
                </p>
                <p className="text-small text-ink-3">{award.host}</p>
                {award.role ? (
                  <p className="text-small text-ink-3">
                    {award.role}
                  </p>
                ) : null}
                {award.links ? (
                  <p className="mt-1 flex flex-wrap gap-x-5 gap-y-1">
                    {award.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex min-h-11 items-center border-b border-hue-deep text-small text-hue-deep"
                      >
                        {link.label}
                      </a>
                    ))}
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
