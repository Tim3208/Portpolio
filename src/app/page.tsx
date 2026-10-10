import Link from "next/link";

import { CoordinateLabel } from "@/components/project/CoordinateLabel";
import { ApprovalResetDemo } from "@/components/project/demos";
import { FeaturedRow } from "@/components/project/FeaturedRow";
import { BUTTON, LINK, Labeled, ProjectLinks } from "@/components/project/ProjectParts";
import { Container } from "@/components/ui/Container";
import { Shot } from "@/components/ui/Shot";
import { Switcher } from "@/components/ui/Switcher";
import { getCaseStudy, hasCaseStudy } from "@/data/caseStudies";
import { TIMELINE } from "@/data/experiences";
import { PROFILE } from "@/data/profile";
import {
  ARCHIVE_PROJECTS,
  FEATURED_PROJECTS,
  OTHER_PROJECTS,
  PROJECTS,
  categoryOf,
  projectsOfKind,
  type Project,
} from "@/data/projects";
import { COMMUNICATION_LEAD, TEACHING_LEAD, TEACHING_METRICS, TRANSLATION } from "@/data/teaching";
import { HUE_CLASS } from "@/lib/hue";
import { SECTION } from "@/lib/sections";

const SECTION_TITLE = "text-title font-bold";

/**
 * 홈 — 스토리형.
 *
 *   소개 + 첫 대표 프로젝트의 실제 화면(한 화면에)
 *   → 나머지 대표 프로젝트 → 일하는 방식 → Communication → Career
 *   → 그 밖의 프로젝트 → (layout) 연락처
 *
 * 모든 섹션이 src/data 에서 목록을 받아 그린다. 프로젝트를 추가·승격해도
 * 이 파일은 바뀌지 않는다. 비어 있는 섹션은 그리지 않는다.
 * 섹션마다 색맥락(.hue-*)은 하나다.
 */
export default function HomePage() {
  const [lead, ...rest] = FEATURED_PROJECTS;
  const methods = projectsOfKind("method");
  const teachingTools = projectsOfKind("teaching-tool");
  const shown = new Set([...FEATURED_PROJECTS, ...methods, ...teachingTools].map((p) => p.slug));
  const remaining = PROJECTS.filter((p) => p.tier === "supporting" && !shown.has(p.slug));
  const otherNames = [...ARCHIVE_PROJECTS, ...OTHER_PROJECTS].map((p) => p.name);

  return (
    <>
      <Container
        className={`${lead?.hue ? HUE_CLASS[lead.hue] : ""} grid gap-10 pt-10 pb-14 md:pt-14 md:pb-16 xl:grid-cols-12 xl:gap-12 xl:pb-20`}
      >
        <div className="flex flex-col gap-7 xl:col-span-5 xl:pt-16">
          <div className="flex flex-col gap-5">
            <h1>
              <span className="block text-lead font-semibold text-ink-2">{PROFILE.role}</span>{" "}
              <span className="mt-1 block text-display font-bold">{PROFILE.name}</span>
            </h1>
            <p className="max-w-[28rem] text-lead text-ink-2">{PROFILE.tagline}</p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <Link href="/work" className={LINK}>
              전체 프로젝트
            </Link>
            <a href={`#${SECTION.contact}`} className={LINK}>
              연락처
            </a>
            <a href={PROFILE.github} target="_blank" rel="noreferrer noopener" className={LINK}>
              GitHub (새 창)
            </a>
          </div>
        </div>
        {lead ? <LeadPreview project={lead} /> : null}
      </Container>

      {rest.length ? (
        <section aria-labelledby="featured">
          <Container className="pt-6 pb-2 md:pt-10">
            <h2 id="featured" className={SECTION_TITLE}>
              직접 겪은 불편에서 시작한 서비스
            </h2>
          </Container>
          {rest.map((project, i) => (
            <FeaturedRow key={project.slug} project={project} flip={i % 2 === 1} />
          ))}
        </section>
      ) : null}

      {methods.map((project) => (
        <MethodSection key={project.slug} project={project} />
      ))}

      <section aria-labelledby="teaching" className="hue-sage border-t border-rule">
        <Container className="flex flex-col gap-12 py-14 md:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col gap-5 lg:col-span-5">
              <h2 id="teaching" className={SECTION_TITLE}>
                Communication
              </h2>
              <p className="max-w-measure text-lead">{COMMUNICATION_LEAD}</p>
              <p className="max-w-measure text-ink-2">{TEACHING_LEAD}</p>
              <dl className="flex flex-wrap gap-x-10 gap-y-4 pt-2">
                {TEACHING_METRICS.map((m) => (
                  <div key={m.label} className="flex flex-col gap-0.5">
                    <dt className="order-2 text-sm text-ink-2">{m.label}</dt>
                    <dd className="order-1 font-mono text-3xl font-semibold tracking-tight tabular-nums">{m.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <ul className="grid gap-px self-start overflow-hidden rounded-xs border border-rule bg-rule lg:col-span-7">
              {TRANSLATION.map((item) => (
                <li key={item.audience} className="grid gap-1 bg-paper p-5 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-6">
                  <h3 className="font-semibold text-hue-deep">{item.audience}</h3>
                  <p className="text-ink-2">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>

          {teachingTools.map((project) => (
            <article
              key={project.slug}
              aria-labelledby={`tool-${project.slug}`}
              className="grid gap-8 border-t border-rule pt-10 lg:grid-cols-12 lg:gap-12"
            >
              <div className="flex flex-col gap-4 lg:col-span-5">
                <p className="text-sm text-ink-2">수업 자료를 만들려고 만든 도구</p>
                <h3 id={`tool-${project.slug}`} className="text-xl font-bold">
                  {project.name}
                </h3>
                <Labeled label="The Problem">{project.problem}</Labeled>
                <Labeled label="한 가지 판단">{project.decision}</Labeled>
                <Labeled label="Result">{project.outcome}</Labeled>
                <ProjectLinks project={project} detail={hasCaseStudy(project.slug)} />
              </div>
              <div className="lg:col-span-7">
                <CoordinateLabel />
              </div>
            </article>
          ))}

          <Link href="/teaching" className={`${LINK} w-fit`}>
            교육 경험 전체 보기
          </Link>
        </Container>
      </section>

      <section aria-labelledby="path" className="hue-wheat border-t border-rule">
        <Container className="grid gap-8 py-14 md:py-20 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col gap-4 lg:col-span-4">
            <h2 id="path" className={SECTION_TITLE}>
              Career
            </h2>
            <Link href="/career" className={`${LINK} w-fit`}>
              경력 · 수상 · 기술 전체 보기
            </Link>
          </div>
          <ol className="flex flex-col lg:col-span-8">
            {TIMELINE.map((year) => (
              <li key={year.year} className="grid grid-cols-[4rem_minmax(0,1fr)] gap-4 border-b border-rule py-3 first:border-t">
                <span className="font-mono text-sm leading-7 text-hue-deep tabular-nums">{year.year}</span>
                <span className="text-ink-2">{year.items.map((item) => item.title).join(" · ")}</span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-labelledby="others" className="border-t border-rule">
        <Container className="grid gap-8 py-14 md:py-20 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col gap-4 lg:col-span-4">
            <h2 id="others" className={SECTION_TITLE}>
              그 밖의 프로젝트
            </h2>
            <Link href="/work" className={`${LINK} w-fit`}>
              전체 프로젝트 비교해 보기
            </Link>
          </div>
          <div className="flex flex-col gap-4 lg:col-span-8">
            {remaining.length ? (
              <ul className="flex flex-col">
                {remaining.map((p) => (
                  <li
                    key={p.slug}
                    className="grid gap-x-6 gap-y-1 border-b border-rule py-3 first:border-t md:grid-cols-[9rem_10rem_minmax(0,1fr)]"
                  >
                    <span className="font-semibold">{p.name}</span>
                    <span className="text-sm leading-7 text-ink-2">{categoryOf(p)}</span>
                    <span className="text-ink-2">{p.headline}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            {otherNames.length ? <p className="text-ink-2">그리고 {otherNames.join(" · ")}</p> : null}
          </div>
        </Container>
      </section>
    </>
  );
}

/**
 * 첫 대표 프로젝트 — 소개 옆에서 실제 화면을 고르며 본다.
 * 화면마다 그 자리에서 내린 판단이 주석으로 붙고, 상세 진입은 머리줄에 둔다.
 * 화면 목록이 없으면 대표 화면 하나만 보여준다.
 */
function LeadPreview({ project }: { project: Project }) {
  const screens = project.screens?.length
    ? project.screens
    : project.cover?.src
      ? [{ label: "대표 화면", ...project.cover, src: project.cover.src }]
      : [];
  const detail = hasCaseStudy(project.slug);
  const sizes = "(min-width: 1280px) 56vw, 100vw";
  const notes = "grid gap-x-6 gap-y-2 md:grid-cols-3";

  return (
    <article aria-labelledby="lead-title" className="flex min-w-0 flex-col gap-5 xl:col-span-7">
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
        <div className="flex flex-col gap-0.5">
          <p className="text-sm text-ink-2">대표 프로젝트{project.status ? ` · ${project.status}` : ""}</p>
          <h2 id="lead-title" className="text-xl font-bold">
            {project.name}
            {project.category ? <span className="ml-2 text-base font-normal text-ink-2">{project.category}</span> : null}
          </h2>
        </div>
        {detail ? (
          <Link href={`/projects/${project.slug}`} className={BUTTON}>
            작업 과정 읽기
            <span aria-hidden="true">→</span>
          </Link>
        ) : null}
      </div>

      {screens.length > 1 ? (
        <Switcher
          name="lead-screens"
          legend={`${project.name} 화면 고르기`}
          options={screens.map((screen, i) => ({
            label: screen.label,
            panel: (
              <Shot
                src={screen.src}
                alt={screen.alt}
                aspectRatio={screen.aspectRatio}
                position={screen.position}
                sizes={sizes}
                preload={i === 0}
                notesClassName={notes}
              />
            ),
          }))}
        />
      ) : screens[0] ? (
        <Shot
          src={screens[0].src}
          alt={screens[0].alt}
          aspectRatio={screens[0].aspectRatio}
          position={screens[0].position}
          sizes={sizes}
          preload
          notesClassName={notes}
        />
      ) : null}

      <div className="grid gap-5 border-t border-rule pt-5 md:grid-cols-3 md:gap-6">
        <Labeled label="The Problem">{project.problem}</Labeled>
        <Labeled label="Impressive Issue">{project.decision}</Labeled>
        <Labeled label="Result">{project.outcome}</Labeled>
      </div>
    </article>
  );
}

/**
 * 일하는 방식 — 서비스 사례와 성격이 다른 블록. 판단·결과 대신 원칙(principles)을
 * 보여주고, 옆에서 승인 무효화 규칙을 직접 바꿔 볼 수 있다.
 */
function MethodSection({ project }: { project: Project }) {
  const flow = getCaseStudy(project.slug)
    ?.sections.flatMap((s) => s.blocks)
    .find((b) => b.type === "flow");

  return (
    <section
      aria-labelledby={`method-${project.slug}`}
      className={`${project.hue ? HUE_CLASS[project.hue] : ""} border-t border-rule bg-hue-wash`}
    >
      <Container className="grid gap-10 py-14 md:py-20 lg:grid-cols-12 lg:gap-12">
        <div className="flex flex-col gap-5 lg:col-span-5">
          <h2 id={`method-${project.slug}`} className={SECTION_TITLE}>
            일하는 방식: AI-Driven QA &amp; Workflow
          </h2>
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-bold">{project.name}</h3>
            <p className="max-w-measure text-ink-2">{project.subtitle}</p>
            <p className="text-sm text-ink-2">{project.role}</p>
          </div>
          {project.principles?.length ? (
            <dl className="flex max-w-measure flex-col gap-4">
              {project.principles.map((p) => (
                <div key={p.label} className="flex flex-col gap-1">
                  <dt className="text-xs font-semibold tracking-wide text-hue-deep">{p.label}</dt>
                  <dd>{p.text}</dd>
                </div>
              ))}
            </dl>
          ) : (
            <Labeled label="Impressive Issue">{project.decision}</Labeled>
          )}
          <Labeled label="적용">{project.outcome}</Labeled>
          <ProjectLinks project={project} detail={hasCaseStudy(project.slug)} />
        </div>

        <div className="flex min-w-0 flex-col gap-6 lg:col-span-7">
          {flow?.type === "flow" ? (
            <div className="flex flex-col gap-3">
              {flow.label ? <p className="text-sm font-semibold text-ink-2">{flow.label}</p> : null}
              <ol className="flex flex-wrap items-center gap-x-1 gap-y-2">
                {flow.steps.map((step, i) => (
                  <li key={step} className="flex items-center gap-1">
                    <span className="rounded-chip border border-rule bg-paper px-2.5 py-1 text-sm">{step}</span>
                    {i < flow.steps.length - 1 ? (
                      <span aria-hidden="true" className="font-mono text-xs text-hue-deep">
                        →
                      </span>
                    ) : null}
                  </li>
                ))}
              </ol>
            </div>
          ) : null}
          <ApprovalResetDemo name={`home-${project.slug}`} />
        </div>
      </Container>
    </section>
  );
}
