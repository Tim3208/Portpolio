import Image from "next/image";
import type { Project } from "@/data/projects";

type ProjectCoverProps = {
  project: Project;
  /** 명시한 비율 → 이미지 데이터 → 기존 3:2 기본값 순서. */
  ratio?: "16/10" | "3/2";
  sizes?: string;
  preload?: boolean;
  className?: string;
};

/** 실제 이미지의 비율과 잘림 위치를 보존한다. docs/design.md#screenshots */
export function ProjectCover({
  project,
  ratio,
  sizes = "(min-width: 1280px) 600px, (min-width: 1024px) 50vw, 100vw",
  preload = false,
  className,
}: ProjectCoverProps) {
  const box = ["relative w-full overflow-hidden rounded-xs bg-hue-tint", className].filter(Boolean).join(" ");
  return (
    <div className={box} style={{ aspectRatio: ratio ?? project.cover?.aspectRatio ?? "3 / 2" }}>
      {project.cover ? (
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          sizes={sizes}
          preload={preload}
          className="object-cover"
          style={{ objectPosition: project.cover.position ?? "center" }}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col justify-end gap-2 p-5">
          <span className="text-h3 text-ink">{project.name}</span>
          <span className="text-small text-ink-2">{project.coverWithheld ?? "스크린샷 준비 중"}</span>
        </div>
      )}
    </div>
  );
}
