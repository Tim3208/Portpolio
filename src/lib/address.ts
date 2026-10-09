import { EXTERNAL_PATH, NEW_TAB_PATH } from "@/lib/pages";

/**
 * 창 안 주소창의 입력 해석과 표시.
 *
 * 입력은 방문자가 친 문자열이므로 그대로 router 에 넘기지 않는다.
 * 사이트 안 경로는 항상 "/" 로 시작하는 상대 경로로 다시 만들고
 * (`//evil.com` 같은 프로토콜 상대 주소도 여기서 막힌다), 나머지는
 * 화면에 글자로만 보여주는 외부 주소로 분류한다.
 */
export type ParsedAddress =
  | { kind: "internal"; href: string }
  | { kind: "external"; address: string };

const SCHEME = /^[a-z][a-z\d+.-]*:\/\//i;

export function parseAddress(input: string, host: string): ParsedAddress | null {
  const value = input.trim();
  if (!value) return null;

  // 띄어쓰기가 있으면 주소가 아니라 검색어다. 이 창은 검색을 하지 않는다.
  if (/\s/.test(value)) return { kind: "external", address: value };

  const hasScheme = SCHEME.test(value);
  const rest = value.replace(SCHEME, "");
  if (!hasScheme && rest.startsWith("/")) return internal(rest);

  const cut = rest.search(/[/?#]/);
  const first = cut === -1 ? rest : rest.slice(0, cut);
  const tail = cut === -1 ? "" : rest.slice(cut);

  if (first.toLowerCase() === host.toLowerCase()) return internal(tail);

  // 점이나 콜론이 있으면 도메인(google.com) 또는 다른 스킴(mailto:)으로 본다.
  if (hasScheme || /[.:]/.test(first)) return { kind: "external", address: value };

  // "work" 처럼 경로만 친 경우
  return internal(rest);
}

function internal(path: string): ParsedAddress {
  const cut = path.search(/[?#]/);
  const base = cut === -1 ? path : path.slice(0, cut);
  const suffix = cut === -1 ? "" : path.slice(cut);
  const clean = base.replace(/^\/+/, "").replace(/\/+$/, "");
  return { kind: "internal", href: `/${clean}${suffix}` };
}

export function externalHref(address: string) {
  return `${EXTERNAL_PATH}?to=${encodeURIComponent(address)}`;
}

/** 쿼리와 해시를 뗀 경로 */
export function pathOf(url: string) {
  const cut = url.search(/[?#]/);
  return cut === -1 ? url : url.slice(0, cut);
}

/** 주소창에 보여줄 글자. 새 탭은 비워 두고, 외부 주소는 방문자가 친 그대로 보여준다. */
export function displayAddress(url: string, host: string) {
  const path = pathOf(url);
  if (path === NEW_TAB_PATH) return "";
  if (path === EXTERNAL_PATH) {
    const to = new URLSearchParams(url.slice(url.indexOf("?") + 1)).get("to");
    return to ?? "";
  }
  return path === "/" ? host : `${host}${url}`;
}
