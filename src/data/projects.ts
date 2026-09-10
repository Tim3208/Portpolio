import type { Hue } from "@/lib/hue";

export type Project = {
  slug: string;
  /** 카드에 크게 나가는 이름 */
  name: string;
  /** 한 줄 문제/해결. 기능 나열이 아니다 (§35, §36) */
  headline: string;
  /** 프로젝트가 무엇인지 설명하는 한 문장 */
  subtitle: string;
  period: string;
  role: string;
  team?: string;
  status?: string;
  /** 색맥락. 홈 카드 → 상세 Hero → Navigation 이 이 값을 공유한다 (§28.4) */
  hue: Hue;
  /** 앞에서부터 4개까지만 카드에 노출된다. 중요한 순서로 적는다. */
  technologies: readonly string[];
  /** 카드에는 최대 2개. 확인된 수치만 (§23) */
  metrics?: readonly { value: string; label: string }[];
  links?: {
    service?: string;
    github?: string;
    figma?: string;
  };
  /**
   * 대표 스크린샷. 실제 서비스 캡처만 쓴다 (§39, §44).
   *
   * 원본 종횡비가 1.48 ~ 2.17 로 제각각이라 카드 비율에 맞추면 크롭이 생긴다.
   * position 은 그 크롭에서 무엇을 살릴지 정하는 값이다 — 기본 center 로 두면
   * 잘리는 쪽이 화면마다 달라지므로 이미지별로 명시한다.
   *
   * 라우트 네임스페이스를 피해 /images/projects/ 에 둔다. Phase 3 의
   * /projects/[slug] 와 같은 경로를 쓰면 정적 파일이 동적 세그먼트에
   * 잡힐 수 있다.
   */
  cover?: {
    src: string;
    alt: string;
    /** CSS object-position. 미지정 시 center */
    position?: string;
    /** 이미지마다 의미 있는 영역을 보존하는 표시 비율. */
    aspectRatio?: string;
  };
  /** 화면을 공개할 수 없는 경우의 사유. 자리 표시자에 그대로 노출된다. */
  coverWithheld?: string;
};

/** §8 우선순위. 첫 번째가 대표 프로젝트이고 레이아웃도 그렇게 말한다. */
export const PROJECTS: readonly Project[] = [
  {
    slug: "syu-likelion",
    name: "syu-likelion",
    headline: "분산된 동아리 운영을 하나의 플랫폼으로",
    subtitle: "멋쟁이사자처럼 삼육대학교 모집 · 커뮤니티 · 운영 관리 플랫폼",
    period: "2026.01 — 현재",
    role: "Frontend Developer",
    team: "FE 2 · BE 2 · Design 1",
    status: "운영 · 유지보수 중",
    hue: "mocha",
    technologies: ["Next.js", "TypeScript", "React", "Axios"],
    metrics: [
      { value: "148", label: "가입 사용자" },
      { value: "200", label: "모집 당일 최대 조회" },
    ],
    links: {
      service: "https://syu-likelion.org",
      github: "https://github.com/No4hh4oN/Likelion14th-FE",
      figma: "https://www.figma.com/design/ZORVqHx4WTt4ePPM4mIYz4/",
    },
    cover: {
      src: "/images/projects/syu-likelion-admin2.png",
      aspectRatio: "1205 / 891",
      alt: "syu-likelion 지원서 상세의 점수 현황 탭. 같은 지원자의 답변, 문항별 점수와 운영진 코멘트를 탭으로 전환하며 확인한다.",
      // 평가 화면은 전체 비율로 보여준다.
      position: "center top",
    },
  },
  {
    slug: "eodiya",
    name: "삼육대 어디야",
    headline: "건물은 찾았는데 강의실은 어디지에서 시작한 캠퍼스 지도",
    subtitle: "교내 건물과 내부 시설의 상세 위치를 검색하는 모바일 캠퍼스 지도",
    period: "2026.02",
    role: "기획 · 개발 · 배포 전 과정",
    team: "1인 프로젝트",
    hue: "sage",
    technologies: ["TypeScript", "Kakao Maps API", "PWA", "GitHub Pages"],
    metrics: [
      { value: "123", label: "캠퍼스 장소 데이터" },
      { value: "81", label: "커뮤니티 스크랩" },
    ],
    links: {
      service: "https://tim3208.github.io/eodiya/",
      github: "https://github.com/Tim3208/eodiya",
    },
    cover: {
      src: "/images/projects/eodiya.png",
      aspectRatio: "1090 / 720",
      alt: "삼육대 어디야 검색 화면. 좌측에 장소 검색창과 건물·건물 내부 필터, 국제교육관의 층별 상세 정보가 있고, 우측 지도에는 교내 장소 마커와 선택한 장소의 InfoWindow가 표시되어 있다.",
      // 원본 1.51 ≈ 카드 1.5. 크롭이 거의 없다.
      position: "center",
    },
  },
  {
    slug: "oshi-calendar",
    name: "Oshi Calendar",
    headline: "여러 게임에서 놓칠 일정과 보상을 한눈에",
    subtitle:
      "여러 서브컬처 게임의 마감 일정과 보상 우선순위를 통합하는 대시보드",
    period: "2026.06 — 현재",
    role: "공동 기획 · Frontend Developer",
    team: "3인",
    status: "개발 중 · Preview 배포",
    hue: "plum",
    technologies: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    // 확인된 수치가 없다. 카드에 숫자를 만들어 넣지 않는다.
    links: {
      service: "https://oshi-calendar-cyan.vercel.app/",
      github: "https://github.com/Tim3208/Oshi-Calendar",
      figma: "https://www.figma.com/design/XCVUGdYiwQYnrsAVrTogcR/",
    },
    cover: {
      src: "/images/projects/oshi-calendar.png",
      alt: "Oshi Calendar 대시보드 화면. 종료 임박 일정과 오늘 할 일, 게임별 보상 현황이 한 화면에 모여 있다. 표시된 수치는 목업 데이터다.",
      // 원본 2.17 → 카드 1.5. 좌우가 크게 잘리므로 중앙을 기준으로 잡아
      // 임박 일정과 오늘 할 일을 살린다. 좌측 레일(계정 이메일 포함)은 잘려 나간다.
      position: "center",
    },
  },
  {
    slug: "cctv-scheduler",
    name: "CCTV 근무 자동 편성",
    headline: "인터넷도 라이브러리도 IDE도 없는 환경에서 만든 근무 자동화",
    subtitle: "복잡한 근무 규칙과 인원별 조건을 반영하는 폐쇄망 근무 편성 도구",
    period: "2023.09 — 2024.06",
    role: "기획 · 개발",
    team: "1인 프로젝트",
    hue: "terracotta",
    technologies: ["Vanilla JavaScript", "HTML", "CSS", "LocalStorage"],
    coverWithheld: "보안상 화면 비공개",
  },
];

export const FEATURED_PROJECT = PROJECTS[0];
export const SUPPORTING_PROJECTS = PROJECTS.slice(1);

/**
 * Case Study 로 풀지 않는 나머지 작업들.
 *
 * §8 의 대표 4개와 같은 자리에 두지 않는다. 저 넷은 문제 정의부터 운영까지
 * 설명할 것이 있어서 상세 페이지를 갖지만, 여기 있는 것들은 "무엇을 만들었고
 * 무엇이 되는가"까지가 확인된 전부다. 그래서 필드도 그만큼만 둔다 — 기간,
 * 기술, 수치는 확인되지 않았으므로 아예 자리를 만들지 않는다 (§39).
 */
export type OtherProject = {
  name: string;
  /** 약칭만으로 무엇인지 알 수 없을 때만 풀어 쓴다 */
  fullName?: string;
  /** 무엇을 하는 것인가 — 한 문장 */
  summary: string;
  /** 핵심 기능. 이 목록은 기능을 알리는 것이 목적이므로 나열해도 된다. */
  features: readonly string[];
  /** 확인된 역할만 적는다. 모르면 비운다. */
  role?: string;
  /**
   * 확인 가능한 결과물로 가는 링크. 둘 다 있으면 배포된 사이트를 우선한다 —
   * 실제로 동작하는 것을 보는 편이 저장소를 여는 것보다 앞서기 때문이다.
   */
  links?: {
    service?: string;
    github?: string;
  };
};

export const OTHER_PROJECTS: readonly OtherProject[] = [
  {
    name: "세미콜론",
    fullName: "컴퓨터공학부 학회 페이지",
    summary: "학회 소개와 내부 운영을 한 페이지에서 다루는 학회 사이트",
    features: ["학회 소개", "학회비 납부자 체크", "회의록 작성"],
    role: "Frontend · Design · Backend",
    links: { service: "https://semicolon-psi-blush.vercel.app/" },
  },
  {
    name: "길맛로드",
    summary: "길거리 푸드트럭 정보를 모아 보여주는 사이트",
    features: ["푸드트럭 정보 제공", "푸드트럭 제보", "좋아요 · 리뷰"],
    role: "Frontend · Design",
    links: { github: "https://github.com/iyeonggyu0/FoodMap" },
  },
  {
    name: "LA",
    summary: "지역별 축제 · 행사 정보를 모아 AI 요약과 함께 보여주는 서비스",
    features: ["지역별 축제 · 행사 정보 수집", "AI 요약 · 코멘트", "AI 채팅"],
    role: "Frontend · Design",
    links: { github: "https://github.com/Tim3208/LA" },
  },
  {
    name: "ReadUp",
    summary: "기사를 직접 요약해 보고 AI에게 채점받는 독해력 향상 서비스",
    features: ["기사 읽고 직접 요약", "AI 채점 · 피드백"],
    role: "Frontend · Design",
    links: {
      github:
        "https://github.com/Likelion-Ganjiton/ReadUp-Frontend/tree/develop",
    },
  },
  {
    name: "두사타",
    fullName: "두유는 사랑을 타고",
    summary: "동아리 박람회에서 선보인, 웹과 오프라인을 잇는 작품",
    features: [
      "자기를 어필하는 한두 문장을 포스트잇으로 게시",
      "마음에 든 포스트잇을 가져가 뒷면 연락처로 연락",
    ],
    role: "Frontend · Design",
    links: { github: "https://github.com/Tim3208/dusata" },
  },
  {
    name: "Pret",
    summary: "텍스트와 아스키 아트만으로 화면을 구성한 웹 RPG",
    features: ["Pretext 라이브러리 기반 화면 디자인", "웹에서 진행하는 RPG"],
    role: "Frontend",
    links: { service: "https://tim3208.github.io/Pret/" },
  },
  {
    name: "MathGraph",
    summary: "수학 문제에 등장하는 그래프를 직접 그리는 그래프 제작 도구",
    features: [
      "점 · 선분 · 보조선 추가",
      "축 표시",
      "문제 풀이에 필요한 그래프를 빠르게 작성",
    ],
    role: "Frontend · Design",
    links: { service: "https://tim3208.github.io/math-graph/" },
  },
];
