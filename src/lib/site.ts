/**
 * 사이트 절대 URL.
 *
 * metadataBase, canonical, sitemap, OG 이미지가 모두 절대 경로를 필요로 한다.
 * 배포 도메인이 확정되지 않았으므로 임의로 만들지 않고 (AGENTS.md §39)
 * 환경변수에서 받는다.
 *
 *   1. NEXT_PUBLIC_SITE_URL          직접 지정 — 최우선
 *   2. VERCEL_PROJECT_PRODUCTION_URL Vercel 배포 시 자동 주입
 *   3. localhost                     로컬 개발
 *
 * 커스텀 도메인을 붙이면 .env 에 NEXT_PUBLIC_SITE_URL 만 넣으면 된다.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;

  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl();

export const SITE = {
  name: "박정우 — 프론트엔드 개발자",
  shortName: "박정우",
  description:
    "동아리 모집·운영 플랫폼과 캠퍼스 지도를 만든 프론트엔드 개발자 박정우의 포트폴리오. 담당 화면, API 협업, 배포 이후 개선 경험을 소개합니다.",
  locale: "ko_KR",
} as const;
