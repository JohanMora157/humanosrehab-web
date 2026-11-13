import Image from "next/image"
import Link from "next/link"
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Dumbbell,
  HelpCircle,
  Layers,
  Repeat,
  Sparkles,
  TrendingUp,
  UserCheck,
} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const entryProfiles = [
  {
    icon: Repeat,
    title: "Continuidad desde Fisioterapia",
    subtitle: "Transición posterior a la rehabilitación",
    description:
      "Para usuarios que han completado su proceso en Fisioterapia o cuentan con indicación profesional. Se recibe el objetivo funcional acordado y se revisan las tareas toleradas y restricciones vigentes para continuar el fortalecimiento de forma guiada.",
    badge: "Transición Guiada",
  },
  {
    icon: UserCheck,
    title: "Ingreso directo a acondicionamiento",
    subtitle: "Consulta directa sin remisión obligatoria",
    description:
      "Cualquier persona interesada en acondicionamiento físico funcional puede consultar directamente. Realizamos una valoración funcional inicial para definir el punto de partida. Si se identifican síntomas o hallazgos clínicos que requieran evaluación diagnóstica, se orienta previamente a Fisioterapia.",
    badge: "Consulta Directa",
  },
  {
    icon: TrendingUp,
    title: "Deportistas en readaptación",
    subtitle: "Progresión orientada a la disciplina",
    description:
      "Se analizan las demandas de la disciplina deportiva y la etapa de retorno (participación, deporte o rendimiento). Se estructura un trabajo metódico de fuerza, control motor y tolerancia a tareas progresivas.",
    badge: "Enfoque Deportivo",
  },
]

const workPillars = [
  {
    number: "01",
    title: "Fortalecimiento progresivo",
    description:
      "Patrones de empuje, tracción, sentadilla asistida o trabajo de piernas en máquinas multifuerza dosificados según la tolerancia y el objetivo acordado.",
  },
  {
    number: "02",
    title: "Estabilidad y control motor",
    description:
      "Tareas en apoyo unilateral, cambios de apoyo y control del tronco con niveles de asistencia graduados para mejorar la eficiencia del movimiento.",
  },
  {
    number: "03",
    title: "Movilidad funcional",
    description:
      "Uso del rango articular disponible durante tareas guiadas, verificando que los arcos de movimiento se mantengan con control bajo cargas suaves.",
  },
  {
    number: "04",
    title: "Readaptación deportiva",
    description:
      "Transición gradual desde patrones generales hacia gestos específicos del deporte, incorporando desaceleración, cambios de dirección o saltos según la etapa y la respuesta.",
  },
  {
    number: "05",
    title: "Prevención y autogestión",
    description:
      "Práctica de pautas de mantenimiento y criterios para ajustar el volumen de esfuerzo, facilitando que el usuario sostenga su actividad con autonomía.",
  },
]

// Lista estricta confirmada por dirección en Manual Maestro Parte I §3.2 y Parte II §5.1
const equipmentList = [
  "Dos máquinas multifuerza de entrenamiento",
  "Rack de entrenamiento",
  "Banco de pecho",
  "Banco abdominal",
  "Estación de press de pecho",
  "Material de apoyo de fisioterapia documentado",
]

const faqItems = [
  {
    question: "¿Necesito remisión médica o venir de Fisioterapia para ingresar?",
    answer:
      "No es obligatoria una remisión. Puedes solicitar orientación de manera directa. En la primera sesión se realiza una valoración funcional para conocer tus antecedentes, objetivos y tolerancia. Si se detectan síntomas nuevos o factores que requieran atención clínica, el equipo te orientará primero a Fisioterapia.",
  },
  {
    question: "¿En qué se diferencia el entrenamiento de Activa de un gimnasio convencional?",
    answer:
      "HUMANOS Activa organiza el entrenamiento en torno a un objetivo funcional concreto, un punto de partida individualizado y una progresión revisable. El plan adapta los ejercicios, rangos y cargas a tus capacidades y restricciones reales con supervisión profesional.",
  },
  {
    question: "¿Cómo se define el avance y cuándo concluye el acompañamiento?",
    answer:
      "Se comparan las tareas prioritarias con la línea de base en puntos de revisión acordados. El usuario puede egresar cuando cumple el objetivo pactado o cuando cuenta con las herramientas para continuar de forma autónoma con un plan viable.",
  },
  {
    question: "¿Puedo combinar HUMANOS Activa con Stretching Lab?",
    answer:
      "Sí. Cuando existe un objetivo de movilidad específico consensuado que complemente tu plan de fuerza y readaptación, ambas unidades pueden coordinarse dentro del ecosistema.",
  },
  {
    question: "¿Qué ocurre si presento alguna molestia durante el proceso?",
    answer:
      "Se revisa de inmediato la dosis, la técnica y la respuesta a la carga. Si la situación sugiere una necesidad clínica o excede el alcance del acondicionamiento, se coordina oportunamente la reevaluación con la unidad de Fisioterapia.",
  },
]

export function ActivaContent() {
  return (
    <div className="relative py-12 lg:py-20 space-y-20 lg:space-y-28">
      {/* 1. SECCIÓN INTRODUCTORIA Y PROPUESTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="relative lg:col-span-5">
            <div
              className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border/80 bg-white shadow-2xl"
              style={{ borderTop: "5px solid #0875D1" }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-W7kul7TsRGLitaYXgTnfkQFW5QutbD.png"
                alt="Acondicionamiento físico y readaptación en HUMANOS Activa Cali"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0875D1]/10 text-[#0875D1]">
                    <Dumbbell className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#0862AE]">
                      Espacio Independiente
                    </p>
                    <p className="font-heading text-sm font-black text-foreground">
                      Acondicionamiento y Fuerza
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0875D1]/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#0862AE]">
              <span className="h-2 w-2 rounded-full bg-[#0875D1]" />
              Unidad de Readaptación Física
            </div>

            <h2 className="font-heading text-3xl font-black text-foreground sm:text-4xl lg:text-4.5xl leading-tight">
              Entrena con una progresión que se ajusta a lo que{" "}
              <span className="text-[#0875D1]">quieres volver a hacer</span>
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground font-medium">
              HUMANOS Activa es nuestra unidad de acondicionamiento y readaptación en Cali norte.
              Adaptamos ejercicios, rangos y cargas a las capacidades y restricciones de cada
              persona. La ruta parte de un objetivo funcional acordado y acompaña una progresión
              gradual hacia la autonomía en tu actividad habitual o deportiva.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              <div className="flex items-start gap-3 rounded-2xl border border-border/70 bg-white/80 p-4 shadow-xs">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#0875D1]/15 text-[#0875D1]">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                <div>
                  <h4 className="font-heading text-sm font-bold text-foreground">
                    Punto de partida individual
                  </h4>
                  <p className="mt-1 text-xs text-muted-foreground leading-normal">
                    Evaluación de movimiento y capacidad antes de programar las cargas de trabajo.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-border/70 bg-white/80 p-4 shadow-xs">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#0875D1]/15 text-[#0875D1]">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                <div>
                  <h4 className="font-heading text-sm font-bold text-foreground">
                    Objetivos funcionales claros
                  </h4>
                  <p className="mt-1 text-xs text-muted-foreground leading-normal">
                    Orientado a recuperar tareas cotidianas, laborales o de práctica deportiva.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CÓMO INGRESAR A HUMANOS ACTIVA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs font-extrabold uppercase tracking-wider text-[#0862AE]">
            Rutas de Ingreso
          </p>
          <h2 className="mt-2 font-heading text-3xl font-black text-foreground sm:text-4xl">
            ¿Cómo ingresar a HUMANOS Activa?
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            El servicio atiende a personas remitidas tras un proceso de rehabilitación, usuarios en
            consulta directa y deportistas en readaptación funcional.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {entryProfiles.map((profile) => {
            const Icon = profile.icon
            return (
              <div
                key={profile.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ borderTop: "4px solid #0875D1" }}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0875D1]/10 text-[#0875D1] transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="rounded-full bg-secondary/80 px-3 py-1 text-[11px] font-extrabold text-foreground/80">
                      {profile.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 font-heading text-xl font-black text-foreground">
                    {profile.title}
                  </h3>
                  <p className="mt-1 text-xs font-bold text-[#0862AE] uppercase tracking-wider">
                    {profile.subtitle}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {profile.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/50 text-xs font-bold text-[#0862AE] flex items-center gap-1.5">
                  <span>Proceso guiado según valoración</span>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* 3. LÍNEAS DE TRABAJO Y PROGRESIÓN */}
      <section className="bg-secondary/35 py-16 lg:py-24 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#0862AE]">
              Líneas de Trabajo
            </span>
            <h2 className="mt-2 font-heading text-3xl font-black text-foreground sm:text-4xl">
              Áreas de trabajo en acondicionamiento y readaptación
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Las sesiones se organizan en torno a la tarea prioritaria, verificando la respuesta y
              la recuperación entre encuentros.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {workPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-border/70 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <span className="font-heading text-xs font-black tracking-widest text-[#0875D1]">
                  LÍNEA · {pillar.number}
                </span>
                <h3 className="mt-2 font-heading text-lg font-black text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            ))}

            {/* Tarjeta de integración con el Ecosistema */}
            <div className="rounded-2xl border border-[#0875D1]/30 bg-gradient-to-br from-[#0875D1]/5 to-transparent p-6 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-heading text-xs font-black tracking-widest text-[#0875D1]">
                  RELACIÓN ENTRE UNIDADES
                </span>
                <h3 className="mt-2 font-heading text-lg font-black text-foreground">
                  Continuidad con Fisioterapia y Stretching Lab
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Si durante el proceso surge una necesidad clínica, se coordina reevaluación con
                  Fisioterapia. Asimismo, Stretching Lab puede complementar un objetivo de movilidad
                  específico.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#0875D1]/20 text-xs font-bold text-[#0862AE]">
                Coordinación del ecosistema HUMANOS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INFRAESTRUCTURA CONFIRMADA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border/80 bg-white p-8 sm:p-12 shadow-premium">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#0875D1]/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-[#0862AE]">
                <Layers className="h-3.5 w-3.5" />
                Infraestructura Confirmada
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-black text-foreground">
                Espacio de acondicionamiento y equipamiento
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                HUMANOS Activa cuenta con un área independiente en la sede de Cali norte con el
                siguiente inventario documentado:
              </p>
            </div>

            <div className="lg:col-span-6">
              <ul className="grid gap-3 sm:grid-cols-2">
                {equipmentList.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 rounded-xl border border-border/60 bg-secondary/40 p-3.5 text-xs sm:text-sm font-semibold text-foreground/90"
                  >
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#0875D1]/15 text-[#0875D1]">
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
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0875D1]/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#0862AE]">
            <HelpCircle className="h-3.5 w-3.5" />
            Preguntas Frecuentes
          </span>
          <h2 className="mt-3 font-heading text-3xl font-black text-foreground sm:text-4xl">
            Preguntas frecuentes sobre HUMANOS Activa
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Consulta los criterios de ingreso, el enfoque metodológico y la progresión del servicio.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={item.question}
              value={`item-${index}`}
              className="rounded-2xl border border-border/80 bg-white px-6 shadow-xs transition-shadow data-[state=open]:shadow-md"
            >
              <AccordionTrigger className="text-left font-heading text-base font-bold text-foreground hover:no-underline hover:text-[#0862AE] py-5">
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
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#0875D1]/25 blur-3xl"
          />
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-white">
              <Sparkles className="h-3.5 w-3.5 text-[#0875D1]" />
              Siguiente paso
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-black leading-tight">
              ¿Quieres conocer más sobre el ingreso a HUMANOS Activa?
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              Escríbenos para resolver dudas sobre tu punto de partida, coordinar la revisión de
              remisión o solicitar información sobre disponibilidad en Cali.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-2xl bg-[#0875D1] px-7 text-sm font-bold text-white shadow-lg shadow-[#0875D1]/30 transition hover:bg-[#0766B8]"
              >
                Solicita orientación para Activa
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/humanos-clinica"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Consulta por valoración clínica de Fisioterapia
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
