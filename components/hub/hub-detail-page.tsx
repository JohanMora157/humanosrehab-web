import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { notFound } from "next/navigation"
import PageLayout from "@/components/page-layout"
import { PageHeader } from "@/components/ui/page-header"
import { hubAreas, type HubAreaId } from "@/lib/humanos-hub"

type DetailAreaId = Exclude<HubAreaId, "clinica">

export function HubDetailPage({ areaId }: { areaId: DetailAreaId }) {
  const area = hubAreas.find((item) => item.id === areaId)
  if (!area) notFound()

  return (
    <PageLayout>
      <PageHeader
        badge={`HUMANOS HUB · ${area.theme.badgeLabel.toUpperCase()}`}
        title={area.name}
        description={area.tagline}
        bgImage={area.image}
      />

      <section className="bg-transparent py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-9 lg:grid-cols-12 lg:gap-14">
            <div
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/70 bg-white shadow-premium lg:col-span-5"
              style={{ borderTop: `4px solid ${area.theme.colorHex}` }}
            >
              <Image
                src={area.image}
                alt={area.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-7">
              <div
                className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider ${area.theme.badgeBg} ${area.theme.badgeText}`}
              >
                <span
                  className="h-2 w-2 rounded-full shrink-0"
                  style={{ backgroundColor: area.theme.colorHex }}
                  aria-hidden="true"
                />
                {area.theme.badgeLabel}
              </div>

              <h2 className="mt-3 font-heading text-3xl font-black leading-tight text-foreground sm:text-4xl">
                {area.name}
              </h2>

              <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
                {area.description}
              </p>

              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {area.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3 text-sm font-semibold text-foreground">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                      style={{
                        backgroundColor: `${area.theme.colorHex}22`,
                        color: area.theme.colorHex,
                      }}
                      aria-hidden="true"
                    >
                      <Check className="h-3 w-3 stroke-[3]" />
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3 lg:mt-20">
            {area.sections.map((section, index) => (
              <article
                key={section.title}
                className="rounded-2xl border border-border/70 bg-white p-6 shadow-sm transition-all hover:shadow-md"
                style={{ borderTop: `3px solid ${area.theme.colorHex}` }}
              >
                <span
                  className="text-xs font-black uppercase tracking-wider"
                  style={{ color: area.theme.badgeText }}
                >
                  0{index + 1}
                </span>
                <h3 className="mt-2 font-heading text-lg font-extrabold text-foreground">
                  {section.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {section.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-border/80 bg-white p-6 shadow-premium sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-xl">
                <span
                  className="text-xs font-black uppercase tracking-wider"
                  style={{ color: area.theme.badgeText }}
                >
                  Próximo paso
                </span>
                <h3 className="mt-1 font-heading text-xl font-extrabold text-foreground sm:text-2xl">
                  {area.id === "humanos-activo" && "¿Quieres orientarte para ingresar a Activa?"}
                  {area.id === "stretching-lab" && "¿Quieres consultar disponibilidad en Stretching Lab?"}
                  {area.id === "academia" && "¿Te interesa participar en nuestros cursos o talleres?"}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {area.id === "humanos-activo" &&
                    "Escríbenos para evaluar tu punto de partida, resolver dudas sobre remisiones y coordinar tu valoración inicial."}
                  {area.id === "stretching-lab" &&
                    "Consulta los horarios disponibles en nuestras estaciones de elongación en Cali norte y agenda tu sesión."}
                  {area.id === "academia" &&
                    "Ponte en contacto para solicitar los temarios, requisitos y próximas convocatorias formativas en sede."}
                </p>
              </div>

              <Link
                href={area.ctaHref}
                className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground shadow-md shadow-primary/15 transition hover:bg-primary/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:self-auto"
              >
                {area.ctaText}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
