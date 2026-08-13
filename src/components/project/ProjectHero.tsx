import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Metric } from "@/components/ui/Metric";
import type { CaseStudy } from "@/data/caseStudies";
import type { Project } from "@/data/projects";

const LINK_LABEL: Record<string, string> = {
  service: "서비스 바로가기",
  github: "GitHub",
  figma: "Figma",
};

/**
 * Case Study 상단.
 *
 * 홈 카드에서 보던 tint 가 그대로 지면으로 확대된다. 색 하나로 이동 전후가
 * 이어지기 때문에 별도의 전환 효과가 필요 없다.
 */
export function ProjectHero({
  project,
  caseStudy,
}: {
  project: Project;
  caseStudy: CaseStudy;
}) {
  const links = Object.entries(project.links ?? {}).filter(
    ([, href]) => Boolean(href),
  ) as [string, string][];

  return (
    <div className="bg-hue-tint pt-10 pb-12 md:pt-14 md:pb-16">
      <Container>
        <Link
          href="/#projects"
          className="inline-flex min-h-11 items-center gap-2 font-mono text-label uppercase text-hue-deep"
        >
          <span aria-hidden="true">←</span> Projects
        </Link>

        <h1 className="mt-4 max-w-[18ch] text-display">{caseStudy.headline}</h1>
        <p className="mt-5 max-w-measure text-ink-2">{caseStudy.summary}</p>

        {project.metrics ? (
          <dl className="mt-10 flex flex-wrap gap-x-14 gap-y-6">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <dt className="sr-only">{m.label}</dt>
                <dd>
                  <Metric value={m.value} label={m.label} />
                </dd>
              </div>
            ))}
          </dl>
        ) : null}

        <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-hue-deep/40 pt-6">
          {[
            { k: "기간", v: project.period },
            { k: "역할", v: project.role },
            { k: "팀", v: project.team },
            { k: "상태", v: project.status },
          ]
            .filter((row) => Boolean(row.v))
            .map((row) => (
              <div key={row.k} className="flex flex-col gap-1">
                <dt className="font-mono text-label uppercase text-ink-2">
                  {row.k}
                </dt>
                <dd className="font-mono text-small text-ink">{row.v}</dd>
              </div>
            ))}
        </dl>

        {links.length > 0 ? (
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {links.map(([key, href]) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                className="flex min-h-11 items-center gap-1.5 border-b border-hue-deep text-small text-hue-deep"
              >
                {LINK_LABEL[key] ?? key}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        ) : (
          <p className="mt-8 font-mono text-label uppercase text-ink-2">
            {project.coverWithheld ?? "비공개 프로젝트"}
          </p>
        )}
      </Container>
    </div>
  );
}
