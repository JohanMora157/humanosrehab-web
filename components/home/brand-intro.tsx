import {
  Activity,
  Award,
  CheckCircle2,
  HeartHandshake,
  Layers,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

const institutionalPrinciples = [
  {
    icon: Activity,
    title: "Explicación comprensible",
    description:
      "Describimos tu condición y el sentido del plan en un lenguaje claro que puedas entender y utilizar activamente.",
  },
  {
    icon: HeartHandshake,
    title: "Participación activa",
    description:
      "Preguntamos qué necesitas volver a hacer y acordamos contigo metas que tengan sentido en tu vida diaria o deportiva.",
  },
  {
    icon: ShieldCheck,
    title: "Criterio clínico y biomecánico",
    description:
      "Decisiones fundamentadas en la valoración individual, el análisis del movimiento y la evidencia científica.",
  },
  {
    icon: Sparkles,
    title: "Recursos de autogestión",
    description:
      "Te enseñamos estrategias prácticas para que lo aprendido en la sede también te sirva en tu casa, trabajo o entrenamiento.",
  },
]

// Capacidades e infraestructura física confirmadas por dirección (Manual Maestro Parte I §3 y Parte II §4)
const confirmedCapabilities = [
  {
    badge: "HUMANOS Fisioterapia",
    metric: "5",
    label: "Estaciones clínicas",
    description: "Estaciones con camilla para valoración, terapia manual y rehabilitación funcional.",
    color: "#00B9DB",
  },
  {
    badge: "Servicios Especializados",
    metric: "2",
    label: "Consultorios independientes",
    description: "Espacios privados dedicados exclusivamente a Piso Pélvico y Drenaje Linfático.",
    color: "#0875D1",
  },
  {
    badge: "HUMANOS Activa",
    metric: "1",
    label: "Área de acondicionamiento",
    description: "Espacio independiente equipado con multifuerza, rack y estaciones de fuerza.",
    color: "#0875D1",
  },
  {
    badge: "HUMANOS Stretching Lab",
    metric: "3+",
    label: "Estaciones y zona de piso",
    description: "Estaciones funcionales y área con colchoneta para movilidad y elongación asistida.",
    color: "#009BB5",
  },
]

export function BrandIntro() {
  return (
    <section className="relative overflow-hidden bg-transparent py-16 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(110deg, rgba(7, 27, 54, 0.035), transparent 55%, rgba(8, 117, 209, 0.035))",
          maskImage: "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text and Philosophy Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4 text-primary" />
              Filosofía Institucional
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-4.5xl font-extrabold text-foreground tracking-tight leading-[1.1]">
              Un acompañamiento basado en{" "}
              <span className="text-[#1667B7] text-glow">comprender tu movimiento</span>
            </h2>

            <p className="text-muted-foreground font-medium text-base sm:text-lg leading-relaxed">
              HUMANOS nació de una decisión clínica: explicar a cada persona qué sucede en su
              cuerpo, cómo se relaciona con su movimiento y qué papel activo puede asumir en su
              proceso. No creemos en recetas genéricas; ordenamos la observación clínica,
              definimos contigo metas que importen en tu día a día y coordinamos nuestras unidades
              para dar continuidad a tu evolución.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {institutionalPrinciples.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-none w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-foreground text-base">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Confirmed Infrastructure and Capabilities Grid Column */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {confirmedCapabilities.map((cap) => (
              <div
                key={cap.label}
                className="bg-[#F5F8FB] border border-border/50 p-6 rounded-3xl shadow-sm hover:shadow-premium transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                style={{ borderTop: `4px solid ${cap.color}` }}
              >
                <div>
                  <span className="block text-[11px] font-extrabold text-muted-foreground uppercase tracking-wider mb-2">
                    {cap.badge}
                  </span>
                  <span
                    className="block font-heading text-4xl sm:text-5xl font-black tracking-tight group-hover:scale-105 transition-transform duration-300"
                    style={{ color: cap.color }}
                  >
                    {cap.metric}
                  </span>
                  <span className="block text-sm font-extrabold text-foreground mt-2 leading-snug">
                    {cap.label}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground font-medium mt-3 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
