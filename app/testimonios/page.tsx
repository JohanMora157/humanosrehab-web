import PageLayout from "@/components/page-layout"
import { PageHeader } from "@/components/ui/page-header"
import { TestimonialsStats } from "@/components/testimonios/testimonials-stats"
import { TestimonialsGrid } from "@/components/testimonios/testimonials-grid"
import { SocialProof } from "@/components/testimonios/social-proof"
import { CTASection } from "@/components/home/cta-section"

export const metadata = {
  title: "Testimonios | Humanos Fisioterapia y Rehabilitación Deportiva",
  description: "Lee las opiniones de nuestros pacientes. 5.0 en Google con más de 171 opiniones verificadas. Fisioterapia en Cali.",
}

export default function TestimoniosPage() {
  return (
    <PageLayout>
      <PageHeader
        badge="Opiniones verificadas"
        title="Pacientes que confían en Humanos"
        description="Conoce las experiencias de quienes han confiado en nosotros para su recuperación."
        bgImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-y6Srx6vFmSfcjBAuMdHH3rmdpLNagd.png"
      />
      <TestimonialsStats />
      <TestimonialsGrid />
      <SocialProof />
      <CTASection />
    </PageLayout>
  )
}
