import type { Metadata } from "next";

import { LINK } from "@/components/project/ProjectParts";
import { Container } from "@/components/ui/Container";
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

const SECTION_TITLE = "text-title font-bold";

/**
 * 전공 배경 → 온 길 → 외부 검증 → 지금 다루는 것 순으로 읽힌다.
 * 연도 축은 순서만 나타낸다. 칸의 길이가 경력의 양을 뜻하지 않도록 간격을 고르게 둔다.
 */
export default function CareerPage() {
  return (
    <Container className="hue-wheat flex flex-col gap-16 pt-10 pb-20 md:pt-14">
      <header className="grid gap-8 xl:grid-cols-12 xl:gap-12">
        <div className="flex flex-col gap-4 xl:col-span-5">
          <h1 className="text-display font-bold">경력</h1>
          <p className="max-w-measure text-lead text-ink-2">{BACKGROUND.lead}</p>
        </div>
        <dl className="grid gap-px overflow-hidden rounded-xs border border-rule bg-rule md:grid-cols-2 xl:col-span-7">
          {BACKGROUND.items.map((item) => (
            <div key={item.school} className="flex flex-col gap-1 bg-paper p-5">
              <dt className="text-xs font-semibold tracking-wide text-hue-deep">{item.field}</dt>
              <dd className="text-lg font-bold">{item.school}</dd>
              <dd className="text-ink-2">{item.detail}</dd>
              <dd className="text-sm text-ink-2 tabular-nums">{item.period}</dd>
            </div>
          ))}
        </dl>
      </header>

      <ol className="relative flex flex-col">
        <span aria-hidden="true" className="absolute top-2 bottom-2 left-[0.3125rem] w-px bg-rule-strong sm:left-[6.3125rem]" />
        {TIMELINE.map((group) => (
          <li key={group.year} className="relative grid gap-2 py-5 pl-8 sm:grid-cols-[6rem_minmax(0,1fr)] sm:gap-8 sm:pl-0">
            <span
              aria-hidden="true"
              className="absolute top-[1.85rem] left-0 size-[0.6875rem] rounded-full border-2 border-hue-deep bg-paper sm:left-[5.9375rem]"
            />
            <p className="font-mono text-lg text-hue-deep tabular-nums">{group.year}</p>
            <ul className="flex flex-col gap-3 sm:pl-8">
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

      <section aria-labelledby="awards" className="grid gap-6 lg:grid-cols-12 lg:gap-12">
        <h2 id="awards" className={`${SECTION_TITLE} lg:col-span-4`}>
          수상
        </h2>
        <ul className="flex flex-col lg:col-span-8">
          {AWARDS.map((award) => (
            <li key={award.title} className="grid gap-2 border-b border-rule py-5 first:border-t sm:grid-cols-[5rem_minmax(0,1fr)]">
              <p className="font-mono text-sm leading-7 text-ink-2 tabular-nums">{award.year}</p>
              <div className="flex flex-col gap-1">
                <p className={award.primary ? "text-lg font-bold" : "font-bold"}>
                  {award.prize} — {award.title}
                </p>
                <p className="text-sm text-ink-2">{award.host}</p>
                {award.role ? <p className="text-sm text-ink-2">{award.role}</p> : null}
                {award.links ? (
                  <div className="flex flex-wrap gap-x-5">
                    {award.links.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" rel="noreferrer noopener" className={`${LINK} text-sm`}>
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

      <section aria-labelledby="skills" className="grid gap-6 lg:grid-cols-12 lg:gap-12">
        <h2 id="skills" className={`${SECTION_TITLE} lg:col-span-4`}>
          프로젝트에서 사용한 기술
        </h2>
        <ul className="flex flex-col lg:col-span-8">
          {SKILL_GROUPS.map((group) => (
            <li key={group.role} className="grid gap-2 border-b border-rule py-5 first:border-t md:grid-cols-[10rem_minmax(0,1fr)]">
              <h3 className="font-bold">{group.role}</h3>
              <div className="flex flex-col gap-1">
                <p className="font-mono text-sm">{group.items.join(" · ")}</p>
                <p className="text-sm text-ink-2">{group.caption}</p>
              </div>
            </li>
          ))}
          <li className="grid gap-2 py-5 md:grid-cols-[10rem_minmax(0,1fr)]">
            <h3 className="font-bold">{COURSEWORK.label}</h3>
            <p className="font-mono text-sm">{COURSEWORK.items.join(" · ")}</p>
          </li>
        </ul>
      </section>
    </Container>
  );
}
