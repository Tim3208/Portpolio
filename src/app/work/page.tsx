import type { Metadata } from "next";

import { FeaturedProjects } from "@/components/home/FeaturedProjects";

export const metadata: Metadata = {
  title: "프로젝트",
  description:
    "동아리 모집·운영 플랫폼, 캠퍼스 지도, 게임 일정 대시보드와 근무 편성 도구의 구현 과정과 담당 역할.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "프로젝트 — 박정우",
    description:
      "동아리 모집·운영 플랫폼, 캠퍼스 지도, 게임 일정 대시보드와 근무 편성 도구의 구현 과정과 담당 역할.",
    url: "/work",
  },
};

export default function WorkPage() {
  return <FeaturedProjects />;
}
