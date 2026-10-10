import type { Metadata } from "next";

import { Container } from "@/components/sketch/Container";
import { AWARDS } from "@/data/awards";
import { TIMELINE } from "@/data/experiences";
import { BACKGROUND } from "@/data/profile";
import { COURSEWORK, SKILL_GROUPS } from "@/data/skills";

export const metadata: Metadata = {
  title: "경력",
  description: "디자인 전공부터 프론트엔드 개발까지의 경력, 수상 이력과 프로젝트에서 사용한 기술.",
  alternates: { canonical: "/career" },
  openGraph: {
    title: "경력 — 박정우",
    description: "디자인 전공부터 프론트엔드 개발까지의 경력, 수상 이력과 프로젝트에서 사용한 기술.",
    url: "/career",
  },
};

const LINK =
  "inline-flex min-h-11 items-center text-sm font-semibold text-pen underline decoration-pen/40 underline-offset-[0.3em] hover:decoration-pen";
const SECTION_TITLE = "text-section font-extrabold tracking-[-0.03em]";

/**
 * 전공 배경 → 온 길 → 외부 검증 → 지금 다루는 것 순으로 읽힌다.
 * 연도는 노트 여백에 걸고, 본문 칸에는 그해의 기록만 둔다.
 */
export default function CareerPage() {
  return (
    <Container className="flex flex-col gap-16 pt-12 pb-16 md:pt-16 md:pb-20">
      <div className="flex flex-col gap-6">
        <h1 className="text-title font-extrabold tracking-[-0.04em]">경력</h1>
        <p className="max-w-measure text-xl leading-relaxed font-semibold">{BACKGROUND.lead}</p>
        <dl className="grid gap-4 md:grid-cols-2 md:gap-6">
          {BACKGROUND.items.map((item) => (
            <div key={item.school} className="pasted flex flex-col gap-1 p-5 md:p-6">
              <dt className="text-sm font-semibold text-pen">{item.field}</dt>
              <dd className="text-xl font-extrabold tracking-[-0.02em]">{item.school}</dd>
              <dd className="text-ink-2">{item.detail}</dd>
              <dd className="font-mono text-[0.8125rem] text-ink-3 tabular-nums">{item.period}</dd>
            </div>
          ))}
        </dl>
      </div>

      <ol className="flex flex-col border-t border-line-strong">
        {TIMELINE.map((group) => (
          <li key={group.year} className="hang border-b border-line py-5 [--note-top:1.1rem]">
            <p className="margin-note">{group.year}</p>
            <ul className="flex flex-col gap-3">
              {group.items.map((item) => (
                <li key={item.title}>
                  <p className="font-semibold">{item.title}</p>
                  {item.detail ? <p className="text-sm text-ink-2">{item.detail}</p> : null}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <section aria-labelledby="awards" className="flex flex-col gap-6">
        <h2 id="awards" className={SECTION_TITLE}>
          수상
        </h2>
        <ul className="flex flex-col border-t border-line-strong">
          {AWARDS.map((award) => (
            <li key={award.title} className="hang flex flex-col gap-1 border-b border-line py-5 [--note-top:1.15rem]">
              <p className="margin-note">{award.year}</p>
              <p className={award.primary ? "text-lg font-extrabold" : "font-bold"}>
                {award.prize} — {award.title}
              </p>
              <p className="text-sm text-ink-2">{award.host}</p>
              {award.role ? <p className="text-sm text-ink-3">{award.role}</p> : null}
              {award.links ? (
                <div className="flex flex-wrap gap-x-5">
                  {award.links.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noreferrer noopener" className={LINK}>
                      {link.label} (새 창)
                    </a>
                  ))}
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="skills" className="flex flex-col gap-6">
        <h2 id="skills" className={SECTION_TITLE}>
          프로젝트에서 사용한 기술
        </h2>
        <ul className="flex flex-col border-t border-line-strong">
          {SKILL_GROUPS.map((group) => (
            <li key={group.role} className="grid gap-2 border-b border-line py-5 md:grid-cols-[10rem_1fr]">
              <h3 className="font-extrabold">{group.role}</h3>
              <div className="flex flex-col gap-1">
                <p className="font-mono text-sm">{group.items.join(" · ")}</p>
                <p className="text-sm text-ink-2">{group.caption}</p>
              </div>
            </li>
          ))}
          <li className="grid gap-2 py-5 md:grid-cols-[10rem_1fr]">
            <h3 className="font-extrabold">{COURSEWORK.label}</h3>
            <p className="font-mono text-sm">{COURSEWORK.items.join(" · ")}</p>
          </li>
        </ul>
      </section>
    </Container>
  );
}
