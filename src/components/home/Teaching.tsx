import { Container } from "@/components/layout/Container";
import { Metric } from "@/components/ui/Metric";
import {
  TEACHING_ACTIVITIES,
  TEACHING_LEAD,
  TEACHING_METRICS,
  TEACHING_QUOTE,
  TRANSLATION,
} from "@/data/teaching";

/**
 * Teaching — 대형 인용문 + 3열 번역 대응표 (Blueprint 05-05)
 *
 * 외부 활동 목록이 아니라 Communication Skill 의 근거로 배치한다 (§15).
 * 사이트에서 유일한 대형 인용문이 여기 있다. 지면은 Sage wash full-bleed.
 */
export function Teaching() {
  return (
    <section className="hue-sage bg-hue-wash py-section md:py-section-md">
      <Container>
        <p className="font-mono text-label uppercase text-hue-deep">Teaching</p>

        <blockquote className="mt-6">
          <p className="max-w-[22ch] text-display sm:max-w-[26ch]">
            {TEACHING_QUOTE}
          </p>
        </blockquote>
        <p className="mt-6 max-w-measure text-ink-2">{TEACHING_LEAD}</p>

        {/* 같은 원칙이 세 상대에게 어떻게 다르게 적용되는가 */}
        <ul className="mt-14 grid gap-8 border-t border-rule-strong pt-8 md:grid-cols-3 md:gap-10">
          {TRANSLATION.map((t) => (
            <li key={t.audience} className="flex flex-col gap-2">
              <p className="font-mono text-label uppercase text-hue-deep">
                {t.audience}
              </p>
              <p className="text-h3">{t.approach}</p>
              <p className="text-small text-ink-2">{t.detail}</p>
            </li>
          ))}
        </ul>

        <ul className="mt-14 flex flex-col">
          {TEACHING_ACTIVITIES.map((a) => (
            <li
              key={a.title}
              className="grid gap-2 border-t border-rule py-6 md:grid-cols-[16rem_minmax(0,1fr)] md:gap-8"
            >
              <div className="flex flex-col gap-1">
                <p className="text-ink">{a.title}</p>
                <p className="font-mono text-label uppercase text-ink-3">
                  {a.period}
                </p>
              </div>
              <p className="max-w-measure text-small text-ink-2">{a.detail}</p>
            </li>
          ))}
        </ul>

        <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-rule-strong pt-8 sm:grid-cols-3">
          {TEACHING_METRICS.map((m) => (
            <div key={m.label}>
              <dt className="sr-only">{m.label}</dt>
              <dd>
                <Metric value={m.value} label={m.label} />
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
