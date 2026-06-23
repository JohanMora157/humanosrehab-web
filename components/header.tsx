"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X, Phone, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/inicio", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/testimonios", label: "Testimonios" },
  { href: "/contacto", label: "Contacto" },
]

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

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-primary/10 shadow-[0_4px_30px_rgba(7,43,79,0.04)] py-2 lg:py-1"
          : "bg-white/95 border-transparent py-3 lg:py-2"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/inicio" className="flex-shrink-0 hover:opacity-90 transition-opacity">
            <Logo className="h-14 lg:h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-secondary/40 p-1.5 rounded-2xl border border-primary/5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300",
                  pathname === link.href
                    ? "text-primary bg-white shadow-xs"
                    : "text-foreground/70 hover:text-foreground hover:bg-white/50"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-primary/80 animate-pulse" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+15556465891"
              className="flex items-center gap-3 text-sm text-foreground/80 hover:text-primary transition-all group"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary/5 group-hover:bg-primary group-hover:text-white transition-all shadow-xs">
                <Phone className="h-4.5 w-4.5 text-primary group-hover:text-white transition-colors" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Llámanos</p>
                <p className="font-bold text-foreground text-sm tracking-tight">+1 (555) 646-5891</p>
              </div>
            </a>
            <Button asChild size="default" className="shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20">
              <Link href="/agendar-cita">Agendar cita</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-xl bg-secondary/50 hover:bg-secondary border border-primary/5 transition-all active:scale-95"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? (
              <X className="h-5.5 w-5.5 text-foreground" />
            ) : (
              <Menu className="h-5.5 w-5.5 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[72px] bg-white border-b border-primary/10 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="px-4 py-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-4 py-3.5 rounded-xl text-base font-bold transition-all",
                  pathname === link.href
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/15"
                    : "text-foreground/80 hover:bg-secondary hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-border/80 space-y-3">
              <a
                href="tel:+15556465891"
                className="flex items-center justify-center gap-3 px-4 py-4 rounded-xl bg-secondary/80 text-foreground font-bold hover:bg-secondary transition-colors"
              >
                <Phone className="h-5 w-5 text-primary" />
                <span>+1 (555) 646-5891</span>
              </a>
              <Button asChild size="lg" className="w-full rounded-xl font-bold h-13 shadow-md shadow-primary/15">
                <Link href="/agendar-cita" onClick={() => setMobileMenuOpen(false)}>
                  <Calendar className="w-5 h-5 mr-2" />
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

