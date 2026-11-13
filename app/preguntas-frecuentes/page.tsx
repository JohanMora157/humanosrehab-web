import type { Metadata } from "next"
import PageLayout from "@/components/page-layout"
import { PageHeader } from "@/components/ui/page-header"
import { FAQContent } from "@/components/faq/faq-content"
import { CTASection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | HUMANOS Cali",
  description:
    "Respuestas a las dudas más comunes sobre valoración, agendamiento y servicios en HUMANOS Fisioterapia, Activa, Stretching Lab y Academia en Cali.",
}

export default function PreguntasFrecuentesPage() {
  return (
    <PageLayout>
      <PageHeader
        badge="Centro de ayuda"
        title="Preguntas frecuentes"
        description="Encuentra respuestas claras y sustentadas sobre nuestro modelo de atención, agendamiento y unidades en Cali."
        bgImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uQhlmMcbHYP9AMQ8TbcGpEUG0A71Ud.png"
      />
      <FAQContent />
      <CTASection />
    </PageLayout>
  )
}

