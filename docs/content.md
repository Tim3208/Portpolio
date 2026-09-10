# Portfolio Content Source

이 문서는 포트폴리오의 콘텐츠 원본과 작성 규칙을 보존한다. 실제 렌더링 데이터는 주로 [`src/data`](../src/data)에 있고, 이 문서는 새 섹션을 쓰거나 문구를 고칠 때 기준으로 읽는다.

<a id="identity"></a>

## Identity

이 프로젝트는 박정우의 개인 포트폴리오 웹사이트다. 단순한 기술 목록이 아니라 다음 개발자 정체성을 보여준다.

> 불편을 발견하고 개선하는 웹 프론트엔드 개발자

사이트 전체가 남겨야 하는 이야기는 아래 흐름이다.

```text
불편을 발견한다
→ 문제를 정의한다
→ 제품 방향을 고민한다
→ 실제로 구현한다
→ 사람들이 사용한다
→ 운영 과정에서 다시 발견하고 개선한다
→ 그 과정과 지식을 다른 사람에게 설명한다
```

콘텐츠의 중심은 기술 사용 자체가 아니라 Product Case Study와 사용자 문제다. 기술은 판단과 해결 과정을 설명하는 근거로만 쓴다.

<a id="profile"></a>

## Profile

| 항목 | 내용 |
| --- | --- |
| 이름 | 박정우 |
| 직무 방향 | Web / Frontend Developer |
| GitHub | <https://github.com/Tim3208> |
| 전공 | 삼육대학교 컴퓨터공학부 |
| 졸업 예정 | 2027.02 |
| 고등학교 | 선린인터넷고등학교 멀티미디어과 |

소개의 핵심은 "사용자의 반복적인 불편을 발견하고 실제 사용되는 웹 서비스로 구현해 온 개발자"다. React와 Next.js 기반 프로젝트에서 사용자 화면, 관리자/운영자 기능, REST API 연동, 사용자 상태 처리, 배포, 유지보수, 디자이너·백엔드 개발자 협업을 경험했다.

디자인 배경과 컴퓨터공학 전공은 함께 설명한다. 선린인터넷고에서 시각디자인·UX/UI·영상편집을 배웠고, 삼육대학교에서 Web·Software·Computer Science를 전공했다. 이 배경은 화면 의도를 구현 가능한 UI와 상태, 데이터 계약으로 구체화하는 강점의 근거다.

<a id="hero"></a>

## Hero

현재 Hero 콘텐츠는 [`src/data/profile.ts`](../src/data/profile.ts)에 있다.

| 항목 | 기준 |
| --- | --- |
| 주 제목 | `프론트엔드 개발자 박정우` — 페이지의 유일한 `h1` |
| 소개 첫 문장 | `동아리 모집·운영 화면과 캠퍼스 지도를 만들었습니다.` |
| 소개 둘째 문장 | `사용자 화면과 운영진 기능, API 연동부터 배포 이후 수정까지 경험했습니다.` |
| 대표 작업 | syu-likelion 이름, 담당 역할, 지원서 평가 화면 |
| 연결된 성과 | syu-likelion 가입 사용자 148명, 모집 당일 최대 조회 200 |
| 링크 | 대표 프로젝트 상세, 전체 프로젝트, GitHub |

이름과 직무를 가장 먼저 읽고 실제로 만든 화면을 확인할 수 있게 한다. 데스크톱에서는 소개 오른쪽에 syu-likelion 지원서 평가 이미지(`syu-likelion-admin2.png`)를 원본 비율로 크게 배치한다. 모바일에서는 소개와 주요 링크 다음에 이미지가 이어진다.

서로 다른 경험의 수치를 묶은 Hero 숫자 레일은 사용하지 않는다. 스크랩 81은 삼육대 어디야에, 프론트엔드 교육 인원 27은 Teaching에 연결한다. 다른 수치도 해당 경험의 설명 옆에서만 사용하며, 확인 시점과 근거는 [Results](#results)를 따른다. 페이지 제목·설명과 홈 OG 이미지도 이름·직무·실제 작업 중심 소개에 맞추고, 이전 슬로건과 네 숫자 레일을 재사용하지 않는다.

<a id="about"></a>

## About

About은 두 문단으로 구성한다. 첫 문단은 선린인터넷고등학교에서 시각디자인·UX/UI·영상편집을 배우고 삼육대학교에서 컴퓨터공학을 전공한 배경을 설명한다. 둘째 문단은 그 배경을 사용자 화면 구현, API 연동, 디자이너·백엔드 개발자와의 협업 경험으로 연결한다.

Hero의 소개와 문제 발견 슬로건을 반복하지 않으며, 문제→프로젝트 대응 표는 사용하지 않는다. 자세한 경력은 `/career`, 교육과 설명 경험은 `/teaching`으로 연결한다.

<a id="projects"></a>

## Projects

대표 프로젝트는 [`src/data/projects.ts`](../src/data/projects.ts)와 [`src/data/caseStudies`](../src/data/caseStudies)에 있다. Home은 대표 프로젝트를 포함한 Hero와 About을, `/work`는 전체 프로젝트 목록을 보여준다. Work의 주 제목은 `프로젝트`이며, 각 프로젝트 이름은 `h2`다.

우선순위는 다음 순서로 유지한다.

| 순서 | 프로젝트 | 역할 |
| --- | --- | --- |
| 1 | syu-likelion | Main Case Study |
| 2 | 삼육대 어디야 | Solo product case |
| 3 | Oshi Calendar | Product decision case |
| 4 | CCTV 근무 자동 편성 | Constraint-driven case |

현재 보조 프로젝트 데이터에는 세미콜론, 길맛로드, LA, ReadUp, 두사타, Pret, MathGraph가 있으며, 확인된 설명·기능·역할·링크만 표시한다. 이후 Case Study로 확장하려면 문제 정의, 판단, 결과 근거가 추가로 확인되어야 한다.

<a id="syu-likelion"></a>

### syu-likelion

| 항목 | 내용 |
| --- | --- |
| 프로젝트 | 멋쟁이사자처럼 삼육대학교 모집·커뮤니티·운영 관리 플랫폼 |
| 기간 | 2026.01 — 현재 |
| 상태 | 운영 및 유지보수 중 |
| 역할 | Frontend Developer |
| 팀 | Frontend 2 · Backend 2 · Designer 1 |
| 서비스 | <https://syu-likelion.org> |
| GitHub | <https://github.com/No4hh4oN/Likelion14th-FE> |
| Figma | <https://www.figma.com/design/ZORVqHx4WTt4ePPM4mIYz4/> |
| 기술 | Next.js App Router, React, TypeScript, Axios, Global CSS, GitHub, Figma |
| 색상 맥락 | `mocha` |

핵심 메시지는 "분산된 동아리 운영을 하나의 플랫폼으로"다. Discord, KakaoTalk, Google Forms, Excel에 흩어져 있던 모집, 지원서 관리, 평가, 면접, 공지, 과제, 커뮤니티, 사용자 일정을 하나의 웹 서비스로 통합했다.

개인 기여로 명시할 수 있는 범위는 Main, FAQ, 운영진 소개, 지원서 작성·임시 저장·제출 후 수정·파일 업로드, 결과 상태별 화면, 면접 시간 선택·예약, 마이페이지, 운영진용 지원자 관리, 서류 평가, 면접 평가, 최종 합격 관리, 활성 역할의 `STAFF` 여부를 확인하는 Admin Guard, 공지, 세션 자료, 과제 제출 현황·평가, 운영 일정 관리와 마이페이지 캘린더 동기화, 동아리원 커뮤니티, 자유게시판이다.

서비스 전체에는 출결 관리가 포함되지만 박정우의 개인 기여가 아니다. Case Study에서 개인 구현 목록에 넣지 않는다.

모집 운영 흐름은 아래 순서를 기준으로 설명한다.

```text
지원서 제출
→ 지원서 조회
→ 운영진 코멘트 · 점수 입력
→ 서류 합격자 결정
→ 면접 평가
→ 최종 합격자 결정
```

지원자 경험은 "각 상태에서 다음 행동이 있는 화면"으로 설명한다. 지원서는 임시 저장과 제출 상태를 분리하고, 제출 이후에도 1차 결과 발표 전까지 수정 가능하게 했다. 서류 합격자는 결과 화면에서 바로 면접 시간을 선택하고, 최종 합격자는 OT 일정과 커뮤니티 채널로 이어진다.

모집 이후 운영도 반드시 포함한다. 최종 합격자는 같은 계정으로 동아리원 권한을 받고, 공통 공간에서 공지·세션 자료·과제·질의응답을 확인하며, 마이페이지에서 자신의 활동과 세션·과제 일정을 본다.

API 협업 경험은 아래 흐름으로 쓴다.

```text
문제 재현
→ Network Response 확인
→ API 명세 비교
→ Backend 개발자와 필드 및 응답 계약 조율
→ Frontend 수정
→ 정상 동작 확인
```

운영 중 개선한 문제는 지원서 데이터 대조의 어려움, 로그인 이후 원래 화면으로 돌아가지 않던 리다이렉트 흐름, 숨김 필드 정책 문제, 과제 승인 페이지의 잘못된 URL Routing이다.

확정 성과는 가입 사용자 148명, 14기 공식 지원자 64명, 모집 기간 당일 최대 조회 수 200, 2026-08-16 기준 공지·세션 자료 30건이다. `64`는 운영자 서류 지원자 목록의 "총 64명" 표시로 확인된 수치다.

상세 Hero에는 프로젝트 이름을 `h1`으로 표시하고 서비스 설명, 역할·팀·기간·성과를 짧게 정리한 뒤 실제 랜딩 화면을 배치한다. [`src/data/caseStudies/syu-likelion.ts`](../src/data/caseStudies/syu-likelion.ts)의 본문은 아래 일곱 섹션으로 구성한다. 번호는 기존 링크 호환을 위한 내부 값이며 화면 제목과 목차에는 표시하지 않는다.

| 내부 번호 | 제목 | 함께 보존할 기존 앵커 |
| --- | --- | --- |
| 01 | 모집과 운영에서 제가 맡은 화면 | `section-05` |
| 02 | 네 도구에 흩어진 운영을 한곳으로 | `section-03`, `section-04` |
| 06 | 지원서 작성부터 결과 확인·면접 예약까지 | — |
| 07 | 지원자 한 명을 평가하는 화면 | `section-10` |
| 08 | 합격 이후에도 이어지는 과제와 일정 | — |
| 09 | API 명세와 응답이 달랐을 때 | — |
| 11 | 운영 결과와 다음에 바꿀 것 | `section-12` |

깊게 설명할 판단은 지원 상태 설계, 운영진 평가 화면, API 협업 세 가지다. 지원서 데이터 대조 문제와 개선 이미지는 평가 화면 섹션으로 모은다. 로그인 리다이렉트·숨김 필드·과제 URL 수정은 API 협업과 운영 중 수정 맥락에 정리한다. 다른 기능은 짧은 설명이나 목록으로 압축하되 모집 이후 공지·세션 자료·과제·일정 운영과 팀원 기여 구분은 유지한다.

통합 섹션의 `anchorAliases?: readonly string[]`에는 `section-10`처럼 완성된 ID를 저장한다. 본래 번호를 다시 매기지 않고, 기존 `#section-01`부터 `#section-12`까지 모두 내용이 옮겨진 위치로 연결한다.

<a id="eodiya"></a>

### 삼육대 어디야

| 항목 | 내용 |
| --- | --- |
| 프로젝트 | 교내 건물과 내부 시설의 상세 위치를 검색하는 모바일 캠퍼스 지도 |
| 기간 | 2026.02 |
| 형태 | 1인 프로젝트 |
| 담당 | 기획 · 개발 · 배포 전 과정 |
| 서비스 | <https://tim3208.github.io/eodiya/> |
| GitHub | <https://github.com/Tim3208/eodiya> |
| 기술 | TypeScript, JavaScript, HTML, CSS, Kakao Maps API, PWA, GitHub Pages |
| 색상 맥락 | `sage` |

문제 정의는 "학생이 필요한 것은 건물의 위치가 아니라 최종 목적지의 위치다"다. 지도 앱에서 제1실습관의 위치는 찾을 수 있어도 제1실습관 301호, 강의실, 홀, 편의시설은 찾기 어렵다는 점에서 시작했다.

핵심 결정은 장소명, 건물명, 별칭을 모두 검색 대상으로 포함한 것이다. 사용자가 공식 명칭을 정확히 모르는 상황을 기준으로 검색 구조를 설계했다.

주요 기능은 교내 장소 123개 직접 수집·구축, 건물·건물 내부 장소 필터, 검색 결과와 Marker 동기화, 장소 선택 시 지도 중심 이동, InfoWindow, 상세 장소 정보, PWA다.

학교 커뮤니티에 직접 소개했고 좋아요 41, 스크랩 81, 긍정적인 댓글 12를 확인했다.

Case Study는 `일상에서 불편 발견 → 문제 정의 → 직접 장소 데이터 수집 → 검색 구조 설계 → 모바일 서비스 구현 → 실제 학생들에게 배포 → 사용자 반응 확인` 흐름을 우선한다.

<a id="oshi-calendar"></a>

### Oshi Calendar

| 항목 | 내용 |
| --- | --- |
| 프로젝트 | 여러 서브컬처 게임의 마감 일정과 보상 우선순위를 통합하는 대시보드 |
| 기간 | 2026.06 — 현재 |
| 상태 | 개발 중 · Preview 배포 |
| 팀 | 3인 |
| 역할 | 공동 기획 · Frontend Developer · 프론트엔드 전 영역 담당 |
| 서비스 | <https://oshi-calendar-cyan.vercel.app/> |
| GitHub | <https://github.com/Tim3208/Oshi-Calendar> |
| Figma | <https://www.figma.com/design/XCVUGdYiwQYnrsAVrTogcR/> |
| 기술 | React, TypeScript, Tailwind CSS, Vite, Supabase, Vercel |
| 색상 맥락 | `plum` |

초기 가설은 여러 게임 일정을 하나의 Calendar에 합치는 것이었다. 개발 중 사용자의 실제 질문이 "9월 17일에 무엇이 있지?"보다 "오늘 무엇을 해야 하지?", "지금 놓치면 어떤 보상을 잃지?"에 가깝다고 판단해 Calendar 중심에서 Scheduler / Dashboard 중심으로 바꿨다.

Case Study에서 가장 중요한 문구는 아래 둘 중 하나다.

> Calendar를 만들다가 Calendar를 없앴습니다.

> Why We Removed the Calendar

주요 기능은 종료 임박 일정, 게임 허브, 게임 필터, 카테고리 필터, 보상 우선순위, Todo, 대시보드다.

설정 저장은 비로그인 사용자에게 회원가입을 강제하지 않기 위해 상태에 따라 나눈다.

```text
비로그인 — Filter Preference → LocalStorage
로그인 — Preference → Server
로그인 시 서버 데이터와 동기화
```

로그인 사용자는 여러 환경에서 같은 설정을 유지할 수 있다는 점을 함께 설명한다.

상태 UX는 Loading, Network Error, Empty Result, Degraded / Poor Data Quality, Normal State를 구분한다.

협업 개선은 API 명세 작성, 데이터 기준 문서화, 관리자용 데이터 조회 화면, 데이터 직접 확인 및 편집 기능으로 설명한다. 초기 구두 전달에서 데이터 형식 차이, 필드 의미 해석 차이, 반복 재작업이 발생했다는 맥락을 함께 쓴다.

<a id="cctv-scheduler"></a>

### CCTV 근무 자동 편성 프로그램

| 항목 | 내용 |
| --- | --- |
| 프로젝트 | 복잡한 근무 규칙과 인원별 조건을 반영하는 폐쇄망 근무 편성 도구 |
| 기간 | 2023.09 — 2024.06 |
| 형태 | 1인 프로젝트 |
| 담당 | 기획 · 개발 |
| 공개 범위 | 보안상 코드 비공개 · 실제 화면 비공개 |
| 기술 | HTML, CSS, Vanilla JavaScript, LocalStorage |
| 색상 맥락 | `terracotta` |

군 복무 중 매일 반복되는 CCTV 근무 편성 업무를 자동화하기 위해 개발했다. 인원별 역할, 휴가, 투입 가능 시간, 근무 규칙, 이전 근무 기록, 공정성을 수작업으로 확인해야 했다.

핵심 제약은 아래 네 가지다.

```text
NO INTERNET
NO DATABASE
NO LIBRARY
NO IDE
```

부대 내부 폐쇄망에서 메모장, 브라우저, HTML, CSS, Vanilla JavaScript만으로 구현했다. 기능은 근무표 자동 생성, 인원별 조건 반영, 근무 규칙 반영, 특수 상황 수동 수정, 개인별 근무 기록 조회, 근무 횟수 조회, 공정성 확인, LocalStorage 저장, Backup File 생성, Backup 복원이다.

핵심 메시지는 "기술을 많이 사용하는 것이 아니라 환경과 문제에 맞는 기술을 선택한다"다. 전역 전 부대 내부 담당자에게 프로그램과 사용 방법을 전달했지만 장기 운영 여부는 확인하지 못했다.

<a id="awards"></a>

## Awards

| 연도 | 수상 | 내용 | 근거 |
| --- | --- | --- | --- |
| 2025.10.29 | 최우수상 | 삼육대학교 SW 프로젝트 경진대회, 길거리 먹거리지도 | 삼육대학교 SW중심대학사업단 |
| 2019 | 동상 | 제9회 전국 중고교생 서강 게임·애니·만화 아이디어 공모전 | 서강대학교 |
| 2018 | 금상 | 교내 프로그래밍 경진대회 | 선린인터넷고등학교 |

길거리 먹거리지도에서 맡은 역할은 Frontend Developer와 UI/UX Designer다. 담당 범위는 전체 화면 구조, UI Design, Main, FAQ, 길거리 음식 노점 제보 페이지다. 기술은 React, Axios, Styled Components, Tailwind CSS다.

관련 링크는 <https://github.com/iyeonggyu0/FoodMap>, <https://youtu.be/nGwOk6U9pRo>, <https://www.figma.com/design/FyDb3y28Aiv8cnuS1F3vhA/SW%EA%B2%BD%EC%A7%84%EB%8C%80%ED%9A%8C>다.

<a id="leadership"></a>

## Leadership

멋쟁이사자처럼 삼육대학교 활동 이력은 다음과 같다.

| 기간 | 활동 |
| --- | --- |
| 2022 | 10기 Frontend |
| 2025 | 13기 Frontend |
| 2026 — 현재 | 14기 Frontend 운영진 |

14기 Frontend 운영진으로 27명의 부원에게 HTML, CSS, React, AI 활용 개발을 교육했다. 매주 Session, Study, Assignment, Review, Feedback을 진행했고, 동아리 플랫폼으로 과제 제출, 승인, 반려, 개별 Feedback을 운영했다. 중앙 해커톤 참가 팀의 Mentor 역할도 수행했다.

멘토링 원칙은 팀의 자율성을 우선하고, 개발이 막히거나 도움 요청이 있을 때 기술적 방향과 해결 방식을 제안하는 것이다.

<a id="teaching"></a>

## Teaching

Teaching은 교육 대상, 가르친 내용, 기간, 확인된 결과를 먼저 보여준다. 27명의 동아리원에게 진행한 프론트엔드 교육, 수학 지도, 해외 IT 교육을 각각 해당 경험의 근거와 연결한다. 추상적인 소통 구호 대신 난이도·진도·자료 조정이나 개별 피드백처럼 실제 설명 방식을 쓴다.

고등학생 수학 개인과외는 2022 — 2026.07 기간에 진행했으며 군 복무 기간은 제외한다. 총 8명을 1:1로 지도했고, 대상은 고등학교 1학년, 2학년, 3학년, 재수생이다. 학생별로 설명 방식, 난이도, 진도, 수업 자료를 조정했다. 내신 및 모의고사 7~9등급 수준 학생이 최고 2등급까지 향상한 사례가 있다. 학부모에게 성취도, 학습 태도, 개선점을 정리한 장문 Feedback을 주기적으로 전달했다.

개발 협업에서는 같은 원칙을 아래처럼 옮긴다.

| 상대 | 적용 방식 |
| --- | --- |
| 학생 | 이해 수준에 맞춘 설명 |
| Designer | 구현 가능한 UI로 해석 |
| Backend Developer | 명확한 Data / API Contract로 구체화 |

<a id="volunteer"></a>

## Volunteer

| 활동 | 기간 | 기관 | 대상 | 내용 |
| --- | --- | --- | --- | --- |
| World Friends Korea — Cambodia | 2025.07 | Battambang Teacher Education College | 약 20명 | 2주, 80시간, 영어로 Google Forms · Google Calendar · Google Drive · Google Meet 교육 |
| World Friends Korea — Vietnam | 2026.07 | University of Science and Education | 약 8명 | 2주, 80시간, 영어로 HTML · CSS · JavaScript · Basic Web Programming 교육 |

해외 IT 교육은 총 160시간이다. 베트남 교육에서는 학생별 학습 속도 차이가 큰 상황에서 전체 수업 속도 조절, 보조 강의자와 역할 분담, 개별 학생 지원을 수행했다.

<a id="education"></a>

## Education

| 학교 | 기간 | 내용 |
| --- | --- | --- |
| 삼육대학교 컴퓨터공학부 | 2021.03 — 2027.02 예정 | 2026.08 기준 4학년 2학기 예정. 주요 과목은 웹프로그래밍, 컴퓨터네트워크, 인공지능, 확률통계 |
| 선린인터넷고등학교 멀티미디어과 | 2018.03 — 2021.02 | 시각디자인, 영상편집, UX/UI 디자인 학습. 교내 웹 전공 동아리 개발자 활동. 게임 개발 동아리 InterRuze 공동 창설 |

학점은 Resume에는 존재하지만 Portfolio에서 적극적으로 강조하지 않는다.

<a id="skills"></a>

## Skills

기술 Stack은 숙련도 그래프, 퍼센트, 아이콘 대량 나열로 표현하지 않는다. 실제 프로젝트에서 의미 있게 사용한 기술만 역할 기반으로 묶는다.

화면 제목은 `프로젝트에서 사용한 기술`이다. 위 작성 규칙이나 "무엇을 할 수 있는가로 묶었습니다" 같은 편집 의도를 방문자에게 설명하지 않는다. 각 기술 묶음에 syu-likelion 화면·API 연동, Oshi Calendar 저장 방식, 삼육대 어디야 배포, Figma 협업 등 확인된 사용 사례를 연결한다.

| 역할 | 기술 |
| --- | --- |
| Build | JavaScript, TypeScript, React, Next.js, HTML, CSS, Tailwind CSS, Vite |
| Connect | REST API, Axios, Supabase, LocalStorage |
| Ship | Git, GitHub, Vercel, GitHub Pages, PWA |
| Design & Collaboration | Figma, Notion |
| Coursework / Additional Experience | C, MariaDB |

새 기술을 발견했다고 해서 무조건 Skills에 넣지 않는다.

<a id="case-study"></a>

## Case Study Writing Rules

프로젝트 상세는 프로젝트 이름, 설명, 기여·기간·결과를 먼저 보여주고 구체적인 상황을 제목으로 사용한다. `Problem`, `Solution`, `Result` 같은 일반 제목과 장식 번호를 모든 프로젝트에 반복하지 않는다. 삼육대 어디야·Oshi Calendar·CCTV는 현재 섹션 순서를 유지하면서 각 프로젝트의 검색·저장·편성 등 실제 내용으로 제목을 바꾼다. syu-likelion은 [일곱 섹션 구조](#syu-likelion)를 따른다.

아래 순서는 제목 템플릿이 아니라 각 설명을 쓸 때의 내부 기준이다.

```text
Problem
→ Reasoning / Decision
→ Solution
→ Result
```

"검색 기능을 구현했습니다"처럼 What만 말하지 않는다. "사용자가 공식 장소명을 정확히 기억하지 못하는 경우가 많다고 판단해 장소명뿐 아니라 건물명과 별칭까지 검색 대상으로 포함했습니다"처럼 Why를 앞세운다.

<a id="problem"></a>

### Problem

문제는 추상적으로 쓰지 않는다.

나쁜 방향은 "캠퍼스 길찾기가 불편했습니다"다. 좋은 방향은 "지도 애플리케이션에서는 건물 위치까지는 확인할 수 있었지만, 실제 학생이 찾는 강의실과 교내 시설의 위치는 확인하기 어려웠습니다"다.

가능하면 실제 사용자 행동을 설명한다.

<a id="decisions"></a>

### Decisions

Decision 섹션은 다음 질문에 답해야 한다.

- 왜 이 구조를 선택했는가?
- 다른 방법은 무엇이 있었는가?
- 왜 그 방법을 선택하지 않았는가?
- 사용자 입장에서 어떤 의미가 있었는가?
- 개발 및 운영 측면에서는 어떤 trade-off가 있었는가?

Oshi Calendar의 Calendar 제거 결정은 대표 Decision 소재다.

판단 블록은 문제, 검토한 선택지, 채택한 결정과 이유를 본문과 목록으로 보존한다. 고정 `Problem / Options / Decision` 라벨과 선택 표시 기호를 반복하지 않는다.

<a id="technical-challenges"></a>

### Technical Challenges

기술 문제는 코드 설명으로 끝내지 않는다. 아래 구조를 우선한다.

```text
문제
→ 원인 파악
→ 선택지
→ 결정
→ 구현
→ 결과
```

예를 들어 Guest Preference 저장 문제는 `Guest → LocalStorage`, `User → Server`로 나뉘는 이유까지 설명한다.

<a id="results"></a>

### Results

실제 확인할 수 있는 결과만 쓴다.

| 범위 | 확인된 수치 |
| --- | --- |
| syu-likelion | 가입 사용자 148명, 14기 공식 지원자 64명, 모집 기간 당일 최대 조회 200, 2026-08-16 기준 공지·세션 자료 30건 |
| 삼육대 어디야 | 장소 123개, 좋아요 41, 스크랩 81, 긍정적인 댓글 12 |
| Teaching | Frontend 교육 인원 27명, 수학 지도 학생 8명 |
| Overseas Teaching | Cambodia 80시간, Vietnam 80시간, 총 160시간 |

<a id="retrospective"></a>

### Retrospective

"많은 것을 배웠습니다"처럼 막연하게 쓰지 않는다. 무엇이 잘 되었는가, 무엇이 부족했는가, 다시 만든다면 무엇을 바꿀 것인가, 이후 프로젝트에서 어떻게 적용했는가를 쓴다.

현재 삼육대 어디야 Case Study에는 장소 데이터를 코드에 직접 관리해 123개까지 늘어난 뒤 수정과 배포 비용이 커졌다는 회고가 반영되어 있다. 다른 프로젝트에 같은 회고를 일반화하지 말고, 프로젝트별로 확인된 부족한 점과 다음 적용 방식을 쓴다.

<a id="cards"></a>

## Project Cards

Work는 가장 큰 syu-likelion 대표 영역 다음에 이미지와 설명이 나란한 프로젝트 행 세 개를 배치한다. 모바일에서는 이미지와 설명을 세로로 쌓는다. 모든 프로젝트를 동일한 3열 카드로 만들지 않는다.

각 항목은 프로젝트 이름, 설명, 역할, 기간·상태, 실제 이미지 또는 공개 가능한 도식, 확인된 성과 최대 두 개, 상세 링크를 제공한다. 핵심 기술은 짧은 텍스트로 표시한다. syu-likelion은 운영진 화면, 삼육대 어디야는 검색 결과와 지도, Oshi Calendar는 마감·할 일·보상 대시보드, CCTV는 제약·편성·저장 흐름을 중심으로 보여준다. CCTV 도식에는 실제 화면 비공개 사유를 함께 쓰고 실제 제품 화면처럼 보이는 목업은 만들지 않는다.

| 프로젝트 | 카드 핵심 문구 |
| --- | --- |
| syu-likelion | 분산된 동아리 운영을 하나의 플랫폼으로 |
| 삼육대 어디야 | "건물은 찾았는데 강의실은 어디지?"에서 시작한 캠퍼스 지도 |
| Oshi Calendar | 여러 게임에서 놓칠 일정과 보상을 한눈에 |
| CCTV Scheduler | 인터넷도, 라이브러리도, IDE도 없는 환경에서 만든 근무 자동화 |

`Calendar를 만들다가 Calendar를 없앴습니다.`는 Oshi Calendar 카드보다 Case Study 내부 문구로 우선 사용한다.

<a id="experience"></a>

## Experience

Career 탭은 Experience → Awards → Skills 순서다. 현재 구현은 Resume 전체를 다시 보여주지 않고 Timeline 형태로 핵심 항목만 보여준다.

경력은 타임라인, 수상은 간단한 목록으로 제시한다. 각 영역에 같은 도입문·영문 라벨·슬로건을 반복하지 않는다.

| 연도 | 핵심 항목 |
| --- | --- |
| 2018 | 선린인터넷고등학교 멀티미디어과, 교내 웹 전공 동아리 개발자, InterRuze 공동 창설 |
| 2021 | 삼육대학교 컴퓨터공학부 입학 |
| 2022 | 멋쟁이사자처럼 삼육대학교 10기 Frontend |
| 2023 | 군 복무, CCTV 근무 자동 편성 프로그램 개발 시작 |
| 2025 | 멋쟁이사자처럼 13기 Frontend, WFK Cambodia, SW 프로젝트 경진대회 최우수상 |
| 2026 | 멋쟁이사자처럼 14기 Frontend 운영진, WFK Vietnam, syu-likelion · 삼육대 어디야 · Oshi Calendar |

<a id="contact"></a>

## Contact

Contact는 탭이 아니다. Contact + Footer는 [`src/app/layout.tsx`](../src/app/layout.tsx)에 상주하고, 크롬바의 Contact 링크는 모든 라우트에 존재하는 `#contact`를 가리킨다.

Contact는 짧은 연락 안내와 이메일을 중심으로 구성한다. Hero의 정체성 문구나 협업 구호를 다시 반복하지 않는다.

Email은 [`src/data/profile.ts`](../src/data/profile.ts)의 `PROFILE.email`을 단일 출처로 사용한다. 이 문서에는 주소 값을 중복 기록하지 않는다.

GitHub는 <https://github.com/Tim3208>이다. Resume PDF는 현재 `public` 아래에서 확인되지 않으며, [`src/components/home/Contact.tsx`](../src/components/home/Contact.tsx)와 [`src/components/layout/Footer.tsx`](../src/components/layout/Footer.tsx)에 PDF 확보 후 추가 TODO가 남아 있다.

<a id="accuracy"></a>

## Accuracy

포트폴리오에 없는 경험을 만들지 않는다. 아래 항목은 금지한다.

- 임의의 사용자 수, 성능 개선 수치, Lighthouse 점수, 전환율
- 확인되지 않은 이용자 후기, 운영 기간, 장기 운영 여부
- 하지 않은 역할 또는 실제로 사용하지 않은 기술
- AI가 임의로 만든 프로젝트 문제

정보가 부족하면 구현 코드에 TODO를 남기거나 질문이 필요한 항목으로 표시한다. 화면 캡처는 실제 서비스 캡처만 쓰고, 샘플 데이터인지 실사용자 데이터인지 구분한다.

syu-likelion의 `final-result-pass.png`는 "위치 : 위치 나오면 수정" placeholder가 있어 현재 대표 이미지로 쓰지 않는다. OT 위치가 확정된 화면으로 다시 촬영하기 전까지 문장으로만 서술한다.

<a id="dates"></a>

## Dates

날짜 구분자는 `—`를 쓴다.

```text
2026.01 — 현재
2026.06 — 현재
```

원본 Resume의 `2026.01?현재` 같은 `?`는 깨진 separator로 이해하고 UI에 그대로 노출하지 않는다. 단, 정확한 월 정보가 불확실하면 임의로 수정하지 않는다.

<a id="language"></a>

## Language

기본 콘텐츠는 한국어 중심으로 작성한다. 국내 기업과 국내 채용 담당자가 보는 상황을 우선 고려한다.

기술명, GitHub, 짧은 직무명처럼 의미가 분명한 영어는 사용할 수 있다. 제목·목차·설명은 한국어를 우선하며 제목 위에 같은 뜻의 영어 라벨을 반복하지 않는다. "불편을 발견하고 웹으로 해결한다"는 내부 정체성을 모든 페이지의 도입문으로 복제하지 않는다. 작성 원칙과 편집 기준은 문서에 두고 방문자에게는 실제 경험을 설명한다.

<a id="priorities"></a>

## Priorities

새 기능이나 섹션을 추가할 때 아래 질문을 내부 기준으로 삼는다.

- 이 요소가 박정우라는 개발자를 더 잘 설명하는가?
- 이 요소가 "불편을 발견하고 개선한다"는 메시지를 강화하는가?
- 실제 경험에 근거하고 있는가?
- Portfolio가 아니라 Resume를 반복하고 있지는 않은가?
- 기술을 보여주기 위한 기술이 되고 있지는 않은가?
- 사용자와 문제보다 framework가 더 앞에 나오고 있지는 않은가?

초기 개발 순서 문서는 현재 해야 할 TODO로 취급하지 않는다. 이미 실제 라우트와 데이터 구조가 있으므로, 남길 기준은 "Homepage + syu-likelion Case Study의 완성도를 높인 뒤 다른 프로젝트 Case Study에 확장한다"는 품질 우선순위다.

<a id="main-case-study"></a>

## Main Case Study

`syu-likelion`은 대표 프로젝트이며 전체 Case Study Design System의 기준이다. 특히 실서비스, 실제 사용자, 운영자 UX, 복잡한 모집 Flow, API 협업, 유지보수, 운영 과정에서 발견한 문제 개선을 강조한다.

이 프로젝트를 단순 모집 랜딩이나 관리자 CRUD로 축소하지 않는다. 모집 공고와 지원서 제출부터 서류·면접 평가, 합격 후 공지·세션 자료·과제·일정 운영까지 이어지는 전체 수명주기 플랫폼으로 설명한다.
