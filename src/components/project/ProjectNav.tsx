import Link from "next/link";

import { HueScope } from "@/components/layout/HueScope";
import { Container } from "@/components/layout/Container";
import type { Project } from "@/data/projects";

/**
 * 이전 · 다음 프로젝트.
 *
 * 각 행이 해당 프로젝트의 색을 입는다. 다음 Case Study 가 무슨 색인지
 * 넘어가기 전에 먼저 보이므로, 이동해도 맥락이 끊기지 않는다.
 */
export function ProjectNav({
  prev,
  next,
}: {
  prev?: Project;
  next?: Project;
}) {
  const rows = [
    { dir: "이전 프로젝트", project: prev },
    { dir: "다음 프로젝트", project: next },
  ].filter((r): r is { dir: string; project: Project } => Boolean(r.project));

  if (rows.length === 0) return null;

  return (
    <nav aria-label="다른 프로젝트">
      {rows.map(({ dir, project }) => (
        <HueScope
          key={project.slug}
          hue={project.hue}
          className="border-t border-rule transition-colors hover:bg-hue-wash"
        >
          <Link href={`/projects/${project.slug}`} className="block py-8">
            <Container>
              <div className="flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="h-10 w-0.75 shrink-0 rounded-xs bg-hue-deep"
                />
                <div className="flex min-w-0 flex-col gap-1">
                  <span className="font-mono text-label uppercase text-ink-3">
                    {dir}
                  </span>
                  <span className="text-h3">{project.name}</span>
                  <span className="text-small text-ink-2">
                    {project.headline}
                  </span>
                </div>
              </div>
            </Container>
          </Link>
        </HueScope>
      ))}
    </nav>
  );
}
