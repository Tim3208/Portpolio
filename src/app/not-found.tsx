import type { Metadata } from "next";
import Link from "next/link";

import { BUTTON } from "@/components/project/ProjectParts";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없음",
  robots: { index: false, follow: true },
};

/**
 * 연출된 404. 없는 경로를 주소창에 입력하거나 링크로 들어오면
 * 창 안에서 브라우저 오류 화면처럼 보여준다. 창과 탭은 그대로 남는다.
 */
export default function NotFound() {
  return (
    <Container className="flex flex-col items-start gap-5 py-20 md:py-28">
      <p className="font-mono text-sm text-ink-2">404</p>
      <h1 className="text-title font-bold">페이지를 찾을 수 없습니다</h1>
      <p className="max-w-measure text-ink-2">
        주소가 바뀌었거나 없는 페이지입니다. 주소창의 경로를 확인하거나 홈에서 다시 시작하세요.
      </p>
      <Link href="/" className={BUTTON}>
        홈으로 돌아가기
      </Link>
    </Container>
  );
}
