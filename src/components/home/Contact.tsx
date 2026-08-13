import { Container } from "@/components/layout/Container";
import { CONTACT_STATEMENT, PROFILE } from "@/data/profile";
import { SECTION } from "@/lib/sections";

/**
 * Contact — full-bleed 반전 블록 (Blueprint 05-08)
 *
 * 사이트에서 유일하게 잉크가 반전되는 자리다. Cloud Dancer 가 지면이 아니라
 * 글자가 되어 Deep Paper 위에 올라온다. 연락처 나열이 아니라 정체성의
 * 재진술이다 (§38). 바로 아래 Footer 와 같은 지면이라 하나의 닫는 블록으로
 * 읽힌다.
 */
export function Contact() {
  return (
    <section
      id={SECTION.contact}
      className="bg-deep-ground pt-section pb-16 md:pt-section-md md:pb-20"
    >
      <Container>
        <p className="font-mono text-label uppercase text-deep-ink-2">
          Contact
        </p>

        <p className="mt-6 max-w-[20ch] text-display text-deep-ink sm:max-w-[24ch]">
          {CONTACT_STATEMENT}
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-deep-ink-2/30 pt-8">
          <a
            href={`mailto:${PROFILE.email}`}
            className="flex min-h-11 items-center gap-2 border-b border-deep-ink-2 text-h3 text-deep-ink transition-colors hover:border-deep-ink"
          >
            {PROFILE.email}
          </a>

          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer noopener"
            className="flex min-h-11 items-center gap-2 border-b border-deep-ink-2 text-h3 text-deep-ink transition-colors hover:border-deep-ink"
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
