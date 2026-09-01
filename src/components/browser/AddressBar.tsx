"use client";

import { usePathname } from "next/navigation";

/**
 * 주소창.
 *
 * <input> 이 아니라 <p> 다. 타이핑해도 아무 데도 가지 않는 입력창은
 * 거짓 어포던스이고, 특히 키보드 사용자에게는 함정이 된다.
 *
 * aria-hidden 인 이유: 진짜 주소창이 바로 위에 있다. 스크린리더에게 같은
 * 정보를 두 번 읽힐 이유가 없다. 이 연출은 시각 채널에서만 의미가 있다.
 */
export function AddressBar({ host }: { host: string }) {
  const pathname = usePathname();

  return (
    <p
      aria-hidden="true"
      className="flex min-w-0 flex-1 items-center gap-2 rounded-panel bg-omnibox px-3 py-2 font-mono text-small text-ink-3 select-none"
    >
      <svg
        width="11"
        height="13"
        viewBox="0 0 11 13"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        className="shrink-0"
      >
        <rect x="1.15" y="5.35" width="8.7" height="6.5" rx="1.6" />
        <path d="M3.3 5.3V3.6a2.2 2.2 0 0 1 4.4 0v1.7" />
      </svg>

      <span className="truncate">
        {host}
        <span className="text-ink">{pathname === "/" ? "" : pathname}</span>
      </span>
    </p>
  );
}
