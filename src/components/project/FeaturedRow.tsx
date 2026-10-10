import {
  Labeled,
  ProjectCover,
  ProjectLinks,
  ProjectMeta,
  ProjectMetrics,
} from "@/components/project/ProjectParts";
import { Container } from "@/components/ui/Container";
import { hasCaseStudy } from "@/data/caseStudies";
import type { Project } from "@/data/projects";
import { HUE_CLASS } from "@/lib/hue";

/**
 * 대표 프로젝트 한 행 — 큰 화면과 짧은 문제 · 판단 · 결과가 나란하다.
 * 홈과 /work 가 같이 쓴다. 넓은 화면에서 화면이 7, 설명이 5 를 차지하고,
 * flip 이면 좌우를 바꿔 행이 이어질 때 리듬을 만든다. 좁은 화면에서는 화면이 먼저다.
 *
 * 행마다 배경색이나 카드를 늘리지 않는다. 프로젝트 색은 라벨과 화면 주석에만 쓴다.
 */
export function FeaturedRow({ project, flip = false }: { project: Project; flip?: boolean }) {
  return (
    <article aria-labelledby={`project-${project.slug}`} className={project.hue ? HUE_CLASS[project.hue] : undefined}>
      <Container className="grid gap-8 border-t border-rule py-10 md:py-14 lg:grid-cols-12 lg:gap-12">
        <div className={`min-w-0 lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
          <ProjectCover project={project} sizes="(min-width: 1024px) 56vw, 100vw" />
        </div>
        <div className="flex min-w-0 flex-col gap-5 lg:col-span-5">
          <div className="flex flex-col gap-1.5">
            {project.category ? <p className="text-sm font-semibold text-hue-deep">{project.category}</p> : null}
            <h3 id={`project-${project.slug}`} className="text-2xl font-bold tracking-tight">
              {project.name}
            </h3>
            <p className="text-lead text-ink-2">{project.headline}</p>
          </div>
          <Labeled label="The Problem">{project.problem}</Labeled>
          <Labeled label="Impressive Issue">{project.decision}</Labeled>
          <ProjectMetrics project={project} />
          <Labeled label="Result">{project.outcome}</Labeled>
          <div className="flex flex-col gap-1 border-t border-rule pt-4">
            <ProjectMeta project={project} />
            {project.technologies ? (
              <p className="font-mono text-xs text-ink-2">{project.technologies.join(" · ")}</p>
            ) : null}
          </div>
          <ProjectLinks project={project} detail={hasCaseStudy(project.slug)} />
        </div>
      </Container>
    </article>
  );
}
