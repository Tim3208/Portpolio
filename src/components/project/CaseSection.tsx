import { Shot } from "@/components/project/Shot";
import { Placeholder } from "@/components/sketch/Placeholder";
import type { Block, CaseSection as CaseSectionType } from "@/data/caseStudies";

/** 단계 — 번호 칸을 청색 선으로 잇는 노트의 흐름도 */
function Steps({ label, steps, muted = false }: { label?: string; steps: readonly string[]; muted?: boolean }) {
  return (
    <div className="flex flex-col gap-3">
      {label ? <p className="text-sm font-semibold text-pen">{label}</p> : null}
      <ol className="flex flex-col gap-3">
        {steps.map((step, i) => (
          <li
            key={step}
            className={`relative grid grid-cols-[1.75rem_1fr] items-start gap-3 before:absolute before:-top-3 before:left-[0.875rem] before:h-3 before:w-px first:before:hidden ${
              muted ? "text-ink-2 before:bg-line" : "before:bg-pen"
            }`}
          >
            <span
              className={`flex size-7 items-center justify-center border font-mono text-xs ${
                muted ? "border-line text-ink-3" : "border-pen bg-paper-raised text-pen"
              }`}
            >
              {i + 1}
            </span>
            <span className="pt-0.5 leading-relaxed">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** 블록 종류마다 다른 형태로 그린다. 글은 읽는 폭, 이미지·비교는 넓은 폭. */
function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "prose":
      return <p className="max-w-measure leading-[1.85]">{block.text}</p>;
    case "list":
      return (
        <ul
          className={`grid max-w-measure list-[square] gap-x-10 gap-y-2 pl-5 marker:text-pen ${block.columns === 2 ? "sm:grid-cols-2" : ""}`}
        >
          {block.items.map((item) => (
            <li key={item} className="text-ink-2">
              {item}
            </li>
          ))}
        </ul>
      );
    case "flow":
      return (
        <div className="max-w-measure">
          <Steps label={block.label} steps={block.steps} />
        </div>
      );
    case "compare":
      return (
        <div className="grid gap-4 sm:grid-cols-2 md:gap-6">
          <div className="border border-dashed border-line p-5">
            <Steps label={block.before.label} steps={block.before.steps} muted />
          </div>
          <div className="pasted p-5">
            <Steps label={block.after.label} steps={block.after.steps} />
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
              ratio={block.aspectRatio ?? "16 / 10"}
              position={block.position}
              sizes="(min-width: 80rem) 52rem, (min-width: 48rem) 70vw, 100vw"
            />
          ) : (
            <Placeholder label="확보할 화면" description={block.alt} ratio={block.aspectRatio ?? "16 / 10"} />
          )}
          <figcaption className="max-w-measure text-sm leading-relaxed text-ink-2">{block.caption}</figcaption>
        </figure>
      );
    case "metrics":
      return (
        <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-y border-line py-5 sm:flex sm:flex-wrap sm:gap-x-0">
          {block.items.map((m) => (
            <div key={m.label} className="flex flex-col sm:border-l sm:border-line sm:px-6 sm:first:border-l-0 sm:first:pl-0">
              <dt className="order-2 text-sm leading-snug text-ink-2">{m.label}</dt>
              <dd className="order-1 text-[2rem] leading-tight font-extrabold tracking-[-0.03em] tabular-nums">{m.value}</dd>
            </div>
          ))}
        </dl>
      );
    case "decision":
      return (
        <div className="flex max-w-measure flex-col gap-3 border-t border-line pt-5">
          <p className="text-ink-2">
            <span className="mr-2 text-sm font-semibold text-pen">판단</span>
            {block.problem}
          </p>
          <ul aria-label="검토한 선택지" className="flex flex-col gap-1.5">
            {block.options.map((option) => (
              <li key={option} className="grid grid-cols-[1.25rem_1fr] text-ink-2">
                <span aria-hidden="true" className="mt-[0.6em] size-2 border border-ink-3" />
                {option}
              </li>
            ))}
          </ul>
          <p className="pen-scope text-lg font-bold">
            <span className="pen-line">{block.choice}</span>
          </p>
          <p className="text-ink-2">{block.reason}</p>
        </div>
      );
  }
}

export function CaseSection({ section }: { section: CaseSectionType }) {
  return (
    <section id={`section-${section.num}`} className="relative flex scroll-mt-6 flex-col gap-6 border-t border-line-strong pt-10">
      {/* 통합 전 링크(#section-05 등)를 옮겨진 위치로 잇는다. */}
      {section.anchorAliases?.map((id) => (
        <span key={id} id={id} aria-hidden="true" className="absolute top-0" />
      ))}
      <h2 className="text-section font-extrabold tracking-[-0.03em]">{section.title}</h2>
      {section.blocks.map((block, i) => (
        <BlockView key={`${section.num}-${i}`} block={block} />
      ))}
    </section>
  );
}
