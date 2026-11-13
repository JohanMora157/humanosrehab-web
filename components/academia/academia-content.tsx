import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  FileCheck2,
  GraduationCap,
  HelpCircle,
  Layers,
  Microscope,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const methodologyPillars = [
  {
    step: "01",
    title: "Fundamentación y discusión de casos",
    description:
      "Revisión de criterios anatómicos, evidencia científica, indicaciones clínicas y banderas rojas antes de la ejecución técnica.",
  },
  {
    step: "02",
    title: "Demostración de decisiones y técnica",
    description:
      "Explicación guiada de la intervención, ergonomía del profesional, referencias anatómicas de palpación y medidas de seguridad.",
  },
  {
    step: "03",
    title: "Práctica supervisada según el programa",
    description:
      "Ejecución práctica con supervisión docente directa, observando destreza manual, profundidad, ángulo y comunicación con la persona.",
  },
  {
    step: "04",
    title: "Rúbricas y retroalimentación",
    description:
      "Evaluación basada en pasos críticos y retroalimentación personalizada para consolidar un criterio de aplicación responsable.",
  },
]

// Líneas formativas documentadas en el historial de HUMANOS (Manual Maestro Parte II §7.1)
const documentedPrograms = [
  {
    title: "Punción Seca Funcional, Electropunción y HVLA",
    badge: "Línea Documentada",
    target: "Profesionales de la salud según perfil de la edición",
    description:
      "Formato documentado con encuentros virtuales y módulos prácticos presenciales. Aborda punción miofascial, estimulación y maniobras articulares estructurales.",
  },
  {
    title: "Abordaje Fascial y Fascia Global Experience",
    badge: "Línea Documentada",
    target: "Profesionales y estudiantes de salud",
    description:
      "Observación y razonamiento sobre el movimiento, relaciones funcionales y técnicas manuales sobre tejido conectivo.",
  },
  {
    title: "Anatomía Palpatoria y Biomecánica",
    badge: "Línea Documentada",
    target: "Estudiantes y profesionales en formación",
    description:
      "Talleres prácticos regionales orientados a la localización precisa de referencias anatómicas, óseas, musculares y trayectos neurovasculares.",
  },
  {
    title: "OsteoLab, Masoterapia y Vendaje",
    badge: "Actualización por Demanda",
    target: "Profesionales de la rehabilitación",
    description:
      "Temas de actualización y talleres prácticos desarrollados previamente o estructurados según necesidades de grupos específicos.",
  },
  {
    title: "Neuromodulación y Procedimientos Especializados",
    badge: "Línea Documentada",
    target: "Profesionales con perfil asistencial compatible",
    description:
      "Programas con revisión rigurosa de requisitos, marco legal, condiciones asistenciales y bioseguridad antes de su programación.",
  },
  {
    title: "Talleres para Entrenadores y Grupos no Clínicos",
    badge: "Actividades por Demanda",
    target: "Entrenadores, preparadores físicos y colectivos",
    description:
      "Orientación educativa sobre movilidad, gestión de cargas y prevención desde una perspectiva formativa no clínica.",
  },
]

// Estándares confirmados en Manual Maestro Parte II §7.2
const academicGuarantees = [
  "Grupos organizados de acuerdo con el curso y la supervisión docente disponible",
  "Uso planificado de ambientes de la sede preservando la atención y la privacidad",
  "Bioseguridad, insumos y protocolos de seguridad según la técnica",
  "Delimitación transparente entre el alcance de la constancia y la habilitación profesional",
]

const faqItems = [
  {
    question: "¿Puedo participar si soy estudiante universitario?",
    answer:
      "Depende del curso y del rol previsto en cada actividad. Algunos talleres introductorios o de anatomía admiten estudiantes, mientras que los cursos clínicos avanzados o invasivos exigen titulación previa y verificación de perfil de ingreso.",
  },
  {
    question: "¿Qué requisitos se aplican a los cursos clínicos e invasivos?",
    answer:
      "Para capacitaciones de procedimientos especializados se verifica la profesión, la etapa de formación, credenciales y ReTHUS cuando corresponda, además de los lineamientos de consentimiento y bioseguridad del protocolo.",
  },
  {
    question: "¿La constancia de un curso me habilita para ejercer la técnica?",
    answer:
      "No. La constancia de asistencia o aprobación acredita exclusivamente el alcance formativo declarado del curso. Las condiciones y requisitos legales para el ejercicio profesional se rigen de manera independiente según la profesión, el acto y la normativa vigente.",
  },
  {
    question: "¿Los cursos se imparten siempre de manera presencial?",
    answer:
      "Varía según la temática. Varios programas documentados combinan sesiones virtuales sincrónicas para la fundamentación teórica con jornadas prácticas intensivas en sede.",
  },
  {
    question: "¿Cómo solicito información de un programa o propongo un taller por demanda?",
    answer:
      "Puedes escribirnos a través del canal de contacto indicando tu perfil profesional o el colectivo al que representas y el tema de interés. Te compartiremos los temarios y requisitos aplicables.",
  },
]

export function AcademiaContent() {
  return (
    <div className="relative py-12 lg:py-20 space-y-20 lg:space-y-28">
      {/* 1. SECCIÓN INTRODUCTORIA Y FILOSOFÍA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="relative lg:col-span-5">
            <div
              className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border/80 bg-white shadow-2xl"
              style={{ borderTop: "5px solid #7771C7" }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pm1Y5QiXI4Md8qgc8KFxrZ2HKcx0h2.png"
                alt="Formación continua en fisioterapia y práctica supervisada en HUMANOS Academia Cali"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7771C7]/15 text-[#524CA8]">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#524CA8]">
                      Educación Continua
                    </p>
                    <p className="font-heading text-sm font-black text-foreground">
                      Criterio Clínico y Fundamentación
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#7771C7]/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#524CA8]">
              <span className="h-2 w-2 rounded-full bg-[#7771C7]" />
              Unidad Educativa de HUMANOS
            </div>

            <h2 className="font-heading text-3xl font-black text-foreground sm:text-4xl lg:text-4.5xl leading-tight">
              Aprende a decidir, practicar y revisar{" "}
              <span className="text-[#7771C7]">con acompañamiento docente</span>
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground font-medium">
              HUMANOS Academia desarrolla cursos, talleres y experiencias educativas para
              profesionales y estudiantes de salud, entrenadores y grupos no clínicos. La formación
              combina fundamentos, observación, práctica y retroalimentación, adaptando el alcance
              al público de cada actividad.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              <div className="flex items-start gap-3 rounded-2xl border border-border/70 bg-white/80 p-4 shadow-xs">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#7771C7]/15 text-[#524CA8]">
                  <Users className="h-4 w-4" />
                </span>
                <div>
                  <h4 className="font-heading text-sm font-bold text-foreground">
                    Supervisión metodológica
                  </h4>
                  <p className="mt-1 text-xs text-muted-foreground leading-normal">
                    Práctica organizada de acuerdo con los objetivos del curso y la supervisión requerida.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-border/70 bg-white/80 p-4 shadow-xs">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#7771C7]/15 text-[#524CA8]">
                  <Microscope className="h-4 w-4" />
                </span>
                <div>
                  <h4 className="font-heading text-sm font-bold text-foreground">
                    Justificación de decisiones
                  </h4>
                  <p className="mt-1 text-xs text-muted-foreground leading-normal">
                    Aprende a reconocer indicaciones, límites y alternativas en cada intervención.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. METODOLOGÍA FORMATIVA EN 4 PILARES */}
      <section className="bg-secondary/35 py-16 lg:py-24 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#524CA8]">
              Metodología Propuesta
            </span>
            <h2 className="mt-2 font-heading text-3xl font-black text-foreground sm:text-4xl">
              Estructura pedagógica del aprendizaje
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Enseñamos a observar, decidir, ejecutar dentro del alcance correspondiente y
              reevaluar.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {methodologyPillars.map((pillar) => (
              <div
                key={pillar.step}
                className="flex flex-col justify-between rounded-3xl border border-border/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ borderTop: "4px solid #7771C7" }}
              >
                <div>
                  <span className="font-heading text-xl font-black text-[#7771C7]">
                    {pillar.step}
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-black text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-border/50 text-[11px] font-bold text-[#524CA8]">
                  Enfoque práctico
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LÍNEAS TEMÁTICAS DOCUMENTADAS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#524CA8]">
            Temáticas Documentadas
          </span>
          <h2 className="mt-2 font-heading text-3xl font-black text-foreground sm:text-4xl">
            Líneas de formación y actualización
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Oferta documentada en el historial formativo de HUMANOS. La programación de cada edición
            define fechas, horarios, cupos y requisitos específicos.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {documentedPrograms.map((prog) => (
            <div
              key={prog.title}
              className="flex flex-col justify-between rounded-3xl border border-border/80 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-[#7771C7]/10 px-3 py-1 text-[11px] font-bold text-[#524CA8]">
                    {prog.badge}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-lg font-black text-foreground">
                  {prog.title}
                </h3>
                <p className="mt-1 text-xs font-semibold text-muted-foreground">
                  Público: {prog.target}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {prog.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/50 text-xs font-bold text-[#524CA8]">
                Información bajo solicitud
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. ESTÁNDARES DE SEGURIDAD Y RESPONSABILIDAD */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border/80 bg-white p-8 sm:p-12 shadow-premium">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#7771C7]/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-[#524CA8]">
                <ShieldCheck className="h-3.5 w-3.5" />
                Criterio y Seguridad
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-black text-foreground">
                Lineamientos de control y práctica responsable
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                HUMANOS Academia establece estándares claros para el desarrollo de cada actividad
                formativa:
              </p>
            </div>

            <div className="lg:col-span-6">
              <ul className="grid gap-3 sm:grid-cols-2">
                {academicGuarantees.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 rounded-xl border border-border/60 bg-secondary/40 p-3.5 text-xs sm:text-sm font-semibold text-foreground/90"
                  >
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#7771C7]/15 text-[#524CA8]">
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
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#7771C7]/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#524CA8]">
            <HelpCircle className="h-3.5 w-3.5" />
            Preguntas Frecuentes
          </span>
          <h2 className="mt-3 font-heading text-3xl font-black text-foreground sm:text-4xl">
            Preguntas frecuentes sobre HUMANOS Academia
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Consulta información sobre requisitos de ingreso, alcance de constancias y modalidades.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={item.question}
              value={`item-${index}`}
              className="rounded-2xl border border-border/80 bg-white px-6 shadow-xs transition-shadow data-[state=open]:shadow-md"
            >
              <AccordionTrigger className="text-left font-heading text-base font-bold text-foreground hover:no-underline hover:text-[#524CA8] py-5">
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
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#7771C7]/25 blur-3xl"
          />
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-white">
              <Sparkles className="h-3.5 w-3.5 text-[#7771C7]" />
              Formación y actualización
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-black leading-tight">
              ¿Deseas solicitar el programa y requisitos de una actividad?
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              Escríbenos para consultar las líneas de actualización disponibles, verificar
              requisitos de ingreso o solicitar un taller formativo adaptado a tu equipo.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-2xl bg-[#7771C7] px-7 text-sm font-bold text-white shadow-lg shadow-[#7771C7]/30 transition hover:bg-[#6660B5]"
              >
                Solicita el programa y requisitos
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/servicios"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Conoce las unidades del ecosistema
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
