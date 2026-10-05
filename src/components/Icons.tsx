import type { SVGProps } from 'react'

// Conjunto próprio de ícones (traço 1.75, pontas arredondadas), todos 24x24
const paths = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  shield: <><path d="M12 3l7 3v5.5c0 4.2-2.9 7.7-7 9.5-4.1-1.8-7-5.3-7-9.5V6l7-3z" /><path d="M9 12l2.2 2.2L15.5 10" /></>,
  lock: <><rect x="5" y="10.5" width="14" height="9.5" rx="2.5" /><path d="M8 10.5V8a4 4 0 018 0v2.5" /><circle cx="12" cy="15.2" r="1.2" /></>,
  key: <><circle cx="8" cy="14" r="3.5" /><path d="M10.5 11.5L19 3m-3 3l2.5 2.5M13.5 8.5L16 11" /></>,
  wallet: <><path d="M4 7.5A2.5 2.5 0 016.5 5H18a1 1 0 011 1v2" /><rect x="4" y="8" width="16" height="11" rx="2.5" /><path d="M16 13.5h2" /></>,
  card: <><rect x="3" y="5.5" width="18" height="13" rx="2.5" /><path d="M3 10h18M7 15h3" /></>,
  pie: <><path d="M12 3v9h9" /><path d="M20.5 15A9 9 0 119 3.5" /></>,
  users: <><circle cx="9" cy="8.5" r="3.2" /><path d="M3 19.5c.6-3.2 3-5 6-5s5.4 1.8 6 5" /><path d="M16 5.6a3.2 3.2 0 010 6M18 14.8c1.7.6 2.7 2.1 3 4.2" /></>,
  cake: <><path d="M4 20h16v-6.5a2 2 0 00-2-2H6a2 2 0 00-2 2V20z" /><path d="M4 16c1.5 1.2 3 1.2 4 0s2.5-1.2 4 0 3 1.2 4 0 2.5-1.2 4 0M12 11.5V8M12 8c-.9-.9-.9-2 0-3 .9 1 .9 2.1 0 3z" /></>,
  bell: <><path d="M6 16.5V11a6 6 0 1112 0v5.5l1.5 2h-15l1.5-2z" /><path d="M10 20.5a2 2 0 004 0" /></>,
  phone: <><rect x="7" y="2.5" width="10" height="19" rx="2.5" /><path d="M11 18.5h2" /></>,
  upload: <><path d="M12 15V4m0 0L8 8m4-4l4 4" /><path d="M5 15v3.5A1.5 1.5 0 006.5 20h11a1.5 1.5 0 001.5-1.5V15" /></>,
  download: <><path d="M12 4v11m0 0l-4-4m4 4l4-4" /><path d="M5 18.5V19a1 1 0 001 1h12a1 1 0 001-1v-.5" /></>,
  alert: <><path d="M12 4l9 15.5H3L12 4z" /><path d="M12 10v4.2M12 17h.01" /></>,
  repeat: <><path d="M17 3l3 3-3 3" /><path d="M4 11V9.5A3.5 3.5 0 017.5 6H20M7 21l-3-3 3-3" /><path d="M20 13v1.5a3.5 3.5 0 01-3.5 3.5H4" /></>,
  news: <><rect x="4" y="4.5" width="16" height="15" rx="2.5" /><path d="M8 9h8M8 12.5h8M8 16h5" /></>,
  tag: <><path d="M3.5 12.5V5a1.5 1.5 0 011.5-1.5h7.5l8 8-8.5 8.5-8.5-8z" /><circle cx="8" cy="8" r="1.3" /></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  chevron: <path d="M6 9l6 6 6-6" />,
  spark: <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16z" />,
  mail: <><rect x="3.5" y="5.5" width="17" height="13" rx="2.5" /><path d="M4 8l8 5.5L20 8" /></>,
  play: <path d="M9 6.5v11l9-5.5-9-5.5z" />,
} as const

export type IconName = keyof typeof paths

export function Icon({ name, size = 20, ...rest }: { name: IconName; size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {paths[name]}
    </svg>
  )
}
