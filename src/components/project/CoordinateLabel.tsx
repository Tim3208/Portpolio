/**
 * mathGraph 의 판단 하나를 보여주는 설명용 도식 — 실제 좌표와 표시 글자의 분리.
 *
 * 제품 화면을 재현하지 않는다. 근(1, 3)의 위치는 실제 좌표로 그리고,
 * 그 위에 붙는 글자만 a · 3a 로 바꾼 샘플 문제다.
 */
export function CoordinateLabel() {
  // 단위 하나 = 가로 60, 세로 20. 가로축은 y = 80.
  const px = (x: number) => 30 + x * 60;

  return (
    <figure className="flex flex-col gap-3">
      <div className="rounded-xs border border-rule bg-paper-raised p-4">
        <svg
          viewBox="0 0 300 130"
          role="img"
          aria-label="y = (x − 1)(x − 3) 그래프. x축과 만나는 두 점은 실제 좌표 1과 3에 있고, 그 위에는 표시 글자 a와 3a가 붙어 있다."
          className="h-auto w-full max-w-md"
        >
          {/* 축 */}
          <line x1="10" y1="80" x2="290" y2="80" className="stroke-rule-strong" strokeWidth="1.5" />
          <line x1={px(0)} y1="8" x2={px(0)} y2="124" className="stroke-rule-strong" strokeWidth="1.5" />
          {/* 실제 좌표 눈금 */}
          {[1, 2, 3, 4].map((x) => (
            <g key={x}>
              <line x1={px(x)} y1="77" x2={px(x)} y2="83" className="stroke-rule-strong" strokeWidth="1.5" />
              <text x={px(x)} y="98" textAnchor="middle" className="fill-ink-2 font-mono text-[10px]">
                {x}
              </text>
            </g>
          ))}
          {/* y = x² − 4x + 3 */}
          <path d={`M ${px(0)} 20 Q ${px(2)} 180 ${px(4)} 20`} fill="none" className="stroke-ink" strokeWidth="1.75" />
          {/* 근과 표시 글자 */}
          {[
            { x: 1, label: "a" },
            { x: 3, label: "3a" },
          ].map((root) => (
            <g key={root.label}>
              <circle cx={px(root.x)} cy="80" r="4" className="fill-hue-deep" />
              <text x={px(root.x)} y="66" textAnchor="middle" className="fill-hue-deep text-[15px] font-semibold italic">
                {root.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
      <figcaption className="max-w-measure text-sm text-ink-2">
        점은 실제 좌표 1과 3에 그대로 두고, 그 위의 표시 글자만 a · 3a로 바꿉니다. 판단을 설명하려고 만든 샘플 도식입니다.
      </figcaption>
    </figure>
  );
}
