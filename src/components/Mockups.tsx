import type { ReactNode } from 'react'
import { Icon } from './Icons'

// Réplicas das telas do app, feitas em código, com dados fictícios (a legenda "exemplo" aparece em cada uma)

function Frame({ label, children, caption = 'Exemplo com dados fictícios' }: { label: string; children: ReactNode; caption?: string }) {
  return (
    <figure className="w-full">
      <div role="img" aria-label={label} className="overflow-hidden rounded-2xl border border-sand-300/70 bg-white shadow-pop">
        <div className="flex items-center gap-1.5 border-b border-sand-200 bg-sand-100 px-3.5 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ec6a5e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#f4bf4f]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#61c554]" />
          <span className="ml-3 flex-1 truncate rounded-md bg-white px-3 py-1 text-[11px] text-ink-mute">app.vidaecontrole.com.br</span>
        </div>
        <div className="bg-sand-50 p-4 sm:p-5">{children}</div>
      </div>
      <figcaption className="mt-3 text-center text-xs text-ink-mute">{caption}</figcaption>
    </figure>
  )
}

function Spark({ points, color }: { points: number[]; color: string }) {
  const max = Math.max(...points)
  const min = Math.min(...points)
  const step = 100 / (points.length - 1)
  const d = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${(i * step).toFixed(1)},${(26 - ((p - min) / (max - min || 1)) * 22).toFixed(1)}`).join(' ')
  return (
    <svg viewBox="0 0 100 30" className="h-8 w-full" preserveAspectRatio="none" aria-hidden>
      <path d={d} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
    </svg>
  )
}

// ── Painel "Hoje" ──────────────────────────────────────────────────────────────
export function TodayMock() {
  return (
    <Frame label="Exemplo do painel Hoje: avisos para decidir, resumo do mês e agenda da semana">
      <p className="text-[11px] text-ink-mute">Seu painel de hoje</p>
      <p className="text-lg font-extrabold tracking-tight text-ink">Olá, Marina</p>
      <p className="mb-3 text-xs text-ink-soft">2 vencimentos nos próximos 7 dias</p>

      <p className="mb-1.5 text-xs font-bold text-ink">Para decidir hoje</p>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        {[
          { bar: 'border-l-amber-500', icon: 'card' as const, tone: 'bg-amber-100 text-amber-700', title: 'Fatura do cartão vence em 3 dias', sub: 'R$ 2.184,30', cta: 'Abrir fatura', btn: 'bg-amber-500' },
          { bar: 'border-l-blue-500', icon: 'tag' as const, tone: 'bg-blue-100 text-blue-700', title: '4 despesas sem categoria no mês', sub: 'R$ 612,40 sem classificação', cta: 'Categorizar', btn: 'bg-blue-600' },
          { bar: 'border-l-pink-500', icon: 'cake' as const, tone: 'bg-pink-100 text-pink-700', title: '2 aniversariantes em outubro', sub: 'Lívia (dia 12) · Paulo (dia 27)', cta: 'Ver contatos', btn: 'bg-pink-600' },
        ].map((c, i) => (
          <div key={c.title} className={`${i === 2 ? 'hidden sm:flex' : 'flex'} flex-col gap-2 rounded-xl border border-sand-200 border-l-4 ${c.bar} bg-white p-2.5 shadow-sm`}>
            <div className="flex items-start gap-2">
              <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${c.tone}`}><Icon name={c.icon} size={13} /></span>
              <div className="min-w-0">
                <p className="text-[11.5px] font-bold leading-snug text-ink">{c.title}</p>
                <p className="text-[10.5px] text-ink-soft">{c.sub}</p>
              </div>
            </div>
            <div className="mt-auto flex items-center gap-1.5">
              <span className={`rounded-md px-2 py-1 text-[10.5px] font-semibold text-white ${c.btn}`}>{c.cta}</span>
              <span className="px-1.5 text-[10.5px] font-medium text-ink-mute">Adiar</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
        <div className="rounded-xl bg-gradient-to-br from-[#2a78d6] to-[#1b57a8] p-3 text-white">
          <p className="text-[10.5px] text-white/85">Livre para gastar até 31/10</p>
          <p className="mt-0.5 text-[22px] font-extrabold leading-tight tracking-tight">R$ 1.842,60</p>
          <p className="text-[10.5px] text-white/90">≈ R$ 92 por dia · faltam 20 dias</p>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/25"><div className="h-full w-[58%] rounded-full bg-white" /></div>
        </div>
        <div className="rounded-xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-3">
          <p className="text-[10.5px] text-emerald-800">Gasto do mês até hoje</p>
          <p className="mt-0.5 text-[22px] font-extrabold leading-tight tracking-tight text-ink">R$ 3.274,10</p>
          <p className="text-[10.5px] text-ink-soft"><span className="font-semibold text-emerald-700">R$ 412 a menos</span> que no mês passado</p>
          <Spark points={[2, 3, 3, 5, 6, 6, 8, 9, 9, 11]} color="#059669" />
        </div>
        <div className="hidden rounded-xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-3 sm:block">
          <p className="text-[10.5px] text-amber-800">Contas a pagar em 7 dias</p>
          <p className="mt-0.5 text-[22px] font-extrabold leading-tight tracking-tight text-ink">R$ 2.384,30</p>
          <div className="mt-2 flex h-9 items-end gap-1" aria-hidden>
            {[0, 0, 22, 0, 0, 14, 0, 6].map((h, i) => (
              <span key={i} className="flex-1 rounded-t bg-amber-400/90" style={{ height: `${Math.max(h, 2) * 1.5}px` }} />
            ))}
          </div>
        </div>
      </div>
    </Frame>
  )
}

// ── Categorizar sem sair do painel ─────────────────────────────────────────────
export function CategorizeMock() {
  const rows = [
    { desc: 'Restaurante Sabor da Serra', date: '04/10 · cartão de crédito', amount: 'R$ 118,90', suggestion: 'Alimentação / Restaurante' },
    { desc: 'Farmácia Central', date: '03/10 · cartão de crédito', amount: 'R$ 209,50', suggestion: 'Saúde / Farmácia' },
  ]
  return (
    <Frame label="Exemplo da janela para categorizar despesas sem categoria direto do painel, com sugestões">
      <div className="rounded-xl border border-sand-200 bg-white shadow-sm">
        <div className="border-b border-sand-200 px-4 py-3">
          <p className="text-sm font-extrabold text-ink">Despesas sem categoria</p>
          <p className="text-[10.5px] text-ink-mute">Lançamentos de outubro ainda sem classificação</p>
        </div>
        <ul className="divide-y divide-sand-200">
          {rows.map(r => (
            <li key={r.desc} className="px-4 py-3">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[12px] font-bold text-ink">{r.desc}</p>
                  <p className="text-[10.5px] text-ink-mute">{r.date}</p>
                </div>
                <p className="shrink-0 text-[12px] font-extrabold text-ink">{r.amount}</p>
              </div>
              <div className="mt-2 flex items-center justify-between rounded-lg border border-sand-300 bg-white px-3 py-1.5 text-[11px] text-ink-mute">
                Escolher categoria…
                <Icon name="chevron" size={14} />
              </div>
              <span className="mt-1.5 inline-flex items-center gap-1 rounded-full border border-amber-300 bg-amber-50 px-2.5 py-0.5 text-[10.5px] font-semibold text-amber-900">
                <Icon name="spark" size={12} /> Usar sugestão: {r.suggestion}
              </span>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between border-t border-sand-200 px-4 py-2.5">
          <p className="text-[11px] text-ink-soft">Faltam <strong className="text-ink">2</strong> · <strong className="text-ink">R$ 328,40</strong></p>
          <span className="rounded-lg bg-green-600 px-3 py-1.5 text-[11px] font-bold text-white">Fechar</span>
        </div>
      </div>
    </Frame>
  )
}

// ── Cartões e gastos por categoria ─────────────────────────────────────────────
const SLICES = [
  { name: 'Alimentação', value: 28, amount: 'R$ 1.797,74', color: '#f59e0b', delta: '−R$ 212' },
  { name: 'Lazer', value: 22, amount: 'R$ 1.412,51', color: '#8b5cf6', delta: '+R$ 98' },
  { name: 'Saúde', value: 17, amount: 'R$ 1.091,49', color: '#ef4444', delta: '−R$ 340' },
  { name: 'Moradia', value: 14, amount: 'R$ 898,87', color: '#14b8a6', delta: '' },
  { name: 'Transporte', value: 9, amount: 'R$ 577,85', color: '#3b82f6', delta: '−R$ 64' },
  { name: 'Outras', value: 10, amount: 'R$ 642,05', color: '#94a3b8', delta: '' },
]

export function CardsMock() {
  const R = 40
  const C = 2 * Math.PI * R
  let offset = 0
  return (
    <Frame label="Exemplo da fatura do cartão aberta por categoria, com comparação com o mês anterior">
      <div className="flex items-center justify-between">
        <p className="text-sm font-extrabold text-ink">Gastos por categoria</p>
        <div className="flex rounded-lg bg-sand-200 p-0.5 text-[10.5px] font-semibold">
          <span className="rounded-md bg-white px-2.5 py-0.5 text-ink shadow-sm">Categoria</span>
          <span className="px-2.5 py-0.5 text-ink-mute">Tag</span>
        </div>
      </div>
      <div className="mt-3 grid items-center gap-4 sm:grid-cols-[150px_1fr]">
        <div className="relative mx-auto h-[150px] w-[150px]">
          <svg viewBox="0 0 100 100" className="-rotate-90" aria-hidden>
            {SLICES.map(s => {
              const len = (s.value / 100) * C
              const el = <circle key={s.name} cx="50" cy="50" r={R} fill="none" stroke={s.color} strokeWidth="15" strokeDasharray={`${len - 1.2} ${C - len + 1.2}`} strokeDashoffset={-offset} />
              offset += len
              return el
            })}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[10px] text-ink-mute">Fatura do mês</span>
            <span className="text-[15px] font-extrabold tracking-tight text-ink">R$ 6.420,51</span>
          </div>
        </div>
        <ul className="space-y-1">
          {SLICES.map(s => (
            <li key={s.name} className="flex items-center gap-2 rounded-lg px-1.5 py-1 text-[11.5px]">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: s.color }} />
              <span className="flex-1 font-semibold text-ink">{s.name}</span>
              <span className="text-ink-mute">{s.value}%</span>
              <span className="flex w-[78px] flex-col items-end leading-tight">
                <span className="font-bold text-ink">{s.amount}</span>
                {s.delta && <span className={`text-[10px] ${s.delta.startsWith('+') ? 'text-red-500' : 'text-green-400'}`}>{s.delta}</span>}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Frame>
  )
}

// ── Cofre digital ──────────────────────────────────────────────────────────────
export function VaultMock() {
  const rows = [
    { name: 'Internet banking', user: 'marina.souza', strength: 4, cat: 'Banco' },
    { name: 'E-mail principal', user: 'marina@exemplo.com', strength: 4, cat: 'E-mail' },
    { name: 'Streaming de vídeo', user: 'marina@exemplo.com', strength: 2, cat: 'Entretenimento' },
    { name: 'Plano de saúde', user: '004.218.77', strength: 3, cat: 'Saúde' },
  ]
  return (
    <Frame label="Exemplo do cofre digital com senhas protegidas e indicador de força de cada senha">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-600 text-white"><Icon name="lock" size={16} /></span>
          <div>
            <p className="text-sm font-extrabold text-ink">Cofre digital</p>
            <p className="text-[10.5px] text-ink-mute">4 itens protegidos</p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-[10px] font-bold text-green-600 ring-1 ring-green-100">
          <Icon name="shield" size={12} /> Criptografado no seu aparelho
        </span>
      </div>
      <ul className="mt-3 space-y-1.5">
        {rows.map(r => (
          <li key={r.name} className="flex items-center gap-3 rounded-xl border border-sand-200 bg-white px-3 py-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sand-100 text-green-600"><Icon name="key" size={15} /></span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[12px] font-bold text-ink">{r.name}</p>
              <p className="truncate text-[10.5px] text-ink-mute">{r.user} · <span className="tracking-widest">••••••••••</span></p>
            </div>
            <div className="hidden flex-col items-end gap-1 sm:flex">
              <span className="text-[10px] text-ink-mute">{r.cat}</span>
              <span className="flex gap-0.5" aria-hidden>
                {[1, 2, 3, 4].map(n => (
                  <span key={n} className={`h-1.5 w-4 rounded-full ${n <= r.strength ? (r.strength <= 2 ? 'bg-amber-400' : 'bg-green-400') : 'bg-sand-200'}`} />
                ))}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </Frame>
  )
}

// ── Contatos ───────────────────────────────────────────────────────────────────
export function ContactsMock() {
  const people = [
    { n: 'Lívia Andrade', i: 'LA', c: 'bg-pink-700', tag: 'Família', phone: '(11) 98412-7730', bday: 'Aniversário em 8 dias' },
    { n: 'Paulo Henrique', i: 'PH', c: 'bg-teal-700', tag: 'Amigos', phone: '(21) 99105-2284', bday: '27 de Out' },
    { n: 'Clínica Bem Viver', i: 'CB', c: 'bg-indigo-700', tag: 'Saúde', phone: '(31) 3274-5510', bday: '' },
  ]
  const months = [1, 0, 2, 1, 0, 1, 0, 1, 2, 3, 1, 1]
  return (
    <Frame label="Exemplo da tela de contatos com resumo de aniversariantes, importação e exportação">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm font-extrabold text-ink">Contatos</p>
        <div className="flex gap-1.5 text-[10.5px] font-semibold">
          <span className="inline-flex items-center gap-1 rounded-lg border border-sand-300 bg-white px-2.5 py-1.5 text-ink"><Icon name="upload" size={12} /> Importar</span>
          <span className="inline-flex items-center gap-1 rounded-lg border border-sand-300 bg-white px-2.5 py-1.5 text-ink"><Icon name="download" size={12} /> Exportar</span>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        <div className="rounded-xl bg-gradient-to-br from-[#2a78d6] to-[#1b57a8] p-2.5 text-white">
          <p className="text-[10px] text-white/85">Seus contatos</p>
          <p className="text-xl font-extrabold leading-tight">24</p>
        </div>
        <div className="rounded-xl border border-yellow-200 bg-gradient-to-br from-yellow-50 to-white p-2.5">
          <p className="text-[10px] text-yellow-900">Favoritos</p>
          <p className="text-xl font-extrabold leading-tight text-ink">3</p>
        </div>
        <div className="rounded-xl border border-pink-200 bg-gradient-to-br from-pink-50 to-white p-2.5">
          <p className="text-[10px] text-pink-900">Aniversariantes</p>
          <div className="mt-1 flex h-6 items-end gap-[2px]" aria-hidden>
            {months.map((m, i) => <span key={i} className={`flex-1 rounded-t ${i === 9 ? 'bg-pink-600' : 'bg-pink-300'}`} style={{ height: `${4 + m * 6}px` }} />)}
          </div>
        </div>
      </div>

      <ul className="mt-3 space-y-1.5">
        {people.map(p => (
          <li key={p.n} className="flex items-center gap-3 rounded-xl border border-sand-200 bg-white p-2.5">
            <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white ${p.c}`}>{p.i}</span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[12px] font-bold text-ink">{p.n}</p>
              <p className="truncate text-[10.5px] text-ink-mute">{p.phone}{p.bday && <> · <span className={p.bday.startsWith('Anivers') ? 'font-semibold text-orange-700' : ''}>{p.bday}</span></>}</p>
            </div>
            <span className="rounded-full border border-green-100 bg-green-50 px-2 py-0.5 text-[10px] font-semibold text-green-600">{p.tag}</span>
          </li>
        ))}
      </ul>
    </Frame>
  )
}
