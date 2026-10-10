import { Container } from "@/components/ui/Container";
import { SmoothAnchor } from "@/components/ui/SmoothAnchor";

/** 여섯 색이 한곳에 모이는 예외 — Contact 하단 색표본. OG 이미지의 띠와 같은 값이다. */
const STRIP = [
  "bg-strip-mocha",
  "bg-strip-terracotta",
  "bg-strip-wheat",
  "bg-strip-sage",
  "bg-strip-plum",
  "bg-strip-blush",
] as const;

export function Footer() {
  return (
    <footer className="bg-deep-ground text-deep-ink-2">
      <Container className="flex flex-wrap items-center justify-between gap-4 border-t border-deep-ink-2/25 py-5 text-sm">
        <p>© 2026 박정우 — Web / Frontend Developer</p>
        {/* 본문이 창 안에서 스크롤되므로 창 바깥의 #top 이 아니라 본문 시작으로 간다. */}
        <SmoothAnchor
          href="#content"
          className="flex min-h-11 items-center underline decoration-deep-ink-2 underline-offset-4 transition-colors duration-150 hover:text-deep-ink"
        >
          맨 위로
        </SmoothAnchor>
      </Container>
      <div aria-hidden="true" className="flex h-1.5">
        {STRIP.map((color) => (
          <span key={color} className={`flex-1 ${color}`} />
        ))}
      </div>
    </footer>
  );
}
