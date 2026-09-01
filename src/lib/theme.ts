/**
 * 테마 상태 (AGENTS.md §28.7)
 *
 * 상태는 셋이다.
 *   · 시스템  — data-theme 속성 없음. @media (prefers-color-scheme) 가 결정한다.
 *   · 라이트  — data-theme="light". OS 가 다크여도 라이트로 고정.
 *   · 다크    — data-theme="dark".
 *
 * "저장값 없음 = 시스템" 이 CSS 의 전제다. globals.css 의 다크 블록이
 * `:root:not([data-theme="light"])` 로 쓰여 있어서, 시스템 상태일 때 속성을
 * 아예 비워두어야 OS 설정을 그대로 따라간다. 그래서 라이브러리(next-themes)
 * 를 쓰지 않는다 — 그쪽은 시스템 상태에서도 resolved 값을 써넣어 이 전제를
 * 깨뜨린다.
 */
export const THEME_KEY = "theme";

export type Theme = "light" | "dark";

/**
 * <body> 의 첫 자식으로 동기 실행되는 스크립트.
 *
 * body 가 페인트되기 전에 data-theme 을 붙여야 첫 프레임 깜빡임(FOUC)이
 * 없다. React 하이드레이션을 기다리면 이미 늦는다.
 *
 * localStorage 접근은 try 로 감싼다 — 사생활 보호 모드나 쿠키 차단 환경에서
 * 접근 자체가 throw 하고, 그러면 이 아래 마크업이 전부 렌더되지 않는다.
 */
export const THEME_INIT_SCRIPT = `(function(){try{
var t=localStorage.getItem("${THEME_KEY}");
if(t==="light"||t==="dark"){
document.documentElement.dataset.theme=t;
document.documentElement.style.colorScheme=t;
}
}catch(e){}})();`;
