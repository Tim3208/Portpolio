import { Container } from "@/components/layout/Container";
import { PROFILE } from "@/data/profile";
import { GITHUB_URL } from "@/lib/sections";

/** 사이트를 닫는 색표본 스트립. 여섯 색이 한 화면에 모이는 유일한 자리다 (§28.4). */
const STRIP = [
  "bg-strip-mocha",
  "bg-strip-terracotta",
  "bg-strip-wheat",
  "bg-strip-sage",
  "bg-strip-plum",
  "bg-strip-blush",
];

/**
 * 사이트 푸터.
 *
 * Contact 섹션(Phase 2)과 같은 deep-ground 위에 놓여 하나의 닫는 블록으로
 * 읽히게 한다. 여기서는 Cloud Dancer 가 지면이 아니라 잉크다.
 */
export function Footer() {
  return (
    // 창의 마지막 요소라 하단 두 모서리를 여기서 닫는다. 색표본 스트립이
    // 모서리 밖으로 삐져나오지 않도록 overflow-clip 이 함께 필요하다.
    // (창 셸 자체에는 overflow 를 걸 수 없다 — BrowserFrame 주석 참고)
    <footer className="overflow-clip rounded-b-window bg-deep-ground">
      <Container className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 py-10">
        <p className="font-mono text-small text-deep-ink-2">
          © 2026 박정우 — Web / Frontend Developer
        </p>

        <nav aria-label="외부 링크" className="flex items-center gap-6">
          <a
            href={`mailto:${PROFILE.email}`}
            className="flex min-h-11 items-center border-b border-deep-ink-2 text-small text-deep-ink transition-colors hover:border-deep-ink"
          >
            Email
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="flex min-h-11 items-center border-b border-deep-ink-2 text-small text-deep-ink transition-colors hover:border-deep-ink"
          >
            GitHub
          </a>
          {/* TODO: Resume — PDF 확보 후 추가 (AGENTS.md §38) */}
          <a
            href="#top"
            className="flex min-h-11 items-center text-small text-deep-ink-2 transition-colors hover:text-deep-ink"
          >
            맨 위로 ↑
          </a>
        </nav>
      </Container>

      <div className="flex h-2" aria-hidden="true">
        {STRIP.map((cls) => (
          <div key={cls} className={`flex-1 ${cls}`} />
        ))}
      </div>
    </footer>
  );
}
