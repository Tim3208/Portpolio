import Link from "next/link";

import { Placeholder } from "@/components/sketch/Placeholder";
import { coverLabel, type Project } from "@/data/projects";

/**
 * 프로젝트를 보여주는 화면들(홈 · /work · 상세)이 공유하는 조각.
 * 모두 비어 있는 필드는 그리지 않는다 — 데이터가 늘거나 줄어도 레이아웃이 따라온다.
 */

export const LINK = "inline-flex min-h-11 items-center underline underline-offset-4";

const LINK_LABEL = { service: "서비스", github: "GitHub", figma: "Figma" } as const;

export function ProjectCover({ project }: { project: Project }) {
  if (project.coverWithheld) {
    return <Placeholder kind="도식" label={coverLabel(project)} ratio="3 / 2" />;
  }
  return (
    <Placeholder
      label={project.cover?.src ? coverLabel(project) : `확보할 화면 — ${project.name}`}
      description={project.cover?.alt ?? `${project.name} 대표 화면`}
      ratio={project.cover?.aspectRatio ?? "3 / 2"}
    />
  );
}

/** 역할 · 기간 · 팀 · 상태 한 줄 */
export function ProjectMeta({ project }: { project: Project }) {
  const items = [project.role, project.period, project.team, project.status].filter(Boolean);
  return <p className="text-sm text-ink-2">{items.join(" · ")}</p>;
}

/**
 * 수치. 읽는 범위는 note 로 덧붙인다.
 * 출처·시점은 상세 페이지에서만 보여준다(withSource). 홈과 목록은 수치만 간결하게 둔다.
 */
export function ProjectMetrics({ project, withSource = false }: { project: Project; withSource?: boolean }) {
  if (!project.metrics?.length) return null;
  return (
    <div className="flex flex-col gap-2">
      <dl className="flex flex-wrap gap-x-10 gap-y-4">
        {project.metrics.map((m) => (
          <div key={m.label} className="flex flex-col">
            <dt className="order-2 text-sm text-ink-2">{m.label}</dt>
            <dd className="order-1 font-mono text-3xl tabular-nums">{m.value}</dd>
            {withSource && (m.source || m.asOf) ? (
              <dd className="order-3 text-xs text-ink-2">
                {[m.source, m.asOf].filter(Boolean).join(" · ")}
              </dd>
            ) : null}
          </div>
        ))}
      </dl>
      {project.metricsNote ? <p className="max-w-measure text-sm text-ink-2">{project.metricsNote}</p> : null}
    </div>
  );
}

/** 상세 페이지 링크(있을 때)와 외부 링크 */
export function ProjectLinks({ project, detail }: { project: Project; detail: boolean }) {
  const external = Object.entries(project.links ?? {});
  if (!detail && external.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-x-6">
      {detail ? (
        <Link href={`/projects/${project.slug}`} className={LINK}>
          {project.name} 작업 과정 읽기
        </Link>
      ) : null}
      {external.map(([key, href]) => (
        <a key={key} href={href} target="_blank" rel="noreferrer noopener" className={LINK}>
          {LINK_LABEL[key as keyof typeof LINK_LABEL]} (새 창)
        </a>
      ))}
    </div>
  );
}

/** 라벨이 붙은 한 줄. 출발한 불편 · 판단 · 결과처럼 같은 형식으로 비교할 문장에 쓴다. */
export function Labeled({ label, children }: { label: string; children?: string }) {
  if (!children) return null;
  return (
    <div className="flex flex-col gap-0.5">
      <p className="text-sm text-ink-2">{label}</p>
      <p>{children}</p>
    </div>
  );
}
