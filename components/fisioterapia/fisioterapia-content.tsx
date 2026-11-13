"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Activity,
  ArrowRight,
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  Compass,
  FileText,
  HeartHandshake,
  HelpCircle,
  Info,
  Layers,
  MapPin,
  MessageSquare,
  Shield,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Target,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  careSteps,
  clinicalFAQs,
  clinicalInfrastructure,
  clinicalTechniques,
  primaryClinicalServices,
} from "@/lib/fisioterapia-data"

export function FisioterapiaContent() {
  const [selectedFilter, setSelectedFilter] = useState<"todos" | "asistencial" | "especializado">("todos")

  const filteredServices = primaryClinicalServices.filter((service) => {
    if (selectedFilter === "todos") return true
    if (selectedFilter === "especializado") return service.isSpecializedOffice
    if (selectedFilter === "asistencial") return !service.isSpecializedOffice
    return true
  })

  return (
    <div className="relative overflow-hidden bg-background">
      {/* =========================================================================
          SECCIÓN 1 — HERO DE FISIOTERAPIA (#00B9DB Cyan Identity)
      ========================================================================= */}
      <section className="relative overflow-hidden bg-transparent pt-6 pb-16 lg:pt-10 lg:pb-24">
        {/* Dynamic decorative gradients */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(115deg, rgba(0, 185, 219, 0.05), transparent 50%, rgba(8, 117, 209, 0.04))",
            maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Hero Content */}
            <div className="lg:col-span-7">
              <div className="bg-white/70 backdrop-blur-md border border-[#00B9DB]/20 shadow-premium p-6 sm:p-9 lg:p-10 rounded-[32px]">
                {/* Official Cyan Line Badge (WCAG AA Compliant text) */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00B9DB]/10 text-[#006D82] text-xs font-black uppercase tracking-wider mb-6 border border-[#00B9DB]/20">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00B9DB] animate-pulse" />
                  HUMANOS HUB · UNIDAD CLÍNICA
                </div>

                <h1 className="font-heading text-3xl sm:text-4xl lg:text-[48px] font-black tracking-tight text-foreground leading-[1.1] text-balance">
                  Fisioterapia y rehabilitación clínica en{" "}
                  <span className="text-[#006D82] drop-shadow-xs">Cali</span>
                </h1>

                <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed font-medium">
                  Atención clínica especializada para el alivio del dolor, la recuperación de
                  lesiones y el restablecimiento del movimiento. Evaluación rigurosa, razonamiento
                  biomecánico y un plan individualizado que entiendes y puedes aplicar.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-2xl h-14 px-8 text-base font-bold bg-[#006D82] hover:bg-[#005B6D] text-white shadow-lg shadow-[#00B9DB]/20 hover:scale-[1.02] transition-transform"
                  >
                    <Link href="/agendar-cita">
                      Solicitar valoración
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-2xl h-14 px-8 text-base font-bold border-[#00B9DB]/30 hover:bg-[#00B9DB]/5 hover:scale-[1.02] transition-transform text-foreground"
                  >
                    <a href="#servicios-clinicos">Explorar servicios</a>
                  </Button>
                </div>

                {/* Institutional Quote */}
                <div className="mt-8 p-4 rounded-2xl bg-white border-l-4 border-[#00B9DB] shadow-xs">
                  <p className="text-xs sm:text-sm font-semibold text-foreground italic">
                    “Te explicamos lo que observamos en tu valoración y acordamos contigo qué
                    trabajar en cada etapa de tu proceso.”
                  </p>
                </div>

                {/* Capabilities bar */}
                <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-border/60">
                  <div className="text-center p-2 rounded-xl bg-slate-50/70 border border-border/50">
                    <p className="font-heading font-black text-[#006D82] text-base">5 Estaciones</p>
                    <p className="text-[10px] text-muted-foreground font-bold mt-0.5">Camilla clínica</p>
                  </div>
                  <div className="text-center p-2 rounded-xl bg-slate-50/70 border border-border/50">
                    <p className="font-heading font-black text-[#006D82] text-base">2 Privados</p>
                    <p className="text-[10px] text-muted-foreground font-bold mt-0.5">Consultorios</p>
                  </div>
                  <div className="text-center p-2 rounded-xl bg-slate-50/70 border border-border/50">
                    <p className="font-heading font-black text-[#006D82] text-base">Cali Norte</p>
                    <p className="text-[10px] text-muted-foreground font-bold mt-0.5">Av. 2D Norte</p>
                  </div>
                  <div className="text-center p-2 rounded-xl bg-slate-50/70 border border-border/50">
                    <p className="font-heading font-black text-[#006D82] text-base">Cita previa</p>
                    <p className="text-[10px] text-muted-foreground font-bold mt-0.5">Atención guiada</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dsYNDGnE85fZdm7sTVQBW43BhvXFS2.png"
                  alt="Sesión de valoración y rehabilitación en HUMANOS Fisioterapia Cali"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 400px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#006D82]/40 via-transparent to-transparent" />
                
                {/* Floating pill badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-premium border border-[#00B9DB]/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#00B9DB]/15 text-[#006D82] flex items-center justify-center shrink-0">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-xs">HUMANOS Fisioterapia</p>
                      <p className="text-[11px] text-muted-foreground font-medium mt-0.5">
                        Línea asistencial y consultorios especializados
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECCIÓN 2 — ENFOQUE DE ATENCIÓN (EL PROCESO EN 5 PASOS)
      ========================================================================= */}
      <section className="py-16 lg:py-24 bg-[#F5F9FA] border-y border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#00B9DB]/10 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#006D82]">
              <span className="h-2 w-2 rounded-full bg-[#00B9DB]" />
              Modelo Asistencial
            </div>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-black text-foreground">
              Cómo trabajamos en HUMANOS Fisioterapia
            </h2>
            <p className="mt-3 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Un recorrido estructurado en 5 etapas donde comprendes los hallazgos clínicos y
              participas de manera activa en cada decisión terapéutica.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {careSteps.map((step) => {
              const Icon = step.icon
              return (
                <div
                  key={step.step}
                  className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-premium"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-heading text-2xl font-black text-[#006D82]">
                        {step.step}
                      </span>
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00B9DB]/10 text-[#006D82]">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>

                    <h3 className="mt-4 font-heading text-base font-black text-foreground leading-snug">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-border/50 text-[11px] font-bold text-[#006D82]">
                    {step.detail}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECCIÓN 3 — SERVICIOS CLÍNICOS PRINCIPALES (F01-F04, F07, F14, F15)
      ========================================================================= */}
      <section id="servicios-clinicos" className="py-16 lg:py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#00B9DB]/10 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#006D82]">
                <span className="h-2 w-2 rounded-full bg-[#00B9DB]" />
                Portafolio Confirmado
              </div>
              <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-black text-foreground">
                Servicios clínicos y consultorios especializados
              </h2>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                Cada servicio responde a una necesidad funcional específica, respaldado por las
                fichas técnicas oficiales de HUMANOS.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2 self-start sm:self-auto bg-slate-100 p-1.5 rounded-2xl border border-border/60">
              <button
                onClick={() => setSelectedFilter("todos")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedFilter === "todos"
                    ? "bg-white text-foreground shadow-xs font-black"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Todos ({primaryClinicalServices.length})
              </button>
              <button
                onClick={() => setSelectedFilter("asistencial")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedFilter === "asistencial"
                    ? "bg-white text-foreground shadow-xs font-black"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Línea General (5)
              </button>
              <button
                onClick={() => setSelectedFilter("especializado")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedFilter === "especializado"
                    ? "bg-white text-foreground shadow-xs font-black"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Consultorios Privados (2)
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.code}
                  id={service.code.toLowerCase()}
                  className={`group relative flex flex-col justify-between rounded-3xl border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-premium ${
                    service.isSpecializedOffice
                      ? "border-[#00B9DB]/50 ring-1 ring-[#00B9DB]/20"
                      : "border-border/80"
                  }`}
                >
                  <div>
                    {/* Header badge & icon */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="font-heading text-xs font-black px-2.5 py-1 rounded-lg bg-[#00B9DB]/15 text-[#006D82]">
                          {service.code}
                        </span>
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-muted-foreground">
                          {service.badge}
                        </span>
                      </div>
                      <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center text-foreground group-hover:bg-[#00B9DB]/10 group-hover:text-[#006D82] transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="mt-5 font-heading text-xl font-black text-foreground group-hover:text-[#006D82] transition-colors">
                      {service.name}
                    </h3>

                    {/* Meta info tags */}
                    <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold text-muted-foreground">
                      {service.duration && (
                        <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-0.5">
                          <Clock className="w-3 h-3 text-[#006D82]" />
                          {service.duration}
                        </span>
                      )}
                      {service.locationNote && (
                        <span className="inline-flex items-center gap-1 rounded-md bg-[#00B9DB]/10 text-[#006D82] px-2 py-0.5 font-bold">
                          <Building2 className="w-3 h-3" />
                          {service.locationNote}
                        </span>
                      )}
                    </div>

                    {/* Content blocks */}
                    <div className="mt-5 space-y-3.5 text-xs text-muted-foreground">
                      <div>
                        <span className="block font-bold text-foreground mb-0.5">
                          ¿Para quién está indicado?
                        </span>
                        <p className="leading-relaxed">{service.targetAudience}</p>
                      </div>

                      <div>
                        <span className="block font-bold text-foreground mb-0.5">
                          Enfoque del servicio:
                        </span>
                        <p className="leading-relaxed">{service.clinicalApproach}</p>
                      </div>

                      <div>
                        <span className="block font-bold text-foreground mb-0.5">
                          Qué puedes esperar:
                        </span>
                        <p className="leading-relaxed text-foreground/90">{service.whatToExpect}</p>
                      </div>
                    </div>
                  </div>

                  {/* Card CTA */}
                  <div className="mt-6 pt-5 border-t border-border/60">
                    <Button
                      asChild
                      className="w-full rounded-xl font-bold bg-white text-[#006D82] border border-[#00B9DB]/30 hover:bg-[#00B9DB]/10 hover:border-[#00B9DB] transition-all"
                    >
                      <Link href={service.ctaHref} className="flex items-center justify-center gap-2">
                        {service.ctaText}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECCIÓN 4 — TÉCNICAS Y RECURSOS COMPLEMENTARIOS (F05, F08, F09, F11, F13, F18)
      ========================================================================= */}
      <section className="py-16 lg:py-24 bg-[#F5F9FA] border-y border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#00B9DB]/10 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#006D82]">
              <span className="h-2 w-2 rounded-full bg-[#00B9DB]" />
              Criterio Clínico
            </div>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-black text-foreground">
              Técnicas y recursos complementarios
            </h2>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">
              Herramientas que el profesional de HUMANOS selecciona tras la valoración para
              modular síntomas o facilitar el movimiento. No se contratan de forma aislada sin
              evaluación asistencial previa.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {clinicalTechniques.map((tech) => {
              const Icon = tech.icon
              return (
                <div
                  key={tech.code}
                  className="rounded-3xl border border-border/80 bg-white p-6 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-heading text-xs font-black px-2.5 py-1 rounded-lg bg-slate-100 text-foreground">
                        {tech.code}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-[#00B9DB]/10 text-[#006D82] flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="font-heading text-lg font-black text-foreground">
                      {tech.name}
                    </h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                      {tech.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-border/50 text-[11px] font-semibold text-[#006D82]">
                    {tech.indication}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Clinical notice */}
          <div className="mt-10 rounded-2xl border border-border/70 bg-white p-5 shadow-xs flex items-start gap-4">
            <Info className="h-5 w-5 text-[#006D82] shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <strong>Criterio de aplicación:</strong> En concordancia con las guías clínicas
              internacionales (como NICE para afecciones musculoesqueléticas), las técnicas manuales,
              la punción y las modalidades pasivas se integran como componentes de un plan que
              incluye ejercicio terapéutico y educación, reevaluando periódicamente su utilidad
              funcional.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECCIÓN 5 — INFRAESTRUCTURA CLÍNICA CONFIRMADA
      ========================================================================= */}
      <section className="py-16 lg:py-20 bg-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-border/80 bg-white p-8 sm:p-10 shadow-premium">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#006D82]">
                Sede Norte · Instalaciones Confirmadas
              </span>
              <h2 className="mt-2 font-heading text-2xl sm:text-3xl font-black text-foreground">
                Espacios adaptados para tu atención clínica
              </h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Nuestra sede en Cali norte cuenta con equipamiento específico para garantizar
                privacidad, higiene y confort en cada valoración y tratamiento.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {clinicalInfrastructure.map((infra) => (
                <div
                  key={infra.title}
                  className="rounded-2xl border border-border/70 bg-slate-50/50 p-6 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-heading text-4xl font-black text-[#006D82]">
                      {infra.number}
                    </span>
                    <h3 className="mt-2 font-heading text-base font-black text-foreground">
                      {infra.title}
                    </h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                      {infra.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-border/60 text-xs text-muted-foreground flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#006D82] shrink-0" />
              <span>
                <strong>Aclaración operativa:</strong> El número de estaciones físicas no equivale
                a citas simultáneas abiertas; cada sesión se programa y acompaña con atención
                individualizada.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECCIÓN 7 — CONEXIÓN CON LAS OTRAS UNIDADES (HUMANOS HUB)
      ========================================================================= */}
      <section className="py-16 bg-[#F5F9FA] border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-primary">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Ecosistema Integral
            </div>
            <h2 className="mt-3 font-heading text-3xl font-black text-foreground">
              Cómo se complementa tu proceso en HUMANOS
            </h2>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">
              La rehabilitación clínica es a menudo el punto de partida. Dependiendo de tus metas,
              nuestras demás unidades te permiten continuar avanzando sin perder el criterio
              profesional.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl border border-border/80 bg-white p-7 shadow-xs flex flex-col justify-between hover:shadow-premium transition-shadow">
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-[#0875D1]">
                  Fuerza y Readaptación
                </span>
                <h3 className="mt-2 font-heading text-xl font-black text-foreground">
                  HUMANOS Activa
                </h3>
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                  Cuando la fase aguda de dolor ha cedido, Activa te permite construir fuerza,
                  control motor y potencia muscular con supervisión profesional para retomar el
                  entrenamiento seguro o tu práctica deportiva.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60">
                <Link
                  href="/humanos-activo"
                  className="text-xs font-bold text-[#0875D1] inline-flex items-center gap-1.5 hover:underline"
                >
                  Conocer HUMANOS Activa
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-border/80 bg-white p-7 shadow-xs flex flex-col justify-between hover:shadow-premium transition-shadow">
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-[#009BB5]">
                  Movilidad Asistida
                </span>
                <h3 className="mt-2 font-heading text-xl font-black text-foreground">
                  HUMANOS Stretching Lab
                </h3>
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                  Para quienes requieren pausas guiadas de elongación asistida, recuperación
                  postural y trabajo activo de flexibilidad articular en colchoneta o estación
                  funcional.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60">
                <Link
                  href="/stretching-lab"
                  className="text-xs font-bold text-[#009BB5] inline-flex items-center gap-1.5 hover:underline"
                >
                  Conocer Stretching Lab
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-border/80 bg-white p-7 shadow-xs flex flex-col justify-between hover:shadow-premium transition-shadow">
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-[#7771C7]">
                  Formación y Cursos
                </span>
                <h3 className="mt-2 font-heading text-xl font-black text-foreground">
                  HUMANOS Academia
                </h3>
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                  Talleres prácticos y actualización en valoración clínica, razonamiento biomecánico
                  y técnicas de fisioterapia dirigidos a profesionales y estudiantes del movimiento.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60">
                <Link
                  href="/academia"
                  className="text-xs font-bold text-[#7771C7] inline-flex items-center gap-1.5 hover:underline"
                >
                  Conocer HUMANOS Academia
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          <p className="mt-8 text-xs text-muted-foreground text-center">
            * El paso por otras unidades es una posibilidad opcional según tus metas; no constituye
            un circuito obligatorio para pacientes clínicos.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECCIÓN 8 — PREGUNTAS FRECUENTES (ACORDEÓN OFICIAL)
      ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white border-t border-border/60">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#00B9DB]/10 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#006D82] mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              Preguntas Frecuentes
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-foreground">
              Resolvemos tus dudas sobre fisioterapia
            </h2>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Información clara sobre el proceso de consulta, la selección de técnicas y la
              organización de tu tratamiento.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {clinicalFAQs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="rounded-2xl border border-border/70 bg-slate-50/50 px-6 py-2 shadow-xs transition-shadow data-[state=open]:bg-white data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="text-left font-heading text-base font-bold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* =========================================================================
          SECCIÓN 9 — LLAMADA A LA ACCIÓN FINAL
      ========================================================================= */}
      <section className="py-20 bg-gradient-to-br from-[#006D82] to-[#071B36] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00B9DB]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-white mb-4">
            Atención Clínica en Cali Norte
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-balance leading-tight">
            Solicita tu valoración fisioterapéutica
          </h2>

          <p className="mt-5 text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
            Conoce el estado de tu movimiento, comprende el origen de tus molestias y define un plan
            de recuperación individual con el equipo de HUMANOS.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-2xl px-8 h-14 text-base font-bold bg-white text-[#006D82] hover:bg-white/90 shadow-xl hover:scale-[1.02] transition-transform"
            >
              <Link href="/agendar-cita" className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#006D82]" />
                Agendar valoración
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              className="rounded-2xl px-8 h-14 text-base font-bold bg-[#25D366] text-white hover:bg-[#20BD5A] shadow-xl hover:scale-[1.02] transition-transform"
            >
              <a
                href="https://wa.me/573177995831?text=Hola%2C%20quisiera%20recibir%20orientaci%C3%B3n%20sobre%20la%20valoraci%C3%B3n%20en%20HUMANOS%20Fisioterapia."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                Consultar por WhatsApp
              </a>
            </Button>
          </div>

          <p className="mt-8 text-xs text-white/70">
            Sede Cali Norte · Av. 2D Norte #24N-85 · Cita previa confirmada
          </p>
        </div>
      </section>
    </div>
  )
}

