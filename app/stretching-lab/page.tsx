import PageLayout from "@/components/page-layout"
import { PageHeader } from "@/components/ui/page-header"
import { StretchingContent } from "@/components/stretching/stretching-content"

export const metadata = {
  title: "HUMANOS Stretching Lab | Elongación asistida y movilidad en Cali",
  description:
    "Sesiones guiadas de elongación asistida y movilidad articular personalizada en Cali. Libera tensión muscular, mejora tu rango de movimiento y restaura tu bienestar corporal.",
}

export default function StretchingLabPage() {
  return (
    <PageLayout>
      <PageHeader
        badge="HUMANOS HUB · MOVILIDAD ASISTIDA"
        title="HUMANOS Stretching Lab"
        description="Sesiones personalizadas de elongación asistida y movilidad articular guiada en Cali norte para liberar tensión y optimizar tu flexibilidad."
        bgImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uQhlmMcbHYP9AMQ8TbcGpEUG0A71Ud.png"
      />
      <StretchingContent />
    </PageLayout>
  )
}
