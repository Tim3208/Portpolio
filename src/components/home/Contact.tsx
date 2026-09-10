import { Container } from "@/components/layout/Container";
import { CONTACT_STATEMENT, PROFILE } from "@/data/profile";
import { SECTION } from "@/lib/sections";

/** 모든 라우트에서 같은 이메일과 GitHub 연락처를 제공한다. */
export function Contact() {
  return (
    <section
      id={SECTION.contact}
      className="bg-deep-ground py-12 md:py-16"
    >
      <Container>
        <h2 className="text-h2 text-deep-ink">연락처</h2>

        <p className="mt-3 max-w-measure text-body text-deep-ink-2">
          {CONTACT_STATEMENT}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-deep-ink-2/30 pt-5">
          <a
            href={`mailto:${PROFILE.email}`}
            className="flex min-h-11 max-w-full items-center gap-2 border-b border-deep-ink-2 text-body text-deep-ink transition-colors hover:border-deep-ink"
          >
            {PROFILE.email}
          </a>

          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer noopener"
            className="flex min-h-11 items-center gap-2 border-b border-deep-ink-2 text-body text-deep-ink transition-colors hover:border-deep-ink"
          >
            GitHub
            <span aria-hidden="true" className="text-small">
              ↗
            </span>
          </a>

          {/*
            TODO: Resume. PDF 파일이 확보되면 추가한다 (§38).
            그때까지는 링크 자체를 두지 않는다 — 비어 있는 링크가 더 나쁘다.
          */}
        </div>
      </Container>
    </section>
  );
}
