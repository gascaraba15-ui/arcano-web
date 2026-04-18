'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function Speech() {
  const ref = useScrollAnimation()

  return (
    <section className="relative overflow-hidden py-24 md:py-40 bg-[#060911]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(197,168,95,0.04)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(6,9,17,0.7)] to-[rgba(6,9,17,0.9)]" />
      <div className="max-w-[1200px] mx-auto px-6 md:px-16 relative z-10">
        <div
          ref={ref}
          className="max-w-[800px] opacity-0 translate-y-12 transition-all duration-[900ms]"
        >
          <blockquote
            className="text-[clamp(1.3rem,2.2vw,1.8rem)] leading-[1.6] text-[#9CA3AF] font-normal border-l-2 border-[#C5A85F] pl-8 mb-8"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Arcano Strategy Group no es una agencia de servicios; es una{' '}
            <strong className="text-white font-semibold">unidad de intervencion estrategica</strong>. La Estrategia, la Narrativa Cinematografica, la Seguridad de Elite, la Logistica de Grandes Eventos y la Inteligencia Artificial funcionan como un solo organismo.{' '}
            <strong className="text-white font-semibold">Blindamos su operacion, dominamos su narrativa y optimizamos sus sistemas</strong>{' '}
            para que su proyecto no sea rehen de las circunstancias.
          </blockquote>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-[0.85rem] font-medium text-[#C5A85F] hover:gap-4 transition-all"
          >
            Iniciar conversacion <span>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  )
}
