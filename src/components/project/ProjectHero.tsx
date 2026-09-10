import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import type { CaseStudy } from "@/data/caseStudies";
import type { Project } from "@/data/projects";

const LINK_LABEL: Record<string, string> = { service: "서비스 바로가기", github: "GitHub", figma: "Figma" };

export function ProjectHero({ project, caseStudy }: { project: Project; caseStudy: CaseStudy }) {
  const links = Object.entries(project.links ?? {}).filter(([, href]) => Boolean(href));
  return (
    <div className="border-b border-rule bg-hue-wash pt-6 pb-10 md:pt-9 md:pb-14">
      <Container>
        <Link href="/work" className="inline-flex min-h-11 items-center gap-2 text-small text-hue-deep"><span aria-hidden="true">←</span> 프로젝트 목록</Link>
        <h1 className="mt-4 text-display">{project.name}</h1>
        <p className="mt-4 max-w-measure text-h3">{caseStudy.headline}</p>
        <p className="mt-4 max-w-measure text-body text-ink-2">{caseStudy.summary}</p>
        <dl className="mt-7 flex flex-wrap gap-x-8 gap-y-4 border-t border-rule-strong pt-5">
          {[{ k: "기간", v: project.period }, { k: "역할", v: project.role }, { k: "팀", v: project.team }, { k: "상태", v: project.status }].filter((row) => Boolean(row.v)).map((row) => (
            <div key={row.k}><dt className="text-small text-ink-3">{row.k}</dt><dd className="mt-1 text-small text-ink">{row.v}</dd></div>
          ))}
        </dl>
        {project.metrics ? (
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-small text-ink-2">
            {project.metrics.map((m) => <li key={m.label}>{m.label} <strong className="font-mono font-medium text-hue-deep">{m.value}</strong></li>)}
          </ul>
        ) : null}
        {links.length ? (
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-1">
            {links.map(([key, href]) => <a key={key} href={href} target="_blank" rel="noreferrer noopener" className="inline-flex min-h-11 items-center gap-2 text-small text-hue-deep underline underline-offset-4">{LINK_LABEL[key] ?? key}<span aria-hidden="true">↗</span></a>)}
          </div>
        ) : <p className="mt-5 text-small text-ink-2">{project.coverWithheld ?? "비공개 프로젝트"}</p>}
        {project.slug === "syu-likelion" ? (
          <figure className="mt-8 max-w-break">
            <div className="relative aspect-16/10 overflow-hidden rounded-xs border border-rule">
              <Image src="/images/projects/syu-likelion.png" alt="syu-likelion의 14기 모집 안내 화면. 지원하기 버튼과 동아리 소개가 보인다." fill sizes="(min-width: 1280px) 1080px, 90vw" className="object-cover object-top" />
            </div>
            <figcaption className="mt-3 text-small text-ink-2">모집 안내에서 지원서를 작성하고, 합격 후에는 같은 계정으로 동아리 활동을 이어갑니다.</figcaption>
          </figure>
        ) : null}
      </Container>
    </div>
  );
}
