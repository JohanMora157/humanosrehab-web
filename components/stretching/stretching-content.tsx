import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Heart,
  HelpCircle,
  Layers,
  Sparkles,
  Wind,
} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const stepPhases = [
  {
    step: "01",
    title: "Recepción y revisión inicial",
    description:
      "Conversación sobre el objetivo de la sesión, sensaciones corporales recientes, restricciones y comodidad con el contacto. Se acuerda una señal de ajuste o parada y, si procede, una tarea sencilla para repetir al cierre.",
  },
  {
    step: "02",
    title: "Preparación activa",
    description:
      "Exploración de rangos de movimiento cómodos mediante tareas suaves en camilla, de pie o en colchoneta según el objetivo acordado.",
  },
  {
    step: "03",
    title: "Asistencia y elongación guiada",
    description:
      "Trabajo sobre la región prioritaria con apoyo y asistencia gradual, alternando movimiento activo y elongación tolerable en diálogo continuo con la persona.",
  },
  {
    step: "04",
    title: "Reevaluación y cierre",
    description:
      "Repetición de la referencia inicial, registro de percepción y tolerancia, orientación de una práctica breve si procede y acuerdo de continuidad según el objetivo.",
  },
]

const audiences = [
  {
    icon: Compass,
    title: "Personas con jornadas sedentarias o de oficina",
    description:
      "Una alternativa para explorar movilidad articular y hacer una pausa activa ante la rigidez acumulada por posturas prolongadas.",
  },
  {
    icon: Wind,
    title: "Deportistas y personas activas",
    description:
      "Complemento para explorar amplitud de movimiento y practicar tareas de movilidad con asistencia tras periodos de carga física.",
  },
  {
    icon: Heart,
    title: "Usuarios en búsqueda de bienestar corporal",
    description:
      "Una experiencia guiada para reconectar con el movimiento y trabajar la respiración sin fines de intervención clínica.",
  },
]

// Lista estricta confirmada por dirección en Manual Maestro Parte I §3.3 y Parte II §6.1
const infrastructureFeatures = [
  "Tres estaciones funcionales",
  "Zona de piso con colchoneta",
  "Espacio con privacidad y condiciones de iluminación y sonido propicias para conversar",
]

const faqItems = [
  {
    question: "¿Debo ser una persona flexible para empezar?",
    answer:
      "No. La asistencia se ajusta al rango que toleras de manera cómoda. El profesional orienta la posición y la amplitud en conversación contigo, respetando tu ritmo.",
  },
  {
    question: "¿En qué se diferencia de un masaje o descarga muscular?",
    answer:
      "El masaje y la descarga muscular se organizan alrededor del trabajo manual sobre tejidos blandos y forman parte de la unidad de Fisioterapia (F07). En HUMANOS Stretching Lab el eje es el movimiento guiado y tu participación activa a través de la elongación y la respiración.",
  },
  {
    question: "¿Qué indumentaria se recomienda para la sesión?",
    answer:
      "Se recomienda asistir con ropa deportiva cómoda o prendas elásticas que permitan moverte y posicionarte con total libertad.",
  },
  {
    question: "¿Puedo asistir si tengo una molestia o lesión nueva?",
    answer:
      "Si presentas un dolor agudo, inflamación reciente o sospecha de lesión clínica, el equipo te orientará primero hacia una valoración diagnóstica en HUMANOS Fisioterapia. Stretching Lab no es un tratamiento de condiciones clínicas agudas.",
  },
  {
    question: "¿Cómo se complementa con HUMANOS Activa?",
    answer:
      "HUMANOS Activa organiza la progresión de fuerza y acondicionamiento, mientras que Stretching Lab ofrece una experiencia guiada de movilidad y elongación. Ambas unidades pueden coordinarse cuando existe un objetivo consensuado.",
  },
]

export function StretchingContent() {
  return (
    <div className="relative py-12 lg:py-20 space-y-20 lg:space-y-28">
      {/* 1. SECCIÓN INTRODUCTORIA Y COMPARATIVA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="relative lg:col-span-5">
            <div
              className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border/80 bg-white shadow-2xl"
              style={{ borderTop: "5px solid #009BB5" }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uQhlmMcbHYP9AMQ8TbcGpEUG0A71Ud.png"
                alt="Sesión de elongación asistida y movilidad en HUMANOS Stretching Lab Cali"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#009BB5]/10 text-[#009BB5]">
                    <Wind className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#00687A]">
                      Movilidad Asistida
                    </p>
                    <p className="font-heading text-sm font-black text-foreground">
                      Elongación Guiada y Participación Activa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#009BB5]/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#00687A]">
              <span className="h-2 w-2 rounded-full bg-[#009BB5]" />
              Unidad de Movilidad Asistida
            </div>

            <h2 className="font-heading text-3xl font-black text-foreground sm:text-4xl lg:text-4.5xl leading-tight">
              Trabaja tu movilidad en una sesión guiada y{" "}
              <span className="text-[#009BB5]">ajustada a cómo te sientes</span>
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground font-medium">
              HUMANOS Stretching Lab ofrece experiencias de elongación asistida y movilidad
              guiada en el norte de Cali. Quien asiste orienta la posición, el rango y la intensidad
              en continua conversación con la persona, combinando elongaciones tolerables con
              movimientos activos.
            </p>

            {/* Cuadro comparativo diferenciador con Fisioterapia */}
            <div className="rounded-2xl border border-border/80 bg-white/90 p-5 shadow-sm space-y-3">
              <h4 className="font-heading text-sm font-black text-foreground flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#009BB5]" />
                Diferenciación con la atención clínica
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Stretching Lab es una experiencia de movilidad y bienestar corporal separada de la
                atención de patologías clínicas. Si tienes una lesión, dolor agudo o requieres
                descarga muscular manual, te orientamos hacia la unidad de{" "}
                <strong className="text-foreground">HUMANOS Fisioterapia</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CÓMO SE VIVE LA SESIÓN (PROTOCOLO DOCUMENTADO) */}
      <section className="bg-secondary/35 py-16 lg:py-24 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#00687A]">
              Estructura de Sesión
            </span>
            <h2 className="mt-2 font-heading text-3xl font-black text-foreground sm:text-4xl">
              ¿Cómo se desarrolla la sesión en Stretching Lab?
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Una secuencia que combina diálogo, asistencia manual y participación activa,
              respetando siempre tu comodidad y límites articulares.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stepPhases.map((phase) => (
              <div
                key={phase.step}
                className="flex flex-col justify-between rounded-3xl border border-border/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ borderTop: "4px solid #009BB5" }}
              >
                <div>
                  <span className="font-heading text-xl font-black text-[#009BB5]">
                    {phase.step}
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-black text-foreground">
                    {phase.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {phase.description}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-border/50 text-[11px] font-bold text-[#00687A]">
                  Ajuste según tolerancia
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PARA QUIÉN ESTÁ DISEÑADO */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#00687A]">
            Público y Necesidades
          </span>
          <h2 className="mt-2 font-heading text-3xl font-black text-foreground sm:text-4xl">
            ¿A quién está dirigida esta unidad?
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Deportistas, trabajadores y usuarios generales que buscan una experiencia de
            movilidad asistida y bienestar corporal.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {audiences.map((aud) => {
            const Icon = aud.icon
            return (
              <div
                key={aud.title}
                className="rounded-3xl border border-border/80 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#009BB5]/10 text-[#009BB5]">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-heading text-xl font-black text-foreground">
                  {aud.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {aud.description}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* 4. INFRAESTRUCTURA CONFIRMADA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border/80 bg-white p-8 sm:p-12 shadow-premium">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#009BB5]/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-[#00687A]">
                <Layers className="h-3.5 w-3.5" />
                Infraestructura Confirmada
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-black text-foreground">
                Espacio de HUMANOS Stretching Lab
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                El espacio cuenta con la infraestructura física documentada en los manuales
                maestros de la sede:
              </p>
            </div>

            <div className="lg:col-span-6">
              <ul className="grid gap-3">
                {infrastructureFeatures.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 rounded-xl border border-border/60 bg-secondary/40 p-4 text-xs sm:text-sm font-semibold text-foreground/90"
                  >
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#009BB5]/15 text-[#009BB5]">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PREGUNTAS FRECUENTES (ACCORDION) */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#009BB5]/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#00687A]">
            <HelpCircle className="h-3.5 w-3.5" />
            Preguntas Frecuentes
          </span>
          <h2 className="mt-3 font-heading text-3xl font-black text-foreground sm:text-4xl">
            Preguntas frecuentes sobre Stretching Lab
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Consulta información sobre la dinámica de atención, indumentaria y complementariedad.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={item.question}
              value={`item-${index}`}
              className="rounded-2xl border border-border/80 bg-white px-6 shadow-xs transition-shadow data-[state=open]:shadow-md"
            >
              <AccordionTrigger className="text-left font-heading text-base font-bold text-foreground hover:no-underline hover:text-[#00687A] py-5">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground pb-5">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* 6. LLAMADA A LA ACCIÓN FINAL */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#071B36] p-8 sm:p-12 text-white shadow-2xl">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#009BB5]/25 blur-3xl"
          />
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-white">
              <Sparkles className="h-3.5 w-3.5 text-[#009BB5]" />
              Siguiente paso
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-black leading-tight">
              ¿Quieres consultar disponibilidad en Stretching Lab?
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              Escríbenos para conocer los horarios disponibles y consultar cómo agendar tu sesión
              de movilidad en nuestra sede de Cali norte.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-2xl bg-[#009BB5] px-7 text-sm font-bold text-white shadow-lg shadow-[#009BB5]/30 transition hover:bg-[#0089A0]"
              >
                Consulta disponibilidad
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/humanos-clinica"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 text-sm font-bold text-white transition hover:bg-white/10"
              >
                ¿Tienes dolor o lesión? Consulta Fisioterapia
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
