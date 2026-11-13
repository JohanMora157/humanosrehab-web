import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { hubAreas } from "@/lib/humanos-hub"

export function HumanosHubSection({ placement }: { placement: "home" | "services" }) {
  const isHome = placement === "home"

  return (
    <section
      id="unidades"
      className={`relative scroll-mt-20 bg-transparent ${
        isHome ? "py-16 lg:py-24" : "py-12 lg:py-16"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-9 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between lg:mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-primary">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              HUMANOS HUB · CUATRO UNIDADES
            </div>
            <h2 className="mt-3 font-heading text-3xl font-black text-foreground text-balance sm:text-4xl lg:text-5xl">
              {isHome ? "Cuatro unidades integradas para tu movimiento" : "Conoce las cuatro unidades de HUMANOS"}
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {isHome
                ? "Atención clínica, readaptación física, movilidad asistida y formación profesional en el norte de Cali."
                : "Un modelo coordinado donde cada unidad responde con precisión a una etapa de tu recuperación, movimiento y aprendizaje."}
            </p>
          </div>
          {isHome && (
            <Link
              href="/servicios"
              className="inline-flex min-h-11 shrink-0 items-center gap-2 self-start rounded-full border border-border bg-white px-5 text-sm font-bold text-primary shadow-sm transition hover:border-primary/30 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:self-auto"
            >
              Ver directorio de unidades
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {hubAreas.map((area) => {
            const Icon = area.icon
            return (
              <Link
                key={area.id}
                href={area.href}
                className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-border/70 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                style={{ borderTop: `4px solid ${area.theme.colorHex}` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  <Image
                    src={area.image}
                    alt={area.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                  <span
                    className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 shadow-md transition-transform duration-300 group-hover:scale-110"
                    style={{ color: area.theme.colorHex }}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>

                  <span
                    className={`absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wider shadow-sm backdrop-blur-md ${area.theme.badgeText}`}
                  >
                    <span
                      className="h-2 w-2 rounded-full shrink-0"
                      style={{ backgroundColor: area.theme.colorHex }}
                      aria-hidden="true"
                    />
                    {area.theme.badgeLabel}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-heading text-xl font-extrabold text-foreground transition-colors group-hover:text-primary leading-snug">
                    {area.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {area.tagline}
                  </p>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {area.summary}
                  </p>

                  <ul className="mt-4 space-y-2 border-t border-border/50 pt-3 text-xs font-medium text-foreground/85">
                    {area.highlights.slice(0, 3).map((hl) => (
                      <li key={hl} className="flex items-start gap-2">
                        <span
                          className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: area.theme.colorHex }}
                          aria-hidden="true"
                        />
                        <span className="leading-snug">{hl}</span>
                      </li>
                    ))}
                  </ul>

                  <div
                    className="mt-auto flex items-center justify-between border-t border-border/50 pt-4 text-xs font-bold transition-colors"
                    style={{ color: area.theme.badgeText }}
                  >
                    <span>
                      {area.id === "clinica" ? "Ver servicios clínicos" : "Conocer unidad"}
                    </span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
