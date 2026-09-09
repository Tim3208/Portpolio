# 박정우 포트폴리오

> 불편을 발견하고 웹으로 해결합니다.

사용자의 반복적인 불편을 발견하고, 제품과 UX를 판단하고, 실제 서비스로 구현·운영한 경험을 담은 웹 프론트엔드 개발자 포트폴리오입니다. 대표 프로젝트의 문제·판단·해결·결과를 Case Study로 보여줍니다.

## 로컬 실행

Node.js와 npm이 필요합니다. 잠금 파일에 기록된 Next.js의 Node 요구 범위는 `>=20.9.0`이며, 프로젝트 자체의 Node 버전 고정 파일은 없습니다.

```sh
npm ci
npm run dev
```

[로컬 개발 서버](http://localhost:3000)를 엽니다. Windows PowerShell에서 `npm.ps1` 실행이 제한되면 같은 명령에 `npm.cmd`를 사용합니다.

| 명령 | 용도 |
| --- | --- |
| `npm run dev` | 개발 서버 |
| `npm run lint` | ESLint 검사 |
| `npm run typecheck` | TypeScript 검사 |
| `npm run build` | 프로덕션 빌드·정적 페이지 생성 |
| `npm start` | 빌드 결과로 프로덕션 서버 실행 |

명령의 기준은 [package.json](package.json)입니다. 별도 `test`·`deploy` 스크립트는 없습니다.

## 환경 변수와 배포 URL

로컬 실행에는 환경 변수 설정이 필요하지 않습니다. 배포 도메인을 지정할 때는 [.env.example](.env.example)을 참고해 `.env.local` 또는 배포 환경에 `NEXT_PUBLIC_SITE_URL`을 설정합니다. 예시의 `https://example.com`은 실제 도메인으로 바꿉니다.

[src/lib/site.ts](src/lib/site.ts)의 URL 결정 순서는 다음과 같습니다.

1. `NEXT_PUBLIC_SITE_URL`: 프로토콜을 포함한 절대 URL
2. `VERCEL_PROJECT_PRODUCTION_URL`: Vercel 도메인에 `https://`를 붙인 값
3. `http://localhost:3000`: 로컬 기본값

이 URL은 창 안 주소창의 호스트, canonical URL, sitemap, OG 이미지의 절대 경로에 사용됩니다. 배포 시에는 실제 공개 주소가 적용됐는지 확인합니다.

## 페이지 구성

사이트 전체를 하나의 브라우저 창으로 표현합니다. 탭은 실제 라우트이며, 주소창도 현재 경로를 표시합니다.

| 경로 | 콘텐츠 |
| --- | --- |
| `/` | Home — Hero, About |
| `/work` | Work — 대표 프로젝트 4개, 기타 프로젝트 |
| `/career` | Career — Experience, Awards, Skills |
| `/teaching` | Teaching — 교육·멘토링·해외 IT 교육 |
| `/projects/[slug]` | Case Study — 상세 페이지에서 다섯 번째 탭 표시 |

프로젝트 slug는 `syu-likelion`, `eodiya`, `oshi-calendar`, `cctv-scheduler`입니다. Contact와 Footer는 모든 페이지의 공통 마무리로 유지됩니다.

## 기술과 구조

[package.json](package.json) 기준으로 Next.js 16.3.0 App Router, React 19.2.8, TypeScript 6, Tailwind CSS 4를 사용합니다. Pretendard와 JetBrains Mono는 패키지에서 자체 호스팅합니다. 콘텐츠는 정적 TypeScript 데이터로 관리합니다.

```text
src/
├─ app/                 라우트, 공통 레이아웃, CSS, metadata·OG·sitemap
├─ components/
│  ├─ browser/          창 프레임, 탭, 주소창
│  ├─ home/             각 탭에 배치되는 콘텐츠 섹션
│  ├─ layout/           Container, Footer, HueScope, ThemeToggle
│  ├─ project/          Case Study 렌더링
│  └─ ui/               공통 제목과 수치 표현
├─ data/                프로필, 프로젝트, 경력, 수상, 기술, 교육
│  └─ caseStudies/      프로젝트별 상세 본문과 블록 타입
└─ lib/                 탭, 테마, 색맥락, 사이트 URL, OG 공통 설정
public/images/projects/ 실제 서비스 이미지
docs/                   콘텐츠 근거, 디자인 규칙, 이전 문서 참조표
artifacts/              기존 콘텐츠 점검 기록과 검토용 캡처
```

## 수정할 파일 찾기

| 수정 내용 | 기준 파일 |
| --- | --- |
| 소개, 연락 이메일, Hero 수치 | [profile.ts](src/data/profile.ts) |
| GitHub 공통 주소, 섹션 ID | [sections.ts](src/lib/sections.ts) |
| 프로젝트 카드, 기본 정보, 대표 이미지 | [projects.ts](src/data/projects.ts) |
| Case Study 본문·등록·블록 모델 | [caseStudies](src/data/caseStudies), [index.ts](src/data/caseStudies/index.ts), [types.ts](src/data/caseStudies/types.ts) |
| 경력, 수상, 기술, 교육 | [experiences.ts](src/data/experiences.ts), [awards.ts](src/data/awards.ts), [skills.ts](src/data/skills.ts), [teaching.ts](src/data/teaching.ts) |
| 탭 목록 | [tabs.ts](src/lib/tabs.ts) |
| 색상·타이포·간격·반응형 토큰 | [globals.css](src/app/globals.css), [hue.ts](src/lib/hue.ts) |
| 시스템·라이트·다크 테마 | [theme.ts](src/lib/theme.ts), [ThemeToggle.tsx](src/components/layout/ThemeToggle.tsx) |
| 사이트 URL·검색 및 공유 정보 | [site.ts](src/lib/site.ts), [layout.tsx](src/app/layout.tsx), [sitemap.ts](src/app/sitemap.ts), [og.ts](src/lib/og.ts) |

프로젝트를 추가할 때는 카드 데이터, 상세 데이터, `caseStudies/index.ts` 등록을 함께 확인합니다. sitemap은 탭과 상세 slug 목록에서 생성됩니다. OG 이미지가 읽는 Pretendard OTF 파일은 [next.config.ts](next.config.ts)의 `outputFileTracingIncludes`에 등록되어 있습니다.

Resume 다운로드는 PDF 확보 전까지 표시하지 않습니다. 파일이 준비되면 [Contact.tsx](src/components/home/Contact.tsx)와 [Footer.tsx](src/components/layout/Footer.tsx)의 TODO를 함께 처리합니다.

## 문서 안내

| 문서 | 역할 |
| --- | --- |
| [AGENTS.md](AGENTS.md) | 에이전트 작업 규칙, 변경 시 지켜야 할 계약 |
| [콘텐츠 기준](docs/content.md) | 개발자·프로젝트 사실, 성과 근거, Case Study 작성 원칙 |
| [디자인 기준](docs/design.md) | 팔레트, 창 프레임, 테마, 반응형, 접근성 |
| [이전 절 번호 참조표](docs/reference-map.md) | 소스 주석에 남은 기존 AGENTS.md §1–56의 새 위치 |
| [syu-likelion 점검 기록](artifacts/syu-likelion-review/README.md) | 2026-08-16 콘텐츠·이미지 검토 및 반영 근거 |

프로젝트 사실과 성과를 바꿀 때는 콘텐츠 기준의 근거와 화면 데이터를 함께 갱신합니다. 디자인 규칙을 바꿀 때는 디자인 기준과 구현 토큰을 함께 확인합니다.
