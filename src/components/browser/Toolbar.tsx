"use client";

import { useBrowser } from "@/components/browser/BrowserProvider";
import { activeTab, current } from "@/components/browser/tabStore";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { displayAddress, pathOf } from "@/lib/address";
import { NEW_TAB_PATH } from "@/lib/pages";

const BUTTON =
  "min-h-9 shrink-0 border border-line px-3 text-sm disabled:text-ink-2 disabled:opacity-50";

/**
 * 뒤로 · 앞으로 · 새로고침 · 주소창.
 *
 * 뒤로·앞으로는 실제 브라우저 기록이 아니라 활성 탭의 방문 기록을 따른다.
 * 주소창은 실제 입력창이다. 활성 주소가 바뀌면 key 로 다시 만들어
 * 편집 중이던 글자를 버리고 새 주소를 보여준다.
 */
export function Toolbar() {
  const { state, pathname, host, back, forward, reload, submitAddress } =
    useBrowser();

  const tab = activeTab(state);
  const url = tab ? current(tab) : state ? "" : pathname;
  const shown = url ? displayAddress(url, host) : "";
  const isNewTab = pathOf(url) === NEW_TAB_PATH;

  return (
    <div className="flex items-center gap-2 border-y border-line bg-paper px-2 py-1.5">
      <button type="button" onClick={back} disabled={!tab || tab.index === 0} className={BUTTON}>
        뒤로
      </button>
      <button
        type="button"
        onClick={forward}
        disabled={!tab || tab.index === tab.history.length - 1}
        className={BUTTON}
      >
        앞으로
      </button>
      <button type="button" onClick={reload} disabled={!tab} className={BUTTON}>
        새로고침
      </button>

      <form
        className="min-w-0 flex-1"
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
          className="min-h-9 w-full border border-line-strong bg-paper px-3 font-mono text-sm"
        />
      </form>

      <ThemeToggle />
    </div>
  );
}
