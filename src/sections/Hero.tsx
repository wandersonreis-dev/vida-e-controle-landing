import { Cta } from '../components/Cta'
import { Icon } from '../components/Icons'
import { TodayMock } from '../components/Mockups'
import { Reveal } from '../components/Reveal'

export function Hero() {
  return (
    <section id="topo" className="bg-grain relative overflow-hidden px-5 pb-16 pt-28 sm:px-6 sm:pb-24 sm:pt-36">
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3.5 py-1.5 text-xs font-bold text-green-600 ring-1 ring-green-100">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-green-400" />
              30 dias grátis · sem cartão de crédito
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="display mt-6 text-[2.6rem] text-ink sm:text-6xl lg:text-[3.4rem] xl:text-[3.9rem]">
              Saiba em segundos o que precisa{' '}
              <span className="whitespace-nowrap text-green-600 [background:linear-gradient(transparent_64%,#c9e9d8_64%,#c9e9d8_93%,transparent_93%)]">
                decidir hoje
              </span>{' '}
              com o seu dinheiro
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
              O Vida e Controle junta contas, faturas de cartão, senhas e contatos num painel só. Você abre, vê o que vence,
              o que saiu do normal e quem faz aniversário, e resolve.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Cta where="hero">Começar 30 dias grátis</Cta>
              <Cta where="hero-ver-painel" variant="outline" href="#painel" arrow={false}>
                <Icon name="play" size={16} className="text-green-500" />
                Ver o painel por dentro
              </Cta>
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-ink-soft">
              {['Sem cartão de crédito', 'Cancele quando quiser', 'Dados em servidores no Brasil'].map(t => (
                <li key={t} className="flex items-center gap-1.5">
                  <Icon name="check" size={16} className="text-green-400" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:pl-4">
          <TodayMock />
        </Reveal>
      </div>
    </section>
  )
}
