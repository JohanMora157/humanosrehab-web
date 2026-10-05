// Trigger de despliegue - Humanos Rehab
import PageLayout from "@/components/page-layout"
import { HeroSection } from "@/components/home/hero-section"
import { BrandIntro } from "@/components/home/brand-intro"
import { HumanosHubSection } from "@/components/hub/hub-section"
import { TestimonialsPreview } from "@/components/home/testimonials-preview"
import { GiftCardsSection } from "@/components/home/gift-cards-section"
import { CTASection } from "@/components/home/cta-section"

export default function InicioPage() {
  return (
    <PageLayout>
      <HeroSection />
      <HumanosHubSection placement="home" />
      <BrandIntro />
      <TestimonialsPreview />
      <GiftCardsSection />
      <CTASection />
    </PageLayout>
  )
}

