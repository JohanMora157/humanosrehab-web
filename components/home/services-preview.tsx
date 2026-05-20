import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Fisioterapia general",
    description: "Evaluación y tratamiento integral de condiciones musculoesqueléticas.",
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Rehabilitación deportiva",
    description: "Recuperación de lesiones y mejora del rendimiento atlético.",
    color: "bg-ring/10 text-ring",
  },
  {
    title: "Terapia manual",
    description: "Técnicas especializadas para aliviar el dolor y restaurar función.",
    color: "bg-accent/10 text-accent",
  },
  {
    title: "Masaje terapéutico",
    description: "Alivio de tensión muscular y promoción de la recuperación.",
    color: "bg-primary/10 text-primary",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-20 lg:py-28 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Nuestros servicios</p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Tratamientos para tu<br /><span className="text-[#1667B7] text-glow">recuperación física</span>
            </h2>
          </div>
          <Button asChild variant="outline" className="rounded-full self-start lg:self-auto group">
            <Link href="/servicios" className="flex items-center gap-2">
              Ver todos los servicios
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href="/servicios"
              className="group relative bg-white rounded-3xl p-6 border border-border/50 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${service.color} mb-4`}>
                <span className="font-heading font-bold text-lg">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
              <ArrowRight className="absolute bottom-6 right-6 w-5 h-5 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
