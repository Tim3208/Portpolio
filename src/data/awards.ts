/**
 * Awards (AGENTS.md §13)
 *
 * 미니멀 리스트. 아이콘도 뱃지도 카드도 없다 (§49).
 * 위계는 크기로만 표현하므로 primary 플래그 하나만 둔다.
 */

export type Award = {
  year: string;
  prize: string;
  title: string;
  host: string;
  role?: string;
  /** 최우수상 한 건만 타이포를 한 단계 키운다 */
  primary?: boolean;
  links?: readonly { label: string; href: string }[];
};

export const AWARDS: readonly Award[] = [
  {
    year: "2025",
    prize: "최우수상",
    title: "길거리 먹거리지도",
    host: "삼육대학교 SW중심대학사업단 · SW 프로젝트 경진대회",
    role: "Frontend Developer · UI/UX Designer",
    primary: true,
    links: [
      { label: "시연 영상", href: "https://youtu.be/nGwOk6U9pRo" },
      { label: "GitHub", href: "https://github.com/iyeonggyu0/FoodMap" },
      {
        label: "Figma",
        href: "https://www.figma.com/design/FyDb3y28Aiv8cnuS1F3vhA/SW%EA%B2%BD%EC%A7%84%EB%8C%80%ED%9A%8C",
      },
    ],
  },
  {
    year: "2019",
    prize: "동상",
    title: "제9회 전국 중고교생 서강 게임 · 애니 · 만화 아이디어 공모전",
    host: "서강대학교",
  },
  {
    year: "2018",
    prize: "금상",
    title: "교내 프로그래밍 경진대회",
    host: "선린인터넷고등학교",
  },
];
