import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { COURSEWORK, SKILL_GROUPS } from "@/data/skills";

/** 기술을 실제 프로젝트에서 사용한 사례와 함께 표시한다. */
export function Skills() {
  return (
    <section className="hue-terracotta bg-hue-wash py-section md:py-section-md">
      <Container>
        <SectionHeader
          title="프로젝트에서 사용한 기술"
        />

        <dl className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {SKILL_GROUPS.map((group) => (
            <div key={group.role} className="flex flex-col gap-3">
              <dt className="flex flex-col gap-1 border-t border-rule-strong pt-3">
                <span className="text-small font-medium text-hue-deep">
                  {group.role}
                </span>
              </dt>
              <dd className="text-body text-ink-2">{group.caption}</dd>
              <dd className="text-small text-ink">
                {group.items.join(" · ")}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-t border-rule pt-5">
          <span className="text-small text-ink-3">
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
