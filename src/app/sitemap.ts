import type { MetadataRoute } from "next";

import { CASE_STUDY_SLUGS } from "@/data/caseStudies";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...CASE_STUDY_SLUGS.map((slug) => ({
      url: `${SITE_URL}/projects/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      // 대표 프로젝트를 조금 높게 둔다 (§8)
      priority: slug === "syu-likelion" ? 0.9 : 0.8,
    })),
  ];
}
