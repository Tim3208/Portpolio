/** 교육 경험과 수치의 근거: docs/content.md#teaching, #volunteer */
export const TEACHING_LEAD =
  "동아리 부원에게 프론트엔드 개발을, 고등학생과 재수생에게 수학을 가르쳤습니다. 캄보디아와 베트남에서는 영어로 IT 수업을 진행했습니다.";

export const TRANSLATION = [
  {
    audience: "학생에게 설명할 때",
    detail: "학생이 이해한 내용을 확인하고 설명 방식, 난이도, 진도와 수업 자료를 조정했습니다.",
  },
  {
    audience: "디자이너와 화면을 만들 때",
    detail: "화면의 의도를 컴포넌트와 상태로 옮기고, 예외 상황에서 어떻게 보여줄지 다시 확인했습니다.",
  },
  {
    audience: "백엔드 개발자와 연동할 때",
    detail: "필드의 의미와 응답 형태를 문서로 확인하고, 명세와 실제 응답이 다른 부분을 대조했습니다.",
  },
] as const;

export const TEACHING_ACTIVITIES = [
  {
    title: "멋쟁이사자처럼 프론트엔드 교육",
    period: "2026 — 현재",
    detail:
      "14기 프론트엔드 운영진으로 부원 27명에게 HTML·CSS·React·AI 활용 개발을 가르쳤습니다. 매주 세션과 스터디를 열고, 동아리 플랫폼으로 과제 제출·승인·반려와 개별 피드백을 운영했습니다. 중앙 해커톤 참가 팀의 멘토로도 활동하며, 팀이 도움을 요청하거나 개발이 막혔을 때 기술적 방향을 제안했습니다.",
  },
  {
    title: "고등학생 수학 개인과외",
    period: "2022 — 2026.07",
    detail:
      "군 복무 기간을 제외하고 고등학교 1~3학년과 재수생 총 8명을 1:1로 지도했습니다. 내신 및 모의고사 7~9등급 수준의 학생이 최고 2등급까지 향상한 사례가 있습니다. 학부모에게는 성취도, 학습 태도와 개선점을 정리한 장문 피드백을 주기적으로 전달했습니다.",
  },
  {
    title: "캄보디아 IT 교육 봉사",
    period: "2025.07",
    detail:
      "World Friends Korea 활동으로 Battambang Teacher Education College에서 약 20명에게 Google Forms·Calendar·Drive·Meet 사용법을 가르쳤습니다. 영어로 2주간 80시간 수업을 진행했습니다.",
  },
  {
    title: "베트남 IT 교육 봉사",
    period: "2026.07",
    detail:
      "World Friends Korea 활동으로 University of Science and Education에서 약 8명에게 HTML·CSS·JavaScript 기초 웹 프로그래밍을 가르쳤습니다. 영어로 2주간 80시간 수업을 진행했습니다. 학생별 학습 속도 차이에 맞춰 전체 진도를 조정하고, 보조 강의자와 역할을 나눠 개별 학생을 지원했습니다.",
  },
] as const;

export const TEACHING_METRICS = [
  { value: "27", label: "프론트엔드 교육 인원" },
  { value: "8", label: "1:1 수학 지도 학생" },
  { value: "160", label: "두 나라에서 진행한 IT 교육 시간" },
] as const;
