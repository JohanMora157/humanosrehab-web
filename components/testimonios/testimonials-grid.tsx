import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    text: "Salí feliz con explicaciones claras sobre mi lesión y esto me dio muchísima tranquilidad. La atención del Prof. Julián es inigualable y sumamente profesional.",
    author: "Carolina Gómez",
    date: "Hace 1 semana",
    rating: 5,
    tag: "Dolor de Cuello",
    avatarBg: "bg-primary/10 text-primary"
  },
  {
    text: "Excelente servicio, profesionalismo y empatía. Como deportista de alto rendimiento en Cali, he pasado por varios centros de rehabilitación y el enfoque biomecánico de Humanos es superior.",
    author: "Alejandro Patiño",
    date: "Hace 2 semanas",
    rating: 5,
    tag: "Rehabilitación Deportiva",
    avatarBg: "bg-[#E63946]/10 text-[#E63946]"
  },
  {
    text: "Excelente explicación de la lesión y excelente comunicación durante las terapias. Es un especialista muy atento, dedicado y sincero con los tiempos de recuperación progresiva.",
    author: "Diana Hurtado",
    date: "Hace 3 semanas",
    rating: 5,
    tag: "Terapia Manual",
    avatarBg: "bg-[#1667B7]/10 text-[#1667B7]"
  },
  {
    text: "Información detallada, muy específica y excelente equipamiento. Me ayudaron a solucionar un dolor lumbar crónico que llevaba meses limitando mis entrenamientos.",
    author: "Juan Camilo Orozco",
    date: "Hace 1 mes",
    rating: 5,
    tag: "Dolor Lumbar",
    avatarBg: "bg-amber-500/10 text-amber-500"
  },
  {
    text: "He sentido una mejoría increíble desde la primera sesión. Lo mejor de Humanos es el acompañamiento uno a uno; el especialista está pendiente de ti en todo momento, sin interrupciones.",
    author: "Laura Sofía Sánchez",
    date: "Hace 1 mes",
    rating: 5,
    tag: "Descarga Muscular",
    avatarBg: "bg-emerald-600/10 text-emerald-600"
  },
  {
    text: "El doctor es sumamente profesional y te explica la raíz del problema de forma muy sencilla. Su protocolo me ayudó en mi proceso de rehabilitación post-quirúrgica de rodilla.",
    author: "Andrés Felipe Vargas",
    date: "Hace 2 meses",
    rating: 5,
    tag: "Post-quirúrgico Rodilla",
    avatarBg: "bg-indigo-600/10 text-indigo-600"
  }
]

export function TestimonialsGrid() {
  return (
    <section className="py-16 lg:py-24 bg-transparent relative">
      {/* Decorative patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Masonry layout grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="break-inside-avoid bg-white rounded-3xl p-6 lg:p-8 border border-border/60 shadow-premium hover:shadow-premium-hover hover:border-primary/20 hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Header card tools */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  
                  {/* Floating clinical tag */}
                  <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-[#F5F8FB] border border-border text-[10px] font-extrabold text-foreground tracking-wide uppercase">
                    {testimonial.tag}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-primary/10 mb-3 group-hover:text-primary/20 transition-colors" />

                <p className="text-foreground leading-relaxed text-sm font-medium mb-6 relative z-10">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>

              {/* Patient info details */}
              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <div>
                  <p className="font-heading font-extrabold text-foreground text-sm">{testimonial.author}</p>
                  <p className="text-[11px] font-semibold text-muted-foreground mt-0.5">{testimonial.date}</p>
                </div>
                <div className={`w-10 h-10 rounded-xl ${testimonial.avatarBg} flex items-center justify-center font-heading font-black text-sm transition-transform duration-300 group-hover:scale-105`}>
                  {testimonial.author.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
