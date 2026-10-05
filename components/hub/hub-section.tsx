import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { hubAreas } from "@/lib/humanos-hub"

export function HumanosHubSection({ placement }: { placement: "home" | "services" }) {
  const isHome = placement === "home"

  return (
    <section className={`relative bg-transparent ${isHome ? "py-16 lg:py-24" : "py-12 lg:py-16"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-9 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between lg:mb-12">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-primary">HUMANOS HUB</p>
            <h2 className="mt-2 font-heading text-3xl font-black text-foreground text-balance sm:text-4xl lg:text-5xl">
              {isHome ? "Cuatro formas de acompañarte" : "Conoce las áreas de Humanos"}
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {isHome
                ? "Elige el espacio que mejor se adapta a lo que buscas hoy."
                : "Desde la atención clínica hasta el movimiento y el aprendizaje, encuentra el espacio para ti."}
            </p>
          </div>
          {isHome && (
            <Link
              href="/servicios"
              className="inline-flex min-h-11 shrink-0 items-center gap-2 self-start rounded-full border border-border bg-white px-5 text-sm font-bold text-primary shadow-sm transition hover:border-primary/30 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:self-auto"
            >
              Ver servicios
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {hubAreas.map((area) => {
            const Icon = area.icon
            return (
              <Link
                key={area.id}
                href={area.href}
                className="group flex min-w-0 flex-col overflow-hidden rounded-lg border border-border/60 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  <Image
                    src={area.image}
                    alt={area.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/95 text-primary shadow-sm">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-heading text-xl font-extrabold text-foreground transition-colors group-hover:text-primary">
                    {area.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {area.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
                    Conocer el área
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
