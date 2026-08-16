# AGENTS.md

## 1. 프로젝트 목적

이 프로젝트는 **개인 포트폴리오 웹사이트**를 구현하기 위한 프로젝트다.

단순히 기술 스택과 프로젝트 목록을 나열하는 개발자 포트폴리오가 아니라, 다음과 같은 개발자 정체성을 보여주는 것을 목표로 한다.

> **불편을 발견하고 개선하는 웹 프론트엔드 개발자**

핵심 메시지는 다음과 같다.

> 사용자의 반복적인 불편을 발견하고, 이를 실제 사용할 수 있는 웹 서비스로 구현한다.

이 포트폴리오에서 가장 중요하게 보여줘야 하는 것은 다음 세 가지다.

1. 사용자의 불편을 발견하고 문제를 정의하는 능력
2. 문제에 맞는 제품·UX·기술적 판단을 내리는 능력
3. 실제 서비스로 구현하고 운영·개선하는 능력

따라서 모든 UI, 문구, 프로젝트 설명과 인터랙션은 이 메시지를 강화하는 방향으로 설계한다.

---

# 2. 개발자 정보

## 기본 정보

- 이름: 박정우
- 직무 방향: Web / Frontend Developer
- GitHub: https://github.com/Tim3208
- 전공: 삼육대학교 컴퓨터공학부
- 졸업 예정: 2027.02
- 고등학교: 선린인터넷고등학교 멀티미디어과

## 핵심 소개

사용자의 반복적인 불편을 발견하고 실제 사용되는 웹 서비스로 구현해 온 웹·프론트엔드 개발자다.

React·Next.js 기반 프로젝트에서 다음 경험을 가지고 있다.

- 사용자 화면 구현
- 관리자/운영자 기능 구현
- REST API 연동
- 사용자 상태 처리
- 배포
- 실제 서비스 유지보수
- 디자이너 및 백엔드 개발자와 협업

고등학교에서 시각디자인과 UX/UI 디자인을 학습했고, 대학에서는 컴퓨터공학을 전공했다.

따라서 디자인과 개발 양쪽의 관점을 가지고 있으며, 디자이너·백엔드 개발자·비개발자의 요구사항을 실제 화면과 기능으로 구체화하는 능력을 강점으로 한다.

멋쟁이사자처럼 프론트엔드 운영진으로 활동하며 27명의 부원을 교육한 경험도 있다.

---

# 3. 포트폴리오의 핵심 방향

이 사이트는 다음과 같은 인상을 주어야 한다.

## 보여줘야 하는 이미지

- 문제를 발견하는 개발자
- 제품을 생각하는 프론트엔드 개발자
- 실제 사용되는 서비스를 만들어 본 개발자
- 단순 구현자가 아니라 기능의 목적을 고민하는 개발자
- 디자인과 개발 사이를 이해하는 개발자
- 협업 과정에서 요구사항을 구체화할 수 있는 개발자
- 다른 사람에게 개발을 설명하고 교육할 수 있는 개발자

## 피해야 하는 이미지

다음과 같은 일반적인 개발자 포트폴리오 형태는 피한다.

- 기술 아이콘만 대량으로 나열
- 의미 없는 Three.js 효과
- 마우스를 따라다니는 과도한 애니메이션
- 네온/터미널 스타일 중심의 전형적인 개발자 포트폴리오
- 프로젝트 기능 목록만 나열
- "React를 사용할 수 있습니다" 수준의 설명
- 의미 없는 Skill Percentage
- 각 기술의 숙련도를 임의의 수치로 표현
- 지나치게 화려한 스크롤 인터랙션

포트폴리오의 중심은 **Product Case Study + Frontend Developer Portfolio**다.

---

# 4. 핵심 메시지

Hero에서 다음 문구를 주요 후보로 사용한다.

## Main Copy

> 불편을 발견하고  
> 웹으로 해결합니다.

또는

> 불편을 발견하고 개선하는  
> 웹 프론트엔드 개발자

## Supporting Copy

> React · Next.js 기반으로  
> 기획, UI 구현, API 연동, 배포와 운영까지 경험했습니다.

문구는 추후 수정 가능하지만 의미는 유지한다.

---

# 5. 사이트 전체 구조

기본 구조는 **Single Page Homepage + Project Case Study Detail Pages**로 구성한다.

예상 라우트:

```text
/
├─ Hero
├─ About
├─ Featured Projects
├─ Experience
├─ Teaching
├─ Awards
├─ Skills
└─ Contact

/projects/syu-likelion
/projects/eodiya
/projects/oshi-calendar
/projects/cctv-scheduler
```

필요하면 프로젝트 데이터 구조를 기반으로 동적 라우팅을 사용할 수 있다.

예:

```text
/projects/[slug]
```

---

# 6. 홈페이지 구성

## 6.1 Hero

방문자가 첫 화면에서 5초 이내에 다음을 파악할 수 있어야 한다.

- 누구인지
- 어떤 개발자인지
- 어떤 문제를 해결해 왔는지

예시 구조:

```text
불편을 발견하고
웹으로 해결합니다.

Web / Frontend Developer
박정우

React · Next.js 기반으로
기획, UI 구현, API 연동, 배포와 운영까지 경험했습니다.

[프로젝트 보기] [GitHub]
```

Hero 또는 바로 다음 영역에서 주요 수치를 강조해도 좋다.

후보 수치:

- 148명 — 운영 서비스 가입 사용자
- 200 — 모집 기간 당일 최대 조회 수
- 123개 — 캠퍼스 장소 데이터
- 27명 — 프론트엔드 교육 인원
- 160시간 — 해외 IT 교육
- 2개국 — 해외 IT 교육 경험

모든 수치를 반드시 사용할 필요는 없다.

디자인적으로 필요한 것만 선택한다.

---

# 7. About

Resume의 PROFILE 문장을 그대로 길게 붙이지 않는다.

About의 핵심은 개발자의 행동 패턴을 보여주는 것이다.

예:

> 저는 일상에서 반복되는 불편을 발견하면  
> “웹으로 해결할 수 없을까?”부터 생각합니다.

이후 대표적인 문제 발견 사례를 연결한다.

```text
동아리 운영이
Discord / KakaoTalk / Google Form / Excel에 분산됨
→ syu-likelion

교내 건물은 찾을 수 있지만
강의실과 내부 시설 위치는 찾기 어려움
→ 삼육대 어디야

여러 게임의 이벤트 종료 일정을
사용자가 직접 기억해야 함
→ Oshi Calendar
```

추가적으로 배경을 다음처럼 표현할 수 있다.

```text
Design
선린인터넷고 멀티미디어과
시각디자인 · UX/UI

+

Engineering
삼육대학교 컴퓨터공학
Web · Software · Computer Science
```

이 영역의 핵심은 다음 메시지다.

> 디자인을 배우고 개발을 전공했기 때문에 화면과 구현을 함께 생각한다.

---

# 8. Featured Projects

홈페이지에서는 대표 프로젝트 4개를 보여준다.

우선순위:

1. syu-likelion
2. 삼육대 어디야
3. Oshi Calendar
4. CCTV 근무 자동 편성 프로그램

추가 프로젝트 및 수상작은 보조 콘텐츠로 보여준다.

---

# 9. 프로젝트 1 — syu-likelion

## 기본 정보

프로젝트명:

**멋쟁이사자처럼 삼육대학교 모집·커뮤니티·운영 관리 플랫폼**

기간:

2026.01 ~ 현재

상태:

운영 및 유지보수 중

역할:

Frontend Developer

팀:

- Frontend 2
- Backend 2
- Designer 1

서비스:

https://syu-likelion.org

GitHub:

https://github.com/No4hh4oN/Likelion14th-FE

Figma:

https://www.figma.com/design/ZORVqHx4WTt4ePPM4mIYz4/

기술:

- Next.js App Router
- React
- TypeScript
- Axios
- Global CSS
- GitHub
- Figma

## 프로젝트 핵심 메시지

> 분산되어 있던 동아리 운영을 하나의 플랫폼으로

기존 운영 도구:

```text
Discord
KakaoTalk
Google Forms
Excel
```

분산되어 있던 업무:

- 모집
- 지원서 관리
- 평가
- 면접
- 공지
- 과제
- 커뮤니티
- 사용자 일정

이를 하나의 웹 서비스로 통합했다.

## 담당 기능

- Main
- FAQ
- 운영진 소개
- 지원서 작성 · 임시 저장 · 제출 후 수정 · 파일 업로드
- 결과 상태별 화면
- 서류 합격자 면접 시간 선택 · 예약
- 마이페이지
- 운영진용 지원자 관리
- 서류 평가
- 면접 평가
- 최종 합격 관리
- 활성 역할의 `STAFF` 여부를 확인하는 Admin Guard
- 동아리원 전용 커뮤니티
- 공지
- 세션 자료
- 과제 제출 현황 · 평가
- 운영 일정 관리 (마이페이지 캘린더 연동)
- 자유게시판

## 담당하지 않은 기능

서비스 범위에는 있으나 다른 팀원이 구현했다. Case Study에서 개인 기여로 쓰지 않는다.

- 출결 관리

## 모집 운영 Flow

```text
지원서 제출
↓
지원서 조회
↓
운영진 코멘트 / 점수 입력
↓
서류 합격자 결정
↓
면접 평가
↓
최종 합격자 결정
```

이 Flow는 프로젝트 상세 Case Study에서 시각화하는 것을 우선 고려한다.

## 개발 및 협업 경험

API 명세와 실제 응답 또는 프론트엔드의 기대 데이터가 다른 문제를 직접 재현하고 분석했다.

과정 예시:

```text
문제 재현
↓
Network Response 확인
↓
API 명세 비교
↓
Backend 개발자와 필드 및 응답 계약 조율
↓
Frontend 수정
↓
정상 동작 확인
```

특정 운영 과정에서 다음 문제도 개선했다.

- 지원서 데이터 대조가 어려운 문제
- 리다이렉트 흐름 문제
- 숨김 필드 정책 문제
- 과제 승인 페이지의 잘못된 URL Routing

## 성과

- 가입 사용자: 148명
- 14기 공식 지원자: 64명
- 모집 기간 당일 최대 조회 수: 200
- 공지 · 세션 자료: 30건 (2026-08-16 기준)
- 실제 운영 중

## 상세 페이지에서 강조할 것

이 프로젝트는 가장 깊이 있는 Main Case Study로 구성한다.

특히 다음을 강조한다.

- 실서비스
- 실제 사용자
- 운영자 UX
- 복잡한 모집 Flow
- API 협업
- 유지보수
- 운영 과정에서 발견한 문제 개선

---

# 10. 프로젝트 2 — 삼육대 어디야

## 기본 정보

프로젝트명:

**교내 건물과 내부 시설의 상세 위치를 검색하는 모바일 캠퍼스 지도**

기간:

2026.02

형태:

1인 프로젝트

담당:

기획 / 개발 / 배포 전 과정

서비스:

https://tim3208.github.io/eodiya/

GitHub:

https://github.com/Tim3208/eodiya

기술:

- TypeScript
- JavaScript
- HTML
- CSS
- Kakao Maps API
- PWA
- GitHub Pages

## 프로젝트의 시작점

기존 지도 서비스에서는 건물 위치는 찾을 수 있지만 다음과 같은 내부 장소 위치는 찾기 어렵다.

- 강의실
- 홀
- 편의시설
- 교내 특정 시설

핵심 문제 정의:

> 학생이 필요한 것은 건물의 위치가 아니라 최종 목적지의 위치다.

예:

```text
"제1실습관" 위치는 알 수 있음

하지만

"제1실습관 301호"
"특정 강의실"
"특정 홀"

의 실제 위치를 찾기는 어려움
```

## 주요 기능

교내 장소 총 123개 구축.

검색 기준:

- 장소명
- 건물명
- 별칭

필터:

- 건물
- 건물 내부 장소

지도 기능:

- 검색 결과와 Marker 동기화
- 장소 선택 시 지도 중심 이동
- InfoWindow 표시
- 상세 장소 정보 제공

모바일 사용 환경을 고려하여 PWA 적용.

## 사용자 반응

학교 커뮤니티에 직접 서비스 소개.

성과:

- 좋아요 41
- 스크랩 81
- 긍정적인 댓글 12

## Case Study 핵심

기능 자체보다 다음 흐름을 보여준다.

```text
일상에서 불편 발견
↓
문제 정의
↓
직접 장소 데이터 수집
↓
검색 구조 설계
↓
모바일 서비스 구현
↓
실제 학생들에게 배포
↓
사용자 반응 확인
```

---

# 11. 프로젝트 3 — Oshi Calendar

## 기본 정보

프로젝트명:

**여러 서브컬처 게임의 마감 일정과 보상 우선순위를 통합하는 대시보드**

기간:

2026.06 ~ 현재

상태:

개발 중 / Preview 배포

팀:

3인

역할:

- 공동 기획자
- Frontend Developer
- 프론트엔드 전 영역 담당

서비스:

https://oshi-calendar-cyan.vercel.app/

GitHub:

https://github.com/Tim3208/Oshi-Calendar

Figma:

https://www.figma.com/design/XCVUGdYiwQYnrsAVrTogcR/

기술:

- React
- TypeScript
- Tailwind CSS
- Vite
- Supabase
- Vercel

## 프로젝트의 시작점

여러 게임을 플레이하는 사용자는 각 게임의 이벤트 및 콘텐츠 종료 일정을 각각 찾아봐야 한다.

초기 문제:

```text
Game A
Game B
Game C
Game D

각 게임마다
이벤트 종료일을 별도 확인
```

초기 아이디어:

> 여러 게임 일정을 하나의 Calendar에 합친다.

하지만 개발 과정에서 핵심 사용자 니즈를 다시 정의했다.

사용자가 궁금한 것은:

> "9월 17일에 어떤 이벤트가 있지?"

보다

> "오늘 무엇을 해야 하지?"

> "지금 놓치면 어떤 보상을 잃지?"

에 가깝다고 판단했다.

따라서 서비스 방향을 다음처럼 변경했다.

```text
Calendar 중심

↓

Deadline
Reward Priority
Todo
Game Hub

↓

Scheduler / Dashboard 중심
```

## 매우 중요한 Product Decision

이 Case Study에서 가장 강조해야 하는 부분이다.

Section Title 후보:

> Calendar를 만들다가 Calendar를 없앴습니다.

또는

> Why We Removed the Calendar

단순 구현 경험이 아니라 사용자 문제를 다시 정의하고 서비스 방향을 변경한 경험을 보여준다.

## 주요 기능

- 종료 임박 일정
- 게임 허브
- 게임 필터
- 카테고리 필터
- 보상 우선순위
- Todo
- 대시보드

## 사용자 설정 처리

비로그인:

```text
Filter Preference
↓
LocalStorage
```

로그인:

```text
Preference
↓
Server
```

로그인 상태에서는 서버 데이터와 설정을 동기화한다.

핵심 이유:

- 비로그인 사용자에게 회원가입 강제 X
- 로그인 사용자는 여러 환경에서 설정 유지 가능

## 상태 UX

다음 상황을 구분해 UI를 구현했다.

- Loading
- Network Error
- Empty Result
- Degraded / Poor Data Quality
- Normal State

사용자가 현재 어떤 상태인지 이해하고, 필요한 행동을 판단할 수 있도록 안내한다.

## 협업 개선

초기에는 구두로 데이터 구조를 전달했다.

이 과정에서:

- 데이터 형식 차이
- 필드 의미 해석 차이
- 반복적인 재작업

이 발생했다.

이를 개선하기 위해:

- API 명세 작성
- 데이터 기준 문서화
- 관리자용 데이터 조회 화면
- 데이터 직접 확인 및 편집 기능

을 구현했다.

---

# 12. 프로젝트 4 — CCTV 근무 자동 편성 프로그램

## 기본 정보

프로젝트명:

**복잡한 근무 규칙과 인원별 조건을 반영하는 폐쇄망 근무 편성 도구**

기간:

2023.09 ~ 2024.06

형태:

1인 프로젝트

보안상:

- 코드 비공개
- 실제 화면 비공개

기술:

- HTML
- CSS
- Vanilla JavaScript
- LocalStorage

## 프로젝트의 시작점

군대에서 매일 반복되는 CCTV 근무 편성 업무를 자동화하기 위해 개발했다.

편성 시 다음 조건을 수작업으로 확인해야 했다.

- 인원별 역할
- 휴가
- 투입 가능 시간
- 근무 규칙
- 이전 근무 기록
- 근무 편성 공정성

## 핵심 제약

이 프로젝트에서 가장 중요한 것은 기술 자체보다 실행 환경이다.

```text
NO INTERNET

NO DATABASE

NO LIBRARY

NO IDE
```

군 내부 폐쇄망 환경에서:

- 외부 인터넷 사용 불가
- 개발 도구 설치 불가
- 외부 Library 사용 불가

따라서:

```text
메모장
+
브라우저
+
HTML
+
CSS
+
Vanilla JavaScript
```

만으로 구현했다.

## 주요 기능

- 근무표 자동 생성
- 인원별 조건 반영
- 근무 규칙 반영
- 특수 상황 수동 수정
- 개인별 근무 기록 조회
- 근무 횟수 조회
- 근무 공정성 확인

Database를 사용할 수 없었기 때문에:

- LocalStorage 저장
- Backup File 생성
- Backup 복원

기능을 구현했다.

## 핵심 메시지

> 기술을 많이 사용하는 것이 아니라 환경과 문제에 맞는 기술을 선택한다.

## 결과

전역 전 부대 내부 담당자에게 프로그램과 사용 방법을 전달했다.

장기적인 실제 운영 여부는 확인하지 못했으므로 과장해서 표현하지 않는다.

---

# 13. Awards

## 2025 삼육대학교 SW 프로젝트 경진대회

수상:

**최우수상**

프로젝트:

**길거리 먹거리지도**

날짜:

2025.10.29

주최:

삼육대학교 SW중심대학사업단

역할:

- Frontend Developer
- UI/UX Designer

담당:

- 전체 화면 구조
- UI Design
- Main
- FAQ
- 길거리 음식 노점 제보 페이지

기술:

- React
- Axios
- Styled Components
- Tailwind CSS

GitHub:

https://github.com/iyeonggyu0/FoodMap

시연 영상:

https://youtu.be/nGwOk6U9pRo

Figma:

https://www.figma.com/design/FyDb3y28Aiv8cnuS1F3vhA/SW%EA%B2%BD%EC%A7%84%EB%8C%80%ED%9A%8C

---

## 기타 수상

### 교내 프로그래밍 경진대회 금상

2018  
선린인터넷고등학교

### 제9회 전국 중고교생 서강 게임·애니·만화 아이디어 공모전 동상

2019  
서강대학교

---

# 14. Leadership & Teaching

## 멋쟁이사자처럼 삼육대학교

활동:

- 10기 Frontend — 2022
- 13기 Frontend — 2025
- 14기 Frontend 운영진 — 2026 ~ 현재

Frontend 운영진으로 27명의 부원을 대상으로 다음 교육을 진행했다.

- HTML
- CSS
- React
- AI 활용 개발

매주:

- Session
- Study
- Assignment
- Review
- Feedback

를 진행했다.

동아리 플랫폼을 이용해:

- 과제 제출
- 승인
- 반려
- 개별 Feedback

을 진행했다.

중앙 해커톤 참가 팀의 Mentor 역할도 수행했다.

원칙:

> 팀의 자율성을 우선하며, 개발이 막히거나 도움 요청이 있을 때 기술적 방향과 해결 방식을 제안한다.

---

# 15. Teaching Experience

## 고등학생 수학 개인과외

기간:

2022 ~ 2026.07  
군 복무 기간 제외

학생:

총 8명

대상:

- 고등학교 1학년
- 고등학교 2학년
- 고등학교 3학년
- 재수생

모든 수업을 1:1로 진행했다.

학생별로 다음을 조정했다.

- 설명 방식
- 난이도
- 진도
- 수업 자료

성과 사례:

내신 및 모의고사 7~9등급 수준 학생이 최고 2등급까지 향상.

부모에게 학생의:

- 성취도
- 학습 태도
- 개선점

등을 정리한 장문의 Feedback을 주기적으로 전달했다.

이 경험에서 얻은 핵심:

> 같은 개념이라도 상대의 배경지식에 따라 다르게 설명해야 한다.

이를 개발 협업에도 적용하고 있다.

```text
학생
→ 이해 수준에 맞춘 설명

Designer
→ 구현 가능한 UI로 해석

Backend Developer
→ 명확한 Data / API Contract로 구체화
```

포트폴리오에서는 Teaching을 단순 외부 활동이 아니라 **Communication Skill의 근거**로 사용한다.

---

# 16. Volunteer Experience

## World Friends Korea — Cambodia

기관:

Battambang Teacher Education College

기간:

2025.07

활동:

- 2주
- 80시간
- 약 20명 대상

영어로 다음 도구를 교육했다.

- Google Forms
- Google Calendar
- Google Drive
- Google Meet

---

## World Friends Korea — Vietnam

기관:

University of Science and Education

기간:

2026.07

활동:

- 2주
- 80시간
- 약 8명 대상

영어로 다음 내용을 교육했다.

- HTML
- CSS
- JavaScript
- Basic Web Programming

학생별 학습 속도 차이가 큰 상황에서:

- 전체 수업 속도 조절
- 보조 강의자와 역할 분담
- 개별 학생 지원

을 수행했다.

---

# 17. Education

## 삼육대학교

컴퓨터공학부

기간:

2021.03 ~ 2027.02 예정

2026.08 기준:

4학년 2학기 예정

주요 과목:

- 웹프로그래밍
- 컴퓨터네트워크
- 인공지능
- 확률통계

학점은 Resume에는 존재하지만 Portfolio에서 적극적으로 강조하지 않는다.

---

## 선린인터넷고등학교

멀티미디어과

기간:

2018.03 ~ 2021.02

학습:

- 시각디자인
- 영상편집
- UX/UI 디자인

교내 웹 전공 동아리에서 개발자로 활동했다.

게임 개발 동아리 InterRuze를 공동 창설했다.

---

# 18. Skills

기술 Stack은 숙련도 그래프나 퍼센트로 표현하지 않는다.

다음처럼 역할 기반으로 구분한다.

## Build

- JavaScript
- TypeScript
- React
- Next.js
- HTML
- CSS
- Tailwind CSS
- Vite

## Connect

- REST API
- Axios
- Supabase
- LocalStorage

## Ship

- Git
- GitHub
- Vercel
- GitHub Pages
- PWA

## Design & Collaboration

- Figma
- Notion

## Coursework / Additional Experience

- C
- MariaDB

추가 기술을 발견했다고 해서 무조건 Skills에 넣지 않는다.

실제 프로젝트에서 의미 있게 사용한 기술 위주로 유지한다.

---

# 19. 프로젝트 Case Study 작성 원칙

프로젝트 상세 페이지는 단순 README처럼 작성하지 않는다.

모든 프로젝트는 기본적으로 다음 구조를 따른다.

```text
01. Overview
02. Problem
03. Insight
04. My Role
05. Solution
06. Key Decisions
07. Technical Challenges
08. Result
09. Retrospective
```

프로젝트에 따라 일부 Section은 생략하거나 합쳐도 된다.

## 핵심 서술 구조

가능한 경우 항상 다음 순서로 작성한다.

```text
Problem
↓
Reasoning / Decision
↓
Solution
↓
Result
```

다음과 같은 문장은 피한다.

> 검색 기능을 구현했습니다.

대신 다음처럼 설명한다.

> 사용자가 공식 장소명을 정확히 기억하지 못하는 경우가 많다고 판단했습니다. 따라서 장소명뿐 아니라 건물명과 별칭까지 검색 대상으로 포함했습니다.

중요한 것은:

> What

보다

> Why

다.

---

# 20. Case Study — Problem 작성 원칙

문제는 추상적으로 작성하지 않는다.

나쁜 예:

> 캠퍼스 길찾기가 불편했습니다.

좋은 예:

> 지도 애플리케이션에서는 건물 위치까지는 확인할 수 있었지만, 실제 학생이 찾는 강의실과 교내 시설의 위치는 확인하기 어려웠습니다.

가능하면 실제 사용자 행동을 설명한다.

---

# 21. Case Study — Decision 작성 원칙

이 프로젝트에서 가장 중요하게 보여줄 항목 중 하나다.

다음 질문에 답할 수 있어야 한다.

- 왜 이 구조를 선택했는가?
- 다른 방법은 무엇이 있었는가?
- 왜 그 방법을 선택하지 않았는가?
- 사용자 입장에서 어떤 의미가 있었는가?
- 개발 및 운영 측면에서는 어떤 Trade-off가 있었는가?

특히 Oshi Calendar의 Calendar 제거 결정은 매우 중요한 Case Study 소재다.

---

# 22. Case Study — Technical Challenge 작성 원칙

기술 문제를 단순 코드 설명으로 작성하지 않는다.

다음 형식을 우선한다.

```text
문제
↓
원인 파악
↓
선택지
↓
결정
↓
구현
↓
결과
```

예:

```text
Guest Preference 저장 필요
+
Logged-in Preference 동기화 필요

↓

LocalStorage만 사용?
Server만 사용?
둘 다 사용?

↓

Guest → LocalStorage
User → Server
```

---

# 23. Case Study — Result 작성 원칙

실제 확인할 수 있는 결과만 사용한다.

확인된 주요 숫자:

## syu-likelion

- 가입 사용자 148명
- 14기 공식 지원자 64명 (운영자 서류 지원자 목록의 "총 64명" 표시로 확인)
- 모집 기간 당일 최대 조회 200
- 공지 · 세션 자료 30건 (2026-08-16 운영 사이트 기준)

## 삼육대 어디야

- 장소 123개
- 좋아요 41
- 스크랩 81
- 긍정적인 댓글 12

## Teaching

- Frontend 교육 인원 27명
- 수학 지도 학생 8명

## Overseas Teaching

- Cambodia 80시간
- Vietnam 80시간
- 총 160시간

숫자를 임의로 생성하거나 추정하지 않는다.

---

# 24. Case Study — Retrospective 작성 원칙

다음과 같이 막연한 표현을 피한다.

> 많은 것을 배웠습니다.

대신 다음을 작성한다.

- 무엇이 잘 되었는가
- 무엇이 부족했는가
- 다시 만든다면 무엇을 바꿀 것인가
- 이후 프로젝트에서 어떻게 적용했는가

예:

> 초기에는 장소 데이터를 코드에 직접 관리했지만 데이터가 늘어나면서 관리 비용이 커졌습니다. 다시 구현한다면 데이터베이스나 CMS를 분리하고 사용자 제보 Flow까지 고려할 것입니다.

---

# 25. 디자인 방향

전체 UI는 다음 키워드를 따른다.

- Clean
- Product-oriented
- Editorial
- Minimal
- Professional
- Developer + Product Design

Reference의 방향성은 다음과 같다.

- Linear
- Vercel
- Toss Tech
- 현대적인 Product Case Study

특정 사이트를 그대로 복제하지 않는다.

---

# 26. Layout 원칙

많은 Whitespace를 사용한다.

Case Study에서:

```text
Text
+
Screenshot
+
Diagram
+
Metric
```

을 적절히 조합한다.

텍스트만 길게 이어지는 페이지는 피한다.

각 섹션은 하나의 명확한 메시지를 가져야 한다.

---

# 27. Typography

Typography는 콘텐츠 전달에 집중한다.

우선순위:

1. 강한 Heading
2. 읽기 쉬운 Body
3. 명확한 Metadata
4. 작은 Label

Hero Heading은 큰 크기를 사용해도 되지만 화면을 의미 없이 가득 채우지 않는다.

---

# 28. Color

이 프로젝트의 팔레트는 **PANTONE Cloud Dancer 지면 + Powdered Pastels**로 확정한다.

기존의 "Neutral Palette + 1 Accent Color" 방침은 이 항목으로 대체한다.

색을 하나로 억제하는 대신, 파스텔이 정식 팔레트로서 역할을 갖되 **구조를 지키도록** 한다.

## 28.1 Ground

지면은 PANTONE 11-4201 TCX Cloud Dancer 하나다.

```text
--paper         #F0EEE9   Cloud Dancer / 사이트 전체 지면
--paper-raised  #F7F6F2   지면보다 밝게 띄운 면
--paper-sunk    #E7E4DC   지면보다 눌러 내린 면 (코드, Before 블록)
--deep-ground   #22201B   Contact 반전 블록
```

순백(`#FFFFFF`)은 사용하지 않는다.

Cloud Dancer는 강조에 쓸 수 없는 오프화이트이므로 **Accent가 아니라 지면**으로만 쓴다.

## 28.2 Ink

잉크는 지면의 온도에 맞춰 warm 계열로 치우친 뉴트럴을 쓴다.

```text
--ink           #1E1C18   Heading, 본문 강조
--ink-2         #57544C   본문
--ink-3         #6E6A62   메타데이터, 라벨 (이보다 밝게 내리지 않는다)
--rule          #DCD8CF   Hairline
--rule-strong   #C6C1B6   강조 Hairline
```

## 28.3 Powdered Pastels — 6계열 × 3단 램프

파스텔은 배경 장식이 아니라 **텍스트·링크·버튼까지 담당하는 정식 팔레트**다.

각 계열은 반드시 3단으로 존재한다.

```text
wash   섹션 전체 지면 (full-bleed)
tint   채워진 면 — 카드, 스크린샷 매트, 식별 바
deep   그 색맥락 안의 잉크 — 링크, 버튼, 수치, 섹션 번호, 포커스링
```

| 계열 | wash | tint | deep | 배정 |
|---|---|---|---|---|
| Powder Blue | `#E6EDF2` | `#C9D8E2` | `#38566B` | 시스템 기본값 · syu-likelion |
| Powder Sage | `#E7EDE3` | `#CBD6C4` | `#4A5B41` | Teaching · 삼육대 어디야 |
| Powder Mauve | `#EDE8F0` | `#D6CCDA` | `#5A4A63` | Oshi Calendar 전용 |
| Powder Clay | `#F0E8E2` | `#E0D0C6` | `#6B4A3A` | Skills · CCTV Scheduler |
| Powder Blush | `#F2E7E9` | `#E5CFD2` | `#6E4450` | About |
| Powder Butter | `#F1EDE0` | `#E7DFC2` | `#62522C` | Experience |

`deep` 6종은 Cloud Dancer 위에서 **6.3 : 1 ~ 7.0 : 1** 범위로 튜닝되어 있다.

편차가 0.7 이내이므로 색맥락이 바뀌어도 링크와 수치의 시각적 무게가 흔들리지 않는다.

이 대비 범위를 벗어나는 색을 팔레트에 추가하지 않는다.

## 28.4 색맥락 규칙 — 한 섹션에 한 계열

여섯 색이 동시에 보이면 팔레트가 아니라 소음이 된다.

섹션에 `.hue-*` 클래스를 하나 걸면 그 안의 `--hue-wash / --hue-tint / --hue-deep`이
통째로 교체되고, 해당 섹션의 모든 색 결정은 **그 계열 안에서만** 이뤄진다.

```text
.hue-blue { --hue-wash: …; --hue-tint: …; --hue-deep: …; }
```

여섯 색이 한 화면에 모이는 곳은 **Contact 하단 색표본 스트립과 OG 이미지** 두 군데뿐이다.

프로젝트 색은 데이터(`Project.hue`)에 두어 홈 카드 → 상세 Hero → Navigation이 같은 색을 공유한다.

색을 JSX에 하드코딩하지 않는다.

## 28.5 대비 규칙

`tint` 면 위에 올릴 수 있는 것은 다음 세 가지뿐이다.

```text
--ink       11.2 : 1
--ink-2      4.9 : 1
--hue-deep   5.0 ~ 5.6 : 1
```

`--ink-3`는 `tint` 위에서 3.5 : 1로 떨어지므로 **지면과 wash 위에서만** 사용한다.

## 28.6 금지

- 그라디언트 — 파스텔은 언제나 단색 면으로만 존재한다
- 한 섹션에 두 계열 이상 혼용
- 파스텔을 본문·Heading 색으로 사용 (본문은 언제나 잉크)
- `tint` 위 `--ink-3`
- 색만으로 정보를 전달하는 것 — 프로젝트 색에는 항상 이름을 함께 표기한다
- 대비 범위를 벗어난 파스텔 추가

## 28.7 Dark Theme

반전이 아니라 **역할 교체**다.

Cloud Dancer가 지면에서 잉크로 올라오고, 낮에는 대비 때문에 텍스트가 될 수 없던
파스텔 원색이 밤에는 `deep` 자리를 가져간다.

```text
--paper      #171613
--ink        #F0EEE9   ← Cloud Dancer

blue-deep    #A8C4D6
sage-deep    #B3C6A8
mauve-deep   #C4B4CE
clay-deep    #D4B3A0
blush-deep   #D9AFB8
butter-deep  #D2C48E
```

다크에서도 `deep` 6종은 9 : 1 ~ 10 : 1로 다시 맞춘다.

`@media (prefers-color-scheme: dark)`와 `:root[data-theme="dark"]` 두 블록에서
**18개 파스텔 토큰만** 재정의하고, `.hue-*` 스코프와 컴포넌트 CSS는 손대지 않는다.

---

# 29. Animation

Animation은 목적이 있을 때만 사용한다.

허용 예:

- Section Reveal
- Hover Transition
- Card Hover
- Image Scale
- Navigation Transition
- Subtle Hero Motion

피할 것:

- 의미 없는 Scroll Hijacking
- 과도한 Parallax
- Cursor Follower
- 지속적인 Background Animation
- 읽기를 방해하는 Motion

`prefers-reduced-motion`을 고려한다.

---

# 30. Responsive Design

이 포트폴리오는 반드시 모바일에서도 완성도 있게 보여야 한다.

모바일에서는:

- 지나치게 큰 Heading 제한
- Case Study Image Stack
- Navigation 단순화
- Horizontal Overflow 방지
- Touch Target 확보

를 신경 쓴다.

`삼육대 어디야`가 모바일 중심 서비스였던 만큼 포트폴리오 자체도 Mobile UX가 나쁘지 않아야 한다.

---

# 31. Accessibility

기본적으로 다음을 준수한다.

- Semantic HTML
- Keyboard Navigation
- Focus State
- 충분한 Color Contrast
- 이미지 alt
- Button / Link 목적 명확화
- Heading Hierarchy
- Reduced Motion 대응

단순 Lighthouse 점수만을 위한 구현이 아니라 실제 접근성을 고려한다.

---

# 32. 구현 기술 권장안

현재 권장 Stack:

```text
Next.js
TypeScript
Tailwind CSS
```

프로젝트 Case Study 콘텐츠 분리를 위해 MDX 사용을 고려한다.

예:

```text
content/
├─ syu-likelion.mdx
├─ eodiya.mdx
├─ oshi-calendar.mdx
└─ cctv-scheduler.mdx
```

단, 초기 구현 복잡도가 불필요하게 증가한다면 정적 TypeScript Data Structure로 먼저 구현해도 된다.

기술을 추가하기 전에 다음 질문을 우선한다.

> 이 Library가 실제 문제를 해결하는가?

불필요한 Dependency를 늘리지 않는다.

---

# 33. 예상 Component Architecture

예시:

```text
src/
├─ app/
│  ├─ page.tsx
│  └─ projects/
│     └─ [slug]/
│        └─ page.tsx
│
├─ components/
│  ├─ layout/
│  │  ├─ Header
│  │  ├─ Footer
│  │  └─ Container
│  │
│  ├─ home/
│  │  ├─ Hero
│  │  ├─ About
│  │  ├─ ProjectSection
│  │  ├─ Experience
│  │  ├─ Teaching
│  │  ├─ Awards
│  │  └─ Contact
│  │
│  ├─ project/
│  │  ├─ ProjectHero
│  │  ├─ ProjectMeta
│  │  ├─ Metric
│  │  ├─ CaseStudySection
│  │  ├─ ImageBlock
│  │  └─ ProjectNavigation
│  │
│  └─ ui/
│
├─ data/
│  ├─ projects.ts
│  ├─ experiences.ts
│  └─ skills.ts
│
└─ public/
   └─ projects/
```

프로젝트 구조는 실제 구현 상황에 따라 변경 가능하다.

지나친 Component 분리는 피한다.

---

# 34. Data-first 구조

프로젝트 정보를 JSX에 하드코딩하는 것보다 가능한 경우 Data Layer로 분리한다.

예:

```ts
type Project = {
  slug: string;
  title: string;
  subtitle: string;
  period: string;
  role: string;
  team?: string;
  description: string;
  technologies: string[];
  links?: {
    service?: string;
    github?: string;
    figma?: string;
  };
  metrics?: {
    value: string;
    label: string;
  }[];
};
```

실제 Case Study Content는 별도 데이터나 MDX로 관리 가능하다.

---

# 35. 프로젝트 카드 작성 방식

Project Card에는 너무 많은 정보를 넣지 않는다.

기본 요소:

- Project Name
- 한 줄 Problem/Solution
- Role
- Year
- 핵심 Technology 2~4개
- 대표 Screenshot
- 핵심 Metric 1~2개

예:

```text
syu-likelion

분산된 동아리 운영을
하나의 플랫폼으로

148 users
200 daily views

Next.js · TypeScript

[View Case Study]
```

---

# 36. 프로젝트별 카드 핵심 문구

## syu-likelion

> 분산된 동아리 운영을 하나의 플랫폼으로

## 삼육대 어디야

> "건물은 찾았는데 강의실은 어디지?"에서 시작한 캠퍼스 지도

## Oshi Calendar

> 여러 게임에서 놓칠 일정과 보상을 한눈에

또는

> Calendar를 만들다가 Calendar를 없앴습니다.

후자는 Case Study 내부에서 사용하는 것을 우선한다.

## CCTV Scheduler

> 인터넷도, 라이브러리도, IDE도 없는 환경에서 만든 근무 자동화

---

# 37. Experience UI

Resume 전체를 다시 보여주지 않는다.

Timeline 형태를 우선 고려한다.

예:

```text
2018
선린인터넷고등학교
Multimedia / Web

2021
삼육대학교 컴퓨터공학

2022
멋쟁이사자처럼 10기

2025
멋쟁이사자처럼 13기
WFK Cambodia
SW 프로젝트 경진대회 최우수상

2026
멋쟁이사자처럼 Frontend 운영진
WFK Vietnam
```

---

# 38. Contact

마지막 CTA는 단순한 연락처 목록보다 개발자 정체성을 다시 연결한다.

예:

> 더 나은 사용 경험을 만드는 일을 함께하고 싶습니다.

표시 가능:

- GitHub
- Email
- Resume

Email은 실제 주소가 제공되기 전까지 임의로 생성하지 않는다.

---

# 39. 콘텐츠 사실성 원칙

매우 중요하다.

포트폴리오에 없는 경험을 만들어내지 않는다.

다음은 절대 금지한다.

- 임의의 사용자 수 생성
- 임의의 성능 개선 수치
- 임의의 Lighthouse 점수
- 확인되지 않은 전환율
- 확인되지 않은 이용자 후기
- 확인되지 않은 운영 기간
- 하지 않은 역할 추가
- 실제로 사용하지 않은 기술 추가
- AI가 임의로 프로젝트 문제를 만들어내는 것

정보가 부족한 경우 구현 코드에 TODO를 남기거나 질문이 필요한 항목으로 표시한다.

예:

```text
TODO: 실제 Email 주소 확인 필요
```

---

# 40. 날짜 표현

원본 Resume에 일부 날짜가 다음처럼 작성되어 있을 수 있다.

```text
2026.01?현재
2026.06?현재
```

이 `?`는 날짜 Separator를 입력하는 과정에서 깨진 것으로 이해한다.

실제 표현은:

```text
2026.01 — Present
2026.06 — Present
```

또는 한국어로:

```text
2026.01 — 현재
```

처럼 사용한다.

원본의 `?` 문자를 그대로 UI에 노출하지 않는다.

단, 정확한 월 정보가 불확실하면 임의로 수정하지 않는다.

---

# 41. 언어

기본 콘텐츠는 **한국어 중심**으로 작성한다.

다만 다음과 같은 부분은 영어를 자연스럽게 사용할 수 있다.

- Web / Frontend Developer
- Project
- Case Study
- GitHub
- View Project
- Technical Decision
- Result
- Retrospective

UI 전체를 무리하게 영어로 바꾸지 않는다.

한국 기업 및 국내 채용 담당자가 보는 상황을 우선 고려한다.

---

# 42. 개발 과정 우선순위

기능 구현 순서는 다음을 권장한다.

## Phase 1 — Foundation

1. Next.js 프로젝트 구조
2. Global Style
3. Typography
4. Container
5. Header/Footer

## Phase 2 — Homepage

1. Hero
2. About
3. Featured Projects
4. Experience
5. Teaching
6. Awards
7. Skills
8. Contact

## Phase 3 — Case Study

우선:

1. syu-likelion
2. 삼육대 어디야
3. Oshi Calendar
4. CCTV Scheduler

순서로 구현한다.

## Phase 4 — Responsive

- Tablet
- Mobile

## Phase 5 — Polish

- Animation
- SEO
- OpenGraph
- Accessibility
- Performance

---

# 43. 가장 먼저 구현할 Case Study

`syu-likelion`을 Main Case Study로 먼저 완성한다.

권장 구조:

```text
Hero
↓
Overview
↓
Problem
↓
Existing Workflow
↓
Solution
↓
My Contribution
↓
Recruitment Admin Flow
↓
Frontend / Backend Collaboration
↓
Problems & Improvements
↓
Result
↓
Retrospective
```

이 프로젝트 페이지가 전체 Case Study Design System의 기준이 된다.

---

# 44. Screenshot 활용 원칙

실제 서비스 Screenshot을 적극 사용한다.

단순히 Screenshot Gallery처럼 나열하지 않는다.

항상 Screenshot 앞뒤에 의미가 있어야 한다.

예:

```text
지원자의 정보를 여러 도구에서
대조해야 하는 문제를 줄이기 위해
지원 정보와 평가 기능을 하나의 흐름으로 구성했습니다.

[Admin Screenshot]
```

가능하면 Screenshot 위에 설명 Annotation을 추가하는 것도 고려한다.

---

# 45. Diagram 활용

텍스트보다 Diagram이 효과적인 곳에서는 Diagram을 사용한다.

예:

## Before / After

```text
Before

Google Form
    ↓
Excel
    ↓
Discord
    ↓
Manual Review
```

```text
After

syu-likelion
    ↓
Application
    ↓
Review
    ↓
Interview
    ↓
Final Decision
```

## Oshi Calendar

```text
Calendar

↓

What expires soon?
What reward matters?
What should I do now?

↓

Scheduler Dashboard
```

복잡한 Diagram Library는 반드시 필요하지 않다.

CSS 기반 Diagram으로 충분하면 CSS를 사용한다.

---

# 46. 코드 품질

다음 원칙을 지킨다.

- TypeScript `any` 남발 금지
- 의미 있는 Component 이름
- 의미 있는 변수 이름
- 중복 JSX 최소화
- 지나친 추상화 금지
- Dead Code 제거
- Console Log 제거
- 불필요한 Package 설치 금지
- ESLint 오류 방치 금지
- Build Warning 확인

단, 작은 UI 하나를 위해 지나친 Architecture를 만들지 않는다.

---

# 47. 구현 판단 기준

구현 중 선택지가 생겼을 때 우선순위:

1. 사용자에게 읽기 쉬운가
2. 개발자의 핵심 메시지를 강화하는가
3. 실제 경험을 정확하게 보여주는가
4. 모바일에서 자연스러운가
5. 유지보수가 쉬운가
6. 구현 복잡도가 합리적인가
7. 시각적으로 좋은가

시각적 화려함은 마지막 우선순위다.

---

# 48. AI Design 느낌 줄이기

AI가 자동 생성한 포트폴리오처럼 보이지 않도록 다음 패턴을 피한다.

- 모든 Section에 동일한 둥근 Card
- 모든 Card에 Icon
- 모든 Section에 Gradient
- 보라색/파란색 Gradient 남발
- 수십 개의 Pill Badge
- Glassmorphism 남발
- 모든 요소에 `rounded-2xl`
- 모든 Section이 같은 Layout
- 의미 없는 "Innovative / Passionate / Creative" Copy
- Emoji 남발

대신:

- 프로젝트 실제 Screenshot
- 사용자 맥락
- 실제 숫자
- 실제 문제
- 다양한 Editorial Layout
- Typography hierarchy
- Diagram
- Whitespace

를 활용한다.

---

# 49. UI Component 재사용과 다양성

Component는 재사용하되 모든 Section이 시각적으로 똑같아지지 않도록 한다.

예:

- Project Card → Image 중심
- Metrics → Typography 중심
- Experience → Timeline
- Skills → Compact Text
- Case Study → Editorial Layout
- Awards → Minimal List

"재사용 가능한 컴포넌트"와 "모든 화면을 같은 카드로 만드는 것"은 다르다.

---

# 50. Resume와 Portfolio의 차이

Resume:

> 무엇을 했는가

Portfolio:

> 왜 했는가  
> 어떻게 판단했는가  
> 어떻게 해결했는가  
> 결과는 어땠는가

따라서 Resume 문장을 그대로 복사해 UI에 붙이지 않는다.

Resume의 내용을 근거 데이터로 사용하고, Portfolio에서는 Story 형태로 재구성한다.

---

# 51. 사용자를 보여주는 방식

포트폴리오 콘텐츠의 주인공은 기술이 아니라 사용자 문제다.

예:

나쁜 방식:

```text
Kakao Maps API를 사용해 Marker를 구현했습니다.
```

좋은 방식:

```text
학생이 검색한 장소를 지도에서 다시 찾아야 하는 불편을 줄이기 위해,
검색 결과 선택 시 해당 위치로 지도를 이동하고
Marker와 상세 정보를 함께 보여주도록 구성했습니다.
```

기술은 Solution을 설명하기 위한 수단으로 사용한다.

---

# 52. 최종적으로 포트폴리오가 전달해야 하는 이야기

사용자가 사이트를 다 보고 나면 다음 이야기가 기억되어야 한다.

```text
불편을 발견한다.

↓

문제를 정의한다.

↓

제품 방향을 고민한다.

↓

실제로 구현한다.

↓

사람들이 사용한다.

↓

문제를 다시 발견하고 개선한다.

↓

그 과정과 지식을
다른 사람에게 설명할 수도 있다.
```

이 흐름이 사이트 전체의 핵심 Narrative다.

---

# 53. Codex 작업 지침

Codex가 새로운 세션에서 이 Repository를 열었을 경우 가장 먼저 이 `AGENTS.md`를 읽고 프로젝트 목적과 콘텐츠 맥락을 파악한다.

작업 요청이 모호한 경우에도 단순히 임의의 포트폴리오 디자인을 만드는 것이 아니라 이 문서의 방향을 기준으로 판단한다.

특히 기억할 것:

- 이 프로젝트는 개인 개발자 포트폴리오다.
- 핵심 키워드는 `불편 발견 → 문제 정의 → 구현 → 실제 사용 → 개선`이다.
- Product Case Study 중심이다.
- `syu-likelion`이 대표 프로젝트다.
- 실제 Screenshot과 실제 경험을 중심으로 한다.
- 존재하지 않는 성과나 경험을 만들지 않는다.
- 디자인보다 콘텐츠와 Story가 우선이다.
- 지나치게 AI가 만든 것 같은 UI를 피한다.
- 코드 작성 전에 기존 구조를 확인한다.
- 기존 디자인 규칙이 있으면 최대한 유지한다.
- 수정 범위와 무관한 코드는 함부로 변경하지 않는다.

---

# 54. 작업 시 확인해야 할 질문

새로운 기능 또는 Section을 추가하려 할 때 다음을 내부적으로 확인한다.

```text
이 요소가 박정우라는 개발자를 더 잘 설명하는가?

이 요소가 "불편을 발견하고 개선한다"는 메시지를 강화하는가?

실제 경험에 근거하고 있는가?

Portfolio가 아니라 Resume를 반복하고 있지는 않은가?

기술을 보여주기 위한 기술이 되고 있지는 않은가?

사용자와 문제보다 Framework가 더 앞에 나오고 있지는 않은가?
```

하나라도 문제가 있다면 구현 방향을 다시 검토한다.

---

# 55. 현재 가장 중요한 다음 작업

현재 프로젝트를 처음 시작하는 상황이라면 다음 순서로 진행한다.

1. 기존 Repository 및 파일 구조 확인
2. 현재 Next.js / React 환경 확인
3. Homepage Wireframe 구현
4. Hero 및 Featured Project Section 완성
5. Project Data 구조 분리
6. `syu-likelion` Case Study 상세 페이지 구현
7. 전체 Visual Language 검토
8. 다른 프로젝트 Case Study 확장

처음부터 모든 페이지를 동시에 만들지 않는다.

먼저 **Homepage + syu-likelion Case Study**의 완성도를 충분히 높인 다음 디자인 시스템을 다른 프로젝트에 확장한다.

---

# 56. 최종 원칙

이 Portfolio의 목표는 방문자에게

> "React를 사용할 줄 아는 사람"

이라고 기억되는 것이 아니다.

최종적으로는

> **"실제 불편을 발견해서 제품으로 만들고, 사람들이 사용하게 만들며, 운영 과정에서 다시 개선할 줄 아는 프론트엔드 개발자"**

라는 인상을 남겨야 한다.

모든 개발·디자인·콘텐츠 결정은 이 목표를 기준으로 한다.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
