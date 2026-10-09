/**
 * 이미지 · 영상 자리.
 *
 * 스케치 단계에서는 실제 이미지를 넣지 않는다. 대신 어떤 화면이 들어갈지
 * 글자로 적고, 실제 이미지의 비율을 유지해 레이아웃이 도색 단계와 같게 한다.
 * 스크린리더에는 실제 이미지의 alt 를 그대로 읽힌다.
 */
export function Placeholder({
  kind = "이미지",
  label,
  description,
  ratio = "16 / 10",
}: {
  kind?: "이미지" | "도식" | "영상";
  /** 화면에 보이는 짧은 이름 */
  label: string;
  /** 실제 이미지의 alt. 없으면 label 을 읽는다. */
  description?: string;
  ratio?: string;
}) {
  return (
    <div
      role="img"
      aria-label={description ?? label}
      style={{ aspectRatio: ratio }}
      className="flex w-full flex-col items-center justify-center gap-1 border border-dashed border-line-strong bg-sunk p-4 text-center"
    >
      <span className="font-mono text-xs text-ink-2">[{kind}]</span>
      <span className="text-sm">{label}</span>
    </div>
  );
}
