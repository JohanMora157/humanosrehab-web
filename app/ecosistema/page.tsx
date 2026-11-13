import type { Metadata } from "next"
import PageLayout from "@/components/page-layout"
import { EcosistemaContent } from "@/components/ecosistema/ecosistema-content"

export const metadata: Metadata = {
  title: "Ecosistema HUMANOS | Cuatro Unidades en Cali",
  description:
    "Conoce las cuatro unidades de HUMANOS en Cali: HUMANOS Fisioterapia, HUMANOS Activa, HUMANOS Stretching Lab y HUMANOS Academia. Encuentra la unidad para tu objetivo.",
}

export default function EcosistemaPage() {
  return (
    <PageLayout>
      <EcosistemaContent />
    </PageLayout>
  )
}

