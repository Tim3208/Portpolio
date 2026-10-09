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
 * 스케치 단계라 아이콘 대신 글자로 상태를 보여준다. 세 라벨을 모두 렌더하고
 * 어느 것을 보일지는 CSS 가 <html> 의 속성을 보고 고른다 (globals.css).
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
      className="min-h-11 shrink-0 border border-line px-3 text-sm md:min-h-9"
    >
      <span data-theme-label="auto">테마: 시스템</span>
      <span data-theme-label="light">테마: 라이트</span>
      <span data-theme-label="dark">테마: 다크</span>
    </button>
  );
}
