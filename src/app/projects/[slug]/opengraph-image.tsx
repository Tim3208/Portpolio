import { ImageResponse } from "next/og";

import { CASE_STUDY_SLUGS, getCaseStudy } from "@/data/caseStudies";
import { PROJECTS } from "@/data/projects";
import { OG, OG_CONTENT_TYPE, OG_SIZE, ogFonts } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "박정우 포트폴리오 Case Study";

export function generateStaticParams() {
  return CASE_STUDY_SLUGS.map((slug) => ({ slug }));
}

export default async function ProjectOpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  const project = PROJECTS.find((p) => p.slug === slug);

  const tint = project ? OG.tint[project.hue] : OG.tint.mocha;
  const deep = project ? OG.deep[project.hue] : OG.deep.mocha;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          // 홈 카드에서 보던 tint 가 그대로 공유 카드 지면이 된다
          background: tint,
          fontFamily: "Pretendard",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", padding: "72px 80px 0" }}>
          {/* satori 는 자식이 둘 이상인 div 에 명시적 display 를 요구한다.
              텍스트와 표현식을 섞지 말고 하나의 문자열로 만든다. */}
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: deep,
            }}
          >
            {`Case Study — ${project?.name ?? slug}`}
          </div>

          <div
            style={{
              marginTop: 30,
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.22,
              letterSpacing: -2.5,
              color: OG.ink,
              maxWidth: 1040,
              // satori 는 전역 CSS 를 상속하지 않는다. 명시하지 않으면
              // 플랫폼으로 같은 단어가 플랫폼 / 으로 로 잘린다.
              wordBreak: "keep-all",
            }}
          >
            {caseStudy?.headline ?? ""}
          </div>

          <div
            style={{
              marginTop: 26,
              fontSize: 24,
              color: OG.ink2,
              maxWidth: 900,
              wordBreak: "keep-all",
            }}
          >
            {project?.subtitle ?? ""}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              padding: "0 80px 46px",
            }}
          >
            <div style={{ display: "flex", gap: 48 }}>
              {(project?.metrics ?? []).map((m) => (
                <div key={m.label} style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: 46, fontWeight: 700, color: deep }}>
                    {m.value}
                  </span>
                  <span style={{ fontSize: 19, color: OG.ink2, marginTop: 4 }}>
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
              <span style={{ fontSize: 24, fontWeight: 700, color: OG.ink }}>박정우</span>
              <span style={{ fontSize: 19, color: OG.ink2, marginTop: 4 }}>
                {project?.period ?? ""}
              </span>
            </div>
          </div>

          <div style={{ display: "flex", height: 14, background: deep }} />
        </div>
      </div>
    ),
    { ...size, fonts: await ogFonts() },
  );
}
