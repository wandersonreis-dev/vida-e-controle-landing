import { Icon, type IconName } from '../components/Icons'
import { Reveal } from '../components/Reveal'

const FACTS: { icon: IconName; title: string; text: string }[] = [
  { icon: 'shield', title: 'Cofre com AES-256', text: 'Criptografia feita no seu aparelho' },
  { icon: 'lock', title: 'Dados em São Paulo', text: 'Servidores no Brasil, acesso só seu' },
  { icon: 'wallet', title: '30 dias grátis', text: 'Teste tudo, sem cartão de crédito' },
  { icon: 'card', title: 'Pagamento seguro', text: 'Cobrança pelo Mercado Pago' },
]

export function TrustStrip() {
  return (
    <section aria-label="Garantias" className="border-y border-sand-200 bg-white px-5 py-8 sm:px-6">
      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-6 lg:grid-cols-4">
        {FACTS.map(f => (
          <li key={f.title} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600"><Icon name={f.icon} size={20} /></span>
            <div>
              <p className="text-sm font-extrabold text-ink">{f.title}</p>
              <p className="text-[13px] leading-snug text-ink-mute">{f.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

const PAINS = [
  { n: '01', title: 'A fatura que chega maior do que você imaginava', text: 'Sem ver os gastos do cartão por categoria, o mês fecha e a surpresa já está feita.' },
  { n: '02', title: 'A mesma senha em dez lugares', text: 'É cômodo, até o dia em que um site vaza e todas as suas contas ficam expostas.' },
  { n: '03', title: 'O parabéns que sai um dia depois', text: 'Contatos e datas importantes ficam espalhados, e só lembramos quando já passou.' },
]

export function Problem() {
  return (
    <section className="px-5 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-green-400">O custo da bagunça</p>
          <h2 className="display mt-4 text-4xl text-ink sm:text-5xl">
            Dinheiro num app, senha em outro, aniversário só na memória.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            Cada pedaço da sua vida mora num lugar diferente. O Vida e Controle põe tudo diante de você, todo dia, num painel só.
          </p>
        </Reveal>

        <ol className="divide-y divide-sand-200 border-y border-sand-200">
          {PAINS.map((p, i) => (
            <Reveal as="li" key={p.n} delay={i * 90} className="flex gap-5 py-7">
              <span className="font-brand text-3xl font-bold leading-none text-green-300 sm:text-4xl" aria-hidden>{p.n}</span>
              <div>
                <h3 className="text-xl font-extrabold leading-snug text-ink">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
