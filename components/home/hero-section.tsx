import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, Calendar, Activity, CheckCircle, Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-transparent pt-4 pb-12 lg:pt-8 lg:pb-20">
      {/* Biomechanical active sensor nodes (postural analysis overlay) */}
      <div className="absolute top-[28%] left-[6%] pointer-events-none select-none hidden lg:block animate-float">
        <span className="relative flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E63946] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#E63946]"></span>
        </span>
      </div>
      <div className="absolute bottom-[20%] left-[46%] pointer-events-none select-none hidden lg:block animate-float delay-200">
        <span className="relative flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1667B7] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#1667B7]"></span>
        </span>
      </div>
      <div className="absolute top-[48%] left-[54%] pointer-events-none select-none hidden lg:block animate-float delay-100">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E63946]/80 opacity-70"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#E63946]"></span>
        </span>
      </div>

      {/* Decorative colored glow overlays */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1667B7]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Content Column (Lg: spans 7 columns) */}
          <div className="relative z-10 lg:col-span-7 animate-fade-in-up">
            {/* Blueprint Glassmorphic Panel (avoids emptiness, creates dynamic editorial structure) */}
            <div className="bg-white/50 backdrop-blur-md border border-white/70 shadow-premium p-6 sm:p-8 lg:p-10 rounded-[32px] hover:shadow-premium-hover transition-all duration-500 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-extrabold uppercase tracking-wider mb-6 shadow-xs border border-primary/5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E63946] animate-pulse" />
                Clínica de Especialidades en Cali
              </div>
              
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[52px] font-black tracking-tight text-foreground leading-[1.08] text-balance">
                Fisioterapia y <span className="text-[#1667B7] text-glow">rehabilitación deportiva</span> en Cali
              </h1>
              
              <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed font-semibold max-w-xl mx-auto lg:mx-0 opacity-90 delay-100">
                Recupera tu movilidad, alivia el dolor y vuelve a tus actividades con acompañamiento profesional.
              </p>
   
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start delay-200">
                <Button asChild size="lg" className="rounded-2xl h-14 text-base font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
                  <Link href="/agendar-cita">Agendar cita</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-2xl h-14 text-base font-bold hover:bg-primary/5 hover:scale-[1.02] transition-transform">
                  <Link href="/servicios">Ver servicios</Link>
                </Button>
              </div>
   
              {/* Accent trust phrase card */}
              <div className="mt-10 p-5 rounded-2xl bg-white border-l-4 border-[#E63946] shadow-premium max-w-xl mx-auto lg:mx-0 transition-all hover:scale-[1.01] duration-300">
                <p className="text-sm font-bold text-foreground text-left italic">
                  “Tu recuperación empieza con una valoración profesional.”
                </p>
              </div>

              {/* Floating Trust Metrics Grid */}
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl mx-auto lg:mx-0">
                <div className="bg-white rounded-2xl p-4 border border-border/60 shadow-premium flex flex-col items-center justify-center">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mb-2">
                    <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                  </div>
                  <p className="font-heading font-black text-foreground text-sm">5.0 en Google</p>
                  <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mt-0.5">Calificación</p>
                </div>
                <div className="bg-white rounded-2xl p-4 border border-border/60 shadow-premium flex flex-col items-center justify-center">
                  <div className="w-10 h-10 rounded-xl bg-[#1667B7]/10 flex items-center justify-center mb-2">
                    <CheckCircle className="w-5 h-5 text-[#1667B7]" />
                  </div>
                  <p className="font-heading font-black text-foreground text-sm">+171 opiniones</p>
                  <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mt-0.5">Paciente real</p>
                </div>
                <div className="bg-white rounded-2xl p-4 border border-border/60 shadow-premium flex flex-col items-center justify-center">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-heading font-black text-foreground text-sm">Cita previa</p>
                  <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mt-0.5">Atención</p>
                </div>
                <div className="bg-white rounded-2xl p-4 border border-border/60 shadow-premium flex flex-col items-center justify-center">
                  <div className="w-10 h-10 rounded-xl bg-[#E63946]/10 flex items-center justify-center mb-2">
                    <Activity className="w-5 h-5 text-[#E63946]" />
                  </div>
                  <p className="font-heading font-black text-foreground text-sm">Esp. Deportiva</p>
                  <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mt-0.5">Enfoque</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Column (Lg: spans 5 columns) */}
          <div className="relative lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl shadow-primary/15 border-4 border-white">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3nlPW1GIOxWhFaeoEwkrMAtOvdExfQ.png"
                alt="Prof. Julian Mauricio Saenz Barahona resolviendo dolencias en consulta"
                fill
                className="object-cover object-top hover:scale-102 transition-transform duration-500"
                sizes="(max-w-1024px) 100vw, 420px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
            </div>

            {/* Bottom floating micro card */}
            <div className="absolute bottom-4 right-4 sm:-bottom-4 sm:right-8 bg-white/90 backdrop-blur-md rounded-2xl shadow-premium p-4 border border-primary/10 flex items-center gap-3 animate-float">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Shield className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="font-bold text-foreground text-xs leading-none">Prof. Julian Saenz</p>
                <p className="text-[10px] text-muted-foreground font-semibold mt-1">Fisioterapeuta Líder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
