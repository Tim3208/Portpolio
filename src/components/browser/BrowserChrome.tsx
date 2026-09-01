import { AddressBar } from "@/components/browser/AddressBar";
import { TabStrip } from "@/components/browser/TabStrip";
import { TrafficLights } from "@/components/browser/TrafficLights";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { PROJECTS } from "@/data/projects";
import { HUE_CLASS } from "@/lib/hue";
import { GITHUB_URL } from "@/lib/sections";
import { SITE_URL } from "@/lib/site";
import { TABS } from "@/lib/tabs";

const ACTION =
  "flex min-h-11 shrink-0 items-center rounded-chip px-2.5 text-small text-ink-2 transition-colors hover:bg-paper/55 hover:text-ink";

/**
 * 창의 크롬 — 탭 · 주소창 · 컨트롤.
 *
 * 서버 컴포넌트다. 여기서 데이터를 다 조립해 클라이언트 쪽으로는 필요한
 * 최소한만 내려보낸다. TabStrip 이 PROJECTS 를 직접 import 하면 Case Study
 * 본문 전체가 클라이언트 번들에 실려 온다 — 탭 라벨 네 개를 위해서.
 *
 * 뒤로/앞으로/새로고침 버튼은 두지 않는다. 진짜로 동작시키려면 브라우저가
 * 이미 완벽하게 하고 있는 일을 다시 구현해야 하고, 동작하지 않게 두면
 * §48 이 말하는 "의미 없는 장식" 이 된다.
 */
export function BrowserChrome() {
  const projectTabs = Object.fromEntries(
    PROJECTS.map((p) => [p.slug, { label: p.name, hueClass: HUE_CLASS[p.hue] }]),
  );

  // 도메인을 지어내지 않는다 (§39). 개발에서는 localhost 가 그대로 보인다.
  const host = new URL(SITE_URL).host;

  return (
    <div className="sticky top-frame z-40 rounded-t-window border-b border-rule bg-chrome">
      {/* 행 1 — 신호등 + 탭. 모바일에서는 여기에 토글까지 들어간다 */}
      <div className="flex items-center gap-2.5 px-2.5 md:px-3">
        <TrafficLights />
        <TabStrip tabs={TABS} projectTabs={projectTabs} />
        {/* 좁은 화면에서 탭은 가로로 넘친다. 세로선이 있어야 잘린 탭이
            토글에 닿아 뭉개지지 않고, 여기서 탭 영역이 끝난다고 읽힌다. */}
        <div className="shrink-0 border-l border-rule pl-1 md:hidden">
          <ThemeToggle />
        </div>
      </div>

      {/* 행 2 — 주소창과 도구. 좁은 화면에서는 통째로 접는다.
          진짜 주소창이 바로 위에 있으니 정보가 사라지는 것도 아니고,
          2행짜리 sticky 는 모바일에서 본문을 너무 많이 가린다. */}
      <div className="hidden items-center gap-2 px-3 pb-2 md:flex">
        <AddressBar host={host} />

        <a href="#contact" className={ACTION}>
          Contact
        </a>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer noopener"
          className={ACTION}
        >
          GitHub
        </a>
        <ThemeToggle />
      </div>
    </div>
  );
}
