import { Switcher } from "@/components/ui/Switcher";

/**
 * 평가 단계 비교 — syu-likelion 상세의 설명용 데모 (docs/design.md#option-3-demos).
 *
 * 근거는 "블라인드 서류 평가와 신원을 확인하는 면접 평가에 필요한 정보가 달라,
 * 면접 단계에서는 후보 이름을 보여주고 목록을 모집 단계별로 나눴다"는 기록이다.
 * 바뀌는 곳은 그 두 가지(지원자 이름 · 고르는 목록)만 표시한다.
 *
 * 가상 지원자로 만든 재구성이다. 실제 지원자 정보 · 평가 저장 · 권한 판별 ·
 * 서버 보안을 보여주지 않는다. 조작하지 않아도 아래 설명만으로 차이가 읽힌다.
 */

const LISTS = ["서류 지원자 목록", "서류 합격자 목록", "최종 합격자 목록"] as const;

const STAGES = [
  {
    label: "서류 평가",
    list: "서류 지원자 목록",
    name: null,
    notes: [
      "서류 단계에서는 서류 지원자 목록에서 지원자를 고릅니다.",
      "블라인드로 평가하므로 지원자 이름을 보여주지 않습니다.",
    ],
  },
  {
    label: "면접 평가",
    list: "서류 합격자 목록",
    name: "지원자 A (가상)",
    notes: [
      "면접 단계에서는 서류 합격자 목록에서 고릅니다.",
      "신원을 확인하며 진행하는 단계라 후보 이름을 보여줍니다.",
    ],
  },
] as const;

export function EvaluationStageDemo() {
  return (
    <div className="hue-mocha flex flex-col gap-5 rounded-xs border border-rule bg-paper-raised p-4 md:p-6">
      <Switcher
        name="evaluation-stage"
        legend="평가 단계"
        aside={<span className="text-xs text-ink-2">설명용 재구성 · 가상 지원자</span>}
        options={STAGES.map((stage) => ({ label: stage.label, panel: <StagePanel stage={stage} /> }))}
      />
      <p className="max-w-measure border-t border-rule pt-4 text-sm text-ink-2">
        두 단계에서 바뀌는 것은 지원자 이름 표시와 지원자를 고르는 목록입니다. 이 예시는 화면 판단만
        설명하며, 실제 평가 저장이나 권한 판별, 서버 보안과는 관계가 없습니다.
      </p>
    </div>
  );
}

function StagePanel({ stage }: { stage: (typeof STAGES)[number] }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-3 md:grid-cols-[13rem_minmax(0,1fr)]">
        <div className="relative flex flex-col gap-1 rounded-xs border border-rule bg-paper p-2">
          <Pin n={1} />
          <p className="px-2 pt-1 text-xs text-ink-2">목록</p>
          <ul className="flex flex-col gap-0.5">
            {LISTS.map((list) => {
              const active = list === stage.list;
              return (
                <li
                  key={list}
                  className={`rounded-xs px-2 py-1.5 text-sm ${active ? "bg-hue-tint font-semibold text-ink" : "text-ink-2"}`}
                >
                  {list}
                  {active ? <span className="sr-only"> (지금 보는 목록)</span> : null}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col gap-3 rounded-xs border border-rule bg-paper p-4">
          <p className="text-xs text-ink-2">지원서 상세</p>
          <dl className="grid grid-cols-[4.5rem_minmax(0,1fr)] gap-x-3 gap-y-2 text-sm">
            <dt className="text-ink-2">지원자</dt>
            <dd className="relative -mx-2 rounded-xs bg-hue-tint px-2 py-0.5">
              <Pin n={2} />
              {stage.name ? (
                <span className="font-semibold text-ink">{stage.name}</span>
              ) : (
                <span className="flex items-center gap-2 text-ink-2">
                  <span aria-hidden="true" className="h-3 w-16 rounded-xs bg-ink-2/40" />
                  이름 비공개 · 블라인드
                </span>
              )}
            </dd>
            <dt className="text-ink-2">파트</dt>
            <dd className="font-mono text-xs leading-6">FRONTEND</dd>
            <dt className="text-ink-2">평가</dt>
            <dd>서류 보기 · 점수 매기기 · 점수 현황</dd>
          </dl>
        </div>
      </div>

      <ol aria-label={`${stage.label}에서 달라지는 곳`} className="grid gap-x-8 gap-y-2 md:grid-cols-2">
        {stage.notes.map((note, i) => (
          <li key={note} className="flex gap-2.5 text-sm text-ink-2">
            <span
              aria-hidden="true"
              className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-hue-deep font-mono text-[0.6875rem] font-semibold text-hue-deep"
            >
              {i + 1}
            </span>
            <span>
              <span className="sr-only">{i + 1}. </span>
              {note}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** 바뀌는 곳 표시. 화면 주석(Shot)의 점과 같은 모양이다. */
function Pin({ n }: { n: number }) {
  return (
    <span
      aria-hidden="true"
      className="absolute -top-2.5 -right-2.5 flex size-[1.375rem] items-center justify-center rounded-full bg-hue-deep font-mono text-xs font-semibold text-paper ring-2 ring-paper-raised"
    >
      {n}
    </span>
  );
}
