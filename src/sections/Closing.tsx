import { useEffect, useState } from 'react'
import { Cta } from '../components/Cta'
import { Logo } from '../components/Logo'
import { Reveal } from '../components/Reveal'
import { APP_URL, REGISTER_URL, SUPPORT_EMAIL } from '../lib/site'

export function FinalCta() {
  return (
    <section id="comecar" className="relative overflow-hidden bg-green-600 px-5 py-24 text-white sm:px-6 sm:py-32">
      <div className="pointer-events-none absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-green-500/40 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[30rem] w-[30rem] rounded-full bg-green-400/20 blur-3xl" aria-hidden />
      <Reveal className="relative mx-auto max-w-3xl text-center">
        <h2 className="display text-4xl sm:text-6xl">Comece hoje. Amanhã de manhã o painel já estará esperando.</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-green-100">
          Crie a conta em poucos minutos e use tudo por 30 dias, sem cartão de crédito.
        </p>
        <div className="mt-10 flex justify-center">
          <Cta where="final" variant="light">Começar 30 dias grátis</Cta>
        </div>
        <p className="mt-5 text-sm text-green-200">Sem cartão de crédito · Cancele quando quiser · Dados em servidores no Brasil</p>
      </Reveal>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-green-700 px-5 py-14 text-green-100 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-green-100/80">
              Finanças, cofre de senhas e contatos num painel só, com os dados guardados em servidores no Brasil.
            </p>
          </div>
          <nav aria-label="Produto">
            <p className="text-sm font-extrabold text-white">Produto</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="#painel" className="hover:text-white">O painel</a></li>
              <li><a href="#funcionalidades" className="hover:text-white">Funcionalidades</a></li>
              <li><a href="#seguranca" className="hover:text-white">Segurança</a></li>
              <li><a href="#precos" className="hover:text-white">Preços</a></li>
              <li><a href={APP_URL} className="hover:text-white">Entrar</a></li>
            </ul>
          </nav>
          <nav aria-label="Legal e contato">
            <p className="text-sm font-extrabold text-white">Legal e contato</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="/privacidade/" className="hover:text-white">Política de Privacidade</a></li>
              <li><a href="/termos/" className="hover:text-white">Termos de Uso</a></li>
              <li><a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-white">{SUPPORT_EMAIL}</a></li>
            </ul>
          </nav>
        </div>
        {/* Identificação do fornecedor (Decreto 7.962/2013, art. 2º): preencher antes de publicar */}
        <p className="mt-10 text-xs leading-relaxed text-green-100/80">
          <span className="rounded bg-amber-200 px-1.5 py-0.5 font-semibold text-amber-950">[razão social]</span>
          {' '}· CNPJ <span className="rounded bg-amber-200 px-1.5 py-0.5 font-semibold text-amber-950">[CNPJ]</span>
          {' '}· <span className="rounded bg-amber-200 px-1.5 py-0.5 font-semibold text-amber-950">[endereço]</span>
          {' '}· <a href={`mailto:${SUPPORT_EMAIL}`} className="underline underline-offset-2 hover:text-white">{SUPPORT_EMAIL}</a>
        </p>
        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-xs text-green-100/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Vida e Controle. Todos os direitos reservados.</p>
          <p>Dados armazenados em São Paulo, Brasil</p>
        </div>
      </div>
    </footer>
  )
}

// Barra de convite fixa no celular: aparece depois do topo e some quando o convite final está na tela
export function MobileCta() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    let nearEnd = false
    const update = () => setShow(window.scrollY > 640 && !nearEnd)
    const target = document.getElementById('comecar')
    const io = target ? new IntersectionObserver(([e]) => { nearEnd = e.isIntersecting; update() }, { threshold: 0.15 }) : null
    if (target && io) io.observe(target)
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => { io?.disconnect(); window.removeEventListener('scroll', update) }
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-sand-300 bg-sand-50/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md transition-transform duration-300 md:hidden ${show ? 'translate-y-0' : 'translate-y-full'}`}
      aria-hidden={!show}
    >
      <a href={REGISTER_URL} data-cta="barra-fixa-mobile" tabIndex={show ? 0 : -1} className="block rounded-xl bg-green-600 px-4 py-3.5 text-center text-base font-bold text-white shadow-cta active:scale-[0.99]">
        Começar 30 dias grátis
      </a>
      <p className="mt-1.5 text-center text-[11px] text-ink-mute">Sem cartão de crédito</p>
    </div>
  )
}
