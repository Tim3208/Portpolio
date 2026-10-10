import Link from "next/link";

import { Shot } from "@/components/project/Shot";
import { Placeholder } from "@/components/sketch/Placeholder";
import { coverLabel, type Project } from "@/data/projects";
import { FLAG_CLASS } from "@/lib/hue";

/**
 * 프로젝트를 보여주는 화면들(홈 · /work · 상세)이 공유하는 조각.
 * 모두 비어 있는 필드는 그리지 않는다 — 데이터가 늘거나 줄어도 레이아웃이 따라온다.
 */

/** 본문 링크 — 청색 볼펜 글씨 */
export const LINK =
  "inline-flex min-h-11 items-center font-semibold text-pen underline decoration-pen/40 underline-offset-[0.3em] hover:decoration-pen";

const LINK_LABEL = { service: "서비스", github: "GitHub", figma: "Figma" } as const;

export function ProjectCover({
  project,
  sizes = "(min-width: 80rem) 36rem, (min-width: 48rem) 50vw, 100vw",
  eager = false,
}: {
  project: Project;
  sizes?: string;
  eager?: boolean;
}) {
  if (project.coverWithheld) {
    return <Placeholder kind="도식" label={coverLabel(project)} ratio="3 / 2" />;
  }
  if (project.cover?.src) {
    return (
      <Shot
        src={project.cover.src}
        alt={project.cover.alt}
        ratio={project.cover.aspectRatio ?? "3 / 2"}
        position={project.cover.position}
        sizes={sizes}
        eager={eager}
      />
    );
  }
  return (
    <Placeholder
      label={`확보할 화면 — ${project.name}`}
      description={project.cover?.alt ?? `${project.name} 대표 화면`}
      ratio={project.cover?.aspectRatio ?? "3 / 2"}
    />
  );
}

/** 이름 옆 작은 플래그 — 탭 · 목차 · 이전/다음처럼 이름이 곁에 있는 자리에만 쓴다. */
export function Flag({ project, className = "" }: { project: Pick<Project, "hue">; className?: string }) {
  if (!project.hue) return null;
  return <span aria-hidden="true" className={`inline-block h-3.5 w-2 shrink-0 ${FLAG_CLASS[project.hue]} ${className}`} />;
}

/** 여백에 거는 날짜 — 기간이 없으면 상태를 쓴다 */
export function projectDate(project: Project) {
  return project.period ?? project.status;
}

/** 역할 · 기간 · 팀 · 상태 한 줄. 여백에 이미 건 날짜는 빼고 쓸 수 있다. */
export function ProjectMeta({ project, skipDate = false }: { project: Project; skipDate?: boolean }) {
  const date = skipDate ? projectDate(project) : undefined;
  const items = [project.role, project.period, project.team, project.status].filter(
    (item) => item && item !== date,
  );
  if (!items.length) return null;
  return <p className="text-sm text-ink-3">{items.join(" · ")}</p>;
}

/** 여백 주석: 날짜 */
export function DateNote({ project }: { project: Project }) {
  const date = projectDate(project);
  if (!date) return null;
  return <p className="margin-note">{date}</p>;
}

/**
 * 종이 왼쪽 가장자리에 붙인 인덱스 플래그. 본문 시작선에 붙은 .hang 요소 안에 두면
 * 그 기록의 높이에서 지면 가장자리로 나간다. 이름이 곁에 있으므로 스크린리더에는 숨긴다.
 */
export function EdgeFlag({ project }: { project: Pick<Project, "hue"> }) {
  if (!project.hue) return null;
  return <span aria-hidden="true" className={`edge-flag ${FLAG_CLASS[project.hue]}`} />;
}

/** 청색 볼펜 화살표 — 한 획으로 그은 선과 화살촉 */
export function PenArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 28 12"
      className={`inline-block h-[0.75em] w-[1.75em] shrink-0 overflow-visible text-pen ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1.5 7.2C7.5 5 14 8.6 25 6" />
      <path d="M20.2 2.6 25.4 6l-4.6 3.6" />
    </svg>
  );
}

/**
 * 수치. 읽는 범위는 note 로 덧붙인다.
 * 출처·시점은 상세 페이지에서만 보여준다(withSource). 홈과 목록은 수치만 간결하게 둔다.
 */
export function ProjectMetrics({ project, withSource = false }: { project: Project; withSource?: boolean }) {
  if (!project.metrics?.length) return null;
  return (
    <div className="flex flex-col gap-3">
      <dl className="grid grid-cols-2 gap-x-6 gap-y-5 sm:flex sm:flex-wrap sm:gap-x-0">
        {project.metrics.map((m) => (
          <div key={m.label} className="flex flex-col sm:border-l sm:border-line sm:px-6 sm:first:border-l-0 sm:first:pl-0">
            <dt className="order-2 text-sm leading-snug text-ink-2">{m.label}</dt>
            <dd className="order-1 text-[2rem] leading-tight font-extrabold tracking-[-0.03em] tabular-nums">{m.value}</dd>
            {withSource && (m.source || m.asOf) ? (
              <dd className="order-3 mt-1 font-mono text-xs text-ink-3">
                {[m.source, m.asOf].filter(Boolean).join(" · ")}
              </dd>
            ) : null}
          </div>
        ))}
      </dl>
      {project.metricsNote ? <p className="max-w-measure text-sm text-ink-3">{project.metricsNote}</p> : null}
    </div>
  );
}

/** 상세 페이지 링크(있을 때)와 외부 링크 */
export function ProjectLinks({ project, detail }: { project: Project; detail: boolean }) {
  const external = Object.entries(project.links ?? {});
  if (!detail && external.length === 0) return null;
  return (
    <div className="flex flex-wrap items-center gap-x-6">
      {detail ? (
        <Link href={`/projects/${project.slug}`} className={LINK}>
          {project.name} 작업 과정 읽기
        </Link>
      ) : null}
      {external.map(([key, href]) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex min-h-11 items-center text-sm text-ink-2 underline underline-offset-[0.3em] hover:text-ink"
        >
          {LINK_LABEL[key as keyof typeof LINK_LABEL]} (새 창)
        </a>
      ))}
    </div>
  );
}

/**
 * 라벨이 붙은 한 문단. 출발한 불편 · 판단 · 결과처럼 같은 형식으로 비교할 문장에 쓴다.
 *
 * hang 이면 md 이상에서 라벨이 붉은 여백선 왼쪽 여백에 걸린다 — 문단이 본문 시작선에
 * 붙어 있을 때만 쓴다. 좁은 화면과 hang 이 없을 때는 문단 앞에 붙는다(run-in).
 * date 는 기록의 첫 문단 여백에 함께 거는 날짜, arrow 는 앞 문단에서 이어지는 볼펜 화살표.
 * mark="pen" 이면 그 문장에 볼펜 밑줄을 긋는다 — 기록의 핵심 판단에만 쓴다.
 */
export function Labeled({
  label,
  children,
  mark,
  hang = false,
  arrow = false,
  date,
  className = "",
}: {
  label: string;
  children?: string;
  mark?: "pen";
  hang?: boolean;
  arrow?: boolean;
  date?: string;
  className?: string;
}) {
  if (!children) return null;
  return (
    <p className={`relative max-w-measure ${mark === "pen" ? "pen-scope" : ""} ${className}`}>
      <span className={hang ? "margin-label" : "mr-1 text-sm font-semibold text-pen"}>
        {date ? <span className="margin-date">{date}</span> : null}
        {label}
        {arrow ? <PenArrow className="ml-1.5 align-[-0.05em]" /> : null}
      </span>{" "}
      {mark === "pen" ? <span className="pen-line">{children}</span> : children}
    </p>
  );
}
