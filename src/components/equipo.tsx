'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const team = [
  {
    name: 'Erick',
    role: 'Consultor Politico',
    initials: 'ER',
    img: '/fotos/foto-erick.jpg',
    bio: 'Estrategia electoral, arquitectura de poder y diseño de liderazgos. Experiencia directa en campanas de alto nivel y gestion de escenarios de mision critica.',
  },
  {
    name: 'Alexander Beglenok',
    role: 'Direccion Comercial',
    initials: 'AB',
    img: '/fotos/foto-alexander.jpg',
    bio: 'Desarrollo de negocios, relaciones estrategicas y expansion comercial. Responsable de la articulacion entre las necesidades del cliente y la capacidad operativa de Arcano.',
  },
  {
    name: 'Gaston Corbalan',
    role: 'Estratega Digital & Programador IA',
    initials: 'GC',
    img: '/fotos/foto-gaston.jpg',
    bio: 'Comunicacion digital, arquitectura de datos e inteligencia artificial. Diseña los sistemas de Neuronas de IA y el Algoritmo de Eficiencia Operativa.',
  },
]

export function Equipo() {
  const headerRef = useScrollAnimation()

  return (
    <section id="equipo" className="bg-[#0B0F1A] py-20 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16">
        <div
          ref={headerRef}
          className="mb-12 md:mb-16 opacity-0 translate-y-12 transition-all duration-[900ms]"
        >
          <p className="text-[0.7rem] font-semibold tracking-[4px] uppercase text-[#C5A85F] mb-4">
            Equipo Directivo
          </p>
          <h2
            className="text-[clamp(2rem,4vw,3.5rem)] leading-[1.08] tracking-[-0.025em] font-bold text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Quienes operan Arcano
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <TeamCard key={i} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamCard({ member }: { member: typeof team[0] }) {
  const ref = useScrollAnimation()

  return (
    <div
      ref={ref}
      className="border border-white/[0.06] bg-[#0E1220] hover:border-[rgba(197,168,95,0.2)] transition-colors opacity-0 translate-y-12 transition-all duration-[900ms]"
    >
      <div className="w-full aspect-square overflow-hidden bg-gradient-to-br from-[rgba(197,168,95,0.08)] to-[#060911] flex items-center justify-center relative">
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover absolute inset-0"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
        />
        <span
          className="text-[2.5rem] font-bold text-[#C5A85F] opacity-40"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {member.initials}
        </span>
      </div>
      <div className="p-6">
        <div
          className="text-[1.15rem] font-semibold text-white mb-1"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {member.name}
        </div>
        <div className="text-[0.82rem] text-[#C5A85F] tracking-[0.5px] mb-3">
          {member.role}
        </div>
        <p className="text-[0.88rem] text-[#6B7280] leading-[1.7]">
          {member.bio}
        </p>
      </div>
    </div>
  )
}
