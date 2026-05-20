import PageLayout from "@/components/page-layout"
import { PageHeader } from "@/components/ui/page-header"
import { AboutContent } from "@/components/nosotros/about-content"
import { ValuesSection } from "@/components/nosotros/values-section"
import { GallerySection } from "@/components/nosotros/gallery-section"
import { CTASection } from "@/components/home/cta-section"

export const metadata = {
  title: "Nosotros | Humanos Fisioterapia y Rehabilitación Deportiva",
  description: "Conoce al Prof. Julian Mauricio Saenz Barahona y nuestro enfoque humano y profesional en fisioterapia y rehabilitación deportiva en Cali.",
}

export default function NosotrosPage() {
  return (
    <PageLayout>
      <PageHeader
        badge="Sobre nosotros"
        title="Fisioterapia con enfoque humano y profesional"
        description="Acompañamos tu proceso de recuperación con tratamientos personalizados y un equipo comprometido con tu bienestar."
      />
      <AboutContent />
      <ValuesSection />
      <GallerySection />
      <CTASection />
    </PageLayout>
  )
}
