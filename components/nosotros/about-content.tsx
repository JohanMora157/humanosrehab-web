import Image from "next/image"
import { Award, GraduationCap, Heart, Users, CheckCircle } from "lucide-react"

const specialties = [
  "Terapia física y clínica",
  "Terapia manual ortopédica",
  "Actividad física y salud deportiva",
  "Acondicionamiento físico terapéutico",
  "Rehabilitación deportiva de alto rendimiento",
  "Manejo avanzado del dolor osteomuscular",
]

export function AboutContent() {
  return (
    <section className="py-16 lg:py-24 bg-transparent relative">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Asymmetric Profile Image Frame (spans 5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[380px] lg:max-w-full aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl shadow-[#072B4F]/15 border-4 border-white">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3nlPW1GIOxWhFaeoEwkrMAtOvdExfQ.png"
                alt="Prof. Julian Mauricio Saenz Barahona resolviendo dolencias en consulta"
                fill
                className="object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                sizes="(max-w-1024px) 100vw, 420px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-transparent" />
            </div>

            {/* Floating professional badge */}
            <div className="absolute bottom-4 right-4 sm:-bottom-4 sm:-right-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-premium p-4 sm:p-5 border border-border/60 flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="font-heading font-black text-foreground text-sm leading-none">Fisioterapeuta Líder</p>
                <p className="text-[10px] text-muted-foreground font-extrabold mt-1 uppercase tracking-wide">Espec. en Rehabilitación</p>
              </div>
            </div>
          </div>

          {/* Detailed Biography and Specialties (spans 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#E63946]/10 text-[#E63946] text-xs font-bold uppercase tracking-wider">
              <Heart className="w-4 h-4 text-[#E63946]" />
              Enfoque Clínico Humano
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-4.5xl font-black text-foreground tracking-tight leading-none">
              Prof. Julian Mauricio Saenz Barahona
            </h2>

            <p className="text-lg text-muted-foreground font-semibold leading-relaxed">
              Con años de trayectoria consolidando la fisioterapia basada en evidencia científica en Cali, el Prof. Julian Mauricio lidera Humanos Fisioterapia con una visión transformadora del cuidado de la salud física.
            </p>

            <div className="space-y-4 text-muted-foreground font-medium text-base leading-relaxed">
              <p>
                Creemos que recuperar el movimiento no es solo realizar ejercicios genéricos; es recuperar la calidad de vida, la independencia y la confianza en tu propio cuerpo. Por ello, combinamos técnicas avanzadas de terapia manual ortopédica, liberación miofascial e instrumentada, y ejercicio terapéutico de alto rendimiento.
              </p>
              <p>
                En Humanos Fisioterapia te garantizamos atención individual y exclusiva durante toda tu consulta. Sin atajos, sin interrupciones y con un especialista completamente enfocado en tu diagnóstico biomecánico y recuperación progresiva.
              </p>
            </div>

            <div className="pt-4 border-t border-border/50">
              <h3 className="font-heading font-extrabold text-foreground text-lg mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Especialidades Clínicas
              </h3>
              
              <div className="flex flex-wrap gap-2.5">
                {specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#F5F8FB] border border-border/80 text-xs font-bold text-foreground hover:bg-primary/5 hover:border-primary/20 transition-all duration-200 cursor-default"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-[#1667B7] flex-none" />
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Supporting Trust & Experience Cards */}
        <div className="mt-20 border-t border-border/50 pt-16">
          <div className="text-center mb-12">
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-foreground tracking-tight">
              Respaldado por un <span className="text-[#1667B7] text-glow">compromiso clínico</span> real
            </h3>
            <p className="text-sm text-muted-foreground font-semibold mt-2 max-w-xl mx-auto">
              Nuestra filosofía combina el rigor científico con el trato cercano, asegurando resultados duraderos y seguros.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#F5F8FB] rounded-2xl p-6 border border-border/60 shadow-xs hover:shadow-premium hover:-translate-y-1 transition-all duration-300 group animate-fade-in-up delay-100">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 transition-transform group-hover:scale-105">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-foreground text-base mb-2">Formación de Vanguardia</h4>
              <p className="text-xs text-muted-foreground font-semibold leading-relaxed">
                Titulado y certificado en las metodologías más avanzadas de punción seca, terapia manual e instrumentada y ejercicio terapéutico controlado.
              </p>
            </div>

            <div className="bg-[#F5F8FB] rounded-2xl p-6 border border-border/60 shadow-xs hover:shadow-premium hover:-translate-y-1 transition-all duration-300 group animate-fade-in-up delay-200">
              <div className="w-10 h-10 rounded-xl bg-[#E63946]/10 flex items-center justify-center text-[#E63946] mb-4 transition-transform group-hover:scale-105">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-foreground text-base mb-2">Atención Exclusiva 1:1</h4>
              <p className="text-xs text-muted-foreground font-semibold leading-relaxed">
                Toda tu sesión clínica se realiza a solas con el fisioterapeuta líder. Sin asistentes, sin esperas y sin atender múltiples pacientes a la vez.
              </p>
            </div>

            <div className="bg-[#F5F8FB] rounded-2xl p-6 border border-border/60 shadow-xs hover:shadow-premium hover:-translate-y-1 transition-all duration-300 group animate-fade-in-up delay-300">
              <div className="w-10 h-10 rounded-xl bg-[#1667B7]/10 flex items-center justify-center text-[#1667B7] mb-4 transition-transform group-hover:scale-105">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-foreground text-base mb-2">Rehabilitación Deportiva Activa</h4>
              <p className="text-xs text-muted-foreground font-semibold leading-relaxed">
                Adaptamos las técnicas del deporte de alto rendimiento para acelerar tu recuperación diaria y blindar tus músculos contra recaídas.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
