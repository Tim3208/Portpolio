/**
 * 페이지 앵커.
 *
 * 탭이 라우트로 갈라진 뒤로 섹션 앵커는 하나만 남았다. Contact 는 탭이
 * 아니라 layout 에 상주하므로 어느 라우트에서든 `#contact` 가 존재하고,
 * 크롬바의 Contact 링크는 그 사실에 기대어 동작한다.
 *
 * 탭 목록은 여기가 아니라 `@/lib/tabs` 에 있다.
 */
export const SECTION = {
  contact: "contact",
} as const;

export type SectionId = (typeof SECTION)[keyof typeof SECTION];

export const GITHUB_URL = "https://github.com/Tim3208";
