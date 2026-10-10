import Image from "next/image";
import Link from "next/link";

import { hasCaseStudy } from "@/data/caseStudies";
import type { Project } from "@/data/projects";
import { HUE_CLASS } from "@/lib/hue";

/**
 * HERO 의 프로젝트 목록 — 성격이 다른 대표 프로젝트를 같은 크기로 나란히 둔다.
 *
 * 어떤 웹 서비스를 만들었는지 여러 사례로 보여주는 자리라, 칸마다 실제 화면의
 * 한 부분과 이름 · 서비스 종류만 둔다. 문제 · 기술 · 성과는 바로 아래 대표 프로젝트
 * 소개가 맡는다. 칸 전체가 Case Study 로 가는 링크 하나다.
 *
 * 쉴 때는 모든 칸이 같은 무게다. 포인터나 키보드 포커스가 닿은 칸 하나만 그
 * 프로젝트 색으로 선택되고 화면이 살짝 다가오며, 나머지는 물러난다(globals.css
 * "HERO 프로젝트 목록"). 정보는 모두 항상 보이므로 터치에서도 같다.
 */
export function ProjectIndex({ projects }: { projects: readonly Project[] }) {
  const items = projects.filter((p) => p.preview).slice(0, 4);
  if (!items.length) return null;

  return (
    <ul className="hero-index grid grid-cols-2 gap-x-3 gap-y-6 md:gap-x-4 lg:grid-cols-4">
      {items.map((project) => (
        <li key={project.slug} className="min-w-0">
          <IndexItem project={project} />
        </li>
      ))}
    </ul>
  );
}

function IndexItem({ project }: { project: Project }) {
  const preview = project.preview;
  if (!preview) return null;
  const href = hasCaseStudy(project.slug) ? `/projects/${project.slug}` : "/work";

  return (
    <Link
      href={href}
      className={`hero-tile ${project.hue ? HUE_CLASS[project.hue] : ""} flex flex-col gap-3 rounded-xs focus-visible:outline-offset-4`}
    >
      {/* 첫 화면 안에 이름까지 보이도록, 넓은 화면에서는 창 높이에서 크롬 · 문구 높이를 뺀 만큼만 키운다 */}
      <span className="hero-tile-media relative block aspect-[3/4] overflow-hidden rounded-xs bg-paper-sunk md:aspect-square lg:aspect-[4/5] lg:max-h-[calc(100dvh-32rem)] lg:min-h-64">
        {preview.src ? (
          // 이름과 서비스 종류가 링크의 글자로 함께 있으므로 화면은 장식으로 둔다
          <Image
            src={preview.src}
            alt=""
            fill
            loading="eager"
            quality={90}
            sizes="(min-width: 1024px) 24vw, 48vw"
            className="hero-tile-img object-cover"
            style={{ objectPosition: preview.position ?? "center" }}
          />
        ) : (
          <span className="hero-tile-pending absolute inset-0 flex flex-col justify-between rounded-xs border border-dashed border-rule-strong p-4">
            <span className="text-xs font-semibold text-ink-2">화면 준비 중</span>
            <span aria-hidden="true" className="flex flex-col gap-1">
              <span className="text-2xl font-bold tracking-tight text-ink-2 md:text-3xl">{project.name}</span>
              {project.status ? <span className="text-sm text-ink-2">{project.status}</span> : null}
            </span>
          </span>
        )}
        <span
          aria-hidden="true"
          className="hero-tile-cue absolute bottom-3 left-3 hidden rounded-chip bg-hue-deep px-2.5 py-1 text-xs font-semibold text-paper md:block"
        >
          작업 과정 보기 →
        </span>
      </span>
      <span className="flex flex-col gap-0.5">
        <span className="hero-tile-name w-fit rounded-[2px] text-base font-bold tracking-tight md:text-lg">
          {project.name}
        </span>
        <span className="text-sm text-ink-2">{preview.label}</span>
      </span>
    </Link>
  );
}
