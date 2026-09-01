import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { HueScope } from "@/components/layout/HueScope";
import { CaseSection } from "@/components/project/CaseSection";
import { ProjectHero } from "@/components/project/ProjectHero";
import { ProjectNav } from "@/components/project/ProjectNav";
import { CASE_STUDY_SLUGS, getCaseStudy } from "@/data/caseStudies";
import { PROJECTS } from "@/data/projects";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return CASE_STUDY_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!caseStudy || !project) return {};

  const title = `${project.name} — ${caseStudy.headline}`;
  const url = `/projects/${slug}`;

  return {
    title,
    description: caseStudy.summary,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description: caseStudy.summary,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: caseStudy.summary,
    },
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  const project = PROJECTS[index];

  if (!caseStudy || !project) notFound();

  return (
    <HueScope hue={project.hue} as="article">
      <ProjectHero project={project} caseStudy={caseStudy} />

      {/*
        본문 폭 구조 (Blueprint 06)
          목차 160 + 간격 40 + 본문
        폭은 창(1344)이 정한다. 여기서 다시 제한하면 목차가 본문을 눌러
        읽는 폭이 좁아진다.
        목차는 자리가 확보되는 xl 이상에서만 나온다. scroll-spy 는 넣지 않았다 —
        읽는 동안 현재 위치가 바뀌며 깜빡이는 것보다 조용한 편이 낫고,
        그만큼 Server Component 로 남는다.
      */}
      <div className="mx-auto max-w-none px-gutter py-14 md:px-gutter-md md:py-20 lg:px-gutter-lg">
        <div className="xl:grid xl:grid-cols-[10rem_minmax(0,1fr)] xl:gap-10">
          <nav aria-label="목차" className="hidden xl:block">
            <ol className="sticky top-(--chrome-offset) flex flex-col gap-1.5">
              {caseStudy.sections.map((s) => (
                <li key={s.num}>
                  <a
                    href={`#section-${s.num}`}
                    className="flex gap-2.5 py-1 font-mono text-small text-ink-3 transition-colors hover:text-hue-deep"
                  >
                    <span className="tabular-nums">{s.num}</span>
                    <span>{s.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mx-auto flex w-full max-w-break flex-col gap-16 md:gap-24">
            {caseStudy.sections.map((s) => (
              <CaseSection key={s.num} section={s} />
            ))}
          </div>
        </div>
      </div>

      <ProjectNav
        prev={index > 0 ? PROJECTS[index - 1] : undefined}
        next={index < PROJECTS.length - 1 ? PROJECTS[index + 1] : undefined}
      />
    </HueScope>
  );
}
