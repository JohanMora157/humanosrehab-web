import PageLayout from "@/components/page-layout"
import { HeroSection } from "@/components/home/hero-section"
import { BrandIntro } from "@/components/home/brand-intro"
import { ServicesPreview } from "@/components/home/services-preview"
import { TestimonialsPreview } from "@/components/home/testimonials-preview"
import { CTASection } from "@/components/home/cta-section"

export default function InicioPage() {
  return (
    <PageLayout>
      <HeroSection />
      <BrandIntro />
      <ServicesPreview />
      <TestimonialsPreview />
      <CTASection />
    </PageLayout>
  )
}

