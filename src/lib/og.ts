import { readFile } from "node:fs/promises";
import path from "node:path";

/**
 * OG 이미지 공통 (Blueprint 10 — Cloud Dancer 지면 + 하단 6색 스트립)
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

/** 라이트 테마 토큰과 같은 값. OG 는 언제나 라이트 지면으로 낸다. */
export const OG = {
  paper: "#F0EEE9",
  ink: "#1E1C18",
  ink2: "#57544C",
  ink3: "#6E6A62",
  rule: "#DCD8CF",
  strip: ["#C9D8E2", "#CBD6C4", "#D6CCDA", "#E0D0C6", "#E5CFD2", "#E7DFC2"],
  deep: {
    blue: "#38566B",
    sage: "#4A5B41",
    mauve: "#5A4A63",
    clay: "#6B4A3A",
    blush: "#6E4450",
    butter: "#62522C",
  },
  tint: {
    blue: "#C9D8E2",
    sage: "#CBD6C4",
    mauve: "#D6CCDA",
    clay: "#E0D0C6",
    blush: "#E5CFD2",
    butter: "#E7DFC2",
  },
} as const;
