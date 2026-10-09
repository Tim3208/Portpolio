/**
 * Skills (AGENTS.md §18)
 *
 * 숙련도 그래프도, 퍼센트도, 아이콘도 쓰지 않는다.
 * 역할 기반으로만 묶는다 — 무엇을 할 수 있는지가 어느 정도 아는지보다 중요하다.
 *
 * 실제 프로젝트에서 의미 있게 사용한 기술만 유지한다.
 * 새 기술을 발견했다고 해서 무조건 추가하지 않는다.
 */

export type SkillGroup = {
  role: string;
  caption: string;
  items: readonly string[];
};

export const SKILL_GROUPS: readonly SkillGroup[] = [
  {
    role: "화면 구현",
    caption: "syu-likelion의 지원서·평가 화면을 Next.js로, Oshi Calendar 대시보드를 React로 구현했습니다.",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Vite",
    ],
  },
  {
    role: "데이터 연동",
    caption: "syu-likelion의 API를 Axios로 연동하고, Oshi Calendar에서 회원과 비회원의 저장 방식을 나눴습니다.",
    items: ["REST API", "Axios", "Supabase", "LocalStorage"],
  },
  {
    role: "배포와 운영",
    caption: "삼육대 어디야를 GitHub Actions로 GitHub Pages에 배포했습니다. Oshi Calendar는 Vercel에서 제공합니다.",
    items: ["Git", "GitHub", "GitHub Actions", "Vercel", "GitHub Pages"],
  },
  {
    role: "디자인과 협업",
    caption: "syu-likelion에서 Figma 시안을 확인하며 디자이너와 화면을 만들고, 백엔드 개발자와 API 응답을 맞췄습니다.",
    items: ["Figma", "Notion"],
  },
];

export const COURSEWORK = {
  label: "수업과 추가 경험",
  items: ["C", "MariaDB"],
} as const;
