import { Building2, Dumbbell, HeartPulse, ShieldPlus, Stethoscope } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type ServiceOffering = {
  title: string
  description: string
  objective: string
  note?: string
}

type ServiceGroup = {
  title: string
  offerings: ServiceOffering[]
  benefits?: string[]
}

type ServiceSection = {
  id: string
  number: string
  title: string
  summary: string
  description: string
  image: string
  imageAlt: string
  accentClass: string
  icon: LucideIcon
  iconClass: string
  groups: ServiceGroup[]
}

export const serviceSections: ServiceSection[] = [
  {
    id: "fisioterapia-integral",
    number: "01",
    title: "Fisioterapia Integral",
    summary: "Valoración, tratamiento y rehabilitación musculoesquelética personalizada.",
    description:
      "Ofrecemos atención fisioterapéutica personalizada para la prevención, tratamiento y recuperación de lesiones musculoesqueléticas. Nuestro enfoque combina evaluación funcional, análisis del movimiento y educación al paciente para aliviar el dolor, mejorar la movilidad y optimizar la calidad de vida.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dsYNDGnE85fZdm7sTVQBW43BhvXFS2.png",
    imageAlt: "Paciente realizando ejercicios de rehabilitación guiado por terapeuta",
    accentClass: "from-primary/80 to-[#1667B7]/70",
    icon: Stethoscope,
    iconClass: "bg-primary/10 text-primary",
    groups: [
      {
        title: "Opciones de atención",
        offerings: [
          {
            title: "Consulta de valoración",
            description:
              "Evaluación fisioterapéutica integral que incluye anamnesis, análisis del dolor, valoración del movimiento, postura, fuerza, control motor y funcionalidad, complementada con pruebas clínicas específicas. A partir de esta valoración se establece un diagnóstico fisioterapéutico y un plan de intervención individualizado, orientado a la causa del problema.",
            objective: "Definir el diagnóstico fisioterapéutico y el plan terapéutico.",
            note: "Es la puerta de entrada a nuestro universo de recuperación.",
          },
          {
            title: "Sesión individual",
            description:
              "Sesión de fisioterapia personalizada dirigida por nuestro terapeuta de cabecera y ejecutada por profesionales expertos del equipo. Integra terapia manual, ejercicio terapéutico y reeducación del movimiento, ajustados a la evolución clínica del paciente.",
            objective: "Restaurar la función y reducir el dolor de forma progresiva.",
          },
          {
            title: "Sesión Premium",
            description:
              "Intervención avanzada con mayor tiempo terapéutico y abordaje integral, ejecutada exclusivamente por el fisioterapeuta Julián Sáenz. Indicada en casos complejos o dolor persistente; integra terapia manual profunda, liberación miofascial, neuromodulación y ejercicio correctivo.",
            objective: "Optimizar la recuperación funcional en casos de mayor complejidad.",
          },
          {
            title: "Pack de 3 sesiones",
            description:
              "Programa de corta duración enfocado en prevención de lesiones y educación terapéutica. Incluye análisis del movimiento, corrección de hábitos, ejercicio específico y estrategias de autogestión del dolor y la carga física.",
            objective: "Promover la prevención y la autogestión responsable.",
          },
          {
            title: "Pack de 5 sesiones",
            description:
              "Programa terapéutico estructurado que permite continuidad en el tratamiento y seguimiento clínico. Indicado en fases iniciales de rehabilitación o patologías de complejidad leve a moderada.",
            objective: "Consolidar los avances iniciales del proceso terapéutico.",
          },
          {
            title: "Pack de 10 sesiones",
            description:
              "Plan intensivo recomendado en lesiones crónicas, procesos postquirúrgicos o disfunciones complejas. Permite reevaluaciones periódicas y ajustes progresivos del tratamiento.",
            objective: "Consolidar la recuperación funcional a mediano plazo.",
          },
        ],
      },
    ],
  },
  {
    id: "fisioterapia-avanzada",
    number: "02",
    title: "Fisioterapia Avanzada",
    summary: "Procedimientos especializados para dolor persistente y lesiones complejas.",
    description:
      "Contamos con un enfoque especializado en fisioterapia invasiva, orientado al manejo del dolor y a la recuperación de lesiones complejas o persistentes. Aplicamos técnicas como ecografía, neuromodulación, plasma rico en plaquetas (PRP), ácido hialurónico intraarticular, proloterapia, terapia neural y corticoterapia, bajo criterios clínicos rigurosos y con un plan individualizado.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uQhlmMcbHYP9AMQ8TbcGpEUG0A71Ud.png",
    imageAlt: "Sesión clínica de terapia manual especializada",
    accentClass: "from-[#E63946]/80 to-primary/75",
    icon: ShieldPlus,
    iconClass: "bg-[#E63946]/10 text-[#E63946]",
    groups: [
      {
        title: "Procedimientos y programas",
        offerings: [
          {
            title: "Infiltración en proloterapia",
            description:
              "Procedimiento mínimamente invasivo orientado a estimular procesos regenerativos en tendones, ligamentos y articulaciones. Indicado en dolor musculoesquelético crónico y lesiones de larga evolución.",
            objective: "Favorecer la reparación tisular.",
          },
          {
            title: "Infiltración con corticoide",
            description:
              "Infiltración dirigida para el control del dolor y la inflamación en patologías musculoesqueléticas específicas, realizada bajo valoración clínica y protocolos de seguridad.",
            objective: "Control inflamatorio y alivio sintomático.",
          },
          {
            title: "Infiltración con PRP",
            description:
              "Terapia biológica regenerativa que utiliza concentrados plaquetarios autólogos para estimular la reparación de tejidos musculoesqueléticos.",
            objective: "Promover la regeneración tisular.",
            note: "PRP: plasma rico en plaquetas.",
          },
          {
            title: "Sueroterapia - sesión",
            description:
              "Terapia intravenosa de soporte clínico orientada a optimizar hidratación, recuperación física y función metabólica, ajustada a la condición clínica del paciente.",
            objective: "Apoyar la recuperación sistémica.",
          },
          {
            title: "Paquete de sueroterapia (4 sesiones)",
            description:
              "Programa de sueroterapia diseñado para generar un efecto acumulativo mediante sesiones periódicas con seguimiento clínico.",
            objective: "Potenciar los efectos de la sueroterapia.",
          },
        ],
      },
    ],
  },
  {
    id: "fisioterapia-especializada",
    number: "03",
    title: "Fisioterapia Especializada",
    summary: "Piso pélvico y drenaje linfático con abordajes clínicos focalizados.",
    description:
      "Brindamos servicios correspondientes a subespecialidades de la fisioterapia que requieren formación específica y abordajes clínicos focalizados. Incluye fisioterapia de piso pélvico y drenaje linfático para condiciones particulares que necesitan atención altamente especializada, segura y efectiva.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tFrrZzWAuE3GyimyfBWoUNZpKmZFQ0.png",
    imageAlt: "Atención fisioterapéutica especializada en consultorio",
    accentClass: "from-[#1667B7]/80 to-primary/70",
    icon: HeartPulse,
    iconClass: "bg-[#1667B7]/10 text-[#1667B7]",
    groups: [
      {
        title: "Drenaje linfático",
        offerings: [
          {
            title: "Valoración de drenaje linfático",
            description:
              "Evaluación clínica especializada del sistema linfático y circulatorio para identificar edemas, procesos inflamatorios o alteraciones del retorno linfático y definir el abordaje terapéutico adecuado.",
            objective: "Orientar el tratamiento linfático de forma segura.",
          },
          {
            title: "Pack de 5 sesiones de drenaje linfático",
            description:
              "Programa terapéutico enfocado en la estimulación del sistema linfático, reducción de edemas y apoyo a los procesos de recuperación tisular.",
            objective: "Optimizar el retorno linfático y la recuperación.",
          },
        ],
      },
      {
        title: "Piso pélvico",
        offerings: [
          {
            title: "Valoración de piso pélvico",
            description:
              "Consulta especializada para la evaluación funcional del piso pélvico, incluyendo fuerza, coordinación y control neuromuscular. Indicada en disfunciones urinarias, dolor pélvico, embarazo y postparto.",
            objective: "Identificar disfunciones del piso pélvico.",
          },
          {
            title: "Pack de 5 sesiones de piso pélvico",
            description:
              "Programa de rehabilitación enfocado en la normalización de la función del piso pélvico mediante ejercicio específico y control neuromuscular.",
            objective: "Restaurar la función del piso pélvico.",
          },
        ],
      },
    ],
  },
  {
    id: "acondicionamiento-fisico",
    number: "04",
    title: "Acondicionamiento Físico",
    summary: "Fuerza, movilidad y resistencia con acompañamiento profesional.",
    description:
      "Desarrollamos programas individualizados para mejorar la condición física de forma progresiva y segura. Partimos de una valoración funcional para ajustar cargas, ejercicios y objetivos según las capacidades, antecedentes y necesidades de cada persona.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-W7kul7TsRGLitaYXgTnfkQFW5QutbD.png",
    imageAlt: "Entrenamiento funcional y acondicionamiento físico guiado",
    accentClass: "from-amber-500/80 to-[#1667B7]/75",
    icon: Dumbbell,
    iconClass: "bg-amber-500/10 text-amber-600",
    groups: [
      {
        title: "Programas de acondicionamiento",
        offerings: [
          {
            title: "Valoración físico-funcional",
            description:
              "Análisis inicial de movilidad, fuerza, resistencia, estabilidad y patrones básicos de movimiento para establecer una línea base y definir metas alcanzables.",
            objective: "Diseñar un programa seguro y adaptado al nivel actual.",
          },
          {
            title: "Acondicionamiento individual",
            description:
              "Sesiones personalizadas que combinan fuerza, capacidad cardiovascular, movilidad y control motor con progresiones ajustadas al desempeño.",
            objective: "Mejorar la capacidad física general y la autonomía.",
          },
          {
            title: "Readaptación a la actividad física",
            description:
              "Proceso progresivo para recuperar confianza, tolerancia a la carga y habilidades necesarias antes de retomar el entrenamiento o la práctica deportiva.",
            objective: "Facilitar un retorno gradual y reducir el riesgo de recaídas.",
          },
          {
            title: "Movilidad y prevención",
            description:
              "Programa enfocado en movilidad articular, técnica de movimiento, estabilidad y hábitos de recuperación para personas activas o con rutinas sedentarias.",
            objective: "Prevenir molestias y sostener una práctica física saludable.",
          },
        ],
      },
    ],
  },
  {
    id: "premium-corporativos",
    number: "05",
    title: "Planes Premium y Corporativos",
    summary: "Continuidad terapéutica para personas, familias, equipos y empresas.",
    description:
      "Planes de seguimiento continuo y bolsas flexibles de sesiones para sostener procesos de rehabilitación, prevención y control funcional con agenda preferencial y mejores condiciones por volumen.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pm1Y5QiXI4Md8qgc8KFxrZ2HKcx0h2.png",
    imageAlt: "Equipo Humanos Rehab en atención y acompañamiento profesional",
    accentClass: "from-emerald-500/75 to-primary/80",
    icon: Building2,
    iconClass: "bg-emerald-500/10 text-emerald-600",
    groups: [
      {
        title: "Planes Premium",
        offerings: [
          {
            title: "Plan Premium 3 meses (36 sesiones)",
            description:
              "Programa integral de intervención fisioterapéutica con seguimiento continuo, enfocado en rehabilitación funcional, prevención de lesiones y control del movimiento.",
            objective: "Consolidar la función y prevenir recaídas.",
          },
          {
            title: "Plan Premium 6 meses (72 sesiones)",
            description:
              "Plan de intervención prolongada orientado a la estabilización funcional y prevención a largo plazo en pacientes con necesidades terapéuticas continuas.",
            objective: "Mantener los resultados terapéuticos en el tiempo.",
          },
        ],
        benefits: [
          "Acceso continuo a fisioterapia durante 6 meses",
          "Uso clínico promedio de hasta 3 sesiones por semana",
          "15% de descuento en fisioterapia avanzada y especializada",
          "Seguimiento real, no atención fragmentada",
          "Agenda preferencial",
          "Posibilidad de adicionar 1 o mas miembros",
        ],
      },
      {
        title: "Bolsas corporativas",
        offerings: [
          {
            title: "Bolsa de sesiones - Plan 50",
            description:
              "Paquete flexible de sesiones para planificación terapéutica individual, corporativa o deportiva, garantizando continuidad y seguimiento clínico. Ofrece flexibilidad, ahorro y acceso continuo a atención especializada.",
            objective: "Asegurar continuidad terapéutica.",
          },
          {
            title: "Bolsa de sesiones - Plan 100",
            description:
              "Plan de alto volumen orientado a atención corporativa, familiar o deportiva, enfocado en prevención, rehabilitación y control funcional sostenido. Ofrece cobertura amplia, optimización de recursos y cuidado integral.",
            objective: "Garantizar atención terapéutica a largo plazo.",
          },
        ],
        benefits: [
          "Valoración terapéutica por miembro con costo mínimo",
          "Identificación de morbilidad sentida y riesgo de lesión",
          "15% de descuento en fisioterapia avanzada y especializada",
          "Seguimiento real, no atención fragmentada",
          "Flexibilidad de uso",
          "Ahorro significativo por volumen",
        ],
      },
    ],
  },
]
