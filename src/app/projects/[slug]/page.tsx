import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CaseSection } from "@/components/project/CaseSection";
import { EdgeFlag, Flag, Labeled, ProjectLinks, ProjectMetrics } from "@/components/project/ProjectParts";
import { Shot } from "@/components/project/Shot";
import { Container } from "@/components/sketch/Container";
import { CASE_STUDY_SLUGS, PROJECTS_WITH_CASE_STUDY, getCaseStudy } from "@/data/caseStudies";
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

/**
 * Case Study — 한 프로젝트의 연구 기록.
 * 첫 화면에 문제와 본인 역할(내가 맡은 것 / 팀이 맡은 것)을 두고,
 * 섹션별로 판단 → 구현 → 실패 대응 → 확인한 결과를 읽는다.
 * 넓은 화면에서는 왼쪽 여백에 목차를 둔다. 이전·다음은 상세가 있는 프로젝트끼리만 잇는다.
 */
export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!caseStudy || !project) notFound();

  const index = PROJECTS_WITH_CASE_STUDY.indexOf(project);
  const prev = PROJECTS_WITH_CASE_STUDY[index - 1];
  const next = PROJECTS_WITH_CASE_STUDY[index + 1];

  return (
    <article className="figures">
      <Container className="flex flex-col gap-6 pt-8 pb-14 md:pt-10 md:pb-16">
        <Link href="/work" className="inline-flex min-h-11 items-center self-start text-sm text-ink-2 underline underline-offset-[0.3em] hover:text-pen">
          프로젝트 목록
        </Link>

        <div className="hang flex flex-col gap-2 [--flag-top:0.35rem] [--note-top:1.1rem]">
          <EdgeFlag project={project} />
          {project.period ? <p className="margin-note">{project.period}</p> : null}
          <h1 className="text-title font-extrabold tracking-[-0.04em]">{project.name}</h1>
          {project.category ? <p className="text-ink-3">{project.category}</p> : null}
        </div>

        <p className="max-w-[48rem] text-2xl leading-snug font-bold tracking-[-0.02em]">
          <span className="highlight">{caseStudy.headline}</span>
        </p>
        <p className="max-w-measure leading-[1.85] text-ink-2">{caseStudy.summary}</p>

        <Labeled label="The Problem" hang className="text-lg leading-relaxed">
          {project.problem}
        </Labeled>

        <dl className="grid grid-cols-2 gap-x-8 gap-y-4 border-t border-line-strong pt-5 md:flex md:flex-wrap">
          {/* 기간은 제목 옆 여백에 걸려 있다 */}
          {[
            { k: "역할", v: project.role },
            { k: "팀", v: project.team },
            { k: "상태", v: project.status },
          ]
            .filter((row) => Boolean(row.v))
            .map((row) => (
              <div key={row.k} className="flex flex-col">
                <dt className="text-sm text-ink-3">{row.k}</dt>
                <dd className="font-semibold">{row.v}</dd>
              </div>
            ))}
        </dl>

        {project.ownership ? (
          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            <div className="pasted flex flex-col gap-3 p-5 md:p-6">
              <h2 className="text-lg font-extrabold">내가 맡은 것</h2>
              <ul className="flex list-[square] flex-col gap-1.5 pl-5 marker:text-pen">
                {project.ownership.mine.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            {project.ownership.others ? (
              <div className="flex flex-col gap-3 border border-dashed border-line p-5 md:p-6">
                <h2 className="text-lg font-extrabold text-ink-2">팀원 · 다른 파트가 맡은 것</h2>
                <ul className="flex list-[square] flex-col gap-1.5 pl-5 text-ink-2 marker:text-ink-3">
                  {project.ownership.others.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        ) : null}

        <ProjectMetrics project={project} withSource />

        {project.links ? (
          <ProjectLinks project={project} detail={false} />
        ) : project.coverWithheld ? (
          <p className="text-sm text-ink-3">{project.coverWithheld}</p>
        ) : null}

        {project.slug === "syu-likelion" ? (
          <figure className="mt-4 flex flex-col gap-3">
            <Shot
              src="/images/projects/syu-likelion.png"
              alt="syu-likelion의 14기 모집 안내 화면. 지원하기 버튼과 동아리 소개가 보인다."
              ratio="1600 / 1079"
              sizes="(min-width: 80rem) 64rem, (min-width: 48rem) 80vw, 100vw"
              eager
            />
            <figcaption className="max-w-measure text-sm leading-relaxed text-ink-2">
              모집 안내에서 지원서를 작성하고, 합격 후에는 같은 계정으로 동아리 활동을 이어갑니다.
            </figcaption>
          </figure>
        ) : null}
      </Container>

      <Container className="pb-20">
        <div className="xl:-ml-[calc(var(--margin-w)+var(--gap))] xl:grid xl:grid-cols-[var(--margin-w)_minmax(0,1fr)] xl:gap-x-(--gap)">
          <nav aria-label="목차" className="hidden xl:block">
            <ol className="sticky top-6 flex flex-col border-t border-pen pt-3 text-right">
              {caseStudy.sections.map((s) => (
                <li key={s.num}>
                  <a
                    href={`#section-${s.num}`}
                    className="flex min-h-10 items-center justify-end py-1 text-[0.8125rem] leading-snug text-pen underline-offset-[0.3em] hover:underline"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <div className="flex min-w-0 flex-col gap-14">
            {caseStudy.sections.map((s) => (
              <CaseSection key={s.num} section={s} />
            ))}
          </div>
        </div>
      </Container>

      {prev || next ? (
        <nav aria-label="다른 프로젝트" className="border-t border-line-strong">
          <Container className="grid gap-px py-6 sm:grid-cols-2">
            {[
              { dir: "이전 프로젝트", p: prev },
              { dir: "다음 프로젝트", p: next },
            ].map(({ dir, p }) =>
              p ? (
                <Link
                  key={dir}
                  href={`/projects/${p.slug}`}
                  className="group flex flex-col gap-1 py-4 sm:even:items-end sm:even:text-right"
                >
                  <span className="text-sm text-ink-3">{dir}</span>
                  <span className="flex items-center gap-2 text-xl font-extrabold tracking-[-0.02em] underline decoration-ink/30 underline-offset-[0.3em] group-hover:text-pen group-hover:decoration-pen">
                    <Flag project={p} />
                    {p.name}
                  </span>
                  <span className="text-sm text-ink-2">{p.headline}</span>
                </Link>
              ) : (
                <span key={dir} />
              ),
            )}
          </Container>
        </nav>
      ) : null}
    </article>
  );
}
