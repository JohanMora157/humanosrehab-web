import type { Metadata } from "next"
import PageLayout from "@/components/page-layout"
import { HeroSection } from "@/components/home/hero-section"
import { HumanosHubSection } from "@/components/hub/hub-section"
import { HowItWorksSection } from "@/components/home/how-it-works-section"
import { BrandIntro } from "@/components/home/brand-intro"
import { LocationContactSection } from "@/components/home/location-contact-section"
import { TestimonialsPreview } from "@/components/home/testimonials-preview"
import { GiftCardsSection } from "@/components/home/gift-cards-section"
import { CTASection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "HUMANOS | Movimiento, Rehabilitación y Formación en Cali",
  description:
    "Ecosistema integral en Cali: HUMANOS Fisioterapia, HUMANOS Activa, HUMANOS Stretching Lab y HUMANOS Academia. Atención profesional personalizada en Cali Norte.",
}

export default function InicioPage() {
  return (
    <PageLayout>
      <HeroSection />
      <HumanosHubSection placement="home" />
      <HowItWorksSection />
      <BrandIntro />
      <LocationContactSection />
      <TestimonialsPreview />
      <GiftCardsSection />
      <CTASection />
    </PageLayout>
  )
}
