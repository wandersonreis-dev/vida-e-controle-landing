interface Props {
  size?: number
  className?: string
  style?: React.CSSProperties
}

export function BrandIcon({ size = 32, className, style }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      style={style}
    >
      <rect width="100" height="100" rx="24.67" ry="24.67" fill="#0C3D22" />
      <g transform="translate(28.75, 28.75) scale(1.0625)">
        <path d="M9.28,11 A14,14 0 0,1 30.72,11" fill="none" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M33.16,15.21 A14,14 0 0,1 22.44,33.79" fill="none" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M17.56,33.79 A14,14 0 0,1 6.84,15.21" fill="none" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" />
        <circle cx="20" cy="20" r="6" fill="none" stroke="#FFFFFF" strokeWidth="1.6" />
        <circle cx="20" cy="20" r="1.8" fill="#FFFFFF" />
      </g>
    </svg>
  )
}
