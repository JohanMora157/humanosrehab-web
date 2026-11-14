"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Activity,
  ArrowRight,
  BookOpenCheck,
  Building2,
  Calendar,
  CheckCircle2,
  Compass,
  HeartPulse,
  HelpCircle,
  Layers,
  MapPin,
  Route,
  Shield,
  ShieldCheck,
  Target,
  Wind,
  Zap,
} from "lucide-react"

import { Button } from "@/components/ui/button"

interface EcosystemUnit {
  id: string
  name: string
  tagline: string
  badgeLabel: string
  purpose: string
  targetAudience: string
  spaceDescription: string
  color: string
  textColor: string
  borderColor: string
  bgColor: string
  href: string
  image: string
  features: string[]
  icon: typeof HeartPulse
}

const ecosystemUnits: EcosystemUnit[] = [
  {
    id: "fisioterapia",
    name: "HUMANOS Fisioterapia",
    tagline: "Unidad clínica y rehabilitación",
    badgeLabel: "Unidad Clínica",
    purpose:
      "Valoración clínica minuciosa, tratamiento y rehabilitación musculoesquelética, y consultorios independientes para piso pélvico y drenaje linfático.",
    targetAudience:
      "Personas con dolor, limitación al moverse, posoperatorios o lesiones deportivas que requieren diagnóstico y tratamiento profesional.",
    spaceDescription:
      "5 estaciones clínicas funcionales con camilla + 2 consultorios independientes dedicados a piso pélvico y drenaje.",
    color: "#00B9DB",
    textColor: "text-[#006D82]",
    borderColor: "border-[#00B9DB]/30",
    bgColor: "bg-[#00B9DB]/10",
    href: "/humanos-clinica",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dsYNDGnE85fZdm7sTVQBW43BhvXFS2.png",
    features: [
      "Valoración funcional inicial de 30 min",
      "Sesiones integrales de 60 min",
      "Consultorio independiente de piso pélvico",
      "Consultorio independiente de drenaje linfático",
    ],
    icon: HeartPulse,
  },
  {
    id: "activa",
    name: "HUMANOS Activa",
    tagline: "Readaptación física y acondicionamiento",
    badgeLabel: "Readaptación y Fuerza",
    purpose:
      "Acondicionamiento físico individualizado, desarrollo de fuerza y control motor con supervisión biomecánica para consolidar la salud motriz.",
    targetAudience:
      "Personas de alta clínica, adultos que buscan entrenar de forma segura o deportistas en proceso de readaptación física hacia su disciplina.",
    spaceDescription:
      "Espacio independiente acondicionado con máquinas multifuerza, rack, bancos de fuerza y material fisioterapéutico.",
    color: "#0875D1",
    textColor: "text-[#0862AE]",
    borderColor: "border-[#0875D1]/30",
    bgColor: "bg-[#0875D1]/10",
    href: "/humanos-activo",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-W7kul7TsRGLitaYXgTnfkQFW5QutbD.png",
    features: [
      "Valoración de punto de partida individual",
      "Progresión graduada de cargas",
      "Control de postura y técnica motriz",
      "Retorno seguro al deporte y la vida activa",
    ],
    icon: Activity,
  },
  {
    id: "stretching",
    name: "HUMANOS Stretching Lab",
    tagline: "Elongación asistida y movilidad",
    badgeLabel: "Movilidad Asistida",
    purpose:
      "Elongación guiada y movilidad corporal asistida para recuperar amplitud articular, modular la rigidez postural y favorecer la relajación física.",
    targetAudience:
      "Personas con tensión postural, trabajadores con rutinas sedentarias o personas activas que buscan optimizar su rango de movimiento.",
    spaceDescription:
      "Zona de movilidad equipada con 3 estaciones funcionales y área de colchonetas para trabajo asistido y activo.",
    color: "#009BB5",
    textColor: "text-[#00687A]",
    borderColor: "border-[#009BB5]/30",
    bgColor: "bg-[#009BB5]/10",
    href: "/stretching-lab",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uQhlmMcbHYP9AMQ8TbcGpEUG0A71Ud.png",
    features: [
      "Elongación asistida sin dolor forzado",
      "Movilidad articular guiada en colchoneta",
      "Diferenciada de descarga muscular clínica",
      "Pautas de movilidad para el día a día",
    ],
    icon: Wind,
  },
  {
    id: "academia",
    name: "HUMANOS Academia",
    tagline: "Educación y formación continua",
    badgeLabel: "Educación Continua",
    purpose:
      "Espacio formativo para transferir razonamiento clínico, palpación biomecánica y destrezas prácticas a profesionales y estudiantes del movimiento.",
    targetAudience:
      "Fisioterapeutas, estudiantes de últimos semestres, entrenadores y profesionales de la salud interesados en actualización técnica.",
    spaceDescription:
      "Sede acondicionada para prácticas presenciales, análisis de casos y talleres intensivos con retroalimentación docente directa.",
    color: "#7771C7",
    textColor: "text-[#524CA8]",
    borderColor: "border-[#7771C7]/30",
    bgColor: "bg-[#7771C7]/10",
    href: "/academia",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pm1Y5QiXI4Md8qgc8KFxrZ2HKcx0h2.png",
    features: [
      "Cursos prácticos con justificación clínica",
      "Líneas en terapia manual, punción y fascia",
      "Transparencia sobre constancias académicas",
      "Retroalimentación directa en práctica guiada",
    ],
    icon: BookOpenCheck,
  },
]

const decisionGuide = [
  {
    situation: "¿Tienes un dolor reciente o persistente, te lesionaste o vienes de una cirugía?",
    recommendation: "HUMANOS Fisioterapia",
    href: "/humanos-clinica",
    reason:
      "Requiere una valoración clínica integral (F01) para evaluar las estructuras afectadas, establecer una línea base y definir un plan de tratamiento guiado.",
    color: "#00B9DB",
    textColor: "text-[#006D82]",
    badgeBg: "bg-[#00B9DB]/15",
  },
  {
    situation: "¿Superaste el dolor agudo y quieres ganar fuerza, resistencia y volver a entrenar?",
    recommendation: "HUMANOS Activa",
    href: "/humanos-activo",
    reason:
      "Unidad de readaptación física y acondicionamiento biomecánico con equipo de fuerza para progresar de manera segura hacia el ejercicio.",
    color: "#0875D1",
    textColor: "text-[#0862AE]",
    badgeBg: "bg-[#0875D1]/15",
  },
  {
    situation: "¿Sientes el cuerpo tenso o rígido y buscas mejorar tu flexibilidad y postura?",
    recommendation: "HUMANOS Stretching Lab",
    href: "/stretching-lab",
    reason:
      "Sesiones de elongación asistida y movilidad guiada que respetan tu rango de tolerancia para aliviar la sensación de rigidez postural.",
    color: "#009BB5",
    textColor: "text-[#00687A]",
    badgeBg: "bg-[#009BB5]/15",
  },
  {
    situation: "¿Eres profesional o estudiante de fisioterapia y deseas actualizarte con práctica real?",
    recommendation: "HUMANOS Academia",
    href: "/academia",
    reason:
      "Programas y talleres de formación continua enfocados en destrezas manuales, razonamiento biomecánico y justificación clínica de decisiones.",
    color: "#7771C7",
    textColor: "text-[#524CA8]",
    badgeBg: "bg-[#7771C7]/15",
  },
]

export function EcosistemaContent() {
  const [selectedUnit, setSelectedUnit] = useState<string>("fisioterapia")

  return (
    <div className="relative overflow-hidden bg-background">
      {/* =========================================================================
          SECCIÓN 1 — HERO INSTITUCIONAL: HUMANOS HUB
      ========================================================================= */}
      <section className="relative overflow-hidden bg-transparent pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-border/40">
        {/* Dynamic kinetic nodes */}
        <div className="absolute top-[20%] left-[8%] pointer-events-none select-none hidden lg:block animate-float">
          <span className="relative flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00B9DB] opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#00B9DB]" />
          </span>
        </div>
        <div className="absolute bottom-[24%] right-[10%] pointer-events-none select-none hidden lg:block animate-float delay-200">
          <span className="relative flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0875D1] opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#0875D1]" />
          </span>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(110deg, rgba(8, 117, 209, 0.045), transparent 55%, rgba(7, 27, 54, 0.025))",
            maskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center bg-white/70 backdrop-blur-md border border-white/80 shadow-premium p-8 sm:p-12 lg:p-14 rounded-[32px] transition-all duration-500">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-extrabold uppercase tracking-wider mb-6 shadow-xs border border-primary/5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0875D1] animate-pulse" />
              HUMANOS HUB · CUATRO UNIDADES
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight text-foreground leading-[1.08] text-balance">
              HUMANOS <span className="text-[#0875D1] text-glow">HUB</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed font-semibold max-w-2xl mx-auto opacity-90 text-balance">
              Cuatro unidades complementarias en Cali Norte para acompañar cada etapa de tu recuperación,
              readaptación física, movilidad asistida y formación profesional bajo una misma cultura asistencial.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="rounded-2xl h-14 px-8 text-base font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform"
              >
                <a href="#unidades" className="flex items-center gap-2">
                  Explorar las 4 unidades
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-2xl h-14 px-8 text-base font-bold hover:bg-primary/5 hover:scale-[1.02] transition-transform border-border/80 bg-white"
              >
                <a href="#comparador" className="flex items-center gap-2">
                  <Compass className="w-5 h-5 text-[#0875D1]" />
                  ¿Cuál unidad necesito?
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECCIÓN 2 — LAS CUATRO UNIDADES DETALLADAS
      ========================================================================= */}
      <section id="unidades" className="py-16 lg:py-24 bg-[#F5F8FB] border-y border-border/60 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-black uppercase tracking-wider text-primary">
              Estructura Oficial
            </span>
            <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-black text-foreground">
              Cuatro unidades y sus funciones
            </h2>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">
              Cada unidad tiene un propósito delimitado, instalaciones acondicionadas y un equipo
              que respeta el alcance de su intervención.
            </p>
          </div>

          <div className="space-y-12">
            {ecosystemUnits.map((unit, index) => {
              const Icon = unit.icon
              const isEven = index % 2 === 1

              return (
                <div
                  key={unit.id}
                  id={unit.id}
                  className="scroll-mt-24 rounded-3xl border border-border/80 bg-white p-6 sm:p-9 shadow-sm hover:shadow-xl transition-all duration-300"
                  style={{ borderTop: `4px solid ${unit.color}` }}
                >
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Visual Card Image */}
                    <div className={`lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-secondary border border-border/50">
                        <Image
                          src={unit.image}
                          alt={unit.name}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 450px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                        {/* Top-left icon badge (consistent with home hub section) */}
                        <span
                          className="absolute left-3.5 top-3.5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 shadow-md backdrop-blur-md"
                          style={{ color: unit.color }}
                        >
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>

                        {/* Top-right label badge (consistent with home hub section) */}
                        <span
                          className={`absolute right-3.5 top-3.5 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider shadow-sm backdrop-blur-md ${unit.textColor}`}
                        >
                          <span
                            className="h-2 w-2 rounded-full shrink-0"
                            style={{ backgroundColor: unit.color }}
                            aria-hidden="true"
                          />
                          {unit.badgeLabel}
                        </span>
                      </div>
                    </div>

                    {/* Text and Details */}
                    <div className={`lg:col-span-7 space-y-4 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-black uppercase tracking-wider ${unit.bgColor} ${unit.textColor}`}
                        >
                          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: unit.color }} />
                          {unit.badgeLabel}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          {unit.tagline}
                        </span>
                      </div>

                      <h3 className="font-heading text-2xl sm:text-3xl font-black text-foreground">
                        {unit.name}
                      </h3>

                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                        {unit.purpose}
                      </p>

                      <div className="grid sm:grid-cols-2 gap-3 pt-1 text-xs">
                        <div className="p-3.5 rounded-xl bg-slate-50/80 border border-border/70">
                          <span className="block font-bold text-foreground mb-1 text-[11px] uppercase tracking-wider">
                            ¿A quién está dirigida?
                          </span>
                          <p className="text-muted-foreground leading-relaxed">{unit.targetAudience}</p>
                        </div>

                        <div className="p-3.5 rounded-xl bg-slate-50/80 border border-border/70">
                          <span className="block font-bold text-foreground mb-1 text-[11px] uppercase tracking-wider">
                            Instalaciones confirmadas:
                          </span>
                          <p className="text-muted-foreground leading-relaxed">{unit.spaceDescription}</p>
                        </div>
                      </div>

                      <ul className="grid sm:grid-cols-2 gap-2 pt-2 text-xs font-semibold text-foreground/85">
                        {unit.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: unit.color }} />
                            <span className="leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-3">
                        <Button
                          asChild
                          size="lg"
                          className="rounded-2xl font-bold h-12 px-7 text-white shadow-sm transition-all hover:scale-[1.01]"
                          style={{ backgroundColor: unit.color }}
                        >
                          <Link href={unit.href} className="inline-flex items-center gap-2">
                            Conocer {unit.name}
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECCIÓN 3 — COMPARADOR: ¿POR DÓNDE EMPEZAR?
      ========================================================================= */}
      <section id="comparador" className="py-16 lg:py-24 bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-primary mb-3">
              <Compass className="w-3.5 h-3.5" />
              Guía de Decisión
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-foreground">
              ¿Por dónde te conviene empezar?
            </h2>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">
              Identifica tu situación actual y conoce la puerta de entrada más apropiada a HUMANOS.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {decisionGuide.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-border/80 bg-slate-50/50 p-7 shadow-sm hover:shadow-premium transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-xs font-black text-muted-foreground uppercase tracking-wider">
                      Situación 0{index + 1}
                    </span>
                    <span
                      className={`text-xs font-black px-3 py-1 rounded-full ${item.badgeBg} ${item.textColor}`}
                    >
                      {item.recommendation}
                    </span>
                  </div>

                  <h3 className="mt-4 font-heading text-lg font-black text-foreground">
                    {item.situation}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.reason}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60">
                  <Button asChild variant="outline" className="w-full rounded-xl font-bold">
                    <Link href={item.href} className="flex items-center justify-center gap-2">
                      Ir a {item.recommendation}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECCIÓN 4 — CÓMO COLABORAN LAS UNIDADES (SIN RUTAS OBLIGATORIAS)
      ========================================================================= */}
      <section className="py-16 lg:py-20 bg-[#F5F8FB] border-t border-border/60">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-primary mb-3">
            <Route className="w-3.5 h-3.5" />
            Continuidad Respetuosa
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-black text-foreground">
            Cómo colaboran nuestras unidades
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            En HUMANOS creemos en la continuidad del movimiento sin imponer circuitos obligatorios.
            Cada persona avanza a su propio ritmo según su evaluación individual y sus metas.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-6 text-left">
            <div className="rounded-2xl border border-border/70 bg-white p-5 shadow-xs">
              <span className="font-heading text-xs font-black text-primary uppercase tracking-wider">
                Fase 1 · Clínica
              </span>
              <h4 className="mt-2 font-heading font-black text-base text-foreground">
                Manejo del dolor y función
              </h4>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                HUMANOS Fisioterapia interviene en síntomas, posoperatorios o disfunciones para
                recuperar la tolerancia a las tareas básicas.
              </p>
            </div>

            <div className="rounded-2xl border border-border/70 bg-white p-5 shadow-xs">
              <span className="font-heading text-xs font-black text-[#0875D1] uppercase tracking-wider">
                Fase 2 · Fuerza
              </span>
              <h4 className="mt-2 font-heading font-black text-base text-foreground">
                Readaptación y potencia
              </h4>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                HUMANOS Activa recibe a personas con alta clínica para entrenar fuerza y control
                motor con supervisión biomecánica.
              </p>
            </div>

            <div className="rounded-2xl border border-border/70 bg-white p-5 shadow-xs">
              <span className="font-heading text-xs font-black text-[#009BB5] uppercase tracking-wider">
                Bienestar · Continuidad
              </span>
              <h4 className="mt-2 font-heading font-black text-base text-foreground">
                Movilidad y prevención
              </h4>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Stretching Lab complementa con pausas asistidas de elongación articular para
                quienes buscan mantener amplitud postural.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-border/60 bg-white/80 p-4 max-w-2xl mx-auto text-xs text-muted-foreground">
            <p>
              <strong>Aclaración ética:</strong> No exigimos que todos los pacientes pasen por las
              demás unidades. Si tu objetivo concluye con tu rehabilitación en Fisioterapia, te
              entregamos tus recursos de autogestión sin compromisos adicionales.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECCIÓN 5 — CTA DE ORIENTACIÓN PERSONALIZADA
      ========================================================================= */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Decorative blur matching home CTA */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            ¿Aún no sabes qué unidad necesitas?
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/85 max-w-2xl mx-auto leading-relaxed">
            Escríbenos directamente o solicita una consulta. Nuestro equipo te escucha, comprende tu
            caso y te orienta hacia la unidad correspondiente antes de agendar tu cita.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="rounded-2xl px-8 h-14 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="/agendar-cita" className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Agendar u orientarme
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              className="rounded-2xl px-8 h-14 text-base font-bold bg-white text-primary border-2 border-transparent hover:bg-[#EBFBF0] hover:text-[#1E9A4D] hover:border-[#25D366] hover:scale-[1.02] shadow-lg transition-all group"
            >
              <a
                href="https://wa.me/573177995831?text=Hola%2C%20quisiera%20recibir%20orientaci%C3%B3n%20sobre%20las%20unidades%20de%20HUMANOS."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5 fill-[#25D366] transition-transform group-hover:scale-110"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Escribir por WhatsApp
              </a>
            </Button>
          </div>

          <p className="mt-8 text-sm text-primary-foreground/70">
            Atención personalizada con cita previa en Cali Norte · Av. 2D Norte #24N-85
          </p>
        </div>
      </section>
    </div>
  )
}

