'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const pilares = [
  {
    num: 'PILAR I',
    title: 'Arquitectura de Decision',
    desc: 'Consultoria politica, estrategia electoral y diseño de poder territorial. Abordamos la politica como un sistema de fuerzas en disputa donde el liderazgo, el territorio, la narrativa y la estructura institucional funcionan como una sola maquina.',
    bullets: [
      'Arquitectura estrategica de liderazgo',
      'Estrategia electoral integral',
      'Inteligencia politica y analisis del conflicto',
      'Estrategia legislativa y gestion institucional',
      'Batalla cultural y posicionamiento ideologico',
    ],
  },
  {
    num: 'PILAR II',
    title: 'Narrativa de Autoridad',
    desc: 'Comunicacion estrategica, marketing, produccion audiovisual y branding. En la era de la sobreinformacion, la imagen es el vehiculo principal de la soberania. No gestionamos contenidos; construimos la epica de nuestros clientes.',
    bullets: [
      'Produccion audiovisual de nivel cinematografico',
      'Marketing digital y artilleria de pauta',
      'Identidad de marca y diseño grafico',
      'Gestion de redes sociales y narrativa',
    ],
  },
  {
    num: 'PILAR III',
    title: 'Eventos de Alto Impacto',
    desc: 'Produccion integral, logistica y puesta en escena a escala. Los eventos no son reuniones; son actos simbolicos de autoridad. Experiencia en los encuentros de mayor exigencia y exposicion de la region.',
    bullets: [
      'Direccion general y produccion ejecutiva',
      'Infraestructura tecnica de alta gama',
      'Direccion artistica y curaduria de talento',
      'Logistica operativa y hospitalidad VVIP',
    ],
  },
  {
    num: 'PILAR IV',
    title: 'Seguridad Integral y Blindaje',
    desc: 'Gestion de riesgos, proteccion de activos y logistica de seguridad. No ofrecemos presencia; ofrecemos una ingenieria de proteccion bajo protocolos de nivel presidencial con Anillos de Proteccion Inteligente.',
    bullets: [
      'Custodia VVIP y celulas de proteccion dinamica',
      'Inteligencia aerea y monitoreo tactico con drones',
      'Dominio perimetral y gestion de masas',
      'Operaciones de movilidad segura',
      'Consultoria en mitigacion de riesgos',
    ],
  },
]

export function Pilares() {
  const headerRef = useScrollAnimation()

  return (
    <section id="pilares" className="bg-[#0B0F1A] py-20 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16">
        <div
          ref={headerRef}
          className="mb-12 md:mb-16 opacity-0 translate-y-12 transition-all duration-[900ms]"
        >
          <p className="text-[0.7rem] font-semibold tracking-[4px] uppercase text-[#C5A85F] mb-4">
            Los 5 Pilares
          </p>
          <h2
            className="text-[clamp(2rem,4vw,3.5rem)] leading-[1.08] tracking-[-0.025em] font-bold text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Un solo organismo estrategico
          </h2>
        </div>

        {pilares.map((pilar, i) => (
          <PilarBlock key={i} pilar={pilar} />
        ))}
      </div>
    </section>
  )
}

function PilarBlock({ pilar }: { pilar: typeof pilares[0] }) {
  const ref = useScrollAnimation()

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/[0.06] py-12 md:py-16 opacity-0 translate-y-12 transition-all duration-[900ms]"
    >
      <div>
        <span className="text-[0.7rem] font-semibold tracking-[3px] text-[#C5A85F] mb-3 block">
          {pilar.num}
        </span>
        <h3
          className="text-[clamp(1.25rem,2.5vw,2rem)] text-white font-semibold mb-4 leading-[1.25]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {pilar.title}
        </h3>
        <p className="text-[#9CA3AF] leading-[1.85] mb-5">
          {pilar.desc}
        </p>
        <ul className="flex flex-col gap-2.5">
          {pilar.bullets.map((b, j) => (
            <li
              key={j}
              className="text-[#6B7280] text-[0.9rem] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-[5px] before:h-px before:bg-[#C5A85F]"
            >
              {b}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center min-h-[220px] border border-white/[0.06] bg-[#0E1220]">
        <div className="text-[#C5A85F]/20 text-6xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {pilar.num.split(' ')[1]}
        </div>
      </div>
    </div>
  )
}
