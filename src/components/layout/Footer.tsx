import { Container } from "@/components/sketch/Container";

export function Footer() {
  return (
    <footer className="border-t border-line py-6">
      <Container className="flex flex-wrap items-center justify-between gap-4 text-sm text-ink-2">
        <p>© 2026 박정우 — Web / Frontend Developer</p>
        {/* 본문이 창 안에서 스크롤되므로 창 바깥의 #top 이 아니라 본문 시작으로 간다. */}
        <a href="#content" className="flex min-h-11 items-center underline underline-offset-4">
          맨 위로
        </a>
      </Container>
    </footer>
  );
}
