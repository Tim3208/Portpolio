import Image from "next/image";

import { Metric } from "@/components/ui/Metric";
import type { Block, CaseSection as CaseSectionType } from "@/data/caseStudies";

/**
 * Case Study 블록 렌더러.
 *
 * 폭은 콘텐츠가 아니라 여기서 정한다 (Blueprint 06):
 *   prose · list · decision → 720  본문 measure
 *   flow · compare · image · metrics → 1080  breakout
 * 블록마다 시각적 처리를 다르게 둬서 페이지 전체가 같은 카드의 반복이 되지
 * 않게 한다 (§48, §49).
 */

/** 본문 폭으로 가두는 래퍼 */
function Measure({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-case">{children}</div>;
}

function FlowSteps({
  label,
  steps,
  tone = "hue",
}: {
  label?: string;
  steps: readonly string[];
  tone?: "hue" | "muted";
}) {
  return (
    <div className="flex flex-col gap-3">
      {label ? (
        <p className="font-mono text-label uppercase text-ink-3">{label}</p>
      ) : null}
      <ol className="flex flex-col gap-2">
        {steps.map((step, i) => (
          <li key={step} className="flex flex-col gap-2">
            {i > 0 ? (
              <span
                aria-hidden="true"
                className="pl-5 font-mono text-small leading-none text-ink-3"
              >
                ↓
              </span>
            ) : null}
            <span
              className={[
                "rounded-xs px-4 py-2.5 font-mono text-small",
                tone === "hue"
                  ? "bg-paper border border-hue-deep text-ink"
                  : "bg-paper-raised border border-rule text-ink-2",
              ].join(" ")}
            >
              {step}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "prose":
      return (
        <Measure>
          <p className="text-ink-2">{block.text}</p>
        </Measure>
      );

    case "list":
      return (
        <Measure>
          <ul
            className={[
              "grid gap-x-8 gap-y-0 border-t border-rule",
              block.columns === 2 ? "sm:grid-cols-2" : "",
            ].join(" ")}
          >
            {block.items.map((item) => (
              <li
                key={item}
                className="border-b border-rule py-3 text-small text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
        </Measure>
      );

    case "flow":
      return (
        <div className="bg-hue-wash rounded-xs px-5 py-7 sm:px-8">
          <div className="mx-auto max-w-md">
            <FlowSteps label={block.label} steps={block.steps} />
          </div>
        </div>
      );

    case "compare":
      return (
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          {/* Before 는 무채색, After 는 프로젝트 색. 분산 → 통합이라는
              메시지를 색의 유무가 그대로 말한다. */}
          <div className="rounded-xs bg-paper-sunk px-5 py-7 sm:px-7">
            <FlowSteps
              label={block.before.label}
              steps={block.before.steps}
              tone="muted"
            />
          </div>
          <div className="rounded-xs bg-hue-tint px-5 py-7 sm:px-7">
            <FlowSteps label={block.after.label} steps={block.after.steps} />
          </div>
        </div>
      );

    case "image":
      return (
        <figure data-reveal className="flex flex-col gap-3.5">
          {/* tint 매트 — 스크린샷 가장자리가 지면에 직접 닿지 않게 한다 (§44) */}
          <div className="rounded-xs bg-hue-tint p-3 sm:p-6">
            <div className="relative aspect-16/10 w-full overflow-hidden rounded-xs bg-paper-sunk">
              <Image
                src={block.src}
                alt={block.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
                style={{ objectPosition: block.position ?? "center" }}
              />
            </div>
          </div>
          <figcaption className="mx-auto max-w-case text-small text-ink-3">
            {block.caption}
          </figcaption>
        </figure>
      );

    case "metrics":
      return (
        <dl
          data-reveal
          className="grid grid-cols-2 gap-x-8 gap-y-8 border-y border-rule-strong py-8 sm:grid-cols-4"
        >
          {block.items.map((m) => (
            <div key={m.label}>
              <dt className="sr-only">{m.label}</dt>
              <dd>
                <Metric value={m.value} label={m.label} />
              </dd>
            </div>
          ))}
        </dl>
      );

    case "decision":
      // §21 — 왜 이 구조를 선택했는가 / 다른 방법은 / 왜 그것을 안 골랐는가
      return (
        <Measure>
          <div className="flex flex-col gap-5 border-l-2 border-hue-deep pl-5 sm:pl-7">
            <div className="flex flex-col gap-2">
              <p className="font-mono text-label uppercase text-ink-3">
                Problem
              </p>
              <p className="text-ink">{block.problem}</p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-mono text-label uppercase text-ink-3">
                Options
              </p>
              <ul className="flex flex-col gap-1.5">
                {block.options.map((opt) => {
                  const picked = opt === block.choice;
                  return (
                    <li
                      key={opt}
                      className="flex gap-2.5 text-small text-ink-2"
                    >
                      <span
                        aria-hidden="true"
                        className={
                          picked ? "text-hue-deep" : "text-ink-3"
                        }
                      >
                        {picked ? "●" : "○"}
                      </span>
                      <span>{opt}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-mono text-label uppercase text-hue-deep">
                Decision
              </p>
              <p className="text-h3">{block.choice}</p>
              <p className="text-small text-ink-2">{block.reason}</p>
            </div>
          </div>
        </Measure>
      );
  }
}

export function CaseSection({ section }: { section: CaseSectionType }) {
  return (
    <section
      id={`section-${section.num}`}
      className="flex scroll-mt-28 flex-col gap-7 border-t border-rule pt-10"
    >
      <Measure>
        <div data-reveal className="flex items-baseline gap-4">
          <span className="font-mono text-small tabular-nums text-hue-deep">
            {section.num}
          </span>
          <h2 className="text-h2">{section.title}</h2>
        </div>
      </Measure>

      {section.blocks.map((block, i) => (
        <BlockView key={`${section.num}-${i}`} block={block} />
      ))}
    </section>
  );
}
