import PageLayout from "@/components/page-layout"
import { PageHeader } from "@/components/ui/page-header"
import { AcademiaContent } from "@/components/academia/academia-content"

export const metadata = {
  title: "HUMANOS Academia | Formación en fisioterapia y movimiento en Cali",
  description:
    "Cursos, talleres y educación continua con razonamiento clínico y práctica guiada para profesionales de la salud, estudiantes y entrenadores en Cali.",
}

export default function AcademiaPage() {
  return (
    <PageLayout>
      <PageHeader
        badge="HUMANOS HUB · EDUCACIÓN CONTINUA"
        title="HUMANOS Academia"
        description="Formación continua en fisioterapia, rehabilitación y movimiento con criterio clínico y práctica supervisada en grupos reducidos en Cali."
        bgImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pm1Y5QiXI4Md8qgc8KFxrZ2HKcx0h2.png"
      />
      <AcademiaContent />
    </PageLayout>
  )
}
