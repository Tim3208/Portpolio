import type { Metadata } from "next";
import Link from "next/link";

import { Flag } from "@/components/project/ProjectParts";
import { Container } from "@/components/sketch/Container";
import { PROJECTS_WITH_CASE_STUDY } from "@/data/caseStudies";
import { PAGES } from "@/lib/pages";

export const metadata: Metadata = {
  title: "새 탭",
  robots: { index: false, follow: true },
};

const ROW =
  "group grid min-h-14 grid-cols-[1fr_auto] items-center gap-4 border-b border-line py-3 hover:border-pen";

/**
 * 새 탭 시작 페이지 — 노트 앞장의 목차. 창의 "새 탭" 버튼이 연다.
 * 주소창이 비어 있고 초점을 받는다(Toolbar). 본문에는 사이트 안 바로가기만 둔다.
 */
export default function NewTabPage() {
  return (
    <Container className="flex flex-col gap-12 pt-12 pb-16 md:pt-16 md:pb-20">
      <div className="flex flex-col gap-3">
        <h1 className="text-title font-extrabold tracking-[-0.04em]">새 탭</h1>
        <p className="text-ink-2">위 주소창에 경로를 입력하거나 아래에서 페이지를 고르세요.</p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <section aria-labelledby="pages" className="flex flex-col gap-3">
          <h2 id="pages" className="text-lg font-extrabold">
            페이지
          </h2>
          <ul className="flex flex-col border-t border-line-strong">
            {PAGES.map((page) => (
              <li key={page.href}>
                <Link href={page.href} className={ROW}>
                  <span className="font-bold group-hover:text-pen">{page.label}</span>
                  <span className="font-mono text-[0.8125rem] text-ink-3">{page.href}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="case-studies" className="flex flex-col gap-3">
          <h2 id="case-studies" className="text-lg font-extrabold">
            프로젝트
          </h2>
          <ul className="flex flex-col border-t border-line-strong">
            {PROJECTS_WITH_CASE_STUDY.map((project) => (
              <li key={project.slug}>
                <Link href={`/projects/${project.slug}`} className={ROW}>
                  <span className="flex items-center gap-2.5 font-bold group-hover:text-pen">
                    <Flag project={project} />
                    {project.name}
                  </span>
                  <span className="font-mono text-[0.8125rem] text-ink-3">/projects/{project.slug}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Container>
  );
}
