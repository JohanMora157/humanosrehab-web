import Link from "next/link"
import { ArrowRight, Compass, MessageSquare, Route, ShieldAlert } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: Compass,
    title: "Identifica lo que estás buscando",
    description:
      "¿Consultas por un dolor o lesión que limita tu movimiento? ¿Deseas retomar el ejercicio con un plan de fuerza? ¿Buscas una pausa de movilidad asistida o formación académica? Cada necesidad tiene un espacio diseñado.",
    badge: "Paso 1",
  },
  {
    step: "02",
    icon: Route,
    title: "Conoce tu unidad o pide orientación",
    description:
      "Explora HUMANOS Fisioterapia, Activa, Stretching Lab o Academia. Si no tienes certeza sobre cuál elegir, nuestro equipo te escucha y te guía hacia la puerta de entrada más apropiada.",
    badge: "Paso 2",
  },
  {
    step: "03",
    icon: MessageSquare,
    title: "Contacta al equipo y confirma tu espacio",
    description:
      "Escríbenos o solicita tu cita. Verificamos disponibilidad, te compartimos el alcance y las condiciones vigentes de atención, y confirmamos tu cupo antes de que te desplaces a la sede.",
    badge: "Paso 3",
  },
]

export function HowItWorksSection() {
  return (
    <section className="relative bg-secondary/35 py-16 lg:py-24 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-primary">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Cómo empezar
          </div>
          <h2 className="mt-3 font-heading text-3xl font-black text-foreground sm:text-4xl lg:text-4.5xl leading-tight">
            Tu camino en el ecosistema HUMANOS
          </h2>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Te orientamos desde el primer contacto para que encuentres el servicio y la modalidad
            que corresponden exactamente a tu objetivo funcional.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.step}
                className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-2xl font-black text-primary">
                      {item.step}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>

                  <h3 className="mt-5 font-heading text-xl font-black text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/50 text-xs font-bold text-primary flex items-center gap-1.5">
                  <span>Acompañamiento transparente</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Notice of clarity and privacy */}
        <div className="mt-10 rounded-2xl border border-border/70 bg-white/90 p-5 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <ShieldAlert className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <strong>Claridad en la atención:</strong> Escribir o iniciar contacto nos permite
              orientarte y verificar disponibilidad. Tu cita queda confirmada una vez el equipo o
              sistema autorizado asigna el cupo específico. No solicitamos información médica
              sensible en este canal.
            </p>
          </div>

          <Link
            href="/agendar-cita"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-sm transition hover:bg-primary/95"
          >
            Iniciar orientación
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
