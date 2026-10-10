import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { PROJECTS_WITH_CASE_STUDY } from "@/data/caseStudies";
import { HUE_CLASS } from "@/lib/hue";
import { PAGES } from "@/lib/pages";

export const metadata: Metadata = {
  title: "새 탭",
  robots: { index: false, follow: true },
};

const TILE =
  "flex min-h-24 flex-col justify-between gap-3 rounded-xs border border-rule bg-paper-raised p-4 transition-colors duration-150 hover:border-hue-deep";

/**
 * 새 탭 시작 페이지. 창의 "새 탭" 버튼이 연다.
 * 주소창이 비어 있고 초점을 받는다(Toolbar). 본문에는 사이트 안 바로가기만 둔다.
 */
export default function NewTabPage() {
  return (
    <Container className="flex flex-col gap-12 py-14 md:py-20">
      <div className="flex flex-col gap-2">
        <h1 className="text-title font-bold">새 탭</h1>
        <p className="text-ink-2">위 주소창에 경로를 입력하거나 아래에서 페이지를 고르세요.</p>
      </div>

      <section aria-labelledby="pages" className="flex flex-col gap-4">
        <h2 id="pages" className="text-sm font-semibold text-ink-2">
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
        <h2 id="case-studies" className="text-sm font-semibold text-ink-2">
          프로젝트
        </h2>
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-4 xl:grid-cols-6">
          {PROJECTS_WITH_CASE_STUDY.map((project) => (
            <li key={project.slug} className={project.hue ? HUE_CLASS[project.hue] : undefined}>
              <Link href={`/projects/${project.slug}`} className={TILE}>
                <span aria-hidden="true" className="h-1 w-6 rounded-full bg-hue-deep" />
                <span className="flex flex-col gap-1">
                  <span className="font-bold">{project.name}</span>
                  <span className="font-mono text-xs break-all text-ink-2">/projects/{project.slug}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}
