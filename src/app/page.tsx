import Link from "next/link";

import {
  EdgeFlag,
  LINK,
  Labeled,
  PenArrow,
  ProjectCover,
  ProjectLinks,
  ProjectMeta,
  ProjectMetrics,
  projectDate,
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

const SECTION_BOX = "flex flex-col gap-8 border-t border-line-strong pt-10 pb-16 md:pt-12 md:pb-20";
/** 첫 섹션은 붙여 둔 첫 화면이 첫 뷰포트 안에 들어오도록 위를 좁힌다 */
const FIRST_SECTION_BOX = "flex flex-col gap-5 border-t border-line-strong pt-6 pb-16 md:pb-20";
const SECTION_TITLE = "text-section font-extrabold tracking-[-0.03em]";

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
      <section className="flex flex-col gap-3 pt-8 pb-7 md:pt-10">
        <h1 className="text-display font-extrabold tracking-[-0.04em]">
          {PROFILE.role} {PROFILE.name}
        </h1>
        <p className="max-w-measure text-lg leading-relaxed font-medium text-pen md:text-xl">{PROFILE.tagline}</p>
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
        <section aria-labelledby="featured" className={FIRST_SECTION_BOX}>
          <h2 id="featured" className={SECTION_TITLE}>
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
          <h2 id="method" className={SECTION_TITLE}>
            일하는 방식: AI-Driven QA &amp; Workflow
          </h2>
          {methods.map((project) => (
            <MethodStory key={project.slug} project={project} />
          ))}
        </section>
      ) : null}

      <section aria-labelledby="teaching" className={SECTION_BOX}>
        <h2 id="teaching" className={SECTION_TITLE}>
          Communication
        </h2>
        <p className="max-w-measure text-xl leading-relaxed font-semibold">{COMMUNICATION_LEAD}</p>
        <p className="max-w-measure text-ink-2">{TEACHING_LEAD}</p>
        <dl className="grid grid-cols-3 gap-x-4 border-y border-line py-5 sm:flex sm:gap-x-0">
          {TEACHING_METRICS.map((m) => (
            <div key={m.label} className="flex flex-col sm:border-l sm:border-line sm:px-8 sm:first:border-l-0 sm:first:pl-0">
              <dt className="order-2 text-sm leading-snug text-ink-2">{m.label}</dt>
              <dd className="order-1 text-[2.5rem] leading-tight font-extrabold tracking-[-0.03em] tabular-nums">{m.value}</dd>
            </div>
          ))}
        </dl>
        {teachingTools.map((project) => (
          <div key={project.slug} className="pasted flex max-w-measure flex-col gap-2 p-5 md:p-6">
            <div className="flex flex-col">
              <h3 className="text-xl font-extrabold tracking-[-0.02em]">{project.name}</h3>
              <p className="text-sm text-ink-2">수업 자료를 만들려고 만든 도구</p>
            </div>
            <p>{project.problem}</p>
            <p className="text-ink-2">{project.outcome}</p>
          </div>
        ))}
        <Link href="/teaching" className={LINK}>
          교육 경험 전체 보기
        </Link>
      </section>

      <section aria-labelledby="path" className={SECTION_BOX}>
        <h2 id="path" className={SECTION_TITLE}>
          Career
        </h2>
        <ol className="flex flex-col">
          {TIMELINE.map((year) => (
            <li
              key={year.year}
              className="hang border-b border-line py-3 [--note-top:1.05rem] first:pt-0 first:[--note-top:0.3rem]"
            >
              <span className="margin-note">{year.year}</span>
              <span className="text-ink-2">{year.items.map((item) => item.title).join(" · ")}</span>
            </li>
          ))}
        </ol>
        <Link href="/career" className={LINK}>
          경력 · 수상 · 기술 전체 보기
        </Link>
      </section>

      <section aria-labelledby="others" className={SECTION_BOX}>
        <h2 id="others" className={SECTION_TITLE}>
          그 밖의 프로젝트
        </h2>
        {remaining.length ? (
          <ul className="flex flex-col border-t border-line">
            {remaining.map((p) => (
              <li key={p.slug} className="grid gap-x-6 gap-y-1 border-b border-line py-4 md:grid-cols-[10rem_9rem_1fr]">
                <span className="font-bold">{p.name}</span>
                <span className="text-sm leading-7 text-ink-3">{categoryOf(p)}</span>
                <span className="text-ink-2">{p.headline}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {otherNames.length ? <p className="text-ink-2">그리고 {otherNames.join(" · ")}</p> : null}
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
    <article
      id={project.slug}
      className="hang flex scroll-mt-6 flex-col gap-5 lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-x-10 lg:gap-y-5"
    >
      <EdgeFlag project={project} />
      <StoryHead project={project} lead className="lg:col-start-1" />
      <div className="lg:col-start-2 lg:row-span-6 lg:row-start-1 lg:self-start">
        <ProjectCover project={project} eager sizes="(min-width: 80rem) 37rem, (min-width: 64rem) 55vw, 100vw" />
      </div>
      <Labeled label="Impressive Issue" mark="pen" hang arrow className="lg:col-start-1">
        {project.decision}
      </Labeled>
      <div className="lg:col-start-1">
        <ProjectMetrics project={project} />
      </div>
      <Labeled label="Result" hang arrow className="lg:col-start-1">
        {project.outcome}
      </Labeled>
      <div className="lg:col-start-1">
        <ProjectLinks project={project} detail={hasCaseStudy(project.slug)} />
      </div>
    </article>
  );
}

/**
 * 나머지 대표 — 설명과 화면이 나란한 행. 설명을 본문 시작선에 붙여 라벨이 여백에 걸리게 하고,
 * 붙여 둔 화면은 오른쪽에 둔다. 좁은 화면에서는 화면이 먼저 나온다.
 */
function RowStory({ project }: { project: Project }) {
  return (
    <article
      id={project.slug}
      className="hang grid scroll-mt-6 gap-5 border-t border-line pt-10 md:grid-cols-[3fr_2fr] md:gap-8 [--flag-top:2.65rem]"
    >
      <EdgeFlag project={project} />
      <div className="md:col-start-2 md:row-start-1 md:pt-1">
        <ProjectCover project={project} sizes="(min-width: 80rem) 25rem, (min-width: 48rem) 40vw, 100vw" />
      </div>
      <div className="flex min-w-0 flex-col gap-4 md:col-start-1 md:row-start-1">
        <StoryHead project={project} />
        <Labeled label="Impressive Issue" mark="pen" hang arrow>
          {project.decision}
        </Labeled>
        <ProjectMetrics project={project} />
        <Labeled label="Result" hang arrow>
          {project.outcome}
        </Labeled>
        <ProjectLinks project={project} detail={hasCaseStudy(project.slug)} />
      </div>
    </article>
  );
}

/** 기록의 머리 — 출발한 불편(여백에 날짜와 함께) → 이름 → 한 줄 → 메타 */
function StoryHead({ project, lead = false, className = "" }: { project: Project; lead?: boolean; className?: string }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <Labeled label="The Problem" hang date={projectDate(project)} className="text-ink-2">
        {project.problem}
      </Labeled>
      <h3
        className={`mt-2 leading-snug font-extrabold ${
          lead ? "text-2xl tracking-[-0.03em] md:text-[2.125rem]" : "text-2xl tracking-[-0.025em]"
        }`}
      >
        <span className="highlight">{displayTitle(project)}</span>
      </h3>
      <p className={lead ? "text-xl" : "text-lg"}>{project.headline}</p>
      <ProjectMeta project={project} skipDate />
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
    <article className="hang flex flex-col gap-6">
      <EdgeFlag project={project} />
      <div className="flex flex-col gap-1">
        <h3 className="text-2xl leading-snug font-extrabold tracking-[-0.025em]">
          <span className="highlight">{project.name}</span>
        </h3>
        <p className="max-w-measure text-ink-2">{project.subtitle}</p>
      </div>
      {flow?.type === "flow" ? (
        <ol aria-label={flow.label ?? "진행 단계"} className="flex flex-wrap items-center gap-y-3">
          {flow.steps.map((step, i) => (
            <li key={step} className="flex items-center">
              <span className="border border-line-strong bg-paper-raised px-3 py-1.5 text-sm font-medium">
                <span className="mr-2 font-mono text-xs text-pen">{i + 1}</span>
                {step}
              </span>
              {/* 화살표는 단계 뒤에 붙인다. 줄이 바뀌어도 화살표가 다음 줄을 가리키며 끝에 남는다. */}
              {i < flow.steps.length - 1 ? <PenArrow className="mx-1.5" /> : null}
            </li>
          ))}
        </ol>
      ) : null}
      {project.principles?.length ? (
        <dl className="grid max-w-[52rem] gap-x-10 gap-y-5 md:grid-cols-2">
          {project.principles.map((p) => (
            <div key={p.label} className="flex flex-col gap-1 border-t border-line pt-3">
              <dt className="text-sm font-semibold text-pen">{p.label}</dt>
              <dd>{p.text}</dd>
            </div>
          ))}
        </dl>
      ) : (
        <Labeled label="Impressive Issue" mark="pen" hang arrow>
          {project.decision}
        </Labeled>
      )}
      <Labeled label="적용" hang arrow>
        {project.outcome}
      </Labeled>
      <ProjectLinks project={project} detail={hasCaseStudy(project.slug)} />
    </article>
  );
}
