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
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Testimonios</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Pacientes que confían<br /><span className="text-[#1667B7] text-glow">en Humanos</span>
          </h2>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-16 mb-12 pb-12 border-b border-border/50">
          <div className="text-center">
            <p className="font-heading text-4xl font-bold text-primary">5.0</p>
            <p className="text-sm text-muted-foreground">Calificación Google</p>
          </div>
          <div className="text-center">
            <p className="font-heading text-4xl font-bold text-primary">+171</p>
            <p className="text-sm text-muted-foreground">Opiniones</p>
          </div>
          <div className="text-center">
            <p className="font-heading text-4xl font-bold text-primary">100%</p>
            <p className="text-sm text-muted-foreground">Satisfacción</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl p-8 border border-border/50 hover:shadow-lg transition-shadow"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-4">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <p className="text-sm text-muted-foreground font-medium">
                {testimonial.author}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="rounded-full group">
            <Link href="/testimonios" className="flex items-center gap-2">
              Ver todos los testimonios
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
