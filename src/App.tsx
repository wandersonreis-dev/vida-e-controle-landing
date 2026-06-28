import { useState } from 'react'

const APP_URL = 'https://vida-e-controle-raab.vercel.app'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <span className="font-bold text-gray-900 text-lg">Vida e Controle</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#funcionalidades" className="text-sm text-gray-600 hover:text-green-600 transition-colors">Funcionalidades</a>
          <a href="#como-funciona" className="text-sm text-gray-600 hover:text-green-600 transition-colors">Como funciona</a>
          <a href="#precos" className="text-sm text-gray-600 hover:text-green-600 transition-colors">Preços</a>
          <a href="#faq" className="text-sm text-gray-600 hover:text-green-600 transition-colors">FAQ</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href={APP_URL} className="text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors">Entrar</a>
          <a href={`${APP_URL}/register`} className="text-sm bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors">
            Começar grátis
          </a>
        </div>

        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3">
          <a href="#funcionalidades" className="block text-sm text-gray-600 py-2" onClick={() => setMenuOpen(false)}>Funcionalidades</a>
          <a href="#como-funciona" className="block text-sm text-gray-600 py-2" onClick={() => setMenuOpen(false)}>Como funciona</a>
          <a href="#precos" className="block text-sm text-gray-600 py-2" onClick={() => setMenuOpen(false)}>Preços</a>
          <a href="#faq" className="block text-sm text-gray-600 py-2" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a href={`${APP_URL}/register`} className="block text-sm bg-green-600 text-white font-semibold px-4 py-2.5 rounded-lg text-center">Começar grátis</a>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-green-50 via-white to-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
          30 dias grátis — sem cartão de crédito
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight max-w-4xl">
          Organize sua{' '}
          <span className="text-green-600">vida inteira</span>{' '}
          em um só lugar
        </h1>

        <p className="mt-8 text-xl md:text-2xl text-gray-500 max-w-2xl leading-relaxed">
          Finanças, senhas e contatos — tudo protegido com criptografia militar,
          tudo no seu controle.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href={`${APP_URL}/register`}
            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg shadow-green-200 hover:shadow-green-300 hover:-translate-y-0.5"
          >
            Experimentar grátis por 30 dias
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="#como-funciona"
            className="inline-flex items-center justify-center gap-2 text-gray-700 font-semibold px-8 py-4 rounded-xl text-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all"
          >
            <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Ver como funciona
          </a>
        </div>

        <p className="mt-4 text-sm text-gray-400">Sem cartão de crédito · Cancele quando quiser · Dados seguros</p>

        <div className="mt-16 relative">
          <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-800 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div className="flex-1 mx-4 bg-gray-700 rounded-md h-5 flex items-center px-3">
                <span className="text-gray-400 text-xs">app.vidaecontrole.com.br/dashboard</span>
              </div>
            </div>
            <div className="flex" style={{minHeight: 320}}>
              <div className="w-48 bg-gray-800 p-4 space-y-1 hidden sm:block">
                <div className="text-gray-400 text-xs font-semibold uppercase mb-3 px-2">Menu</div>
                {['Dashboard', 'Finanças', 'Cofre Digital', 'Contatos', 'Agenda'].map((item, i) => (
                  <div key={item} className={`flex items-center gap-2 px-2 py-2 rounded-lg text-sm ${i === 0 ? 'bg-green-600 text-white' : 'text-gray-400'}`}>
                    <div className="w-3 h-3 rounded-sm bg-current opacity-70" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex-1 p-6 space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Saldo Total', value: 'R$ 12.450', color: 'text-green-400' },
                    { label: 'Senhas Salvas', value: '47 itens', color: 'text-blue-400' },
                    { label: 'Contatos', value: '128 pessoas', color: 'text-purple-400' },
                  ].map(card => (
                    <div key={card.label} className="bg-gray-800 rounded-xl p-3">
                      <p className="text-gray-500 text-xs">{card.label}</p>
                      <p className={`font-bold text-lg mt-1 ${card.color}`}>{card.value}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-800 rounded-xl p-4">
                  <p className="text-gray-400 text-xs font-semibold mb-3">ÚLTIMAS TRANSAÇÕES</p>
                  {[
                    { name: 'Supermercado', val: '- R$ 287,50', color: 'text-red-400' },
                    { name: 'Salário', val: '+ R$ 5.200,00', color: 'text-green-400' },
                    { name: 'Netflix', val: '- R$ 39,90', color: 'text-red-400' },
                  ].map(t => (
                    <div key={t.name} className="flex justify-between items-center py-1.5 border-b border-gray-700 last:border-0">
                      <span className="text-gray-300 text-sm">{t.name}</span>
                      <span className={`text-sm font-semibold ${t.color}`}>{t.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialProof() {
  return (
    <section className="py-10 border-y border-gray-100 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16 text-center">
          {[
            { value: '+500', label: 'usuários ativos' },
            { value: '30 dias', label: 'de trial gratuito' },
            { value: 'AES-256', label: 'criptografia militar' },
            { value: '100%', label: 'dados no Brasil' },
          ].map(stat => (
            <div key={stat.label}>
              <p className="text-2xl md:text-3xl font-extrabold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Problem() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-sm font-semibold text-red-500 uppercase tracking-wider">O problema que todo mundo tem</span>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          Você ainda usa planilha, caderninho e 5 apps diferentes?
        </h2>
        <p className="mt-6 text-lg text-gray-500 leading-relaxed">
          Controle financeiro num app, senhas em outro, contatos no celular e aniversários que você sempre esquece.
          Essa bagunça tem custo: você perde tempo, perde dinheiro e ainda fica vulnerável.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { emoji: '😤', title: 'Informações espalhadas', desc: 'Você nunca sabe onde está cada coisa quando mais precisa.' },
            { emoji: '😰', title: 'Senhas inseguras', desc: 'Reutilizar senhas ou anotar em papel é a porta aberta para hackers.' },
            { emoji: '😔', title: 'Dinheiro sem rumo', desc: 'Sem controle claro, o dinheiro vai embora sem você saber pra onde.' },
          ].map(item => (
            <div key={item.title} className="bg-red-50 border border-red-100 rounded-2xl p-6 text-left">
              <div className="text-3xl mb-3">{item.emoji}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-lg font-semibold text-gray-900">
          A solução que você precisava estava aqui o tempo todo.
        </div>
      </div>
    </section>
  )
}

function Features() {
  const features = [
    {
      icon: (
        <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      badge: 'Finanças',
      badgeColor: 'bg-green-100 text-green-700',
      title: 'Controle financeiro que você realmente vai usar',
      desc: 'Registre receitas, despesas e transferências. Acompanhe seu saldo em tempo real, crie orçamentos por categoria e entenda para onde vai cada centavo do seu dinheiro.',
      items: ['Dashboard com visão geral do mês', 'Categorias e subcategorias personalizadas', 'Controle de cartões e contas', 'Relatórios de fluxo de caixa', 'Metas financeiras'],
      color: 'green',
      highlight: false,
    },
    {
      icon: (
        <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      badge: 'Cofre Digital',
      badgeColor: 'bg-blue-100 text-blue-700',
      title: 'Suas senhas protegidas com criptografia militar',
      desc: 'O único app de finanças pessoais do Brasil com cofre digital integrado. Guarde senhas, documentos e informações sigilosas com criptografia AES-256 — a mesma usada por bancos.',
      items: ['Criptografia AES-256 ponta a ponta', 'Senha mestra que só você conhece', 'Armazenamento de senhas e documentos', 'Categorias por tipo (banco, email, social)', 'Nunca perdemos sua senha — nem podemos ver'],
      color: 'blue',
      highlight: true,
    },
    {
      icon: (
        <svg className="w-7 h-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      badge: 'Contatos & Agenda',
      badgeColor: 'bg-purple-100 text-purple-700',
      title: 'Nunca mais esqueça um aniversário importante',
      desc: 'Gerencie seus contatos pessoais e profissionais com lembretes automáticos de aniversários, datas especiais e compromissos — tudo integrado com sua agenda.',
      items: ['Agenda de contatos completa', 'Alertas de aniversário automáticos', 'Categorias (família, trabalho, amigos)', 'Histórico de interações', 'Integração com a agenda'],
      color: 'purple',
      highlight: false,
    },
  ]

  const colorMap: Record<string, string> = {
    green: 'bg-green-50 border-green-100',
    blue: 'bg-blue-50 border-blue-100',
    purple: 'bg-purple-50 border-purple-100',
  }
  const checkColorMap: Record<string, string> = {
    green: 'text-green-600',
    blue: 'text-blue-600',
    purple: 'text-purple-600',
  }

  return (
    <section id="funcionalidades" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">Tudo em um só lugar</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            Três ferramentas essenciais, uma única assinatura
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Enquanto outros apps resolvem só um problema, o Vida e Controle cuida da sua vida financeira, digital e social.
          </p>
        </div>

        <div className="space-y-8">
          {features.map(f => (
            <div key={f.badge} className={`rounded-2xl border p-8 md:p-10 ${colorMap[f.color]} ${f.highlight ? 'ring-2 ring-blue-400 ring-offset-2' : ''}`}>
              {f.highlight && (
                <div className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                  Exclusivo — nenhum concorrente tem isso
                </div>
              )}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100">
                      {f.icon}
                    </div>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${f.badgeColor}`}>{f.badge}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{f.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{f.desc}</p>
                </div>
                <div className="flex-1">
                  <ul className="space-y-3">
                    {f.items.map(item => (
                      <li key={item} className="flex items-start gap-3">
                        <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${checkColorMap[f.color]}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">Simples assim</span>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">Comece em menos de 2 minutos</h2>
        <p className="mt-4 text-lg text-gray-500">Sem instalação, sem configuração complicada. Só criar sua conta e começar.</p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { step: '01', title: 'Crie sua conta grátis', desc: 'Só e-mail e senha. Sem cartão de crédito, sem burocracia. Em 30 segundos você já está dentro.', icon: '✉️' },
            { step: '02', title: 'Configure seu perfil', desc: 'Adicione suas contas, crie categorias e importe seus dados. Nossa interface intuitiva guia você em cada passo.', icon: '⚙️' },
            { step: '03', title: 'Tenha controle total', desc: 'Acompanhe finanças, guarde senhas e gerencie contatos — tudo em um só lugar, do celular ou computador.', icon: '🎯' },
          ].map(s => (
            <div key={s.step} className="relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-green-600 text-white text-sm font-bold rounded-full flex items-center justify-center mx-auto mb-4">{s.step}</div>
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href={`${APP_URL}/register`}
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg shadow-green-200"
          >
            Criar minha conta grátis
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <p className="mt-3 text-sm text-gray-400">30 dias grátis · Sem cartão · Cancele quando quiser</p>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const testimonials = [
    {
      name: 'Fernanda Oliveira',
      role: 'Designer Freelancer, SP',
      avatar: 'FO',
      color: 'bg-pink-500',
      text: 'Finalmente um app que entende que minha vida não é só finanças. O cofre digital foi o que me conquistou — guardo todas as senhas lá e durmo tranquila sabendo que estão seguras.',
      stars: 5,
    },
    {
      name: 'Ricardo Mendes',
      role: 'Engenheiro, MG',
      avatar: 'RM',
      color: 'bg-blue-500',
      text: 'Cancelo um app por mês porque fico me perdendo entre vários. No Vida e Controle, tudo está num lugar só. Em 3 semanas já identifiquei onde estava desperdiçando R$ 800 por mês.',
      stars: 5,
    },
    {
      name: 'Camila Santos',
      role: 'Professora, RJ',
      avatar: 'CS',
      color: 'bg-purple-500',
      text: 'Os alertas de aniversário da agenda me salvaram várias vezes! E o controle financeiro é simples sem ser simplório. Recomendo para toda família.',
      stars: 5,
    },
  ]

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">O que dizem nossos usuários</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">Pessoas reais, resultados reais</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
              <div className="flex text-yellow-400 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed flex-1">"{t.text}"</p>
              <div className="flex items-center gap-3 mt-5 pt-5 border-t border-gray-100">
                <div className={`w-10 h-10 rounded-full ${t.color} text-white text-sm font-bold flex items-center justify-center`}>{t.avatar}</div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section id="precos" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">Planos transparentes</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">Comece grátis. Assine quando quiser.</h2>
          <p className="mt-4 text-lg text-gray-500">Sem surpresas na fatura. Cancele com um clique.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-2xl p-6 bg-white">
            <h3 className="font-bold text-gray-900 text-lg">Trial</h3>
            <p className="text-sm text-gray-500 mt-1">Para começar sem risco</p>
            <div className="mt-4 mb-6">
              <span className="text-4xl font-extrabold text-gray-900">Grátis</span>
              <span className="text-gray-500 ml-2">por 30 dias</span>
            </div>
            <ul className="space-y-2.5 mb-6">
              {['Acesso completo a todos os módulos', 'Finanças ilimitadas', 'Cofre digital', 'Agenda e contatos', 'Suporte por e-mail'].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a href={`${APP_URL}/register`} className="block text-center py-3 px-4 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors text-sm">
              Começar grátis
            </a>
          </div>

          <div className="border border-gray-200 rounded-2xl p-6 bg-white">
            <h3 className="font-bold text-gray-900 text-lg">Mensal</h3>
            <p className="text-sm text-gray-500 mt-1">Para uso contínuo</p>
            <div className="mt-4 mb-6">
              <span className="text-4xl font-extrabold text-gray-900">R$39</span>
              <span className="text-xl font-bold text-gray-900">,90</span>
              <span className="text-gray-500 ml-2">/mês</span>
            </div>
            <ul className="space-y-2.5 mb-6">
              {['Tudo do trial incluso', 'Sem limite de registros', 'Sincronização em tempo real', 'Backups automáticos diários', 'Suporte prioritário'].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a href={`${APP_URL}/register`} className="block text-center py-3 px-4 rounded-xl border border-green-600 text-green-600 font-semibold hover:bg-green-50 transition-colors text-sm">
              Assinar mensal
            </a>
          </div>

          <div className="border-2 border-green-500 rounded-2xl p-6 bg-green-50 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">MAIS POPULAR — ECONOMIZE 25%</span>
            </div>
            <h3 className="font-bold text-gray-900 text-lg">Anual</h3>
            <p className="text-sm text-gray-500 mt-1">Melhor custo-benefício</p>
            <div className="mt-4 mb-1">
              <span className="text-4xl font-extrabold text-gray-900">R$29</span>
              <span className="text-xl font-bold text-gray-900">,90</span>
              <span className="text-gray-500 ml-2">/mês</span>
            </div>
            <p className="text-xs text-gray-500 mb-6">Cobrado anualmente — R$358,80/ano</p>
            <ul className="space-y-2.5 mb-6">
              {['Tudo do plano mensal', '2 meses grátis no total', 'Histórico ilimitado', 'Exportação de relatórios', 'Suporte VIP com prioridade'].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a href={`${APP_URL}/register`} className="block text-center py-3 px-4 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold transition-colors text-sm shadow-md shadow-green-200">
              Assinar anual e economizar
            </a>
          </div>
        </div>

        <p className="text-center mt-6 text-sm text-gray-400">
          Todos os planos incluem acesso completo — finanças, cofre digital, contatos e agenda.
          Pagamento seguro via Mercado Pago. Cancele quando quiser.
        </p>
      </div>
    </section>
  )
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const faqs = [
    { q: 'O Vida e Controle é seguro para guardar minhas senhas?', a: 'Sim. Usamos criptografia AES-256, a mesma utilizada por bancos e pelo governo. Sua senha mestra é conhecida apenas por você — nem nós conseguimos acessar. Se você esquecer, não há recuperação, pois os dados são criptografados localmente antes de serem enviados.' },
    { q: 'Meus dados financeiros ficam seguros?', a: 'Todos os dados são armazenados em servidores no Brasil com criptografia em trânsito e em repouso. Não compartilhamos nenhuma informação com terceiros. Você é o único dono dos seus dados.' },
    { q: 'Posso cancelar quando quiser?', a: 'Sim, sem burocracia. Cancele com um clique dentro do próprio app. Não há multa ou período de fidelidade. Após o cancelamento, seus dados ficam disponíveis até o fim do período pago.' },
    { q: 'O trial realmente não precisa de cartão de crédito?', a: 'Realmente não! Você cria sua conta e tem 30 dias de acesso completo a todos os recursos sem fornecer nenhum dado de pagamento. Só pedimos quando você decidir continuar.' },
    { q: 'Funciona no celular?', a: 'O Vida e Controle é um web app responsivo — funciona perfeitamente no celular, tablet e computador, em qualquer navegador. Não é necessário baixar nada.' },
    { q: 'E se eu já usar outro app de finanças?', a: 'Sem problema. Você pode usar ambos durante o trial para comparar. Também oferecemos importação de dados de planilhas para facilitar a migração.' },
  ]

  return (
    <section id="faq" className="py-20 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">Dúvidas frequentes</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">Perguntas que todo mundo faz</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-gray-900 text-sm md:text-base">{faq.q}</span>
                <svg className={`w-5 h-5 text-gray-400 flex-shrink-0 ml-3 transition-transform ${open === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-50">
                  <div className="pt-3">{faq.a}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-green-600 to-green-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
      </div>
      <div className="max-w-3xl mx-auto text-center relative">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
          Sua vida organizada começa hoje
        </h2>
        <p className="mt-6 text-xl text-green-100 leading-relaxed">
          Junte-se a centenas de brasileiros que finalmente têm controle das suas finanças,
          senhas e vida pessoal — tudo em um só lugar.
        </p>
        <div className="mt-10">
          <a
            href={`${APP_URL}/register`}
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-green-50 text-green-700 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-xl"
          >
            Começar grátis por 30 dias
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
        <p className="mt-4 text-green-200 text-sm">Sem cartão de crédito · Cancele quando quiser · Dados seguros no Brasil</p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="font-bold text-white text-lg">Vida e Controle</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Organize sua vida financeira, proteja suas senhas e gerencie seus contatos — tudo com segurança e simplicidade.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Produto</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#funcionalidades" className="hover:text-white transition-colors">Funcionalidades</a></li>
              <li><a href="#precos" className="hover:text-white transition-colors">Preços</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href={APP_URL} className="hover:text-white transition-colors">Entrar</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="mailto:suporte@vidaecontrole.com.br" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs">© {new Date().getFullYear()} Vida e Controle. Todos os direitos reservados.</p>
          <p className="text-xs">Feito com amor no Brasil · Dados armazenados no Brasil</p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Problem />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
