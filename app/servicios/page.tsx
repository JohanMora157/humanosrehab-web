import PageLayout from "@/components/page-layout"
import { HumanosHubSection } from "@/components/hub/hub-section"
import { PageHeader } from "@/components/ui/page-header"

export const metadata = {
  title: "HUMANOS HUB | Servicios y experiencias de bienestar",
  description: "Conoce las cuatro áreas de HUMANOS HUB: Humanos Clínica, Humanos Activo, Stretching Lab y Academia.",
}

export default function ServiciosPage() {
  return (
    <PageLayout>
      <PageHeader
        badge="HUMANOS HUB"
        title="Un espacio para cada forma de cuidarte"
        description="Explora nuestras áreas de atención clínica, movimiento, bienestar y aprendizaje."
        bgImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uQhlmMcbHYP9AMQ8TbcGpEUG0A71Ud.png"
      />
      <HumanosHubSection placement="services" />
    </PageLayout>
  )
}
