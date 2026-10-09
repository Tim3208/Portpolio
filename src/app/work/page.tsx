import type { Metadata } from "next";
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
import { hasCaseStudy } from "@/data/caseStudies";
import {
  FEATURED_PROJECTS,
  categoryOf,
  displayTitle,
  ARCHIVE_PROJECTS,
  OTHER_PROJECTS,
  SUPPORTING_PROJECTS,
} from "@/data/projects";

export const metadata: Metadata = {
  title: "프로젝트",
  description:
    "동아리 모집·운영 플랫폼, 축제 서비스, 캠퍼스 지도, 게임 일정 대시보드와 개발 도구·교육 도구의 구현 과정과 담당 역할.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "프로젝트 — 박정우",
    description:
      "동아리 모집·운영 플랫폼, 축제 서비스, 캠퍼스 지도, 게임 일정 대시보드와 개발 도구·교육 도구의 구현 과정과 담당 역할.",
    url: "/work",
  },
};

/**
 * 프로젝트 전체 목록. 층은 데이터의 tier 가 정한다.
 *   대표 — 화면과 판단, 결과를 크게
 *   보조 — 나의 역할 · 프로젝트 소개 · 확인된 결과를 같은 칸에 맞춰 비교 (판단은 상세 페이지에서)
 *   그 밖의 프로젝트 — 이름과 기능만
 */
export default function WorkPage() {
  // 기타 프로젝트: 상세가 있지만 짧게 두는 archive 층 + 상세 근거가 없는 작업.
  // 같은 양식(이름 · 보조 이름 · 한 줄 · 기능 · 역할 · 링크)으로 맞춘다.
  const otherItems = [
    ...ARCHIVE_PROJECTS.map((p) => ({
      key: p.slug,
      name: p.name,
      fullName: undefined,
      summary: p.subtitle,
      detail: p.headline,
      role: p.role,
      link: hasCaseStudy(p.slug) ? { href: `/projects/${p.slug}`, internal: true, text: "" } : undefined,
    })),
    ...OTHER_PROJECTS.map((p) => ({
      key: p.name,
      name: p.name,
      fullName: p.fullName,
      summary: p.summary,
      detail: p.features.join(" · "),
      role: p.role,
      link: p.links?.service
        ? { href: p.links.service, internal: false, text: "사이트" }
        : p.links?.github
          ? { href: p.links.github, internal: false, text: "GitHub" }
          : undefined,
    })),
  ];

  return (
    <Container className="flex flex-col gap-16 py-14 md:py-20">
      <h1 className="text-4xl font-bold">프로젝트</h1>

      <section aria-labelledby="featured" className="flex flex-col gap-6">
        <h2 id="featured" className="text-2xl font-bold">
          Featured Projects
        </h2>
        <ul className="flex flex-col">
          {FEATURED_PROJECTS.map((project) => (
            <li
              key={project.slug}
              className="grid gap-6 border-t border-line-strong py-10 md:grid-cols-[2fr_3fr] md:gap-10"
            >
              <ProjectCover project={project} />
              <div className="flex min-w-0 flex-col gap-3">
                <h3 className="text-2xl font-bold">{displayTitle(project)}</h3>
                <p className="text-lg">{project.headline}</p>
                <Labeled label="프로젝트 소개">{project.subtitle}</Labeled>
                <ProjectMeta project={project} />
                {project.technologies ? (
                  <p className="font-mono text-sm text-ink-2">{project.technologies.join(" · ")}</p>
                ) : null}
                <Labeled label="Impressive Issue">{project.decision}</Labeled>
                <ProjectMetrics project={project} />
                <ProjectLinks project={project} detail={hasCaseStudy(project.slug)} />
              </div>
            </li>
          ))}
        </ul>
      </section>

      {SUPPORTING_PROJECTS.length ? (
        <section aria-labelledby="supporting" className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 id="supporting" className="text-2xl font-bold">
              Additional Projects
            </h2>
            <p className="text-ink-2">개발 방식, 개발 중인 서비스, 교육 도구처럼 성격이 다른 작업입니다.</p>
          </div>
          {/* 넓은 화면에서는 같은 칸끼리 세로로 맞춰 비교하고, 좁은 화면에서는 칸 이름을 붙여 쌓는다. */}
          <div
            aria-hidden="true"
            className="hidden border-b border-line-strong pb-2 text-sm text-ink-2 lg:grid lg:grid-cols-[12rem_1fr_1fr_1fr] lg:gap-6"
          >
            <span>프로젝트</span>
            <span>나의 역할</span>
            <span>프로젝트 소개</span>
            <span>확인된 결과</span>
          </div>
          <ul className="flex flex-col">
            {SUPPORTING_PROJECTS.map((project) => (
              <li
                key={project.slug}
                className="grid gap-3 border-b border-line py-6 lg:grid-cols-[12rem_1fr_1fr_1fr] lg:gap-6"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-ink-2">{categoryOf(project)}</span>
                  <h3 className="text-lg font-bold">{project.name}</h3>
                  <p className="text-sm text-ink-2">{project.headline}</p>
                </div>
                <Cell label="나의 역할">{project.role}</Cell>
                <Cell label="프로젝트 소개">{project.subtitle}</Cell>
                <Cell label="확인된 결과">{project.outcome}</Cell>
                <div className="lg:col-span-4">
                  <ProjectLinks project={project} detail={hasCaseStudy(project.slug)} />
                </div>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {otherItems.length ? (
        <section aria-labelledby="others" className="flex flex-col gap-6">
          <h2 id="others" className="text-2xl font-bold">
            그 밖의 프로젝트
          </h2>
          {/* 기본은 접어 둔다. 대표·보조의 무게를 흐리지 않고, 네이티브 details 라
              JS 없이 열리며 키보드·스크린리더 상태 안내도 브라우저가 맡는다. */}
          <details className="group border-t border-line">
            <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 pt-4 [&::-webkit-details-marker]:hidden">
              <span className="underline underline-offset-4 group-open:hidden">기타 프로젝트 펼쳐보기</span>
              <span className="hidden underline underline-offset-4 group-open:inline">기타 프로젝트 접기</span>
              <span className="font-mono text-sm text-ink-2">{otherItems.length}</span>
            </summary>
            <ul className="mt-6 grid gap-x-10 sm:grid-cols-2">
              {otherItems.map((item) => (
                <li key={item.key} className="flex flex-col gap-2 border-t border-line py-5">
                  <h3 className="text-lg font-bold">
                    {item.name}
                    {item.fullName ? (
                      <span className="ml-2 text-sm font-normal text-ink-2">{item.fullName}</span>
                    ) : null}
                  </h3>
                  <p>{item.summary}</p>
                  <p className="text-sm text-ink-2">{item.detail}</p>
                  {item.role ? <p className="text-sm text-ink-2">{item.role}</p> : null}
                  {item.link?.internal ? (
                    <Link href={item.link.href} className={`${LINK} text-sm`}>
                      작업 과정 읽기
                    </Link>
                  ) : item.link ? (
                    <a href={item.link.href} target="_blank" rel="noreferrer noopener" className={`${LINK} text-sm`}>
                      {item.link.text} (새 창)
                    </a>
                  ) : null}
                </li>
              ))}
            </ul>
          </details>
        </section>
      ) : null}
    </Container>
  );
}

/** 비교 칸. 좁은 화면에서만 칸 이름을 보여준다(넓은 화면은 머리줄이 대신한다). */
function Cell({ label, children }: { label: string; children?: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-sm text-ink-2 lg:sr-only">{label}</span>
      <p>{children ?? "—"}</p>
    </div>
  );
}
