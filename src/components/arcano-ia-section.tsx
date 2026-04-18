"use client";

import { Brain, Database, BarChart3, Shield, Cpu } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const iaTimelineData = [
  {
    id: 1,
    title: "Neuronas de IA",
    date: "Modular",
    content:
      "Arquitectura de Neuronas de IA a medida. Sistemas modulares que organizan flujos internos: seguimiento de leads, desempeño territorial, eficiencia de equipos y deteccion de cuellos de botella operativos.",
    category: "Core",
    icon: Brain,
    relatedIds: [2, 3],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Tablero de Comando",
    date: "Dashboard",
    content:
      "Panel centralizado que integra indicadores politicos, reputacionales y comerciales: evolucion de temas criticos, mapa territorial, nivel de aprobacion y metricas de impacto post-intervencion.",
    category: "Visualizacion",
    icon: BarChart3,
    relatedIds: [1, 4],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 3,
    title: "Inteligencia Territorial",
    date: "Predictivo",
    content:
      "Estandarizacion y priorizacion estrategica. Detectamos patrones: que temas crecen, que territorios tensionan, que areas rinden menos y donde conviene intervenir primero.",
    category: "Analisis",
    icon: Database,
    relatedIds: [1, 5],
    status: "in-progress" as const,
    energy: 75,
  },
  {
    id: 4,
    title: "AEO",
    date: "Algoritmo",
    content:
      "Algoritmo de Eficiencia Operativa. Funciona como una antena social permanente que detecta el pulso de la calle y el mercado antes que nadie. El seguro de vida de su estrategia.",
    category: "Motor",
    icon: Cpu,
    relatedIds: [2, 5],
    status: "in-progress" as const,
    energy: 60,
  },
  {
    id: 5,
    title: "Gobernanza de Datos",
    date: "Capacitacion",
    content:
      "Capacitamos equipos para interpretar el tablero, priorizar correctamente y medir resultados. Protocolos de acceso, trazabilidad y control para que el sistema sea un activo estrategico permanente.",
    category: "Implementacion",
    icon: Shield,
    relatedIds: [3, 4],
    status: "pending" as const,
    energy: 40,
  },
];

export function ArcanoIASection() {
  return (
    <section id="ia" className="relative">
      {/* Header overlay */}
      <div className="absolute top-0 left-0 right-0 z-20 pt-16 pb-8 px-8 md:px-16 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none">
        <span
          className="block text-[#C5A85F] text-xs font-semibold tracking-[4px] uppercase mb-3"
          style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
        >
          Pilar V — Inteligencia Operativa
        </span>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight max-w-2xl"
          style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
        >
          Arquitectura de Datos e IA
        </h2>
        <p className="mt-3 text-neutral-400 max-w-lg text-sm md:text-base leading-relaxed">
          Nuestro ecosistema de Neuronas de Inteligencia Artificial transforma
          datos masivos en decisiones estrategicas de precision absoluta.
        </p>
      </div>

      {/* Orbital Timeline */}
      <RadialOrbitalTimeline timelineData={iaTimelineData} />
    </section>
  );
}
