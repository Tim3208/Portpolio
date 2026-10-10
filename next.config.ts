import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 스크린샷의 UI 글자가 뭉개지지 않도록 화면 주석(Shot)은 품질 90 을 쓴다.
  images: { qualities: [75, 90] },
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
