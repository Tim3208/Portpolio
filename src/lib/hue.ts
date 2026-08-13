/**
 * 색맥락 (AGENTS.md §28.3 / §28.4)
 *
 * 파스텔 6계열. 한 섹션에는 한 계열만 활성화된다.
 * 프로젝트 색은 `Project.hue` 로 데이터에 두어 홈 카드 → 상세 Hero →
 * Navigation 이 같은 색을 공유하게 한다. JSX 에 색을 하드코딩하지 않는다.
 */
export const HUES = [
  "blue",
  "sage",
  "mauve",
  "clay",
  "blush",
  "butter",
] as const;

export type Hue = (typeof HUES)[number];

/**
 * Hue → CSS 스코프 클래스.
 *
 * 문자열을 조합하지 않고 정적 맵으로 둔다. 조합해서 만들면 grep 이 안 되고,
 * 오타가 런타임까지 살아남는다.
 */
export const HUE_CLASS: Record<Hue, string> = {
  blue: "hue-blue",
  sage: "hue-sage",
  mauve: "hue-mauve",
  clay: "hue-clay",
  blush: "hue-blush",
  butter: "hue-butter",
};

/** 각 계열이 어디에 배정되어 있는지 — AGENTS.md §28.3 표와 동일하게 유지한다. */
export const HUE_LABEL: Record<Hue, string> = {
  blue: "Powder Blue",
  sage: "Powder Sage",
  mauve: "Powder Mauve",
  clay: "Powder Clay",
  blush: "Powder Blush",
  butter: "Powder Butter",
};
