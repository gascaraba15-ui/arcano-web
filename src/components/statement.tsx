'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function Statement() {
  const ref = useScrollAnimation()

  return (
    <section className="bg-white py-24 md:py-48 text-center">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16">
        <h2
          ref={ref}
          className="text-[clamp(1.8rem,4vw,3.5rem)] text-[#0B0F1A] font-bold tracking-[-0.025em] leading-[1.12] max-w-[850px] mx-auto opacity-0 translate-y-12 transition-all duration-[900ms]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          No estamos aqui para decirles que esta pasando, sino para asegurar que lo que ustedes decidieron, suceda.
        </h2>
        <p className="text-[#6B7280] mt-6 text-base">Arcano Strategy Group</p>
      </div>
    </section>
  )
}
