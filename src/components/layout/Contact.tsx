import { Container } from "@/components/sketch/Container";
import { CONTACT_STATEMENT, PROFILE } from "@/data/profile";
import { SECTION } from "@/lib/sections";

/** 모든 페이지의 마지막 섹션. 이메일과 GitHub 를 같은 자리에 둔다. */
export function Contact() {
  return (
    <section id={SECTION.contact} className="border-t border-line-strong py-12">
      <Container className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">연락처</h2>
        <p className="text-ink-2">{CONTACT_STATEMENT}</p>
        <div className="flex flex-wrap gap-x-8">
          <a href={`mailto:${PROFILE.email}`} className="flex min-h-11 items-center underline underline-offset-4">
            {PROFILE.email}
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer noopener"
            className="flex min-h-11 items-center underline underline-offset-4"
          >
            GitHub (새 창)
          </a>
          {/* TODO: Resume — PDF 확보 후 추가. 그전에는 링크를 만들지 않는다. */}
        </div>
      </Container>
    </section>
  );
}
