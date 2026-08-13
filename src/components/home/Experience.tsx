import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TIMELINE } from "@/data/experiences";
import { SECTION } from "@/lib/sections";

/**
 * Experience — sticky 연도 타임라인 (Blueprint 05-04)
 *
 * 카드를 쓰지 않는다. 세로 hairline 하나가 2018 → 2026 을 관통하고,
 * 연도는 스크롤하는 동안 좌측에 머문다. 지면은 Butter wash full-bleed.
 */
export function Experience() {
  return (
    <section
      id={SECTION.experience}
      className="hue-butter bg-hue-wash py-section md:py-section-md"
    >
      <Container>
        <SectionHeader
          eyebrow="Experience"
          title="디자인에서 시작해 개발로"
        />

        <ol className="mt-12">
          {TIMELINE.map((group) => (
            <li
              key={group.year}
              className="grid grid-cols-[3.5rem_1px_minmax(0,1fr)] gap-x-5 sm:grid-cols-[5rem_1px_minmax(0,1fr)] sm:gap-x-8"
            >
              <p className="sticky top-24 self-start py-6 font-mono text-h3 tabular-nums text-hue-deep">
                {group.year}
              </p>

              <div aria-hidden="true" className="bg-rule-strong" />

              <ul className="flex flex-col gap-5 py-6">
                {group.items.map((item) => (
                  <li key={item.title} className="flex flex-col gap-1">
                    <p className="text-ink">{item.title}</p>
                    {item.detail ? (
                      <p className="text-small text-ink-3">{item.detail}</p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
