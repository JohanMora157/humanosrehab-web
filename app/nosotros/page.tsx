import type { Metadata } from "next"
import PageLayout from "@/components/page-layout"
import { PageHeader } from "@/components/ui/page-header"
import { AboutContent } from "@/components/nosotros/about-content"
import { ValuesSection } from "@/components/nosotros/values-section"
import { GallerySection } from "@/components/nosotros/gallery-section"
import { CTASection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Quiénes somos en HUMANOS | Historia, Filosofía y Ecosistema en Cali",
  description:
    "Conoce el origen de HUMANOS, nuestro enfoque asistencial centrado en explicar el movimiento y la evolución hacia un ecosistema de cuatro unidades en Cali Norte.",
}

export default function NosotrosPage() {
  return (
    <PageLayout>
      <PageHeader
        badge="Sobre nosotros"
        title="Quiénes somos en HUMANOS"
        description="Acompañamos a las personas a comprender su movimiento, participar activamente en su recuperación y desarrollar recursos de autogestión para su bienestar."
        bgImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pm1Y5QiXI4Md8qgc8KFxrZ2HKcx0h2.png"
      />
      <AboutContent />
      <ValuesSection />
      <GallerySection />
      <CTASection />
    </PageLayout>
  )
}
