import type { SVGProps } from "react";

/**
 * 크롬 컨트롤 아이콘. 의존성 없이 선 하나로 그린다.
 * 장식이라 aria-hidden 이고, 컨트롤의 이름은 버튼의 aria-label 이 맡는다.
 */
function Icon({ children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </svg>
  );
}

export const BackIcon = () => (
  <Icon>
    <path d="M13 8H3M7.5 3.5 3 8l4.5 4.5" />
  </Icon>
);

export const ForwardIcon = () => (
  <Icon>
    <path d="M3 8h10M8.5 3.5 13 8l-4.5 4.5" />
  </Icon>
);

export const ReloadIcon = () => (
  <Icon>
    <path d="M13 8a5 5 0 1 1-1.6-3.7M13 2.5v2.8h-2.8" />
  </Icon>
);

export const CloseIcon = () => (
  <Icon width="12" height="12">
    <path d="m4 4 8 8M12 4l-8 8" />
  </Icon>
);

export const PlusIcon = () => (
  <Icon>
    <path d="M8 3v10M3 8h10" />
  </Icon>
);

export const SystemIcon = () => (
  <Icon>
    <rect x="2" y="3" width="12" height="8.5" rx="1.5" />
    <path d="M6 14h4M8 11.5V14" />
  </Icon>
);

export const SunIcon = () => (
  <Icon>
    <circle cx="8" cy="8" r="2.75" />
    <path d="M8 1.5v1.5M8 13v1.5M1.5 8H3M13 8h1.5M3.4 3.4l1.06 1.06M11.54 11.54l1.06 1.06M3.4 12.6l1.06-1.06M11.54 4.46l1.06-1.06" />
  </Icon>
);

export const MoonIcon = () => (
  <Icon>
    <path d="M13.5 9.6A5.5 5.5 0 0 1 6.4 2.5a5.5 5.5 0 1 0 7.1 7.1Z" />
  </Icon>
);
