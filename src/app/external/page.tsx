import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/sketch/Container";

export const metadata: Metadata = {
  title: "열 수 없는 주소",
  robots: { index: false, follow: false },
};

type Props = { searchParams: Promise<{ to?: string | string[] }> };

/**
 * 주소창에 사이트 밖 주소나 검색어를 입력했을 때의 안내.
 * 입력한 글자는 화면에 텍스트로만 보여주고, 링크로 만들지 않는다.
 */
export default async function ExternalPage({ searchParams }: Props) {
  const { to } = await searchParams;
  const address = Array.isArray(to) ? to[0] : to;

  return (
    <Container className="flex flex-col items-start gap-5 pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="hang flex flex-col">
        <p className="margin-note font-sans">이 창 밖의 주소</p>
        <h1 className="text-title max-w-[44rem] font-extrabold tracking-[-0.04em]">
          이 창에서는 이 사이트 안의 페이지만 열 수 있습니다
        </h1>
      </div>
      {address ? (
        <p className="max-w-full border-b border-line-strong px-1 py-2 font-mono text-sm break-all">
          <span className="highlight">{address}</span>
        </p>
      ) : null}
      <p className="max-w-measure text-ink-2">
        주소창에 /work 처럼 이 사이트의 경로를 입력하거나, 홈에서 다시 시작하세요.
      </p>
      <Link
        href="/"
        className="flex min-h-11 items-center border border-line-strong bg-paper-raised px-5 font-semibold hover:border-pen hover:text-pen"
      >
        홈으로 돌아가기
      </Link>
    </Container>
  );
}
