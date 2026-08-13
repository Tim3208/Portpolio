import { About } from "@/components/home/About";
import { Awards } from "@/components/home/Awards";
import { Contact } from "@/components/home/Contact";
import { Experience } from "@/components/home/Experience";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Hero } from "@/components/home/Hero";
import { Skills } from "@/components/home/Skills";
import { Teaching } from "@/components/home/Teaching";

/**
 * 홈페이지 (AGENTS.md §5, §42 Phase 2)
 *
 * 이 파일은 조립만 한다. 섹션 순서가 곧 사이트의 서사다 (§52):
 *   불편을 발견한다 → 문제를 정의한다 → 실제로 구현한다 → 사람들이 쓴다
 *   → 그 과정을 설명할 수도 있다
 *
 * 색면 순서: 순지면 → Blush → 순지면 → Butter → Sage → 순지면 → Clay → 먹지
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProjects />
      <Experience />
      <Teaching />
      <Awards />
      <Skills />
      <Contact />
    </>
  );
}
