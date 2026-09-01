import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Metric } from "@/components/ui/Metric";
import { HERO_METRICS, PROFILE } from "@/data/profile";

/**
 * Hero — 비대칭 2열 (Blueprint 05-01)
 *
 * 좌측에 거대한 한글 헤드라인, 우측 하단 정렬로 직무 · 이름 · 보조문 · CTA.
 * 이미지는 쓰지 않는다. 대신 첫 스크롤 전에 실제 수치 4개가 화면에 들어온다.
 * 지면은 Cloud Dancer 순지면 — 색은 수치와 CTA 에만 붙는다.
 */
export function Hero() {
  const [line1, line2] = PROFILE.headline;
  const [before, after] = line2.split(PROFILE.headlineAccent);

  return (
    <section className="hue-mocha pt-16 pb-section md:pt-24 md:pb-section-md">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-end lg:gap-16">
          <h1 className="text-display">
            {line1}
            <br />
            {before}
            <span className="text-hue-deep">{PROFILE.headlineAccent}</span>
            {after}
          </h1>

          <div className="flex flex-col gap-4">
            <p className="font-mono text-label uppercase text-ink-3">
              {PROFILE.role}
            </p>
            <p className="text-h3">{PROFILE.name}</p>
            <p className="max-w-measure text-small text-ink-2">
              {PROFILE.supporting}
            </p>
            <div className="mt-2 flex flex-wrap gap-2.5">
              <Link
                href="/work"
                className="flex min-h-11 items-center rounded-xs bg-hue-deep px-5 text-small text-paper transition-opacity hover:opacity-90"
              >
                프로젝트 보기
              </Link>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer noopener"
                className="flex min-h-11 items-center rounded-xs border border-rule-strong px-5 text-small text-hue-deep transition-colors hover:bg-hue-tint hover:border-hue-tint"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-rule pt-7 sm:grid-cols-4 md:mt-20">
          {HERO_METRICS.map((m) => (
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
