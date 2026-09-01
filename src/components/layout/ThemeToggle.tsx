"use client";

import { useSyncExternalStore } from "react";

import { THEME_KEY, type Theme } from "@/lib/theme";

type Mode = "auto" | Theme;

/**
 * 테마의 단일 출처는 React state 가 아니라 <html> 의 data-theme 속성이다.
 * 첫 페인트 전에 인라인 스크립트가 이미 그 속성을 세팅해두기 때문에,
 * state 로 따로 들고 있으면 출처가 둘이 되어 어긋난다.
 * 그래서 DOM 을 외부 저장소로 보고 구독한다.
 */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function getSnapshot(): Mode {
  const t = document.documentElement.dataset.theme;
  return t === "light" || t === "dark" ? t : "auto";
}

/** 서버에는 DOM 이 없다. 하이드레이션 시점의 마크업과 맞추기 위한 값. */
function getServerSnapshot(): Mode {
  return "auto";
}

const NEXT: Record<Mode, Mode> = {
  auto: "light",
  light: "dark",
  dark: "auto",
};

const LABEL: Record<Mode, string> = {
  auto: "테마 — 시스템 설정을 따름. 눌러서 라이트로 전환",
  light: "테마 — 라이트. 눌러서 다크로 전환",
  dark: "테마 — 다크. 눌러서 시스템 설정으로 전환",
};

/**
 * 테마 토글 — 시스템 → 라이트 → 다크 → 시스템 순환.
 *
 * 시스템 상태를 빼고 라이트/다크 둘로만 만들지 않는다. 그러면 밤에 OS 를
 * 다크로 바꿔도 이 사이트만 계속 밝은 채로 남는다.
 *
 * 아이콘 세 개를 모두 렌더하고 어느 것을 보일지는 CSS 가 <html> 의 속성을
 * 보고 고른다 (globals.css §7). mounted 플래그로 첫 렌더를 건너뛰는 흔한
 * 방식을 쓰면 토글이 한 프레임 늦게 나타나거나 잘못된 아이콘이 번쩍인다.
 * 하이드레이션을 기다리는 것은 aria-label 하나뿐이고, 그건 시각 정보가
 * 아니라서 한 박자 늦게 맞춰져도 된다.
 */
export function ThemeToggle() {
  const mode = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function cycle() {
    const next = NEXT[mode];
    const root = document.documentElement;

    // DOM 만 바꾼다. MutationObserver 가 그 변화를 보고 리렌더를 일으킨다.
    if (next === "auto") {
      delete root.dataset.theme;
      root.style.colorScheme = "";
      try {
        localStorage.removeItem(THEME_KEY);
      } catch {}
      return;
    }

    root.dataset.theme = next;
    root.style.colorScheme = next;
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={LABEL[mode]}
      className="-mx-2 flex size-11 items-center justify-center rounded-chip px-2 text-ink-2 transition-colors hover:bg-hue-tint hover:text-hue-deep"
    >
      <span data-theme-icon="auto" className="flex">
        <ThemeGlyph>
          {/* 반쪽만 채운 원 — 지금 결정을 OS 에 맡기고 있다는 뜻 */}
          <circle cx="8" cy="8" r="6.25" />
          <path d="M8 1.75a6.25 6.25 0 0 1 0 12.5z" fill="currentColor" stroke="none" />
        </ThemeGlyph>
      </span>

      <span data-theme-icon="light" className="flex">
        <ThemeGlyph>
          <circle cx="8" cy="8" r="3.25" />
          <path d="M8 1v1.6M8 13.4V15M15 8h-1.6M2.6 8H1M12.95 3.05l-1.13 1.13M4.18 11.82l-1.13 1.13M12.95 12.95l-1.13-1.13M4.18 4.18 3.05 3.05" />
        </ThemeGlyph>
      </span>

      <span data-theme-icon="dark" className="flex">
        <ThemeGlyph>
          <path d="M13.5 9.4A5.9 5.9 0 0 1 6.6 2.5a5.9 5.9 0 1 0 6.9 6.9z" />
        </ThemeGlyph>
      </span>
    </button>
  );
}

function ThemeGlyph({ children }: { children: React.ReactNode }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}
