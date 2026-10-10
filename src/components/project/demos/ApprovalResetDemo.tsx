import { Switcher } from "@/components/ui/Switcher";

/**
 * 승인 무효화 — AgentFlow 의 설명용 데모 (docs/design.md#option-3-demos).
 *
 * 근거는 "코드 · 파일이 바뀌면 이전 승인을 무효로 보고, 다시 검수를 통과해야
 * 완료한다", "현재 후보가 승인 당시와 같을 때만 완료"라는 원칙이다.
 * 실제 검수를 실행하지 않는다. 로그나 성공 결과를 꾸미지 않고 규칙만 보여준다.
 */

const STAGES = ["기획 검토", "개발 검토", "독립 QA", "Wiki 검토"] as const;

const STATES = [
  { label: "승인 직후", changed: false },
  { label: "승인 뒤 파일 변경", changed: true },
] as const;

export function ApprovalResetDemo({ name = "approval-reset" }: { name?: string }) {
  return (
    <div className="hue-wheat flex flex-col gap-5 rounded-xs border border-rule bg-paper-raised p-4 md:p-6">
      <Switcher
        name={name}
        legend="예시 상태"
        aside={<span className="text-xs text-ink-2">규칙 설명용 예시</span>}
        options={STATES.map((state) => ({ label: state.label, panel: <StatePanel changed={state.changed} /> }))}
      />
      <p className="max-w-measure border-t border-rule pt-4 text-sm text-ink-2">
        승인은 특정 내용에 대한 판단입니다. 이 예시는 규칙을 설명할 뿐 실제 검수를 실행하지 않습니다.
      </p>
    </div>
  );
}

function StatePanel({ changed }: { changed: boolean }) {
  const candidate = changed ? "후보 B" : "후보 A";

  return (
    <div className="flex flex-col gap-4">
      <p className="flex flex-wrap items-center gap-2 text-sm">
        <span className="text-ink-2">현재 후보</span>
        <span
          className={`rounded-chip px-2 py-0.5 text-xs font-semibold ${changed ? "bg-hue-deep text-paper" : "bg-hue-tint text-ink"}`}
        >
          {candidate}
        </span>
        {changed ? <span className="text-ink-2">승인 뒤 파일이 바뀌어 새 후보가 되었습니다.</span> : null}
      </p>

      <ol className="grid grid-cols-2 gap-2 md:grid-cols-5">
        {STAGES.map((stage) => (
          <li
            key={stage}
            className={`flex flex-col gap-1.5 rounded-xs border p-3 ${changed ? "border-dashed border-rule-strong bg-paper" : "border-rule bg-paper"}`}
          >
            <span className="text-sm font-semibold">{stage}</span>
            <span className={`text-xs ${changed ? "text-ink-2 line-through decoration-ink-2" : "text-hue-deep"}`}>
              후보 A 승인
            </span>
            {changed ? <span className="text-xs text-ink-2">현재 후보와 달라 무효</span> : null}
          </li>
        ))}
        <li
          className={`col-span-2 flex flex-col gap-1.5 rounded-xs border-2 p-3 md:col-span-1 ${changed ? "border-hue-deep bg-hue-wash" : "border-hue-deep bg-hue-tint"}`}
        >
          <span className="text-sm font-semibold">완료</span>
          <span className="text-xs text-ink">{changed ? "완료하지 않음" : "완료할 수 있음"}</span>
        </li>
      </ol>

      {/* 되돌아오는 길 — 완료 칸에서 첫 검토 칸까지. 넓은 화면에서만 선으로 그린다 */}
      <div aria-hidden="true" className="hidden md:grid md:grid-cols-5 md:gap-2">
        <div
          className={`col-span-5 -mt-2 h-4 rounded-b-xs border-x-2 border-b-2 ${changed ? "border-hue-deep" : "border-dashed border-rule-strong"}`}
        />
      </div>

      <p className={`max-w-measure text-sm ${changed ? "text-ink" : "text-ink-2"}`}>
        {changed
          ? "승인 당시 후보 A와 현재 후보 B가 다릅니다. 이전 승인을 무효로 보고, 바뀐 후보로 다시 검수를 통과해야 완료합니다."
          : "모든 승인이 현재 후보 A에 대한 것이라 완료할 수 있습니다. 파일이 바뀌면 다시 검수로 돌아갑니다."}
      </p>
    </div>
  );
}
