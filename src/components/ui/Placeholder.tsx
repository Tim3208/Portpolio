/**
 * 아직 확보하지 않은 화면 자리.
 *
 * 실제 캡처가 없을 때 목업을 만들지 않고, 어떤 화면이 들어갈지 글자로 적는다.
 * 완성된 자료처럼 보이지 않도록 점선과 가라앉은 면을 쓴다. 비율은 실제
 * 화면에 맞춰 두어 자료가 들어와도 레이아웃이 바뀌지 않게 한다.
 */
export function Placeholder({
  label = "확보할 화면",
  description,
  ratio = "16 / 10",
}: {
  label?: string;
  /** 들어갈 화면의 설명(alt). 화면에도 보이고 스크린리더도 읽는다. */
  description: string;
  ratio?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`${label}: ${description}`}
      style={{ aspectRatio: ratio }}
      className="flex w-full flex-col items-start justify-end gap-1.5 rounded-xs border border-dashed border-rule-strong bg-paper-sunk p-5"
    >
      <span className="text-xs font-semibold text-ink-2">{label}</span>
      <span className="max-w-measure text-sm text-ink-2">{description}</span>
    </div>
  );
}
