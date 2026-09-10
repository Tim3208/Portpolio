type MetricProps = {
  value: string;
  label: string;
  /** deep-ground 위에서는 색이 뒤집히면 안 되므로 상수 잉크를 쓴다 */
  onDeep?: boolean;
};

/**
 * 수치.
 *
 * 값은 언제나 mono + tabular-nums 다. 숫자가 화면의 시각적 앵커이므로
 * 자릿수가 흔들리면 안 된다.
 */
export function Metric({ value, label, onDeep = false }: MetricProps) {
  return (
    <div className="flex flex-col gap-1">
      <span
        className={[
          "font-mono text-metric tabular-nums",
          onDeep ? "text-deep-ink" : "text-hue-deep",
        ].join(" ")}
      >
        {value}
      </span>
      <span
        className={[
          "text-small",
          onDeep ? "text-deep-ink-2" : "text-ink-2",
        ].join(" ")}
      >
        {label}
      </span>
    </div>
  );
}
