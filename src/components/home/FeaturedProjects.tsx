import Link from "next/link";

import { OtherProjects } from "@/components/home/OtherProjects";
import { Container } from "@/components/layout/Container";
import { HueScope } from "@/components/layout/HueScope";
import { ProjectCover } from "@/components/project/ProjectCover";
import { Metric } from "@/components/ui/Metric";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FEATURED_PROJECT, SUPPORTING_PROJECTS, type Project } from "@/data/projects";

function ProjectDetails({ project }: { project: Project }) {
  return (
    <div className="flex min-w-0 flex-col gap-5">
      <div>
        <h2 className="text-h2">{project.name}</h2>
        <p className="mt-3 max-w-measure text-body text-ink-2">{project.subtitle}</p>
      </div>
      <div className="space-y-1 text-small text-ink-2">
        <p>{project.role}</p>
        <p className="flex flex-wrap gap-x-3 gap-y-1">
          <span className="font-mono">{project.period}</span>
          {project.status ? <span>{project.status}</span> : null}
        </p>
      </div>
      {project.metrics?.length ? (
        <dl className="flex flex-wrap gap-x-10 gap-y-4">
          {project.metrics.slice(0, 2).map((metric) => (
            <div key={metric.label}>
              <dt className="sr-only">{metric.label}</dt>
              <dd><Metric value={metric.value} label={metric.label} /></dd>
            </div>
          ))}
        </dl>
      ) : null}
      <p className="text-small text-ink-2">{project.technologies.slice(0, 4).join(" · ")}</p>
      <Link
        href={`/projects/${project.slug}`}
        className="inline-flex min-h-11 w-fit items-center gap-2 text-small text-hue-deep"
      >
        <span className="border-b border-hue-deep pb-0.5">작업 과정 읽기</span>
        <span aria-hidden="true">↗</span>
        <span className="sr-only"> — {project.name}</span>
      </Link>
    </div>
  );
}

/** 공개 가능한 기능만으로 그린 작업 흐름이며 실제 프로그램 화면이 아니다. */
function SchedulingDiagram() {
  return (
    <figure className="bg-hue-tint p-6 md:p-8">
      <ol className="space-y-5">
        {[
          ["편성 조건", "인원별 역할 · 휴가 · 투입 가능 시간 · 이전 근무 기록"],
          ["근무 배정", "근무 규칙을 반영한 자동 생성 · 예외 상황 수동 수정"],
          ["기록 저장", "LocalStorage 저장 · 백업 파일 내보내기와 복원"],
        ].map(([title, description], index) => (
          <li key={title} className="flex gap-4">
            <span aria-hidden="true" className="font-mono text-small text-hue-deep">0{index + 1}</span>
            <div>
              <p className="text-body font-medium text-ink">{title}</p>
              <p className="mt-1 text-small text-ink-2">{description}</p>
            </div>
          </li>
        ))}
      </ol>
      <figcaption className="mt-6 border-t border-rule pt-4 text-small text-ink-2">
        편성 과정을 설명한 도식입니다. 보안상 코드와 실제 화면은 공개하지 않습니다.
      </figcaption>
    </figure>
  );
}

export function FeaturedProjects() {
  return (
    <section className="hue-mocha py-section md:py-section-md">
      <Container>
        <SectionHeader level={1} title="프로젝트" />
      </Container>
      <HueScope hue={FEATURED_PROJECT.hue} className="mt-10 bg-hue-tint py-10 md:mt-14 md:py-14">
        <Container>
          <article className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-12">
            <figure>
              <ProjectCover project={FEATURED_PROJECT} preload sizes="(min-width: 1280px) 560px, (min-width: 1024px) 48vw, 90vw" />
              <figcaption className="mt-3 text-small text-ink-2">
                지원서 답변과 문항별 점수, 운영진 코멘트를 확인하는 평가 화면입니다.
              </figcaption>
            </figure>
            <ProjectDetails project={FEATURED_PROJECT} />
          </article>
        </Container>
      </HueScope>
      <Container className="mt-12 md:mt-20">
        <ul className="space-y-12 md:space-y-20">
          {SUPPORTING_PROJECTS.map((project) => (
            <HueScope key={project.slug} hue={project.hue} as="li">
              <article className="grid gap-7 border-t border-rule pt-10 md:grid-cols-[1.2fr_1fr] md:items-center md:gap-10">
                {project.slug === "cctv-scheduler" ? <SchedulingDiagram /> : (
                  <figure>
                    <ProjectCover project={project} sizes="(min-width: 1280px) 560px, (min-width: 768px) 48vw, 90vw" />
                    <figcaption className="mt-3 text-small text-ink-2">
                      {project.slug === "oshi-calendar"
                        ? "종료 임박 일정, 오늘 할 일과 보상 현황을 모은 대시보드입니다. 표시된 수치는 샘플(목업) 데이터입니다."
                        : "검색 결과를 선택하면 지도와 건물 내부 상세 정보를 함께 확인할 수 있습니다."}
                    </figcaption>
                  </figure>
                )}
                <ProjectDetails project={project} />
              </article>
            </HueScope>
          ))}
        </ul>
      </Container>
      <OtherProjects />
    </section>
  );
}
