import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"

export function MapSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#F5F8FB] bg-grid-pattern border-t border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-primary/10 text-primary text-xs font-extrabold uppercase tracking-wider mb-4 border border-primary/5">
            Cómo Llegar
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-4.5xl font-black text-foreground tracking-tight leading-none text-balance">
            Encuéntranos en <span className="text-[#1667B7] text-glow">el corazón de Cali</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground font-semibold max-w-2xl mx-auto">
            Visítanos en nuestras instalaciones equipadas. Te facilitamos un mapa interactivo para guiar tu trayecto sin contratiempos.
          </p>
        </div>

        {/* Dynamic Maps Frame */}
        <div className="rounded-[32px] overflow-hidden shadow-premium border-4 border-white hover:shadow-premium-hover transition-all duration-500 max-w-5xl mx-auto relative z-10 aspect-[16/9] md:aspect-[21/9] min-h-[350px]">
          <iframe
            src="https://maps.google.com/maps?q=Av.%202D%20Norte%20%2324N-85,%20El%20Piloto,%20Cali,%20Colombia&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Humanos Fisioterapia y Rehabilitación Deportiva en Cali"
            className="w-full h-full"
          />
        </div>

        {/* Directions Callout & Action CTA */}
        <div className="mt-12 text-center max-w-xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white border border-border/60 text-foreground text-sm font-extrabold shadow-sm">
            <MapPin className="w-5 h-5 text-[#E63946] flex-none animate-bounce" />
            <span>Av. 2D Norte #24N-85, El Piloto, Cali</span>
          </div>
          
          <p className="text-muted-foreground font-medium text-sm sm:text-base leading-relaxed">
            Contamos con parqueadero privado, rampas de acceso y vigilancia permanente para tu completa comodidad y tranquilidad durante la consulta médica.
          </p>
          
          <div className="pt-2">
            <Button asChild size="lg" className="rounded-2xl h-14 text-base font-bold shadow-lg shadow-primary/20">
              <Link href="/agendar-cita" className="flex items-center gap-2">
                <Calendar className="w-5 h-5 mr-2 stroke-[2.5]" />
                Reservar una Valoración Inicial
              </Link>
            </Button>
          </div>
        </div>

      </div>
    </section>
  )
}
