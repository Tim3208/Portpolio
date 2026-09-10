# 포트폴리오 개편 검증 기록

2026-09-10 로컬 구현·검증 기록이다. 배포는 수행하지 않았다. 현재 콘텐츠와 디자인 규칙은 [콘텐츠 기준](../../docs/content.md), [디자인 기준](../../docs/design.md)에 있으며 이 문서는 변경 전후 증거만 보관한다.

## 적용한 변화

- Home: 이름과 직무, 두 문장 소개, syu-likelion 평가 화면과 해당 성과를 첫 화면에 배치했다. 네 숫자 레일과 문제→프로젝트 표를 삭제하고 About을 두 문단으로 줄였다.
- syu-likelion: 실제 랜딩 이미지와 역할·팀·기간·성과를 상단에 두고 본문을 12개에서 7개 섹션으로 통합했다. 지원 상태, 평가 화면, API 협업을 중심으로 정리했다. 모집 이후 운영과 팀원 기여 구분을 유지했다.
- Work와 다른 상세: 대표 영역 다음을 이미지·설명이 나란한 행으로 바꾸고 프로젝트 이름을 `h2`로 표시했다. 각 상세의 순서와 사실을 유지하며 실제 상황을 제목으로 썼다. CCTV는 공개 가능한 흐름 도식과 비공개 사유를 표시한다.
- Career·Teaching·Contact: 도입 구호를 줄이고 경력·수상·기술 사용 사례, 교육 대상·내용·기간·결과와 이메일을 바로 읽게 했다.
- 공통: 설명 16px·메타데이터 14px, 선택형 eyebrow, 장식 번호 없는 제목과 목차, 이미지별 비율·로딩 크기, 홈 metadata·OG와 문서를 맞췄다.
- 접근성 검증 중 활성 탭의 `scrollIntoView`가 첫 Tab 시작점을 옮기는 문제를 발견했다. 목록만 가로로 스크롤하도록 수정하고 `main`에 `tabIndex={-1}`을 부여해 본문 건너뛰기의 포커스 이동을 확인했다.

## 변경 전후 비교

변경 전은 시스템 테마가 라이트인 상태, 변경 후 비교본은 라이트 고정 상태다. 캡처는 각각 1440×900, 390×844 뷰포트에서 찍은 전체 페이지다.

| 화면 | 변경 전 | 변경 후 |
| --- | --- | --- |
| Home 데스크톱 | [보기](before/home-1440.png) | [보기](after/home-1440-light.png) |
| Home 모바일 | [보기](before/home-390.png) | [보기](after/home-390-light.png) |
| Work 데스크톱 | [보기](before/work-1440.png) | [보기](after/work-1440-light.png) |
| Work 모바일 | [보기](before/work-390.png) | [보기](after/work-390-light.png) |
| syu-likelion 데스크톱 | [보기](before/projects-syu-likelion-1440.png) | [보기](after/projects-syu-likelion-1440-light.png) |
| syu-likelion 모바일 | [보기](before/projects-syu-likelion-390.png) | [보기](after/projects-syu-likelion-390-light.png) |

추가 검토본: [Career 다크](after/career-1440-dark.png), [Teaching 모바일](after/teaching-390-light.png), [모바일 평가 섹션 앵커](after/syu-evaluation-390.png), [Oshi 이미지와 샘플 데이터 캡션](after/oshi-image-1440.png), [홈 OG](after/home-og.png), [syu-likelion OG](after/syu-og.png).

1440×900 Home에서는 이름·직무·대표 프로젝트 이미지와 성과가 모두 첫 화면에 보인다. 390×844에서는 소개와 주요 링크 뒤 약 400px 지점부터 대표 이미지가 시작한다. syu 평가 화면과 삼육대 어디야는 원본 비율을 사용하며, 면접 결과·마이페이지·Oshi의 기존 잘림 위치는 보존했다.

## 검증 결과

최종 빌드의 로컬 프로덕션 서버와 설치되어 있던 Chrome·Playwright로 검사했다. 프로젝트 의존성은 추가하지 않았다.

| 검사 | 결과 |
| --- | --- |
| `npm.cmd run lint` | 통과 |
| `npm.cmd run typecheck` | 통과 |
| `npm.cmd run build` | 기본 Turbopack 빌드 통과, 17개 정적 페이지 생성 |
| `git diff --check` | 통과 |
| 문서 상대 링크·앵커 | 7개 문서, 215개 링크 확인 |
| 8개 페이지 × 데스크톱·모바일 × 라이트·다크 | 32개 화면, HTTP 200, 단일 `h1`·`main#content`, Contact, 중복 ID 없음, 이미지 로딩·alt 확인 |
| 320px 너비 | 8개 페이지 가로 넘침 없음, 활성 탭 노출 |
| syu 기존 `section-01` ~ `section-12` | 데스크톱·모바일 모두 유효, 크롬바 아래로 이동 |
| 시스템·라이트·다크 테마 | 순환·새로고침 유지, 시스템 상태의 속성 제거·OS 변경 반영 |
| 키보드·연락처 | 첫 Tab으로 건너뛰기 링크, Enter로 본문 포커스, 탭 라우트 이동, 이메일과 포커스 표시 |
| 프로젝트 이동 | 이전·다음, 상세 탭 닫기 확인 |
| 공유 이미지 | 홈과 프로젝트 4개 OG 응답 200·이미지 형식 확인, 홈·syu 시각 검토 |
| 없는 프로젝트 | HTTP 404 |
| 브라우저 런타임 오류 | 없음 |
| 독립 코드·콘텐츠 리뷰 | 차단 문제 없음, 지적된 인코딩·파일 끝 줄바꿈 정리 |

상세 수치는 [검사 결과 JSON](checks.json), 변경 전 구조는 [기준 JSON](baseline-checks.json), 모바일 앵커는 [추가 검사 기록](mobile-anchors.json), 시각 검토는 [판정 기록](visual-review.json)에 있다. 전체 32개 최종 캡처와 16개 변경 전 캡처는 로컬 `.omx/portfolio-refresh/`에 보관했다. 이 폴더에는 비교에 필요한 대표 캡처만 포함한다.

기여·성과 대조에서는 syu 가입 148명·지원자 64명·모집 당일 최대 조회 200·자료 30건과 확인 시점, 삼육대 어디야 123개 장소·스크랩 81·좋아요 41·긍정 댓글 12, 교육 27명·수학 지도 8명·해외 IT 교육 160시간을 보존했다. 출결의 팀원 기여, 프론트엔드 STAFF Guard 범위, CCTV 비공개·장기 운영 미확인, Oshi의 샘플 수치 구분도 유지했다.

## 재실행

저장소 루트에서 빌드 후 별도 터미널로 서버를 실행한다.

```powershell
npm.cmd run build
npm.cmd run start -- --port 3002
```

[검증 스크립트](verify.mjs)는 기존 Playwright 모듈의 절대 경로를 첫 인수로 받는다. 현재 환경의 Chrome 설치 경로는 스크립트 안에 명시되어 있다. 아래 경로 자리에는 해당 머신에 이미 설치된 모듈 경로를 넣는다.

```powershell
node artifacts/portfolio-refresh/verify.mjs "C:/path/to/node_modules/playwright" http://127.0.0.1:3002
```

결과와 전체 캡처는 `.omx/portfolio-refresh/after/`에 생성된다. 서버와 스크립트는 외부 서비스를 변경하지 않는다.

## 후속 범위

삼육대 어디야의 모바일 재촬영은 후속 작업으로 남겼다. 이번 검증은 로컬 Chrome의 화면 크기 에뮬레이션이며 실제 모바일 기기·다른 브라우저 검증과 배포는 포함하지 않는다. 기존 서비스의 운영 수치를 새로 조회하거나 갱신하지 않았다.
