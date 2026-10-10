import { Container } from "@/components/sketch/Container";
import { CONTACT_STATEMENT, PROFILE } from "@/data/profile";
import { SECTION } from "@/lib/sections";

/**
 * 모든 페이지의 마지막 섹션 — 노트 끝에 붙여 둔 연락처 쪽지.
 * 이메일과 GitHub 를 같은 자리에 둔다.
 */
export function Contact() {
  return (
    <section id={SECTION.contact} aria-labelledby="contact-title" className="scroll-mt-6 pt-4 pb-16 md:pb-20">
      <Container>
        <div className="pasted flex max-w-[44rem] flex-col gap-4 p-6 md:p-8">
          <h2 id="contact-title" className="text-section font-extrabold tracking-[-0.03em]">
            연락처
          </h2>
          <p className="text-ink-2">{CONTACT_STATEMENT}</p>
          <div className="flex flex-col items-start gap-x-8 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={`mailto:${PROFILE.email}`}
              className="flex min-h-11 max-w-full items-center text-xl font-bold break-all text-pen underline decoration-pen/40 underline-offset-[0.3em] hover:decoration-pen md:text-2xl"
            >
              {PROFILE.email}
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer noopener"
              className="flex min-h-11 items-center font-semibold text-pen underline decoration-pen/40 underline-offset-[0.3em] hover:decoration-pen"
            >
              GitHub (새 창)
            </a>
            {/* TODO: Resume — PDF 확보 후 추가. 그전에는 링크를 만들지 않는다. */}
          </div>
        </div>
      </Container>
    </section>
  );
}
