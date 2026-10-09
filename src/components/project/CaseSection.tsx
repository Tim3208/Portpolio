import { Placeholder } from "@/components/sketch/Placeholder";
import type { Block, CaseSection as CaseSectionType } from "@/data/caseStudies";

function Steps({ label, steps }: { label?: string; steps: readonly string[] }) {
  return (
    <div className="flex flex-col gap-2">
      {label ? <p className="text-sm text-ink-2">{label}</p> : null}
      <ol className="flex flex-col gap-2">
        {steps.map((step, i) => (
          <li key={step} className="grid grid-cols-[2rem_1fr] border border-line px-3 py-2">
            <span className="font-mono text-sm text-ink-2">{i + 1}</span>
            <span>{step}</span>
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
      return <p className="max-w-measure text-ink-2">{block.text}</p>;
    case "list":
      return (
        <ul className={`grid max-w-measure list-disc gap-x-8 gap-y-2 pl-5 ${block.columns === 2 ? "sm:grid-cols-2" : ""}`}>
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
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="border border-dashed border-line p-4">
            <Steps label={block.before.label} steps={block.before.steps} />
          </div>
          <div className="border border-line-strong p-4">
            <Steps label={block.after.label} steps={block.after.steps} />
          </div>
        </div>
      );
    case "image":
      return (
        <figure className="flex flex-col gap-2">
          <Placeholder
            label={block.src ? (block.src.split("/").pop() ?? "화면") : "확보할 화면"}
            description={block.alt}
            ratio={block.aspectRatio ?? "16 / 10"}
          />
          <figcaption className="max-w-measure text-sm text-ink-2">{block.caption}</figcaption>
        </figure>
      );
    case "metrics":
      return (
        <dl className="flex flex-wrap gap-x-10 gap-y-4 border-y border-line py-5">
          {block.items.map((m) => (
            <div key={m.label} className="flex flex-col">
              <dt className="order-2 text-sm text-ink-2">{m.label}</dt>
              <dd className="order-1 font-mono text-3xl tabular-nums">{m.value}</dd>
            </div>
          ))}
        </dl>
      );
    case "decision":
      return (
        <div className="flex max-w-measure flex-col gap-3 border-l-2 border-line-strong pl-5">
          <p className="text-ink-2">{block.problem}</p>
          <ul aria-label="검토한 선택지" className="list-disc pl-5 text-ink-2">
            {block.options.map((option) => (
              <li key={option}>{option}</li>
            ))}
          </ul>
          <p className="font-bold">{block.choice}</p>
          <p className="text-ink-2">{block.reason}</p>
        </div>
      );
  }
}

export function CaseSection({ section }: { section: CaseSectionType }) {
  return (
    <section id={`section-${section.num}`} className="relative flex flex-col gap-6 border-t border-line pt-10">
      {/* 통합 전 링크(#section-05 등)를 옮겨진 위치로 잇는다. */}
      {section.anchorAliases?.map((id) => (
        <span key={id} id={id} aria-hidden="true" className="absolute top-0" />
      ))}
      <h2 className="text-2xl font-bold">{section.title}</h2>
      {section.blocks.map((block, i) => (
        <BlockView key={`${section.num}-${i}`} block={block} />
      ))}
    </section>
  );
}
