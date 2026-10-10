import type { Metadata } from "next";

import { Labeled, ProjectLinks } from "@/components/project/ProjectParts";
import { Container } from "@/components/sketch/Container";
import { hasCaseStudy } from "@/data/caseStudies";
import { projectsOfKind } from "@/data/projects";
import {
  TEACHING_ACTIVITIES,
  TEACHING_LEAD,
  TEACHING_METRICS,
  TRANSLATION,
} from "@/data/teaching";

export const metadata: Metadata = {
  title: "교육 경험",
  description:
    "부원 27명의 프론트엔드 교육, 학생 8명의 수학 지도, 캄보디아와 베트남에서 진행한 160시간의 IT 교육.",
  alternates: { canonical: "/teaching" },
  openGraph: {
    title: "교육 경험 — 박정우",
    description:
      "부원 27명의 프론트엔드 교육, 학생 8명의 수학 지도, 캄보디아와 베트남에서 진행한 160시간의 IT 교육.",
    url: "/teaching",
  },
};

const SECTION_TITLE = "text-section font-extrabold tracking-[-0.03em]";

/** 교육 대상과 내용, 확인된 결과를 먼저 보여준다. 수업용으로 만든 도구는 데이터의 kind 로 붙는다. */
export default function TeachingPage() {
  const tools = projectsOfKind("teaching-tool");

  return (
    <Container className="flex flex-col gap-16 pt-12 pb-16 md:pt-16 md:pb-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-title font-extrabold tracking-[-0.04em]">교육 경험</h1>
        <p className="max-w-measure text-xl leading-relaxed font-semibold">{TEACHING_LEAD}</p>
      </div>

      <dl className="grid grid-cols-3 gap-x-4 border-y border-line-strong py-6 sm:flex sm:gap-x-0">
        {TEACHING_METRICS.map((m) => (
          <div key={m.label} className="flex flex-col sm:border-l sm:border-line sm:px-8 sm:first:border-l-0 sm:first:pl-0">
            <dt className="order-2 text-sm leading-snug text-ink-2">{m.label}</dt>
            <dd className="order-1 text-[2.5rem] leading-tight font-extrabold tracking-[-0.03em] tabular-nums">{m.value}</dd>
          </div>
        ))}
      </dl>

      <ul className="flex flex-col">
        {TEACHING_ACTIVITIES.map((activity) => (
          <li
            key={activity.title}
            className="hang grid gap-3 border-t border-line py-8 md:grid-cols-[16rem_1fr] md:gap-8 [--note-top:2.3rem]"
          >
            <p className="margin-note">{activity.period}</p>
            <h2 className="text-xl leading-snug font-extrabold tracking-[-0.02em]">{activity.title}</h2>
            <p className="max-w-measure leading-[1.85] text-ink-2">{activity.detail}</p>
          </li>
        ))}
      </ul>

      {tools.length ? (
        <section aria-labelledby="tools" className="flex flex-col gap-6 border-t border-line-strong pt-10">
          <h2 id="tools" className={SECTION_TITLE}>
            수업 자료를 만들려고 만든 도구
          </h2>
          {tools.map((project) => (
            <article key={project.slug} className="pasted flex max-w-[44rem] flex-col gap-3 p-5 md:p-7">
              <h3 className="text-xl font-extrabold tracking-[-0.02em]">
                <span className="highlight">{project.name}</span>
              </h3>
              <p className="text-ink-2">{project.subtitle}</p>
              <Labeled label="The Problem">{project.problem}</Labeled>
              <Labeled label="한 가지 판단" mark="pen">
                {project.decision}
              </Labeled>
              <Labeled label="확인된 결과">{project.outcome}</Labeled>
              <ProjectLinks project={project} detail={hasCaseStudy(project.slug)} />
            </article>
          ))}
        </section>
      ) : null}

      <section aria-labelledby="translation" className="flex flex-col gap-6 border-t border-line-strong pt-10">
        <h2 id="translation" className={SECTION_TITLE}>
          설명을 맞추는 방법
        </h2>
        <ul className="grid gap-8 md:grid-cols-3">
          {TRANSLATION.map((item) => (
            <li key={item.audience} className="flex flex-col gap-2 border-t border-pen pt-4">
              <h3 className="font-extrabold">{item.audience}</h3>
              <p className="text-ink-2">{item.detail}</p>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}
