import { PROJECTS } from "@/data/projects";

import { agentflow } from "./agentflow";
import { cctvScheduler } from "./cctv-scheduler";
import { eodiya } from "./eodiya";
import { makeAWish } from "./make-a-wish";
import { oshiCalendar } from "./oshi-calendar";
import { syuLikelion } from "./syu-likelion";
import type { CaseStudy } from "./types";

export type { Block, CaseSection, CaseStudy, DemoName } from "./types";

/**
 * 상세 페이지가 있는 프로젝트. 새 Case Study 는 여기에 등록한다.
 * 순서는 등록 순서가 아니라 PROJECTS 의 노출 순서를 따른다.
 */
const ALL: readonly CaseStudy[] = [
  syuLikelion,
  makeAWish,
  eodiya,
  oshiCalendar,
  agentflow,
  cctvScheduler,
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return ALL.find((c) => c.slug === slug);
}

export function hasCaseStudy(slug: string) {
  return ALL.some((c) => c.slug === slug);
}

/** 상세 페이지가 있는 프로젝트만, 노출 순서대로. 이전·다음 이동과 sitemap 이 쓴다. */
export const PROJECTS_WITH_CASE_STUDY = PROJECTS.filter((p) => hasCaseStudy(p.slug));

export const CASE_STUDY_SLUGS = PROJECTS_WITH_CASE_STUDY.map((p) => p.slug);
