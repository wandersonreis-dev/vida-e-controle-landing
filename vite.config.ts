import { readFileSync } from 'node:fs'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

const SITE = 'https://vidaecontrole.com.br'

// Dados estruturados (SoftwareApplication + perguntas frequentes) gerados das mesmas fontes da página,
// para o que o Google lê ser sempre igual ao que a pessoa vê.
function structuredData(): Plugin {
  return {
    name: 'structured-data',
    transformIndexHtml(html) {
      const faq = JSON.parse(readFileSync(new URL('./src/lib/faq.json', import.meta.url), 'utf-8')) as { q: string; a: string }[]
      const data = [
        {
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Vida e Controle',
          url: SITE,
          inLanguage: 'pt-BR',
          applicationCategory: 'FinanceApplication',
          operatingSystem: 'Web, Android, iOS',
          description:
            'Painel que reúne controle financeiro pessoal, faturas de cartão, cofre de senhas com criptografia no aparelho e contatos com aniversários.',
          image: `${SITE}/og-image.png`,
          offers: [
            { '@type': 'Offer', name: 'Plano Mensal', price: '39.90', priceCurrency: 'BRL', url: `${SITE}/#precos` },
            { '@type': 'Offer', name: 'Plano Anual', price: '358.80', priceCurrency: 'BRL', url: `${SITE}/#precos` },
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        },
      ]
      return html.replace('<!--STRUCTURED-DATA-->', `<script type="application/ld+json">${JSON.stringify(data)}</script>`)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), structuredData()],
})
