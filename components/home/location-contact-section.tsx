import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Building2, Calendar, MapPin, MessageSquare, Navigation, Phone } from "lucide-react"

export function LocationContactSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#F5F8FB] bg-grid-pattern border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-primary">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Sede Institucional · Cali Norte
          </div>
          <h2 className="mt-3 font-heading text-3xl font-black text-foreground sm:text-4xl lg:text-4.5xl leading-tight">
            Nuestra sede en Cali norte
          </h2>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Nuestras cuatro unidades operan en una sede acondicionada para tu comodidad, privacidad
            y continuidad en el movimiento.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
          {/* Card Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-border/80 bg-white p-7 sm:p-9 shadow-premium">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Building2 className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-wider text-primary">
                    Ubicación Confirmada
                  </p>
                  <h3 className="font-heading text-lg font-black text-foreground">
                    HUMANOS Sede Norte
                  </h3>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 text-sm text-foreground">
                  <MapPin className="h-5 w-5 text-[#E63946] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Av. 2D Norte #24N-85</p>
                    <p className="text-xs text-muted-foreground">Barrio El Piloto, Cali, Colombia</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-foreground">
                  <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Línea y WhatsApp institucional</p>
                    <p className="text-xs text-muted-foreground">+57 317 799 5831</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border/60 bg-secondary/35 p-4 text-xs text-muted-foreground leading-relaxed">
                <p className="font-bold text-foreground mb-1">Instalaciones de la sede:</p>
                Cinco estaciones funcionales con camilla, dos consultorios independientes para
                piso pélvico y drenaje linfático, y espacio de acondicionamiento Activa.
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-border/60 flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                className="flex-1 rounded-xl h-12 font-bold bg-white border border-primary/20 text-primary hover:bg-primary/5 shadow-xs"
              >
                <a
                  href="https://maps.google.com/?q=Av.+2D+Norte+%2324N-85,+El+Piloto,+Cali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Navigation className="h-4 w-4" />
                  Ver en Google Maps
                </a>
              </Button>

              <Button
                asChild
                className="flex-1 rounded-xl h-12 font-bold bg-primary text-primary-foreground shadow-sm hover:bg-primary/95"
              >
                <a
                  href="https://wa.me/573177995831?text=Hola%2C%20quisiera%20recibir%20orientaci%C3%B3n%20sobre%20los%20servicios%20de%20HUMANOS."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageSquare className="h-4 w-4" />
                  Escribir por WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Interactive Google Map Frame */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-premium border-4 border-white min-h-[350px] lg:min-h-full">
            <iframe
              src="https://maps.google.com/maps?q=Av.%202D%20Norte%20%2324N-85,%20El%20Piloto,%20Cali,%20Colombia&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "360px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de HUMANOS en Cali norte"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

