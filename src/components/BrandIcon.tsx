interface Props {
  size?: number
  className?: string
  style?: React.CSSProperties
}

export function BrandIcon({ size = 32, className, style }: Props) {
  return (
    <img
      src="/icon.svg"
      width={size}
      height={size}
      alt="Vida e Controle"
      className={className}
      style={style}
      draggable={false}
    />
  )
}
