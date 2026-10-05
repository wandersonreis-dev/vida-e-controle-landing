import { useEffect, useState } from 'react'
import { Icon } from '../components/Icons'
import { APP_URL, NAV, REGISTER_URL } from '../lib/site'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-md transition-shadow duration-300 ${scrolled || open ? 'border-b border-sand-200 shadow-[0_8px_24px_-16px_rgba(12,61,34,.25)]' : 'border-b border-transparent'}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
        <a href="#topo" aria-label="Vida e Controle, início">
          <img src="/logo-completa.png" alt="Vida e Controle" width={168} height={44} style={{ height: 44, width: 'auto' }} draggable={false} />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {NAV.map(n => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-ink-soft transition-colors hover:text-green-600">{n.label}</a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a href={APP_URL} className="text-sm font-semibold text-ink-soft transition-colors hover:text-green-600">Entrar</a>
          <a href={REGISTER_URL} data-cta="header" className="rounded-xl bg-green-600 px-4 py-2.5 text-sm font-bold text-white shadow-cta transition-colors hover:bg-green-500">
            Começar grátis
          </a>
        </div>

        <button
          type="button"
          className="-mr-2 flex h-11 w-11 items-center justify-center rounded-lg text-ink md:hidden"
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          <Icon name={open ? 'close' : 'menu'} size={24} />
        </button>
      </div>

      {open && (
        <div id="menu-mobile" className="border-t border-sand-200 bg-sand-50 px-5 pb-5 pt-2 md:hidden">
          <nav aria-label="Principal (celular)" className="flex flex-col">
            {NAV.map(n => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="border-b border-sand-200 py-3.5 text-base font-semibold text-ink">{n.label}</a>
            ))}
            <a href={APP_URL} className="py-3.5 text-base font-semibold text-ink-soft">Entrar</a>
          </nav>
          <a href={REGISTER_URL} data-cta="menu-mobile" className="mt-2 block rounded-xl bg-green-600 px-4 py-3.5 text-center text-base font-bold text-white shadow-cta">Começar 30 dias grátis</a>
        </div>
      )}
    </header>
  )
}
