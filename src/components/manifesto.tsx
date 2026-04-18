'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function Manifesto() {
  const ref1 = useScrollAnimation<HTMLParagraphElement>()
  const ref2 = useScrollAnimation<HTMLParagraphElement>()

  return (
    <section className="bg-[#0B0F1A] py-24 md:py-40">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16">
        <p
          ref={ref1}
          className="text-[clamp(1.35rem,2.5vw,2.2rem)] leading-[1.5] text-[#9CA3AF] font-normal tracking-[-0.01em] max-w-[950px] opacity-0 translate-y-12 transition-all duration-[900ms]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          En contextos de alta complejidad, la vision de un lider y la rentabilidad de una organizacion son{' '}
          <strong className="text-white font-semibold">activos vulnerables</strong>. El ruido del entorno, la fragilidad de las estructuras y las amenazas externas operan constantemente para erosionar el poder y diluir los resultados. Arcano no asesora;{' '}
          <em className="text-[#C5A85F] not-italic font-medium">interviene</em>. Diseñamos escenarios de victoria con una precision forjada en la gestion de{' '}
          <strong className="text-white font-semibold">activos criticos y decisiones de Estado</strong>.
        </p>
        <p
          ref={ref2}
          className="mt-12 text-[0.78rem] tracking-[3px] uppercase text-[#C5A85F] font-semibold opacity-0 translate-y-12 transition-all duration-[900ms]"
        >
          Soberania Operativa
        </p>
      </div>
    </section>
  )
}
