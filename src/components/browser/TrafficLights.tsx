/**
 * 창 좌측 상단의 점 세 개.
 *
 * <button> 으로 만들지 않는다. 눌러도 아무 일이 없는 버튼이 셋 생기고,
 * 키보드 사용자는 탭 순서에서 그 셋을 먼저 통과해야 한다. 이건 창이라는
 * 은유를 완성하는 장식이지 컨트롤이 아니므로 그렇게 표시한다.
 *
 * 색도 실제 신호등(빨강·노랑·초록)을 흉내내지 않는다. 그 셋은 팔레트
 * 밖의 색이고, §28.4 가 금지한 "한 화면에 여러 계열" 이 된다.
 */
export function TrafficLights() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none hidden shrink-0 items-center gap-2 pr-1 md:flex"
    >
      {/* 한 색의 농도 차이로 만든다. rule / rule-strong 을 쓰면 다크에서
          뒤 두 점이 크롬 면에 묻혀 하나만 있는 것처럼 보인다. */}
      <span className="size-3 rounded-full bg-accent" />
      <span className="size-3 rounded-full bg-accent/55" />
      <span className="size-3 rounded-full bg-accent/30" />
    </div>
  );
}
