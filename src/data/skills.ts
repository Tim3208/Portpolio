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
    role: "Build",
    caption: "화면을 만든다",
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
    role: "Connect",
    caption: "데이터를 잇는다",
    items: ["REST API", "Axios", "Supabase", "LocalStorage"],
  },
  {
    role: "Ship",
    caption: "배포하고 운영한다",
    items: ["Git", "GitHub", "Vercel", "GitHub Pages", "PWA"],
  },
  {
    role: "Design & Collaboration",
    caption: "함께 구체화한다",
    items: ["Figma", "Notion"],
  },
];

export const COURSEWORK = {
  label: "Coursework / Additional Experience",
  items: ["C", "MariaDB"],
} as const;
