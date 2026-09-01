import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ABOUT_LEAD, BACKGROUND, PROBLEM_MAP } from "@/data/profile";

/**
 * About — sticky 2열 + 대조표 (Blueprint 05-02)
 *
 * 이력을 나열하지 않는다. 좌측은 스크롤 동안 머무는 헤딩, 우측은 카드가 아니라
 * "불편 → 제품" 대조표다. hairline 만으로 행을 나눈다.
 * 지면은 Blush wash full-bleed.
 */
export function About() {
  return (
    <section className="hue-blush bg-hue-wash py-section md:py-section-md">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.4fr] lg:gap-16">
          <div className="lg:sticky lg:top-(--chrome-offset) lg:self-start">
            <SectionHeader eyebrow="About" title={ABOUT_LEAD} />
          </div>

          <div>
            <ul className="flex flex-col">
              {PROBLEM_MAP.map((row) => (
                <li
                  key={row.slug}
                  // minmax(0,1fr) — 1fr 만 두면 자식의 min-width:auto 때문에
                  // 긴 문장이 컬럼을 밀어내 가로 스크롤이 생긴다 (§30)
                  className="grid gap-2 border-t border-rule-strong py-6 sm:grid-cols-[minmax(0,1fr)_auto_auto] sm:items-baseline sm:gap-5"
                >
                  <p className="text-ink-2">{row.problem}</p>
                  <span
                    aria-hidden="true"
                    className="hidden font-mono text-small text-hue-deep sm:inline"
                  >
                    →
                  </span>
                  <p className="text-h3 whitespace-nowrap">{row.product}</p>
                </li>
              ))}
            </ul>

            {/* 디자인 ＋ 공학. 교차점의 ＋ 가 이 섹션의 결론이다. */}
            <div className="mt-12 grid border-t border-rule-strong sm:grid-cols-2">
              {BACKGROUND.map((b, i) => (
                <div
                  key={b.kind}
                  className={[
                    "flex flex-col gap-1.5 py-6",
                    i === 0 ? "sm:pr-8" : "sm:border-l sm:border-rule-strong sm:pl-8",
                  ].join(" ")}
                >
                  <p className="font-mono text-label uppercase text-hue-deep">
                    {b.kind}
                  </p>
                  <p className="text-ink">{b.school}</p>
                  <p className="text-small text-ink-3">{b.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-2 max-w-measure text-small text-ink-2">
              디자인을 배우고 개발을 전공했기 때문에 화면과 구현을 함께
              생각합니다.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
