import { Cta } from '../components/Cta'
import { Icon } from '../components/Icons'
import { Reveal } from '../components/Reveal'
import { PRICE_MONTHLY, PRICE_YEARLY, PRICE_YEARLY_PER_MONTH, YEARLY_SAVING, brl } from '../lib/site'

const INCLUDED = [
  'Painel Hoje, finanças, cartões e relatórios',
  'Cofre digital com criptografia no seu aparelho',
  'Contatos com importação e exportação',
  'Notícias dos temas que você escolher',
  'Uso no navegador e instalado no celular',
  'Suporte por e-mail',
]

export function Pricing() {
  return (
    <section id="precos" className="bg-white px-5 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-green-400">Preços</p>
          <h2 className="display mt-4 text-4xl text-ink sm:text-5xl">Um preço simples, com tudo incluído</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Os dois planos têm os mesmos recursos. Os primeiros 30 dias são grátis e não pedem cartão.
          </p>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-2">
          <Reveal className="flex flex-col rounded-3xl border border-sand-300 bg-sand-50 p-8">
            <h3 className="text-lg font-extrabold text-ink">Mensal</h3>
            <p className="mt-1 text-sm text-ink-mute">Para começar sem compromisso longo</p>
            <p className="mt-6 flex items-baseline gap-1.5">
              <span className="display text-5xl text-ink">{brl(PRICE_MONTHLY)}</span>
              <span className="text-ink-mute">/mês</span>
            </p>
            <p className="mt-2 text-sm text-ink-mute">Depois dos 30 dias grátis</p>
            <div className="mt-auto pt-8">
              <Cta where="preco-mensal" variant="outline" className="w-full">Começar 30 dias grátis</Cta>
            </div>
          </Reveal>

          <Reveal delay={100} className="relative flex flex-col rounded-3xl bg-green-600 p-8 text-white shadow-pop">
            <span className="absolute -top-3.5 left-8 rounded-full bg-green-100 px-3.5 py-1 text-xs font-extrabold text-green-600">
              Economize {brl(YEARLY_SAVING)} por ano
            </span>
            <h3 className="text-lg font-extrabold">Anual</h3>
            <p className="mt-1 text-sm text-green-100">O melhor custo-benefício</p>
            <p className="mt-6 flex items-baseline gap-1.5">
              <span className="display text-5xl">{brl(PRICE_YEARLY_PER_MONTH)}</span>
              <span className="text-green-100">/mês</span>
            </p>
            <p className="mt-2 text-sm text-green-100">Cobrado {brl(PRICE_YEARLY)} por ano, o equivalente a 3 meses grátis</p>
            <div className="mt-auto pt-8">
              <Cta where="preco-anual" variant="light" className="w-full">Começar 30 dias grátis</Cta>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-10 rounded-3xl border border-sand-200 bg-sand-50 p-8">
          <p className="text-sm font-extrabold text-ink">Em todos os planos</p>
          <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {INCLUDED.map(t => (
              <li key={t} className="flex items-start gap-3 text-ink-soft">
                <Icon name="check" size={18} className="mt-0.5 shrink-0 text-green-400" strokeWidth={2.4} />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <p className="mt-6 text-center text-sm text-ink-mute">
          Pagamento seguro pelo Mercado Pago. Sem multa e sem fidelidade.
        </p>
      </div>
    </section>
  )
}
