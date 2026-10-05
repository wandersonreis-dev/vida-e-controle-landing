import type { ReactNode } from 'react'
import { Icon } from './Icons'
import { REGISTER_URL } from '../lib/site'

type Variant = 'primary' | 'light' | 'outline'

const styles: Record<Variant, string> = {
  primary: 'bg-green-600 text-white shadow-cta hover:bg-green-500 active:bg-green-700',
  light: 'bg-white text-green-600 shadow-pop hover:bg-green-50 active:bg-green-100',
  outline: 'border border-sand-300 bg-white/70 text-ink hover:border-green-300 hover:bg-white',
}

// Botão de chamada para ação; `where` identifica o ponto da página (útil para medir cada botão depois)
export function Cta({ children, variant = 'primary', where, href = REGISTER_URL, arrow = true, className = '' }: {
  children: ReactNode
  variant?: Variant
  where: string
  href?: string
  arrow?: boolean
  className?: string
}) {
  return (
    <a
      href={href}
      data-cta={where}
      className={`group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-base font-bold transition-[background-color,box-shadow,transform] duration-200 active:scale-[0.98] sm:px-7 sm:py-4 ${styles[variant]} ${className}`}
    >
      {children}
      {arrow && <Icon name="arrow" size={18} className="transition-transform duration-200 group-hover:translate-x-0.5" />}
    </a>
  )
}
