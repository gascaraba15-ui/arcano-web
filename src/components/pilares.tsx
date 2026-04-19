import { Feature72 } from '@/components/ui/feature-72'

const pilaresData = [
  {
    id: 'pilar-1',
    num: 'PILAR I',
    title: 'Arquitectura de Decision',
    description:
      'Consultoria politica, estrategia electoral y diseño de poder territorial. Abordamos la politica como un sistema de fuerzas en disputa donde el liderazgo, el territorio y la estructura institucional funcionan como una sola maquina.',
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80',
  },
  {
    id: 'pilar-2',
    num: 'PILAR II',
    title: 'Narrativa de Autoridad',
    description:
      'Comunicacion estrategica, marketing, produccion audiovisual y branding. En la era de la sobreinformacion, la imagen es el vehiculo principal de la soberania. No gestionamos contenidos; construimos la epica de nuestros clientes.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80',
  },
  {
    id: 'pilar-3',
    num: 'PILAR III',
    title: 'Eventos de Alto Impacto',
    description:
      'Produccion integral, logistica y puesta en escena a escala. Los eventos no son reuniones; son actos simbolicos de autoridad. Experiencia en los encuentros de mayor exigencia y exposicion de la region.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
  },
  {
    id: 'pilar-4',
    num: 'PILAR IV',
    title: 'Seguridad Integral y Blindaje',
    description:
      'Gestion de riesgos, proteccion de activos y logistica de seguridad. No ofrecemos presencia; ofrecemos una ingenieria de proteccion bajo protocolos de nivel presidencial con Anillos de Proteccion Inteligente.',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80',
  },
]

export function Pilares() {
  return (
    <div id="pilares" className="bg-[#0B0F1A]">
      <Feature72
        heading="Un solo organismo estrategico"
        description="Cada pilar opera de forma autonoma pero converge en una unica mision: blindar su liderazgo, dominar su narrativa y garantizar resultados en escenarios de alta complejidad."
        linkText="Solicitar Reunion"
        linkUrl="#contacto"
        features={pilaresData}
      />
    </div>
  )
}
