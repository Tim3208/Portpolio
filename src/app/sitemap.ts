import type { MetadataRoute } from "next";

import { CASE_STUDY_SLUGS } from "@/data/caseStudies";
import { PAGES } from "@/lib/pages";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // 주요 페이지 목록을 그대로 쓴다. 새 탭·외부 안내 같은 연출용 경로는 넣지 않는다.
    ...PAGES.map((page) => ({
      url: page.href === "/" ? SITE_URL : `${SITE_URL}${page.href}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: page.href === "/" ? 1 : 0.9,
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
