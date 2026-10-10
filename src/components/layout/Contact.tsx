import { Container } from "@/components/ui/Container";
import { CONTACT_STATEMENT, PROFILE } from "@/data/profile";
import { SECTION } from "@/lib/sections";

const LINK =
  "flex min-h-11 w-fit items-center underline decoration-deep-ink-2 underline-offset-4 transition-colors duration-150 hover:decoration-deep-ink";

/**
 * 모든 페이지의 마지막 섹션. 이메일과 GitHub 를 같은 자리에 둔다.
 * deep-ground 반전 블록이라 글자는 테마와 무관한 deep-ink 상수를 쓴다.
 */
export function Contact() {
  return (
    <section id={SECTION.contact} className="scroll-mt-6 bg-deep-ground text-deep-ink">
      <Container className="grid gap-6 py-14 md:py-20 lg:grid-cols-12 lg:gap-12">
        <div className="flex flex-col gap-3 lg:col-span-5">
          <h2 className="text-title font-bold">연락처</h2>
          <p className="text-deep-ink-2">{CONTACT_STATEMENT}</p>
        </div>
        <div className="flex flex-col gap-1 lg:col-span-7">
          <a href={`mailto:${PROFILE.email}`} className={`${LINK} text-xl font-semibold break-all md:text-2xl`}>
            {PROFILE.email}
          </a>
          <a href={PROFILE.github} target="_blank" rel="noreferrer noopener" className={`${LINK} text-deep-ink-2 hover:text-deep-ink`}>
            GitHub (새 창)
          </a>
          {/* TODO: Resume — PDF 확보 후 추가. 그전에는 링크를 만들지 않는다. */}
        </div>
      </Container>
    </section>
  );
}
