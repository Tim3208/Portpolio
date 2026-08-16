import { GITHUB_URL } from "@/lib/sections";

/**
 * Hero · About 콘텐츠 (AGENTS.md §4, §6.1, §7)
 *
 * 수치는 AGENTS.md §23 에서 확인된 것만 쓴다. 추정하거나 만들어내지 않는다.
 */

export const PROFILE = {
  name: "박정우",
  role: "Web / Frontend Developer",
  headline: ["불편을 발견하고", "웹으로 해결합니다."],
  /** headline 두 번째 줄에서 색을 입힐 단어. 한 개만. */
  headlineAccent: "웹으로",
  supporting:
    "React · Next.js 기반으로 기획, UI 구현, API 연동, 배포와 운영까지 경험했습니다.",
  github: GITHUB_URL,
  /**
   * 연락처 이메일.
   * Oshi Calendar 스크린샷에 노출된 계정 주소를 그대로 사용하고 있다.
   * 다른 주소를 쓰려면 이 한 줄만 바꾸면 Contact 와 Footer 가 함께 바뀐다.
   */
  email: "joungou.park@gmail.com",
} as const;

/** Hero 하단 수치 레일. 첫 화면 안에 실제 숫자가 들어오게 한다. */
export const HERO_METRICS = [
  { value: "148", label: "운영 서비스 가입 사용자" },
  { value: "200", label: "모집 당일 최대 조회 수" },
  { value: "81", label: "커뮤니티 스크랩" },
  { value: "27", label: "프론트엔드 교육 인원" },
] as const;

export const ABOUT_LEAD =
  "일상에서 반복되는 불편을 발견하면 웹으로 해결할 수 없을까부터 생각합니다.";

/**
 * 불편 → 제품 매핑. About 의 핵심은 이력 나열이 아니라 이 행동 패턴이다.
 * 이력서 문장을 그대로 옮기지 않는다 (§50).
 */
export const PROBLEM_MAP = [
  {
    problem: "동아리 운영이 Discord · KakaoTalk · Google Form · Excel에 분산됨",
    product: "syu-likelion",
    slug: "syu-likelion",
  },
  {
    problem: "교내 건물은 찾을 수 있지만 강의실과 내부 시설 위치는 찾기 어려움",
    product: "삼육대 어디야",
    slug: "eodiya",
  },
  {
    problem: "여러 게임의 이벤트 종료 일정을 사용자가 직접 기억해야 함",
    product: "Oshi Calendar",
    slug: "oshi-calendar",
  },
] as const;

/** 디자인과 개발 양쪽 배경 — 화면과 구현을 함께 생각하는 근거 */
export const BACKGROUND = [
  {
    kind: "Design",
    school: "선린인터넷고등학교 멀티미디어과",
    detail: "시각디자인 · UX/UI · 영상편집",
  },
  {
    kind: "Engineering",
    school: "삼육대학교 컴퓨터공학부",
    detail: "Web · Software · Computer Science",
  },
] as const;

export const CONTACT_STATEMENT = "더 나은 사용 경험을 만드는 일을 함께하고 싶습니다.";
