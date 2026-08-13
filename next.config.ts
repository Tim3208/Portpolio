import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // OG 이미지가 node_modules 의 Pretendard otf 를 파일로 읽는다.
  // 정적 분석으로는 잡히지 않는 참조라 배포 번들에 포함되도록 명시한다.
  outputFileTracingIncludes: {
    "/opengraph-image": [
      "./node_modules/pretendard/dist/public/static/Pretendard-Regular.otf",
      "./node_modules/pretendard/dist/public/static/Pretendard-Bold.otf",
    ],
    "/projects/[slug]/opengraph-image": [
      "./node_modules/pretendard/dist/public/static/Pretendard-Regular.otf",
      "./node_modules/pretendard/dist/public/static/Pretendard-Bold.otf",
    ],
  },
};

export default nextConfig;
