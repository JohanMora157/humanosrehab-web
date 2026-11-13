import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Compass, Info, Sparkles } from "lucide-react"

import PageLayout from "@/components/page-layout"
import { PageHeader } from "@/components/ui/page-header"
import { Button } from "@/components/ui/button"
import { HumanosHubSection } from "@/components/hub/hub-section"
import { ServiceCatalog } from "@/components/servicios/service-catalog"
import { CTASection } from "@/components/home/cta-section"
import { serviceSections } from "@/lib/service-catalog"

export const metadata: Metadata = {
  title: "HUMANOS HUB | Ecosistema de Fisioterapia, Movimiento y Formación en Cali",
  description:
    "Directorio de servicios de HUMANOS en Cali: HUMANOS Fisioterapia, HUMANOS Activa, HUMANOS Stretching Lab y HUMANOS Academia. Atención profesional en Cali Norte.",
}

const legacyMapping: Record<
  string,
  {
    title: string
    unitName: string
    unitHref: string
    badgeColor: string
    description: string
  }
> = {
  "fisioterapia-integral": {
    title: "Fisioterapia Integral",
    unitName: "HUMANOS Fisioterapia",
    unitHref: "/humanos-clinica",
    badgeColor: "bg-[#00B9DB]/15 text-[#006D82] border-[#00B9DB]/30",
    description:
      "La atención musculoesquelética, valoración funcional y sesiones terapéuticas integrales forman parte de nuestra unidad clínica oficial.",
  },
  "fisioterapia-avanzada": {
    title: "Fisioterapia Avanzada",
    unitName: "HUMANOS Fisioterapia",
    unitHref: "/humanos-clinica",
    badgeColor: "bg-[#00B9DB]/15 text-[#006D82] border-[#00B9DB]/30",
    description:
      "Procedimientos especializados e invasivos bajo valoración clínica y criterio asistencial en nuestra sede de Cali norte.",
  },
  "fisioterapia-especializada": {
    title: "Fisioterapia Especializada (Piso Pélvico y Drenaje)",
    unitName: "HUMANOS Fisioterapia",
    unitHref: "/humanos-clinica",
    badgeColor: "bg-[#00B9DB]/15 text-[#006D82] border-[#00B9DB]/30",
    description:
      "Atención en consultorios independientes para fisioterapia de piso pélvico y drenaje linfático terapéutico.",
  },
  "acondicionamiento-fisico": {
    title: "Acondicionamiento Físico",
    unitName: "HUMANOS Activa",
    unitHref: "/humanos-activo",
    badgeColor: "bg-[#0875D1]/15 text-[#0862AE] border-[#0875D1]/30",
    description:
      "Esta línea se encuentra ampliada y consolidada en nuestra unidad de fuerza, control motor y readaptación física.",
  },
  "premium-corporativos": {
    title: "Planes Premium y Corporativos",
    unitName: "HUMANOS Planes de Continuidad",
    unitHref: "/contacto",
    badgeColor: "bg-emerald-500/15 text-emerald-800 border-emerald-500/30",
    description:
      "Planes continuos de intervención y paquetes flexibles de sesiones para empresas, familias y deportistas.",
  },
}

export default async function ServiciosPage({
  searchParams,
}: {
  searchParams: Promise<{ servicio?: string | string[] }>
}) {
  const { servicio } = await searchParams
  const selectedService = typeof servicio === "string" ? servicio : undefined
  const mappedInfo = selectedService ? legacyMapping[selectedService] : undefined

  return (
    <PageLayout>
      <PageHeader
        badge="HUMANOS HUB · ECOSISTEMA"
        title={
          selectedService
            ? `Catálogo de Servicios: ${mappedInfo?.title ?? "Detalle Asistencial"}`
            : "Un espacio para cada etapa de tu movimiento"
        }
        description={
          selectedService
            ? "Preservamos la continuidad de tus enlaces históricos guiándote hacia la unidad y el servicio correspondiente de HUMANOS."
            : "Explora nuestras cuatro unidades especializadas: atención clínica, readaptación funcional, movilidad asistida y formación continua en Cali."
        }
        bgImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uQhlmMcbHYP9AMQ8TbcGpEUG0A71Ud.png"
      />

      {/* Banner de Compatibilidad Activo cuando se accede con ?servicio=X */}
      {selectedService && (
        <section className="bg-secondary/40 border-b border-border/70 py-6">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-border/80 bg-white p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Info className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md border ${
                        mappedInfo?.badgeColor ?? "bg-slate-100 text-foreground border-border"
                      }`}
                    >
                      Enlace histórico conservado
                    </span>
                    <span className="text-xs text-muted-foreground font-semibold">
                      ?servicio={selectedService}
                    </span>
                  </div>
                  <h3 className="mt-1 font-heading text-lg font-black text-foreground">
                    {mappedInfo?.title ?? "Servicio Seleccionado"}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 max-w-2xl leading-relaxed">
                    {mappedInfo?.description ??
                      "Este servicio se encuentra disponible en nuestro catálogo detallado y articulado con las cuatro unidades de HUMANOS."}
                  </p>
                </div>
              </div>

              {mappedInfo && (
                <Button
                  asChild
                  className="rounded-xl font-bold bg-primary text-primary-foreground shadow-sm hover:bg-primary/95 shrink-0"
                >
                  <Link href={mappedInfo.unitHref} className="flex items-center gap-2">
                    Ver {mappedInfo.unitName}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Si hay parámetro ?servicio=, mostramos el ServiceCatalog expandido con prioridad */}
      {selectedService ? (
        <>
          <ServiceCatalog key={selectedService} initialServiceId={selectedService} />

          {/* Navegación al HUB institucional */}
          <section className="py-12 bg-white border-t border-border/60 text-center">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <p className="text-xs font-black uppercase tracking-wider text-primary mb-2">
                Ecosistema HUMANOS HUB
              </p>
              <h3 className="font-heading text-2xl font-black text-foreground">
                ¿Deseas explorar las cuatro unidades completas?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
                Conoce cómo se coordinan HUMANOS Fisioterapia, HUMANOS Activa, HUMANOS Stretching
                Lab y HUMANOS Academia en nuestra sede de Cali norte.
              </p>
              <div className="mt-6 flex justify-center gap-3">
                <Button asChild variant="outline" className="rounded-xl font-bold">
                  <Link href="/servicios" className="flex items-center gap-2">
                    Ver directorio de unidades
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </>
      ) : (
        /* Vista general sin parámetro: HUMANOS HUB + acceso al catálogo detallado */
        <>
          <HumanosHubSection placement="services" />

          {/* Sección de Catálogo Detallado para consulta exhaustiva de líneas */}
          <section className="py-16 bg-[#F5F8FB] border-t border-border/60">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <span className="text-xs font-extrabold uppercase tracking-wider text-primary">
                  Catálogo Detallado
                </span>
                <h2 className="mt-2 font-heading text-2xl sm:text-3xl font-black text-foreground">
                  Catálogo descriptivo de servicios y procedimientos
                </h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Si deseas revisar las especificaciones de nuestras cinco líneas asistenciales,
                  tiempos y opciones de consulta, explora el catálogo a continuación.
                </p>
              </div>

              <ServiceCatalog />
            </div>
          </section>
        </>
      )}

      <CTASection />
    </PageLayout>
  )
}
