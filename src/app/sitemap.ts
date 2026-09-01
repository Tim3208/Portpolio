import type { MetadataRoute } from "next";

import { CASE_STUDY_SLUGS } from "@/data/caseStudies";
import { SITE_URL } from "@/lib/site";
import { TABS } from "@/lib/tabs";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // 탭 목록을 그대로 쓴다. 탭이 늘면 sitemap 도 같이 는다.
    ...TABS.map((tab) => ({
      url: tab.href === "/" ? SITE_URL : `${SITE_URL}${tab.href}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: tab.href === "/" ? 1 : 0.9,
    })),
    ...CASE_STUDY_SLUGS.map((slug) => ({
      url: `${SITE_URL}/projects/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      // 대표 프로젝트를 조금 높게 둔다 (§8)
      priority: slug === "syu-likelion" ? 0.9 : 0.8,
    })),
  ];
}
