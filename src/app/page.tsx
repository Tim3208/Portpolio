import Link from "next/link";

import {
  LINK,
  Labeled,
  ProjectCover,
  ProjectLinks,
  ProjectMeta,
  ProjectMetrics,
} from "@/components/project/ProjectParts";
import { Container } from "@/components/sketch/Container";
import { getCaseStudy, hasCaseStudy } from "@/data/caseStudies";
import { TIMELINE } from "@/data/experiences";
import { PROFILE } from "@/data/profile";
import {
  FEATURED_PROJECTS,
  categoryOf,
  displayTitle,
  ARCHIVE_PROJECTS,
  OTHER_PROJECTS,
  PROJECTS,
  projectsOfKind,
  type Project,
} from "@/data/projects";
import { COMMUNICATION_LEAD, TEACHING_LEAD, TEACHING_METRICS } from "@/data/teaching";
import { SECTION } from "@/lib/sections";

const SECTION_BOX = "flex flex-col gap-8 border-t border-line-strong py-14";

/**
 * 홈 — 스토리형.
 *
 *   소개 → 대표 프로젝트(첫 항목을 가장 크게)
 *   → 일하는 방식 → Communication → Career → 그 밖의 프로젝트 → (layout) 연락처
 *
 * 모든 섹션이 src/data 에서 목록을 받아 그린다. 프로젝트를 추가·승격해도
 * 이 파일은 바뀌지 않는다. 비어 있는 섹션은 그리지 않는다.
 * 섹션 제목은 스케치 단계의 가제다.
 */
export default function HomePage() {
  const [lead, ...rest] = FEATURED_PROJECTS;
  const methods = projectsOfKind("method");
  const teachingTools = projectsOfKind("teaching-tool");
  const shown = new Set([...FEATURED_PROJECTS, ...methods, ...teachingTools].map((p) => p.slug));
  const remaining = PROJECTS.filter((p) => p.tier === "supporting" && !shown.has(p.slug));
  const otherNames = [...ARCHIVE_PROJECTS, ...OTHER_PROJECTS].map((p) => p.name);

  return (
    <Container>
      <section className="flex flex-col gap-5 py-14 md:py-20">
        <h1 className="text-4xl font-bold md:text-5xl">
          {PROFILE.role} {PROFILE.name}
        </h1>
        <p className="max-w-measure text-lg text-ink-2">{PROFILE.tagline}</p>
        <div className="flex flex-wrap gap-x-6">
          <a href={PROFILE.github} target="_blank" rel="noreferrer noopener" className={LINK}>
            GitHub (새 창)
          </a>
          <a href={`#${SECTION.contact}`} className={LINK}>
            연락처
          </a>
        </div>
      </section>

      {lead ? (
        <section aria-labelledby="featured" className={SECTION_BOX}>
          <h2 id="featured" className="text-2xl font-bold">
            직접 겪은 불편에서 시작한 서비스
          </h2>
          <LeadStory project={lead} />
          {rest.map((project) => (
            <RowStory key={project.slug} project={project} />
          ))}
        </section>
      ) : null}

      {methods.length ? (
        <section aria-labelledby="method" className={SECTION_BOX}>
          <h2 id="method" className="text-2xl font-bold">
            일하는 방식: AI-Driven QA &amp; Workflow
          </h2>
          {methods.map((project) => (
            <MethodStory key={project.slug} project={project} />
          ))}
        </section>
      ) : null}

      <section aria-labelledby="teaching" className={SECTION_BOX}>
        <h2 id="teaching" className="text-2xl font-bold">
          Communication
        </h2>
        <p className="max-w-measure text-lg">{COMMUNICATION_LEAD}</p>
        <p className="max-w-measure text-ink-2">{TEACHING_LEAD}</p>
        <dl className="flex flex-wrap gap-x-12 gap-y-4">
          {TEACHING_METRICS.map((m) => (
            <div key={m.label} className="flex flex-col">
              <dt className="order-2 text-sm text-ink-2">{m.label}</dt>
              <dd className="order-1 font-mono text-3xl tabular-nums">{m.value}</dd>
            </div>
          ))}
        </dl>
        {teachingTools.map((project) => (
          <div key={project.slug} className="flex max-w-measure flex-col gap-2 border-l-2 border-line-strong pl-5">
            <p className="text-sm text-ink-2">수업 자료를 만들려고 만든 도구 · {project.name}</p>
            <p>{project.problem}</p>
            <p className="text-ink-2">{project.outcome}</p>
          </div>
        ))}
        <Link href="/teaching" className={LINK}>
          교육 경험 전체 보기
        </Link>
      </section>

      <section aria-labelledby="path" className={SECTION_BOX}>
        <h2 id="path" className="text-2xl font-bold">
          Career
        </h2>
        <ol className="flex flex-col border-t border-line">
          {TIMELINE.map((year) => (
            <li key={year.year} className="grid grid-cols-[4rem_1fr] gap-3 border-b border-line py-2">
              <span className="font-mono tabular-nums">{year.year}</span>
              <span className="text-ink-2">{year.items.map((item) => item.title).join(" · ")}</span>
            </li>
          ))}
        </ol>
        <Link href="/career" className={LINK}>
          경력 · 수상 · 기술 전체 보기
        </Link>
      </section>

      <section aria-labelledby="others" className={`${SECTION_BOX} pb-20`}>
        <h2 id="others" className="text-2xl font-bold">
          그 밖의 프로젝트
        </h2>
        {remaining.length ? (
          <ul className="flex flex-col border-t border-line">
            {remaining.map((p) => (
              <li key={p.slug} className="grid gap-x-4 gap-y-1 border-b border-line py-3 md:grid-cols-[10rem_6rem_1fr]">
                <span className="font-bold">{p.name}</span>
                <span className="text-sm text-ink-2">{categoryOf(p)}</span>
                <span className="text-ink-2">{p.headline}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {otherNames.length ? (
          <p className="text-ink-2">그리고 {otherNames.join(" · ")}</p>
        ) : null}
        <Link href="/work" className={LINK}>
          전체 프로젝트 비교해 보기
        </Link>
      </section>
    </Container>
  );
}

/** 대표의 첫 항목 — 가장 크게. 불편 → 화면 → 판단 → 결과 → 상세. */
function LeadStory({ project }: { project: Project }) {
  return (
    <article className="flex flex-col gap-5 border border-line-strong p-5 md:p-8">
      <StoryHead project={project} />
      <ProjectCover project={project} />
      <Labeled label="Impressive Issue">{project.decision}</Labeled>
      <ProjectMetrics project={project} />
      <Labeled label="Result">{project.outcome}</Labeled>
      <ProjectLinks project={project} detail={hasCaseStudy(project.slug)} />
    </article>
  );
}

/** 나머지 대표 — 이미지와 설명이 나란한 행 */
function RowStory({ project }: { project: Project }) {
  return (
    <article className="grid gap-5 border-t border-line pt-8 md:grid-cols-[2fr_3fr] md:gap-8">
      <ProjectCover project={project} />
      <div className="flex min-w-0 flex-col gap-4">
        <StoryHead project={project} />
        <Labeled label="Impressive Issue">{project.decision}</Labeled>
        <ProjectMetrics project={project} />
        <Labeled label="Result">{project.outcome}</Labeled>
        <ProjectLinks project={project} detail={hasCaseStudy(project.slug)} />
      </div>
    </article>
  );
}

function StoryHead({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-2">
      <Labeled label="The Problem">{project.problem}</Labeled>
      <h3 className="mt-2 text-xl font-bold">{displayTitle(project)}</h3>
      <p>{project.headline}</p>
      <ProjectMeta project={project} />
    </div>
  );
}

/**
 * 일하는 방식 — 서비스 사례와 성격이 다른 블록. 판단·결과 대신 원칙(principles)을
 * 라벨과 함께 보여주고, 흐름은 Case Study 의 첫 흐름 블록을 쓴다.
 */
function MethodStory({ project }: { project: Project }) {
  const flow = getCaseStudy(project.slug)
    ?.sections.flatMap((s) => s.blocks)
    .find((b) => b.type === "flow");

  return (
    <article className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-bold">{project.name}</h3>
        <p className="max-w-measure text-ink-2">{project.subtitle}</p>
      </div>
      {flow?.type === "flow" ? (
        <ol className="flex flex-wrap items-center gap-2">
          {flow.steps.map((step, i) => (
            <li key={step} className="border border-line px-3 py-1 text-sm">
              <span className="mr-2 font-mono text-ink-2">{i + 1}</span>
              {step}
            </li>
          ))}
        </ol>
      ) : null}
      {project.principles?.length ? (
        <dl className="flex max-w-measure flex-col gap-3">
          {project.principles.map((p) => (
            <div key={p.label} className="flex flex-col gap-0.5">
              <dt className="text-sm text-ink-2">{p.label}</dt>
              <dd>{p.text}</dd>
            </div>
          ))}
        </dl>
      ) : (
        <Labeled label="Impressive Issue">{project.decision}</Labeled>
      )}
      <Labeled label="적용">{project.outcome}</Labeled>
      <ProjectLinks project={project} detail={hasCaseStudy(project.slug)} />
    </article>
  );
}
