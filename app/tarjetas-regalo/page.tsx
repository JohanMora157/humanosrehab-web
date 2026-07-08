import PageLayout from "@/components/page-layout"
import { PageHeader } from "@/components/ui/page-header"
import { GiftCardBuilderV2 } from "@/components/gift-cards/gift-card-builder-v2"

export const metadata = {
  title: "Tarjetas de regalo | Humanos Fisioterapia y Rehabilitación Deportiva",
  description:
    "Crea una tarjeta de regalo personalizada para consultas, sesiones, packs o bonos de fisioterapia en Humanos Rehab.",
}

export default function TarjetasRegaloPage() {
  return (
    <PageLayout>
      <PageHeader
        badge="Bonos y gift cards"
        title="Regala bienestar y recuperación"
        description="Crea una tarjeta personalizada para regalar consultas, sesiones, packs o un bono abierto."
        bgImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-y6Srx6vFmSfcjBAuMdHH3rmdpLNagd.png"
      />
      <GiftCardBuilderV2 />
    </PageLayout>
  )
}
