import {
  Activity,
  Award,
  Bone,
  Calendar,
  CheckCircle2,
  Clock,
  Compass,
  Dumbbell,
  FileText,
  Flame,
  HandMetal,
  HeartHandshake,
  HeartPulse,
  Info,
  Layers,
  MapPin,
  Pill,
  RotateCcw,
  Route,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Target,
  Users,
  Zap,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface ClinicalService {
  code: string
  name: string
  shortTitle: string
  duration?: string
  locationNote?: string
  targetAudience: string
  clinicalApproach: string
  whatToExpect: string
  ctaText: string
  ctaHref: string
  icon: LucideIcon
  isSpecializedOffice?: boolean
  badge: string
}

export interface ClinicalTechnique {
  code: string
  name: string
  description: string
  indication: string
  icon: LucideIcon
}

export interface PendingService {
  code: string
  name: string
  category: string
  statusNote: string
}

export interface CareStep {
  step: string
  title: string
  description: string
  icon: LucideIcon
  detail: string
}

export interface ClinicalFAQ {
  question: string
  answer: string
}

// 1. Proceso Asistencial en 5 Pasos (Manual Maestro Parte I §1.3 y Parte II §4.1)
export const careSteps: CareStep[] = [
  {
    step: "01",
    title: "Orientación y valoración inicial",
    description:
      "Entrevista clínica y examen funcional minucioso para identificar limitaciones, revisar antecedentes y establecer una línea base de tu condición física.",
    icon: Compass,
    detail: "30 minutos en el modelo integral · Identificación de banderas clínicas.",
  },
  {
    step: "02",
    title: "Identificación de objetivos funcionales",
    description:
      "Relacionamos los hallazgos con las tareas que necesitas recuperar: volver a caminar con comodidad, cargar objetos, trabajar o retomar tu disciplina deportiva.",
    icon: Target,
    detail: "Objetivos acordados contigo · Relevancia en tu vida diaria.",
  },
  {
    step: "03",
    title: "Definición de un plan según hallazgos",
    description:
      "Diseñamos un esquema individualizado. Seleccionamos intervenciones terapéuticas basadas en la evidencia y en la respuesta particular de tus tejidos.",
    icon: Route,
    detail: "Sin protocolos estandarizados ni recetas genéricas.",
  },
  {
    step: "04",
    title: "Intervención y seguimiento continuo",
    description:
      "Sesiones guiadas con ejercicio terapéutico dosificado, técnicas manuales y reevaluación permanente para ajustar cargas según tu evolución.",
    icon: Activity,
    detail: "60 minutos por sesión integral · Criterio biomecánico constante.",
  },
  {
    step: "05",
    title: "Educación y recursos de autogestión",
    description:
      "Te enseñamos pautas y ejercicios claros para que continúes fortaleciendo y cuidando tu movimiento en casa, en el trabajo y en tu entrenamiento.",
    icon: Sparkles,
    detail: "Autonomía funcional · Estrategias sostenibles en el tiempo.",
  },
]

// 2. Servicios Clínicos Principales Confirmados (Fichas F01-F04, F07, F14, F15)
export const primaryClinicalServices: ClinicalService[] = [
  {
    code: "F01",
    name: "Valoración Fisioterapéutica Integral",
    shortTitle: "Valoración Inicial",
    duration: "30 min (modelo integral)",
    targetAudience:
      "Personas que consultan por dolor, molestia persistente, lesión reciente o limitación funcional al moverse.",
    clinicalApproach:
      "Entrevista clínica, examen funcional de tareas motoras y pruebas articulares y neuromusculares para obtener una línea base objetiva y definir si procede tratamiento fisioterapéutico o derivación médica.",
    whatToExpect:
      "Explicación en lenguaje claro sobre los hallazgos observados, acuerdo del plan de trabajo y primeras pautas prácticas de autogestión.",
    ctaText: "Agendar valoración",
    ctaHref: "/agendar-cita",
    icon: Stethoscope,
    badge: "Puerta de Entrada",
  },
  {
    code: "F02",
    name: "Fisioterapia Musculoesquelética",
    shortTitle: "Musculoesquelética",
    duration: "60 min por sesión",
    targetAudience:
      "Personas con afecciones de columna, articulaciones, tendones o músculos que afectan actividades como caminar, sentarse, levantar peso o laborar.",
    clinicalApproach:
      "Plan estructurado alrededor de actividades cotidianas relevantes. Integra ejercicio terapéutico dosificado, educación sobre el dolor y recursos manuales cuando aportan al objetivo.",
    whatToExpect:
      "Intervención guiada que ajusta progresivamente la carga y el esfuerzo según la irritabilidad tisular y la respuesta clínica.",
    ctaText: "Consultar servicio",
    ctaHref: "/agendar-cita",
    icon: Bone,
    badge: "Línea Asistencial",
  },
  {
    code: "F03",
    name: "Rehabilitación Deportiva",
    shortTitle: "Deportiva",
    duration: "60 min por sesión",
    targetAudience:
      "Deportistas recreativos, aficionados o competitivos con lesión musculoesquelética o disminución de tolerancia a las exigencias de su disciplina.",
    clinicalApproach:
      "Recuperación biomecánica orientada a las demandas motrices del deporte. Se fundamenta en criterios funcionales y puede continuar articuladamente en HUMANOS Activa.",
    whatToExpect:
      "Pruebas de tolerancia al esfuerzo, ejercicios específicos de control dinámico y avance progresivo hacia gestos deportivos.",
    ctaText: "Consultar rehabilitación deportiva",
    ctaHref: "/agendar-cita",
    icon: Dumbbell,
    badge: "Rendimiento y Retorno",
  },
  {
    code: "F04",
    name: "Recuperación Funcional",
    shortTitle: "Recuperación Funcional",
    duration: "60 min por sesión",
    targetAudience:
      "Personas en posoperatorios, tras periodos de inmovilización o inactividad física que requieren restablecer su autonomía motriz.",
    clinicalApproach:
      "Práctica graduada de tareas de la vida diaria, laboral o recreativa para recuperar de manera segura la tolerancia al esfuerzo y la movilidad.",
    whatToExpect:
      "Acompañamiento cercano en el reentrenamiento de patrones de movimiento para ganar seguridad, control e independencia.",
    ctaText: "Consultar recuperación funcional",
    ctaHref: "/agendar-cita",
    icon: RotateCcw,
    badge: "Autonomía Motriz",
  },
  {
    code: "F07",
    name: "Descarga Muscular",
    shortTitle: "Descarga Muscular",
    duration: "Sesión clínica sobre camilla",
    targetAudience:
      "Personas con sensación de sobrecarga o tensión física acumulada por entrenamiento exigente, demandas laborales o jornadas prolongadas.",
    clinicalApproach:
      "Atención manual en camilla orientada al confort y la modulación transitoria de la tensión muscular. Se diferencia de Stretching Lab por su carácter pasivo sobre camilla.",
    whatToExpect:
      "Maniobras manuales cuidadosas aplicadas a nivel localizado o de cadenas musculares para favorecer la percepción de descanso físico.",
    ctaText: "Solicitar descarga muscular",
    ctaHref: "/agendar-cita",
    icon: Flame,
    badge: "Confort y Alivio",
  },
  {
    code: "F14",
    name: "Fisioterapia de Piso Pélvico",
    shortTitle: "Piso Pélvico",
    duration: "60 min (valoración y sesión)",
    locationNote: "Consultorio independiente privado",
    targetAudience:
      "Personas con síntomas como escapes urinarios, dolor pélvico crónico, en etapa de embarazo, posparto o en preparación/recuperación quirúrgica uroginecológica.",
    clinicalApproach:
      "Evaluación y tratamiento de la función del piso pélvico en consultorio privado exclusivo. Se enfoca en control neuromuscular, tono, fuerza, coordinación o relajación.",
    whatToExpect:
      "Atención respetuosa y confidencial, con educación anatómica, reeducación del patrón respiratorio y ejercicios específicos guiados.",
    ctaText: "Agendar valoración de piso pélvico",
    ctaHref: "/agendar-cita",
    icon: HeartPulse,
    isSpecializedOffice: true,
    badge: "Consultorio Especializado",
  },
  {
    code: "F15",
    name: "Drenaje Linfático Terapéutico",
    shortTitle: "Drenaje Linfático",
    duration: "45 min por sesión",
    locationNote: "Consultorio independiente privado",
    targetAudience:
      "Personas con edema, sensación de pesadez, linfedema o procesos posquirúrgicos con indicación clínica de movilización del líquido intersticial.",
    clinicalApproach:
      "Técnica manual suave y rítmica realizada en consultorio independiente para estimular el sistema linfático superficial y favorecer la reabsorción de fluidos.",
    whatToExpect:
      "Maniobras superficiales de baja presión en un ambiente tranquilo, acompañadas de recomendaciones para el cuidado circulatorio.",
    ctaText: "Consultar drenaje linfático",
    ctaHref: "/agendar-cita",
    icon: HeartHandshake,
    isSpecializedOffice: true,
    badge: "Consultorio Especializado",
  },
]

// 3. Técnicas y Recursos Complementarios (F05, F08, F09, F11, F13, F18)
// Componentes seleccionados por el equipo clínico tras valoración previa. NO venta directa aislada.
export const clinicalTechniques: ClinicalTechnique[] = [
  {
    code: "F05",
    name: "Terapia manual ortopédica",
    description:
      "Movilizaciones articulares y manipulaciones de tejidos blandos seleccionadas tras la valoración para modular síntomas y favorecer el rango de movimiento.",
    indication: "Componente de sesión según nivel de irritabilidad tisular.",
    icon: HandMetal,
  },
  {
    code: "F08",
    name: "Punción seca",
    description:
      "Intervención con aguja filiforme estéril sin inyección para el abordaje de puntos gatillo miofasciales específicos seleccionados por el equipo.",
    indication: "Casos musculoesqueléticos específicos bajo consentimiento informado.",
    icon: Zap,
  },
  {
    code: "F09",
    name: "Electropunción",
    description:
      "Aplicación de estimulación eléctrica a través de agujas con finalidad terapéutica definida en el plan de manejo del dolor y control neuromuscular.",
    indication: "Componente clínico seleccionado en casos específicos.",
    icon: Activity,
  },
  {
    code: "F11",
    name: "Terapia instrumental de tejidos blandos",
    description:
      "Trabajo asistido con instrumentos externos diseñados para optimizar el estímulo mecánico sobre fascias y planos tisulares superficiales.",
    indication: "Componente de sesión para facilitar tolerancia al movimiento.",
    icon: Layers,
  },
  {
    code: "F13",
    name: "Ejercicio terapéutico",
    description:
      "Prescripción dosificada y práctica guiada de ejercicios de movilidad, control motor y fuerza adaptados a la capacidad del paciente.",
    indication: "Pilar central en todas las etapas de la intervención clínica.",
    icon: Dumbbell,
  },
  {
    code: "F18",
    name: "Recursos complementarios",
    description:
      "Aplicación de ventosas (cupping), vendaje neuromuscular (kinesiotaping) y electroestimulación superficial según el objetivo específico de la sesión.",
    indication: "Soporte complementario evaluado según tolerancia y piel.",
    icon: Sparkles,
  },
]

// 4. Servicios Pendientes de Validación Clínica y Operativa (F06, F10, F12, F16, F17, F19)
export const pendingServices: PendingService[] = [
  {
    code: "F06",
    name: "Osteopatía estructural",
    category: "Abordaje manual especializado",
    statusNote: "En revisión de protocolos de agenda y delimitación asistencial.",
  },
  {
    code: "F10",
    name: "Neuromodulación percutánea",
    category: "Procedimiento invasivo guiado",
    statusNote: "Requiere verificación de protocolo clínico y tecnología disponible.",
  },
  {
    code: "F12",
    name: "Ondas de choque extracorpóreas",
    category: "Terapia física avanzada",
    statusNote: "Sujeto a verificación de indicaciones clínicas y disponibilidad de equipo.",
  },
  {
    code: "F16",
    name: "Intervenciones con guía ecográfica",
    category: "Procedimiento de apoyo visual",
    statusNote: "Recurso técnico pendiente de confirmación de agenda y acto clínico.",
  },
  {
    code: "F17",
    name: "Infiltraciones y procedimientos especializados",
    category: "Procedimientos médicos/biológicos",
    statusNote: "Familia de procedimientos (PRP, proloterapia, etc.) sujeta a revisión documental y médica.",
  },
  {
    code: "F19",
    name: "Consulta fisioterapéutica en línea",
    category: "Modalidad remota",
    statusNote: "Pendiente de formalización de canal seguro de consentimiento y derivación.",
  },
]

// 5. Infraestructura Física Confirmada de HUMANOS Fisioterapia
export const clinicalInfrastructure = [
  {
    number: "5",
    title: "Estaciones clínicas funcionales",
    description:
      "Equipadas con camilla para valoración inicial, terapia manual y rehabilitación funcional individual.",
  },
  {
    number: "1",
    title: "Consultorio de piso pélvico",
    description:
      "Espacio independiente y privado dedicado exclusivamente a la valoración y tratamiento de disfunciones pélvicas.",
  },
  {
    number: "1",
    title: "Consultorio de drenaje linfático",
    description:
      "Espacio independiente acondicionado para sesiones terapéuticas de descongestión y cuidado circulatorio.",
  },
]

// 6. Preguntas Frecuentes Oficiales (Manual Maestro Parte II §4 y Parte V §16)
export const clinicalFAQs: ClinicalFAQ[] = [
  {
    question: "¿Cómo funciona la primera valoración fisioterapéutica?",
    answer:
      "La valoración inicial (F01) tiene una duración documentada de 30 minutos en el modelo integral. Incluye una entrevista clínica para entender tu motivo de consulta, historial y actividades afectadas, seguida de un examen funcional de tareas motoras. Al terminar, el profesional te explica en un lenguaje claro qué observó, acuerda contigo las metas iniciales y te entrega recomendaciones de autogestión para aplicar de inmediato.",
  },
  {
    question: "¿Puedo solicitar una técnica específica como punción seca o terapia manual?",
    answer:
      "Las técnicas como punción seca (F08), electropunción (F09), terapia manual (F05) o terapia instrumental (F11) son componentes clínicos, no productos que se reserven de manera aislada. Durante la valoración, el fisioterapeuta evalúa la pertinencia y seguridad de cada recurso para tu condición y acuerda su uso contigo como parte del plan.",
  },
  {
    question: "¿Cómo se define y ajusta mi plan de tratamiento?",
    answer:
      "Tu plan se organiza alrededor de metas que tengan sentido para ti, como volver a caminar sin molestia, trabajar o retomar tu deporte. En cada sesión reevaluamos cómo responden tus tejidos y ajustamos progresivamente los ejercicios, las técnicas manuales y las cargas según tu evolución real, evitando protocolos genéricos.",
  },
  {
    question: "¿Qué diferencia existe entre HUMANOS Fisioterapia y HUMANOS Activa?",
    answer:
      "HUMANOS Fisioterapia es la unidad clínica asistencial donde atendemos dolor, lesiones musculoesqueléticas, posoperatorios y disfunciones pélvicas o linfáticas mediante valoración y tratamiento profesional. HUMANOS Activa es nuestra unidad de acondicionamiento físico, fuerza y control motor, orientada a personas que ya superaron su fase crítica o que buscan entrenar bajo criterio biomecánico para sostener su rendimiento.",
  },
  {
    question: "¿En qué se diferencia la descarga muscular del servicio de Stretching Lab?",
    answer:
      "La descarga muscular (F07) en Fisioterapia es una atención manual realizada de forma pasiva sobre camilla por un fisioterapeuta, orientada a aliviar la sensación de sobrecarga muscular tras un esfuerzo intenso. En cambio, HUMANOS Stretching Lab es una experiencia de movilidad guiada y elongación asistida (en camilla y en colchoneta) pensada para amplitud articular, relajación general y bienestar postural.",
  },
]

