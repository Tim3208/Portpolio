import { Container } from "@/components/layout/Container";
import { OTHER_PROJECTS, type OtherProject } from "@/data/projects";

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
/**
 * GitHub 마크. 아이콘 파일 하나를 위해 라이브러리를 들이지 않는다.
 * currentColor 를 따르므로 링크의 hover 색 변화를 그대로 받는다.
 */
function GithubMark() {
  return (
    <svg
      viewBox="0 0 16 16"
      width="16"
      height="16"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

/**
 * 기타 프로젝트의 바로가기.
 *
 * 배포된 사이트가 있으면 그쪽을 연다 — 동작하는 화면이 저장소보다 먼저 확인할
 * 것이기 때문이다. 없으면 코드로 보낸다. 두 경우가 한 그리드 안에 섞이므로
 * 같은 크기의 아이콘 자리로 맞추고, 무엇이 열리는지는 레이블로 구분한다.
 */
function ProjectLink({
  name,
  links,
}: {
  name: string;
  links?: OtherProject["links"];
}) {
  const href = links?.service ?? links?.github;
  if (!href) return null;

  const isService = Boolean(links?.service);

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`${name} ${isService ? "사이트 열기" : "GitHub 저장소 열기"}`}
      className="-mt-2 -mr-2 flex size-11 shrink-0 items-center justify-center text-ink-3 transition-colors hover:text-hue-deep"
    >
      {isService ? (
        <span aria-hidden="true" className="text-small">
          ↗
        </span>
      ) : (
        <GithubMark />
      )}
    </a>
  );
}

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

        <ul className="mt-8 grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {OTHER_PROJECTS.map((project) => (
            <li
              key={project.name}
              className="flex flex-col gap-2 border-t border-rule pt-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                  <h3 className="text-h3">{project.name}</h3>
                  {project.fullName ? (
                    <span className="text-small text-ink-3">
                      {project.fullName}
                    </span>
                  ) : null}
                </div>

                <ProjectLink name={project.name} links={project.links} />
              </div>

              <p className="text-body text-ink-2">{project.summary}</p>
              <p className="text-small text-ink-3">
                {project.features.join(" · ")}
              </p>

              {project.role ? (
                <p className="mt-1 text-small text-ink-3">
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
