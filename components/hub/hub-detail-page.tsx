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
      <PageHeader badge="HUMANOS HUB" title={area.name} description={area.summary} bgImage={area.image} />

      <section className="bg-transparent py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-9 lg:grid-cols-12 lg:gap-14">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border/60 bg-white shadow-premium lg:col-span-5">
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
              <p className="text-sm font-bold uppercase text-primary">Una experiencia Humanos</p>
              <h2 className="mt-3 font-heading text-3xl font-black leading-tight text-foreground sm:text-4xl">
                {area.name}, a tu ritmo
              </h2>
              <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
                {area.description}
              </p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {area.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3 text-sm font-semibold text-foreground">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1667B7]/10 text-[#1667B7]">
                      <Check className="h-3 w-3" aria-hidden="true" />
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3 lg:mt-20">
            {area.sections.map((section, index) => (
              <article key={section.title} className="border-t-2 border-primary/20 bg-white/75 px-1 py-5 sm:px-4">
                <span className="text-xs font-extrabold text-primary">0{index + 1}</span>
                <h3 className="mt-2 font-heading text-xl font-extrabold text-foreground">{section.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{section.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-5 border-t border-border/70 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-heading text-xl font-extrabold text-foreground">¿Quieres conocer más?</h3>
              <p className="mt-1 text-sm text-muted-foreground">Escríbenos y te orientamos sobre esta área.</p>
            </div>
            <Link
              href="/contacto"
              className="inline-flex min-h-12 items-center justify-center gap-2 self-start rounded-lg bg-primary px-6 text-sm font-bold text-primary-foreground shadow-sm transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:self-auto"
            >
              Consultar esta área
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
