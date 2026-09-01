import { ImageResponse } from "next/og";

import { HERO_METRICS, PROFILE } from "@/data/profile";
import { OG, OG_CONTENT_TYPE, OG_SIZE, ogFonts } from "@/lib/og";

export const alt = "박정우 — 불편을 발견하고 웹으로 해결합니다";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: OG.paper,
          fontFamily: "Pretendard",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", padding: "72px 80px 0" }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: OG.ink3,
            }}
          >
            {PROFILE.role}
          </div>

          <div
            style={{
              marginTop: 28,
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.18,
              letterSpacing: -3,
              color: OG.ink,
              display: "flex",
              flexDirection: "column",
              wordBreak: "keep-all",
            }}
          >
            <div style={{ display: "flex" }}>{PROFILE.headline[0]}</div>
            <div style={{ display: "flex", gap: 20 }}>
              <span style={{ color: OG.deep.mocha }}>웹으로</span>
              <span>해결합니다.</span>
            </div>
          </div>

          <div style={{ marginTop: 30, fontSize: 28, color: OG.ink2 }}>
            {PROFILE.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              gap: 56,
              margin: "0 80px 44px",
              paddingTop: 32,
              borderTop: `1px solid ${OG.rule}`,
            }}
          >
            {HERO_METRICS.map((m) => (
              <div key={m.label} style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: 44, fontWeight: 700, color: OG.deep.mocha }}>
                  {m.value}
                </span>
                <span style={{ fontSize: 19, color: OG.ink3, marginTop: 4 }}>
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {/* 사이트를 닫는 색표본 스트립과 같은 요소 */}
          <div style={{ display: "flex", height: 14 }}>
            {OG.strip.map((c) => (
              <div key={c} style={{ flex: 1, background: c }} />
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: await ogFonts() },
  );
}
