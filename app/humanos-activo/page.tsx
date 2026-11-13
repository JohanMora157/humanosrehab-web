import PageLayout from "@/components/page-layout"
import { PageHeader } from "@/components/ui/page-header"
import { ActivaContent } from "@/components/activa/activa-content"

export const metadata = {
  title: "HUMANOS Activa | Readaptación física y acondicionamiento en Cali",
  description:
    "Espacio de readaptación física y acondicionamiento funcional en Cali. Fuerza, estabilidad y control motor para retomar tus actividades de forma segura.",
}

export default function HumanosActivoPage() {
  return (
    <PageLayout>
      <PageHeader
        badge="HUMANOS HUB · READAPTACIÓN Y FUERZA"
        title="HUMANOS Activa"
        description="Acondicionamiento físico y readaptación funcional para ganar fuerza, control motor y retomar tus actividades con seguridad en Cali."
        bgImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-W7kul7TsRGLitaYXgTnfkQFW5QutbD.png"
      />
      <ActivaContent />
    </PageLayout>
  )
}
