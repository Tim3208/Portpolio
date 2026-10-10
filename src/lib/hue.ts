/**
 * 프로젝트 색 — 연구 노트의 인덱스 플래그.
 *
 * 노트 가장자리에 붙이는 색 플래그처럼, 프로젝트를 구분하는 표시로만 쓴다.
 * 색만으로 정보를 전하지 않도록 플래그 옆에는 항상 프로젝트 이름이 있다.
 * 값은 `Project.hue` 로 데이터에 두어 홈 · 목록 · 상세 · 탭이 같은 색을 공유한다.
 * JSX 에 색을 하드코딩하지 않는다.
 */
export const HUES = [
  "mocha",
  "terracotta",
  "wheat",
  "sage",
  "plum",
  "blush",
] as const;

export type Hue = (typeof HUES)[number];

/**
 * Hue → 플래그 색 클래스 (globals.css).
 *
 * 문자열을 조합하지 않고 정적 맵으로 둔다. 조합해서 만들면 grep 이 안 되고,
 * Tailwind 가 클래스를 찾지 못한다.
 */
export const FLAG_CLASS: Record<Hue, string> = {
  mocha: "flag-mocha",
  terracotta: "flag-terracotta",
  wheat: "flag-wheat",
  sage: "flag-sage",
  plum: "flag-plum",
  blush: "flag-blush",
};

/** 플래그 색 이름 — 문서와 검토용 */
export const HUE_LABEL: Record<Hue, string> = {
  mocha: "Amber flag",
  terracotta: "Coral flag",
  wheat: "Yellow flag",
  sage: "Green flag",
  plum: "Violet flag",
  blush: "Pink flag",
};
