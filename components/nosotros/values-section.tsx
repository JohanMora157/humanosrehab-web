import { 
  Heart, 
  UserCheck, 
  MessageSquare, 
  TrendingUp, 
  Award, 
  ShieldCheck 
} from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Atención Cercana y Humana",
    description: "Escuchamos activamente tus temores, objetivos y necesidades para crear un vínculo terapéutico real basado en la empatía clínica.",
    color: "text-[#E63946] bg-[#E63946]/10",
  },
  {
    icon: UserCheck,
    title: "Tratamientos Personalizados",
    description: "Diseñamos un plan de rehabilitación biomecánico adaptado exclusivamente a tu estructura corporal, sin rutinas prefabricadas.",
    color: "text-primary bg-primary/10",
  },
  {
    icon: MessageSquare,
    title: "Explicaciones Claras",
    description: "Te educamos sobre tu diagnóstico y el porqué de cada técnica, dándote el control y entendimiento absoluto de tu cuerpo.",
    color: "text-[#1667B7] bg-[#1667B7]/10",
  },
  {
    icon: TrendingUp,
    title: "Recuperación Progresiva",
    description: "Evaluamos objetivamente tus rangos y fuerza en cada sesión, ajustando las técnicas terapéuticas para un avance sostenido.",
    color: "text-amber-500 bg-amber-500/10",
  },
  {
    icon: Award,
    title: "Profesionalismo Científico",
    description: "Aplicamos únicamente técnicas y tecnologías de rehabilitación respaldadas por evidencia clínica internacional actualizada.",
    color: "text-[#072B4F] bg-[#072B4F]/10",
  },
  {
    icon: ShieldCheck,
    title: "Confianza y Ética Absoluta",
    description: "Actuamos con transparencia e integridad profesional, priorizando tu bienestar y seguridad en cada etapa de tu proceso.",
    color: "text-emerald-600 bg-emerald-500/10",
  },
]

export function ValuesSection() {
  return (
    <section className="py-20 lg:py-24 bg-[#F5F8FB] bg-grid-pattern border-y border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1667B7]/10 text-[#1667B7] text-xs font-bold uppercase tracking-wider mb-4">
            Nuestros Pilares
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-4.5xl font-black text-foreground tracking-tight leading-none">
            Valores que guían <span className="text-[#1667B7] text-glow">nuestro cuidado</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground font-semibold max-w-2xl mx-auto">
            El bienestar físico requiere tanto rigor técnico como calidez humana. Nos regimos por principios diseñados para ofrecerte excelencia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value) => {
            const IconComponent = value.icon
            return (
              <div
                key={value.title}
                className="bg-white rounded-3xl p-6 lg:p-8 border border-border/50 hover:shadow-premium hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${value.color} mb-6 transition-transform duration-300 group-hover:scale-105`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl font-extrabold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
