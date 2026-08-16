import { Container } from "@/components/layout/Container";
import { OTHER_PROJECTS } from "@/data/projects";

/**
 * 기타 프로젝트 — Featured Projects 하단의 접힌 목록
 *
 * 대표 4개의 무게를 흐리지 않으려고 기본 상태는 접어 둔다. 펼치는 동작은
 * 네이티브 details/summary 로 처리한다 — 이것 하나 때문에 섹션 전체를
 * client component 로 내릴 이유가 없고, JS 가 실패해도 열리기 때문이다.
 * 키보드 조작과 스크린리더 상태 안내도 브라우저가 이미 해 준다.
 *
 * 카드로 만들지 않는다 (§48). 대표 프로젝트와 같은 시각적 무게를 갖게 되면
 * 접어 둔 이유가 사라진다. 이름 · 한 줄 · 기능만 hairline 으로 끊는다.
 */
export function OtherProjects() {
  return (
    <Container className="mt-14 md:mt-20">
      <details className="group border-t border-rule">
        <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2.5 pt-5 text-small text-hue-deep [&::-webkit-details-marker]:hidden">
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-open:rotate-90"
          >
            →
          </span>
          <span className="border-b border-hue-deep pb-0.5 group-open:hidden">
            기타 프로젝트 펼쳐보기
          </span>
          <span className="hidden border-b border-hue-deep pb-0.5 group-open:inline">
            기타 프로젝트 접기
          </span>
          <span className="font-mono text-label tabular-nums text-ink-3">
            {OTHER_PROJECTS.length}
          </span>
        </summary>

        <p className="mt-6 max-w-measure text-small text-ink-3">
          Case Study로 정리하지는 않았지만, 팀 또는 개인으로 실제 만들어 본
          것들입니다.
        </p>

        <ul className="mt-8 grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {OTHER_PROJECTS.map((project) => (
            <li
              key={project.name}
              className="flex flex-col gap-2 border-t border-rule pt-4"
            >
              <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                <h3 className="text-h3">{project.name}</h3>
                {project.fullName ? (
                  <span className="text-small text-ink-3">
                    {project.fullName}
                  </span>
                ) : null}
              </div>

              <p className="text-small text-ink-2">{project.summary}</p>
              <p className="text-small text-ink-3">
                {project.features.join(" · ")}
              </p>

              {project.role ? (
                <p className="mt-1 font-mono text-label uppercase text-ink-3">
                  {project.role}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </details>
    </Container>
  );
}
