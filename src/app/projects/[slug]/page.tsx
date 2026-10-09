import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CaseSection } from "@/components/project/CaseSection";
import { LINK, ProjectLinks, ProjectMetrics } from "@/components/project/ProjectParts";
import { Container } from "@/components/sketch/Container";
import { Placeholder } from "@/components/sketch/Placeholder";
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
 * Case Study — 첫 화면에 문제와 본인 역할(내가 맡은 것 / 팀이 맡은 것)을 두고,
 * 섹션별로 판단 → 구현 → 실패 대응 → 확인한 결과를 읽는다.
 * 넓은 화면에서는 왼쪽에 목차를 둔다. 이전·다음은 상세가 있는 프로젝트끼리만 잇는다.
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
    <article>
      <Container className="flex flex-col gap-5 py-14 md:py-20">
        <Link href="/work" className={`${LINK} text-sm`}>
          프로젝트 목록
        </Link>
        <div className="flex flex-col gap-1">
          {project.category ? <p className="text-ink-2">{project.category}</p> : null}
          <h1 className="text-4xl font-bold md:text-5xl">{project.name}</h1>
        </div>
        <p className="text-xl">{caseStudy.headline}</p>
        <p className="max-w-measure text-ink-2">{caseStudy.summary}</p>

        {project.problem ? (
          <div className="flex max-w-measure flex-col gap-0.5 border-l-2 border-line-strong pl-5">
            <p className="text-sm text-ink-2">The Problem</p>
            <p className="text-lg">{project.problem}</p>
          </div>
        ) : null}

        <dl className="flex flex-wrap gap-x-8 gap-y-3 border-t border-line-strong pt-5">
          {[
            { k: "기간", v: project.period },
            { k: "역할", v: project.role },
            { k: "팀", v: project.team },
            { k: "상태", v: project.status },
          ]
            .filter((row) => Boolean(row.v))
            .map((row) => (
              <div key={row.k}>
                <dt className="text-sm text-ink-2">{row.k}</dt>
                <dd>{row.v}</dd>
              </div>
            ))}
        </dl>

        {project.ownership ? (
          <div className="grid gap-6 border border-line p-5 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <h2 className="font-bold">내가 맡은 것</h2>
              <ul className="list-disc pl-5 text-ink-2">
                {project.ownership.mine.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            {project.ownership.others ? (
              <div className="flex flex-col gap-2">
                <h2 className="font-bold">팀원 · 다른 파트가 맡은 것</h2>
                <ul className="list-disc pl-5 text-ink-2">
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
          <p className="text-sm text-ink-2">{project.coverWithheld}</p>
        ) : null}

        {project.slug === "syu-likelion" ? (
          <figure className="mt-4 flex flex-col gap-2">
            <Placeholder
              label="syu-likelion 14기 모집 안내 화면"
              description="syu-likelion의 14기 모집 안내 화면. 지원하기 버튼과 동아리 소개가 보인다."
            />
            <figcaption className="text-sm text-ink-2">
              모집 안내에서 지원서를 작성하고, 합격 후에는 같은 계정으로 동아리 활동을 이어갑니다.
            </figcaption>
          </figure>
        ) : null}
      </Container>

      <Container className="pb-20 xl:grid xl:grid-cols-[11rem_minmax(0,1fr)] xl:gap-10">
        <nav aria-label="목차" className="hidden xl:block">
          <ol className="sticky top-6 flex flex-col border-t border-line pt-4">
            {caseStudy.sections.map((s) => (
              <li key={s.num}>
                <a href={`#section-${s.num}`} className="flex min-h-10 items-center text-sm underline-offset-4 hover:underline">
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
      </Container>

      {prev || next ? (
        <nav aria-label="다른 프로젝트" className="border-t border-line-strong">
          <Container className="grid gap-px py-6 sm:grid-cols-2">
            {[
              { dir: "이전 프로젝트", p: prev },
              { dir: "다음 프로젝트", p: next },
            ].map(({ dir, p }) =>
              p ? (
                <Link key={dir} href={`/projects/${p.slug}`} className="flex flex-col gap-1 py-4 sm:even:text-right">
                  <span className="text-sm text-ink-2">{dir}</span>
                  <span className="text-lg font-bold underline underline-offset-4">{p.name}</span>
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
