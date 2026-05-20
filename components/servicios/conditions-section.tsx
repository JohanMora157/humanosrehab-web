import { Check } from "lucide-react"

const conditions = [
  "Cervicalgia y Dolor de Cuello",
  "Lumbalgia y Hernias Discales",
  "Tendinopatías y Tendinitis",
  "Esguinces y Distensiones Ligamentarias",
  "Desgarros y Roturas Musculares",
  "Capsulitis Adhesiva (Hombro Congelado)",
  "Lesiones Meniscales y de Rodilla",
  "Escoliosis y Desbalances Posturales",
  "Recuperación y Rehabilitación Post-quirúrgica",
  "Sobrecargas y Fatiga Deportiva",
  "Espasmos, Nudos y Contracturas Musculares"
]

export function ConditionsSection() {
  return (
    <section className="py-20 lg:py-24 bg-[#F5F8FB] bg-grid-pattern border-t border-border/50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative">
        {/* Glow overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center mb-12 relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-primary/10 text-primary text-xs font-extrabold uppercase tracking-wider mb-4 border border-primary/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E63946] animate-pulse" />
            Especialidades Médicas
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-4.5xl font-black text-foreground tracking-tight leading-none text-balance">
            Dolencias que <span className="text-[#1667B7] text-glow">tratamos con éxito</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground font-semibold max-w-2xl mx-auto">
            Nuestros planes clínicos están diseñados para abordar con precisión científica y alta empatía una amplia variedad de condiciones musculoesqueléticas.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3.5 max-w-4xl mx-auto relative z-10">
          {conditions.map((condition) => (
            <div
              key={condition}
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-white border border-border/60 text-foreground text-sm font-extrabold shadow-premium hover:border-primary/30 hover:shadow-premium-hover hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-default group"
            >
              <div className="w-5 h-5 rounded-lg bg-primary/10 flex items-center justify-center text-primary transition-colors group-hover:bg-[#E63946]/10 group-hover:text-[#E63946]">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span className="group-hover:text-primary transition-colors">{condition}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
