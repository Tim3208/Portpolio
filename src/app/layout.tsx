import type { Metadata, Viewport } from "next";

import { BrowserWindow } from "@/components/browser/BrowserWindow";
import { Contact } from "@/components/layout/Contact";
import { Footer } from "@/components/layout/Footer";
import { PROFILE } from "@/data/profile";
import { SITE, SITE_URL } from "@/lib/site";
import { THEME_INIT_SCRIPT } from "@/lib/theme";

// 폰트는 node_modules 에서 self-host 한다. CDN 링크를 쓰면 초기 렌더에서
// 시스템 폰트로 잠깐 떨어지며 한글 자간이 흔들린다. (Blueprint 03)
// Pretendard 는 dynamic-subset — unicode-range 로 한글을 쪼개 필요한 것만 받는다.
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";

export const metadata: Metadata = {
  // 절대 URL 의 기준. 도메인은 NEXT_PUBLIC_SITE_URL 로 받는다 (§39 — 지어내지 않는다)
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE.name,
    template: "%s — 박정우",
  },
  description: SITE.description,
  authors: [{ name: PROFILE.name, url: PROFILE.github }],
  creator: PROFILE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    siteName: SITE.name,
    url: "/",
    title: SITE.name,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  // 브라우저 UI 와 맞닿는 면은 데스크톱에서는 창 바깥의 책상이다.
  // 모바일 주소창 색을 칠하는 브라우저는 대부분 창 연출이 없는 좁은 화면이라
  // 크롬 대신 놓이는 상단 내비(paper)와 같은 색으로 둔다.
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f5f7" },
    { media: "(prefers-color-scheme: dark)", color: "#14171c" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // 인라인 스크립트가 하이드레이션 전에 documentElement 를 건드린다.
    // suppressHydrationWarning 이 없으면 React 가 그 차이를 경고로 띄운다.
    <html lang="ko" suppressHydrationWarning>
      <body>
        {/* 첫 페인트 전에 저장된 테마를 적용한다. 위치가 곧 동작이라
            <body> 의 첫 자식이어야 한다 (src/lib/theme.ts 참고). */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />

        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-60 focus:border focus:border-pen focus:bg-paper-raised focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-pen"
        >
          본문으로 건너뛰기
        </a>

        {/* main 은 layout 이 소유한다. 그래야 모든 라우트에서 skip link 타깃
            (#content) 이 반드시 존재하고, main 이 중복되지 않는다.
            Contact 와 Footer 는 어느 페이지에서든 본문 끝에 같은 마무리로 붙는다. */}
        <BrowserWindow>
          <main id="content" tabIndex={-1} className="focus:outline-none">
            {children}
          </main>
          <Contact />
          <Footer />
        </BrowserWindow>
      </body>
    </html>
  );
}
