# 박정우 포트폴리오

> 프론트엔드 개발자 박정우

동아리 모집·운영 화면과 캠퍼스 지도를 만들었습니다. 사용자 화면과 운영진 기능, API 연동부터 배포 이후 수정까지 경험했습니다. 실제 프로젝트 화면과 본인이 맡은 일, 선택한 이유, 확인된 결과를 담은 포트폴리오입니다.

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

사이트 전체를 화면 가운데의 브라우저 창 하나로 표현합니다. 데스크톱에서는 창이 화면 높이에 고정되고 본문은 창 안에서 스크롤합니다. 크롬은 탭줄(탭 전환·닫기·새 탭), 도구줄(뒤로·앞으로·새로고침·주소창·테마), 북마크바 3행입니다. 모바일에서는 창 연출 없이 일반 페이지로 보입니다.

현재는 디자인 **스케치 단계**라 흑백 와이어프레임으로 구조와 스토리라인만 보여줍니다. 이미지 자리는 플레이스홀더입니다.

| 경로 | 콘텐츠 |
| --- | --- |
| `/` | 홈(스토리형) — 소개 → 대표 프로젝트 → 일하는 방식(AgentFlow) → Communication → Career → 그 밖의 프로젝트 |
| `/work` | 프로젝트 — 대표, 보조(나의 역할·프로젝트 소개·확인된 결과 비교), 그 밖의 프로젝트 |
| `/career` | 경력 — 타임라인, 수상, 프로젝트에서 사용한 기술 |
| `/teaching` | 교육 경험 — 교육 대상·내용·기간·결과, 설명을 맞추는 방법 |
| `/projects/[slug]` | Case Study — 프로젝트별 문제·판단·구현·결과 |
| `/new` | 새 탭 시작 페이지 — 주소창 입력과 페이지 바로가기 (연출용) |
| `/external` | 주소창에 사이트 밖 주소나 검색어를 입력했을 때의 안내 (연출용) |
| 그 밖의 경로 | 창 안에서 보여주는 404와 홈으로 돌아가기 |

상세 페이지가 있는 프로젝트 slug는 `syu-likelion`, `make-a-wish`, `eodiya`, `oshi-calendar`, `agentflow`, `cctv-scheduler`입니다. Contact와 Footer는 모든 페이지의 공통 마무리로 유지됩니다.

창 안의 탭은 sessionStorage에 저장되어 새로고침에는 유지되고, 실제 브라우저 탭을 닫으면 사라집니다. 본문 링크를 Ctrl/Cmd·휠 클릭하면 실제 브라우저의 새 탭으로 열립니다.

syu-likelion 상세는 일곱 섹션으로 구성하며, 통합 전 `#section-01`부터 `#section-12`까지의 링크를 유지합니다. 수치는 관련 경험 옆에만 표시하고, 팀 집계처럼 출처가 따로 있는 수치는 출처와 시점을 함께 적습니다.

## 기술과 구조

[package.json](package.json) 기준으로 Next.js 16.3.0 App Router, React 19.2.8, TypeScript 6, Tailwind CSS 4를 사용합니다. Pretendard와 JetBrains Mono는 패키지에서 자체 호스팅합니다. 콘텐츠는 정적 TypeScript 데이터로 관리합니다.

```text
src/
├─ app/                 라우트, 공통 레이아웃, CSS, metadata·OG·sitemap
├─ components/
│  ├─ browser/          창, 탭 상태, 탭줄, 도구줄·주소창, 본문 영역
│  ├─ layout/           Contact, Footer, ThemeToggle
│  ├─ project/          Case Study 블록 렌더링
│  └─ sketch/           스케치 단계 공통 요소 (Container, Placeholder)
├─ data/                프로필, 프로젝트, 경력, 수상, 기술, 교육, 홈 스토리 요약
│  └─ caseStudies/      프로젝트별 상세 본문과 블록 타입
└─ lib/                 주요 페이지 목록, 주소창 해석, 테마, 색맥락, 사이트 URL, OG 공통 설정
public/images/projects/ 실제 서비스 이미지
docs/                   콘텐츠 근거, 디자인 규칙, 이전 문서 참조표
artifacts/              기존 콘텐츠 점검 기록과 검토용 캡처
```

## 수정할 파일 찾기

| 수정 내용 | 기준 파일 |
| --- | --- |
| 한 줄 소개, 연락 이메일, `/career` 전공 배경 | [profile.ts](src/data/profile.ts) |
| GitHub 공통 주소, 섹션 ID | [sections.ts](src/lib/sections.ts) |
| 프로젝트 목록, 기본 정보·성과, 표지와 이미지 비율 | [projects.ts](src/data/projects.ts) |
| Case Study 본문·등록·블록 모델·기존 앵커 호환 | [caseStudies](src/data/caseStudies), [index.ts](src/data/caseStudies/index.ts), [types.ts](src/data/caseStudies/types.ts) |
| 경력, 수상, 기술, 교육 | [experiences.ts](src/data/experiences.ts), [awards.ts](src/data/awards.ts), [skills.ts](src/data/skills.ts), [teaching.ts](src/data/teaching.ts) |
| 프로젝트 층·성격·판단·결과·담당 구분 | [projects.ts](src/data/projects.ts)의 `tier`·`kind`·`decision`·`outcome`·`ownership` |
| 주요 페이지 목록(북마크·내비·sitemap) | [pages.ts](src/lib/pages.ts) |
| 창 안 탭·방문 기록·주소창 동작 | [tabStore.ts](src/components/browser/tabStore.ts), [BrowserProvider.tsx](src/components/browser/BrowserProvider.tsx), [address.ts](src/lib/address.ts) |
| 색상·타이포·간격·반응형 토큰 | [globals.css](src/app/globals.css), [hue.ts](src/lib/hue.ts) (스케치 단계에서는 흑백 토큰만 사용) |
| 시스템·라이트·다크 테마 | [theme.ts](src/lib/theme.ts), [ThemeToggle.tsx](src/components/layout/ThemeToggle.tsx) |
| 사이트 URL·검색 및 공유 정보 | [site.ts](src/lib/site.ts), [layout.tsx](src/app/layout.tsx), [sitemap.ts](src/app/sitemap.ts), [og.ts](src/lib/og.ts), [홈 OG 이미지](src/app/opengraph-image.tsx) |

프로젝트를 추가할 때는 카드 데이터(홈의 `problem` 포함), 상세 데이터, `caseStudies/index.ts` 등록을 함께 확인합니다. sitemap은 주요 페이지 목록과 상세 slug 목록에서 생성됩니다. OG 이미지가 읽는 Pretendard OTF 파일은 [next.config.ts](next.config.ts)의 `outputFileTracingIncludes`에 등록되어 있습니다.

소개를 바꾸면 페이지 제목·설명과 홈 OG 이미지도 함께 갱신합니다. 이미지별 비율은 선택 속성 `aspectRatio`로 지정하며, 미지정 이미지는 기존 잘림을 유지합니다. 실제 화면을 공개할 수 없는 CCTV는 도식과 비공개 사유를 제공합니다.

Resume 다운로드는 PDF 확보 전까지 표시하지 않습니다. 파일이 준비되면 [Contact.tsx](src/components/layout/Contact.tsx)의 TODO를 처리합니다.

## 문서 안내

| 문서 | 역할 |
| --- | --- |
| [AGENTS.md](AGENTS.md) | 에이전트 작업 규칙, 변경 시 지켜야 할 계약 |
| [콘텐츠 기준](docs/content.md) | 개발자·프로젝트 사실, 성과 근거, Case Study 작성 원칙 |
| [디자인 기준](docs/design.md) | 팔레트, 창 프레임, 테마, 반응형, 접근성 |
| [이전 절 번호 참조표](docs/reference-map.md) | 소스 주석에 남은 기존 AGENTS.md §1–56의 새 위치 |
| [syu-likelion 점검 기록](artifacts/syu-likelion-review/README.md) | 2026-08-16 콘텐츠·이미지 검토 및 반영 근거 |

프로젝트 사실과 성과를 바꿀 때는 콘텐츠 기준의 근거와 화면 데이터를 함께 갱신합니다. 디자인 규칙을 바꿀 때는 디자인 기준과 구현 토큰을 함께 확인합니다.
