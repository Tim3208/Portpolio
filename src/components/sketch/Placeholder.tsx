/**
 * 아직 붙이지 못한 화면 · 도식 자리.
 *
 * 확보하지 못한 화면을 목업으로 대신하지 않는다. 노트에 "붙일 자리"를 비워 두듯
 * 점선 틀과 어떤 화면이 들어갈지만 적고, 실제 이미지의 비율을 유지한다.
 * 스크린리더에는 들어갈 화면의 설명(alt)을 읽힌다.
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
      className="flex w-full flex-col items-center justify-center gap-1.5 border border-dashed border-pen/60 p-6 text-center"
    >
      <span className="font-mono text-[0.8125rem] text-pen">{kind === "도식" ? "공개하지 않는 화면" : "붙일 화면"}</span>
      <span className="max-w-xs text-sm text-ink-2">{label}</span>
    </div>
  );
}
