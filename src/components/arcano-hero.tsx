'use client'

import { SplineScene } from "@/components/ui/splite"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { SpotlightCursor } from "@/components/ui/spotlight-cursor"

export function ArcanoHero() {
  return (
    <Card className="w-full min-h-screen border-0 rounded-none bg-black relative overflow-hidden">
      {/* Aceternity spotlight glow */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      {/* ibelick cursor-following spotlight */}
      <SpotlightCursor
        className="z-10"
        size={300}
        springOptions={{ bounce: 0, duration: 0.05 }}
      />

      <div className="flex flex-col md:flex-row h-full min-h-screen">
        {/* Left content */}
        <div className="flex-1 p-8 md:p-16 lg:p-20 relative z-10 flex flex-col justify-center">
          <span
            className="inline-block text-[#C5A85F] text-xs font-semibold tracking-[4px] uppercase border border-[rgba(197,168,95,0.25)] px-4 py-1.5 mb-6 w-fit"
            style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
          >
            Unidad de Intervencion Estrategica
          </span>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-[1.05] tracking-tight max-w-xl"
            style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
          >
            Usted define el objetivo. Nosotros aseguramos que ocurra.
          </h1>

          <p className="mt-6 text-neutral-300 max-w-lg leading-relaxed text-base md:text-lg">
            Estrategia, narrativa, seguridad, eventos e inteligencia artificial
            funcionando como un solo organismo. Soberania operativa para
            lideres, instituciones y organizaciones.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <a
              href="#contacto"
              className="inline-block px-8 py-4 bg-[#C5A85F] text-black text-xs font-semibold tracking-[1.8px] uppercase text-center hover:bg-[#D4BA74] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(197,168,95,0.3)]"
            >
              Solicitar Reunion
            </a>
            <a
              href="#pilares"
              className="inline-block px-8 py-4 border border-white/25 text-white text-xs font-semibold tracking-[1.8px] uppercase text-center hover:border-white hover:bg-white/[0.04] transition-all hover:-translate-y-0.5"
            >
              Conocer Pilares
            </a>
          </div>
        </div>

        {/* Right content — Spline 3D Robot */}
        <div className="flex-1 relative min-h-[400px] md:min-h-0">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}
