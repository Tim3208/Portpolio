import Image from "next/image";

import type { Project } from "@/data/projects";

type ProjectCoverProps = {
  project: Project;
  /** 대표 프로젝트는 16:10, 보조 카드는 3:2 로 조금 낮게 */
  ratio?: "16/10" | "3/2";
  className?: string;
};

/**
 * 프로젝트 대표 이미지.
 *
 * 스크린샷이 없으면 목업으로 채우지 않고 (§39) 해당 프로젝트의 tint 면과
 * 사유를 그대로 보여준다. CCTV Scheduler 는 보안상 영구적으로 비공개이고,
 * 나머지는 실제 서비스 캡처를 넣기 전까지의 자리다.
 */
export function ProjectCover({
  project,
  ratio = "3/2",
  className,
}: ProjectCoverProps) {
  const box = [
    "relative w-full overflow-hidden rounded-xs bg-hue-tint",
    ratio === "16/10" ? "aspect-16/10" : "aspect-3/2",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (project.cover) {
    const { src, alt, position } = project.cover;
    return (
      <div className={box}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={
            ratio === "16/10"
              ? "(min-width: 1024px) 46vw, 100vw"
              : "(min-width: 768px) 30vw, 100vw"
          }
          className="object-cover"
          // 이미지마다 살릴 영역이 달라 데이터에서 받는다. 색이 아니므로
          // 하드코딩 금지 규칙(§28.4)의 대상이 아니다.
          style={{ objectPosition: position ?? "center" }}
        />
      </div>
    );
  }

  return (
    <div className={box}>
      <div className="absolute inset-0 flex flex-col justify-end gap-1 p-5">
        <span className="text-h3 text-ink">{project.name}</span>
        <span className="font-mono text-label uppercase text-hue-deep">
          {project.coverWithheld ?? "스크린샷 준비 중"}
        </span>
      </div>
    </div>
  );
}
