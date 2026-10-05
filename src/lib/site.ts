export const APP_URL = 'https://app.vidaecontrole.com.br'
export const REGISTER_URL = `${APP_URL}/register`
export const SUPPORT_EMAIL = 'suporte@vidaecontrole.com.br'

// Identificação do fornecedor (Decreto 7.962/2013, art. 2º). Mantenha igual às páginas de Privacidade e Termos.
export const COMPANY = {
  name: 'Amplitude Distribuidora Ltda',
  cnpj: '38.143.278/0001-90',
  place: 'Maringá, PR',
}

// Preços iguais aos planos cadastrados no app (Mercado Pago)
export const PRICE_MONTHLY = 39.9
export const PRICE_YEARLY = 358.8
export const PRICE_YEARLY_PER_MONTH = PRICE_YEARLY / 12 // 29,90
export const YEARLY_SAVING = PRICE_MONTHLY * 12 - PRICE_YEARLY // 120,00

export const brl = (v: number) =>
  v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

export const NAV = [
  { href: '#painel', label: 'O painel' },
  { href: '#funcionalidades', label: 'Funcionalidades' },
  { href: '#seguranca', label: 'Segurança' },
  { href: '#precos', label: 'Preços' },
  { href: '#faq', label: 'Dúvidas' },
]

// Perguntas em JSON para a mesma fonte alimentar a página e os dados estruturados do index.html
import faqData from './faq.json'
export const FAQS: { q: string; a: string }[] = faqData
