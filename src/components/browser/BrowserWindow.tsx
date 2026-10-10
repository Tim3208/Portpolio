import Link from "next/link";
import type { ReactNode } from "react";

import { BrowserProvider } from "@/components/browser/BrowserProvider";
import { TabStrip } from "@/components/browser/TabStrip";
import { Toolbar } from "@/components/browser/Toolbar";
import { Viewport } from "@/components/browser/Viewport";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { PROJECTS_WITH_CASE_STUDY } from "@/data/caseStudies";
import { PROFILE } from "@/data/profile";
import type { Hue } from "@/lib/hue";
import { EXTERNAL_PATH, NEW_TAB_PATH, PAGES } from "@/lib/pages";
import { SECTION } from "@/lib/sections";
import { SITE_URL } from "@/lib/site";

const BOOKMARK =
  "flex min-h-9 items-center px-2.5 text-sm text-ink-2 underline-offset-[0.3em] hover:text-pen hover:underline";

/**
 * 사이트 전체를 감싸는 창.
 *
 * 데스크톱(md 이상): 화면 높이에 맞춘 창 하나가 책상 위에 놓이고, 크롬은
 * 색인 탭줄 · 도구줄 · 북마크바 3행이다. 본문은 Viewport 안에서만 스크롤된다.
 * 모바일: 창 연출을 풀고 일반 페이지처럼 스크롤한다. 크롬 대신 간단한
 * 상단 내비를 둔다.
 *
 * 서버 컴포넌트다. 탭 제목에 필요한 경로 → 이름 표와 프로젝트 플래그 색만
 * 조립해 내려보낸다.
 */
export function BrowserWindow({ children }: { children: ReactNode }) {
  const host = new URL(SITE_URL).host;
  const titles: Record<string, string> = {
    ...Object.fromEntries(PAGES.map((p) => [p.href, p.label])),
    ...Object.fromEntries(PROJECTS_WITH_CASE_STUDY.map((p) => [`/projects/${p.slug}`, p.name])),
    [NEW_TAB_PATH]: "새 탭",
    [EXTERNAL_PATH]: "열 수 없는 주소",
  };
  const flags: Record<string, Hue> = Object.fromEntries(
    PROJECTS_WITH_CASE_STUDY.flatMap((p) => (p.hue ? [[`/projects/${p.slug}`, p.hue]] : [])),
  );

  return (
    <BrowserProvider host={host} titles={titles}>
      <div className="md:flex md:h-dvh md:p-6 lg:p-10">
        <div className="mx-auto flex w-full max-w-window flex-col bg-paper md:min-h-0 md:border md:border-ink/25 md:shadow-(--window-shadow)">
          {/* 데스크톱 크롬 */}
          <div className="hidden shrink-0 md:block">
            <TabStrip flags={flags} />
            <Toolbar />
            <nav
              aria-label="북마크"
              className="flex flex-wrap items-center gap-x-0.5 border-b border-line-strong bg-paper px-3 py-1"
            >
              {PAGES.map((page) => (
                <Link key={page.href} href={page.href} className={BOOKMARK}>
                  {page.label}
                </Link>
              ))}
              <span aria-hidden="true" className="mx-2 h-4 border-l border-line" />
              <a href={`#${SECTION.contact}`} className={BOOKMARK}>
                연락처
              </a>
              <a href={PROFILE.github} target="_blank" rel="noreferrer noopener" className={BOOKMARK}>
                GitHub (새 창)
              </a>
            </nav>
          </div>

          {/* 모바일 상단 내비 — 창 연출 없음 */}
          <header className="flex flex-col gap-1 border-b border-line-strong bg-paper px-5 pt-3 pb-1 md:hidden">
            <div className="flex items-center justify-between gap-3">
              <Link href="/" className="flex min-h-11 items-center text-lg font-extrabold tracking-[-0.02em]">
                {PROFILE.name}
              </Link>
              <ThemeToggle />
            </div>
            <nav aria-label="주요 페이지" className="-mx-2 flex flex-wrap">
              {PAGES.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="flex min-h-11 items-center px-2 text-sm font-medium text-ink-2 hover:text-pen"
                >
                  {page.label}
                </Link>
              ))}
            </nav>
          </header>

          <Viewport>{children}</Viewport>
        </div>
      </div>
    </BrowserProvider>
  );
}
