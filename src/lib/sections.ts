/**
 * 홈페이지 섹션 앵커 (AGENTS.md §5 / §42 Phase 2)
 *
 * Header 내비게이션과 실제 섹션이 같은 출처를 쓰도록 여기 한 곳에 둔다.
 * 문자열을 양쪽에 따로 적으면 한쪽만 바뀌었을 때 링크가 조용히 죽는다.
 *
 * NOTE: 타깃 섹션은 Phase 2 에서 구현된다. 그때 각 섹션에
 *       id={SECTION.projects} 형태로 이 값을 붙인다.
 */
export const SECTION = {
  about: "about",
  projects: "projects",
  experience: "experience",
  contact: "contact",
} as const;

export type SectionId = (typeof SECTION)[keyof typeof SECTION];

/**
 * 헤더에 노출되는 항목만 추린다. Teaching · Awards · Skills 는 스크롤로 지나가는
 * 섹션이라 내비게이션에 넣지 않는다 — 항목이 8개가 되면 고르는 비용이 커진다.
 */
export const NAV: ReadonlyArray<{ id: SectionId; label: string }> = [
  { id: SECTION.projects, label: "Projects" },
  { id: SECTION.about, label: "About" },
  { id: SECTION.experience, label: "Experience" },
  { id: SECTION.contact, label: "Contact" },
];

export const GITHUB_URL = "https://github.com/Tim3208";
