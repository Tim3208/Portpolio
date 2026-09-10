import Image from "next/image";
import { Metric } from "@/components/ui/Metric";
import type { Block, CaseSection as CaseSectionType } from "@/data/caseStudies";

function Measure({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-case">{children}</div>;
}

function FlowSteps({ label, steps, tone = "hue" }: {
  label?: string;
  steps: readonly string[];
  tone?: "hue" | "muted";
}) {
  return (
    <div className="flex flex-col gap-3">
      {label ? <p className="text-small text-ink-2">{label}</p> : null}
      <ol className="flex flex-col gap-2">
        {steps.map((step, i) => (
          <li key={step} className="flex flex-col gap-2">
            {i > 0 ? <span aria-hidden="true" className="pl-5 text-small text-ink-3">↓</span> : null}
            <span className={["rounded-xs px-4 py-3 text-body", tone === "hue" ? "border border-rule-strong bg-paper text-ink" : "border border-rule bg-paper-raised text-ink-2"].join(" ")}>{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** 본문은 읽는 폭, 이미지·흐름은 넓은 폭으로 표현한다. */
function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "prose":
      return <Measure><p className="text-body text-ink-2">{block.text}</p></Measure>;
    case "list":
      return (
        <Measure>
          <ul className={["grid gap-x-8 gap-y-3", block.columns === 2 ? "sm:grid-cols-2" : ""].join(" ")}>
            {block.items.map((item) => <li key={item} className="border-l border-rule-strong pl-4 text-body text-ink-2">{item}</li>)}
          </ul>
        </Measure>
      );
    case "flow":
      return <Measure><FlowSteps label={block.label} steps={block.steps} /></Measure>;
    case "compare":
      return (
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xs bg-paper-sunk p-5 sm:p-7"><FlowSteps label={block.before.label} steps={block.before.steps} tone="muted" /></div>
          <div className="rounded-xs bg-hue-tint p-5 sm:p-7"><FlowSteps label={block.after.label} steps={block.after.steps} /></div>
        </div>
      );
    case "image":
      return (
        <figure className="flex flex-col gap-3">
          <div className="relative w-full overflow-hidden rounded-xs border border-rule bg-paper-sunk" style={{ aspectRatio: block.aspectRatio ?? "16 / 10" }}>
            <Image src={block.src} alt={block.alt} fill sizes="(min-width: 1280px) 960px, (min-width: 768px) 85vw, 100vw" className="object-cover" style={{ objectPosition: block.position ?? "center" }} />
          </div>
          <figcaption className="mx-auto w-full max-w-case text-small text-ink-2">{block.caption}</figcaption>
        </figure>
      );
    case "metrics":
      return (
        <Measure>
          <dl className="flex flex-wrap gap-x-10 gap-y-5 border-y border-rule py-6">
            {block.items.map((m) => <div key={m.label}><dt className="sr-only">{m.label}</dt><dd><Metric value={m.value} label={m.label} /></dd></div>)}
          </dl>
        </Measure>
      );
    case "decision":
      return (
        <Measure>
          <div className="space-y-4">
            <p className="text-body text-ink-2">{block.problem}</p>
            <ul aria-label="검토한 선택지" className="list-disc space-y-2 pl-5 text-body text-ink-2">
              {block.options.map((option) => <li key={option}>{option}</li>)}
            </ul>
            <p className="text-body font-semibold text-ink">{block.choice}</p>
            <p className="text-body text-ink-2">{block.reason}</p>
          </div>
        </Measure>
      );
  }
}

export function CaseSection({ section }: { section: CaseSectionType }) {
  return (
    <section id={"section-" + section.num} className="relative flex flex-col gap-6">
      {section.anchorAliases?.map((id) => <span key={id} id={id} aria-hidden="true" className="absolute top-0" />)}
      <Measure><h2 className="text-h2">{section.title}</h2></Measure>
      {section.blocks.map((block, i) => <BlockView key={section.num + "-" + i} block={block} />)}
    </section>
  );
}
