import { Container } from "@/components/layout/Container";
import { Metric } from "@/components/ui/Metric";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  TEACHING_ACTIVITIES,
  TEACHING_LEAD,
  TEACHING_METRICS,
  TRANSLATION,
} from "@/data/teaching";

/** 교육 대상과 내용, 확인된 결과를 먼저 보여준다. */
export function Teaching() {
  return (
    <section className="hue-sage bg-hue-wash py-section md:py-section-md">
      <Container>
        <SectionHeader level={1} title="교육 경험" lede={TEACHING_LEAD} />

        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-rule-strong pt-6 sm:grid-cols-3">
          {TEACHING_METRICS.map((metric) => (
            <div key={metric.label}>
              <dt className="sr-only">{metric.label}</dt>
              <dd>
                <Metric value={metric.value} label={metric.label} />
              </dd>
            </div>
          ))}
        </dl>

        <ul className="mt-12 flex flex-col">
          {TEACHING_ACTIVITIES.map((activity) => (
            <li
              key={activity.title}
              className="grid gap-4 border-t border-rule py-8 md:grid-cols-[16rem_minmax(0,1fr)] md:gap-8"
            >
              <div className="flex flex-col gap-2">
                <h2 className="text-h3 text-ink">{activity.title}</h2>
                <p className="font-mono text-small text-ink-3">
                  {activity.period}
                </p>
              </div>
              <p className="max-w-measure text-body text-ink-2">
                {activity.detail}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10 border-t border-rule-strong pt-8">
          <h2 className="text-h3">설명을 맞추는 방법</h2>
          <ul className="mt-6 grid gap-8 md:grid-cols-3">
            {TRANSLATION.map((item) => (
              <li key={item.audience} className="flex flex-col gap-2">
                <h3 className="text-small font-medium text-hue-deep">
                  {item.audience}
                </h3>
                <p className="text-body text-ink-2">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
