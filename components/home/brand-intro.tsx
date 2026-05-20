import { Activity, ShieldCheck, HeartHandshake, Award } from "lucide-react"

export function BrandIntro() {
  return (
    <section className="relative overflow-hidden bg-transparent py-16 lg:py-24 border-y border-border/50">
      {/* Decorative patterns */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#1667B7]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text and Philosophy Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#1667B7]/10 text-[#1667B7] text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4 text-[#1667B7]" />
              ¿Por qué elegir Humanos?
            </div>
            
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-4.5xl font-extrabold text-foreground tracking-tight leading-[1.1]">
              Fisioterapia avanzada diseñada para devolverte el <span className="text-[#1667B7] text-glow">movimiento y la libertad</span>
            </h2>
            
            <p className="text-muted-foreground font-medium text-base sm:text-lg leading-relaxed">
              En Humanos Fisioterapia y Rehabilitación Deportiva, entendemos que tu cuerpo es único. No creemos en tratamientos genéricos ni en atajos rápidos que solo ocultan los síntomas. Nuestro enfoque se basa en un diagnóstico biomecánico de alta precisión, la aplicación de técnicas basadas en evidencia científica y una profunda empatía clínica para guiarte en cada paso de tu recuperación en Cali.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {/* Pillar 1 */}
              <div className="flex gap-4">
                <div className="flex-none w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shadow-sm">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground text-base">Raíz del Problema</h4>
                  <p className="text-sm text-muted-foreground mt-1 font-medium leading-normal">
                    Evaluamos tu postura, movilidad articular y patrones de movimiento para corregir la causa real, no solo el dolor momentáneo.
                  </p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="flex gap-4">
                <div className="flex-none w-12 h-12 rounded-xl bg-[#1667B7]/10 flex items-center justify-center text-[#1667B7] shadow-sm">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground text-base">Rendimiento Profesional</h4>
                  <p className="text-sm text-muted-foreground mt-1 font-medium leading-normal">
                    Aplicamos la misma rigurosidad y tecnología de la rehabilitación deportiva de élite a todos nuestros pacientes en consulta.
                  </p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="flex gap-4 sm:col-span-2">
                <div className="flex-none w-12 h-12 rounded-xl bg-[#E63946]/10 flex items-center justify-center text-[#E63946] shadow-sm">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground text-base">Acompañamiento Humano</h4>
                  <p className="text-sm text-muted-foreground mt-1 font-medium leading-normal">
                    Sentirás la diferencia desde la primera sesión con un ambiente cálido, explicaciones detalladas y planes personalizados de autocuidado.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Grid Column */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            
            {/* Stat Card 1 */}
            <div className="bg-[#F5F8FB] border border-border/40 p-6 rounded-3xl shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
              <div>
                <span className="block font-heading text-4xl sm:text-5xl font-black text-primary tracking-tight group-hover:scale-105 transition-transform duration-300">
                  98%
                </span>
                <span className="block text-sm font-extrabold text-foreground mt-2 leading-snug">
                  Éxito clínico
                </span>
              </div>
              <p className="text-xs text-muted-foreground font-semibold mt-2 leading-relaxed">
                De pacientes reportan alivio completo del dolor y recuperación total.
              </p>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-[#F5F8FB] border border-border/40 p-6 rounded-3xl shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
              <div>
                <span className="block font-heading text-4xl sm:text-5xl font-black text-[#1667B7] tracking-tight group-hover:scale-105 transition-transform duration-300">
                  +2k
                </span>
                <span className="block text-sm font-extrabold text-foreground mt-2 leading-snug">
                  Pacientes
                </span>
              </div>
              <p className="text-xs text-muted-foreground font-semibold mt-2 leading-relaxed">
                Han confiado su salud y rendimiento en nuestras manos.
              </p>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-[#F5F8FB] border border-border/40 p-6 rounded-3xl shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
              <div>
                <span className="block font-heading text-4xl sm:text-5xl font-black text-[#E63946] tracking-tight group-hover:scale-105 transition-transform duration-300">
                  5+
                </span>
                <span className="block text-sm font-extrabold text-foreground mt-2 leading-snug">
                  Años
                </span>
              </div>
              <p className="text-xs text-muted-foreground font-semibold mt-2 leading-relaxed">
                De trayectoria ofreciendo fisioterapia de alta calidad en Cali.
              </p>
            </div>

            {/* Stat Card 4 */}
            <div className="bg-[#F5F8FB] border border-border/40 p-6 rounded-3xl shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
              <div>
                <span className="block font-heading text-4xl sm:text-5xl font-black text-foreground tracking-tight group-hover:scale-105 transition-transform duration-300">
                  1:1
                </span>
                <span className="block text-sm font-extrabold text-foreground mt-2 leading-snug">
                  Tratamiento
                </span>
              </div>
              <p className="text-xs text-muted-foreground font-semibold mt-2 leading-relaxed">
                Atención exclusiva con el especialista durante toda tu sesión.
              </p>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  )
}
