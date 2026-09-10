import { GITHUB_URL } from "@/lib/sections";

/** 소개와 연락처. 사실 근거는 docs/content.md#profile을 따른다. */
export const PROFILE = {
  name: "박정우",
  role: "프론트엔드 개발자",
  supporting: "동아리 모집·운영 화면과 캠퍼스 지도를 만들었습니다.",
  experience: "사용자 화면과 운영진 기능, API 연동부터 배포 이후 수정까지 경험했습니다.",
  github: GITHUB_URL,
  email: "joungou.park@gmail.com",
} as const;

export const ABOUT_PARAGRAPHS = [
  "선린인터넷고등학교에서 시각디자인과 UX/UI를 배우고, 삼육대학교에서 컴퓨터공학을 전공하고 있습니다. 화면을 디자인할 때의 의도를 실제 UI와 사용자 상태로 옮기는 일을 해 왔습니다.",
  "동아리 플랫폼에서는 디자이너·백엔드 개발자와 지원서와 평가 화면을 만들었습니다. API 명세와 실제 응답을 대조하며 동작을 맞췄고, 운영 중 발견한 화면 이동과 정보 표시 문제를 수정했습니다.",
] as const;

export const CONTACT_STATEMENT = "프로젝트나 협업에 관한 이야기를 기다립니다.";
