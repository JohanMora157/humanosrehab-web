import Image from "next/image"
import Link from "next/link"
import {
  Activity,
  ArrowRight,
  Award,
  Building2,
  CheckCircle,
  GraduationCap,
  Heart,
  HeartHandshake,
  Layers,
  MapPin,
  Shield,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const historicalPrinciples = [
  {
    icon: Stethoscope,
    title: "Explicación comprensible",
    description:
      "Describimos tu condición y el objetivo de cada etapa en un lenguaje claro y transparente que puedas entender y utilizar activamente.",
  },
  {
    icon: HeartHandshake,
    title: "Participación activa",
    description:
      "Preguntamos qué necesitas volver a hacer y acordamos metas terapéuticas que tengan un sentido real en tu vida cotidiana, laboral o deportiva.",
  },
  {
    icon: Activity,
    title: "Criterio clínico y biomecánico",
    description:
      "Fundamentamos cada decisión en el examen funcional, el análisis del movimiento y la respuesta individual de tus tejidos, sin recetas universales.",
  },
  {
    icon: Sparkles,
    title: "Recursos de autogestión",
    description:
      "Te enseñamos pautas prácticas para que lo aprendido en consulta también te sirva para cuidarte en casa, en el trabajo y al entrenar por tu cuenta.",
  },
]

const unitEcosystem = [
  {
    name: "HUMANOS Fisioterapia",
    description: "Atención clínica, rehabilitación musculoesquelética, piso pélvico y drenaje linfático.",
    href: "/humanos-clinica",
    color: "text-[#006D82] bg-[#00B9DB]/10 border-[#00B9DB]/30",
  },
  {
    name: "HUMANOS Activa",
    description: "Fuerza, control motor, acondicionamiento y readaptación al ejercicio y deporte.",
    href: "/humanos-activo",
    color: "text-[#0862AE] bg-[#0875D1]/10 border-[#0875D1]/30",
  },
  {
    name: "HUMANOS Stretching Lab",
    description: "Elongación asistida y movilidad corporal guiada para amplitud articular y postura.",
    href: "/stretching-lab",
    color: "text-[#00687A] bg-[#009BB5]/10 border-[#009BB5]/30",
  },
  {
    name: "HUMANOS Academia",
    description: "Formación continua y talleres prácticos en razonamiento biomecánico para profesionales.",
    href: "/academia",
    color: "text-[#524CA8] bg-[#7771C7]/10 border-[#7771C7]/30",
  },
]

export function AboutContent() {
  return (
    <section className="py-16 lg:py-24 bg-transparent relative">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-28">
        {/* =========================================================================
            BLOQUE 1: ORIGEN E HISTORIA (Parte I §1.1)
        ========================================================================= */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Columna Foto: Prof. Julian Saenz */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[380px] lg:max-w-full aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl shadow-[#072B4F]/15 border-4 border-white">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3nlPW1GIOxWhFaeoEwkrMAtOvdExfQ.png"
                alt="Dirección asistencial y equipo profesional de HUMANOS en Cali"
                fill
                className="object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 420px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-transparent" />
            </div>

            {/* Badge institucional */}
            <div className="absolute bottom-4 right-4 sm:-bottom-4 sm:-right-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-premium p-4 sm:p-5 border border-border/60 flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="font-heading font-black text-foreground text-sm leading-none">
                  Dirección Asistencial
                </p>
                <p className="text-[10px] text-muted-foreground font-extrabold mt-1 uppercase tracking-wide">
                  Fisioterapia y Movimiento
                </p>
              </div>
            </div>
          </div>

          {/* Columna Texto: Cómo nació HUMANOS */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-primary/10 text-primary text-xs font-black uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5" />
              Nuestra Historia
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-4.5xl font-black text-foreground tracking-tight leading-tight">
              Cómo nació <span className="text-primary text-glow">HUMANOS</span>
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground font-semibold leading-relaxed">
              HUMANOS nació de una convicción clínica: recuperar el movimiento empieza por explicar
              a cada persona qué sucede en su cuerpo y qué papel activo puede asumir en su propio
              proceso.
            </p>

            <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
              <p>
                La iniciativa surgió para integrar diversas áreas de la fisioterapia y ofrecer una
                atención donde el paciente nunca sea un espectador pasivo. Desde el inicio, nuestro
                compromiso fue que cada persona entendiera su condición, las estructuras corporales
                relacionadas y, cuando resultara posible identificarlo, el mecanismo de la lesión.
              </p>
              <p>
                Posteriormente, la osteopatía se incorporó como guía metodológica de valoración y
                tratamiento. Su aporte consistió en ordenar la observación clínica, conectar el
                motivo de consulta con el movimiento funcional y orientar decisiones según los
                hallazgos de cada evaluación, promoviendo herramientas prácticas de autogestión.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-secondary/40 border-l-4 border-primary">
              <p className="text-xs sm:text-sm font-bold text-foreground italic">
                “El nombre HUMANOS sitúa a la persona en el centro: lo que observamos en una
                valoración se conversa en relación con lo que necesitas volver a hacer.”
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================================
            BLOQUE 2: LOS 4 PRINCIPIOS DE NUESTRA CULTURA ASISTENCIAL (Parte I §2.1)
        ========================================================================= */}
        <div className="rounded-[32px] border border-border/80 bg-white p-8 sm:p-12 shadow-premium">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-black uppercase tracking-wider text-primary">
              Cultura Asistencial
            </span>
            <h3 className="mt-2 font-heading text-2xl sm:text-3xl font-black text-foreground">
              Una atención que se explica y se acompaña
            </h3>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Estos cuatro principios, presentes a lo largo de nuestra trayectoria, definen cómo nos
              relacionamos contigo en cada consulta:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {historicalPrinciples.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="flex gap-4 p-5 rounded-2xl bg-[#F5F8FB] border border-border/60">
                  <div className="flex-none w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-black text-foreground text-base">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* =========================================================================
            BLOQUE 3: DEL CENTRO CLÍNICO AL ECOSISTEMA (Parte I §1.2)
        ========================================================================= */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-primary/10 text-primary text-xs font-black uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              Evolución Institucional
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-foreground leading-tight">
              Del centro clínico al ecosistema de cuatro unidades
            </h3>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Con el paso del tiempo, las necesidades de nuestros pacientes mostraron que la salud
              física no termina al apagar el dolor agudo. Para sostener el bienestar a largo plazo,
              se requería un puente claro entre la rehabilitación clínica, la fuerza muscular, la
              movilidad postural y la formación profesional.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Así evolucionamos hacia la marca paraguas <strong>HUMANOS</strong>, consolidando
              cuatro unidades con propósitos específicos en nuestra sede del norte de Cali:
            </p>

            <div className="pt-2">
              <Button asChild size="lg" className="rounded-xl font-bold">
                <Link href="/ecosistema" className="flex items-center gap-2">
                  Explorar las cuatro unidades
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            {unitEcosystem.map((unit) => (
              <div
                key={unit.name}
                className="p-5 rounded-2xl border bg-white shadow-xs hover:shadow-premium transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <span className={`inline-block text-[11px] font-black px-2.5 py-0.5 rounded-md border mb-1.5 ${unit.color}`}>
                    {unit.name}
                  </span>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {unit.description}
                  </p>
                </div>
                <Link
                  href={unit.href}
                  className="text-xs font-bold text-primary flex items-center gap-1 hover:underline shrink-0"
                >
                  Conocer
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
