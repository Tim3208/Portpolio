import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ProjectCover } from "@/components/project/ProjectCover";
import { PROFILE } from "@/data/profile";
import { FEATURED_PROJECT } from "@/data/projects";

/** 이름과 실제 담당 화면을 먼저 보여준다. docs/content.md#hero */
export function Hero() {
  const project = FEATURED_PROJECT;
  return (
    <section className="hue-mocha py-10 md:py-16">
      <Container>
        <div className="grid items-center gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <div>
            <h1 className="text-display">
              <span className="mb-3 block text-h3 font-normal text-ink-2">{PROFILE.role} </span>
              {PROFILE.name}
            </h1>
            <div className="mt-6 max-w-measure space-y-3 text-body text-ink-2">
              <p>{PROFILE.supporting}</p>
              <p>{PROFILE.experience}</p>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2">
              <Link href={"/projects/" + project.slug} className="inline-flex min-h-11 items-center rounded-xs bg-hue-deep px-4 text-small text-paper transition-opacity hover:opacity-90">
                대표 프로젝트 읽기 <span aria-hidden="true" className="ml-2">↗</span>
              </Link>
              <Link href="/work" className="inline-flex min-h-11 items-center text-small text-hue-deep underline underline-offset-4">전체 프로젝트</Link>
              <a href={PROFILE.github} target="_blank" rel="noreferrer noopener" className="inline-flex min-h-11 items-center text-small text-ink-2 underline underline-offset-4">GitHub</a>
            </div>
          </div>
          <figure className="min-w-0">
            <ProjectCover project={project} preload sizes="(min-width: 1280px) 590px, (min-width: 1024px) 48vw, 100vw" />
            <figcaption className="mt-4">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <Link href={"/projects/" + project.slug} className="inline-flex min-h-11 items-center text-h3 text-ink underline decoration-rule-strong underline-offset-4">{project.name}</Link>
                <span className="text-small text-ink-2">지원서·운영진 평가 화면 구현</span>
              </div>
              <p className="text-small text-ink-2">지원자 한 명의 답변과 점수·코멘트를 탭으로 전환하며 확인합니다.</p>
              <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-small text-ink-2">
                {project.metrics?.map((metric) => (
                  <li key={metric.label}>{metric.label} <strong className="font-mono font-medium text-hue-deep">{metric.value}</strong></li>
                ))}
              </ul>
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
