import { About } from "@/components/home/About";
import { Hero } from "@/components/home/Hero";

/**
 * 홈 탭 (AGENTS.md §5, §52)
 *
 * 이 파일은 조립만 한다. 서사의 앞 두 장면이 여기 있다 —
 *   불편을 발견한다 → 문제를 정의한다
 * 나머지는 Work · Career · Teaching 탭으로 이어진다.
 *
 * 색면 순서: 순지면(Mocha) → Blush wash
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}
