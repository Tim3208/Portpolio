import { Container } from "@/components/sketch/Container";

/** 노트 한 면의 아래 칸 — 작성자와 맨 위로 */
export function Footer() {
  return (
    <footer className="border-t border-line-strong">
      <Container className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-4 text-sm text-ink-3">
        <p>© 2026 박정우 — Web / Frontend Developer</p>
        {/* 본문이 창 안에서 스크롤되므로 창 바깥의 #top 이 아니라 본문 시작으로 간다. */}
        <a href="#content" className="flex min-h-11 items-center underline underline-offset-[0.3em] hover:text-pen">
          맨 위로
        </a>
      </Container>
    </footer>
  );
}
