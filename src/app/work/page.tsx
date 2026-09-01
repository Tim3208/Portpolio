import type { Metadata } from "next";

import { FeaturedProjects } from "@/components/home/FeaturedProjects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "직접 발견한 불편에서 시작해 배포까지 마친 프로젝트와 Case Study.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work — 박정우",
    description:
      "직접 발견한 불편에서 시작해 배포까지 마친 프로젝트와 Case Study.",
    url: "/work",
  },
};

export default function WorkPage() {
  return <FeaturedProjects />;
}
