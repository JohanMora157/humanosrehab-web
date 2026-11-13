import { Activity, BookOpenCheck, HeartPulse, Wind } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export type HubAreaId = "clinica" | "humanos-activo" | "stretching-lab" | "academia"

export type HubAreaTheme = {
  /** Código hexadecimal oficial según Manual Maestro Parte III §8.1 */
  colorHex: string
  /** Nombre del color en el manual institucional */
  colorName: string
  /** Etiqueta descriptiva de la unidad */
  badgeLabel: string
  /** Clases de Tailwind diseñadas con contraste WCAG 2.2 AA para fondo blanco */
  badgeBg: string
  badgeText: string
  accentBorder: string
  accentBgSubtle: string
  iconColor: string
  iconBg: string
}

export type HubArea = {
  id: HubAreaId
  name: string
  tagline: string
  summary: string
  description: string
  image: string
  imageAlt: string
  href: string
  icon: LucideIcon
  theme: HubAreaTheme
  highlights: readonly string[]
  sections: readonly { title: string; description: string }[]
  ctaText: string
  ctaHref: string
}

export const hubAreas: readonly HubArea[] = [
  {
    id: "clinica",
    name: "HUMANOS Fisioterapia",
    tagline: "Unidad clínica y rehabilitación",
    summary:
      "Valoración clínica integral, rehabilitación musculoesquelética y deportiva, y consultorios especializados en Cali.",
    description:
      "Unidad clínica orientada a la evaluación, tratamiento y recuperación funcional de condiciones que afectan el movimiento. A través de un diagnóstico preciso, acordamos un plan individualizado que combina terapia manual, ejercicio terapéutico y la atención especializada en consultorios independientes de piso pélvico y drenaje linfático terapéutico.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dsYNDGnE85fZdm7sTVQBW43BhvXFS2.png",
    imageAlt: "Paciente realizando ejercicios de rehabilitación musculoesquelética guiado por fisioterapeuta",
    href: "/humanos-clinica",
    icon: HeartPulse,
    theme: {
      colorHex: "#00B9DB",
      colorName: "Cian",
      badgeLabel: "Unidad Clínica",
      badgeBg: "bg-[#00B9DB]/10",
      badgeText: "text-[#006D82]", // Contraste 5.1:1 sobre blanco (WCAG 2.2 AA)
      accentBorder: "border-[#00B9DB]",
      accentBgSubtle: "bg-[#00B9DB]/5",
      iconColor: "text-[#007D94]",
      iconBg: "bg-[#00B9DB]/15",
    },
    highlights: [
      "Valoración funcional integral y diagnóstico biomecánico",
      "Fisioterapia musculoesquelética y rehabilitación deportiva",
      "Servicios especializados: piso pélvico y drenaje linfático",
      "Terapia manual, ejercicio terapéutico y autogestión",
    ],
    sections: [
      {
        title: "Valoración funcional y plan a medida",
        description:
          "Analizamos la causa del dolor o limitación de movimiento y definimos contigo objetivos funcionales claros para tu vida diaria o deportiva.",
      },
      {
        title: "Intervención terapéutica integral",
        description:
          "Atención personalizada que combina terapia manual, ejercicio terapéutico y técnicas basadas en evidencia científica para restaurar tu funcionalidad.",
      },
      {
        title: "Consultorios especializados independientes",
        description:
          "Cinco estaciones con camilla para atención general y dos consultorios privados dedicados exclusivamente a piso pélvico y drenaje linfático terapéutico.",
      },
    ],
    ctaText: "Explorar servicios clínicos",
    ctaHref: "/humanos-clinica",
  },
  {
    id: "humanos-activo",
    name: "HUMANOS Activa",
    tagline: "Readaptación física y acondicionamiento",
    summary:
      "Fuerza, estabilidad, control motor y acondicionamiento funcional para retomar tus actividades con seguridad.",
    description:
      "Espacio independiente de readaptación física y acondicionamiento donde estructuramos tu vuelta al ejercicio o tus actividades diarias tras un proceso clínico o por iniciativa propia. Con una valoración funcional inicial, diseñamos progresiones de fuerza, estabilidad y control adaptadas a tus metas reales.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-W7kul7TsRGLitaYXgTnfkQFW5QutbD.png",
    imageAlt: "Acondicionamiento físico terapéutico y entrenamiento funcional con supervisión profesional",
    href: "/humanos-activo",
    icon: Activity,
    theme: {
      colorHex: "#0875D1",
      colorName: "Azul",
      badgeLabel: "Readaptación y Fuerza",
      badgeBg: "bg-[#0875D1]/10",
      badgeText: "text-[#0862AE]", // Contraste 5.8:1 sobre blanco (WCAG 2.2 AA)
      accentBorder: "border-[#0875D1]",
      accentBgSubtle: "bg-[#0875D1]/5",
      iconColor: "text-[#0875D1]",
      iconBg: "bg-[#0875D1]/15",
    },
    highlights: [
      "Entrenamiento funcional y desarrollo de fuerza",
      "Control motor, estabilidad articular y movilidad funcional",
      "Readaptación física y retorno progresivo a la actividad",
      "Espacio independiente equipado con rack, bancos y multifuerza",
    ],
    sections: [
      {
        title: "Evaluación funcional de inicio",
        description:
          "Determinamos tu punto de partida, patrones de movimiento y demandas de tu actividad para estructurar un plan de progresión seguro y personalizado.",
      },
      {
        title: "Fuerza, estabilidad y control motor",
        description:
          "Entrenamiento supervisado con equipamiento especializado de fuerza para recuperar capacidad funcional y acompañar una progresión controlada.",
      },
      {
        title: "Retorno sostenible al ejercicio y deporte",
        description:
          "Acompañamiento cercano tanto para usuarios que vienen de rehabilitación como para quienes buscan entrenar con respaldo y criterio profesional.",
      },
    ],
    ctaText: "Solicita orientación para Activa",
    ctaHref: "/contacto",
  },
  {
    id: "stretching-lab",
    name: "HUMANOS Stretching Lab",
    tagline: "Elongación asistida y movilidad",
    summary:
      "Sesiones guiadas de elongación asistida y movilidad articular para explorar rangos de movimiento y confort corporal.",
    description:
      "Unidad dedicada a la elongación asistida y movilidad corporal guiada. En cada sesión, un colaborador capacitado orienta la posición, amplitud y resistencia en constante diálogo contigo, ayudando a explorar arcos articulares confortables y restaurar la sensación de libertad de movimiento.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uQhlmMcbHYP9AMQ8TbcGpEUG0A71Ud.png",
    imageAlt: "Sesión guiada de elongación asistida y movilidad articular",
    href: "/stretching-lab",
    icon: Wind,
    theme: {
      colorHex: "#009BB5",
      colorName: "Turquesa",
      badgeLabel: "Movilidad Asistida",
      badgeBg: "bg-[#009BB5]/10",
      badgeText: "text-[#00687A]", // Contraste 5.5:1 sobre blanco (WCAG 2.2 AA)
      accentBorder: "border-[#009BB5]",
      accentBgSubtle: "bg-[#009BB5]/5",
      iconColor: "text-[#007E93]",
      iconBg: "bg-[#009BB5]/15",
    },
    highlights: [
      "Elongación asistida y movilidad guiada personalizada",
      "Movilidad articular guiada y respiración consciente",
      "Ajuste continuo según tu respuesta y rango de movimiento tolerado",
      "Tres estaciones funcionales y zona de piso con colchoneta",
    ],
    sections: [
      {
        title: "Movilidad con asistencia guiada",
        description:
          "Maniobras y elongaciones dirigidas donde participas activamente para explorar rangos de movimiento con acompañamiento continuo.",
      },
      {
        title: "Diálogo y dosificación continua",
        description:
          "Ajustamos la postura, el estiramiento y la respiración respetando tus sensaciones para asegurar una experiencia confortable y segura.",
      },
      {
        title: "Bienestar y pausa activa",
        description:
          "Un espacio de bienestar y movilidad general para desconectarte de la rutina. Si presentas dolor agudo o lesión, te orientamos previamente a Fisioterapia.",
      },
    ],
    ctaText: "Consulta disponibilidad",
    ctaHref: "/contacto",
  },
  {
    id: "academia",
    name: "HUMANOS Academia",
    tagline: "Educación y formación continua",
    summary:
      "Cursos, talleres y formación teórico-práctica con criterio clínico y práctica supervisada según el programa.",
    description:
      "Unidad educativa de HUMANOS orientada a compartir conocimientos técnicos, fundamentación y razonamiento clínico. Ofrecemos espacios de actualización para fisioterapeutas, estudiantes de áreas de la salud y entrenadores, combinando discusión de casos y práctica guiada según cada actividad.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pm1Y5QiXI4Md8qgc8KFxrZ2HKcx0h2.png",
    imageAlt: "Formación profesional en fisioterapia y práctica supervisada",
    href: "/academia",
    icon: BookOpenCheck,
    theme: {
      colorHex: "#7771C7",
      colorName: "Violeta",
      badgeLabel: "Educación Continua",
      badgeBg: "bg-[#7771C7]/10",
      badgeText: "text-[#524CA8]", // Contraste 5.9:1 sobre blanco (WCAG 2.2 AA)
      accentBorder: "border-[#7771C7]",
      accentBgSubtle: "bg-[#7771C7]/5",
      iconColor: "text-[#655EB8]",
      iconBg: "bg-[#7771C7]/15",
    },
    highlights: [
      "Líneas documentadas de actualización teórico-práctica",
      "Fundamentación basada en evidencia y criterio clínico",
      "Talleres específicos para salud y para entrenadores",
      "Metodología con práctica supervisada según la actividad",
    ],
    sections: [
      {
        title: "Criterio clínico y toma de decisiones",
        description:
          "Aprende a justificar cada intervención terapéutica, seleccionar técnicas con base en la evidencia y reconocer los límites de tu práctica.",
      },
      {
        title: "Práctica guiada y retroalimentación",
        description:
          "Metodología participativa donde recibes orientaciones precisas sobre destreza, palpación, posicionamiento y seguridad.",
      },
      {
        title: "Temáticas de formación documentadas",
        description:
          "Contenidos documentados en punción seca, abordaje fascial, anatomía palpatoria, biomecánica funcional y talleres por demanda.",
      },
    ],
    ctaText: "Solicita información y programas",
    ctaHref: "/contacto",
  },
]
