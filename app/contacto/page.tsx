import PageLayout from "@/components/page-layout"
import { PageHeader } from "@/components/ui/page-header"
import { ContactInfo } from "@/components/contacto/contact-info"
import { MapSection } from "@/components/contacto/map-section"

export const metadata = {
  title: "Contacto | Humanos Fisioterapia y Rehabilitación Deportiva",
  description: "Visítanos en Av. 2D Norte #24N-85, El Piloto, Cali. Teléfono: 317 799 5831. Atención con cita previa.",
}

export default function ContactoPage() {
  return (
    <PageLayout>
      <PageHeader
        badge="Contacto"
        title="Estamos en Cali"
        description="Visítanos en nuestro consultorio o contáctanos para agendar tu cita."
      />
      <ContactInfo />
      <MapSection />
    </PageLayout>
  )
}
