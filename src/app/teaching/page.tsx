import type { Metadata } from "next";

import { Teaching } from "@/components/home/Teaching";

export const metadata: Metadata = {
  title: "교육 경험",
  description:
    "부원 27명의 프론트엔드 교육, 학생 8명의 수학 지도, 캄보디아와 베트남에서 진행한 160시간의 IT 교육.",
  alternates: { canonical: "/teaching" },
  openGraph: {
    title: "교육 경험 — 박정우",
    description:
      "부원 27명의 프론트엔드 교육, 학생 8명의 수학 지도, 캄보디아와 베트남에서 진행한 160시간의 IT 교육.",
    url: "/teaching",
  },
};

export default function TeachingPage() {
  return <Teaching />;
}
