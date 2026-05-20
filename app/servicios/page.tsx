import PageLayout from "@/components/page-layout"
import { PageHeader } from "@/components/ui/page-header"
import { ServicesGrid } from "@/components/servicios/services-grid"
import { ConditionsSection } from "@/components/servicios/conditions-section"
import { CTASection } from "@/components/home/cta-section"

export const metadata = {
  title: "Servicios | Humanos Fisioterapia y Rehabilitación Deportiva",
  description: "Fisioterapia general, rehabilitación deportiva, terapia manual, masaje terapéutico y más servicios para tu recuperación física en Cali.",
}

export default function ServiciosPage() {
  return (
    <PageLayout>
      <PageHeader
        badge="Nuestros servicios"
        title="Servicios para tu recuperación física"
        description="Ofrecemos tratamientos especializados para aliviar el dolor, recuperar movilidad y mejorar tu calidad de vida."
      />
      <ServicesGrid />
      <ConditionsSection />
      <CTASection />
    </PageLayout>
  )
}
