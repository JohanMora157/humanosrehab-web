"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Activity,
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  Compass,
  Dumbbell,
  GraduationCap,
  HeartHandshake,
  HelpCircle,
  MapPin,
  MessageSquare,
  Shield,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FAQCategory {
  id: string
  title: string
  shortTitle: string
  icon: typeof Stethoscope
  color: string
  textColor: string
  badgeBg: string
  description: string
  questions: {
    question: string
    answer: string
    relatedLink?: {
      label: string
      href: string
    }
  }[]
}

const faqCategories: FAQCategory[] = [
  {
    id: "primera-visita",
    title: "1. Primera visita y valoración",
    shortTitle: "Primera Visita",
    icon: Stethoscope,
    color: "#00B9DB",
    textColor: "text-[#006D82]",
    badgeBg: "bg-[#00B9DB]/10",
    description: "Todo lo que necesitas saber antes de asistir a tu consulta inicial en HUMANOS.",
    questions: [
      {
        question: "¿Cómo se desarrolla la primera valoración fisioterapéutica?",
        answer:
          "En el modelo institucional integral, la valoración inicial (F01) tiene una duración documentada de 30 minutos. Comienza con una entrevista clínica para comprender tu motivo de consulta, limitaciones en tus actividades e historial médico. Posteriormente realizamos un examen funcional del movimiento y pruebas musculoesqueléticas. Al finalizar, el profesional te explica con claridad lo observado, acuerda contigo las metas del proceso y te entrega las primeras pautas de autogestión.",
        relatedLink: {
          label: "Ver servicio de valoración",
          href: "/humanos-clinica#f01",
        },
      },
      {
        question: "¿Qué debo llevar o cómo debo prepararme para mi valoración?",
        answer:
          "Te recomendamos asistir con ropa cómoda que permita evaluar con facilidad el movimiento de la zona afectada (por ejemplo, pantaloneta o ropa deportiva) y traer ayudas diagnósticas recientes si cuentas con ellas (radiografías, resonancias magnéticas o ecografías).",
      },
      {
        question: "¿Puedo solicitar que me apliquen una técnica específica (punción seca o terapia manual) en mi primera cita?",
        answer:
          "Las técnicas manuales, instrumentales o invasivas son componentes clínicos que el fisioterapeuta selecciona tras la valoración funcional. No se aplican sin criterio previo ni se contratan de forma aislada; durante la evaluación se define si la técnica es pertinente y segura para tu caso.",
        relatedLink: {
          label: "Conocer técnicas complementarias",
          href: "/humanos-clinica",
        },
      },
    ],
  },
  {
    id: "agendamiento",
    title: "2. Agendamiento y confirmación",
    shortTitle: "Agendamiento",
    icon: Calendar,
    color: "#0875D1",
    textColor: "text-[#0862AE]",
    badgeBg: "bg-[#0875D1]/10",
    description: "Canales de contacto, verificación de cupos y confirmación de citas.",
    questions: [
      {
        question: "¿Es indispensable agendar cita previa para ser atendido?",
        answer:
          "Sí. En HUMANOS trabajamos bajo un modelo de atención personalizada con agenda programada. Esto garantiza que el profesional y el espacio físico (estación clínica o consultorio) estén completamente preparados para tu consulta. Te recomendamos no desplazarte a la sede sin cita previa confirmada.",
      },
      {
        question: "¿Cómo se confirma mi espacio en la agenda asistencial?",
        answer:
          "Una vez solicitas tu espacio a través de nuestro sitio web o por WhatsApp, el equipo verifica la disponibilidad y te comparte las condiciones vigentes para asegurar tu bloque en la agenda médica y asistencial.",
        relatedLink: {
          label: "Ir al formulario de agendamiento",
          href: "/agendar-cita",
        },
      },
      {
        question: "¿Dónde está ubicada la sede de HUMANOS en Cali?",
        answer:
          "Nuestra sede principal se encuentra en el norte de Cali, en la Av. 2D Norte #24N-85, Barrio El Piloto. Contamos con 5 estaciones funcionales con camilla, 2 consultorios independientes para subespecialidades y el área de acondicionamiento físico Activa.",
        relatedLink: {
          label: "Ver detalles de ubicación",
          href: "/contacto",
        },
      },
    ],
  },
  {
    id: "servicios-unidades",
    title: "3. Servicios y unidades del ecosistema",
    shortTitle: "Ecosistema",
    icon: Compass,
    color: "#006D82",
    textColor: "text-[#006D82]",
    badgeBg: "bg-primary/10",
    description: "Organización de las cuatro unidades y su complementariedad.",
    questions: [
      {
        question: "¿Por qué HUMANOS se organiza en cuatro unidades?",
        answer:
          "Para ofrecer una atención especializada y sin confusiones. HUMANOS Fisioterapia atiende dolor y recuperación clínica; HUMANOS Activa desarrolla fuerza y readaptación al ejercicio; HUMANOS Stretching Lab proporciona movilidad corporal asistida; y HUMANOS Academia capacita a profesionales del movimiento.",
        relatedLink: {
          label: "Explorar el ecosistema completo",
          href: "/ecosistema",
        },
      },
      {
        question: "¿Es obligatorio pasar por las cuatro unidades durante mi proceso?",
        answer:
          "No. El paso por las unidades es totalmente voluntario y depende de tus objetivos. Si consultas por dolor y tu meta se cumple en Fisioterapia, finalizas tu ciclo con recursos de autogestión sin obligación de continuar en otras áreas.",
      },
      {
        question: "¿Qué son los consultorios independientes de piso pélvico y drenaje linfático?",
        answer:
          "Son dos consultorios privados dentro de HUMANOS Fisioterapia acondicionados para brindar total privacidad, discreción y confort en subespecialidades que requieren un entorno íntimo.",
        relatedLink: {
          label: "Ver consultorios especializados",
          href: "/humanos-clinica#f14",
        },
      },
    ],
  },
  {
    id: "activa",
    title: "4. HUMANOS Activa",
    shortTitle: "Activa",
    icon: Dumbbell,
    color: "#0875D1",
    textColor: "text-[#0862AE]",
    badgeBg: "bg-[#0875D1]/10",
    description: "Readaptación funcional, fuerza y acondicionamiento físico guiado.",
    questions: [
      {
        question: "¿Debo venir remitido de fisioterapia para entrenar en Activa?",
        answer:
          "No es obligatorio. Puedes ingresar por remisión clínica o por iniciativa propia. En ambos casos realizamos una valoración funcional para evaluar tu punto de partida, movilidad y tolerancia antes de estructurar las cargas de trabajo.",
        relatedLink: {
          label: "Conocer HUMANOS Activa",
          href: "/humanos-activo",
        },
      },
      {
        question: "¿En qué se diferencia HUMANOS Activa de un gimnasio convencional?",
        answer:
          "En Activa no aplicamos rutinas estandarizadas. El plan se organiza alrededor de un objetivo funcional individual (como volver al deporte o ganar fuerza sin molestias), con supervisión profesional y progresión revisada en cada etapa.",
      },
      {
        question: "¿Qué equipamiento tiene la zona de Activa?",
        answer:
          "Contamos con un área independiente equipada con máquinas multifuerza, rack, bancos de fuerza, press de pecho y material específico para control motor y fuerza funcional.",
      },
    ],
  },
  {
    id: "stretching",
    title: "5. HUMANOS Stretching Lab",
    shortTitle: "Stretching Lab",
    icon: Sparkles,
    color: "#009BB5",
    textColor: "text-[#00687A]",
    badgeBg: "bg-[#009BB5]/10",
    description: "Movilidad corporal guiada y elongación articular asistida.",
    questions: [
      {
        question: "¿En qué se diferencia Stretching Lab de una descarga muscular?",
        answer:
          "La descarga muscular (F07) forma parte de Fisioterapia y es una atención manual sobre camilla orientada al confort y la modulación de tensión en músculos sobrecargados. Stretching Lab es una experiencia de movilidad asistida y activa en colchoneta y estación funcional para mejorar la amplitud articular y la postura.",
        relatedLink: {
          label: "Conocer Stretching Lab",
          href: "/stretching-lab",
        },
      },
      {
        question: "¿Debo ser una persona flexible para poder asistir?",
        answer:
          "No. El trabajo se adapta estrictamente al rango de movimiento que toleras con comodidad. No forzamos posturas dolorosas; buscamos que ganes movilidad de manera progresiva y controlada.",
      },
      {
        question: "¿Cómo es el espacio de Stretching Lab?",
        answer:
          "Dispone de 3 estaciones funcionales y una zona de piso con colchonetas para facilitar ejercicios guiados y trabajo asistido con el profesional.",
      },
    ],
  },
  {
    id: "academia",
    title: "6. HUMANOS Academia",
    shortTitle: "Academia",
    icon: GraduationCap,
    color: "#7771C7",
    textColor: "text-[#524CA8]",
    badgeBg: "bg-[#7771C7]/10",
    description: "Formación continua y actualización práctica en salud y movimiento.",
    questions: [
      {
        question: "¿A quiénes están dirigidas las actividades de HUMANOS Academia?",
        answer:
          "A fisioterapeutas titulados, estudiantes de últimos semestres, entrenadores físicos y profesionales de la salud, según los prerrequisitos y el perfil técnico de cada programa.",
        relatedLink: {
          label: "Ver programas de Academia",
          href: "/academia",
        },
      },
      {
        question: "¿Los cursos otorgan título habilitante o tarjeta profesional?",
        answer:
          "No. HUMANOS Academia ofrece educación continua para actualizar competencias técnicas y razonamiento clínico. Las constancias emitidas certifican las horas cursadas, pero no sustituyen títulos profesionales oficiales.",
      },
      {
        question: "¿Cómo puedo consultar fechas y requisitos de inscripción?",
        answer:
          "Puedes solicitar el programa de contenidos y verificar los requisitos de admisión escribiendo directamente a nuestro canal oficial de orientación y WhatsApp.",
        relatedLink: {
          label: "Solicitar información académica",
          href: "/contacto",
        },
      },
    ],
  },
]

export function FAQContent() {
  const [activeCategory, setActiveCategory] = useState<string>("primera-visita")

  const currentCategory = faqCategories.find((cat) => cat.id === activeCategory) ?? faqCategories[0]
  const Icon = currentCategory.icon

  return (
    <div className="relative overflow-hidden bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Category Pills Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {faqCategories.map((cat) => {
            const CatIcon = cat.icon
            const isActive = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/15 scale-102"
                    : "bg-slate-100 text-muted-foreground hover:bg-slate-200/80 hover:text-foreground"
                }`}
              >
                <CatIcon className="w-3.5 h-3.5" />
                <span>{cat.shortTitle}</span>
              </button>
            )
          })}
        </div>

        {/* Selected Category Header */}
        <div className="max-w-4xl mx-auto mb-8 text-center sm:text-left flex flex-col sm:flex-row items-center gap-4 p-6 rounded-3xl bg-slate-50 border border-border/80">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
            style={{ backgroundColor: `${currentCategory.color}15`, color: currentCategory.color }}
          >
            <Icon className="w-7 h-7" />
          </div>
          <div>
            <h2 className="font-heading text-xl sm:text-2xl font-black text-foreground">
              {currentCategory.title}
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
              {currentCategory.description}
            </p>
          </div>
        </div>

        {/* Accordion Questions */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
            {currentCategory.questions.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-2xl border border-border/70 bg-white px-6 py-2 shadow-xs transition-shadow data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="text-left font-heading text-base font-bold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pt-2 space-y-3">
                  <p>{faq.answer}</p>
                  {faq.relatedLink && (
                    <div className="pt-2">
                      <Link
                        href={faq.relatedLink.href}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                      >
                        {faq.relatedLink.label}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Help block: Still have questions? */}
        <div className="mt-16 max-w-4xl mx-auto rounded-3xl border border-border/80 bg-white p-8 text-center sm:text-left shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-lg font-black text-foreground">
              ¿Tienes una duda médica o de tu caso particular?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-xl">
              Las inquietudes clínicas específicas requieren revisión profesional. Escríbenos y con
              gusto te orientamos antes de tu cita.
            </p>
          </div>

          <Button asChild className="rounded-xl font-bold shrink-0">
            <a
              href="https://wa.me/573177995831?text=Hola%2C%20tengo%20una%20consulta%20sobre%20los%20servicios%20de%20HUMANOS."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Consultar por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

