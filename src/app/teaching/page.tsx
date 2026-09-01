import type { Metadata } from "next";

import { Teaching } from "@/components/home/Teaching";

export const metadata: Metadata = {
  title: "Teaching",
  description:
    "학생 · 디자이너 · 백엔드에게 같은 내용을 각각 다르게 설명해 온 경험.",
  alternates: { canonical: "/teaching" },
  openGraph: {
    title: "Teaching — 박정우",
    description:
      "학생 · 디자이너 · 백엔드에게 같은 내용을 각각 다르게 설명해 온 경험.",
    url: "/teaching",
  },
};

export default function TeachingPage() {
  return <Teaching />;
}
