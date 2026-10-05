// Logomarca montada em código (símbolo em SVG + texto): fica nítida em qualquer tamanho e o slogan é legível.
// `tone="light"` é a versão para fundos escuros.
export function Logo({ tone = 'dark', className = '' }: { tone?: 'dark' | 'light'; className?: string }) {
  const light = tone === 'light'
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <img
        src={light ? '/simbolo-branco.svg' : '/icon.svg'}
        alt=""
        width={44}
        height={44}
        className="h-10 w-10 shrink-0 sm:h-11 sm:w-11"
        draggable={false}
      />
      <span className="flex flex-col" translate="no">
        <span className={`font-brand text-[1.65rem] font-bold leading-none tracking-tight sm:text-[1.8rem] ${light ? 'text-white' : 'text-ink'}`}>
          Vida <span className={`font-normal italic ${light ? 'text-green-200' : 'text-green-400'}`}>e</span> Controle
        </span>
        <span className={`mt-1.5 text-[10px] font-bold uppercase leading-none tracking-[0.17em] sm:text-[11px] ${light ? 'text-green-200' : 'text-green-500'}`}>
          Concentre-se no que importa
        </span>
      </span>
    </span>
  )
}
