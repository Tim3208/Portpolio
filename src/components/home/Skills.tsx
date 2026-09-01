import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { COURSEWORK, SKILL_GROUPS } from "@/data/skills";

/**
 * Skills — 4열 컴팩트 텍스트 (Blueprint 05-07)
 *
 * 퍼센트도 바도 아이콘도 pill 도 없다 (§18). 역할 라벨은 mono, 기술은
 * 그냥 텍스트를 · 로 잇는다. 세로 높이가 가장 낮은 섹션이다.
 * 지면은 Clay wash full-bleed.
 */
export function Skills() {
  return (
    <section className="hue-terracotta bg-hue-wash py-section md:py-section-md">
      <Container>
        <SectionHeader
          eyebrow="Skills"
          title="무엇을 할 수 있는가로 묶었습니다"
          lede="숙련도를 임의의 수치로 표현하지 않습니다. 실제 프로젝트에서 의미 있게 사용한 것만 남겼습니다."
        />

        <dl className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {SKILL_GROUPS.map((group) => (
            <div key={group.role} className="flex flex-col gap-3">
              <dt className="flex flex-col gap-1 border-t border-rule-strong pt-3">
                <span className="font-mono text-label uppercase text-hue-deep">
                  {group.role}
                </span>
                <span className="text-small text-ink-3">{group.caption}</span>
              </dt>
              <dd className="text-small text-ink">
                {group.items.join(" · ")}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-t border-rule pt-5">
          <span className="font-mono text-label uppercase text-ink-3">
            {COURSEWORK.label}
          </span>
          <span className="text-small text-ink-2">
            {COURSEWORK.items.join(" · ")}
          </span>
        </div>
      </Container>
    </section>
  );
}
