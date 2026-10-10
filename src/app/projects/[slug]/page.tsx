import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CaseSection } from "@/components/project/CaseSection";
import { LINK, ProjectLinks, ProjectMetrics } from "@/components/project/ProjectParts";
import { Container } from "@/components/ui/Container";
import { Shot } from "@/components/ui/Shot";
import { CASE_STUDY_SLUGS, PROJECTS_WITH_CASE_STUDY, getCaseStudy, type CaseStudy } from "@/data/caseStudies";
import { PROJECTS, type Project } from "@/data/projects";
import { HUE_CLASS } from "@/lib/hue";

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
 * 상세 첫 화면의 대표 화면. 공개 첫 화면(landing)이 있으면 그것을, 없으면 cover 를 쓴다.
 * cover 가 본문 이미지와 같은 파일이면 그 이미지의 캡션(판단 이유)을 함께 끌어오고,
 * 본문에서는 그 이미지를 다시 그리지 않는다(moved).
 */
function heroImage(project: Project, caseStudy: CaseStudy) {
  if (project.landing) return { ...project.landing, moved: false };
  const src = project.cover?.src;
  if (!src || !project.cover) return null;
  const block = caseStudy.sections
    .flatMap((s) => s.blocks)
    .find((b) => b.type === "image" && b.src === src);
  return {
    ...project.cover,
    src,
    caption: block?.type === "image" ? block.caption : undefined,
    moved: Boolean(block),
  };
}

/**
 * Case Study — 첫 화면에 제목, 출발한 불편, 역할 · 기간 · 팀 · 상태, 대표 화면,
 * 내가 맡은 것 / 팀이 맡은 것을 두고, 섹션별로 판단 → 구현 → 확인한 결과를 읽는다.
 * 긴 문단만 읽기 폭을 지키고, 실제 화면 · 도식 · 데모는 섹션 폭을 쓴다.
 * 넓은 화면에서는 왼쪽에 고정 목차, 좁은 화면에서는 본문 위 인라인 목차를 둔다.
 * 이전·다음은 상세가 있는 프로젝트끼리만 잇는다.
 */
export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!caseStudy || !project) notFound();

  const index = PROJECTS_WITH_CASE_STUDY.indexOf(project);
  const prev = PROJECTS_WITH_CASE_STUDY[index - 1];
  const next = PROJECTS_WITH_CASE_STUDY[index + 1];
  const hero = heroImage(project, caseStudy);
  const facts = [
    { k: "기간", v: project.period },
    { k: "역할", v: project.role },
    { k: "팀", v: project.team },
    { k: "상태", v: project.status },
  ].filter((row) => Boolean(row.v));

  return (
    <article className={project.hue ? HUE_CLASS[project.hue] : undefined}>
      <Container className="flex flex-col gap-10 pt-6 pb-14 md:pt-8 md:pb-16">
        <Link href="/work" className={`${LINK} w-fit text-sm text-ink-2`}>
          <span aria-hidden="true" className="mr-1.5">
            ←
          </span>
          프로젝트 목록
        </Link>

        <header className="grid gap-8 xl:grid-cols-12 xl:gap-12">
          <div className="flex flex-col gap-4 xl:col-span-7">
            {project.category ? <p className="text-sm font-semibold text-hue-deep">{project.category}</p> : null}
            <h1 className="text-display font-bold">{project.name}</h1>
            <p className="max-w-3xl text-xl font-semibold tracking-tight md:text-2xl">{caseStudy.headline}</p>
            <p className="max-w-measure text-ink-2">{caseStudy.summary}</p>
          </div>
          <div className="flex flex-col gap-6 xl:col-span-5 xl:pt-9">
            {project.problem ? (
              <div className="flex max-w-measure flex-col gap-1 border-l-2 border-hue-deep pl-4">
                <p className="text-xs font-semibold tracking-wide text-hue-deep">The Problem</p>
                <p className="text-lead">{project.problem}</p>
              </div>
            ) : null}
            {facts.length ? (
              <dl className="grid grid-cols-2 gap-x-6 gap-y-3 border-t border-rule pt-4">
                {facts.map((row) => (
                  <div key={row.k} className="flex flex-col">
                    <dt className="text-xs text-ink-2">{row.k}</dt>
                    <dd className="text-sm leading-6 tabular-nums">
                      {row.v}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : null}
            {project.links ? (
              <ProjectLinks project={project} detail={false} />
            ) : project.coverWithheld ? (
              <p className="w-fit rounded-chip border border-dashed border-rule-strong px-2.5 py-1 text-xs text-ink-2">
                {project.coverWithheld}
              </p>
            ) : null}
          </div>
        </header>

        {hero ? (
          // 공개 첫 화면(landing)은 판단의 근거라기보다 서비스의 얼굴이라 한 단계 작게 둔다
          <figure className={`flex flex-col gap-3 ${project.landing ? "max-w-4xl" : "max-w-6xl"}`}>
            <Shot
              src={hero.src}
              alt={hero.alt}
              aspectRatio={hero.aspectRatio}
              position={hero.position}
              sizes="(min-width: 1280px) 1152px, 100vw"
              preload
            />
            {hero.caption ? <figcaption className="max-w-measure text-ink">{hero.caption}</figcaption> : null}
          </figure>
        ) : null}

        {project.ownership ? (
          <div className="grid gap-px overflow-hidden rounded-xs border border-rule bg-rule md:grid-cols-2">
            <div className="flex flex-col gap-3 bg-hue-wash p-5 md:p-6">
              <h2 className="font-bold">내가 맡은 것</h2>
              <ul className="flex flex-col gap-2">
                {project.ownership.mine.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.7em] size-1.5 shrink-0 rounded-[1px] bg-hue-deep" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {project.ownership.others ? (
              <div className="flex flex-col gap-3 bg-paper p-5 md:p-6">
                <h2 className="font-bold text-ink-2">팀원 · 다른 파트가 맡은 것</h2>
                <ul className="flex flex-col gap-2 text-ink-2">
                  {project.ownership.others.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="mt-[0.7em] size-1.5 shrink-0 rounded-[1px] border border-ink-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        ) : null}

        <ProjectMetrics project={project} withSource />
      </Container>

      <Container className="pb-20 xl:grid xl:grid-cols-[12rem_minmax(0,1fr)] xl:gap-12">
        <nav aria-label="목차" className="hidden xl:block">
          <ol className="sticky top-6 flex flex-col border-l border-rule">
            {caseStudy.sections.map((s) => (
              <li key={s.num}>
                <a
                  href={`#section-${s.num}`}
                  className="-ml-px flex min-h-9 items-center border-l-2 border-transparent py-1 pl-3 text-sm leading-snug text-ink-2 transition-colors duration-150 hover:border-hue-deep hover:text-ink"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="flex min-w-0 flex-col gap-14">
          <nav aria-label="목차" className="xl:hidden">
            <ol className="flex flex-col border-t border-rule md:grid md:grid-cols-2 md:gap-x-8">
              {caseStudy.sections.map((s) => (
                <li key={s.num} className="border-b border-rule">
                  <a href={`#section-${s.num}`} className="flex min-h-11 items-center text-sm text-ink-2 hover:text-ink">
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          {caseStudy.sections.map((s) => (
            <CaseSection key={s.num} section={s} skipSrc={hero?.moved ? hero.src : undefined} />
          ))}
        </div>
      </Container>

      {prev || next ? (
        <nav aria-label="다른 프로젝트" className="border-t border-rule">
          <Container className="grid gap-px py-6 sm:grid-cols-2">
            {[
              { dir: "이전 프로젝트", p: prev },
              { dir: "다음 프로젝트", p: next },
            ].map(({ dir, p }) =>
              p ? (
                <Link
                  key={dir}
                  href={`/projects/${p.slug}`}
                  className={`${p.hue ? HUE_CLASS[p.hue] : ""} group flex flex-col gap-1 py-4 sm:even:items-end sm:even:text-right`}
                >
                  <span className="text-sm text-ink-2">{dir}</span>
                  <span className="text-lg font-bold underline decoration-rule-strong underline-offset-4 transition-colors duration-150 group-hover:decoration-hue-deep">
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
