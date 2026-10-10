/**
 * Case Study 콘텐츠 모델 (AGENTS.md §19 ~ §24)
 *
 * 서술 블록 7종 + 설명용 데모 1종만 둔다. 이보다 늘리면 콘텐츠가 아니라
 * 레이아웃을 편집하게 된다. 각 블록이 읽기 폭(672)에 들어갈지 섹션 폭을 다
 * 쓸지는 렌더러가 정한다 — 콘텐츠 작성자가 폭을 신경 쓰지 않게 한다.
 *
 * demo 는 디자인 3안에서 추가했다(docs/design.md#option-3). 한 가지 판단을
 * 조작으로 보여주는 정해진 위젯만 이름으로 고르고, 데모가 없어도 앞뒤 서술만으로
 * 내용이 성립해야 한다.
 */

/** 등록된 설명용 데모. 구현은 src/components/project/demos 에 있다. */
export type DemoName = "evaluation-stage" | "approval-reset";

export type Block =
  /** 서술. 대부분의 문장이 여기 들어간다. */
  | { type: "prose"; text: string }
  /** 담당 기능·주요 기능 같은 나열. 2열로 접을 수 있다. */
  | { type: "list"; items: readonly string[]; columns?: 1 | 2 }
  /** 단계가 있는 흐름. 세로 다이어그램으로 렌더된다 (§45). */
  | { type: "flow"; label?: string; steps: readonly string[] }
  /** Before / After 대조. 왼쪽은 무채색, 오른쪽은 프로젝트 색이 붙는다. */
  | {
      type: "compare";
      before: { label: string; steps: readonly string[] };
      after: { label: string; steps: readonly string[] };
    }
  /** 스크린샷. caption 은 "무엇이 보이는지"가 아니라 "왜 이렇게 했는지" (§44). */
  | {
      type: "image";
      /** 없으면 아직 확보하지 않은 화면이다. alt 에 필요한 화면을 적어 둔다. */
      src?: string;
      alt: string;
      caption: string;
      position?: string;
      /** 미지정 시 기존 16:10 크롭을 유지한다. */
      aspectRatio?: string;
    }
  /** 확인된 수치만 (§23). */
  | { type: "metrics"; items: readonly { value: string; label: string }[] }
  /** 문제 → 선택지 → 결정 → 이유 (§21, §22). Case Study 의 핵심 블록. */
  | {
      type: "decision";
      problem: string;
      options: readonly string[];
      choice: string;
      reason: string;
    }
  /** 합성 데이터로 판단 하나를 보여주는 설명용 데모. 실제 기능을 재현하지 않는다. */
  | { type: "demo"; name: DemoName };

export type CaseSection = {
  /** 기존 section-01 형태의 링크에 쓰는 식별자. 화면 순서와 독립적으로 유지한다. */
  num: string;
  /** 통합 전 링크를 보존하는 완성된 ID. 예: section-05 */
  anchorAliases?: readonly string[];
  title: string;
  blocks: readonly Block[];
};

export type CaseStudy = {
  slug: string;
  /** 상세 페이지 Hero 에 크게 들어가는 한 줄 */
  headline: string;
  /** Hero 아래 한 문단. 이 프로젝트가 무엇인지 */
  summary: string;
  sections: readonly CaseSection[];
};
