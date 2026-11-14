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
  MessageSquare,
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
      <section className="relative overflow-hidden bg-gradient-to-b from-[#EEF5FB] via-[#F7FAFD] to-background pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-border/40">
        {/* Soft ambient lighting with brand colors */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 w-[760px] h-[360px] bg-gradient-to-tr from-[#00B9DB]/20 via-[#0875D1]/15 to-[#7771C7]/15 blur-3xl opacity-75 rounded-full"
        />
        {/* Subtle patterned background for tactile depth */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #072B4F 1px, transparent 0)`,
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-primary text-xs font-black uppercase tracking-wider mb-6 border border-primary/20 shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
              HUMANOS HUB · CUATRO UNIDADES
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground text-balance leading-[1.12]">
              HUMANOS <span className="text-primary text-glow">HUB</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg lg:text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto text-balance">
              Cuatro unidades complementarias en Cali Norte para acompañar cada etapa de tu recuperación,
              readaptación física, movilidad asistida y formación profesional bajo una misma cultura asistencial.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="rounded-2xl h-13 px-8 font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
                <a href="#unidades">
                  Explorar las 4 unidades
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-2xl h-13 px-8 font-bold border-border/80 bg-white/90 hover:bg-white transition-all shadow-xs">
                <a href="#comparador">
                  <Compass className="mr-2 h-4 w-4 text-primary" />
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
      <section className="py-20 bg-gradient-to-br from-[#072B4F] to-[#0A4178] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-balance leading-tight">
            ¿Aún no sabes qué unidad necesitas?
          </h2>
          <p className="mt-5 text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
            Escríbenos directamente o solicita una consulta. Nuestro equipo te escucha, comprende tu
            caso y te orienta hacia la unidad correspondiente antes de agendar tu cita.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-2xl px-8 h-14 text-base font-bold bg-white text-[#072B4F] hover:bg-white/90 shadow-xl hover:scale-[1.02] transition-transform"
            >
              <Link href="/agendar-cita" className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Agendar u orientarme
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              className="rounded-2xl px-8 h-14 text-base font-bold bg-[#25D366] text-white hover:bg-[#20BD5A] shadow-xl hover:scale-[1.02] transition-transform"
            >
              <a
                href="https://wa.me/573177995831?text=Hola%2C%20quisiera%20recibir%20orientaci%C3%B3n%20sobre%20las%20unidades%20de%20HUMANOS."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                Escribir por WhatsApp
              </a>
            </Button>
          </div>

          <p className="mt-8 text-xs text-white/70">
            Atención personalizada en Cali Norte · Av. 2D Norte #24N-85 · Cita previa confirmada
          </p>
        </div>
      </section>
    </div>
  )
}

