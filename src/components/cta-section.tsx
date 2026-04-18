'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function CTASection() {
  const ref = useScrollAnimation()

  return (
    <section id="contacto" className="bg-[#0B0F1A] py-24 md:py-48 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(197,168,95,0.04)_0%,transparent_70%)]" />
      <div className="max-w-[1200px] mx-auto px-6 md:px-16 relative z-10">
        <div
          ref={ref}
          className="opacity-0 translate-y-12 transition-all duration-[900ms]"
        >
          <h2
            className="text-[clamp(2rem,4vw,3.5rem)] text-white font-bold tracking-[-0.025em] leading-[1.08] mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Usted define el objetivo.
          </h2>
          <p className="text-[#9CA3AF] text-lg mb-10">
            Nosotros aseguramos las condiciones para que ocurra.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contacto@arcanostrategy.com"
              className="inline-block px-9 py-4 bg-[#C5A85F] text-[#0B0F1A] text-[0.75rem] font-semibold tracking-[1.8px] uppercase hover:bg-[#D4BA74] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(197,168,95,0.3)]"
            >
              Solicitar Reunion
            </a>
            <a
              href="mailto:contacto@arcanostrategy.com"
              className="inline-block px-9 py-4 border border-white/25 text-white text-[0.75rem] font-semibold tracking-[1.8px] uppercase hover:border-white hover:bg-white/[0.04] transition-all hover:-translate-y-0.5"
            >
              Enviar Mensaje
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
