import { Icon, type IconName } from '../components/Icons'
import { Reveal } from '../components/Reveal'

const STEPS: { icon: IconName; title: string; text: string }[] = [
  { icon: 'key', title: 'Você cria uma senha mestra', text: 'Ela fica só com você. Nunca é enviada para os nossos servidores.' },
  { icon: 'lock', title: 'O seu aparelho tranca os dados', text: 'Cada senha e anotação é criptografada com AES-256 antes de sair do aparelho.' },
  { icon: 'shield', title: 'No servidor, só dados embaralhados', text: 'Senhas e anotações chegam já criptografadas. Sem a sua senha mestra, não fazem sentido para ninguém, nem para nós. Nome do serviço, link e usuário ficam em texto comum, só para listar seus itens.' },
]

export function Security() {
  return (
    <section id="seguranca" className="relative overflow-hidden bg-green-600 px-5 py-20 text-white sm:px-6 sm:py-28">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-green-500/40 blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-green-200">Segurança</p>
          <h2 className="display mt-4 text-4xl sm:text-5xl">Como o seu cofre fica trancado</h2>
          <p className="mt-5 text-lg leading-relaxed text-green-100">
            Senhas são o que há de mais sensível na sua vida digital. Por isso o cofre funciona de um jeito em que a chave é sua, e só sua.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-5 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 100} className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-green-100"><Icon name={s.icon} size={22} /></span>
                <span className="font-brand text-2xl font-bold text-green-300/70" aria-hidden>0{i + 1}</span>
              </div>
              <h3 className="mt-5 text-lg font-extrabold leading-snug">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-green-100">{s.text}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 text-ink">
            <p className="flex items-center gap-2 text-sm font-extrabold text-green-600"><Icon name="key" size={18} /> Chave de recuperação</p>
            <p className="mt-2 leading-relaxed text-ink-soft">
              Quando você cria o cofre, recebe uma chave de recuperação. Guarde-a num lugar seguro: se esquecer a senha mestra, é com ela que você volta a abrir o cofre. Sem as duas, ninguém abre.
            </p>
          </div>
          <div className="rounded-2xl border border-white/15 p-6">
            <p className="flex items-center gap-2 text-sm font-extrabold text-green-100"><Icon name="wallet" size={18} /> E os dados financeiros?</p>
            <p className="mt-2 leading-relaxed text-green-100">
              Ficam em servidores em São Paulo, com conexão criptografada, e cada conta só acessa as próprias informações. Não vendemos nem compartilhamos seus dados com anunciantes.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
