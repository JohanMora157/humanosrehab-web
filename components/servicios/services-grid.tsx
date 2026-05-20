import Image from "next/image"
import { 
  Stethoscope, 
  Activity, 
  RotateCcw, 
  Dumbbell, 
  Sparkles, 
  HeartPulse, 
  Zap, 
  Timer, 
  Heart, 
  TrendingUp, 
  Laptop, 
  ShieldAlert 
} from "lucide-react"

const categories = [
  {
    id: "rehabilitacion",
    title: "Rehabilitación y Alivio del Dolor",
    description: "Tratamientos clínicos enfocados en recuperar tu movilidad, eliminar dolores agudos o crónicos y acelerar el proceso post-quirúrgico o de lesiones.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dsYNDGnE85fZdm7sTVQBW43BhvXFS2.png",
    imageAlt: "Paciente realizando ejercicios de rehabilitación de rodilla guiado por terapeuta",
    alignRight: true,
    services: [
      {
        title: "Fisioterapia general",
        description: "Evaluación y tratamiento integral de patologías musculoesqueléticas con planes personalizados.",
        icon: Stethoscope,
        color: "text-primary bg-primary/10",
      },
      {
        title: "Dolor de cuello y espalda",
        description: "Tratamiento de cervicalgias, lumbalgias y hernias discales con técnicas de descompresión.",
        icon: ShieldAlert,
        color: "text-[#E63946] bg-[#E63946]/10",
      },
      {
        title: "Recuperación post lesión",
        description: "Rehabilitación integral para fracturas, esguinces y cirugías para recuperar la movilidad plena.",
        icon: RotateCcw,
        color: "text-[#1667B7] bg-[#1667B7]/10",
      },
      {
        title: "Lesiones deportivas",
        description: "Tratamiento y prevención de esguinces, desgarros y tendinitis específicos de atletas.",
        icon: Activity,
        color: "text-amber-500 bg-amber-500/10",
      },
    ]
  },
  {
    id: "terapias-manuales",
    title: "Terapias Manuales y Recuperación",
    description: "Técnicas especializadas basadas en contacto manual preciso para liberar tensiones, desinflamar tejidos y devolver la flexibilidad a tu musculatura.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uQhlmMcbHYP9AMQ8TbcGpEUG0A71Ud.png",
    imageAlt: "Sesión de terapia manual y liberación miofascial en hombro",
    alignRight: false,
    services: [
      {
        title: "Terapia manual",
        description: "Manipulaciones y movilizaciones articulares precisas para eliminar bloqueos y dolor.",
        icon: Sparkles,
        color: "text-primary bg-primary/10",
      },
      {
        title: "Masaje terapéutico",
        description: "Técnica profesional para aliviar la sobrecarga muscular severa y el estrés en tejidos blandos.",
        icon: HeartPulse,
        color: "text-[#E63946] bg-[#E63946]/10",
      },
      {
        title: "Descargas musculares",
        description: "Liberación intensa de toxinas y contracturas para restaurar la elasticidad en deportistas.",
        icon: Zap,
        color: "text-amber-500 bg-amber-500/10",
      },
      {
        title: "Manejo de sobrecarga",
        description: "Prevención de espasmos y fatiga muscular causada por entrenamientos intensivos o malas posturas.",
        icon: Timer,
        color: "text-[#1667B7] bg-[#1667B7]/10",
      },
    ]
  },
  {
    id: "movimiento",
    title: "Movimiento y Acondicionamiento",
    description: "Programas avanzados de ejercicio terapéutico y fortalecimiento diseñados para blindar tu cuerpo contra futuras dolencias.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-W7kul7TsRGLitaYXgTnfkQFW5QutbD.png",
    imageAlt: "Acondicionamiento físico terapéutico y ejercicio funcional guiado",
    alignRight: true,
    services: [
      {
        title: "Acondicionamiento físico",
        description: "Programas individualizados de fuerza y resistencia médica controlados por fisioterapeutas.",
        icon: Dumbbell,
        color: "text-primary bg-primary/10",
      },
      {
        title: "Actividad física y salud",
        description: "Hábitos activos orientados a combatir el sedentarismo y dolencias crónicas.",
        icon: Heart,
        color: "text-[#E63946] bg-[#E63946]/10",
      },
      {
        title: "Programa de movilidad",
        description: "Optimización de rangos de movimiento y elasticidad articular para la vida diaria.",
        icon: TrendingUp,
        color: "text-[#1667B7] bg-[#1667B7]/10",
      },
      {
        title: "Consulta en línea",
        description: "Asesoría remota para guiar ejercicios terapéuticos y resolver dudas sin salir de casa.",
        icon: Laptop,
        color: "text-amber-500 bg-amber-500/10",
      },
    ]
  }
]

export function ServicesGrid() {
  return (
    <section className="py-16 lg:py-24 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24 lg:space-y-36">
        
        {categories.map((category) => {
          return (
            <div key={category.id} className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Category info and grid of cards (spans 7 cols) */}
              <div className={`lg:col-span-7 space-y-8 ${category.alignRight ? "lg:order-1" : "lg:order-2"}`}>
                <div className="space-y-4">
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground font-medium text-base leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {category.services.map((service) => {
                    const IconComponent = service.icon
                    return (
                      <div 
                        key={service.title} 
                        className="group bg-white p-5 rounded-2xl border border-border/50 hover:border-primary/20 hover:shadow-premium transition-all duration-300 flex flex-col justify-between"
                      >
                        <div>
                          <div className={`w-10 h-10 rounded-xl ${service.color} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105`}>
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <h4 className="font-heading font-extrabold text-foreground text-base group-hover:text-primary transition-colors">
                            {service.title}
                          </h4>
                          <p className="text-xs text-muted-foreground font-semibold mt-2 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Outstanding Asymmetric Side Image (spans 5 cols) */}
              <div className={`lg:col-span-5 flex justify-center ${category.alignRight ? "lg:order-2" : "lg:order-1"}`}>
                <div className="relative w-full max-w-[380px] lg:max-w-full aspect-[4/3] sm:aspect-[1.4] rounded-[24px] overflow-hidden shadow-premium border-4 border-white hover:shadow-premium-hover hover:scale-[1.01] transition-all duration-500">
                  <Image
                    src={category.image}
                    alt={category.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700"
                    sizes="(max-w-1024px) 100vw, 450px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

            </div>
          )
        })}

      </div>
    </section>
  )
}
