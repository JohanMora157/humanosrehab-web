import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  MapPin, 
  Phone, 
  Clock, 
  Instagram, 
  MessageCircle, 
  Accessibility, 
  Navigation, 
  Calendar 
} from "lucide-react"

export function ContactInfo() {
  return (
    <section className="py-16 lg:py-24 bg-transparent relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Contact info grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Address */}
          <div className="bg-[#F5F8FB] rounded-[24px] p-6 lg:p-8 border border-border/50 hover:shadow-premium hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 transition-transform duration-300 group-hover:scale-105">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-black text-foreground mb-3">Dirección</h3>
              <p className="text-sm text-muted-foreground font-semibold leading-relaxed mb-6">
                Av. 2D Norte #24N-85<br />
                El Piloto, Cali<br />
                Valle del Cauca, Colombia
              </p>
            </div>
            <Button asChild className="w-full h-12 rounded-xl text-xs font-bold bg-white border-2 border-primary/20 text-primary hover:border-primary hover:bg-primary/5 hover:scale-[1.02] shadow-xs hover:shadow-md transition-all">
              <a
                href="https://maps.google.com/?q=Av.+2D+Norte+%2324N-85,+El+Piloto,+Cali"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4 text-primary" />
                Ver en Google Maps
              </a>
            </Button>
          </div>

          {/* Card 2: Phone & WhatsApp */}
          <div className="bg-[#F5F8FB] rounded-[24px] p-6 lg:p-8 border border-border/50 hover:shadow-premium hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#E63946]/10 flex items-center justify-center text-[#E63946] mb-6 transition-transform duration-300 group-hover:scale-105">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-black text-foreground mb-3">Contacto Directo</h3>
              <p className="text-sm text-muted-foreground font-semibold leading-relaxed mb-6">
                Llama a nuestra línea clínica o escríbenos directamente por chat para urgencias o citas.
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              <Button asChild className="w-full h-12 rounded-xl text-xs font-bold bg-white border-2 border-[#E63946]/20 text-[#E63946] hover:border-[#E63946] hover:bg-[#E63946]/5 hover:scale-[1.02] shadow-xs hover:shadow-md transition-all">
                <a href="tel:+573177995831" className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4 text-[#E63946]" />
                  Llamar 317 799 5831
                </a>
              </Button>
              <Button asChild className="w-full h-12 rounded-xl text-xs font-bold bg-white border-2 border-[#25D366] text-[#1E9A4D] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] hover:scale-[1.02] shadow-xs hover:shadow-md transition-all group">
                <a
                  href="https://wa.me/573177995831"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-4 h-4 fill-current transition-transform group-hover:scale-110"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Escribir por WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Card 3: Hours */}
          <div className="bg-[#F5F8FB] rounded-[24px] p-6 lg:p-8 border border-border/50 hover:shadow-premium hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 mb-6 transition-transform duration-300 group-hover:scale-105">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-black text-foreground mb-3">Horario de Atención</h3>
              <p className="text-sm text-muted-foreground font-semibold leading-relaxed mb-6">
                Atención personalizada con cita previa.<br />
                Lunes a Viernes: 7:00 AM - 7:00 PM<br />
                Sábados: 7:00 AM - 1:00 PM
              </p>
            </div>
            <Button asChild className="w-full h-12 rounded-xl text-xs font-bold bg-[#1667B7] hover:bg-[#0A3D73] hover:scale-[1.02] text-white shadow-xs hover:shadow-md transition-all">
              <Link href="/agendar-cita" className="flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4 text-white" />
                Agendar Cita Previa
              </Link>
            </Button>
          </div>

          {/* Card 4: Social Media */}
          <div className="bg-[#F5F8FB] rounded-[24px] p-6 lg:p-8 border border-border/50 hover:shadow-premium hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-500 mb-6 transition-transform duration-300 group-hover:scale-105">
                <Instagram className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-black text-foreground mb-3">Canales de Comunidad</h3>
              <p className="text-sm text-muted-foreground font-semibold leading-relaxed mb-6">
                Síguenos para no perderte consejos de movilidad, estiramientos e historias clínicas reales.
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              <Button asChild className="w-full h-12 rounded-xl text-xs font-bold bg-white border-2 border-violet-500/20 text-violet-600 hover:border-violet-500 hover:bg-violet-500/5 hover:scale-[1.02] shadow-xs hover:shadow-md transition-all group">
                <a
                  href="https://instagram.com/humanosrehab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Instagram className="w-4 h-4 text-violet-500 transition-transform group-hover:scale-110" />
                  Instagram @humanosrehab
                </a>
              </Button>
              <Button asChild className="w-full h-12 rounded-xl text-xs font-bold bg-white border-2 border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground/5 hover:scale-[1.02] shadow-xs hover:shadow-md transition-all group">
                <a
                  href="https://tiktok.com/@humanosrehab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4 fill-current text-foreground transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                  TikTok @humanosrehab
                </a>
              </Button>
            </div>
          </div>

          {/* Full-width Accessibility Banner */}
          <div className="md:col-span-2 lg:col-span-4 bg-[#072B4F] rounded-[32px] p-6 sm:p-8 text-white relative overflow-hidden mt-8 border border-white/5 shadow-premium">
            <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white border border-white/15 flex-shrink-0">
                <Accessibility className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-heading text-lg sm:text-xl font-extrabold text-white mb-2 leading-none">
                  Compromiso de Accesibilidad Universal
                </h3>
                <p className="text-sm text-white/70 font-semibold leading-relaxed">
                  Garantizamos que nuestras instalaciones físicas cuenten con entrada, estacionamiento y sanitarios completamente accesibles y acondicionados para personas con movilidad reducida o en silla de ruedas. Tu comodidad y seguridad son nuestra absoluta prioridad en Cali.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
