"use client";

import type { ComponentProps } from "react";

/**
 * 같은 페이지의 앵커(#id) 링크. 눌렀을 때 화면이 바로 튀지 않고 그 위치까지 스크롤된다.
 *
 * 브라우저 기본 smooth 스크롤은 거리에 비례해 길어져서 홈 전체(약 1만 px)를 오가면
 * 1.5초가 넘는다. 그래서 거리에 따라 0.3~0.7초로 상한을 둔 짧은 애니메이션을 직접 돌린다.
 * 이동 중에 휠 · 터치 · 키보드로 방문자가 스크롤하면 바로 멈추고 맡긴다.
 *
 * CSS 의 scroll-behavior: smooth 를 전역에 걸면 경로가 바뀔 때의 scrollTop = 0 같은
 * 위치 복원까지 움직이게 되므로 이 링크를 눌렀을 때만 움직인다. 스크롤 주체는 데스크톱에서는
 * Viewport, 모바일에서는 문서라 가장 가까운 스크롤 조상을 찾아 쓴다. 모션 감소 설정에서는
 * 즉시 이동하고, 대상이 없거나 수정 키(새 탭 등)를 누른 클릭은 브라우저 기본 동작에 맡긴다.
 */

function scrollParent(el: HTMLElement): HTMLElement {
  for (let node = el.parentElement; node; node = node.parentElement) {
    const { overflowY } = getComputedStyle(node);
    if ((overflowY === "auto" || overflowY === "scroll") && node.scrollHeight > node.clientHeight) return node;
  }
  return (document.scrollingElement as HTMLElement) ?? document.documentElement;
}

const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

function animateScroll(target: HTMLElement) {
  const scroller = scrollParent(target);
  const isDoc = scroller === document.scrollingElement || scroller === document.documentElement;
  const scrollerTop = isDoc ? 0 : scroller.getBoundingClientRect().top;
  const margin = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
  const max = scroller.scrollHeight - scroller.clientHeight;
  const from = scroller.scrollTop;
  const to = Math.max(0, Math.min(max, from + target.getBoundingClientRect().top - scrollerTop - margin));
  const distance = Math.abs(to - from);

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || distance < 2) {
    scroller.scrollTop = to;
    return;
  }

  const duration = Math.min(700, 300 + distance * 0.08);
  const start = performance.now();
  let frame = 0;

  const stop = () => {
    cancelAnimationFrame(frame);
    removeEventListener("wheel", stop);
    removeEventListener("touchstart", stop);
    removeEventListener("keydown", stop);
  };
  addEventListener("wheel", stop, { passive: true });
  addEventListener("touchstart", stop, { passive: true });
  addEventListener("keydown", stop);

  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / duration);
    scroller.scrollTop = from + (to - from) * easeInOut(t);
    if (t < 1) frame = requestAnimationFrame(tick);
    else stop();
  };
  frame = requestAnimationFrame(tick);
}

export function SmoothAnchor({ href, onClick, ...props }: ComponentProps<"a"> & { href: `#${string}` }) {
  return (
    <a
      href={href}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        const target = document.getElementById(href.slice(1));
        if (!target) return;
        e.preventDefault();
        animateScroll(target);
      }}
      {...props}
    />
  );
}
