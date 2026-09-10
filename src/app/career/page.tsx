import type { Metadata } from "next";

import { Awards } from "@/components/home/Awards";
import { Experience } from "@/components/home/Experience";
import { Skills } from "@/components/home/Skills";

export const metadata: Metadata = {
  title: "경력",
  description: "디자인 전공부터 프론트엔드 개발까지의 경력, 수상 이력과 프로젝트에서 사용한 기술.",
  alternates: { canonical: "/career" },
  openGraph: {
    title: "경력 — 박정우",
    description: "디자인 전공부터 프론트엔드 개발까지의 경력, 수상 이력과 프로젝트에서 사용한 기술.",
    url: "/career",
  },
};

/** 온 길 → 외부 검증 → 지금 다루는 것 순으로 읽힌다. */
export default function CareerPage() {
  return (
    <>
      <Experience />
      <Awards />
      <Skills />
    </>
  );
}
