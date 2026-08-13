import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { HueScope } from "@/components/layout/HueScope";
import { ProjectCover } from "@/components/project/ProjectCover";
import { Metric } from "@/components/ui/Metric";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FEATURED_PROJECT, SUPPORTING_PROJECTS } from "@/data/projects";
import { SECTION } from "@/lib/sections";

/** 카드에는 기술을 4개까지만 노출한다 (§35). pill badge 로 만들지 않는다. */
function TechLine({ items }: { items: readonly string[] }) {
  return (
    <p className="font-mono text-small text-ink-3">
      {items.slice(0, 4).join(" · ")}
    </p>
  );
}

/**
 * Case Study 진입점.
 *
 * 카드 전체를 링크로 감싸지 않는다. 카드 안에 서비스 링크가 함께 들어가는
 * 구조라 중첩 링크가 되고, 스크린리더에서 카드 전체가 하나의 긴 링크로 읽힌다.
 */
function CaseStudyLink({ slug, name }: { slug: string; name: string }) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="inline-flex min-h-11 items-center gap-1.5 text-small text-hue-deep"
    >
      <span className="border-b border-hue-deep pb-0.5">View Case Study</span>
      <span aria-hidden="true">→</span>
      <span className="sr-only">— {name}</span>
    </Link>
  );
}

/**
 * Featured Projects — 1 feature + 3-up (Blueprint 05-03)
 *
 * 2×2 균등 그리드를 쓰지 않는다. syu-likelion 하나만 full-bleed Blue tint 띠
 * 위에 올려 레이아웃 자체가 §8 의 우선순위를 말하게 한다. 나머지 셋은 아래
 * 3-up 으로 각자의 색을 단다.
 */
export function FeaturedProjects() {
  const featured = FEATURED_PROJECT;

  return (
    <section id={SECTION.projects} className="hue-blue py-section md:py-section-md">
      <Container>
        <SectionHeader
          eyebrow="Featured Projects"
          title="문제를 정의하고 실제로 배포한 것들"
          lede="네 개 모두 스스로 발견한 불편에서 시작했습니다. 첫 번째는 지금도 사람들이 쓰고 있습니다."
        />
      </Container>

      {/* 대표 프로젝트 — full-bleed tint 띠 */}
      <HueScope
        hue={featured.hue}
        className="mt-10 bg-hue-tint py-10 md:mt-14 md:py-14"
      >
        <Container>
          <article className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-14">
            <ProjectCover project={featured} ratio="16/10" />

            <div className="flex flex-col gap-5">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                <span className="font-mono text-label uppercase text-hue-deep">
                  {featured.period}
                </span>
                {featured.status ? (
                  <span className="font-mono text-label uppercase text-ink-2">
                    {featured.status}
                  </span>
                ) : null}
              </div>

              <div className="flex flex-col gap-2.5">
                <h3 className="text-h2">{featured.headline}</h3>
                <p className="max-w-measure text-small text-ink-2">
                  {featured.subtitle}
                </p>
              </div>

              {featured.metrics ? (
                <dl className="flex flex-wrap gap-x-12 gap-y-4">
                  {featured.metrics.map((m) => (
                    <div key={m.label}>
                      <dt className="sr-only">{m.label}</dt>
                      <dd>
                        <Metric value={m.value} label={m.label} />
                      </dd>
                    </div>
                  ))}
                </dl>
              ) : null}

              <div className="flex flex-col gap-3">
                <TechLine items={featured.technologies} />
                <CaseStudyLink slug={featured.slug} name={featured.name} />
              </div>
            </div>
          </article>
        </Container>
      </HueScope>

      {/* 보조 프로젝트 3개 */}
      <Container className="mt-10 md:mt-14">
        <ul className="grid gap-8 md:grid-cols-3 md:gap-6">
          {SUPPORTING_PROJECTS.map((project) => (
            <HueScope key={project.slug} hue={project.hue} as="li">
              <article className="flex h-full flex-col gap-4">
                <ProjectCover project={project} />

                <div className="flex flex-1 gap-3.5">
                  {/* 프로젝트 식별 바 */}
                  <span
                    aria-hidden="true"
                    className="w-0.75 shrink-0 rounded-xs bg-hue-deep"
                  />
                  <div className="flex min-w-0 flex-1 flex-col gap-2">
                    <span className="font-mono text-label uppercase text-ink-3">
                      {project.period}
                    </span>
                    <h3 className="text-h3">{project.name}</h3>
                    <p className="text-small text-ink-2">{project.headline}</p>

                    {project.metrics ? (
                      <p className="mt-1 font-mono text-small text-hue-deep tabular-nums">
                        {project.metrics
                          .map((m) => `${m.value} ${m.label}`)
                          .join("  ·  ")}
                      </p>
                    ) : null}

                    <div className="mt-auto flex flex-col gap-2.5 pt-3">
                      <TechLine items={project.technologies} />
                      <CaseStudyLink slug={project.slug} name={project.name} />
                    </div>
                  </div>
                </div>
              </article>
            </HueScope>
          ))}
        </ul>
      </Container>
    </section>
  );
}
