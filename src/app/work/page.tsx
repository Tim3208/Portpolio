import type { Metadata } from "next";
import Link from "next/link";

import { FeaturedRow } from "@/components/project/FeaturedRow";
import { LINK, ProjectLinks } from "@/components/project/ProjectParts";
import { Container } from "@/components/ui/Container";
import { hasCaseStudy } from "@/data/caseStudies";
import {
  ARCHIVE_PROJECTS,
  FEATURED_PROJECTS,
  OTHER_PROJECTS,
  SUPPORTING_PROJECTS,
  categoryOf,
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
 *   대표 — 큰 화면과 문제 · 판단 · 결과가 나란한 행
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
    <>
      <Container className="pt-10 pb-8 md:pt-14">
        <h1 className="text-display font-bold">프로젝트</h1>
      </Container>

      <section aria-labelledby="featured">
        <Container className="pb-2">
          <h2 id="featured" className="text-title font-bold">
            Featured Projects
          </h2>
        </Container>
        {FEATURED_PROJECTS.map((project, i) => (
          <FeaturedRow key={project.slug} project={project} flip={i % 2 === 1} />
        ))}
      </section>

      {SUPPORTING_PROJECTS.length ? (
        <section aria-labelledby="supporting" className="border-t border-rule">
          <Container className="flex flex-col gap-6 py-14 md:py-20">
            <div className="flex flex-col gap-2">
              <h2 id="supporting" className="text-title font-bold">
                Additional Projects
              </h2>
              <p className="max-w-measure text-ink-2">개발 방식, 개발 중인 서비스, 교육 도구처럼 성격이 다른 작업입니다.</p>
            </div>
            {/* 넓은 화면에서는 같은 칸끼리 세로로 맞춰 비교하고, 좁은 화면에서는 칸 이름을 붙여 쌓는다. */}
            <div
              aria-hidden="true"
              className="hidden border-b border-rule-strong pb-2 text-sm text-ink-2 lg:grid lg:grid-cols-[13rem_1fr_1fr_1fr] lg:gap-8"
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
                  className="grid gap-3 border-b border-rule py-6 lg:grid-cols-[13rem_1fr_1fr_1fr] lg:gap-8"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-ink-2">{categoryOf(project)}</span>
                    <h3 className="text-lg font-bold">{project.name}</h3>
                    <p className="text-sm text-ink-2">{project.headline}</p>
                  </div>
                  <Cell label="나의 역할">{project.role}</Cell>
                  <Cell label="프로젝트 소개">{project.subtitle}</Cell>
                  <Cell label="확인된 결과">{project.outcome}</Cell>
                  <div className="lg:col-span-4 lg:col-start-2">
                    <ProjectLinks project={project} detail={hasCaseStudy(project.slug)} />
                  </div>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      {otherItems.length ? (
        <section aria-labelledby="others" className="border-t border-rule">
          <Container className="flex flex-col gap-4 py-14 md:py-20">
            <h2 id="others" className="text-title font-bold">
              그 밖의 프로젝트
            </h2>
            {/* 기본은 접어 둔다. 대표·보조의 무게를 흐리지 않고, 네이티브 details 라
                JS 없이 열리며 키보드·스크린리더 상태 안내도 브라우저가 맡는다. */}
            <details className="group">
              <summary className="flex min-h-11 w-fit cursor-pointer list-none items-center gap-2 [&::-webkit-details-marker]:hidden">
                <span className="underline decoration-rule-strong underline-offset-4 group-open:hidden">
                  기타 프로젝트 펼쳐보기
                </span>
                <span className="hidden underline decoration-rule-strong underline-offset-4 group-open:inline">
                  기타 프로젝트 접기
                </span>
                <span className="rounded-chip bg-paper-sunk px-1.5 font-mono text-xs text-ink-2">{otherItems.length}</span>
              </summary>
              <ul className="mt-4 grid gap-x-10 sm:grid-cols-2 xl:grid-cols-3">
                {otherItems.map((item) => (
                  <li key={item.key} className="flex flex-col gap-2 border-t border-rule py-5">
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
                      <Link href={item.link.href} className={`${LINK} w-fit text-sm`}>
                        작업 과정 읽기
                      </Link>
                    ) : item.link ? (
                      <a href={item.link.href} target="_blank" rel="noreferrer noopener" className={`${LINK} w-fit text-sm`}>
                        {item.link.text} (새 창)
                      </a>
                    ) : null}
                  </li>
                ))}
              </ul>
            </details>
          </Container>
        </section>
      ) : null}
    </>
  );
}

/** 비교 칸. 좁은 화면에서만 칸 이름을 보여준다(넓은 화면은 머리줄이 대신한다). */
function Cell({ label, children }: { label: string; children?: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-xs font-semibold text-ink-2 lg:sr-only">{label}</span>
      <p>{children ?? "—"}</p>
    </div>
  );
}
