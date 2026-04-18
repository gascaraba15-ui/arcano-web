'use client'

import { useEffect, useRef, useState } from 'react'

const statsData = [
  { target: 150, prefix: '+', suffix: '', label: 'Operaciones Ejecutadas' },
  { target: 12, prefix: '', suffix: '', label: 'Paises con Presencia' },
  { target: 5, prefix: '', suffix: '', label: 'Pilares Integrados' },
  { target: 100, prefix: '', suffix: '%', label: 'Compromiso Operativo' },
]

function AnimatedNumber({ target, prefix, suffix }: { target: number; prefix: string; suffix: string }) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          const duration = 2200
          const start = performance.now()

          function update(now: number) {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(Math.floor(target * eased))
            if (progress < 1) requestAnimationFrame(update)
          }
          requestAnimationFrame(update)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <div
      ref={ref}
      className="text-[clamp(2.5rem,4vw,4rem)] font-bold text-white leading-none mb-3"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      {prefix}{value.toLocaleString()}{suffix}
    </div>
  )
}

export function Stats() {
  return (
    <section className="bg-[#060911] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {statsData.map((s, i) => (
            <div key={i} className="py-8 px-4">
              <AnimatedNumber target={s.target} prefix={s.prefix} suffix={s.suffix} />
              <div className="text-[0.75rem] font-medium tracking-[1.5px] uppercase text-[#6B7280]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
