import { Icon } from '../components/Icons'
import { Reveal } from '../components/Reveal'
import { FAQS, SUPPORT_EMAIL } from '../lib/site'

export function Faq() {
  return (
    <section id="faq" className="px-5 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.4fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-green-400">Dúvidas</p>
          <h2 className="display mt-4 text-4xl text-ink sm:text-5xl">O que as pessoas perguntam antes de começar</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Não achou a sua? Escreva para{' '}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="font-semibold text-green-600 underline underline-offset-4">{SUPPORT_EMAIL}</a>.
          </p>
        </Reveal>

        <Reveal>
          <div className="divide-y divide-sand-200 border-y border-sand-200">
            {FAQS.map(f => (
              <details key={f.q} className="group py-1">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-lg font-extrabold leading-snug text-ink [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sand-100 text-green-600 transition-transform duration-200 group-open:rotate-180">
                    <Icon name="chevron" size={18} />
                  </span>
                </summary>
                <p className="max-w-2xl pb-5 leading-relaxed text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
