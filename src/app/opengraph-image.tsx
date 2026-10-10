import { ImageResponse } from "next/og";
import { PROFILE } from "@/data/profile";
import { FEATURED_PROJECTS } from "@/data/projects";
import { OG, OG_CONTENT_TYPE, OG_SIZE, ogFonts } from "@/lib/og";

export const alt = `${PROFILE.role} ${PROFILE.name} 포트폴리오 — ${PROFILE.headline.join(" ")}`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

/** 홈 HERO 와 같은 위계 — 직무 · 이름, 메인 문구, 성격이 다른 대표 프로젝트들 */
export default async function OpengraphImage() {
  const projects = FEATURED_PROJECTS.filter((p) => p.preview).slice(0, 4);

  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: OG.paper, color: OG.ink, fontFamily: "Pretendard" }}>
      <div style={{ display: "flex", flexDirection: "column", padding: "60px 80px 0" }}>
        <div style={{ display: "flex", fontSize: 28, color: OG.ink2 }}>
          {`Portfolio · ${PROFILE.role} ${PROFILE.name}`}
        </div>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 22, fontSize: 76, fontWeight: 700, letterSpacing: -3, lineHeight: 1.12 }}>
          {PROFILE.headline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", gap: 36, margin: "0 80px 48px", paddingTop: 26, borderTop: "1px solid " + OG.rule }}>
          {projects.map((p) => (
            <div key={p.slug} style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
              <span style={{ fontSize: 26, fontWeight: 700, color: p.hue ? OG.deep[p.hue] : OG.ink }}>{p.name}</span>
              <span style={{ fontSize: 19, color: OG.ink2 }}>{p.preview?.label}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", height: 14 }}>
          {OG.strip.map((color) => <div key={color} style={{ flex: 1, background: color }} />)}
        </div>
      </div>
    </div>,
    { ...size, fonts: await ogFonts() },
  );
}
