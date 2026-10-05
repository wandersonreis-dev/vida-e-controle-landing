import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { TrustStrip, Problem } from './sections/Trust'
import { Features } from './sections/Features'
import { Security } from './sections/Security'
import { Start } from './sections/Start'
import { Pricing } from './sections/Pricing'
import { Faq } from './sections/Faq'
import { FinalCta, Footer, MobileCta } from './sections/Closing'

export default function App() {
  return (
    <div className="min-h-screen">
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-green-600 focus:px-4 focus:py-2 focus:text-white">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <TrustStrip />
        <Problem />
        <Features />
        <Security />
        <Start />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileCta />
    </div>
  )
}
