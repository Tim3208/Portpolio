import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/sketch/Container";
import { PROJECTS_WITH_CASE_STUDY } from "@/data/caseStudies";
import { PAGES } from "@/lib/pages";

export const metadata: Metadata = {
  title: "새 탭",
  robots: { index: false, follow: true },
};

const TILE = "flex min-h-24 flex-col justify-center gap-1 border border-line-strong p-4";

/**
 * 새 탭 시작 페이지. 창의 "새 탭" 버튼이 연다.
 * 주소창이 비어 있고 초점을 받는다(Toolbar). 본문에는 사이트 안 바로가기만 둔다.
 */
export default function NewTabPage() {
  return (
    <Container className="flex flex-col gap-10 py-14 md:py-20">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">새 탭</h1>
        <p className="text-ink-2">위 주소창에 경로를 입력하거나 아래에서 페이지를 고르세요.</p>
      </div>

      <section aria-labelledby="pages" className="flex flex-col gap-4">
        <h2 id="pages" className="text-lg font-bold">
          페이지
        </h2>
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {PAGES.map((page) => (
            <li key={page.href}>
              <Link href={page.href} className={TILE}>
                <span className="font-bold">{page.label}</span>
                <span className="font-mono text-xs text-ink-2">{page.href}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="case-studies" className="flex flex-col gap-4">
        <h2 id="case-studies" className="text-lg font-bold">
          프로젝트
        </h2>
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {PROJECTS_WITH_CASE_STUDY.map((project) => (
            <li key={project.slug}>
              <Link href={`/projects/${project.slug}`} className={TILE}>
                <span className="font-bold">{project.name}</span>
                <span className="font-mono text-xs text-ink-2">/projects/{project.slug}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}
