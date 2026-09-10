# Design Guide

이 문서는 포트폴리오의 시각 시스템과 인터랙션 규칙을 정리한다. 기준 소스는 [globals.css](../src/app/globals.css), [hue.ts](../src/lib/hue.ts), [theme.ts](../src/lib/theme.ts), [browser components](../src/components/browser), [Contact](../src/components/home/Contact.tsx), [Footer](../src/components/layout/Footer.tsx), [og.ts](../src/lib/og.ts)다.

AGENTS 원문은 `--paper`, `--ink`처럼 짧은 토큰 이름을 쓴다. 실제 구현은 Tailwind v4 `@theme` 토큰이므로 대부분 `--color-paper`, `--color-ink`처럼 `--color-*` 접두사를 붙인다. 이 문서는 실제 구현 이름을 우선하고, 필요한 경우에만 원문 축약 이름을 함께 적는다.

<a id="direction"></a>

## Direction

이 사이트는 이름, 실제로 만든 화면, 본인이 맡은 일이 먼저 보이는 프론트엔드 개발자 포트폴리오다. 국내 채용 담당자가 프로젝트의 문제·판단·구현·확인된 결과를 읽을 수 있게 한다.

판단 기준은 Clean, Product-oriented, Editorial, Minimal, Professional, Developer + Product Design이다. Linear, Vercel, Toss Tech처럼 절제된 제품 문서의 방향을 참고하되 특정 사이트를 복제하지 않는다.

피해야 할 것은 기술 아이콘 대량 나열, 의미 없는 Three.js, 네온/터미널 스타일, 커서 추적, 모든 섹션의 카드화, 과한 배지, 근거 없는 "Innovative / Passionate / Creative" 카피, 임의 Skill Percentage다.

프로젝트 설명은 기능 목록보다 문제, 판단, 해결, 결과의 흐름을 먼저 보여준다.

<a id="layout"></a>

## Layout

전체 사이트는 하나의 브라우저 창이 데스크 위에 떠 있는 구조다. 실제 셸은 [BrowserFrame](../src/components/browser/BrowserFrame.tsx), 크롬은 [BrowserChrome](../src/components/browser/BrowserChrome.tsx)이 소유한다.

Case Study는 Text, Screenshot, Diagram, Metric을 섞어 구성한다. 텍스트만 길게 이어지는 페이지를 피하고, 각 섹션은 하나의 메시지만 갖는다.

Home은 소개와 syu-likelion 지원서 평가 화면을 나란히 배치하고, 모바일에서는 소개·링크·이미지 순서로 쌓는다. 1440×900 첫 화면에 이름·직무·대표 프로젝트·이미지·관련 성과가 보이고, 390×844에서는 주요 링크 다음에 이미지가 시작하도록 높이와 여백을 조정한다. 서로 다른 경험의 수치를 모은 레일은 사용하지 않는다. About은 두 문단과 Career·Teaching 링크로 구성한다.

Work는 큰 대표 프로젝트 한 개와 이미지·설명이 나란한 세 행으로 구성한다. 상세 Hero는 프로젝트 이름, 설명, 역할·기간·팀·성과를 먼저 제시하며 syu-likelion에는 실제 랜딩 화면을 둔다. 모든 섹션을 같은 작은 영문 라벨·큰 제목·설명·구분선 조합으로 반복하지 않는다.

| 토큰 | 값 | 용도 |
| --- | ---: | --- |
| `--container-window` | `84rem` | 창 최대 폭 |
| `--container-shell` | `70rem` | 기본 컨테이너 |
| `--container-break` | `67.5rem` | Case Study breakout |
| `--container-case` | `45rem` | Case Study 본문 |
| `--container-measure` | `66ch` | 긴 본문 measure |
| `--spacing-section / md / lg / xl` | `4.5rem / 6.5rem / 8.75rem / 10rem` | 섹션 간격 |
| `--spacing-gutter / md / lg` | `1.25rem / 2.5rem / 4rem` | 좌우 여백 |

<a id="typography"></a>

## Typography

타이포그래피는 전달을 우선한다. 우선순위는 강한 Heading, 읽기 쉬운 Body, 명확한 Metadata, 작은 Label 순서다.

[layout.tsx](../src/app/layout.tsx)는 Pretendard와 JetBrains Mono를 self-host한다. 본문·설명·제목·역할·라벨은 Pretendard를 사용하고, 모노 폰트는 코드·날짜·수치에 한정한다.

| 토큰 | 값 | 역할 |
| --- | ---: | --- |
| `--text-display` | `clamp(2rem, 5.6vw, 3.375rem)` | Hero와 큰 문장 |
| `--text-h2` | `clamp(1.5rem, 3.4vw, 2rem)` | 섹션 제목 |
| `--text-h3` | `1.25rem` | 카드/작은 제목 |
| `--text-body` | `1rem` | 기본 본문 |
| `--text-small` | `0.875rem` | 보조 설명·메타데이터 14px |
| `--text-label` | `0.6875rem` | 짧은 보조 라벨 |
| `--text-metric` | `clamp(1.75rem, 4vw, 2.5rem)` | 수치 |

주요 한국어 설명은 `--text-body` 16px로 읽히게 한다. 한글 본문은 `word-break: keep-all`을 기본으로 하고, 수치에는 `tabular-nums`로 자릿수를 맞춘다. `SectionHeader.eyebrow`는 선택 속성이며 제목과 같은 뜻의 영문 라벨은 생략한다. 상세 제목과 목차에서는 장식 번호를 표시하지 않되 기존 섹션 앵커는 보존한다.

<a id="color"></a>

## Color

팔레트는 PANTONE 11-4201 TCX Cloud Dancer 지면, Earthen Pastels 6계열, 장식용 Accent 하나로 고정한다. 순백 `#FFFFFF`은 사용하지 않는다. 라이트 테마의 Cloud Dancer는 강조색이 아니라 지면이다.

색은 장식이 아니라 정보 구조다. 섹션마다 하나의 hue를 걸고, 링크, 수치, 포커스링, 식별 바가 같은 색맥락을 공유한다. 색을 새로 추가하려면 `#F0EEE9`와 `#171613` 양쪽 대비를 실제로 계산한다.

<a id="ground"></a>

## Ground

| 실제 토큰 | 원문 | 값 | 용도 |
| --- | --- | ---: | --- |
| `--color-paper` | `--paper` | `#F0EEE9` | 창 안쪽 지면 |
| `--color-paper-raised` | `--paper-raised` | `#F7F6F2` | 밝게 띄운 면 |
| `--color-paper-sunk` | `--paper-sunk` | `#E7E4DC` | 코드, Before 블록 |
| `--color-deep-ground` | `--deep-ground` | `#22201B` | Contact/Footer 반전 블록 |
| `--color-desk` | `--desk` | `#E6E2DA` | 창 바깥 데스크 |
| `--color-chrome` | `--chrome` | `#EAE7E0` | 브라우저 크롬바 |
| `--color-omnibox` | `--omnibox` | `#F2F0EC` | 주소창 면 |

[Contact](../src/components/home/Contact.tsx)와 [Footer](../src/components/layout/Footer.tsx)는 `--color-deep-ground` 위에 놓인다. 이 영역에서는 Cloud Dancer가 글자색이 된다.

<a id="ink"></a>

## Ink

| 실제 토큰 | 원문 | 값 | 용도 |
| --- | --- | ---: | --- |
| `--color-ink` | `--ink` | `#1E1C18` | Heading, 강한 본문 |
| `--color-ink-2` | `--ink-2` | `#57544C` | 기본 본문 |
| `--color-ink-3` | `--ink-3` | `#6E6A62` | 메타데이터, 라벨 |
| `--color-rule` | `--rule` | `#DCD8CF` | Hairline |
| `--color-rule-strong` | `--rule-strong` | `#C6C1B6` | 강조 Hairline |
| `--color-deep-ink` | - | `#F0EEE9` | deep-ground 위 주 텍스트 |
| `--color-deep-ink-2` | - | `#9B968B` | deep-ground 위 보조 텍스트 |

`--color-ink-3`는 지면과 wash 위에서만 쓴다. tint 위에서는 대비가 부족하다. 라이트 메타데이터·라벨 색을 `#6E6A62`보다 더 밝게 내리지 않는다.

<a id="palette"></a>

## Palette

Earthen Pastels는 wash, tint, deep 3단 램프로만 쓴다. `wash`는 섹션 지면, `tint`는 채워진 면, `deep`은 링크/버튼/수치/섹션 번호/포커스링이다.

| 계열 | wash | tint | deep | 배정 |
| --- | ---: | ---: | ---: | --- |
| Earth Mocha | `#F2EDEA` | `#E2D5CD` | `#6C4D3A` | 시스템 기본값, syu-likelion |
| Earth Terracotta | `#F3EBEA` | `#E3CFCC` | `#78463E` | Skills, CCTV Scheduler |
| Earth Wheat | `#F3F0EA` | `#E3DCCC` | `#60522F` | Experience |
| Earth Sage | `#EEF1EC` | `#D6DFD0` | `#46583B` | Teaching, 삼육대 어디야 |
| Earth Plum | `#F1ECEF` | `#DDD2DA` | `#674A5E` | Oshi Calendar |
| Earth Blush | `#F2EBED` | `#DFD0D3` | `#714850` | About |

프로젝트 색 배정은 [projects.ts](../src/data/projects.ts)의 `Project.hue`가 단일 출처다. Work 카드, 상세 Hero, 프로젝트 탭과 이전·다음 프로젝트 Navigation이 이 값을 공유한다.

<a id="hue"></a>

## Hue

한 섹션에는 `.hue-*` 클래스를 하나만 건다. 실제 클래스는 [hue.ts](../src/lib/hue.ts)의 `HUE_CLASS`가 관리한다.

| hue | CSS scope |
| --- | --- |
| `mocha` | `.hue-mocha` |
| `terracotta` | `.hue-terracotta` |
| `wheat` | `.hue-wheat` |
| `sage` | `.hue-sage` |
| `plum` | `.hue-plum` |
| `blush` | `.hue-blush` |

`.hue-*`는 `--hue-wash`, `--hue-tint`, `--hue-deep`을 바꾼다. 하위 컴포넌트에서 색맥락에 따라 바뀌어야 하는 색은 `bg-hue-wash`, `bg-hue-tint`, `text-hue-deep`, `border-hue-deep` 별칭으로 사용한다. 본문과 지면에는 해당 역할의 ink·paper 토큰을 유지한다.

여섯 색이 한 화면에 모두 모이는 곳은 Contact 하단 색표본 스트립과 OG 이미지뿐이다. 스트립은 [Footer](../src/components/layout/Footer.tsx)의 `STRIP`과 `--color-strip-*`, OG 색은 [og.ts](../src/lib/og.ts)에 고정되어 있다.

<a id="contrast"></a>

## Contrast

`deep` 6종은 Cloud Dancer 위에서 `6.56 : 1`부터 `6.66 : 1` 범위로 맞춘다. 편차는 `0.1` 이내다. tint 위에서도 `5.12 : 1`부터 `5.64 : 1`까지의 대비를 지킨다.

| tint 위 허용 색 | 대비 기준 |
| --- | ---: |
| `--color-ink` | `11.2 : 1` |
| `--color-ink-2` | `4.9 : 1` |
| `--hue-deep` | `5.0 ~ 5.6 : 1` |

`--color-ink-3`는 tint 위에서 `3.5 : 1`로 떨어지므로 쓰지 않는다.

<a id="color-prohibitions"></a>

## Color Prohibitions

- 그라디언트를 쓰지 않는다. 파스텔은 언제나 단색 면이다.
- 한 섹션에 두 계열 이상을 섞지 않는다.
- 파스텔을 본문이나 Heading 색으로 쓰지 않는다.
- tint 위에 `--color-ink-3`를 올리지 않는다.
- 색만으로 정보를 전달하지 않는다. 프로젝트 색에는 항상 이름을 함께 둔다.
- 대비 범위를 벗어나는 파스텔을 추가하지 않는다.
- JSX에 색상 hex를 하드코딩하지 않는다. 색은 토큰, hue 데이터, OG 토큰 중 하나에서 온다.

<a id="dark-theme"></a>

## Dark Theme

다크 테마는 반전이 아니라 역할 교체다. Cloud Dancer는 지면에서 잉크로 올라오고, 파스텔은 다크 지면에서 읽히는 값으로 다시 정의된다.

다크 값은 `@media (prefers-color-scheme: dark)`의 `:root:not([data-theme="light"])`와 `:root[data-theme="dark"]`에 같은 값으로 둔다. `.hue-*` 스코프와 컴포넌트 CSS는 바꾸지 않는다.

| 묶음 | 다크 값 |
| --- | --- |
| 지면/잉크 | `--color-paper #171613`, `--color-paper-raised #1F1E1A`, `--color-paper-sunk #100F0D`, `--color-deep-ground #0C0B09`, `--color-ink #F0EEE9`, `--color-ink-2 #A8A398`, `--color-ink-3 #8B8779`, `--color-rule #2E2C27`, `--color-rule-strong #423F38` |
| Mocha | `#211B17`, `#45352B`, `#CEB7AB` |
| Terracotta | `#211817`, `#462E2A`, `#D2B6B1` |
| Wheat | `#221E16`, `#473E29`, `#C8BA9B` |
| Sage | `#1B1F19`, `#36412F`, `#B0C1A7` |
| Plum | `#1F191D`, `#40303B`, `#C9B7C3` |
| Blush | `#20181A`, `#422E32`, `#CDB6BB` |
| 창 프레임 | `--color-desk #0F0E0C`, `--color-chrome #1C1B17`, `--color-omnibox #232019`, `--color-accent #B98D77`, `--window-shadow 0 0 0 1px #423F38, 0 24px 60px -24px rgb(0 0 0 / 0.7)` |

다크의 `deep` 6종은 `#171613` 위에서 `9.44 : 1 ~ 9.54 : 1`로 맞춘다. 두 다크 블록의 18개 파스텔 토큰과 창 프레임 5개 값을 함께 유지한다. Contact/Footer의 `--color-deep-ink`, `--color-deep-ink-2`, 여섯 `--color-strip-*`는 테마와 무관한 상수다.

테마 상태는 셋이다. 시스템은 `data-theme` 없음, 라이트 고정은 `data-theme="light"`, 다크 고정은 `data-theme="dark"`다. 시스템 상태에서 속성이 없어야 OS 다크 모드를 따른다.

[theme.ts](../src/lib/theme.ts)의 동기 초기 스크립트는 `<body>` 첫 자식에 두고 첫 페인트 전에 저장된 라이트·다크 값이 있을 때만 `data-theme`를 붙인다. [ThemeToggle](../src/components/layout/ThemeToggle.tsx)은 DOM의 `data-theme`를 단일 출처로 삼는다. `next-themes`를 도입하지 않는 프로젝트의 이유는 시스템 상태에서도 속성을 비워 두는 현재 CSS 계약을 유지하기 위해서다.

<a id="accent"></a>

## Accent

Accent는 장식면 전용이다. 라이트 값은 `#A47864`, 다크 값은 `#B98D77`이다.

`#A47864`는 Cloud Dancer 위에서 `3.32 : 1`이고, `#F0EEE9` 글자를 올려도 `3.32 : 1`이다. 본문 색, 링크 색, 버튼 배경으로 쓰지 않는다.

허용 위치는 탭 활성 라인, 신호등 점, 식별 바, 보더처럼 글자가 닿지 않는 면이다. 텍스트, 링크, 버튼 배경이 필요하면 `--color-mocha-deep` `#6C4D3A`를 쓴다. 라이트 버튼은 `bg-mocha-deep` + `text-paper` 조합으로 `6.56 : 1`을 확보한다. 리뷰에서는 `text-accent`와 글자가 있는 `bg-accent` 사용을 확인한다.

<a id="motion"></a>

## Motion

모션은 목적이 있을 때만 사용한다. 허용 범위는 section reveal, hover transition, card hover, image scale, navigation transition, subtle hero motion이다.

금지 범위는 scroll hijacking, 과한 parallax, cursor follower, 지속적인 background animation, 읽기를 방해하는 움직임이다.

[globals.css](../src/app/globals.css)는 `prefers-reduced-motion: reduce`에서 animation, transition, smooth scroll을 사실상 끈다. Section Reveal은 CSS scroll-driven animation으로 둔다. 미지원 브라우저에서는 처음부터 보이는 상태가 맞다.

<a id="responsive"></a>

## Responsive

| 항목 | 규칙 |
| --- | --- |
| 데스크 여백 | `8px`, `24px` at `48rem`, `40px` at `64rem` |
| 크롬 높이 | 모바일 `48px`, `48rem` 이상 `92px` |
| 모바일 크롬 | 탭 + 테마 토글 1행 |
| 데스크 크롬 | 신호등/탭 행 + 주소창/Contact/GitHub/테마 행 |
| 터치 타깃 | 탭, 버튼, 링크 모두 최소 `44px` |

모바일 여백을 0으로 만들지 않는다. 좁은 화면에서는 신호등과 주소창을 숨긴다. 실제 브라우저 주소창이 이미 있고, 2행 sticky 크롬은 본문을 많이 가린다. 모바일에서는 큰 Heading의 크기를 제한하고, Case Study 이미지를 세로로 쌓고, 가로 넘침을 방지한다.

탭바는 모바일에서도 숨기지 않는다. 탭은 실제 라우트 내비게이션이다. 넘치면 [TabStrip](../src/components/browser/TabStrip.tsx)이 목록만 가로로 스크롤해 활성 탭을 보이는 위치에 둔다. 문서 스크롤과 키보드 탐색 시작점은 옮기지 않는다. 햄버거 메뉴로 대체하지 않는다.

<a id="accessibility"></a>

## Accessibility

기본 원칙은 semantic HTML, keyboard navigation, focus state, 충분한 contrast, 이미지 alt, 명확한 button/link 목적, heading hierarchy, reduced motion 대응이다.

구현 규칙은 다음과 같다.

- 탭은 실제 링크다. `role="tab"`과 `role="tablist"`를 붙이지 않는다.
- 활성 페이지 링크에는 `aria-current="page"`를 쓴다.
- Case Study 다섯 번째 탭의 닫기 표시는 `/work`로 이동하는 링크다.
- 주소창은 입력할 수 없으므로 `<input>`이 아니라 `aria-hidden`인 `<p>`다.
- 신호등은 동작하지 않으므로 `<button>`이 아니라 `aria-hidden`인 `<div>`다.
- skip link는 [layout.tsx](../src/app/layout.tsx)의 `#content`를 향한다. `main`의 `tabIndex={-1}`은 링크 실행 시 본문으로 포커스를 옮기되 일반 Tab 순서에는 추가하지 않는다.
- 포커스링은 `--hue-deep`을 사용해 현재 섹션 색맥락을 따른다.

크롬에 뒤로, 앞으로, 새로고침 버튼을 넣지 않는다. 브라우저가 이미 제공하는 동작을 중복 구현하거나 동작하지 않는 장식 컨트롤을 만들지 않는다.

<a id="screenshots"></a>

## Screenshots

실제 서비스 스크린샷을 사용한다. 단, 갤러리처럼 나열하지 않고 앞뒤에 문제, 판단, 결과 중 하나를 둔다.

[ProjectCover](../src/components/project/ProjectCover.tsx)는 스크린샷이 없을 때 목업을 만들지 않는다. 실제 화면을 공개할 수 없는 프로젝트는 `coverWithheld` 사유를 그대로 보여준다. 이미지 alt는 화면의 의미와 보이는 정보를 설명하고, 확인되지 않은 숫자를 추가하지 않는다.

상세 이미지 블록과 프로젝트 표지는 선택적인 `aspectRatio`를 지원한다. 미지정 이미지는 기존 기본 비율과 잘림 위치를 유지한다. 이미지 로딩 크기는 실제 표시 폭에 맞추고 첫 화면 대표 이미지에만 우선 로딩을 적용한다.

| 이미지 | 표시 기준 |
| --- | --- |
| syu-likelion 지원서 평가 `syu-likelion-admin2.png` | 원본 비율 `1205 / 891`; 답변·점수·코멘트 대조가 보여야 함 |
| 삼육대 어디야 | 기존 가로 이미지 원본 비율 `1090 / 720`; 검색 결과와 지도 함께 표시 |
| syu 면접 결과 | 기존 비율과 세로 잘림 위치 `40%` 유지 |
| syu 마이페이지 | 기존 비율과 세로 잘림 위치 `88%` 유지 |
| Oshi Calendar | 계정 영역을 제외한 기존 잘림 유지; 샘플 데이터임을 캡션에 명시 |
| CCTV | 실제 화면 목업 대신 공개 가능한 제약·편성·저장 흐름 도식과 비공개 사유 |

삼육대 어디야 모바일 캡처는 확보 후 교체할 후속 작업이다. 기존 가로 이미지를 모바일 화면처럼 합성하지 않는다. [기존 syu-likelion 점검 기록](../artifacts/syu-likelion-review/README.md)은 과거 검토 근거이며, 현재 배치·목차·이미지 비율은 이 문서와 [콘텐츠 기준](content.md#syu-likelion)을 따른다.

<a id="diagrams"></a>

## Diagrams

텍스트보다 흐름이 중요한 곳에서는 다이어그램을 쓴다. 복잡한 다이어그램 라이브러리가 기본값은 아니다.

권장 대상은 syu-likelion의 분산 도구에서 통합 플랫폼으로 바뀌는 흐름, 지원서 제출부터 최종 합격까지의 운영 flow, Oshi Calendar가 Calendar 중심에서 Deadline/Reward Priority/Todo/Game Hub 중심으로 바뀐 판단, 기술 문제의 문제/원인/선택지/결정/구현/결과 흐름이다.

<a id="visual-patterns"></a>

## Visual Patterns

반복 컴포넌트를 재사용하되 모든 섹션을 같은 모양으로 만들지 않는다. [CaseSection](../src/components/project/CaseSection.tsx)은 block type마다 폭과 표면을 다르게 둔다.

| 영역 | 중심 표현 |
| --- | --- |
| Home Hero | 이름·직무와 실제 대표 작업 화면 |
| Work | 큰 대표 영역과 이미지·설명이 나란한 행 |
| Metrics | 해당 프로젝트·교육 경험 옆 수치 |
| Experience | Timeline |
| Skills | Compact Text |
| Case Study | Editorial Layout |
| Awards | Minimal List |

판단 블록은 문제와 선택지, 채택 이유를 본문과 목록으로 전달한다. 고정 영문 라벨과 선택 표시 기호로 모든 결정을 같은 양식에 맞추지 않는다. 홈 OG 이미지도 현재 이름·직무·작업 소개와 맞추고 서로 다른 경험의 숫자 레일은 사용하지 않는다.

콘텐츠 요소는 `rounded-xs`(2px)와 hairline을 기본으로 한다. 큰 radius와 깊은 shadow는 창 프레임 예외에만 허용한다. Glassmorphism, 모든 카드의 아이콘, 수십 개의 Pill Badge, Emoji 남발을 피한다.

<a id="browser-frame"></a>

## Browser Frame

브라우저 창 프레임은 AI 디자인 느낌 줄이기 규칙의 유일한 예외다. 사이트 전체가 하나의 창으로 읽혀야 하므로 창 하나에 필요한 radius와 shadow만 허용한다.

| 토큰 | 값 | 용도 |
| --- | ---: | --- |
| `--radius-window` | `1rem` / `16px` | 창 하나 |
| `--radius-panel` | `0.625rem` / `10px` | 탭, 주소창 |
| `--radius-chip` | `0.375rem` / `6px` | 토글, 작은 컨트롤 |
| `--window-shadow` | light shadow 또는 dark ring | 창 하나 |

창 전용 radius는 위 3단, 그림자는 창 하나에만 사용한다. `--window-shadow`는 `@theme`이 아니라 `:root`에 둔다. 소비는 `shadow-(--window-shadow)`로 한다. `var()` 참조를 유지해 다크 오버라이드가 적용되도록 하기 위한 선택이다. 창 셸에는 `overflow-*`, `transform`, `filter`를 추가하지 않는다. 이 속성들은 sticky 크롬바를 깨는 containing block이나 스크롤 컨테이너를 만들 수 있다.

하단 radius는 [Footer](../src/components/layout/Footer.tsx)가 `rounded-b-window`와 `overflow-clip`으로 닫는다. 크롬바는 `sticky top-frame`을 유지하고, 앵커 이동 보정은 `scroll-padding-top: var(--chrome-offset)`가 담당한다.

<a id="components"></a>

## Components

디자인 시스템을 바꿀 때 먼저 확인할 파일은 다음과 같다.

| 파일 | 역할 |
| --- | --- |
| [globals.css](../src/app/globals.css) | 토큰, hue scope, dark theme, base, motion |
| [hue.ts](../src/lib/hue.ts) | hue 목록, CSS class map, label |
| [theme.ts](../src/lib/theme.ts) | 3상태 테마 초기화 스크립트 |
| [ThemeToggle.tsx](../src/components/layout/ThemeToggle.tsx) | 시스템, 라이트, 다크 순환 토글 |
| [BrowserFrame.tsx](../src/components/browser/BrowserFrame.tsx) | 창 셸 |
| [BrowserChrome.tsx](../src/components/browser/BrowserChrome.tsx) | sticky 크롬, 주소창, 액션 링크 |
| [TabStrip.tsx](../src/components/browser/TabStrip.tsx) | 실제 라우트 탭, 프로젝트 탭 |
| [AddressBar.tsx](../src/components/browser/AddressBar.tsx) | 시각용 주소창 |
| [TrafficLights.tsx](../src/components/browser/TrafficLights.tsx) | 장식용 신호등 |
| [Contact.tsx](../src/components/home/Contact.tsx) | 반전 Contact 블록 |
| [Footer.tsx](../src/components/layout/Footer.tsx) | deep-ground Footer와 색표본 스트립 |
| [ProjectCover.tsx](../src/components/project/ProjectCover.tsx) | 실제 스크린샷/비공개 사유 처리 |
| [CaseSection.tsx](../src/components/project/CaseSection.tsx) | Case Study 블록별 editorial layout |
| [og.ts](../src/lib/og.ts) | OG 라이트 팔레트와 색표본 |

새 디자인 변경은 이 문서의 규칙, 실제 토큰 이름, 컴포넌트 책임을 함께 맞춰야 한다. 규칙을 바꿀 때는 문서와 소스 주석을 같이 갱신한다.
