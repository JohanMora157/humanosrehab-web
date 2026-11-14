import Link from "next/link"
import { Instagram, Phone, MapPin, Calendar, HelpCircle, MessageSquare } from "lucide-react"
import { Logo } from "@/components/logo"

const footerUnits = [
  { label: "HUMANOS Fisioterapia", href: "/humanos-clinica" },
  { label: "HUMANOS Activa", href: "/humanos-activo" },
  { label: "HUMANOS Stretching Lab", href: "/stretching-lab" },
  { label: "HUMANOS Academia", href: "/academia" },
]

const footerEcosystem = [
  { label: "HUMANOS HUB", href: "/ecosistema" },
  { label: "Directorio de servicios", href: "/servicios" },
  { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
  { label: "Tarjetas de regalo", href: "/tarjetas-regalo" },
]

const footerInstitutional = [
  { label: "Sobre nosotros", href: "/nosotros" },
  { label: "Testimonios de pacientes", href: "/testimonios" },
  { label: "Contacto y cómo llegar", href: "/contacto" },
  { label: "Agendar cita o valoración", href: "/agendar-cita" },
]

export function Footer() {
  return (
    <footer className="bg-[#072B4F] text-white relative overflow-hidden border-t border-white/5">
      {/* Background radial overlays */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-red-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Column 1 - Brand Profile (spans 4 cols) */}
            <div className="lg:col-span-4 space-y-5">
              <Link href="/inicio" className="inline-block hover:opacity-90 transition-opacity">
                <Logo variant="light" className="h-16 sm:h-18 lg:h-20 w-auto" />
              </Link>
              <p className="text-white/75 text-xs sm:text-sm leading-relaxed font-medium max-w-sm">
                Ecosistema integral de movimiento en el norte de Cali: atención clínica de
                fisioterapia, acondicionamiento y fuerza, movilidad asistida y formación continua.
              </p>

              <div className="flex gap-3 pt-2">
                <a
                  href="https://instagram.com/humanosrehab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 transition-all"
                  aria-label="Instagram de HUMANOS"
                >
                  <Instagram className="h-4 w-4 text-white" />
                </a>
                <a
                  href="https://tiktok.com/@humanosrehab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 transition-all"
                  aria-label="TikTok de HUMANOS"
                >
                  <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2 - Cuatro Unidades (spans 3 cols) */}
            <div className="lg:col-span-3">
              <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-white/50 border-l-2 border-[#00B9DB] pl-3 mb-5">
                Cuatro Unidades
              </h3>
              <ul className="space-y-3">
                {footerUnits.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/75 hover:text-white hover:underline underline-offset-4 transition-colors text-xs sm:text-sm font-semibold block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - HUMANOS HUB y Recursos (spans 2 cols) */}
            <div className="lg:col-span-2">
              <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-white/50 border-l-2 border-[#0875D1] pl-3 mb-5">
                HUMANOS HUB
              </h3>
              <ul className="space-y-3">
                {footerEcosystem.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/75 hover:text-white hover:underline underline-offset-4 transition-colors text-xs sm:text-sm font-semibold block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 - Contacto Sede Norte (spans 3 cols) */}
            <div className="lg:col-span-3">
              <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-white/50 border-l-2 border-[#7771C7] pl-3 mb-5">
                Sede Cali Norte
              </h3>
              <ul className="space-y-4 text-xs">
                <li>
                  <a
                    href="tel:+573177995831"
                    className="flex items-start gap-3 text-white/75 hover:text-white transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white shrink-0 group-hover:bg-primary transition-colors">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/45 font-bold uppercase">Línea y WhatsApp</p>
                      <p className="font-bold text-white text-xs sm:text-sm">+57 317 799 5831</p>
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    href="https://maps.google.com/?q=Av.+2D+Norte+%2324N-85,+El+Piloto,+Cali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-white/75 hover:text-white transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white shrink-0 group-hover:bg-[#00B9DB] transition-colors">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/45 font-bold uppercase">Ubicación</p>
                      <p className="font-bold text-white text-xs">Av. 2D Norte #24N-85</p>
                      <p className="text-[11px] text-white/50">El Piloto, Cali, Colombia</p>
                    </div>
                  </a>
                </li>

                <li className="pt-1">
                  <p className="text-[11px] text-white/50">
                    Atención personalizada con cita previa.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Legal & Copyright Strip */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50">
            <p>
              © {new Date().getFullYear()} HUMANOS. Todos los derechos reservados.
            </p>

            <div className="flex items-center gap-6">
              <Link
                href="/politica-de-privacidad"
                className="hover:text-white transition-colors underline-offset-4 hover:underline"
              >
                Política de privacidad
              </Link>
              <Link
                href="/terminos-y-condiciones"
                className="hover:text-white transition-colors underline-offset-4 hover:underline"
              >
                Términos y condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
