import { Demo } from "@/components/project/demos";
import { Placeholder } from "@/components/ui/Placeholder";
import { Shot } from "@/components/ui/Shot";
import type { Block, CaseSection as CaseSectionType } from "@/data/caseStudies";

/** 실제 화면 · 도식은 섹션 폭을 쓴다. 상세 본문 옆에 목차가 있을 때의 표시 폭 기준. */
const IMAGE_SIZES = "(min-width: 1280px) 70vw, 100vw";

/** 번호가 붙은 단계. 넓은 화면에서는 가로 흐름, 좁은 화면에서는 세로 목록이 된다. */
function FlowSteps({ steps, horizontal }: { steps: readonly string[]; horizontal: boolean }) {
  return (
    <ol className={horizontal ? "grid gap-2 lg:auto-cols-fr lg:grid-flow-col" : "flex flex-col gap-2"}>
      {steps.map((step, i) => (
        <li key={step} className="relative flex gap-3 rounded-xs border border-rule bg-paper-raised px-3 py-2.5">
          <span className="font-mono text-xs leading-6 text-hue-deep tabular-nums">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span>{step}</span>
          {horizontal && i < steps.length - 1 ? (
            <span aria-hidden="true" className="absolute top-1/2 -right-2 z-10 hidden h-px w-2 bg-hue-deep lg:block" />
          ) : null}
        </li>
      ))}
    </ol>
  );
}

/** 블록 종류마다 다른 형태로 그린다. 글은 읽는 폭, 화면 · 비교 · 흐름은 섹션 폭. */
function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "prose":
      return <p className="max-w-measure text-ink-2">{block.text}</p>;
    case "list":
      return (
        <ul className={`grid gap-x-10 gap-y-2.5 ${block.columns === 2 ? "max-w-3xl sm:grid-cols-2" : "max-w-measure"}`}>
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-ink-2">
              <span aria-hidden="true" className="mt-[0.7em] size-1.5 shrink-0 rounded-[1px] bg-hue-deep" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "flow":
      return (
        <div className="flex flex-col gap-3">
          {block.label ? <p className="text-sm font-semibold text-ink-2">{block.label}</p> : null}
          <FlowSteps steps={block.steps} horizontal={block.steps.length <= 6} />
        </div>
      );
    case "compare":
      return (
        <div className="grid items-stretch gap-3 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
          <div className="flex flex-col gap-3 rounded-xs border border-dashed border-rule-strong p-4">
            <p className="text-sm text-ink-2">{block.before.label}</p>
            <ol className="flex flex-col gap-1.5 text-ink-2">
              {block.before.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
          <span aria-hidden="true" className="self-center justify-self-center font-mono text-hue-deep">
            <span className="md:hidden">↓</span>
            <span className="hidden md:inline">→</span>
          </span>
          <div className="flex flex-col gap-3 rounded-xs border border-hue-deep/40 bg-hue-tint p-4">
            <p className="text-sm font-semibold text-hue-deep">{block.after.label}</p>
            <ol className="flex flex-col gap-1.5 text-ink">
              {block.after.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      );
    case "image":
      return (
        <figure className="flex flex-col gap-3">
          {block.src ? (
            <Shot
              src={block.src}
              alt={block.alt}
              aspectRatio={block.aspectRatio ?? "16 / 10"}
              position={block.position}
              sizes={IMAGE_SIZES}
            />
          ) : (
            <Placeholder description={block.alt} ratio={block.aspectRatio ?? "16 / 10"} />
          )}
          <figcaption className="max-w-measure text-ink">{block.caption}</figcaption>
        </figure>
      );
    case "metrics":
      return (
        <dl className="grid grid-cols-2 gap-x-8 gap-y-5 border-y border-rule py-6 sm:flex sm:flex-wrap sm:gap-x-14">
          {block.items.map((m) => (
            <div key={m.label} className="flex flex-col gap-0.5">
              <dt className="order-2 text-sm text-ink-2">{m.label}</dt>
              <dd className="order-1 font-mono text-3xl font-semibold tracking-tight tabular-nums">{m.value}</dd>
            </div>
          ))}
        </dl>
      );
    case "decision":
      return (
        <div className="grid gap-6 rounded-xs border border-rule bg-paper-raised p-5 md:p-6 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col gap-4">
            <p className="text-lead">{block.problem}</p>
            <ul aria-label="검토한 선택지" className="flex flex-col border-t border-rule">
              {block.options.map((option) => (
                <li key={option} className="border-b border-rule py-2.5 text-ink-2">
                  {option}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3 border-l-2 border-hue-deep pl-5">
            <p className="text-lead font-semibold">{block.choice}</p>
            <p className="text-ink-2">{block.reason}</p>
          </div>
        </div>
      );
    case "demo":
      return <Demo name={block.name} />;
  }
}

/**
 * Case Study 의 한 섹션. skipSrc 는 상세 첫 화면으로 옮겨 간 이미지다 —
 * 같은 화면을 한 페이지에서 두 번 보여주지 않는다.
 */
export function CaseSection({ section, skipSrc }: { section: CaseSectionType; skipSrc?: string }) {
  const blocks = section.blocks.filter((b) => !(b.type === "image" && skipSrc && b.src === skipSrc));
  return (
    <section id={`section-${section.num}`} className="relative flex scroll-mt-6 flex-col gap-6 border-t border-rule pt-10">
      {/* 통합 전 링크(#section-05 등)를 옮겨진 위치로 잇는다. */}
      {section.anchorAliases?.map((id) => (
        <span key={id} id={id} aria-hidden="true" className="absolute top-0" />
      ))}
      <h2 className="max-w-measure text-title font-bold">{section.title}</h2>
      {blocks.map((block, i) => (
        <BlockView key={`${section.num}-${i}`} block={block} />
      ))}
    </section>
  );
}
