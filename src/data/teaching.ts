/**
 * Teaching (AGENTS.md §14, §15, §16)
 *
 * 외부 활동 목록이 아니라 Communication Skill 의 근거로 배치한다 (§15).
 */

export const TEACHING_QUOTE =
  "같은 개념이라도 상대의 배경지식에 따라 다르게 설명해야 합니다.";

export const TEACHING_LEAD =
  "8명의 학생을 1:1로 가르치며 얻은 원칙을, 지금은 협업에 그대로 적용하고 있습니다.";

/** 같은 원칙이 세 상대에게 어떻게 다르게 적용되는지 */
export const TRANSLATION = [
  {
    audience: "학생",
    approach: "이해 수준에 맞춘 설명",
    detail: "설명 방식 · 난이도 · 진도 · 수업 자료를 학생마다 조정",
  },
  {
    audience: "Designer",
    approach: "구현 가능한 UI로 해석",
    detail: "화면 의도를 컴포넌트와 상태로 옮기고 경계 조건을 되묻기",
  },
  {
    audience: "Backend Developer",
    approach: "명확한 Data · API Contract로 구체화",
    detail: "필드 의미와 응답 계약을 문서로 고정해 재작업 줄이기",
  },
] as const;

export const TEACHING_ACTIVITIES = [
  {
    title: "멋쟁이사자처럼 Frontend 운영진",
    period: "2026 — 현재",
    detail:
      "부원 27명에게 HTML · CSS · React · AI 활용 개발을 교육. 매주 세션과 스터디를 열고 과제 제출 · 승인 · 반려 · 개별 피드백까지 동아리 플랫폼으로 운영.",
  },
  {
    title: "고등학생 수학 개인과외",
    period: "2022 — 2026.07",
    detail:
      "학생 8명을 모두 1:1로 지도. 내신 및 모의고사 7~9등급 수준 학생이 최고 2등급까지 향상. 학부모에게 성취도 · 학습 태도 · 개선점을 정리해 주기적으로 전달.",
  },
  {
    title: "World Friends Korea — Cambodia · Vietnam",
    period: "2025.07 · 2026.07",
    detail:
      "두 나라에서 총 160시간, 영어로 진행. 캄보디아에서는 Google Workspace 도구를, 베트남에서는 HTML · CSS · JavaScript 기초 웹 프로그래밍을 가르쳤습니다.",
  },
] as const;

export const TEACHING_METRICS = [
  { value: "27", label: "프론트엔드 교육 인원" },
  { value: "8", label: "1:1 지도 학생" },
  { value: "160", label: "해외 IT 교육 시간" },
] as const;
