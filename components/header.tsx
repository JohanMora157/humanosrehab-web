"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import {
  Menu,
  X,
  Phone,
  Calendar,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { cn } from "@/lib/utils"

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  // Check if current route is part of ecosystem / hub
  const isEcosistemaActive =
    pathname === "/ecosistema" ||
    pathname === "/humanos-clinica" ||
    pathname === "/humanos-activo" ||
    pathname === "/stretching-lab" ||
    pathname === "/academia"

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/85 backdrop-blur-md border-primary/10 shadow-[0_4px_30px_rgba(7,43,79,0.05)] py-2 lg:py-1.5"
          : "bg-white/95 border-transparent py-3 lg:py-2.5"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/inicio" className="flex-shrink-0 hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl">
            <Logo className="h-14 lg:h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-secondary/40 p-1.5 rounded-2xl border border-primary/5">
            {/* Inicio */}
            <Link
              href="/inicio"
              className={cn(
                "relative px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                pathname === "/inicio"
                  ? "text-primary bg-white shadow-xs"
                  : "text-foreground/75 hover:text-foreground hover:bg-white/50"
              )}
            >
              Inicio
              {pathname === "/inicio" && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-primary animate-pulse" />
              )}
            </Link>

            {/* Humanos Hub (Enlace directo sin desplegable) */}
            <Link
              href="/ecosistema"
              className={cn(
                "relative px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                isEcosistemaActive
                  ? "text-primary bg-white shadow-xs"
                  : "text-foreground/75 hover:text-foreground hover:bg-white/50"
              )}
            >
              Humanos Hub
              {isEcosistemaActive && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-primary animate-pulse" />
              )}
            </Link>

            {/* Servicios */}
            <Link
              href="/servicios"
              className={cn(
                "relative px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                pathname === "/servicios"
                  ? "text-primary bg-white shadow-xs"
                  : "text-foreground/75 hover:text-foreground hover:bg-white/50"
              )}
            >
              Servicios
              {pathname === "/servicios" && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-primary animate-pulse" />
              )}
            </Link>

            {/* Nosotros */}
            <Link
              href="/nosotros"
              className={cn(
                "relative px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                pathname === "/nosotros"
                  ? "text-primary bg-white shadow-xs"
                  : "text-foreground/75 hover:text-foreground hover:bg-white/50"
              )}
            >
              Nosotros
              {pathname === "/nosotros" && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-primary animate-pulse" />
              )}
            </Link>

            {/* Contacto */}
            <Link
              href="/contacto"
              className={cn(
                "relative px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                pathname === "/contacto"
                  ? "text-primary bg-white shadow-xs"
                  : "text-foreground/75 hover:text-foreground hover:bg-white/50"
              )}
            >
              Contacto
              {pathname === "/contacto" && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-primary animate-pulse" />
              )}
            </Link>
          </nav>

          {/* Phone & CTA Button */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+573177995831"
              className="flex items-center gap-2.5 text-sm text-foreground/80 hover:text-primary transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl p-1"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-white transition-all shadow-xs">
                <Phone className="h-4 w-4 text-primary group-hover:text-white transition-colors" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">
                  Cali Norte
                </p>
                <p className="font-bold text-foreground text-xs tracking-tight">+57 317 799 5831</p>
              </div>
            </a>

            <Button asChild size="default" className="rounded-xl font-bold shadow-md shadow-primary/10 hover:shadow-lg">
              <Link href="/agendar-cita">Agendar cita</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="lg:hidden p-2.5 rounded-xl bg-secondary/50 hover:bg-secondary border border-primary/10 transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5 text-foreground" /> : <Menu className="h-5 w-5 text-foreground" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[68px] max-h-[calc(100vh-68px)] overflow-y-auto bg-white border-b border-primary/10 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="px-4 py-5 space-y-1.5">
            {/* Inicio */}
            <Link
              href="/inicio"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "block px-4 py-3 rounded-xl text-sm font-bold transition-all",
                pathname === "/inicio"
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-secondary"
              )}
            >
              Inicio
            </Link>

            {/* Humanos Hub */}
            <Link
              href="/ecosistema"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "block px-4 py-3 rounded-xl text-sm font-bold transition-all",
                isEcosistemaActive
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-secondary"
              )}
            >
              Humanos Hub
            </Link>

            {/* Servicios */}
            <Link
              href="/servicios"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "block px-4 py-3 rounded-xl text-sm font-bold transition-all",
                pathname === "/servicios"
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-secondary"
              )}
            >
              Servicios
            </Link>

            {/* Nosotros */}
            <Link
              href="/nosotros"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "block px-4 py-3 rounded-xl text-sm font-bold transition-all",
                pathname === "/nosotros"
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-secondary"
              )}
            >
              Nosotros
            </Link>

            {/* Preguntas frecuentes */}
            <Link
              href="/preguntas-frecuentes"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "block px-4 py-3 rounded-xl text-sm font-bold transition-all",
                pathname === "/preguntas-frecuentes"
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-secondary"
              )}
            >
              Preguntas Frecuentes
            </Link>

            {/* Contacto */}
            <Link
              href="/contacto"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "block px-4 py-3 rounded-xl text-sm font-bold transition-all",
                pathname === "/contacto"
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-secondary"
              )}
            >
              Contacto
            </Link>

            {/* Bottom Contact and Book */}
            <div className="pt-4 mt-3 border-t border-border/80 space-y-2.5">
              <a
                href="tel:+573177995831"
                className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-secondary text-foreground text-xs font-bold"
              >
                <Phone className="h-4 w-4 text-primary" />
                <span>+57 317 799 5831 (Cali Norte)</span>
              </a>

              <Button asChild size="lg" className="w-full rounded-xl font-bold h-12">
                <Link href="/agendar-cita" onClick={() => setMobileMenuOpen(false)}>
                  <Calendar className="w-4 h-4 mr-2" />
                  Agendar cita
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
