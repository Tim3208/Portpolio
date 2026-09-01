import type { Hue } from "@/lib/hue";

/**
 * 브라우저 탭 (AGENTS.md §5)
 *
 * 탭은 흉내가 아니라 실제 라우트다. 눌렀을 때 창의 주소가 진짜로 바뀌지
 * 않으면 주소창이 거짓말을 하게 되고, 창 연출 전체가 무너진다.
 *
 * Contact 는 탭이 아니다. Contact + Footer 가 하나의 닫는 블록이라 어느
 * 탭에서 나가든 같은 마무리를 만나야 하고, 그래서 layout 에 상주한다.
 *
 * hue 는 탭 앞의 파비콘 점 색이다. 그 탭 첫 섹션의 색맥락과 같은 것을 쓴다 —
 * 탭을 누르면 나오는 화면의 색을 미리 보여주는 셈이다.
 */
export type Tab = {
  href: string;
  label: string;
  hue: Hue;
};

export const TABS: readonly Tab[] = [
  { href: "/", label: "Home", hue: "mocha" },
  { href: "/work", label: "Work", hue: "mocha" },
  { href: "/career", label: "Career", hue: "wheat" },
  { href: "/teaching", label: "Teaching", hue: "sage" },
];
