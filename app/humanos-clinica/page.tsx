import type { Metadata } from "next"
import PageLayout from "@/components/page-layout"
import { FisioterapiaContent } from "@/components/fisioterapia/fisioterapia-content"

export const metadata: Metadata = {
  title: "HUMANOS Fisioterapia | Fisioterapia y rehabilitación clínica en Cali",
  description:
    "Atención clínica especializada en valoración funcional, fisioterapia musculoesquelética, rehabilitación deportiva, piso pélvico y drenaje linfático en Cali Norte.",
}

export default function HumanosClinicaPage() {
  return (
    <PageLayout>
      <FisioterapiaContent />
    </PageLayout>
  )
}
