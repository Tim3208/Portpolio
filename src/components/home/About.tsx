import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ABOUT_PARAGRAPHS } from "@/data/profile";

export function About() {
  return (
    <section className="hue-blush border-t border-rule bg-hue-wash py-12 md:py-16">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.6fr_1fr] lg:gap-16">
          <h2 className="text-h2">디자인을 배우고,<br />화면을 구현해 왔습니다.</h2>
          <div className="max-w-measure">
            <div className="space-y-5 text-body text-ink-2">
              {ABOUT_PARAGRAPHS.map((text) => <p key={text}>{text}</p>)}
            </div>
            <div className="mt-5 flex flex-wrap gap-x-6">
              <Link href="/career" className="inline-flex min-h-11 items-center text-small text-hue-deep underline underline-offset-4">경력과 사용 기술 →</Link>
              <Link href="/teaching" className="inline-flex min-h-11 items-center text-small text-hue-deep underline underline-offset-4">교육과 멘토링 경험 →</Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
