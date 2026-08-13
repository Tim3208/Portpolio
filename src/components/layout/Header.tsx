"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Container } from "@/components/layout/Container";
import { GITHUB_URL, NAV } from "@/lib/sections";

/**
 * 사이트 헤더.
 *
 * 배경은 언제나 Cloud Dancer 단색이다. 스크롤 위치의 섹션 색을 따라가게 하면
 * 파스텔 색면을 지날 때마다 헤더가 깜빡이고, 그건 AGENTS.md §29 가 금지한
 * "읽기를 방해하는 Motion" 이 된다. 바뀌는 것은 하단 hairline 하나뿐이다.
 *
 * 모바일에서는 내비게이션을 접지 않고 아예 뺀다 (§30 Navigation 단순화).
 * 단일 페이지 구성이라 Hero 의 [프로젝트 보기] CTA 로 충분하고, 햄버거 메뉴는
 * focus trap 까지 떠안아야 해서 얻는 것보다 비용이 크다.
 */
export function Header() {
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const onScroll = () => setSettled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="top"
      className={[
        "sticky top-0 z-50 bg-paper transition-colors duration-200",
        settled ? "border-b border-rule" : "border-b border-transparent",
      ].join(" ")}
    >
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-10 focus:rounded-xs focus:bg-hue-deep focus:px-4 focus:py-2 focus:text-small focus:text-paper"
      >
        본문으로 건너뛰기
      </a>

      <Container className="flex items-center justify-between gap-6 py-3">
        <Link
          href="/"
          className="-mx-2 flex min-h-11 items-center px-2 text-h3 font-semibold tracking-tight"
        >
          박정우
        </Link>

        {/* Case Study 페이지에서도 눌리도록 홈 기준 절대 경로를 쓴다.
            `#about` 만 두면 /projects/* 에서 아무 데도 가지 않는다. */}
        <nav aria-label="주요 섹션" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/#${item.id}`}
                  className="flex min-h-11 items-center rounded-xs px-3 text-small text-ink-2 transition-colors hover:text-hue-deep"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="-mx-2 flex min-h-11 items-center px-2 text-small text-ink-2 transition-colors hover:text-hue-deep md:hidden"
        >
          GitHub
        </a>
      </Container>
    </header>
  );
}
