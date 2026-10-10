---
name: 박정우 포트폴리오
description: 한 권의 개발 연구 노트로 읽히는 프론트엔드 개발자 포트폴리오
colors:
  desk: "#d5dae1"
  chrome: "#e3e7ed"
  tab: "#d8dde5"
  paper: "#f3f5f7"
  paper-raised: "#fafbfc"
  grid: "#e0e6ee"
  grid-major: "#ccd5e1"
  ink: "#1a1d24"
  ink-2: "#4e5563"
  ink-3: "#636b79"
  line: "#c3cbd6"
  line-strong: "#1a1d24"
  pen: "#1f3fae"
  pen-soft: "rgb(31 63 174 / 0.2)"
  margin: "#d9342b"
  flag-mocha: "#f0a443"
  flag-terracotta: "#ee7458"
  flag-wheat: "#efd04e"
  flag-sage: "#86c788"
  flag-plum: "#ae94e2"
  flag-blush: "#f193b8"
  flag-ink: "#15181e"
typography:
  display:
    fontFamily: "Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, Segoe UI, Apple SD Gothic Neo, Malgun Gothic, sans-serif"
    fontSize: "clamp(2.5rem, 5.2vw, 4.25rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Pretendard Variable, Pretendard, sans-serif"
    fontSize: "clamp(2.125rem, 4.2vw, 3.25rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Pretendard Variable, Pretendard, sans-serif"
    fontSize: "clamp(1.5rem, 2.6vw, 2rem)"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.03em"
  entry-title:
    fontFamily: "Pretendard Variable, Pretendard, sans-serif"
    fontSize: "2.125rem"
    fontWeight: 800
    lineHeight: 1.375
    letterSpacing: "-0.03em"
  metric:
    fontFamily: "Pretendard Variable, Pretendard, sans-serif"
    fontSize: "2rem"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "-0.03em"
    fontFeature: "tnum"
  body:
    fontFamily: "Pretendard Variable, Pretendard, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  meta:
    fontFamily: "Pretendard Variable, Pretendard, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.43
  margin-note:
    fontFamily: "JetBrains Mono Variable, Pretendard Variable, Pretendard, ui-monospace, Cascadia Mono, SF Mono, Consolas, monospace"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.5
    fontFeature: "tnum"
  margin-label:
    fontFamily: "Pretendard Variable, Pretendard, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.45
rounded:
  none: "0px"
  tab: "6px"
spacing:
  grid: "1.5rem"
  grid-major: "7.5rem"
  page-pad: "1.5rem"
  margin-w: "6rem"
  margin-w-xl: "8.5rem"
  gap: "2.5rem"
  gap-xl: "3rem"
  desk-pad: "1.5rem"
  desk-pad-lg: "2.5rem"
  measure: "42rem"
  main: "64rem"
  window: "90rem"
components:
  toolbar-button:
    backgroundColor: "{colors.paper-raised}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.none}"
    padding: "0 12px"
    height: "36px"
  toolbar-button-hover:
    backgroundColor: "{colors.paper-raised}"
    textColor: "{colors.pen}"
  tab-active:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tab}"
    width: "208px"
    height: "40px"
  tab-inactive:
    backgroundColor: "{colors.tab}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.tab}"
    width: "208px"
    height: "40px"
  address-input:
    textColor: "{colors.ink}"
    typography: "{typography.margin-note}"
    rounded: "{rounded.none}"
    padding: "0 4px"
    height: "36px"
  link-pen:
    textColor: "{colors.pen}"
    height: "44px"
  pasted-note:
    backgroundColor: "{colors.paper-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "24px"
  placeholder:
    textColor: "{colors.pen}"
    rounded: "{rounded.none}"
    padding: "24px"
  edge-flag:
    backgroundColor: "{colors.flag-mocha}"
    rounded: "{rounded.none}"
    width: "14px"
    height: "56px"
---

# Design System: 박정우 포트폴리오

> 이 브랜치(`design/1-impeccable`)는 **디자인 1안 (impeccable) — 개발 연구 노트**다. 이전 문서의 스케치 단계 규칙과 Cloud Dancer·Earthen Pastels 도색 기준은 이 브랜치에서 대체되었다.

이 문서는 출시된 빌드에서 확인한 시각 시스템과 인터랙션 규칙이다. 위 frontmatter 토큰이 규범이고, 본문은 적용 방법을 설명한다. 값의 출처는 [globals.css](../src/app/globals.css)이며 Tailwind v4 `@theme` 토큰은 `--color-paper`, `--color-ink`처럼 `--color-*` 접두사를 붙인다. 레이아웃 변수(`--page-pad`, `--margin-w`, `--gap`, `--content-x`, `--rule-x`)와 그림자(`--lift`, `--window-shadow`)는 다크 오버라이드를 받도록 `:root`에 있다.

<a id="direction"></a>

## Overview

**Creative North Star: "개발 연구 노트 (The Research Notebook)"**

사이트 전체가 한 권의 연구 노트로 읽힌다. 프로젝트 하나가 날짜가 붙은 기록 한 면이고, 실제 서비스 화면은 근거로 붙여 둔 자료다. 국내 채용 담당자와 현업 개발자는 여백의 날짜와 라벨을 따라 각 기록의 불편·판단·결과를 훑고, 판단 문장에 그어진 볼펜 밑줄로 핵심을 잡고, 붙여 둔 화면으로 확인한 뒤 상세 기록이나 연락처로 간다.

재료는 셋뿐이다. 차가운 흰 방안지(옅은 청회색 격자, 5칸마다 진한 선)와 왼쪽 붉은 여백선 하나, 활자로 찍은 먹색 본문, 그리고 날짜·주석·밑줄·화살표를 쓴 청색 볼펜. 프로젝트 색은 종이 가장자리에 붙인 인덱스 플래그로만 나타난다. 손글씨 폰트는 쓰지 않는다. 손의 흔적은 볼펜 색, 밑줄, 한 획 화살표로만 남는다.

거부하는 기본형은 가운데 정렬 히어로와 같은 크기 프로젝트 카드 그리드다. 기술 아이콘 대량 나열, 의미 없는 Three.js, 네온·터미널 스타일, 커서 추적, 과한 배지, 근거 없는 "Innovative / Passionate / Creative" 카피, 임의 숙련도 그래프도 피한다. 프로젝트 설명은 기능 목록보다 문제 → 판단 → 해결 → 확인된 결과의 흐름을 먼저 보여준다.

**Key Characteristics:**
- 방안지 지면과 붉은 여백선 하나가 모든 페이지의 기준선이다.
- 본문은 먹색 활자, 유채 글자색은 청색 볼펜 하나뿐이다.
- 날짜·기간·라벨은 여백(md 이상)에 걸리고, 모바일에서는 문단 앞에 붙는다.
- 실제 화면은 1px 먹선과 들뜬 그림자로 "붙여 둔" 자료가 된다.
- 프로젝트 색은 이름 곁의 인덱스 플래그로만 쓴다.
- 움직임은 판단 문장의 볼펜 밑줄이 한 번 그어지는 것 하나다.

<a id="color"></a>

## Colors

차가운 청회색 종이와 먹, 청색 볼펜 하나로 이루어진 절제된 팔레트이고, 붉은 여백선과 여섯 플래그는 글자가 닿지 않는 표시로만 쓴다. 순백 `#FFFFFF`은 쓰지 않는다(가장 밝은 면은 `paper-raised`). 색을 새로 추가하려면 라이트·다크 지면 양쪽 대비를 실제로 계산한다.

### Primary

- **청색 볼펜 (Ballpoint Blue)** (`--color-pen` #1f3fae, 다크 #93aaff): 유일한 유채 글자색. 링크, 여백 날짜·라벨, 그림 번호, 단계 번호, 목차, 한 줄 소개, 포커스링, 판단 문장 밑줄, 화살표, 커서(caret)에 쓴다.
- **볼펜 형광 (Pen Wash)** (`--color-pen-soft` rgb(31 63 174 / 0.2), 다크 rgb(147 170 255 / 0.24)): 제목 아래 정적 형광 밑줄(`.highlight`)과 텍스트 선택 배경. 글자색으로 쓰지 않는다.

<a id="palette"></a>

### Secondary — 인덱스 플래그

<a id="hue"></a>

프로젝트 색 배정은 [projects.ts](../src/data/projects.ts)의 `Project.hue`가 단일 출처다. 값 이름(`mocha` 등)은 데이터 호환을 위해 유지하고, 실제 색은 [hue.ts](../src/lib/hue.ts)의 `FLAG_CLASS`가 `.flag-*` 정적 클래스로 잇는다. 클래스 이름을 문자열로 조합하지 않는다.

| `Project.hue` | 클래스 | 이름 (`HUE_LABEL`) | 라이트 | 다크 |
| --- | --- | --- | ---: | ---: |
| `mocha` | `.flag-mocha` | Amber flag | `#f0a443` | `#d6964a` |
| `terracotta` | `.flag-terracotta` | Coral flag | `#ee7458` | `#d8705a` |
| `wheat` | `.flag-wheat` | Yellow flag | `#efd04e` | `#d6bd52` |
| `sage` | `.flag-sage` | Green flag | `#86c788` | `#79b47b` |
| `plum` | `.flag-plum` | Violet flag | `#ae94e2` | `#9e88d4` |
| `blush` | `.flag-blush` | Pink flag | `#f193b8` | `#d987a8` |

플래그가 나오는 자리는 네 곳이다: 기록 높이에서 종이 왼쪽 가장자리에 붙는 `EdgeFlag`(모바일 8×44px, md 이상 14×56px), 프로젝트 탭 제목 앞 6×14px 띠, 이전·다음 프로젝트 이름 앞 `Flag`(8×14px), OG 이미지의 프로젝트 이름 앞 10×24px 띠. 모두 `aria-hidden`이고 항상 프로젝트 이름이 곁에 있다. 여러 색이 한 화면에 모이는 것은 목록에서 기록이 이어질 때와 OG 이미지뿐이며, 섹션 배경이나 면을 칠하지 않는다.

<a id="accent"></a>

### Tertiary — 장식 전용 (여백선과 플래그)

- **붉은 여백선 (Margin Red)** (`--color-margin` #d9342b, 다크 #e0594f): 지면의 `--rule-x` 위치에 그어진 1.5px 세로선 하나. 이전의 Accent가 맡던 "글자가 닿지 않는 장식면" 역할을 이제 여백선과 인덱스 플래그가 맡는다. 글자색, 밑줄색, 버튼·테두리 색으로 쓰지 않는다.
- **플래그 위 먹 (Flag Ink)** (`--flag-ink` #15181e, 테마 무관): 플래그 위에 글자를 올려야 할 때 쓸 수 있는 유일한 색. 현재 빌드에는 플래그 위 글자가 없다.

<a id="ground"></a>

### Neutral — 지면

| 토큰 | 라이트 | 용도 |
| --- | ---: | --- |
| `--color-desk` | `#d5dae1` | 창 바깥 책상(데스크톱), `<body>` 배경 |
| `--color-chrome` | `#e3e7ed` | 색인 탭줄 배경 |
| `--color-tab` | `#d8dde5` | 뒤에 놓인 비활성 탭 |
| `--color-paper` | `#f3f5f7` | 방안지 지면, 도구줄·북마크바, 활성 탭 |
| `--color-paper-raised` | `#fafbfc` | 붙여 둔 쪽지·화면, 도구줄 버튼 |
| `--color-grid` | `#e0e6ee` | 방안 가는 선 (24px) |
| `--color-grid-major` | `#ccd5e1` | 5칸(120px)마다 굵은 선 |
| `--color-line` | `#c3cbd6` | 헤어라인, 행 구분, 점선 자리 |
| `--color-line-strong` | `#1a1d24` | 섹션 시작선, 크롬 구분선, 붙인 화면 먹선 |

<a id="ink"></a>

#### 활자 (Ink)

| 토큰 | 라이트 | 용도 |
| --- | ---: | --- |
| `--color-ink` | `#1a1d24` | 제목, 본문, 수치 |
| `--color-ink-2` | `#4e5563` | 보조 본문, 캡션, 비활성 탭·북마크 |
| `--color-ink-3` | `#636b79` | 메타데이터(역할·팀·상태), 기술 목록, 출처·시점 |

### Named Rules

**The One Pen Rule.** 유채 글자색은 청색 볼펜 하나다. 강조가 필요하면 굵기·크기·볼펜 밑줄로 하고 새 색을 들이지 않는다.

**The Flag-Not-Paint Rule.** 프로젝트 색은 이름 곁에 붙인 작은 플래그로만 나타난다. 면, 섹션 배경, 글자, 테두리를 칠하지 않는다.

**The Silent Margin Rule.** 붉은 여백선은 페이지마다 하나이고 어떤 글자에도 닿지 않는다.

<a id="contrast"></a>

### Contrast

출시된 hex 값으로 계산한 WCAG 대비다(`pen-soft`는 지면 위 합성색 기준).

| 글자 \ 배경 | paper | paper-raised | chrome | tab | pen-soft |
| --- | ---: | ---: | ---: | ---: | ---: |
| ink (라이트) | 15.43 | 16.28 | 13.59 | 12.36 | 11.06 |
| ink-2 (라이트) | 6.85 | 7.23 | 6.04 | 5.49 | 4.91 |
| ink-3 (라이트) | 4.91 | 5.18 | 4.33 | 3.94 | 3.52 |
| pen (라이트) | 8.07 | 8.51 | 7.11 | 6.47 | 5.78 |
| ink (다크) | 14.77 | 13.59 | 14.18 | 12.79 | 9.27 |
| ink-2 (다크) | 8.33 | 7.66 | 7.99 | 7.21 | 5.23 |
| ink-3 (다크) | 5.88 | 5.41 | 5.64 | 5.09 | 3.69 |
| pen (다크) | 8.07 | 7.43 | 7.75 | 6.99 | 5.07 |

| 플래그 | `--flag-ink` 라이트 | `--flag-ink` 다크 |
| --- | ---: | ---: |
| mocha | 8.55 | 7.04 |
| terracotta | 6.16 | 5.41 |
| wheat | 11.68 | 9.53 |
| sage | 8.92 | 7.30 |
| plum | 6.89 | 5.86 |
| blush | 8.13 | 6.76 |

- `ink-3`는 `paper`·`paper-raised` 위에서만 쓴다(4.91 이상). `chrome`·`tab`·`pen-soft` 위에서는 4.5에 못 미친다.
- 여백선은 라이트 지면 위 4.29, 다크 4.89이지만 장식이므로 대비를 글자 기준으로 삼지 않는다.
- 라이트 플래그는 지면 대비가 1.39~2.64로 낮다. 플래그는 장식이고 이름이 정보를 전하므로 허용하되, 색만으로 프로젝트를 구분하게 만들지 않는다.

<a id="dark-theme"></a>

### Dark Theme

다크는 반전이 아니라 역할 교체다. 밤 책상 위에 같은 노트를 펼친 모습으로, 지면은 짙은 청흑색, 먹은 밝은 회백색, 볼펜은 밝은 청색으로 올라온다. 값은 `@media (prefers-color-scheme: dark)`의 `:root:not([data-theme="light"])`와 `:root[data-theme="dark"]` 두 블록에 같은 값으로 둔다. 컴포넌트 CSS는 테마를 모른다.

| 묶음 | 다크 값 |
| --- | --- |
| 지면 | `desk #0b0d11`, `chrome #181b21`, `tab #20242c`, `paper #14171c`, `paper-raised #1b1f26`, `grid #1d2229`, `grid-major #283039` |
| 활자·선 | `ink #e6e9ef`, `ink-2 #aab1bd`, `ink-3 #8c94a2`, `line #2e3540`, `line-strong #7e8899` |
| 볼펜·여백선 | `pen #93aaff`, `pen-soft rgb(147 170 255 / 0.24)`, `margin #e0594f` |
| 플래그 | 위 Secondary 표의 다크 열 |
| 그림자 | `--lift 0 1px 1px rgb(0 0 0 / 0.3), 0 14px 28px -16px rgb(0 0 0 / 0.8)`, `--window-shadow 0 0 0 1px #2e3540, 0 30px 60px -30px rgb(0 0 0 / 0.8)` |

두 다크 블록의 색 토큰과 `:root` 그림자 두 개를 함께 고친다. `themeColor`는 [layout.tsx](../src/app/layout.tsx)에서 라이트 `paper`, 다크 `paper`와 같은 값이다. OG 이미지는 언제나 라이트 지면이다.

테마 상태는 셋이다. 시스템은 `data-theme` 속성 없음, 라이트 고정은 `data-theme="light"`, 다크 고정은 `data-theme="dark"`다. 시스템 상태에서 속성이 없어야 OS 다크 모드를 따른다.

[theme.ts](../src/lib/theme.ts)의 동기 초기화 스크립트는 `<body>` 첫 자식에 두고, 첫 페인트 전에 저장된 라이트·다크 값이 있을 때만 `data-theme`를 붙인다. [ThemeToggle](../src/components/layout/ThemeToggle.tsx)은 DOM의 `data-theme`를 `useSyncExternalStore`로 구독하는 단일 출처로 삼고, 시스템 → 라이트 → 다크 → 시스템 순으로 순환한다. 세 라벨을 모두 렌더하고 어느 것을 보일지는 CSS가 `<html>` 속성으로 고른다. `next-themes`는 시스템 상태에서 속성을 비워 두는 이 계약을 지키기 위해 도입하지 않는다.

<a id="color-prohibitions"></a>

### Color Prohibitions

- JSX에 색 hex를 하드코딩하지 않는다. 색은 `globals.css` 토큰, `Project.hue` → `FLAG_CLASS`, OG 전용 [og.ts](../src/lib/og.ts) 중 하나에서 온다. OG 값은 라이트 토큰과 같게 유지한다.
- 부드러운 색 그라디언트(색에서 색으로 번지는 면)를 쓰지 않는다. `linear-gradient`는 격자·여백선·형광·볼펜 밑줄처럼 끊긴 선을 그리는 기법으로만 쓴다.
- 볼펜 외의 색을 글자에 쓰지 않는다. 여백선 빨강과 플래그 색은 글자·링크·버튼에 쓰지 않는다.
- `ink-3`를 `chrome`·`tab`·`pen-soft` 위에 올리지 않는다.
- 색만으로 정보를 전하지 않는다. 플래그에는 항상 이름이 곁에 있다.
- 순백 `#FFFFFF`과 임의 숙련도 그래프를 쓰지 않는다.

<a id="typography"></a>

## Typography

**Display / Body Font:** Pretendard Variable (Apple SD Gothic Neo, Malgun Gothic, sans-serif 폴백)
**Mono Font:** JetBrains Mono Variable → 한글은 Pretendard Variable로 이어짐 → ui-monospace, Consolas

**Character:** 굵고 촘촘한 한국어 산세리프 활자가 노트에 찍힌 본문이고, 고정폭 숫자는 볼펜으로 적은 날짜와 번호다. 두 글꼴 모두 [layout.tsx](../src/app/layout.tsx)에서 self-host한다(Pretendard는 dynamic-subset). JetBrains Mono에 한글이 없어 시스템 고정폭으로 떨어지면 자간이 벌어지므로, mono 스택은 한글을 Pretendard로 잇는다.

### Hierarchy

- **Display** (800, `clamp(2.5rem, 5.2vw, 4.25rem)`, 1.04, -0.04em): 홈의 `h1` "프론트엔드 개발자 박정우" 하나.
- **Title** (800, `clamp(2.125rem, 4.2vw, 3.25rem)`, 1.08, -0.04em): 다른 페이지의 `h1`(프로젝트·경력·교육 경험·상세·새 탭·404·외부 주소).
- **Headline** (800, `clamp(1.5rem, 2.6vw, 2rem)`, 1.2, -0.03em): 섹션 `h2`(`text-section`), Case Study 섹션 제목, 연락처.
- **Entry title** (800): 대표 첫 기록 1.5rem → md 2.125rem(-0.03em), 나머지 기록 1.5rem(-0.025em), 행간 1.375. 제목에는 볼펜 형광 밑줄을 깐다.
- **Metric** (800, 2rem, -0.03em, `tabular-nums`): 프로젝트·Case Study 수치. 교육 수치는 2.5rem.
- **Body** (400, 1rem, 1.75): 기본 본문. Case Study 산문은 1.85. 긴 글 폭은 `--container-measure` 42rem.
- **Lead line** (500, 1.125rem → md 1.25rem, 볼펜색): 홈 한 줄 소개.
- **Meta** (400, 0.875rem, `ink-3` 또는 `ink-2`): 역할·기간·팀·상태 한 줄, 캡션.
- **Margin note** (mono 500, 0.8125rem, 볼펜색, `tabular-nums`): 여백에 거는 날짜·기간·연도, 그림 번호 "그림 N.", 단계 번호, 주소창.
- **Margin label** (600, 0.8125rem md 이상 / 0.875rem run-in, 볼펜색): 문단 라벨. md 이상에서 여백 오른쪽 정렬로 나간다.

한글 본문은 `word-break: keep-all`, 제목은 `text-wrap: balance`, 문단은 `pretty`다. 상세 제목과 목차에는 장식 번호를 표시하지 않되 기존 섹션 앵커는 보존한다.

### Named Rules

**The Set-Type-Only Rule.** 손글씨 폰트를 쓰지 않는다. 손의 흔적은 볼펜 색, 밑줄, 한 획 화살표로만 남긴다.

**The Numbers-in-Pen Rule.** 날짜·기간·번호는 mono와 `tabular-nums`로 적는다. 본문 서술에는 mono를 쓰지 않는다.

<a id="layout"></a>

## Layout

사이트 전체는 책상 위에 놓인 브라우저 창 하나이고, 창 안 본문은 노트 한 면이다. 창과 크롬은 [BrowserWindow](../src/components/browser/BrowserWindow.tsx)가, 본문 스크롤과 방안지 지면(`.notebook`)은 [Viewport](../src/components/browser/Viewport.tsx)가 맡는다. 데스크톱에서 창은 화면 높이에 고정되고 실제 문서는 스크롤되지 않는다.

노트 한 면의 가로 기준은 다섯 변수다. 본문 시작선 `--content-x = page-pad + margin-w + gap`, 붉은 여백선 `--rule-x = content-x - gap / 2`. 격자(24px, 5칸마다 120px 굵은 선)는 여백선 위치에서 시작하고 `background-attachment: local`로 글과 함께 스크롤된다.

| 변수 | 모바일 | md (48rem) | xl (80rem) |
| --- | ---: | ---: | ---: |
| `--page-pad` | 1.25rem | 1.5rem | 1.5rem |
| `--margin-w` | 0 | 6rem | 8.5rem |
| `--gap` | 1.5rem | 2.5rem | 3rem |
| `--content-x` | 2.25rem | 10rem | 13rem |
| `--rule-x` | 0.75rem | 8.75rem | 11.5rem |

[Container](../src/components/sketch/Container.tsx)는 본문 시작선에서 왼쪽 정렬로 시작하고 최대 폭은 `content-x + 64rem + 2.5rem`이다. 가운데 정렬하지 않는다. 여백 주석은 본문 시작선에 붙은 `.hang` 요소에서 왼쪽 여백으로 걸리며, 높이는 `--note-top`·`--flag-top`으로 첫 줄에 맞춘다. 섹션은 `line-strong` 시작선 위에서 `pt-10 pb-16`(md `pt-12 pb-20`)으로 열린다.

Home은 스토리형이고 스크롤 순서가 핵심 메시지 순서와 같다: 소개 → 대표 프로젝트(첫 기록을 가장 크게, 나머지는 설명·화면이 나란한 행) → 일하는 방식 → Communication → Career → 그 밖의 프로젝트. 첫 섹션은 상단 여백을 좁혀 1440×900에서 첫 기록의 붙인 화면 약 80%가 첫 화면 안에 들어온다(원본 비율 유지). 모든 섹션은 데이터에서 목록을 받아 그리고, 비어 있으면 섹션째 그리지 않는다. 서로 다른 경험의 수치를 모은 레일은 쓰지 않고 수치는 각 기록 안에 둔다.

Work는 대표 기록(설명 3 : 화면 2), 보조 프로젝트 비교 목록(lg 이상 `12rem 1fr 1fr 1fr` 칸, 좁은 화면은 칸 이름을 붙여 쌓음), 기본 접힌 `<details>`의 그 밖의 프로젝트 순서다. 상세는 목록 링크 → 기간(여백)·이름·분류 → 형광 밑줄 헤드라인 → 출발한 불편 → 역할·팀·상태 → 내가 맡은 것 / 팀이 맡은 것 → 수치(출처·시점) → 섹션 순서이고, xl 이상에서는 목차가 여백 칸에 sticky로 걸린다.

<a id="responsive"></a>

### Responsive

| 항목 | 규칙 |
| --- | --- |
| 창 연출 | `md`(48rem) 이상에서만. 모바일은 창 테두리·크롬 없이 일반 페이지 |
| 책상 여백 | `24px` at md, `40px` at lg(64rem) |
| 창 폭 | 최대 `--container-window` 90rem(1440px) |
| 본문 칸 | 최대 64rem, 긴 글 42rem |
| 데스크톱 크롬 | 색인 탭줄(탭·닫기·새 탭) + 도구줄(뒤로·앞으로·새로고침·주소창·테마) + 북마크바(주요 페이지·연락처·GitHub) |
| 모바일 상단 | 이름·테마 토글 + 주요 페이지 링크. 문서 전체가 스크롤된다 |
| 모바일 지면 | 여백 칸 없음. 여백선은 왼쪽 가장자리 0.75rem, 날짜·라벨은 문단 앞에 붙고, 플래그는 8×44px로 가장자리에 남는다 |
| 기록 배치 | 좁은 화면에서는 붙인 화면이 설명보다 먼저 온다 |
| 터치 타깃 | 모바일의 링크·버튼은 최소 `44px`(`min-h-11`) |

모바일에서 창 연출을 푸는 이유는 실제 브라우저 주소창과 그린 주소창이 겹치고, 고정 창 안의 이중 스크롤이 모바일 주소창 접힘과 충돌하기 때문이다. 가로 넘침을 막고 이미지를 세로로 쌓는다. 햄버거 메뉴로 대체하지 않는다.

<a id="visual-patterns"></a>

### Visual Patterns

반복 조각을 재사용하되 모든 섹션을 같은 모양으로 만들지 않는다. [CaseSection](../src/components/project/CaseSection.tsx)은 블록 종류마다 폭과 표면을 다르게 둔다(글은 읽는 폭, 이미지·비교는 넓은 폭).

| 영역 | 중심 표현 |
| --- | --- |
| Home 소개 | 이름·직무 활자와 볼펜 한 줄 소개, 바로 아래 첫 기록과 붙인 실제 화면 |
| 기록(대표 프로젝트) | 여백 날짜·라벨, 형광 제목, 볼펜 밑줄 판단 문장, 붙인 화면, 가장자리 플래그 |
| 비교(보조 프로젝트) | 칸을 맞춘 표 형식 목록 |
| Metrics | 해당 기록 옆 수치, 세로 헤어라인으로 구분 |
| Career·수상 | 여백에 연도를 건 타임라인 행 |
| Case Study | 산문·목록·흐름도·비교·그림·판단 블록을 섞은 편집형 |
| 그 밖의 프로젝트 | 접힌 목록 |

문단 라벨(`Labeled`)은 불편·판단·결과처럼 같은 형식으로 비교할 문장에만 붙이고, md 이상에서 여백에 건다. 섹션 제목 위에 같은 뜻의 작은 영문 라벨(eyebrow)을 두지 않고, 모든 섹션을 같은 작은 라벨·큰 제목·설명·구분선 조합으로 반복하지 않는다. 판단 블록은 문제·선택지·채택·이유를 본문과 목록으로 전하며 선택지 앞에는 빈 사각 표시만 둔다.

## Elevation & Depth

지면은 평평하고, 깊이는 "종이 위에 붙인 것"과 "책상 위의 창" 두 겹뿐이다. 나머지 위계는 헤어라인, 먹선, 여백으로 만든다.

### Shadow Vocabulary

- **붙인 자료 (Lift)** (`box-shadow: 0 1px 1px rgb(26 29 36 / 0.06), 0 14px 28px -18px rgb(26 29 36 / 0.45)`): `.pasted` 전용. 1px `line-strong` 먹선과 `paper-raised` 면을 함께 쓴다. 실제 스크린샷, 연락처 쪽지, 경력 배경 항목, 교육 도구, 내가 맡은 것, 비교의 개선 후 단계에 쓴다.
- **창 (Window)** (`box-shadow: 0 1px 2px rgb(26 29 36 / 0.08), 0 30px 60px -36px rgb(26 29 36 / 0.55)`): md 이상의 창 하나. 창 테두리는 `ink` 25% 1px.

다크 값은 Dark Theme 표를 따른다.

### Named Rules

**The Pasted Evidence Rule.** 그림자는 노트에 붙인 것과 창 하나에만 있다. 버튼, 탭, 섹션, 목록 행에 그림자를 주지 않는다.

**The Dashed Absence Rule.** 점선 테두리는 아직 없는 것(볼펜 점선의 붙일 자리)이나 내 것이 아닌 것(팀이 맡은 것, 개선 전 흐름)을 뜻한다.

## Shapes

종이와 자료는 모두 직각이다(`rounded.none`). 유일한 곡선은 색인 탭의 위쪽 두 모서리(6px)다. 창 프레임도 직각이며 큰 radius를 쓰지 않는다. 면의 구분은 1px 헤어라인(`line`), 섹션 시작과 크롬 경계의 먹선(`line-strong`), 붙인 자료의 먹선으로 한다. 흐름도의 번호 칸은 28px 정사각형이고 칸 사이를 1px 볼펜 선으로 잇는다. 목록 표식은 사각형(`list-[square]`)에 볼펜색이다.

**The Square Paper Rule.** 탭 위 모서리를 빼면 둥근 모서리가 없다. 카드·버튼·배지에 radius를 들이지 않는다.

<a id="components"></a>

## Components

<a id="browser-frame"></a>

### 창 · 색인 탭 · 도구줄 (Browser Frame)

- **창:** 책상(`desk`) 위 직각 창 하나, `ink` 25% 1px 테두리와 창 그림자. 크롬은 sticky가 아니라 창 상단에 그대로 놓이고 본문 스크롤과 앵커 이동은 Viewport 안에서 일어난다.
- **색인 탭:** `chrome` 줄 위의 208px 탭. 활성 탭은 `paper` 면·`line-strong` 테두리·600 굵기로 아래 지면과 이어지고, 비활성 탭은 `tab` 면에 `ink-2` 글자다. 프로젝트 탭에는 제목 앞에 플래그 띠를 붙인다. 높이 40px.
- **도구줄 버튼:** 직각, `line` 테두리, `paper-raised` 면, `ink-2` 14px 글자, 높이 36px. hover는 테두리와 글자가 볼펜색으로 바뀐다. 비활성은 투명도 40%.
- **주소창:** 노트 서식의 밑줄 칸. 테두리 없이 아래 `line-strong` 1px, mono 14px, 초점 시 밑줄이 볼펜색. 앞의 "주소" 라벨은 볼펜색 12px 600.
- **북마크바:** `paper` 위 `ink-2` 14px 링크, hover 시 볼펜색과 밑줄. 페이지와 연락처·GitHub 사이를 세로 헤어라인으로 나눈다.
- **테마 토글:** 도구줄 버튼과 같은 모양, 글자로 상태를 쓴다(`테마: 시스템/라이트/다크`). 모바일 44px.
- 컨트롤의 상태와 목적은 아이콘 대신 글자로 쓴다(`뒤로`, `닫기`, `새 탭`, `(새 창)`).

### 링크

- **본문 링크:** 볼펜색 600, 볼펜 40% 밑줄(오프셋 0.3em), hover 시 밑줄이 진해진다. 높이 44px 안에 놓인다.
- **보조 링크:** `ink-2` 14px 밑줄 링크, hover 시 `ink` 또는 볼펜.

### 붙여 둔 쪽지 (Pasted Note)

- `paper-raised` 면, 1px `line-strong` 먹선, Lift 그림자, 직각, 안쪽 여백 20~32px. 연락처, 경력 배경, 교육 도구, 내가 맡은 것에 쓴다. 같은 모양을 모든 섹션에 반복하지 않는다.

### 기록 조각

- **여백 날짜 (`margin-note`)와 여백 라벨 (`margin-label`):** md 이상에서 여백 칸에 오른쪽 정렬로 걸리고, 모바일에서는 본문 위나 문단 앞에 붙는다.
- **인덱스 플래그 (`edge-flag`):** 기록의 높이에서 종이 왼쪽 가장자리에 붙는 직각 띠.
- **형광 제목 (`highlight`):** 제목 아래 0.42em 높이의 볼펜 형광. 정적이다.
- **볼펜 화살표 (`PenArrow`):** 한 획으로 그은 1.5px 볼펜 선과 화살촉 SVG. 라벨에서 문장으로, 흐름 단계 사이를 잇는다. 아이콘 세트 대신 쓴다.
- **그림 번호:** Case Study 캡션 앞에 볼펜색 mono "그림 N."이 기록 안 순서대로 붙는다.

<a id="motion"></a>

### 볼펜 밑줄 (Signature) 과 Motion

판단 문장 아래 1.5px 볼펜 밑줄(`pen-line`)이 그 기록이 화면에 들어올 때 한 번 그어진다. CSS scroll-driven animation으로, 밑줄을 품은 블록(`.pen-scope`)의 view timeline에 묶여 `entry 70%`부터 `cover 42%`까지 선형으로 0% → 100%가 된다. 여러 줄이면 첫 줄부터 차례로 그어진다. `prefers-reduced-motion: reduce`이거나 `animation-timeline`을 지원하지 않으면 처음부터 그어진 상태다. 기록마다 한 문장(핵심 판단, Case Study 판단 블록의 채택)에만 쓴다.

이것이 이 시스템의 유일한 움직임이다. hover는 색만 바뀌고 transition을 두지 않는다. scroll hijacking, parallax, cursor follower, 지속적인 배경 애니메이션, section reveal을 넣지 않는다. 전역 reduced-motion 규칙이 animation·transition·smooth scroll을 사실상 끈다.

<a id="screenshots"></a>

### 붙여 둔 화면 (Screenshots)

실제 서비스 스크린샷을 [Shot](../src/components/project/Shot.tsx)으로 붙인다(`.pasted`, `object-cover`). 갤러리처럼 나열하지 않고 앞뒤에 문제, 판단, 결과 중 하나를 둔다. 표지 기본 비율은 `3 / 2`, Case Study 이미지 기본 비율은 `16 / 10`이며, 데이터의 `aspectRatio`·`position`이 있으면 그것을 따른다. 로딩 크기는 실제 표시 폭에 맞추고 첫 화면 대표 이미지에만 우선 로딩(`eager`, `fetchPriority="high"`)을 쓴다.

스크린샷이 없을 때 목업을 만들지 않는다. [Placeholder](../src/components/sketch/Placeholder.tsx)는 볼펜 60% 점선 틀에 "붙일 화면"(비공개는 "공개하지 않는 화면")과 짧은 이름만 적고 실제 이미지의 비율을 유지한다. 실제 화면을 공개할 수 없는 프로젝트는 `coverWithheld` 사유를 그대로 보여준다. 이미지 alt는 화면의 의미와 보이는 정보를 설명하고 확인되지 않은 숫자를 추가하지 않는다.

| 이미지 | 표시 기준 |
| --- | --- |
| syu-likelion 지원서 평가 `syu-likelion-admin2.png` | 원본 비율 `1205 / 891`, `center top`; 답변·점수·코멘트 대조가 보여야 함. 홈 첫 기록의 대표 화면 |
| syu-likelion 모집 안내 `syu-likelion.png` | 상세 첫 화면, 원본 비율 `1600 / 1079` |
| 삼육대 어디야 | 가로 이미지 원본 비율 `1090 / 720`; 검색 결과와 지도 함께 표시 |
| syu 면접 결과 | 기본 비율과 세로 잘림 위치 `40%` 유지 |
| syu 마이페이지 | 기본 비율과 세로 잘림 위치 `88%` 유지 |
| Oshi Calendar | 계정 영역을 제외한 잘림 유지(`center`); 샘플 데이터임을 캡션·alt에 명시 |
| CCTV | 실제 화면 대신 `coverWithheld` 사유를 적은 자리(`3 / 2`)와 공개 가능한 흐름 블록 |

삼육대 어디야 모바일 캡처와 Make A Wish 대표 화면은 확보 후 붙일 후속 작업이다. 기존 가로 이미지를 모바일 화면처럼 합성하지 않는다. [기존 syu-likelion 점검 기록](../artifacts/syu-likelion-review/README.md)은 과거 검토 근거이며, 현재 배치·목차·이미지 비율은 이 문서와 [콘텐츠 기준](content.md#syu-likelion)을 따른다.

<a id="diagrams"></a>

### Diagrams

텍스트보다 흐름이 중요한 곳에서는 도식을 쓴다. 복잡한 다이어그램 라이브러리는 기본값이 아니다. 현재 도식은 노트의 흐름도다: 28px 정사각 번호 칸(볼펜 테두리, mono 번호)을 1px 볼펜 선으로 세로로 잇고(`flow`), 개선 전·후 비교(`compare`)는 전을 점선·흐린 선, 후를 붙인 쪽지로 둔다. 홈의 일하는 방식 흐름은 단계 칸을 볼펜 화살표로 가로로 잇는다.

권장 대상은 syu-likelion의 분산 도구에서 통합 플랫폼으로 바뀌는 흐름, 지원서 제출부터 최종 합격까지의 운영 flow, Oshi Calendar가 Calendar 중심에서 Deadline/Reward Priority/Todo/Game Hub 중심으로 바뀐 판단, 기술 문제의 문제/원인/선택지/결정/구현/결과 흐름이다.

<a id="accessibility"></a>

### Accessibility

기본 원칙은 semantic HTML, keyboard navigation, focus state, 충분한 contrast, 이미지 alt, 명확한 button/link 목적, heading hierarchy, reduced motion 대응이다.

- 각 페이지는 `h1`을 정확히 하나 가진다.
- 창 안의 탭은 방문자가 연 페이지이므로 링크가 아니라 `<button>`이다. 활성 탭에 `aria-current="page"`를 붙인다. `role="tab"`과 `role="tablist"`는 쓰지 않는다. 탭 닫기 버튼의 접근 이름은 `○○ 탭 닫기`다.
- 주소창은 실제 `<input>`이고 `label`을 가진다. Enter로 이동하고 Escape로 원래 주소로 돌아간다. 주소 입력 후에는 본문(`#content`)으로 초점을 옮기고, 새 탭 시작 페이지에서는 주소창이 초점을 받는다.
- 뒤로·앞으로는 활성 탭의 방문 기록이 없으면 `disabled`다.
- skip link "본문으로 건너뛰기"는 [layout.tsx](../src/app/layout.tsx)의 `#content`를 향하고, 초점을 받으면 볼펜 테두리 쪽지로 나타난다. `main`의 `tabIndex={-1}`은 링크 실행 시 본문으로 초점을 옮기되 Tab 순서에는 추가하지 않는다.
- 포커스링은 볼펜색 2px 외곽선, 오프셋 2px다. 탭 안 버튼은 안쪽(-2px)으로 그린다.
- [Placeholder](../src/components/sketch/Placeholder.tsx)는 `role="img"`와 실제 이미지의 alt를 가진다. 플래그·화살표·장식 선은 `aria-hidden`이다.
- 새 창으로 열리는 링크는 글자로 `(새 창)`을 밝힌다.

### 관련 파일

| 파일 | 역할 |
| --- | --- |
| [globals.css](../src/app/globals.css) | 토큰, 다크 테마, 지면·여백선, 여백 주석, 플래그, 형광·볼펜 밑줄, 붙인 자료, 그림 번호, motion |
| [hue.ts](../src/lib/hue.ts) | hue 목록, `FLAG_CLASS`, 플래그 이름 |
| [theme.ts](../src/lib/theme.ts) | 3상태 테마 초기화 스크립트 |
| [ThemeToggle.tsx](../src/components/layout/ThemeToggle.tsx) | 시스템·라이트·다크 순환 토글 |
| [BrowserWindow.tsx](../src/components/browser/BrowserWindow.tsx) | 창 셸, 데스크톱 크롬 3행, 모바일 상단 내비 |
| [BrowserProvider.tsx](../src/components/browser/BrowserProvider.tsx) | 탭 상태와 라우터 연결, 스크롤 복원, 새로고침 |
| [tabStore.ts](../src/components/browser/tabStore.ts) | 탭·방문 기록 저장소(sessionStorage) |
| [TabStrip.tsx](../src/components/browser/TabStrip.tsx) | 색인 탭 전환·닫기·새 탭 |
| [Toolbar.tsx](../src/components/browser/Toolbar.tsx) | 뒤로·앞으로·새로고침·주소창 |
| [Viewport.tsx](../src/components/browser/Viewport.tsx) | 노트 지면, 창 안 본문 스크롤, 빈 창 |
| [address.ts](../src/lib/address.ts) | 주소창 입력 해석과 표시 |
| [Container.tsx](../src/components/sketch/Container.tsx) | 여백선 오른쪽 본문 칸 |
| [ProjectParts.tsx](../src/components/project/ProjectParts.tsx) | 링크, 플래그, 여백 날짜, 화살표, 라벨 문단, 수치 |
| [Shot.tsx](../src/components/project/Shot.tsx) | 붙여 둔 실제 화면 |
| [Placeholder.tsx](../src/components/sketch/Placeholder.tsx) | 아직 붙이지 못한 화면·도식 자리 |
| [CaseSection.tsx](../src/components/project/CaseSection.tsx) | Case Study 블록별 편집형 배치 |
| [Contact.tsx](../src/components/layout/Contact.tsx) · [Footer.tsx](../src/components/layout/Footer.tsx) | 모든 페이지 끝의 연락처 쪽지와 아래 칸 |
| [og.ts](../src/lib/og.ts) | OG 노트 지면(라이트 토큰 사본, 여백선 150px) |

디자인을 바꿀 때는 이 문서의 규칙, 실제 토큰 이름, 컴포넌트 책임, 소스 주석을 함께 맞춘다.

## Do's and Don'ts

### Do:
- **Do** 모든 본문을 여백선 오른쪽 본문 시작선(`--content-x`)에서 왼쪽 정렬로 시작한다.
- **Do** 날짜·기간·연도는 볼펜색 mono로 여백에 건다(md 이상), 모바일에서는 문단 앞에 붙인다.
- **Do** 기록마다 핵심 판단 한 문장에만 볼펜 밑줄(`pen-line` + `pen-scope`)을 긋는다.
- **Do** 실제 화면은 `Shot`으로 붙이고(1px 먹선 + Lift), 없는 화면은 `Placeholder`로 비워 둔다.
- **Do** 프로젝트 색은 `Project.hue` → `FLAG_CLASS` 플래그로만, 항상 이름 곁에 둔다.
- **Do** 컨트롤 상태는 글자로 쓰고, 모바일 터치 영역은 44px을 지킨다.
- **Do** 새 색은 라이트·다크 지면 양쪽에서 대비를 계산한 뒤 두 다크 블록에 같이 넣는다.

### Don't:
- **Don't** 가운데 정렬 히어로나 같은 크기 프로젝트 카드 그리드를 만든다.
- **Don't** 손글씨 폰트, 아이콘 세트, 이모지를 들인다. 손의 흔적은 볼펜 색·밑줄·한 획 화살표뿐이다.
- **Don't** 붉은 여백선 색이나 플래그 색을 글자·링크·버튼·면에 쓴다.
- **Don't** 붙인 자료와 창 외의 요소에 그림자를, 색인 탭 외의 요소에 radius를 준다.
- **Don't** 부드러운 색 그라디언트, 순백, 숙련도 그래프, 서로 다른 경험의 수치 레일을 쓴다.
- **Don't** 섹션 제목 위에 작은 영문 라벨(eyebrow)을 두거나 모든 섹션을 같은 라벨·제목·구분선 조합으로 반복한다.
- **Don't** 볼펜 밑줄 외의 움직임(reveal, parallax, transition 연출)을 추가한다.
- **Don't** 확보하지 못한 화면을 목업이나 합성 이미지로 대신한다.
