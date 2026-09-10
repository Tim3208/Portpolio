"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import { TabPending } from "@/components/browser/TabPending";
import { HUE_CLASS } from "@/lib/hue";
import type { Tab } from "@/lib/tabs";

export type ProjectTab = { label: string; hueClass: string };

const BASE =
  "relative flex min-h-11 shrink-0 snap-start items-center gap-2 rounded-panel px-3 text-small transition-colors";

/** 활성 탭은 창 본문과 같은 면색을 입어 아래 지면과 이어져 보인다. */
const ACTIVE = "bg-paper text-ink";
const IDLE = "text-ink-2 hover:bg-paper/55 hover:text-ink";

/**
 * 브라우저 탭 스트립.
 *
 * role="tab" / role="tablist" 를 쓰지 않는다. ARIA 의 탭 패턴은 화살표키
 * 로빙 포커스와 tabpanel 을 함께 요구하는데, 이것들은 진짜 페이지 링크다.
 * 링크를 링크라고 말하는 편이 정확하고, 새 탭으로 열기 같은 브라우저 기본
 * 동작도 그대로 살아난다.
 *
 * Case Study 에 들어가면 다섯 번째 탭이 열린 것처럼 보인다. 이때 Work 는
 * 비활성이 되고, 닫기(×)는 버튼이 아니라 /work 로 가는 링크다 — 실제로
 * 하는 일이 그것이기 때문이다.
 */
export function TabStrip({
  tabs,
  projectTabs,
}: {
  tabs: readonly Tab[];
  projectTabs: Record<string, ProjectTab>;
}) {
  const pathname = usePathname();
  const listRef = useRef<HTMLUListElement>(null);

  const slug = pathname.startsWith("/projects/")
    ? pathname.split("/")[2]
    : undefined;
  const openProject = slug ? projectTabs[slug] : undefined;

  // 좁은 화면에서는 탭이 가로로 넘친다. 활성 탭이 잘려 있으면 지금 어디에
  // 있는지 알 수 없으므로 보이는 자리로 끌어온다.
  useEffect(() => {
    const list = listRef.current;
    const active = list?.querySelector("[data-active]");
    if (!list || !active) return;

    // scrollIntoView는 키보드 탐색 시작점도 옮긴다. 목록의 가로 스크롤만
    // 조정해 첫 Tab으로 본문 건너뛰기 링크에 접근할 수 있게 한다.
    const itemRect = active.getBoundingClientRect();
    const listRect = list.getBoundingClientRect();
    if (itemRect.left < listRect.left) {
      list.scrollBy({ left: itemRect.left - listRect.left });
    } else if (itemRect.right > listRect.right) {
      list.scrollBy({ left: itemRect.right - listRect.right });
    }
  }, [pathname]);

  return (
    <nav aria-label="사이트 탭" className="min-w-0 flex-1">
      <ul
        ref={listRef}
        className="flex snap-x items-center gap-1 overflow-x-auto scroll-px-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {tabs.map((tab) => {
          const active = !openProject && pathname === tab.href;

          return (
            <li key={tab.href} className="shrink-0">
              <Link
                href={tab.href}
                aria-current={active ? "page" : undefined}
                data-active={active ? "" : undefined}
                className={`${BASE} ${active ? ACTIVE : IDLE}`}
              >
                <span
                  aria-hidden="true"
                  className={`${HUE_CLASS[tab.hue]} size-2 shrink-0 rounded-full bg-hue-deep`}
                />
                {tab.label}
                {active ? (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-accent"
                  />
                ) : (
                  <TabPending />
                )}
              </Link>
            </li>
          );
        })}

        {openProject ? (
          <li className="shrink-0">
            <span
              aria-current="page"
              data-active=""
              className={`${BASE} ${ACTIVE} pr-1.5`}
            >
              <span
                aria-hidden="true"
                className={`${openProject.hueClass} size-2 shrink-0 rounded-full bg-hue-deep`}
              />
              <span className="max-w-40 truncate">{openProject.label}</span>

              <Link
                href="/work"
                aria-label={`${openProject.label} 탭 닫기`}
                className="flex size-11 items-center justify-center rounded-chip text-ink-3 transition-colors hover:bg-paper-sunk hover:text-ink"
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M1.5 1.5l7 7M8.5 1.5l-7 7" />
                </svg>
              </Link>

              <span
                aria-hidden="true"
                className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-accent"
              />
            </span>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}
