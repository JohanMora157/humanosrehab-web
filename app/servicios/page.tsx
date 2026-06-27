import PageLayout from "@/components/page-layout"
import { PageHeader } from "@/components/ui/page-header"
import { ServiceCatalog } from "@/components/servicios/service-catalog"
import { CTASection } from "@/components/home/cta-section"

export const metadata = {
  title: "Servicios | Humanos Fisioterapia y Rehabilitación Deportiva",
  description: "Fisioterapia integral, avanzada y especializada, acondicionamiento físico y planes Premium o corporativos en Cali.",
}

export default function ServiciosPage() {
  return (
    <PageLayout>
      <PageHeader
        badge="Nuestros servicios"
        title="Servicios para cada etapa de tu recuperación"
        description="Atención integral, procedimientos avanzados, especialidades clínicas, acondicionamiento físico y planes de continuidad."
        bgImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uQhlmMcbHYP9AMQ8TbcGpEUG0A71Ud.png"
      />
      <ServiceCatalog />
      <CTASection />
    </PageLayout>
  )
}
