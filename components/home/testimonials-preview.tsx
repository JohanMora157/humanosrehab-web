import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, Quote, ArrowRight } from "lucide-react"

const testimonials = [
  {
    text: "Excelente servicio, profesionalidad y simpatía por parte de las personas que ahí trabajan. Recomendable al 100%.",
    author: "Paciente verificado",
    rating: 5,
  },
  {
    text: "Salí contenta con explicaciones claras y esto me dio mucha tranquilidad. Muy recomendado.",
    author: "Paciente verificado",
    rating: 5,
  },
  {
    text: "He sentido mucha mejoría en el tratamiento y lo mejor es que lo asesoran y están pendientes de uno.",
    author: "Paciente verificado",
    rating: 5,
  },
]

export function TestimonialsPreview() {
  return (
    <section className="py-20 lg:py-28 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-extrabold uppercase tracking-wider text-primary mb-3">
            Experiencias de Pacientes
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Personas que confían en <span className="text-[#1667B7] text-glow">HUMANOS</span>
          </h2>
        </div>

        {/* Enfoque en experiencia y confianza (sin métricas agregadas no documentadas) */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 mb-12 pb-10 border-b border-border/50 max-w-3xl mx-auto text-center">
          <div className="flex items-center gap-2 text-muted-foreground font-semibold text-xs sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Atención clínica personalizada
          </div>
          <div className="flex items-center gap-2 text-muted-foreground font-semibold text-xs sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-[#0875D1]" />
            Criterio profesional y continuo
          </div>
          <div className="flex items-center gap-2 text-muted-foreground font-semibold text-xs sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-[#009BB5]" />
            Sede física en Cali Norte
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl p-8 border border-border/60 hover:shadow-lg transition-shadow flex flex-col justify-between"
            >
              <div>
                <Quote className="w-10 h-10 text-primary/15 mb-4" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-4 text-sm sm:text-base font-medium">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground pt-4 border-t border-border/40">
                {testimonial.author}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg" className="rounded-2xl font-bold">
            <Link href="/testimonios" className="flex items-center gap-2">
              Ver más testimonios
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
