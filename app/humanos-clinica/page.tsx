import PageLayout from "@/components/page-layout"
import { CTASection } from "@/components/home/cta-section"
import { ServiceCatalog } from "@/components/servicios/service-catalog"
import { PageHeader } from "@/components/ui/page-header"

export const metadata = {
  title: "Humanos Clínica | Fisioterapia y rehabilitación en Cali",
  description: "Conoce las líneas de fisioterapia integral, avanzada y especializada de Humanos Clínica.",
}

export default function HumanosClinicaPage() {
  return (
    <PageLayout>
      <PageHeader
        badge="HUMANOS HUB"
        title="Humanos Clínica"
        description="Fisioterapia y rehabilitación para acompañar tu recuperación con atención profesional."
        bgImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dsYNDGnE85fZdm7sTVQBW43BhvXFS2.png"
      />
      <ServiceCatalog />
      <CTASection />
    </PageLayout>
  )
}
