import type { ReactNode } from "react";

/**
 * 한 번에 한 상태만 보여주는 전환 컨트롤. 홈 첫 화면의 화면 전환과
 * 상세의 설명용 데모가 쓴다.
 *
 * 라디오 묶음이라 서버에서 그린 그대로 JS 없이 동작한다. 패널을 고르는 규칙은
 * globals.css 의 "전환 패널" 절에 있다(최대 4개). 빠르게 연달아 바꿔도 마지막
 * 선택만 남고, 모션 감소 설정에서는 즉시 바뀐다.
 *
 * name 은 페이지 안에서 겹치지 않아야 한다.
 */
export function Switcher({
  name,
  legend,
  options,
  aside,
  className,
}: {
  name: string;
  /** 스크린리더가 읽는 묶음 이름 */
  legend: string;
  options: readonly { label: string; panel: ReactNode }[];
  /** 컨트롤 줄 오른쪽에 붙는 짧은 표시(예: 설명용 재구성) */
  aside?: ReactNode;
  className?: string;
}) {
  return (
    <div data-switch={name} className={["flex flex-col gap-4", className].filter(Boolean).join(" ")}>
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <fieldset className="min-w-0">
          <legend className="sr-only">{legend}</legend>
          <div className="flex flex-wrap gap-1 rounded-panel bg-paper-sunk p-1">
            {options.map((option, i) => (
              <label
                key={option.label}
                className="relative flex min-h-11 cursor-pointer items-center rounded-chip px-3.5 text-sm text-ink-2 transition-colors duration-150 select-none hover:text-ink has-checked:bg-paper-raised has-checked:font-semibold has-checked:text-ink has-checked:shadow-[inset_0_-2px_0_var(--hue-deep)] has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-hue-deep md:min-h-9"
              >
                <input
                  type="radio"
                  name={name}
                  value={i}
                  defaultChecked={i === 0}
                  className="sr-only"
                />
                {option.label}
              </label>
            ))}
          </div>
        </fieldset>
        {aside}
      </div>
      <div className="switch-panels">
        {options.map((option, i) => (
          <div key={option.label} data-panel={i}>
            {option.panel}
          </div>
        ))}
      </div>
    </div>
  );
}
