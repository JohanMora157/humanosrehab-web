"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Building2,
  Check,
  Dumbbell,
  Gift,
  HeartPulse,
  ShieldPlus,
  Sparkles,
  Stethoscope,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type ServiceOffering = {
  title: string
  description: string
  objective: string
  note?: string
}

type ServiceGroup = {
  title: string
  offerings: ServiceOffering[]
  benefits?: string[]
}

type ServiceSection = {
  id: string
  number: string
  title: string
  summary: string
  description: string
  image: string
  imageAlt: string
  accentClass: string
  icon: LucideIcon
  iconClass: string
  groups: ServiceGroup[]
}

const serviceSections: ServiceSection[] = [
  {
    id: "fisioterapia-integral",
    number: "01",
    title: "Fisioterapia Integral",
    summary: "Valoración, tratamiento y rehabilitación musculoesquelética personalizada.",
    description:
      "Ofrecemos atención fisioterapéutica personalizada para la prevención, tratamiento y recuperación de lesiones musculoesqueléticas. Nuestro enfoque combina evaluación funcional, análisis del movimiento y educación al paciente para aliviar el dolor, mejorar la movilidad y optimizar la calidad de vida.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dsYNDGnE85fZdm7sTVQBW43BhvXFS2.png",
    imageAlt: "Paciente realizando ejercicios de rehabilitación guiado por terapeuta",
    accentClass: "from-primary/80 to-[#1667B7]/70",
    icon: Stethoscope,
    iconClass: "bg-primary/10 text-primary",
    groups: [
      {
        title: "Opciones de atención",
        offerings: [
          {
            title: "Consulta de valoración",
            description:
              "Evaluación fisioterapéutica integral que incluye anamnesis, análisis del dolor, valoración del movimiento, postura, fuerza, control motor y funcionalidad, complementada con pruebas clínicas específicas. A partir de esta valoración se establece un diagnóstico fisioterapéutico y un plan de intervención individualizado, orientado a la causa del problema.",
            objective: "Definir el diagnóstico fisioterapéutico y el plan terapéutico.",
            note: "Es la puerta de entrada a nuestro universo de recuperación.",
          },
          {
            title: "Sesión individual",
            description:
              "Sesión de fisioterapia personalizada dirigida por nuestro terapeuta de cabecera y ejecutada por profesionales expertos del equipo. Integra terapia manual, ejercicio terapéutico y reeducación del movimiento, ajustados a la evolución clínica del paciente.",
            objective: "Restaurar la función y reducir el dolor de forma progresiva.",
          },
          {
            title: "Sesión Premium",
            description:
              "Intervención avanzada con mayor tiempo terapéutico y abordaje integral, ejecutada exclusivamente por el fisioterapeuta Julián Sáenz. Indicada en casos complejos o dolor persistente; integra terapia manual profunda, liberación miofascial, neuromodulación y ejercicio correctivo.",
            objective: "Optimizar la recuperación funcional en casos de mayor complejidad.",
          },
          {
            title: "Pack de 3 sesiones",
            description:
              "Programa de corta duración enfocado en prevención de lesiones y educación terapéutica. Incluye análisis del movimiento, corrección de hábitos, ejercicio específico y estrategias de autogestión del dolor y la carga física.",
            objective: "Promover la prevención y la autogestión responsable.",
          },
          {
            title: "Pack de 5 sesiones",
            description:
              "Programa terapéutico estructurado que permite continuidad en el tratamiento y seguimiento clínico. Indicado en fases iniciales de rehabilitación o patologías de complejidad leve a moderada.",
            objective: "Consolidar los avances iniciales del proceso terapéutico.",
          },
          {
            title: "Pack de 10 sesiones",
            description:
              "Plan intensivo recomendado en lesiones crónicas, procesos postquirúrgicos o disfunciones complejas. Permite reevaluaciones periódicas y ajustes progresivos del tratamiento.",
            objective: "Consolidar la recuperación funcional a mediano plazo.",
          },
        ],
      },
    ],
  },
  {
    id: "fisioterapia-avanzada",
    number: "02",
    title: "Fisioterapia Avanzada",
    summary: "Procedimientos especializados para dolor persistente y lesiones complejas.",
    description:
      "Contamos con un enfoque especializado en fisioterapia invasiva, orientado al manejo del dolor y a la recuperación de lesiones complejas o persistentes. Aplicamos técnicas como ecografía, neuromodulación, plasma rico en plaquetas (PRP), ácido hialurónico intraarticular, proloterapia, terapia neural y corticoterapia, bajo criterios clínicos rigurosos y con un plan individualizado.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uQhlmMcbHYP9AMQ8TbcGpEUG0A71Ud.png",
    imageAlt: "Sesión clínica de terapia manual especializada",
    accentClass: "from-[#E63946]/80 to-primary/75",
    icon: ShieldPlus,
    iconClass: "bg-[#E63946]/10 text-[#E63946]",
    groups: [
      {
        title: "Procedimientos y programas",
        offerings: [
          {
            title: "Infiltración en proloterapia",
            description:
              "Procedimiento mínimamente invasivo orientado a estimular procesos regenerativos en tendones, ligamentos y articulaciones. Indicado en dolor musculoesquelético crónico y lesiones de larga evolución.",
            objective: "Favorecer la reparación tisular.",
          },
          {
            title: "Infiltración con corticoide",
            description:
              "Infiltración dirigida para el control del dolor y la inflamación en patologías musculoesqueléticas específicas, realizada bajo valoración clínica y protocolos de seguridad.",
            objective: "Control inflamatorio y alivio sintomático.",
          },
          {
            title: "Infiltración con PRP",
            description:
              "Terapia biológica regenerativa que utiliza concentrados plaquetarios autólogos para estimular la reparación de tejidos musculoesqueléticos.",
            objective: "Promover la regeneración tisular.",
            note: "PRP: plasma rico en plaquetas.",
          },
          {
            title: "Sueroterapia - sesión",
            description:
              "Terapia intravenosa de soporte clínico orientada a optimizar hidratación, recuperación física y función metabólica, ajustada a la condición clínica del paciente.",
            objective: "Apoyar la recuperación sistémica.",
          },
          {
            title: "Paquete de sueroterapia (4 sesiones)",
            description:
              "Programa de sueroterapia diseñado para generar un efecto acumulativo mediante sesiones periódicas con seguimiento clínico.",
            objective: "Potenciar los efectos de la sueroterapia.",
          },
        ],
      },
    ],
  },
  {
    id: "fisioterapia-especializada",
    number: "03",
    title: "Fisioterapia Especializada",
    summary: "Piso pélvico y drenaje linfático con abordajes clínicos focalizados.",
    description:
      "Brindamos servicios correspondientes a subespecialidades de la fisioterapia que requieren formación específica y abordajes clínicos focalizados. Incluye fisioterapia de piso pélvico y drenaje linfático para condiciones particulares que necesitan atención altamente especializada, segura y efectiva.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tFrrZzWAuE3GyimyfBWoUNZpKmZFQ0.png",
    imageAlt: "Atención fisioterapéutica especializada en consultorio",
    accentClass: "from-[#1667B7]/80 to-primary/70",
    icon: HeartPulse,
    iconClass: "bg-[#1667B7]/10 text-[#1667B7]",
    groups: [
      {
        title: "Drenaje linfático",
        offerings: [
          {
            title: "Valoración de drenaje linfático",
            description:
              "Evaluación clínica especializada del sistema linfático y circulatorio para identificar edemas, procesos inflamatorios o alteraciones del retorno linfático y definir el abordaje terapéutico adecuado.",
            objective: "Orientar el tratamiento linfático de forma segura.",
          },
          {
            title: "Pack de 5 sesiones de drenaje linfático",
            description:
              "Programa terapéutico enfocado en la estimulación del sistema linfático, reducción de edemas y apoyo a los procesos de recuperación tisular.",
            objective: "Optimizar el retorno linfático y la recuperación.",
          },
        ],
      },
      {
        title: "Piso pélvico",
        offerings: [
          {
            title: "Valoración de piso pélvico",
            description:
              "Consulta especializada para la evaluación funcional del piso pélvico, incluyendo fuerza, coordinación y control neuromuscular. Indicada en disfunciones urinarias, dolor pélvico, embarazo y postparto.",
            objective: "Identificar disfunciones del piso pélvico.",
          },
          {
            title: "Pack de 5 sesiones de piso pélvico",
            description:
              "Programa de rehabilitación enfocado en la normalización de la función del piso pélvico mediante ejercicio específico y control neuromuscular.",
            objective: "Restaurar la función del piso pélvico.",
          },
        ],
      },
    ],
  },
  {
    id: "acondicionamiento-fisico",
    number: "04",
    title: "Acondicionamiento Físico",
    summary: "Fuerza, movilidad y resistencia con acompañamiento profesional.",
    description:
      "Desarrollamos programas individualizados para mejorar la condición física de forma progresiva y segura. Partimos de una valoración funcional para ajustar cargas, ejercicios y objetivos según las capacidades, antecedentes y necesidades de cada persona.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-W7kul7TsRGLitaYXgTnfkQFW5QutbD.png",
    imageAlt: "Entrenamiento funcional y acondicionamiento físico guiado",
    accentClass: "from-amber-500/80 to-[#1667B7]/75",
    icon: Dumbbell,
    iconClass: "bg-amber-500/10 text-amber-600",
    groups: [
      {
        title: "Programas de acondicionamiento",
        offerings: [
          {
            title: "Valoración físico-funcional",
            description:
              "Análisis inicial de movilidad, fuerza, resistencia, estabilidad y patrones básicos de movimiento para establecer una línea base y definir metas alcanzables.",
            objective: "Diseñar un programa seguro y adaptado al nivel actual.",
          },
          {
            title: "Acondicionamiento individual",
            description:
              "Sesiones personalizadas que combinan fuerza, capacidad cardiovascular, movilidad y control motor con progresiones ajustadas al desempeño.",
            objective: "Mejorar la capacidad física general y la autonomía.",
          },
          {
            title: "Readaptación a la actividad física",
            description:
              "Proceso progresivo para recuperar confianza, tolerancia a la carga y habilidades necesarias antes de retomar el entrenamiento o la práctica deportiva.",
            objective: "Facilitar un retorno gradual y reducir el riesgo de recaídas.",
          },
          {
            title: "Movilidad y prevención",
            description:
              "Programa enfocado en movilidad articular, técnica de movimiento, estabilidad y hábitos de recuperación para personas activas o con rutinas sedentarias.",
            objective: "Prevenir molestias y sostener una práctica física saludable.",
          },
        ],
      },
    ],
  },
  {
    id: "premium-corporativos",
    number: "05",
    title: "Planes Premium y Corporativos",
    summary: "Continuidad terapéutica para personas, familias, equipos y empresas.",
    description:
      "Planes de seguimiento continuo y bolsas flexibles de sesiones para sostener procesos de rehabilitación, prevención y control funcional con agenda preferencial y mejores condiciones por volumen.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pm1Y5QiXI4Md8qgc8KFxrZ2HKcx0h2.png",
    imageAlt: "Equipo Humanos Rehab en atención y acompañamiento profesional",
    accentClass: "from-emerald-500/75 to-primary/80",
    icon: Building2,
    iconClass: "bg-emerald-500/10 text-emerald-600",
    groups: [
      {
        title: "Planes Premium",
        offerings: [
          {
            title: "Plan Premium 3 meses (36 sesiones)",
            description:
              "Programa integral de intervención fisioterapéutica con seguimiento continuo, enfocado en rehabilitación funcional, prevención de lesiones y control del movimiento.",
            objective: "Consolidar la función y prevenir recaídas.",
          },
          {
            title: "Plan Premium 6 meses (72 sesiones)",
            description:
              "Plan de intervención prolongada orientado a la estabilización funcional y prevención a largo plazo en pacientes con necesidades terapéuticas continuas.",
            objective: "Mantener los resultados terapéuticos en el tiempo.",
          },
        ],
        benefits: [
          "Acceso continuo a fisioterapia durante 6 meses",
          "Uso clínico promedio de hasta 3 sesiones por semana",
          "15% de descuento en fisioterapia avanzada y especializada",
          "Seguimiento real, no atención fragmentada",
          "Agenda preferencial",
          "Posibilidad de adicionar 1 o mas miembros",
        ],
      },
      {
        title: "Bolsas corporativas",
        offerings: [
          {
            title: "Bolsa de sesiones - Plan 50",
            description:
              "Paquete flexible de sesiones para planificación terapéutica individual, corporativa o deportiva, garantizando continuidad y seguimiento clínico. Ofrece flexibilidad, ahorro y acceso continuo a atención especializada.",
            objective: "Asegurar continuidad terapéutica.",
          },
          {
            title: "Bolsa de sesiones - Plan 100",
            description:
              "Plan de alto volumen orientado a atención corporativa, familiar o deportiva, enfocado en prevención, rehabilitación y control funcional sostenido. Ofrece cobertura amplia, optimización de recursos y cuidado integral.",
            objective: "Garantizar atención terapéutica a largo plazo.",
          },
        ],
        benefits: [
          "Valoración terapéutica por miembro con costo mínimo",
          "Identificación de morbilidad sentida y riesgo de lesión",
          "15% de descuento en fisioterapia avanzada y especializada",
          "Seguimiento real, no atención fragmentada",
          "Flexibilidad de uso",
          "Ahorro significativo por volumen",
        ],
      },
    ],
  },
]

export function ServiceCatalog() {
  return (
    <section className="border-b border-border/50 bg-transparent py-16 lg:py-24">
      <div className="mx-auto max-w-6xl overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-[22rem] sm:max-w-3xl lg:mb-14">
          <span className="text-xs font-extrabold uppercase text-primary">
            Cinco líneas de atención
          </span>
          <h2 className="mt-3 break-words font-heading text-3xl font-black text-foreground sm:text-4xl">
            Un servicio para cada etapa de tu proceso
          </h2>
          <p className="mt-4 break-words text-base font-medium leading-relaxed text-muted-foreground sm:text-lg">
            Evaluamos cada caso para recomendar el nivel de atención, la frecuencia y el plan más
            adecuados según tus objetivos clínicos y funcionales.
          </p>
        </div>

        <Accordion type="multiple" defaultValue={["fisioterapia-integral"]} className="space-y-5">
          {serviceSections.map((section, index) => {
            const Icon = section.icon
            const imageFirst = index % 2 === 1

            return (
              <AccordionItem
                key={section.id}
                value={section.id}
                id={section.id}
                className="overflow-hidden rounded-lg border border-border/70 bg-white/95 shadow-sm transition-shadow data-[state=open]:shadow-premium"
              >
                <AccordionTrigger className="group px-4 py-4 hover:no-underline sm:px-5 lg:px-6">
                  <div className="flex min-w-0 flex-1 items-center gap-4 pr-2 sm:gap-5">
                    <div className="hidden h-20 w-28 shrink-0 overflow-hidden rounded-lg border border-white shadow-sm sm:block">
                      <Image
                        src={section.image}
                        alt={section.imageAlt}
                        width={224}
                        height={160}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg sm:h-12 sm:w-12 ${section.iconClass}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1 text-left">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span className="text-xs font-black text-primary">{section.number}</span>
                        <h3 className="font-heading text-lg font-black text-foreground sm:text-xl">
                          {section.title}
                        </h3>
                      </div>
                      <p className="mt-1 text-xs font-semibold leading-relaxed text-muted-foreground sm:text-sm">
                        {section.summary}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="border-t border-border/60 px-4 pb-7 pt-6 sm:px-6 lg:px-8 lg:pb-9">
                  <div className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
                    <div
                      className={`relative min-h-[250px] overflow-hidden rounded-lg border-4 border-white shadow-premium sm:min-h-[320px] lg:col-span-5 ${
                        imageFirst ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <Image
                        src={section.image}
                        alt={section.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 430px"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${section.accentClass} opacity-35`} />
                      <div className="absolute inset-x-4 bottom-4 rounded-lg border border-white/20 bg-primary/80 p-4 text-white shadow-xl backdrop-blur-sm">
                        <p className="text-xs font-black uppercase tracking-wide text-white/75">
                          {section.number}
                        </p>
                        <p className="mt-1 font-heading text-lg font-black leading-tight">
                          {section.title}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`flex flex-col justify-center rounded-lg border border-border/70 bg-secondary/35 p-5 sm:p-6 lg:col-span-7 lg:p-8 ${
                        imageFirst ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${section.iconClass}`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs font-extrabold uppercase text-primary">
                            Línea de atención
                          </p>
                          <h4 className="font-heading text-xl font-black text-foreground sm:text-2xl">
                            {section.title}
                          </h4>
                        </div>
                      </div>
                      <p className="mt-5 max-w-3xl break-words text-sm font-medium leading-7 text-muted-foreground sm:text-base">
                        {section.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 space-y-10">
                    {section.groups.map((group) => (
                      <div key={group.title}>
                        <div className="flex items-center gap-3">
                          <span className="h-px w-8 bg-[#E63946]" />
                          <h4 className="font-heading text-base font-black text-foreground sm:text-lg">
                            {group.title}
                          </h4>
                        </div>

                        <div className="mt-4 grid gap-4 md:grid-cols-2">
                          {group.offerings.map((offering) => (
                            <article
                              key={offering.title}
                              className="rounded-lg border border-border/70 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-premium"
                            >
                              <h5 className="font-heading text-sm font-extrabold text-foreground sm:text-base">
                                {offering.title}
                              </h5>
                              <p className="mt-2 text-sm font-medium leading-6 text-muted-foreground">
                                {offering.description}
                              </p>
                              <p className="mt-3 text-xs font-bold leading-5 text-[#1667B7]">
                                Objetivo clínico: {offering.objective}
                              </p>
                              {offering.note && (
                                <p className="mt-2 text-xs font-semibold italic text-muted-foreground">
                                  {offering.note}
                                </p>
                              )}
                            </article>
                          ))}
                        </div>

                        {group.benefits && (
                          <div className="mt-5 rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-5">
                            <div className="flex items-center gap-3">
                              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600">
                                <Check className="h-4 w-4 stroke-[3]" />
                              </span>
                              <p className="text-xs font-extrabold uppercase text-foreground">
                                Beneficios adicionales
                              </p>
                            </div>
                            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                              {group.benefits.map((benefit) => (
                                <li
                                  key={benefit}
                                  className="flex items-start gap-2.5 text-sm font-semibold leading-5 text-muted-foreground"
                                >
                                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-600">
                                    <Check className="h-3 w-3 stroke-[3]" />
                                  </span>
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>

        <div className="mt-8 overflow-hidden rounded-lg border border-primary/15 bg-white shadow-premium">
          <div className="grid gap-0 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="p-5 sm:p-6 lg:p-8">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#E63946]/10 text-[#E63946]">
                  <Gift className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-extrabold uppercase text-primary">
                    Bonos y tarjetas de regalo
                  </p>
                  <h3 className="mt-1 font-heading text-2xl font-black text-foreground">
                    Regala una consulta, un pack o un bono abierto
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm font-medium leading-6 text-muted-foreground sm:text-base">
                    Crea una tarjeta personalizada con el nombre de la persona, el servicio que
                    quieres regalar y un mensaje corto. La tarjeta se descarga como imagen y la
                    compra se confirma por WhatsApp.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-border/70 p-5 sm:p-6 lg:border-l lg:border-t-0 lg:p-8">
              <Link
                href="/tarjetas-regalo"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/15 transition hover:-translate-y-0.5 hover:bg-primary/95 lg:w-auto"
              >
                Crear tarjeta
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-3 border-l-2 border-primary pl-4 text-sm font-semibold leading-6 text-muted-foreground">
          <Sparkles className="h-5 w-5 shrink-0 text-primary" />
          La recomendación final de servicio se define después de conocer tu caso y tus objetivos.
        </div>
      </div>
    </section>
  )
}
