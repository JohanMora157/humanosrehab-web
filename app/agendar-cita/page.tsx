import PageLayout from "@/components/page-layout"
import { PageHeader } from "@/components/ui/page-header"
import { AppointmentForm } from "@/components/agendar/appointment-form"

export const metadata = {
  title: "Agendar Cita | Humanos Fisioterapia y Rehabilitación Deportiva",
  description: "Agenda tu valoración fisioterapéutica en Cali. Cuéntanos qué sientes y te ayudaremos a encontrar el tratamiento adecuado.",
}

export default function AgendarCitaPage() {
  return (
    <PageLayout>
      <PageHeader
        badge="Agendar cita"
        title="Agenda tu valoración fisioterapéutica"
        description="Cuéntanos qué sientes y te ayudaremos a encontrar el servicio más adecuado para tu recuperación."
        bgImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-W7kul7TsRGLitaYXgTnfkQFW5QutbD.png"
      />
      <AppointmentForm />
    </PageLayout>
  )
}
