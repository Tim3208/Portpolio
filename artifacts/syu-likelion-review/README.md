# syu-likelion 콘텐츠 리뷰 기록

- 점검일: 2026-08-16
- 반영일: 2026-08-16
- 대상: [운영 사이트](https://syu-likelion.org/) · [공통 공간](https://syu-likelion.org/14/commonSpace) · [공개 GitHub 저장소](https://github.com/No4hh4oN/Likelion14th-FE) · 현재 포트폴리오 Case Study
- 관련 문서: [프로젝트 README](../../README.md) · [콘텐츠 원칙](../../docs/content.md#syu-likelion) · [스크린샷 원칙](../../docs/design.md#screenshots)

이 문서는 2026-08-16에 syu-likelion Case Study를 점검하고 반영한 기록이다. 이후 운영 사이트를 다시 확인한 문서가 아니므로, 아래의 “확인”은 모두 점검일 기준이다.

## 현재 반영 요약

[src/data/caseStudies/syu-likelion.ts](../../src/data/caseStudies/syu-likelion.ts)에 아래 상태로 반영했다.

- Case Study는 12개 섹션으로 구성했다: Overview, Problem, Existing Workflow, Solution, My Contribution, Applicant Flow, Recruitment Admin Flow, After Recruitment, Frontend / Backend Collaboration, Problems & Improvements, Result, Retrospective.
- 이미지는 6장을 사용했다: `syu-likelion.png`, `application-submitted.png`, `first-result-interview.png`, `syu-likelion-admin.png`, `syu-likelion-mypage.png`, `syu-likelion-admin2.png`.
- `first-result-interview.png`는 16:10 크롭에서 합격 안내와 면접 예약 UI가 같이 보이도록 `center 40%`를 적용했다.
- `syu-likelion-mypage.png`는 캘린더와 일정·과제 패널이 보이도록 `center 88%`를 적용했다.
- 상세 Result는 `148 / 64 / 200` 세 수치를 metrics로 쓰고, `30건`은 모집 이후 운영 문장에 연결했다.
- Work 카드와 상세 Hero metrics는 공유 `project.metrics`의 카드 최대 2개 규칙에 맞춰 `148 / 200`만 유지했다.

상위 문서 기준은 다음 분리 문서로 옮긴다: [대표 Case Study](../../docs/content.md#main-case-study), [판단 서술](../../docs/content.md#decisions), [카드 문구](../../docs/content.md#cards), [성과 수치](../../docs/content.md#results), [사실성](../../docs/content.md#accuracy), [스크린샷](../../docs/design.md#screenshots).

## 채택한 결정

### 모집에서 운영까지 이어지는 수명주기

기존 권고의 핵심은 채택했다. syu-likelion은 단순 모집 랜딩 페이지나 관리자 CRUD가 아니라, 지원자가 동아리원이 되고 운영진이 그 과정을 계속 관리하는 운영 플랫폼으로 설명한다.

추천 확장 메시지:

> 모집 공고와 지원서 제출부터 서류·면접 평가, 합격 후 공지·세션 자료·과제·일정 운영까지 하나의 서비스로 연결했습니다.

현재 Case Study는 아래 흐름을 기준으로 서술한다.

```text
모집 안내
→ 지원서 임시 저장·제출
→ 서류 평가
→ 결과 확인·면접 시간 예약
→ 면접 평가·최종 합격
→ 동아리원 역할 전환
→ 공지·자료·과제·질의응답·일정 이용
```

### 하나의 서비스, 세 사용자

2분법 대신 세 Journey를 사용한다. 같은 계정과 역할이 시간에 따라 이동한다는 점을 보여주기 위해 `Solution`과 `After Recruitment`에 반영했다.

```text
Applicant
모집 정보 → 지원서 → 1차 결과 → 면접 예약 → 최종 결과

Member
공통 공간 → 공지·자료 → 과제 제출·평가 확인 → 마이페이지 일정

Staff
지원자 평가 → 합격 관리 → 과제 평가 → 콘텐츠·일정 관리
```

### 지원 과정의 상태 설계

지원자 Flow는 개인 기여로 확정했다.

- 지원서 최초 생성과 임시 저장
- 임시 저장 지원서 수정
- 제출 완료 지원서 수정
- 파일 업로드
- 최종 제출과 지원 취소
- 서류 합격자용 면접 시간 선택·예약
- 결과 상태별 안내 화면

반영 방향:

> 지원서는 한 번에 작성되는 문서가 아니기 때문에 임시 저장과 제출 상태를 분리했습니다. 제출 이후에도 발표 전까지 수정할 수 있도록 하되, 1차 결과 발표 이후에는 수정할 수 없다는 상태 경계를 화면에서 명확히 안내했습니다.

> 결과 화면은 단순히 합격 여부만 보여주지 않습니다. 서류 합격자는 날짜와 시간을 선택해 면접을 예약하고, 최종 합격자는 OT 일정과 다음 커뮤니티 채널까지 확인할 수 있도록 다음 행동을 연결했습니다.

### 모집 이후 실제 사용

공통 공간의 실제 경로는 `/14/commonSpace`다. 점검일에 확인한 구조는 다음과 같다.

- 트랙 필터: ALL, FRONT-END, BACK-END, AI / ML, PM / DESIGN
- 콘텐츠 구분: 전체 공지, 세션 자료 공유, 과제 안내 & 제출, 질의응답
- 홈에서 주요 공지와 최신 세션 자료 요약
- 과제 마감일과 제출 상태 표시
- 제출 파일 확인
- 평가 대기 및 평가 결과 확인
- 제출 취소

반영 방향:

> 합격 이후 필요한 공지, 세션 자료, 과제, 질의응답을 하나의 공통 공간에 모았습니다. 사용자는 전체 콘텐츠와 자신의 트랙 콘텐츠를 구분해 보고, 과제 카드 안에서 마감일·제출 파일·평가 상태를 이어서 확인할 수 있습니다.

### 운영자 UX와 역할 기반 접근 제어

운영자 화면에서 점검일에 확인한 기능은 다음이다.

- 공지·세션 자료 생성, 수정, 삭제, 복원
- 트랙·콘텐츠 유형·고정 여부·첨부파일 관리
- 운영 일정 생성과 마이페이지 캘린더 반영
- 과제 생성·수정·제출 현황·평가
- 날짜·트랙별 출결 상태 관리
- 사용자 목록·상세 조회

개인 기여는 공지·세션 자료·일정 관리와 과제 제출 현황·평가다. 출결 관리는 다른 팀원이 구현했으므로 개인 기여로 쓰지 않는다.

권한 서술은 프론트엔드 Guard 범위로 한정한다.

> 같은 계정을 사용하더라도 활성 역할에 따라 접근 가능한 화면과 수행할 수 있는 업무를 구분했습니다. 프론트엔드에서는 활성 역할의 `STAFF` 여부를 확인해 운영진 화면 접근을 제어하고, 인증 정보가 없거나 권한이 부족하면 각 상태에 맞는 화면으로 이동시켰습니다.

서버 권한 검증까지 프론트엔드가 완성했다고 표현하지 않는다.

## 채택하지 않은 결정

| 권고 | 처리 | 이유 |
| --- | --- | --- |
| 10개 섹션 재배치 | 미채택 | 기존 대표 Case Study 구조를 유지하면서 `Applicant Flow`, `After Recruitment`만 추가했다. `Problems & Improvements`를 없애면 판단 서술 축이 약해진다. |
| Hero headline 확장 | 미채택 | 확장 문구는 현재 Hero 너비 제약과 카드 문구 기준에 맞지 않는다. headline은 유지하고 summary에서 수명주기를 확장했다. |
| `final-result-pass.png` 사용 | 보류 | 최종 합격 메시지를 살리는 16:10 크롭에 `위치 : 위치 나오면 수정` placeholder가 반드시 같이 노출된다. |
| `artifacts/` 7장 직접 참조 | 미채택 | Case Study 렌더링은 `public/` 이미지를 사용한다. `artifacts/` 이미지는 점검 근거와 후속 캡처 후보로 남긴다. |

## 보류와 후속 캡처

`final-result-pass.png`는 최종 합격 이후 OT와 커뮤니티 진입을 보여주는 좋은 화면이지만 현재 대표 컷으로 쓰지 않는다.

보류 사유:

- 화면 안에 `위치 : 위치 나오면 수정` placeholder가 남아 있다.
- 최종 합격 메시지를 살리는 16:10 크롭에서 이 문구를 피할 수 없다.
- QR 코드가 실제 초대 링크라면 공개 전에 블러하거나 만료된 샘플 QR로 교체해야 한다.

후속 처리:

- OT 위치가 확정된 샘플 계정 화면을 다시 촬영한다.
- QR 코드는 공개 가능한 샘플 또는 블러 처리한 버전으로 교체한다.
- 재촬영 전까지 최종 합격 흐름은 문장으로만 설명한다.

마이페이지와 결과 화면은 같은 샘플 계정으로 판단했다. 실사용자 개인정보 위험은 낮지만, 마이페이지의 “내가 쓴 글” 제목이 농담성 샘플 문구라 채용 담당자 화면에는 어울리지 않는다. 현재는 `center 88%` 크롭으로 노출을 줄였고, 중립적인 제목으로 다시 촬영하는 편이 낫다.

`07-common-space.png`는 공통 공간의 제품 범위를 잘 보여주지만 브라우저 크롬, 개인 프로필 아이콘, 실제 제출 파일명과 상태가 함께 들어 있다. 포트폴리오에 쓰려면 샘플 계정으로 다시 촬영한다.

## 스크린샷 매트릭스

### 이미지 비율과 크롭 근거

[CaseSection.tsx](../../src/components/project/CaseSection.tsx)의 `image` 블록은 `aspect-16/10`과 `object-cover`로 렌더링한다. 긴 캡처는 원본의 일부만 보이므로 이미지별 `position`으로 핵심 UI를 살린다. 아래는 당시 크롭 검토 기록이다.

| 이미지 | 원본 비율 | 16:10에서 보이는 세로 |
| --- | --- | --- |
| `application-submitted.png` | 1.54 | 96% |
| `first-result-interview.png` | 0.72 | 45% |
| `final-result-pass.png` | 0.83 | 52% |
| `syu-likelion-mypage.png` | 0.91 | 57% |
| `application-form.png` | 0.46 | 29% |

### 현재 Case Study 사용 이미지

| 이미지 | 상태 | 위치 | 증명하는 것 | 후보 캡션 |
| --- | --- | --- | --- | --- |
| [syu-likelion.png](../../public/images/projects/syu-likelion.png) | 사용 | Solution | 공개 랜딩과 지원 전환 | 안내를 읽던 흐름이 지원으로 이어진다. |
| [application-submitted.png](../../public/images/projects/apply/application-submitted.png) | 사용 | Applicant Flow | 제출 완료, 발표 일정, 수정 가능 상태, 지원 취소 | “제출 완료 여부와 이후 일정을 안내하고, 결과 발표 전까지 수정할 수 있는 상태 경계를 명확히 했습니다.” |
| [first-result-interview.png](../../public/images/projects/apply/first-result-interview.png) | 핵심 사용 | Applicant Flow | 1차 합격과 면접 날짜·시간 선택 | “서류 합격자가 별도의 연락 없이 가능한 날짜와 시간을 확인하고 면접 일정을 확정하도록 구현했습니다.” |
| [syu-likelion-admin.png](../../public/images/projects/syu-likelion-admin.png) | 사용 | Recruitment Admin Flow | 64명의 지원자와 단계별 목록·필터 | 운영진이 모집 단계와 남은 평가 업무를 한 화면에서 본다. |
| [syu-likelion-mypage.png](../../public/images/projects/syu-likelion-mypage.png) | 사용 | After Recruitment | 활동, 일정, 세션, 과제 마감 | “동아리원은 자신의 활동과 세션 일정, 과제 마감일을 마이페이지에서 한 번에 확인합니다.” |
| [syu-likelion-admin2.png](../../public/images/projects/syu-likelion-admin2.png) | 사용 | Problems & Improvements | 지원서 상세, 점수, 코멘트 대조 | 같은 지원자 안에서 서류 보기·점수 매기기·점수 현황을 전환한다. |

### 검토했지만 대표 컷에서 제외한 공개 이미지

| 이미지 | 상태 | 이유 | 후속 |
| --- | --- | --- | --- |
| [application-form.png](../../public/images/projects/apply/application-form.png) | 보조 또는 재촬영 | 임시 저장·파일 업로드 증명에는 좋지만 세로가 길고 선택 트랙과 예시 질문이 어긋나 보인다. | 필요한 경우 샘플 데이터를 정리해 재촬영한다. |
| [first-result-cta.png](../../public/images/projects/apply/first-result-cta.png) | 제외 | 결과 확인 전 CTA 화면이라 정보량이 적고 `first-result-interview.png`와 메시지가 겹친다. | 별도 사용하지 않는다. |
| [final-result-pass.png](../../public/images/projects/apply/final-result-pass.png) | 보류 | placeholder와 QR 코드 이슈가 있다. 후보 캡션은 “최종 합격자가 OT 일정과 다음 커뮤니티 채널을 바로 확인할 수 있도록 후속 행동을 연결했습니다.” | OT 위치 확정 후 샘플 화면으로 재촬영한다. |

### `artifacts/syu-likelion-review` 점검 캡처 7장

| 파일 | 역할 | 후보 캡션과 판단 |
| --- | --- | --- |
| [01-recruitment-schedule.png](./01-recruitment-schedule.png) | 서류 모집·서류 발표·면접·최종 발표로 이어지는 단계형 과정 | 후보 캡션: “지원자에게도 운영진과 동일한 모집 단계를 날짜 중심으로 안내했습니다.” 현재는 Flow 다이어그램으로 대체 가능하다. |
| [02-admin-product-domains.png](./02-admin-product-domains.png) | 지원자 관리, 아기사자 관리, 운영진 주요 업무의 세 영역 | 후보 캡션: “운영 업무를 지원자 관리, 아기사자 관리, 운영진 주요 업무의 세 영역으로 나눴습니다.” 현재 12섹션 구조에서는 문장과 Journey로 처리했다. |
| [03-staff-operations-overview.png](./03-staff-operations-overview.png) | 공지·일정·사용자 관리 범위 | `02-admin-product-domains.png`와 메시지가 겹쳐 보조 후보로 둔다. |
| [04-notice-session-operations.png](./04-notice-session-operations.png) | 공지·세션 자료 운영과 30건 콘텐츠 근거 | 30건 수치와 운영 콘텐츠 근거로 보관한다. 대형 이미지는 마이페이지와 메시지가 겹치면 생략한다. |
| [05-calendar-management.png](./05-calendar-management.png) | 운영진 일정 입력과 마이페이지 캘린더 연결 | 빈 상태라 단독 사용은 약하다. 일정이 있는 마이페이지와 함께 설명할 때만 쓴다. |
| [06-frontend-team.png](./06-frontend-team.png) | 프론트엔드 운영진 구성 | 제품 판단 화면이 아니므로 우선순위가 낮다. 팀원 사진 사용 전 공개 범위와 동의를 확인한다. |
| [07-common-space.png](./07-common-space.png) | 공지·세션 자료·과제·질의응답과 트랙 필터 | 후보 캡션: “전체 콘텐츠와 트랙별 콘텐츠를 구분하고, 과제 제출 파일과 평가 상태까지 공통 공간에서 이어서 확인합니다.” 공개용 샘플 계정 화면으로 재촬영해야 한다. |

## 파일명 정리

`public/images/`의 다른 파일과 맞춰 ASCII kebab-case로 정리했다.

| 이전 | 이후 |
| --- | --- |
| `마이페이지 -_ 내활동.png` | `syu-likelion-mypage.png` |
| `apply/지원서 작성.png` | `apply/application-form.png` |
| `apply/지원서 작성완료.png` | `apply/application-submitted.png` |
| `apply/1차 결과발표.png` | `apply/first-result-cta.png` |
| `apply/지원서 1차 결과발표.png` | `apply/first-result-interview.png` |
| `apply/최종결과발표 - 합격.png` | `apply/final-result-pass.png` |

## 확정된 개인 기여

개인 기여로 명시할 수 있는 항목:

- Main, FAQ, 운영진 소개
- 지원서 작성·임시 저장·제출 후 수정·파일 업로드
- 결과 상태별 화면과 서류 합격자 면접 시간 선택·예약
- 마이페이지
- 운영진용 지원자 관리
- 서류 평가, 면접 평가, 최종 합격 관리
- 활성 역할의 `STAFF` 여부를 확인하는 Admin Guard
- 동아리원 전용 커뮤니티
- 공지, 세션 자료
- 과제 제출 현황·평가
- 운영 일정 관리와 마이페이지 캘린더 연동
- 자유게시판

개인 기여가 아닌 항목:

- 출결 관리

추천 표기:

> 서비스에는 지원자 관리, 과제, 출결, 공지, 세션 자료, 일정 기능이 포함됩니다. 이 중 지원서 작성·결과 확인·면접 예약, 운영진 권한 처리, 공지·자료·일정 관리, 과제 제출 현황·평가를 담당했습니다.

## 확정 성과와 출처

| 수치 | 의미 | 출처와 사용 방식 |
| --- | --- | --- |
| 148명 | 가입 사용자 | 운영 서비스 가입 사용자. 상세 Result, Work 카드, 상세 Hero에 사용한다. |
| 64명 | 14기 공식 지원자 | 운영자 서류 지원자 목록의 `총 64명` 표시로 확인. 상세 Result에 사용한다. |
| 200 | 모집 기간 당일 최대 조회 수 | Work 카드, 상세 Hero, 상세 Result에 사용한다. |
| 30건 | 공지·세션 자료 | 2026-08-16 운영 사이트 기준. 상세 Result 문장과 운영 콘텐츠 설명에 사용한다. |

권장 Metric 구성:

```text
148
가입 사용자

64
공식 지원자

200
모집 당일 최대 조회
```

`30건`은 숫자 카드보다 “모집 이후에도 운영 콘텐츠가 쌓였다”는 설명에 연결한다.

## 운영 사이트에서 확인한 주의점

- 올바른 공통 공간 경로는 `/14/commonSpace`다. `/14/common-space`의 404는 잘못된 경로를 사용해 발생한 것이므로 리스크로 쓰지 않는다.
- 지원서 작성 이미지는 세로가 길고 선택 트랙과 예시 질문이 어긋나 보이므로 대표 이미지로 쓰지 않는다.
- 최종 합격 이미지는 placeholder와 QR 코드 문제 때문에 보류한다.
- 실사용 마이페이지 대신 샘플 데이터 이미지를 사용한다. 1차·최종 결과 화면의 이름도 같은 샘플 계정으로 판단했다.
- 마이페이지 샘플의 “내가 쓴 글” 제목은 중립적인 제목으로 재촬영하는 편이 낫다.
- 출결 관리는 서비스 기능으로만 소개하고 박정우 개인 기여 목록에는 넣지 않는다.
- 공개 홈의 일부 후기 이미지는 접근성 트리에서 명확한 대체 이름이 확인되지 않았다. 접근성을 강점으로 강조하려면 실제 alt 상태를 다시 점검한다.

## 당시 문구 초안

아래는 점검 당시 제안한 문구다. 채택 여부는 위 반영 요약과 실제 상세 데이터를 기준으로 읽는다. 카드 확장 문구는 채택하지 않았으며, 현재 카드 문구 기준은 [콘텐츠 문서](../../docs/content.md#cards)에 있다.

카드 한 줄 후보 — 미채택:

> 모집부터 교육 운영까지, 동아리의 한 학기를 하나의 플랫폼으로

Overview:

> Discord, KakaoTalk, Google Forms, Excel에 흩어져 있던 모집과 운영을 하나의 웹 서비스로 연결했습니다. 지원자는 지원서를 임시 저장하고 제출한 뒤 결과 확인과 면접 시간 선택까지 이어서 처리합니다. 합격 이후에는 공통 공간에서 공지, 세션 자료, 과제와 질의응답을 확인하고 마이페이지에서 자신의 활동과 일정을 관리합니다.

My Contribution:

> 지원서 임시 저장·제출 후 수정·파일 업로드, 결과 상태별 화면과 면접 시간 예약을 구현했습니다. 운영진 영역에서는 `STAFF` 역할 기반 접근 제어, 공지·세션 자료·일정 관리, 과제 제출 현황·평가를 담당했습니다. 출결 관리는 서비스 범위에는 포함되지만 제 담당 기능은 아닙니다.

핵심 Product Decision:

> 결과 화면의 목적을 합격 여부 전달에만 두지 않았습니다. 서류 합격자는 가능한 면접 시간을 직접 선택하고, 최종 합격자는 OT와 커뮤니티로 이동하도록 각 상태에서 필요한 다음 행동을 연결했습니다.

모집 이후 운영:

> 합격 이후 필요한 공지, 세션 자료, 과제와 질의응답을 트랙별로 구분해 제공했습니다. 사용자는 과제 마감일, 제출 파일, 평가 상태를 공통 공간에서 확인하고, 자신의 활동과 일정은 마이페이지에서 다시 모아볼 수 있습니다.

Result:

> 148명의 사용자가 가입했고 64명이 14기 모집에 지원했습니다. 모집 기간 당일 최대 조회 수 200을 기록했으며, 2026년 8월 기준 30건의 공지와 세션 자료가 등록된 실제 운영 서비스로 유지보수하고 있습니다.
