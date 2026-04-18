'use client'

import { useState, useEffect } from 'react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
    document.body.style.overflow = !menuOpen ? 'hidden' : ''
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 h-20 flex items-center justify-between px-8 md:px-16 z-[1000] transition-all duration-400 border-b ${
          scrolled
            ? 'bg-[rgba(6,9,17,0.95)] backdrop-blur-[16px] border-white/[0.06]'
            : 'border-transparent'
        }`}
      >
        <a
          href="#"
          className="text-[#C5A85F] text-[1.05rem] font-bold tracking-[4px] uppercase"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Arcano
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10 list-none">
          <li>
            <a href="#pilares" className="text-[0.72rem] font-medium tracking-[2px] uppercase text-[#9CA3AF] hover:text-white transition-colors">
              Pilares
            </a>
          </li>
          <li>
            <a href="#equipo" className="text-[0.72rem] font-medium tracking-[2px] uppercase text-[#9CA3AF] hover:text-white transition-colors">
              Equipo
            </a>
          </li>
          <li>
            <a href="#contacto" className="text-[0.72rem] font-medium tracking-[2px] uppercase text-[#9CA3AF] hover:text-white transition-colors">
              Contacto
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              className="text-[0.7rem] tracking-[1.5px] uppercase px-6 py-2.5 border border-[#C5A85F] text-[#C5A85F] hover:bg-[#C5A85F] hover:text-[#0B0F1A] transition-all"
            >
              Agendar Reunion
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="flex md:hidden flex-col gap-[5px] cursor-pointer z-[1002] bg-transparent border-none p-1"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-[rgba(6,9,17,0.98)] backdrop-blur-[20px] z-[1001] flex flex-col items-center justify-center gap-10 transition-all duration-500 md:hidden ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <a href="#pilares" onClick={closeMenu} className="text-white text-2xl font-medium tracking-[3px] uppercase hover:text-[#C5A85F] transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Pilares
        </a>
        <a href="#equipo" onClick={closeMenu} className="text-white text-2xl font-medium tracking-[3px] uppercase hover:text-[#C5A85F] transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Equipo
        </a>
        <a href="#contacto" onClick={closeMenu} className="text-white text-2xl font-medium tracking-[3px] uppercase hover:text-[#C5A85F] transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Contacto
        </a>
      </div>
    </>
  )
}
