import { GITHUB_URL } from "@/lib/sections";

/** 소개와 연락처. 사실 근거는 docs/content.md#profile을 따른다. */
export const PROFILE = {
  name: "박정우",
  role: "프론트엔드 개발자",
  /** 홈 첫 화면과 홈 OG 이미지의 한 줄 소개. 특정 프로젝트를 지칭하지 않는다. */
  tagline: "사용자의 페인 포인트를 발견하고, 가치 있는 프로덕트로 만드는 개발자",
  github: GITHUB_URL,
  email: "joungou.park@gmail.com",
} as const;

/** /career 맨 위의 전공 배경. 근거: docs/content.md#profile, #education */
export const BACKGROUND = {
  lead: "디자인과 컴퓨터공학을 모두 전공했습니다. 화면의 의도를 이해하고, 그것을 실제로 동작하는 UI로 옮깁니다.",
  items: [
    {
      field: "디자인",
      school: "선린인터넷고등학교 멀티미디어과",
      period: "2018.03 — 2021.02",
      detail: "시각디자인 · UX/UI 디자인 · 영상편집",
    },
    {
      field: "컴퓨터공학",
      school: "삼육대학교 컴퓨터공학부",
      period: "2021.03 — 2027.02 졸업 예정",
      detail: "웹프로그래밍 · 컴퓨터네트워크 · 인공지능 · 확률통계",
    },
  ],
} as const;

export const CONTACT_STATEMENT = "프로젝트나 협업에 관한 이야기를 기다립니다.";
