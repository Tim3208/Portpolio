"use client";

import type { ReactNode } from "react";

import { useBrowser } from "@/components/browser/BrowserProvider";
import { BackIcon, ForwardIcon, ReloadIcon } from "@/components/browser/icons";
import { activeTab, current } from "@/components/browser/tabStore";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { displayAddress, pathOf } from "@/lib/address";
import { NEW_TAB_PATH } from "@/lib/pages";

const BUTTON =
  "flex size-8 shrink-0 items-center justify-center rounded-chip text-ink-2 transition-colors duration-150 hover:bg-paper-sunk hover:text-ink disabled:pointer-events-none disabled:opacity-40";

/**
 * 도구줄 — 뒤로 · 앞으로 · 새로고침 · 주소창 · 주요 페이지 · 테마.
 *
 * 크롬은 탭줄과 이 줄, 2행이다. 예전 북마크바의 주요 페이지 링크는 서버에서
 * 조립해 children 으로 받아 주소창 오른쪽에 둔다.
 *
 * 뒤로·앞으로는 실제 브라우저 기록이 아니라 활성 탭의 방문 기록을 따른다.
 * 주소창은 실제 입력창이다. 활성 주소가 바뀌면 key 로 다시 만들어
 * 편집 중이던 글자를 버리고 새 주소를 보여준다.
 */
export function Toolbar({ children }: { children?: ReactNode }) {
  const { state, pathname, host, back, forward, reload, submitAddress } = useBrowser();

  const tab = activeTab(state);
  const url = tab ? current(tab) : state ? "" : pathname;
  const shown = url ? displayAddress(url, host) : "";
  const isNewTab = pathOf(url) === NEW_TAB_PATH;

  return (
    <div className="flex h-11 items-center gap-1 border-b border-rule bg-omnibox px-2">
      <button type="button" onClick={back} disabled={!tab || tab.index === 0} aria-label="뒤로" className={BUTTON}>
        <BackIcon />
      </button>
      <button
        type="button"
        onClick={forward}
        disabled={!tab || tab.index === tab.history.length - 1}
        aria-label="앞으로"
        className={BUTTON}
      >
        <ForwardIcon />
      </button>
      <button type="button" onClick={reload} disabled={!tab} aria-label="새로고침" className={BUTTON}>
        <ReloadIcon />
      </button>

      <form
        className="mx-1 min-w-40 flex-1"
        onSubmit={(e) => {
          e.preventDefault();
          const input = e.currentTarget.elements.namedItem("address");
          if (input instanceof HTMLInputElement) submitAddress(input.value);
        }}
      >
        <label htmlFor="address" className="sr-only">
          주소
        </label>
        <input
          key={`${tab?.id ?? "none"}:${url}`}
          id="address"
          name="address"
          defaultValue={shown}
          placeholder="주소를 입력하세요 (예: /work)"
          autoFocus={isNewTab}
          autoComplete="off"
          spellCheck={false}
          onFocus={(e) => e.currentTarget.select()}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              e.currentTarget.value = shown;
              e.currentTarget.blur();
            }
          }}
          className="h-8 w-full rounded-panel bg-chrome px-3 font-mono text-[0.8125rem] text-ink transition-colors duration-150 placeholder:text-ink-2 hover:bg-paper-sunk focus:bg-paper-raised focus-visible:outline-offset-0"
        />
      </form>

      {children}
      <ThemeToggle />
    </div>
  );
}
