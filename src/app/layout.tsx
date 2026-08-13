import type { Metadata, Viewport } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PROFILE } from "@/data/profile";
import { SITE, SITE_URL } from "@/lib/site";

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
    default: "박정우 — 불편을 발견하고 웹으로 해결합니다",
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
    title: "박정우 — 불편을 발견하고 웹으로 해결합니다",
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "박정우 — 불편을 발견하고 웹으로 해결합니다",
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  // 주소창 색까지 Cloud Dancer 로 맞춘다
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f0eee9" },
    { media: "(prefers-color-scheme: dark)", color: "#171613" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        {/* main 은 layout 이 소유한다. 그래야 모든 라우트에서 skip link 타깃
            (#content) 이 반드시 존재하고, main 이 중복되지 않는다. */}
        <Header />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
