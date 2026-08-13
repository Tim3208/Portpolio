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
    hue: "blue",
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
      src: "/images/projects/syu-likelion.png",
      alt: "syu-likelion 메인 화면. 14기 모집을 안내하는 랜딩 페이지로, 동아리 마스코트와 사용 기술 태그, 지원하기 버튼이 배치되어 있다.",
      // 원본 1.48 → 카드 1.6. 위를 기준으로 잘라 헤드라인과 지원 CTA 를 살린다.
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
    hue: "mauve",
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
    hue: "clay",
    technologies: ["Vanilla JavaScript", "HTML", "CSS", "LocalStorage"],
    coverWithheld: "보안상 화면 비공개",
  },
];

export const FEATURED_PROJECT = PROJECTS[0];
export const SUPPORTING_PROJECTS = PROJECTS.slice(1);
