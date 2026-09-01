import type { Metadata } from "next";

import { Awards } from "@/components/home/Awards";
import { Experience } from "@/components/home/Experience";
import { Skills } from "@/components/home/Skills";

export const metadata: Metadata = {
  title: "Career",
  description: "디자인에서 개발로 온 과정, 수상 이력, 실제로 다루는 기술.",
  alternates: { canonical: "/career" },
  openGraph: {
    title: "Career — 박정우",
    description: "디자인에서 개발로 온 과정, 수상 이력, 실제로 다루는 기술.",
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
