import { ImageResponse } from "next/og";
import { PROFILE } from "@/data/profile";
import { OG, OG_CONTENT_TYPE, OG_SIZE, ogFonts } from "@/lib/og";

export const alt = "프론트엔드 개발자 박정우 — 동아리 모집·운영 플랫폼과 캠퍼스 지도";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function OpengraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: OG.paper, color: OG.ink, fontFamily: "Pretendard" }}>
      <div style={{ display: "flex", flexDirection: "column", padding: "64px 80px 0" }}>
        <div style={{ display: "flex", fontSize: 30, color: OG.ink2 }}>{PROFILE.role}</div>
        <div style={{ display: "flex", marginTop: 12, fontSize: 88, fontWeight: 700, letterSpacing: -3 }}>{PROFILE.name}</div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 29 }}>{PROFILE.supporting}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", gap: 64, margin: "0 80px 52px", paddingTop: 28, borderTop: "1px solid " + OG.rule }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <span style={{ fontSize: 28, color: OG.deep.mocha }}>syu-likelion</span>
            <span style={{ fontSize: 22, color: OG.ink2 }}>동아리 모집·운영 플랫폼</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <span style={{ fontSize: 28, color: OG.deep.sage }}>삼육대 어디야</span>
            <span style={{ fontSize: 22, color: OG.ink2 }}>강의실과 교내 시설을 찾는 지도</span>
          </div>
        </div>
        <div style={{ display: "flex", height: 14 }}>
          {OG.strip.map((color) => <div key={color} style={{ flex: 1, background: color }} />)}
        </div>
      </div>
    </div>,
    { ...size, fonts: await ogFonts() },
  );
}
