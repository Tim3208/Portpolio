import Link from "next/link";

import {
  BUTTON,
  Labeled,
  ProjectCover,
  ProjectLinks,
  ProjectMeta,
  ProjectMetrics,
} from "@/components/project/ProjectParts";
import { Container } from "@/components/ui/Container";
import { Shot } from "@/components/ui/Shot";
import { Switcher } from "@/components/ui/Switcher";
import { hasCaseStudy } from "@/data/caseStudies";
import type { Project } from "@/data/projects";
import { HUE_CLASS } from "@/lib/hue";

/**
 * 대표 프로젝트 한 행 — 큰 화면과 짧은 문제 · 판단 · 결과가 나란하다.
 * 홈과 /work 가 같이 쓴다. 넓은 화면에서 화면이 7, 설명이 5 를 차지하고,
 * flip 이면 좌우를 바꿔 행이 이어질 때 리듬을 만든다. 좁은 화면에서는 화면이 먼저다.
 *
 * 실제 화면이 여러 장(Project.screens)인 프로젝트는 판단 이름으로 화면을 골라 보고,
 * 화면마다 주석이 붙는다. lead 는 대표의 첫 항목 — 화면을 8 로 넓히고 상세 진입을
 * 버튼으로 둔다. 가장 깊이 설명하는 사례다. firstScreen 이면(페이지 첫 화면에 걸리는 행)
 * 대표 화면을 우선 로딩한다.
 *
 * 행마다 배경색이나 카드를 늘리지 않는다. 프로젝트 색은 라벨과 화면 주석에만 쓴다.
 */
export function FeaturedRow({
  project,
  flip = false,
  lead = false,
  firstScreen = false,
}: {
  project: Project;
  flip?: boolean;
  lead?: boolean;
  firstScreen?: boolean;
}) {
  const detail = hasCaseStudy(project.slug);
  const sizes = lead ? "(min-width: 1024px) 64vw, 100vw" : "(min-width: 1024px) 56vw, 100vw";

  return (
    <article aria-labelledby={`project-${project.slug}`} className={project.hue ? HUE_CLASS[project.hue] : undefined}>
      <Container className="grid gap-8 border-t border-rule py-10 md:py-14 lg:grid-cols-12 lg:gap-12">
        <div className={`min-w-0 ${lead ? "lg:col-span-8" : "lg:col-span-7"} ${flip ? "lg:order-2" : ""}`}>
          {project.screens && project.screens.length > 1 ? (
            <Switcher
              name={`screens-${project.slug}`}
              legend={`${project.name} 화면 고르기`}
              options={project.screens.map((screen, i) => ({
                label: screen.label,
                panel: (
                  <Shot
                    src={screen.src}
                    alt={screen.alt}
                    aspectRatio={screen.aspectRatio}
                    position={screen.position}
                    sizes={sizes}
                    preload={firstScreen && i === 0}
                  />
                ),
              }))}
            />
          ) : (
            <ProjectCover project={project} sizes={sizes} preload={firstScreen} />
          )}
        </div>
        <div className={`flex min-w-0 flex-col gap-5 ${lead ? "lg:col-span-4" : "lg:col-span-5"}`}>
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
          {lead && detail ? (
            <div className="flex flex-col items-start gap-1">
              <Link href={`/projects/${project.slug}`} className={BUTTON}>
                {project.name} 작업 과정 읽기
                <span aria-hidden="true">→</span>
              </Link>
              <ProjectLinks project={project} detail={false} />
            </div>
          ) : (
            <ProjectLinks project={project} detail={detail} />
          )}
        </div>
      </Container>
    </article>
  );
}
