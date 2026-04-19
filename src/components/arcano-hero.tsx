'use client'

import { motion } from "framer-motion"
import { BackgroundPaths } from "@/components/ui/background-paths"

export function ArcanoHero() {
  const title = "Usted define el objetivo"
  const words = title.split(" ")

  return (
    <BackgroundPaths>
      <div className="container mx-auto px-6 md:px-16 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block text-[#C5A85F] text-xs font-semibold tracking-[4px] uppercase border border-[rgba(197,168,95,0.25)] px-4 py-1.5 mb-8"
            style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
          >
            Unidad de Intervencion Estrategica
          </motion.span>

          <h1
            className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 tracking-tighter leading-[1.05]"
            style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
          >
            {words.map((word, wordIndex) => (
              <span
                key={wordIndex}
                className="inline-block mr-4 last:mr-0"
              >
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/80"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Nosotros aseguramos que ocurra. Estrategia, narrativa, seguridad,
            eventos e inteligencia artificial funcionando como un solo organismo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contacto"
              className="inline-block px-9 py-4 bg-[#C5A85F] text-black text-xs font-semibold tracking-[1.8px] uppercase text-center hover:bg-[#D4BA74] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(197,168,95,0.3)]"
            >
              Solicitar Reunion
            </a>
            <a
              href="#pilares"
              className="inline-block px-9 py-4 border border-white/25 text-white text-xs font-semibold tracking-[1.8px] uppercase text-center hover:border-white hover:bg-white/[0.04] transition-all hover:-translate-y-0.5"
            >
              Conocer Pilares
            </a>
          </motion.div>
        </motion.div>
      </div>
    </BackgroundPaths>
  )
}
