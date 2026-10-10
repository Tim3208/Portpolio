import { ImageResponse } from "next/og";
import { PROFILE } from "@/data/profile";
import { OG, OG_CONTENT_TYPE, OG_PAPER_STYLE, OG_RULE_X, OG_SIZE, ogFonts } from "@/lib/og";

export const alt = "프론트엔드 개발자 박정우 — 동아리 모집·운영 플랫폼과 캠퍼스 지도";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

const PAD_X = OG_RULE_X + 40;

export default async function OpengraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", color: OG.ink, fontFamily: "Pretendard", ...OG_PAPER_STYLE }}>
      <div style={{ display: "flex", flexDirection: "column", padding: `72px 80px 0 ${PAD_X}px` }}>
        <div style={{ display: "flex", fontSize: 30, color: OG.ink2 }}>{PROFILE.role}</div>
        <div style={{ display: "flex", marginTop: 10, fontSize: 92, fontWeight: 700, letterSpacing: -3.5 }}>{PROFILE.name}</div>
        <div style={{ display: "flex", marginTop: 22, fontSize: 30, color: OG.pen }}>{PROFILE.tagline}</div>
      </div>
      <div style={{ display: "flex", gap: 64, margin: `0 80px 64px ${PAD_X}px`, paddingTop: 28, borderTop: `2px solid ${OG.ink}` }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ display: "flex", width: 10, height: 24, background: OG.flag.mocha }} />
            <span style={{ fontSize: 28, fontWeight: 700 }}>syu-likelion</span>
          </div>
          <span style={{ fontSize: 22, color: OG.ink2 }}>동아리 모집·운영 플랫폼</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ display: "flex", width: 10, height: 24, background: OG.flag.sage }} />
            <span style={{ fontSize: 28, fontWeight: 700 }}>삼육대 어디야</span>
          </div>
          <span style={{ fontSize: 22, color: OG.ink2 }}>강의실과 교내 시설을 찾는 지도</span>
        </div>
      </div>
    </div>,
    { ...size, fonts: await ogFonts() },
  );
}
