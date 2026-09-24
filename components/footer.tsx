import Link from "next/link"
import { Instagram, Phone, MapPin, Calendar } from "lucide-react"
import { Logo } from "@/components/logo"

const footerLinks = {
  servicios: [
    { label: "Fisioterapia general", href: "/servicios" },
    { label: "Rehabilitación deportiva", href: "/servicios" },
    { label: "Terapia manual", href: "/servicios" },
    { label: "Masaje terapéutico", href: "/servicios" },
  ],
  empresa: [
    { label: "Sobre nosotros", href: "/nosotros" },
    { label: "Testimonios", href: "/testimonios" },
    { label: "Tarjetas de regalo", href: "/tarjetas-regalo" },
    { label: "Agendar cita", href: "/agendar-cita" },
    { label: "Contacto", href: "/contacto" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#072B4F] text-white relative overflow-hidden border-t border-white/5">
      {/* Background radial overlays */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-red-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Column 1 - Brand Profile */}
            <div className="lg:col-span-1 space-y-6">
              <Link href="/inicio" className="inline-block hover:opacity-90 transition-opacity">
                <Logo variant="light" className="h-18 sm:h-20 lg:h-24 w-auto" />
              </Link>
              <p className="text-white/70 text-sm leading-relaxed font-medium">
                Fisioterapia y rehabilitación deportiva en Cali. Recupera tu movilidad, alivia el dolor y vuelve a tus actividades con acompañamiento profesional.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/humanosrehab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 hover:scale-105 active:scale-95 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-white" />
                </a>
                <a
                  href="https://tiktok.com/@humanosrehab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 hover:scale-105 active:scale-95 transition-all"
                  aria-label="TikTok"
                >
                  <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2 - Services */}
            <div>
              <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-white/50 border-l-2 border-[#E63946] pl-3 mb-6">
                Servicios
              </h3>
              <ul className="space-y-4">
                {footerLinks.servicios.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white hover:underline underline-offset-4 transition-colors text-sm font-semibold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Corporate Links */}
            <div>
              <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-white/50 border-l-2 border-[#1667B7] pl-3 mb-6">
                Clínica
              </h3>
              <ul className="space-y-4">
                {footerLinks.empresa.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white hover:underline underline-offset-4 transition-colors text-sm font-semibold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 - Contact details */}
            <div>
              <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-white/50 border-l-2 border-white/30 pl-3 mb-6">
                Contacto directo
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:+15556465891"
                    className="flex items-start gap-3.5 text-white/70 hover:text-white transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-white/80 group-hover:bg-[#E63946] group-hover:text-white transition-all shrink-0">
                      <Phone className="h-4.5 w-4.5" />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] text-white/40 font-bold uppercase">Llámanos</p>
                      <p className="text-sm font-bold">+1 (555) 646-5891</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://maps.google.com/?q=Av.+2D+Norte+%2324N-85,+El+Piloto,+Cali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3.5 text-white/70 hover:text-white transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-white/80 group-hover:bg-[#1667B7] group-hover:text-white transition-all shrink-0">
                      <MapPin className="h-4.5 w-4.5" />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] text-white/40 font-bold uppercase">Sede principal</p>
                      <p className="text-sm font-bold leading-tight">Av. 2D Norte #24N-85, Cali</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright strip */}
        <div className="border-t border-white/10 py-8 relative">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/40 font-semibold tracking-wide">
              © {new Date().getFullYear()} Humanos Fisioterapia y Rehabilitación Deportiva. Todos los derechos reservados.
            </p>
            <p className="text-xs text-white/40 font-bold uppercase tracking-widest flex items-center gap-1.5">
              <span>Cali, Colombia</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E63946] animate-pulse" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

