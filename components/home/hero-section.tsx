import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Activity, MapPin, Shield, ArrowRight, HeartHandshake } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-transparent pt-4 pb-12 lg:pt-8 lg:pb-20">
      {/* Dynamic kinetic nodes */}
      <div className="absolute top-[28%] left-[6%] pointer-events-none select-none hidden lg:block animate-float">
        <span className="relative flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00B9DB] opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#00B9DB]" />
        </span>
      </div>
      <div className="absolute bottom-[20%] left-[46%] pointer-events-none select-none hidden lg:block animate-float delay-200">
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
          maskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Content Column */}
          <div className="relative z-10 lg:col-span-7 animate-fade-in-up">
            <div className="bg-white/60 backdrop-blur-md border border-white/80 shadow-premium p-6 sm:p-8 lg:p-10 rounded-[32px] text-center lg:text-left transition-all duration-500">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-extrabold uppercase tracking-wider mb-6 shadow-xs border border-primary/5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0875D1] animate-pulse" />
                Ecosistema Integral de Movimiento · Cali
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[52px] font-black tracking-tight text-foreground leading-[1.08] text-balance">
                Fisioterapia, readaptación y movimiento en{" "}
                <span className="text-[#1667B7] text-glow">Cali</span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed font-semibold max-w-xl mx-auto lg:mx-0 opacity-90">
                En <strong>HUMANOS</strong> te explicamos qué vamos a trabajar, para qué y cómo
                puedes participar. Reunimos atención clínica, readaptación física, movilidad
                asistida y formación en el norte de Cali.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="rounded-2xl h-14 px-8 text-base font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform"
                >
                  <Link href="/agendar-cita">
                    Agendar u orientarme
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-2xl h-14 px-8 text-base font-bold hover:bg-primary/5 hover:scale-[1.02] transition-transform border-border/80"
                >
                  <a href="#unidades">Explorar las 4 unidades</a>
                </Button>
              </div>

              {/* Accent trust phrase card */}
              <div className="mt-9 p-5 rounded-2xl bg-white border-l-4 border-[#0875D1] shadow-premium max-w-xl mx-auto lg:mx-0 transition-all hover:scale-[1.01] duration-300">
                <p className="text-sm font-bold text-foreground text-left italic">
                  “Te explicamos lo que observamos y acordamos contigo qué trabajar en cada etapa.”
                </p>
              </div>

              {/* Floating capabilities & trust indicators */}
              <div className="mt-9 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl mx-auto lg:mx-0">
                <div className="bg-white rounded-2xl p-4 border border-border/60 shadow-premium flex flex-col items-center justify-center text-center">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                    <Activity className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-heading font-black text-foreground text-sm">4 Unidades</p>
                  <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mt-0.5">
                    Ecosistema
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-4 border border-border/60 shadow-premium flex flex-col items-center justify-center text-center">
                  <div className="w-10 h-10 rounded-xl bg-[#0875D1]/10 flex items-center justify-center mb-2">
                    <MapPin className="w-5 h-5 text-[#0875D1]" />
                  </div>
                  <p className="font-heading font-black text-foreground text-sm">Cali Norte</p>
                  <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mt-0.5">
                    Av. 2D Norte
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-4 border border-border/60 shadow-premium flex flex-col items-center justify-center text-center">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-2">
                    <Calendar className="w-5 h-5 text-emerald-600" />
                  </div>
                  <p className="font-heading font-black text-foreground text-sm">Cita previa</p>
                  <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mt-0.5">
                    Atención guiada
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-4 border border-border/60 shadow-premium flex flex-col items-center justify-center text-center">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                    <HeartHandshake className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-heading font-black text-foreground text-sm">Enfoque humano</p>
                  <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mt-0.5">
                    Proceso guiado
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl shadow-primary/15 border-4 border-white">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3nlPW1GIOxWhFaeoEwkrMAtOvdExfQ.png"
                alt="Dirección asistencial y equipo profesional de HUMANOS en Cali"
                fill
                className="object-cover object-top hover:scale-102 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 420px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
            </div>

            {/* Bottom floating micro card */}
            <div className="absolute bottom-4 right-4 sm:-bottom-4 sm:right-8 bg-white/95 backdrop-blur-md rounded-2xl shadow-premium p-4 border border-primary/10 flex items-center gap-3 animate-float">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Shield className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="font-bold text-foreground text-xs leading-none">Dirección Clínica</p>
                <p className="text-[10px] text-muted-foreground font-semibold mt-1">
                  Fisioterapia y Movimiento
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
