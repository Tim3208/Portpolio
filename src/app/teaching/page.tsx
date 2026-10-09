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

/** 교육 대상과 내용, 확인된 결과를 먼저 보여준다. 수업용으로 만든 도구는 데이터의 kind 로 붙는다. */
export default function TeachingPage() {
  const tools = projectsOfKind("teaching-tool");

  return (
    <Container className="flex flex-col gap-14 py-14 md:py-20">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">교육 경험</h1>
        <p className="max-w-measure text-lg text-ink-2">{TEACHING_LEAD}</p>
      </div>

      <dl className="flex flex-wrap gap-x-12 gap-y-4 border-t border-line-strong pt-6">
        {TEACHING_METRICS.map((m) => (
          <div key={m.label} className="flex flex-col">
            <dt className="order-2 text-sm text-ink-2">{m.label}</dt>
            <dd className="order-1 font-mono text-3xl tabular-nums">{m.value}</dd>
          </div>
        ))}
      </dl>

      <ul className="flex flex-col">
        {TEACHING_ACTIVITIES.map((activity) => (
          <li
            key={activity.title}
            className="grid gap-3 border-t border-line py-8 md:grid-cols-[16rem_1fr] md:gap-8"
          >
            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-bold">{activity.title}</h2>
              <p className="font-mono text-sm text-ink-2">{activity.period}</p>
            </div>
            <p className="max-w-measure text-ink-2">{activity.detail}</p>
          </li>
        ))}
      </ul>

      {tools.length ? (
        <section aria-labelledby="tools" className="flex flex-col gap-6 border-t border-line-strong pt-8">
          <h2 id="tools" className="text-2xl font-bold">
            수업 자료를 만들려고 만든 도구
          </h2>
          {tools.map((project) => (
            <article key={project.slug} className="flex max-w-measure flex-col gap-3">
              <h3 className="text-lg font-bold">{project.name}</h3>
              <p className="text-ink-2">{project.subtitle}</p>
              <Labeled label="The Problem">{project.problem}</Labeled>
              <Labeled label="한 가지 판단">{project.decision}</Labeled>
              <Labeled label="확인된 결과">{project.outcome}</Labeled>
              <ProjectLinks project={project} detail={hasCaseStudy(project.slug)} />
            </article>
          ))}
        </section>
      ) : null}

      <section aria-labelledby="translation" className="flex flex-col gap-6 border-t border-line-strong pt-8">
        <h2 id="translation" className="text-2xl font-bold">
          설명을 맞추는 방법
        </h2>
        <ul className="grid gap-8 md:grid-cols-3">
          {TRANSLATION.map((item) => (
            <li key={item.audience} className="flex flex-col gap-2">
              <h3 className="font-bold">{item.audience}</h3>
              <p className="text-ink-2">{item.detail}</p>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}
