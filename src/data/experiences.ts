/**
 * Experience 타임라인 (AGENTS.md §37)
 *
 * Resume 전체를 다시 보여주지 않는다. 연도당 1–3개만 남긴다.
 */

export type TimelineYear = {
  year: string;
  items: readonly { title: string; detail?: string }[];
};

export const TIMELINE: readonly TimelineYear[] = [
  {
    year: "2018",
    items: [
      {
        title: "선린인터넷고등학교 멀티미디어과",
        detail: "시각디자인 · UX/UI · 영상편집",
      },
      { title: "교내 웹 전공 동아리 개발자", detail: "게임 개발 동아리 InterRuze 공동 창설" },
    ],
  },
  {
    year: "2021",
    items: [{ title: "삼육대학교 컴퓨터공학부", detail: "2027.02 졸업 예정" }],
  },
  {
    year: "2022",
    items: [{ title: "멋쟁이사자처럼 삼육대학교 10기", detail: "Frontend" }],
  },
  {
    year: "2023",
    items: [
      {
        title: "군 복무",
        detail: "CCTV 근무 자동 편성 프로그램 개발 · 2023.09 — 2024.06",
      },
    ],
  },
  {
    year: "2025",
    items: [
      { title: "멋쟁이사자처럼 삼육대학교 13기", detail: "Frontend" },
      { title: "World Friends Korea — Cambodia", detail: "Battambang Teacher Education College · 80시간" },
      {
        title: "삼육대학교 SW 프로젝트 경진대회 최우수상",
        detail: "길거리 먹거리지도 · 2025.10.29",
      },
    ],
  },
  {
    year: "2026",
    items: [
      {
        title: "멋쟁이사자처럼 삼육대학교 14기 Frontend 운영진",
        detail: "부원 27명 교육 · 중앙 해커톤 멘토",
      },
      {
        title: "World Friends Korea — Vietnam",
        detail: "University of Science and Education · 80시간",
      },
      {
        title: "syu-likelion · 삼육대 어디야 · Oshi Calendar",
        detail: "운영 · 배포 · 개발 중",
      },
    ],
  },
];
