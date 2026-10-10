import Image from "next/image";

/**
 * 노트에 붙여 둔 실제 화면. 먹선 하나와 종이가 들뜬 그림자로 지면과 구분한다.
 * 비율과 잘림 위치는 데이터(aspectRatio · position)를 따른다.
 */
export function Shot({
  src,
  alt,
  ratio = "16 / 10",
  position,
  sizes,
  eager = false,
}: {
  src: string;
  alt: string;
  ratio?: string;
  position?: string;
  sizes: string;
  /** 첫 화면의 대표 이미지에만 쓴다 */
  eager?: boolean;
}) {
  return (
    <div className="pasted relative w-full overflow-hidden" style={{ aspectRatio: ratio }}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : undefined}
        className="object-cover"
        style={position ? { objectPosition: position } : undefined}
      />
    </div>
  );
}
