import type { Metadata } from "next";

import { CoordinateLabel } from "@/components/project/CoordinateLabel";
import { Labeled, ProjectLinks } from "@/components/project/ProjectParts";
import { Container } from "@/components/ui/Container";
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

const SECTION_TITLE = "text-title font-bold";

/** 교육 대상과 내용, 확인된 결과를 먼저 보여준다. 수업용으로 만든 도구는 데이터의 kind 로 붙는다. */
export default function TeachingPage() {
  const tools = projectsOfKind("teaching-tool");

  return (
    <Container className="hue-sage flex flex-col gap-16 pt-10 pb-20 md:pt-14">
      <header className="grid gap-8 xl:grid-cols-12 xl:gap-12">
        <div className="flex flex-col gap-4 xl:col-span-7">
          <h1 className="text-display font-bold">교육 경험</h1>
          <p className="max-w-measure text-lead text-ink-2">{TEACHING_LEAD}</p>
        </div>
        <dl className="flex flex-wrap content-end gap-x-12 gap-y-4 xl:col-span-5">
          {TEACHING_METRICS.map((m) => (
            <div key={m.label} className="flex flex-col gap-0.5">
              <dt className="order-2 text-sm text-ink-2">{m.label}</dt>
              <dd className="order-1 font-mono text-4xl font-semibold tracking-tight tabular-nums">{m.value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <ul className="flex flex-col">
        {TEACHING_ACTIVITIES.map((activity) => (
          <li
            key={activity.title}
            className="grid gap-3 border-b border-rule py-8 first:border-t lg:grid-cols-12 lg:gap-12"
          >
            <div className="flex flex-col gap-1 lg:col-span-4">
              <h2 className="text-xl font-bold">{activity.title}</h2>
              <p className="text-sm font-semibold text-hue-deep tabular-nums">{activity.period}</p>
            </div>
            <p className="max-w-measure text-ink-2 lg:col-span-8">{activity.detail}</p>
          </li>
        ))}
      </ul>

      {tools.length ? (
        <section aria-labelledby="tools" className="flex flex-col gap-8">
          <h2 id="tools" className={SECTION_TITLE}>
            수업 자료를 만들려고 만든 도구
          </h2>
          {tools.map((project) => (
            <article key={project.slug} className="grid gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="flex flex-col gap-4 lg:col-span-5">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  <p className="text-ink-2">{project.subtitle}</p>
                </div>
                <Labeled label="The Problem">{project.problem}</Labeled>
                <Labeled label="한 가지 판단">{project.decision}</Labeled>
                <Labeled label="확인된 결과">{project.outcome}</Labeled>
                <ProjectLinks project={project} detail={hasCaseStudy(project.slug)} />
              </div>
              <div className="lg:col-span-7">
                <CoordinateLabel />
              </div>
            </article>
          ))}
        </section>
      ) : null}

      <section aria-labelledby="translation" className="flex flex-col gap-6">
        <h2 id="translation" className={SECTION_TITLE}>
          설명을 맞추는 방법
        </h2>
        <ul className="grid gap-px overflow-hidden rounded-xs border border-rule bg-rule md:grid-cols-3">
          {TRANSLATION.map((item) => (
            <li key={item.audience} className="flex flex-col gap-2 bg-paper p-5">
              <h3 className="font-semibold text-hue-deep">{item.audience}</h3>
              <p className="text-ink-2">{item.detail}</p>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}
