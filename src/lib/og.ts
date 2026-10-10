import { readFile } from "node:fs/promises";
import path from "node:path";

/**
 * OG 이미지 공통 — 사이트와 같은 연구 노트 지면(방안지 · 붉은 여백선 · 청색 볼펜)
 *
 * satori 는 woff2 를 읽지 못하므로 Pretendard 의 otf 를 쓴다. OG 라우트는
 * 전부 빌드 타임에 정적 생성되므로 폰트를 읽는 비용은 빌드에서 한 번 끝난다.
 */

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

/**
 * 폰트는 파일로 읽는다. import 나 require.resolve 로 잡으면 Turbopack 이
 * 이걸 모듈 자산으로 번들하려다 실패한다 (non-ecmascript placeable asset).
 * 이 경로는 빌드 타임에만 읽히고, 배포 번들 포함 여부는
 * next.config.ts 의 outputFileTracingIncludes 가 보장한다.
 */
async function loadPretendard(weight: "Regular" | "Bold"): Promise<ArrayBuffer> {
  const file = path.join(
    process.cwd(),
    "node_modules/pretendard/dist/public/static",
    `Pretendard-${weight}.otf`,
  );
  const buf = await readFile(file);
  return Uint8Array.from(buf).buffer;
}

export async function ogFonts() {
  const [regular, bold] = await Promise.all([
    loadPretendard("Regular"),
    loadPretendard("Bold"),
  ]);
  return [
    { name: "Pretendard", data: regular, weight: 400 as const, style: "normal" as const },
    { name: "Pretendard", data: bold, weight: 700 as const, style: "normal" as const },
  ];
}

/** 라이트 테마 토큰과 같은 값 (globals.css). OG 는 언제나 라이트 지면으로 낸다. */
export const OG = {
  paper: "#F3F5F7",
  ink: "#1A1D24",
  ink2: "#4E5563",
  ink3: "#636B79",
  rule: "#C3CBD6",
  pen: "#1F3FAE",
  penSoft: "rgba(31, 63, 174, 0.2)",
  margin: "#D9342B",
  flag: {
    mocha: "#F0A443",
    terracotta: "#EE7458",
    wheat: "#EFD04E",
    sage: "#86C788",
    plum: "#AE94E2",
    blush: "#F193B8",
  },
} as const;

/** 붉은 여백선의 가로 위치. 본문은 이 선에서 40px 오른쪽에서 시작한다. */
export const OG_RULE_X = 150;

/**
 * 방안지 격자 + 붉은 여백선. satori 의 여러 겹 linear-gradient 배경으로 그린다.
 * 격자는 여백선에서 시작해 사이트 지면과 같은 리듬(24px, 5칸마다 굵은 선)을 쓴다.
 */
export const OG_PAPER_STYLE = {
  backgroundColor: OG.paper,
  backgroundImage: [
    `linear-gradient(90deg, transparent ${OG_RULE_X - 1}px, ${OG.margin} ${OG_RULE_X - 1}px, ${OG.margin} ${OG_RULE_X + 1}px, transparent ${OG_RULE_X + 1}px)`,
    "linear-gradient(#CCD5E1 1px, transparent 1px)",
    "linear-gradient(90deg, #CCD5E1 1px, transparent 1px)",
    "linear-gradient(#E0E6EE 1px, transparent 1px)",
    "linear-gradient(90deg, #E0E6EE 1px, transparent 1px)",
  ].join(", "),
  backgroundSize: "100% 100%, 120px 120px, 120px 120px, 24px 24px, 24px 24px",
  backgroundPosition: `0 0, ${OG_RULE_X}px 0, ${OG_RULE_X}px 0, ${OG_RULE_X}px 0, ${OG_RULE_X}px 0`,
} as const;
