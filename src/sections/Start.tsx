import { Cta } from '../components/Cta'
import { Icon } from '../components/Icons'
import { Reveal } from '../components/Reveal'
import { SUPPORT_EMAIL } from '../lib/site'

const STEPS = [
  { n: '1', title: 'Crie sua conta', text: 'Só e-mail e senha. Sem cartão de crédito e sem formulário longo.' },
  { n: '2', title: 'Cadastre contas e cartões', text: 'Informe onde o seu dinheiro está e traga seus contatos, se quiser, de um arquivo da agenda.' },
  { n: '3', title: 'Abra o painel Hoje', text: 'Todo dia você vê o que vence, o que pede decisão e quem faz aniversário.' },
]

export function Start() {
  return (
    <section className="px-5 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-green-400">Como começar</p>
          <h2 className="display mt-4 text-4xl text-ink sm:text-5xl">Do cadastro ao primeiro painel em poucos minutos</h2>
        </Reveal>

        <ol className="mt-12 grid gap-4 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 90} className="relative rounded-2xl border border-sand-200 bg-white p-7 shadow-card">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green-600 font-brand text-lg font-bold text-white">{s.n}</span>
              <h3 className="mt-5 text-xl font-extrabold text-ink">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{s.text}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-14 overflow-hidden rounded-3xl bg-sand-100 p-8 sm:p-12">
          <div className="grid items-center gap-8 md:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-green-600 ring-1 ring-sand-300">
                <Icon name="spark" size={14} /> Estamos começando
              </p>
              <h3 className="display mt-5 text-3xl text-ink sm:text-4xl">Você fala direto com quem constrói</h3>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
                O Vida e Controle é novo. Quem entra agora usa o produto completo e pode contar o que falta: o suporte responde por e-mail
                e as sugestões ajudam a decidir o que vem a seguir.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <Cta where="start" className="w-full md:w-auto">Começar 30 dias grátis</Cta>
              <a href={`mailto:${SUPPORT_EMAIL}`} className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 underline-offset-4 hover:underline">
                <Icon name="mail" size={16} /> {SUPPORT_EMAIL}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
