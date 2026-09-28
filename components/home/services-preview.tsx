import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { serviceSections } from "@/lib/service-catalog"

export function ServicesPreview() {
  return (
    <section className="py-20 lg:py-28 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-semibold text-primary uppercase mb-3">Nuestros servicios</p>
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {serviceSections.map((service, index) => (
            <Link
              key={service.id}
              href={`/servicios?servicio=${service.id}#${service.id}`}
              className={`group flex min-w-0 flex-col overflow-hidden rounded-lg border border-border/60 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${index < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes={index < 3 ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" : "(max-width: 640px) 100vw, 50vw"}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-md bg-white/95 px-3 py-1.5 font-heading text-sm font-bold text-primary shadow-sm">
                  {service.number}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{service.summary}</p>
                <span className="mt-5 flex items-center gap-2 text-sm font-bold text-primary">
                  Conocer servicio
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
