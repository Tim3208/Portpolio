import { cctvScheduler } from "./cctv-scheduler";
import { eodiya } from "./eodiya";
import { oshiCalendar } from "./oshi-calendar";
import { syuLikelion } from "./syu-likelion";
import type { CaseStudy } from "./types";

export type { Block, CaseSection, CaseStudy } from "./types";

const ALL: readonly CaseStudy[] = [
  syuLikelion,
  eodiya,
  oshiCalendar,
  cctvScheduler,
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return ALL.find((c) => c.slug === slug);
}

export const CASE_STUDY_SLUGS = ALL.map((c) => c.slug);
