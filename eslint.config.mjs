import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

/** @type {import("eslint").Linter.Config[]} */
const eslintConfig = [
  // OMX 실행 기록과 일회성 검증 스크립트는 앱 소스 검사에서 제외한다.
  { ignores: [".next/**", ".omx/**", "out/**", "build/**", "next-env.d.ts"] },
  ...nextCoreWebVitals,
  ...nextTypeScript,
];

export default eslintConfig;
