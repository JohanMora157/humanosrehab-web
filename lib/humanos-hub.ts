import { Activity, BookOpenCheck, HeartPulse, Wind } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export type HubAreaId = "clinica" | "humanos-activo" | "stretching-lab" | "academia"

export type HubArea = {
  id: HubAreaId
  name: string
  summary: string
  description: string
  image: string
  imageAlt: string
  href: string
  icon: LucideIcon
  highlights: readonly string[]
  sections: readonly { title: string; description: string }[]
}

export const hubAreas: readonly HubArea[] = [
  {
    id: "clinica",
    name: "Humanos Clínica",
    summary: "Fisioterapia y rehabilitación para acompañar tu recuperación con atención profesional.",
    description:
      "Atención fisioterapéutica para personas con dolor, lesiones o necesidades de rehabilitación. El equipo evalúa cada caso y orienta el proceso según los objetivos clínicos y funcionales.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dsYNDGnE85fZdm7sTVQBW43BhvXFS2.png",
    imageAlt: "Paciente realizando ejercicios de rehabilitación guiado por terapeuta",
    href: "/humanos-clinica",
    icon: HeartPulse,
    highlights: ["Fisioterapia integral", "Fisioterapia avanzada", "Fisioterapia especializada"],
    sections: [],
  },
  {
    id: "humanos-activo",
    name: "Humanos Activo",
    summary: "Movimiento y seguimiento para mantenerte activo después de tu proceso clínico.",
    description:
      "Un espacio pensado para dar continuidad a tus hábitos de movimiento después de finalizar un proceso clínico. La propuesta combina actividad física tranquila, seguimiento y orientación para construir una rutina sostenible.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-W7kul7TsRGLitaYXgTnfkQFW5QutbD.png",
    imageAlt: "Acondicionamiento físico terapéutico y ejercicio funcional guiado",
    href: "/humanos-activo",
    icon: Activity,
    highlights: ["Seguimiento periódico", "Movimiento y movilidad", "Hábitos activos"],
    sections: [
      {
        title: "Controles de seguimiento",
        description:
          "Espacios para conversar sobre cómo evoluciona tu rutina, revisar objetivos de actividad y resolver dudas generales después de completar tu proceso clínico.",
      },
      {
        title: "Actividad física guiada",
        description:
          "Ideas de trabajo progresivo de movilidad, fuerza y condición física general, ajustadas a tus intereses y a las recomendaciones profesionales que tengas.",
      },
      {
        title: "Hábitos que se sostienen",
        description:
          "Orientación para incorporar movimiento cotidiano, pausas activas y rutinas realistas en tu día a día.",
      },
    ],
  },
  {
    id: "stretching-lab",
    name: "Stretching Lab",
    summary: "Sesiones tranquilas de estiramiento y movilidad para regalarle una pausa a tu cuerpo.",
    description:
      "Sesiones guiadas de estiramiento y movilidad para quienes buscan relajarse y moverse con calma. Es una experiencia de bienestar general, separada de la atención de lesiones o condiciones clínicas.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uQhlmMcbHYP9AMQ8TbcGpEUG0A71Ud.png",
    imageAlt: "Sesión de terapia manual y liberación miofascial en hombro",
    href: "/stretching-lab",
    icon: Wind,
    highlights: ["Estiramiento guiado", "Movilidad consciente", "Actividad a ritmo tranquilo"],
    sections: [
      {
        title: "Estiramiento guiado",
        description:
          "Movimientos y posiciones de estiramiento realizados con acompañamiento, respetando el ritmo y la comodidad de cada persona.",
      },
      {
        title: "Movilidad consciente",
        description:
          "Una pausa para explorar movimientos suaves y rangos cómodos, con atención a la respiración y a las sensaciones del cuerpo.",
      },
      {
        title: "Un espacio de bienestar",
        description:
          "Una alternativa de actividad física tranquila para desconectarte de la rutina. Si tienes una lesión o dolor, consulta primero por la atención clínica.",
      },
    ],
  },
  {
    id: "academia",
    name: "Academia",
    summary: "Aprendizaje sobre movimiento y bienestar para la comunidad y profesionales.",
    description:
      "Una propuesta educativa con temas de movimiento, autocuidado y fisioterapia en dos caminos: contenidos introductorios para la comunidad y espacios de actualización para fisioterapeutas.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pm1Y5QiXI4Md8qgc8KFxrZ2HKcx0h2.png",
    imageAlt: "Equipo de Humanos Rehab en atención y acompañamiento profesional",
    href: "/academia",
    icon: BookOpenCheck,
    highlights: ["Aprendizaje para todos", "Educación para fisioterapeutas", "Temas prácticos de movimiento"],
    sections: [
      {
        title: "Para la comunidad",
        description:
          "Contenidos introductorios para conocer mejor el movimiento, incorporar pausas activas y explorar hábitos cotidianos de autocuidado.",
      },
      {
        title: "Para fisioterapeutas",
        description:
          "Una línea de formación profesional que puede abordar evaluación, ejercicio terapéutico y razonamiento clínico mediante cursos o talleres.",
      },
      {
        title: "Aprender con enfoque práctico",
        description:
          "La propuesta prioriza explicaciones claras y herramientas que cada participante pueda llevar a sus actividades y objetivos de aprendizaje.",
      },
    ],
  },
]
