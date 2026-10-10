import Image from "next/image";

import { SHOTS, type Note } from "@/data/annotations";

/**
 * 실제 스크린샷 + 화면 주석.
 *
 * 화면에는 다른 브라우저 크롬이나 기기 프레임을 덧씌우지 않는다. 얇은 경계선
 * 하나로 지면과 구분하고, 주석 번호는 화면 위 점과 아래 목록에 같이 붙는다.
 * 목록이 항상 보이므로 점을 누르거나 올리지 않아도 설명이 읽힌다.
 *
 * 잘라 보여주는 자리(aspectRatio · position)에서는 주석 위치를 잘린 범위에 맞춰
 * 다시 계산하고, 잘려서 보이지 않는 주석은 뺀다.
 */
export function Shot({
  src,
  alt,
  aspectRatio,
  position = "center",
  sizes,
  preload = false,
  annotated = true,
  original = true,
  notesClassName = "grid gap-x-8 gap-y-2 md:grid-cols-2",
}: {
  src: string;
  alt: string;
  /** "1205 / 891" 형식. 없으면 원본 비율을 그대로 쓴다 */
  aspectRatio?: string;
  /** object-position. 예: "center top", "center 40%" */
  position?: string;
  sizes: string;
  /** 첫 화면의 대표 이미지에만 */
  preload?: boolean;
  annotated?: boolean;
  /** 원본 크기로 보는 링크. 모바일에서 작은 글자를 확대해 읽는 길이다 */
  original?: boolean;
  notesClassName?: string;
}) {
  const info = SHOTS[src];
  const ratio = aspectRatio ?? (info ? `${info.width} / ${info.height}` : "16 / 10");
  const notes = annotated && info?.notes ? placeNotes(info.notes, info, ratio, position) : [];

  return (
    // 원본보다 크게 늘리면 UI 글자가 흐려지므로 원본 폭을 넘기지 않는다
    <div className="shot flex w-full flex-col gap-3" style={info ? { maxWidth: info.width } : undefined}>
      <div
        className="relative w-full overflow-hidden rounded-xs bg-paper-sunk ring-1 ring-rule-strong"
        style={{ aspectRatio: ratio }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          quality={90}
          preload={preload}
          className="object-cover"
          style={{ objectPosition: position }}
        />
        {notes.map((note, i) => (
          <span
            key={note.text}
            aria-hidden="true"
            data-pin={i + 1}
            className="shot-pin absolute flex size-[1.125rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-hue-deep font-mono text-[0.625rem] font-semibold text-paper ring-2 ring-paper md:size-[1.375rem] md:text-xs"
            style={{ left: `${note.x}%`, top: `${note.y}%` }}
          >
            {i + 1}
          </span>
        ))}
      </div>

      {notes.length ? (
        <ol aria-label="화면 주석" className={notesClassName}>
          {notes.map((note, i) => (
            <li key={note.text} data-note={i + 1} className="flex gap-2.5 text-sm text-ink-2">
              <span
                aria-hidden="true"
                className="shot-note-num mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-hue-deep font-mono text-[0.6875rem] font-semibold text-hue-deep"
              >
                {i + 1}
              </span>
              <span>
                <span className="sr-only">{i + 1}. </span>
                {note.text}
              </span>
            </li>
          ))}
        </ol>
      ) : null}

      {original ? (
        <a
          href={src}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex min-h-11 w-fit items-center text-sm text-ink-2 underline decoration-rule-strong underline-offset-4 transition-colors duration-150 hover:text-ink hover:decoration-hue-deep md:min-h-8"
        >
          원본 크기로 보기 (새 창)
        </a>
      ) : null}
    </div>
  );
}

/** "1205 / 891" → 1.352… */
function parseRatio(value: string) {
  const [w, h] = value.split("/").map((n) => Number.parseFloat(n));
  return w && h ? w / h : 16 / 10;
}

const KEYWORD: Record<string, number> = { left: 0, top: 0, center: 0.5, right: 1, bottom: 1 };

/** object-position 의 가로 · 세로 기준점(0–1). "center 40%" 처럼 한두 값만 다룬다. */
function parsePosition(value: string): [number, number] {
  const parts = value.trim().split(/\s+/).map((p) => (p.endsWith("%") ? Number.parseFloat(p) / 100 : KEYWORD[p] ?? 0.5));
  return [parts[0] ?? 0.5, parts[1] ?? parts[0] ?? 0.5];
}

/**
 * object-fit: cover 로 잘린 틀 안에서 주석의 위치를 다시 잡는다.
 * 틀이 원본보다 가로로 길면 위아래가, 세로로 길면 좌우가 잘린다.
 */
function placeNotes(notes: readonly Note[], size: { width: number; height: number }, ratio: string, position: string) {
  const frame = parseRatio(ratio);
  const image = size.width / size.height;
  const [px, py] = parsePosition(position);

  return notes
    .map((note) => {
      let x = note.x / 100;
      let y = note.y / 100;
      if (image > frame) {
        const visible = frame / image;
        x = (x - (1 - visible) * px) / visible;
      } else if (image < frame) {
        const visible = image / frame;
        y = (y - (1 - visible) * py) / visible;
      }
      return { text: note.text, x: x * 100, y: y * 100 };
    })
    .filter((note) => note.x >= 2 && note.x <= 98 && note.y >= 2 && note.y <= 98);
}
