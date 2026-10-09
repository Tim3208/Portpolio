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

const LINK = "inline-flex min-h-11 items-center text-sm underline underline-offset-4";

/** 전공 배경 → 온 길 → 외부 검증 → 지금 다루는 것 순으로 읽힌다. */
export default function CareerPage() {
  return (
    <Container className="flex flex-col gap-14 py-14 md:py-20">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-bold">경력</h1>
        <p className="max-w-measure text-lg text-ink-2">{BACKGROUND.lead}</p>
        <dl className="grid gap-4 md:grid-cols-2">
          {BACKGROUND.items.map((item) => (
            <div key={item.school} className="flex flex-col gap-1 border-t-2 border-line-strong pt-4">
              <dt className="text-sm text-ink-2">{item.field}</dt>
              <dd className="text-xl font-bold">{item.school}</dd>
              <dd className="text-ink-2">{item.detail}</dd>
              <dd className="font-mono text-sm text-ink-2">{item.period}</dd>
            </div>
          ))}
        </dl>
      </div>

      <ol className="flex flex-col border-t border-line-strong">
        {TIMELINE.map((group) => (
          <li
            key={group.year}
            className="grid grid-cols-[4rem_1fr] gap-4 border-b border-line py-5 sm:grid-cols-[6rem_1fr]"
          >
            <p className="font-mono text-lg tabular-nums">{group.year}</p>
            <ul className="flex flex-col gap-3">
              {group.items.map((item) => (
                <li key={item.title}>
                  <p>{item.title}</p>
                  {item.detail ? <p className="text-sm text-ink-2">{item.detail}</p> : null}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <section aria-labelledby="awards" className="flex flex-col gap-6">
        <h2 id="awards" className="text-2xl font-bold">
          수상
        </h2>
        <ul className="flex flex-col border-t border-line-strong">
          {AWARDS.map((award) => (
            <li key={award.title} className="grid gap-2 border-b border-line py-5 sm:grid-cols-[6rem_1fr]">
              <p className="font-mono tabular-nums">{award.year}</p>
              <div className="flex flex-col gap-1">
                <p className={award.primary ? "text-lg font-bold" : "font-bold"}>
                  {award.prize} — {award.title}
                </p>
                <p className="text-sm text-ink-2">{award.host}</p>
                {award.role ? <p className="text-sm text-ink-2">{award.role}</p> : null}
                {award.links ? (
                  <div className="flex flex-wrap gap-x-5">
                    {award.links.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" rel="noreferrer noopener" className={LINK}>
                        {link.label} (새 창)
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="skills" className="flex flex-col gap-6">
        <h2 id="skills" className="text-2xl font-bold">
          프로젝트에서 사용한 기술
        </h2>
        <ul className="flex flex-col border-t border-line-strong">
          {SKILL_GROUPS.map((group) => (
            <li key={group.role} className="grid gap-2 border-b border-line py-5 md:grid-cols-[10rem_1fr]">
              <h3 className="font-bold">{group.role}</h3>
              <div className="flex flex-col gap-1">
                <p className="font-mono text-sm">{group.items.join(" · ")}</p>
                <p className="text-sm text-ink-2">{group.caption}</p>
              </div>
            </li>
          ))}
          <li className="grid gap-2 py-5 md:grid-cols-[10rem_1fr]">
            <h3 className="font-bold">{COURSEWORK.label}</h3>
            <p className="font-mono text-sm">{COURSEWORK.items.join(" · ")}</p>
          </li>
        </ul>
      </section>
    </Container>
  );
}
