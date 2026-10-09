import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없음",
  robots: { index: false, follow: true },
};

/**
 * 없는 경로를 받는 자리.
 *
 * 이 라우트가 없으면 클라이언트 라우터가 모르는 경로로 이동할 때 Next 가
 * 문서 전체를 다시 불러온다. 창 안 주소창에서 없는 경로를 입력하면 창과
 * 탭까지 깜빡이게 된다. 여기서 notFound() 를 던지면 같은 레이아웃 안에서
 * not-found.tsx 만 바뀐다. 구체적인 라우트가 항상 이 catch-all 보다 우선한다.
 */
export default function MissingPage() {
  notFound();
}
