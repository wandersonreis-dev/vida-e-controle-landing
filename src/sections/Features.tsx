import type { ReactNode } from 'react'
import { Cta } from '../components/Cta'
import { Icon, type IconName } from '../components/Icons'
import { CardsMock, CategorizeMock, ContactsMock, VaultMock } from '../components/Mockups'
import { Reveal } from '../components/Reveal'

interface Block {
  id?: string
  icon: IconName
  eyebrow: string
  title: string
  text: string
  bullets: string[]
  mock: ReactNode
}

const BLOCKS: Block[] = [
  {
    id: 'painel',
    icon: 'spark',
    eyebrow: 'Painel Hoje',
    title: 'Resolva as pendências sem sair do painel',
    text: 'Em vez de abrir cinco telas para entender o seu dia, o painel mostra só o que pede uma decisão: contas vencidas, fatura chegando, despesas sem categoria e aniversariantes. Cada aviso abre a lista do que está pendente e leva direto à ação.',
    bullets: [
      'Categorize despesas ali mesmo, com sugestão pelo seu histórico',
      'Resumo do mês: quanto você ainda pode gastar e para onde foi o dinheiro',
      'Notícias dos temas que você escolher, atualizadas a cada hora',
    ],
    mock: <CategorizeMock />,
  },
  {
    icon: 'pie',
    eyebrow: 'Cartões e relatórios',
    title: 'Entenda para onde vai o dinheiro do cartão',
    text: 'A fatura vira um gráfico por categoria, com comparação com o mês anterior. Clique numa fatia e veja só as compras daquela categoria.',
    bullets: [
      'Faturas abertas por categoria na visão de caixa do mês',
      'Visão por categoria ou por tag, com variação mensal',
      'Categorização em lote: o app sugere a categoria pelo estabelecimento',
    ],
    mock: <CardsMock />,
  },
  {
    icon: 'lock',
    eyebrow: 'Cofre digital',
    title: 'Senhas que nem nós conseguimos ler',
    text: 'Guarde logins e anotações sigilosas com criptografia AES-256 feita no seu aparelho. A chave nasce da sua senha mestra, que nunca sai de lá.',
    bullets: [
      'Indicador de força para achar as senhas fracas',
      'Chave de recuperação para você nunca ficar de fora',
      'Organizado por categorias: banco, e-mail, redes e mais',
    ],
    mock: <VaultMock />,
  },
  {
    icon: 'users',
    eyebrow: 'Contatos',
    title: 'As pessoas importantes, sempre à mão',
    text: 'Traga a agenda do celular em minutos, escolha quem importar e complete o resto com calma. Os aniversários aparecem no painel, e você leva seus contatos embora quando quiser.',
    bullets: [
      'Importe de um arquivo .vcf, ou direto da agenda no Android',
      'Exporte em .vcf ou em planilha',
      'Vincule contatos aos lançamentos e veja relatórios por pessoa ou empresa',
    ],
    mock: <ContactsMock />,
  },
]

export function Features() {
  return (
    <section id="funcionalidades" className="bg-white px-5 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-green-400">Tudo em um só lugar</p>
          <h2 className="display mt-4 text-4xl text-ink sm:text-5xl">Finanças, cofre e contatos conversando entre si</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Uma assinatura, um login e um painel que mostra o que importa agora.
          </p>
        </Reveal>

        <div className="mt-16 space-y-24 sm:mt-24 sm:space-y-32">
          {BLOCKS.map((b, i) => (
            <div key={b.eyebrow} id={b.id} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <Reveal className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <p className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-600 ring-1 ring-green-100">
                  <Icon name={b.icon} size={14} />
                  {b.eyebrow}
                </p>
                <h3 className="display mt-5 text-3xl text-ink sm:text-4xl">{b.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-ink-soft">{b.text}</p>
                <ul className="mt-6 space-y-3">
                  {b.bullets.map(t => (
                    <li key={t} className="flex items-start gap-3 text-ink">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-600 text-white"><Icon name="check" size={13} strokeWidth={2.6} /></span>
                      <span className="leading-snug">{t}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={120} className={i % 2 === 1 ? 'lg:order-1' : ''}>{b.mock}</Reveal>
            </div>
          ))}
        </div>

        <Reveal className="mt-24 flex flex-col items-center justify-between gap-6 rounded-3xl bg-sand-100 px-6 py-8 sm:px-10 md:flex-row">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-green-600 shadow-card"><Icon name="phone" size={22} /></span>
            <div>
              <p className="text-lg font-extrabold text-ink">Também no celular</p>
              <p className="mt-1 max-w-lg leading-relaxed text-ink-soft">
                Use no navegador ou instale na tela inicial, no Android e no iPhone. Abre em tela cheia, como um aplicativo.
              </p>
            </div>
          </div>
          <Cta where="features-celular" className="shrink-0">Começar 30 dias grátis</Cta>
        </Reveal>
      </div>
    </section>
  )
}
