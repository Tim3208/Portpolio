# 에이전트 작업 지침

이 저장소는 박정우의 웹 프론트엔드 개발자 포트폴리오다. 핵심 메시지는 **불편 발견 → 문제 정의 → 제품 판단 → 구현 → 실제 사용 → 개선**이며, 그 과정과 지식을 다른 사람에게 설명하는 경험까지 보여준다. 모든 변경은 실제 경험과 사용자 문제를 중심으로 판단한다.

## 작업 전에 읽을 문서

이 파일은 저장소 전체의 작업 규칙이다. 아래 상세 문서는 해당 작업의 기준이므로 변경 전에 관련 부분을 반드시 읽는다.

| 작업 | 필수 참고 |
| --- | --- |
| 환경 확인·실행·파일 탐색 | [README.md](README.md) |
| 소개·프로젝트·경력·교육·성과·문구 | [docs/content.md](docs/content.md) |
| UI·색상·레이아웃·모션·테마·접근성 | [docs/design.md](docs/design.md) |
| syu-likelion 콘텐츠·이미지 | [점검 기록](artifacts/syu-likelion-review/README.md)도 함께 확인 |

실제 명령과 의존성은 [package.json](package.json), 현재 화면 데이터는 `src/data/`, 콘텐츠 사실과 디자인 계약은 위 상세 문서가 기준이다. 문서와 구현이 다르면 먼저 차이를 확인하고, 근거 없이 사실이나 디자인 계약을 바꾸지 않는다.

소스 주석의 기존 `AGENTS.md §번호`는 [이전 절 번호 참조표](docs/reference-map.md)에서 찾는다. 새 참조는 절 번호 대신 문서 링크와 의미 있는 앵커를 사용한다.

<a id="workflow"></a>

## 작업 방식

- 코드 작성 전에 현재 구조와 요청 범위를 확인한다. 이미 구현된 페이지를 초기 기획안에 맞춰 다시 만들지 않는다.
- 명확하고 되돌릴 수 있는 로컬 작업은 구현·검증까지 진행한다. 파괴적 변경이나 결과를 크게 바꾸는 모호함이 있을 때만 확인한다.
- 독립적으로 수행할 수 있는 일이 품질이나 속도에 도움이 되면 네이티브 서브에이전트에 범위를 나눠 맡긴다.
- 수정 범위와 무관한 코드나 다른 작업자의 변경을 되돌리지 않는다. 작고 검토 가능한 변경을 유지한다.
- 리팩토링은 정리 계획과 보존할 동작을 먼저 정한다. 동작 변경 위험이 있으면 회귀 검증을 확보한다.
- 이 프로젝트의 판단 순서는 읽기 쉬움 → 핵심 메시지 → 사실성 → 모바일 UX → 유지보수 → 합리적인 복잡도 → 시각적 완성도다.

<a id="content-contract"></a>

## 콘텐츠 계약

- 기본 언어는 한국어다. 기술명과 짧은 역할·섹션 라벨에는 영어를 자연스럽게 사용한다.
- 기능 목록이나 이력서 복사 대신 **문제 → 판단 이유 → 해결 → 확인된 결과**로 서술한다.
- 대표 프로젝트 순서는 `syu-likelion` → `eodiya` → `oshi-calendar` → `cctv-scheduler`다. syu-likelion을 가장 깊이 있는 Case Study와 공통 표현의 기준으로 삼는다.
- 사용자 수, 성능, 후기, 역할, 운영 기간, 기술, 연락처를 추정해서 추가하지 않는다. 부족한 정보는 내부 TODO 또는 확인 필요 항목으로 기록한다.
- 출결 관리는 syu-likelion에서 다른 팀원이 구현한 기능이다. 개인 기여에 포함하지 않는다. 프론트엔드 `STAFF` Guard를 서버 전체 보안의 근거로 확대하지 않는다.
- CCTV 도구의 코드·실제 화면은 비공개다. 인수인계 이후 장기 운영 여부는 확인되지 않았다.
- Oshi Calendar의 캘린더에서 마감·보상·오늘 할 일 중심 대시보드로 바뀐 제품 판단을 유지한다.
- 숫자는 [확인된 성과](docs/content.md#results)의 근거와 확인 시점을 지킨다. 실제 이미지도 설명하려는 판단과 연결한다.
- 연락 이메일은 [profile.ts](src/data/profile.ts)의 `PROFILE.email`을 공유한다. Resume PDF가 없으면 다운로드 링크를 만들지 않는다.

<a id="routes"></a>

## 라우트와 렌더링 계약

- 탭은 실제 라우트다: `/`, `/work`, `/career`, `/teaching`. `/projects/[slug]`는 상세 페이지에서 다섯 번째 탭으로 표시한다. 탭 이동을 로컬 상태로 대체하지 않는다.
- 탭 목록은 [src/lib/tabs.ts](src/lib/tabs.ts) 하나에서 관리한다. sitemap도 이 목록과 Case Study slug에서 생성한다.
- [layout.tsx](src/app/layout.tsx)가 BrowserFrame, 단일 `main#content`, Contact, Footer를 소유한다. 모든 라우트에서 `#contact`와 본문 건너뛰기 링크가 유효해야 한다.
- 각 페이지는 `h1`을 정확히 하나 가진다. 섹션 제목은 `SectionHeader`의 `level`을 확인한다.
- 별도 사이트 헤더 대신 브라우저 크롬바를 사용한다. 모바일에서도 탭을 숨기지 않고 넘치면 가로 스크롤한다. 활성 탭이 보이도록 유지하며 햄버거 메뉴를 추가하지 않는다.
- 서버 컴포넌트를 기본으로 유지한다. 현재 클라이언트 경계는 `TabStrip`, `AddressBar`, `TabPending`, `ThemeToggle`이다. 탭에 필요한 라벨·색 정보는 서버의 `BrowserChrome`에서 조립해 전달한다.
- Case Study는 [src/data/caseStudies](src/data/caseStudies)의 정적 TypeScript 데이터다. 표시 정보는 `src/data/projects.ts`, 블록 타입은 `caseStudies/types.ts`에서 관리한다. 문서 정리만을 이유로 MDX나 새 콘텐츠 계층을 도입하지 않는다.
- 공개 이미지는 루트의 `public/images/projects/`에 둔다. `artifacts/`는 검토 기록이며 앱에서 직접 제공되는 경로가 아니다.

<a id="design-contract"></a>

## 디자인 계약

상세 토큰과 예외는 [디자인 기준](docs/design.md)을 따른다.

- Cloud Dancer 지면, Earthen Pastels 6계열, 장식용 Accent를 유지한다. 색을 JSX에 하드코딩하지 않고 기존 토큰과 `Project.hue`를 사용한다.
- 한 섹션에 한 색 계열을 쓴다. 여섯 색을 모으는 예외는 Contact 하단 색표본과 OG 이미지다. `tint` 위에는 `ink`·`ink-2`·`hue-deep`만 쓴다.
- Accent는 글자가 닿지 않는 장식면 전용이다. 글자색이나 글자가 있는 버튼 배경으로 사용하지 않는다. 그라디언트·순백·임의 숙련도 그래프를 추가하지 않는다.
- 큰 radius와 그림자는 창 프레임·크롬 컨트롤에 한정한다. 창 셸에 `overflow-*`, `transform`, `filter`를 추가하지 않는다. `--window-shadow`는 `:root`에 두고 `shadow-(--window-shadow)`로 소비한다.
- 테마는 시스템·라이트·다크 세 상태다. 시스템 상태는 `data-theme` 속성이 없어야 한다. [theme.ts](src/lib/theme.ts)의 동기 초기화 스크립트를 `<body>` 첫 자식에 유지하고, 토글은 DOM을 기준으로 읽는다.
- 모바일 바깥 여백 8px, 보이는 탭, 터치 영역, 가로 넘침 방지, 키보드·포커스·대비·alt·제목 계층·`prefers-reduced-motion`을 함께 확인한다.
- 모든 섹션을 같은 둥근 카드나 배지 목록으로 만들지 않는다. 실제 스크린샷, 여백, 타이포, 타임라인, 다이어그램을 메시지에 맞게 사용한다.

<a id="code-quality"></a>

## 코드 품질과 검증

- 기존 유틸리티와 패턴을 먼저 재사용한다. 불필요한 의존성, 과도한 컴포넌트 분리·추상화, `any` 남발, 중복 JSX, 죽은 코드, 디버그 로그를 피한다.
- Next.js 변경 전에는 아래 자동 생성 안내와 설치된 버전의 관련 문서를 확인한다.
- 코드 변경 후에는 관련 동작 검증과 `npm run lint`, `npm run typecheck`, `npm run build`를 실행한다. 오류나 경고를 읽고 실패 원인을 해결한다.
- 문서만 바뀌면 상대 링크·앵커·명령·파일 경로·사실·계약 보존과 `git diff --check`를 확인한다. 테스트나 검사 스크립트를 추가할 필요는 없다.
- UI 변경은 모바일·데스크톱, 시스템·라이트·다크 테마, 키보드 탐색을 확인한다. 콘텐츠 변경은 기여 범위와 숫자 출처를 대조한다.
- 완료 보고에는 바꾼 문서/파일, 정리한 내용, 실제 수행한 검증, 남은 제한을 간결하게 적는다. 실행하지 못한 검사를 통과했다고 쓰지 않는다.

## Next.js 자동 생성 안내

아래 마커 블록은 Next.js가 관리한다. 문서 정리 시 내용을 임의로 삭제하거나 고치지 않는다.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
