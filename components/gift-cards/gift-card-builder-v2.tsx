"use client"

import { useMemo, useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import {
  BadgeCheck,
  CreditCard,
  Download,
  Gift,
  Lock,
  RefreshCw,
  Send,
  UserRound,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { GiftCardRecord } from "@/lib/gift-cards"

const giftOptions = [
  {
    label: "Consulta de valoracion",
    price: "$80.000 COP",
    detail: "Evaluacion inicial y orientacion del plan terapeutico.",
  },
  {
    label: "Sesion individual de fisioterapia",
    price: "$120.000 COP",
    detail: "Una sesion personalizada de fisioterapia integral.",
  },
  {
    label: "Pack de 3 sesiones",
    price: "$330.000 COP",
    detail: "Ideal para iniciar un proceso corto de recuperacion.",
  },
  {
    label: "Pack de 5 sesiones",
    price: "$520.000 COP",
    detail: "Continuidad terapeutica con seguimiento progresivo.",
  },
  {
    label: "Sesion Premium",
    price: "$180.000 COP",
    detail: "Sesion avanzada con mayor tiempo de atencion.",
  },
  {
    label: "Tratamiento completo",
    price: "$950.000 COP",
    detail: "Plan referencial para procesos de varias sesiones.",
  },
  {
    label: "Acondicionamiento fisico",
    price: "$280.000 COP",
    detail: "Programa base de fuerza, movilidad y resistencia.",
  },
  {
    label: "Bono abierto",
    price: "Desde $100.000 COP",
    detail: "Bono flexible para definir el servicio despues.",
  },
]

type GiftForm = {
  buyerName: string
  buyerPhone: string
  recipientName: string
  giftType: string
  message: string
  appointmentDate: string
  appointmentTime: string
}

const defaultForm: GiftForm = {
  buyerName: "",
  buyerPhone: "",
  recipientName: "",
  giftType: "Consulta de valoracion",
  message: "Un regalo para cuidar tu cuerpo, recuperar movimiento y sentirte mejor.",
  appointmentDate: "",
  appointmentTime: "",
}

function drawWrappedText(
  context: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
) {
  const words = text.split(" ")
  let line = ""
  let currentY = y

  for (const word of words) {
    const testLine = line ? `${line} ${word}` : word
    if (context.measureText(testLine).width > maxWidth && line) {
      context.fillText(line, x, currentY)
      line = word
      currentY += lineHeight
    } else {
      line = testLine
    }
  }

  if (line) {
    context.fillText(line, x, currentY)
  }
}

function roundedRect(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
) {
  context.beginPath()
  context.moveTo(x + radius, y)
  context.lineTo(x + width - radius, y)
  context.quadraticCurveTo(x + width, y, x + width, y + radius)
  context.lineTo(x + width, y + height - radius)
  context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
  context.lineTo(x + radius, y + height)
  context.quadraticCurveTo(x, y + height, x, y + height - radius)
  context.lineTo(x, y + radius)
  context.quadraticCurveTo(x, y, x + radius, y)
  context.closePath()
}

function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image()
    image.onload = () => resolve(image)
    image.onerror = reject
    image.src = src
  })
}

function formatDate(date?: string) {
  if (!date) return "Se asigna al crear"

  return new Intl.DateTimeFormat("es-CO", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date))
}

function getNextAvailableDates(count: number): { label: string; value: string }[] {
  const dates: { label: string; value: string }[] = []
  const today = new Date()
  
  let current = new Date(today)
  current.setDate(current.getDate() + 1) // Inicia mañana

  while (dates.length < count) {
    const dayOfWeek = current.getDay()
    if (dayOfWeek === 2 || dayOfWeek === 4 || dayOfWeek === 6) {
      const day = String(current.getDate()).padStart(2, "0")
      const month = String(current.getMonth() + 1).padStart(2, "0")
      const year = current.getFullYear()
      const apiValue = `${day}/${month}/${year}`

      const label = new Intl.DateTimeFormat("es-CO", {
        weekday: "long",
        day: "2-digit",
        month: "short",
      }).format(current)
      
      const capitalizedLabel = label.charAt(0).toUpperCase() + label.slice(1)
      dates.push({ label: capitalizedLabel, value: apiValue })
    }
    current.setDate(current.getDate() + 1)
  }
  return dates
}

export function GiftCardBuilderV2() {
  const [form, setForm] = useState<GiftForm>(defaultForm)
  const [giftCard, setGiftCard] = useState<GiftCardRecord | null>(null)
  const [isCreating, setIsCreating] = useState(false)
  const [isChecking, setIsChecking] = useState(false)
  const [statusMessage, setStatusMessage] = useState("")

  const searchParams = useSearchParams()
  const urlId = searchParams.get("id")
  const urlStatus = searchParams.get("status")

  const availableDates = useMemo(() => getNextAvailableDates(6), [])
  const [availableSlots, setAvailableSlots] = useState<string[]>([])
  const [isLoadingSlots, setIsLoadingSlots] = useState(false)
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null)

  useEffect(() => {
    if (urlId) {
      const fetchCard = async () => {
        try {
          const response = await fetch(`/api/gift-cards/status?id=${encodeURIComponent(urlId)}`, {
            cache: "no-store",
          })
          if (response.ok) {
            const data = await response.json()
            setGiftCard(data.giftCard)
            setCheckoutUrl(data.checkoutUrl)
            setForm({
              buyerName: data.giftCard.buyerName,
              buyerPhone: data.giftCard.buyerPhone,
              recipientName: data.giftCard.recipientName,
              giftType: data.giftCard.giftType,
              message: data.giftCard.message,
              appointmentDate: data.giftCard.appointmentDate || "",
              appointmentTime: data.giftCard.appointmentTime || "",
            })
            if (urlStatus === "success") {
              setStatusMessage("¡Pago aprobado con éxito! Ya puedes descargar tu tarjeta activa abajo.")
            } else if (urlStatus === "failure") {
              setStatusMessage("El pago no pudo completarse. Por favor, intenta de nuevo.")
            } else if (urlStatus === "pending") {
              setStatusMessage("Tu pago está siendo procesado. La tarjeta se activará pronto.")
            }
          }
        } catch (error) {
          console.error("Error loading card from URL:", error)
        }
      }
      fetchCard()
    }
  }, [urlId, urlStatus])

  const handleDateChange = async (dateVal: string) => {
    updateField("appointmentDate", dateVal)
    updateField("appointmentTime", "")
    setAvailableSlots([])

    if (!dateVal) return

    setIsLoadingSlots(true)
    try {
      const res = await fetch(`/api/gift-cards/slots?date=${encodeURIComponent(dateVal)}`, {
        cache: "no-store",
      })
      if (res.ok) {
        const data = await res.json()
        setAvailableSlots(data.slots || [])
      } else {
        console.error("Failed to fetch slots")
      }
    } catch (error) {
      console.error("Error fetching slots:", error)
    } finally {
      setIsLoadingSlots(false)
    }
  }

  const recipient = form.recipientName.trim() || "Nombre del regalo"
  const buyer = form.buyerName.trim() || "Humanos Rehab"
  const buyerPhone = form.buyerPhone.trim()
  const giftType = form.giftType || "Bono de regalo"
  const selectedGift = giftOptions.find((option) => option.label === giftType) || giftOptions[0]
  const amount = selectedGift.price
  const message = form.message.trim() || defaultForm.message
  const cardId = giftCard?.id ?? "Pendiente de pago"
  const expiresAt = formatDate(giftCard?.expiresAt)
  const isPaymentApproved = giftCard?.paymentStatus === "approved" && giftCard.cardStatus === "active"

  const isFormComplete = Boolean(
    form.buyerName.trim() &&
    form.buyerPhone.trim() &&
    form.recipientName.trim() &&
    form.giftType.trim() &&
    form.appointmentDate.trim() &&
    form.appointmentTime.trim()
  )

  const updateField = (field: keyof GiftForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
    setStatusMessage("")
    if (giftCard) {
      setGiftCard(null)
    }
  }

  const createGiftCardRequest = async () => {
    setIsCreating(true)
    setStatusMessage("")

    try {
      const response = await fetch("/api/gift-cards/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          buyerName: buyer,
          buyerPhone,
          recipientName: recipient,
          giftType,
          amount,
          message,
          appointmentDate: form.appointmentDate || undefined,
          appointmentTime: form.appointmentTime || undefined,
        }),
      })
      const data = await response.json()

      if (!response.ok) {
        setStatusMessage(data.error || "No se pudo crear la tarjeta.")
        return
      }

      setGiftCard(data.giftCard)
      setCheckoutUrl(data.checkoutUrl)
      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl
      } else {
        setStatusMessage("Tarjeta creada. La descarga se habilita cuando Mercado Pago apruebe el pago.")
      }
    } catch {
      setStatusMessage("No se pudo crear la tarjeta. Intenta de nuevo.")
    } finally {
      setIsCreating(false)
    }
  }

  const checkPaymentStatus = async () => {
    if (!giftCard?.id) return

    setIsChecking(true)
    setStatusMessage("")

    try {
      const response = await fetch(`/api/gift-cards/status?id=${encodeURIComponent(giftCard.id)}`, {
        cache: "no-store",
      })
      const data = await response.json()

      if (!response.ok) {
        setStatusMessage(data.error || "No se pudo revisar el pago.")
        return
      }

      setGiftCard(data.giftCard)
      setCheckoutUrl(data.checkoutUrl)
      setStatusMessage(
        data.giftCard.paymentStatus === "approved"
          ? "Pago aprobado. Ya puedes descargar la tarjeta activa."
          : "El pago aun aparece pendiente.",
      )
    } catch {
      setStatusMessage("No se pudo revisar el estado del pago.")
    } finally {
      setIsChecking(false)
    }
  }

  const downloadGiftCard = async () => {
    if (!isPaymentApproved) {
      setStatusMessage("Primero debe aprobarse el pago para descargar la tarjeta activa.")
      return
    }

    const canvas = document.createElement("canvas")
    const scale = 2
    canvas.width = 1400 * scale
    canvas.height = 900 * scale
    const context = canvas.getContext("2d")

    if (!context) return

    context.scale(scale, scale)

    const dateVal = giftCard?.appointmentDate || form.appointmentDate
    const timeVal = giftCard?.appointmentTime || form.appointmentTime

    const gradient = context.createLinearGradient(0, 0, 1400, 900)
    gradient.addColorStop(0, "#f8fbff")
    gradient.addColorStop(0.46, "#ffffff")
    gradient.addColorStop(1, "#e9f4ff")
    context.fillStyle = gradient
    context.fillRect(0, 0, 1400, 900)

    context.strokeStyle = "rgba(22, 103, 183, 0.10)"
    context.lineWidth = 1
    for (let x = 0; x < 1400; x += 60) {
      context.beginPath()
      context.moveTo(x, 0)
      context.lineTo(x, 900)
      context.stroke()
    }
    for (let y = 0; y < 900; y += 60) {
      context.beginPath()
      context.moveTo(0, y)
      context.lineTo(1400, y)
      context.stroke()
    }

    context.fillStyle = "rgba(7, 43, 79, 0.10)"
    roundedRect(context, 78, 84, 1260, 760, 44)
    context.fill()

    context.fillStyle = "#082E52"
    roundedRect(context, 70, 70, 1260, 760, 46)
    context.fill()

    const cardGradient = context.createLinearGradient(90, 90, 1310, 810)
    cardGradient.addColorStop(0, "#ffffff")
    cardGradient.addColorStop(0.56, "#fbfdff")
    cardGradient.addColorStop(1, "#eaf5ff")
    context.fillStyle = cardGradient
    roundedRect(context, 92, 92, 1216, 716, 36)
    context.fill()

    context.strokeStyle = "rgba(219, 171, 87, 0.60)"
    context.lineWidth = 2
    roundedRect(context, 116, 116, 1168, 668, 28)
    context.stroke()

    context.fillStyle = "rgba(22, 103, 183, 0.09)"
    context.beginPath()
    context.arc(1165, 185, 210, 0, Math.PI * 2)
    context.fill()
    context.fillStyle = "rgba(219, 171, 87, 0.14)"
    context.beginPath()
    context.arc(1120, 710, 155, 0, Math.PI * 2)
    context.fill()
    context.fillStyle = "rgba(230, 57, 70, 0.08)"
    context.beginPath()
    context.arc(1005, 640, 95, 0, Math.PI * 2)
    context.fill()

    try {
      const logo = await loadImage("/logo_azul.png")
      context.drawImage(logo, 110, 118, 210, 70)
    } catch {
      context.fillStyle = "#072B4F"
      context.font = "700 34px Arial"
      context.fillText("Humanos Rehab", 110, 160)
    }

    context.fillStyle = "#E63946"
    roundedRect(context, 112, 224, 182, 42, 21)
    context.fill()
    context.fillStyle = "#ffffff"
    context.font = "800 17px Arial"
    context.fillText("GIFT CARD", 146, 251)

    context.fillStyle = "#17212f"
    context.font = "900 68px Arial"
    drawWrappedText(context, "Un regalo para moverse mejor", 112, 352, 665, 76)

    context.fillStyle = "#DBAB57"
    roundedRect(context, 114, 495, 116, 6, 3)
    context.fill()

    context.fillStyle = "#5d6978"
    context.font = "500 28px Arial"
    drawWrappedText(context, message, 112, 560, 690, 40)

    context.fillStyle = "rgba(7, 43, 79, 0.08)"
    roundedRect(context, 848, 218, 400, 440, 30)
    context.fill()
    context.fillStyle = "#ffffff"
    roundedRect(context, 835, 205, 400, 440, 30)
    context.fill()
    context.strokeStyle = "rgba(7, 43, 79, 0.12)"
    context.lineWidth = 1
    context.stroke()
    context.fillStyle = "#082E52"
    roundedRect(context, 835, 205, 400, 74, 30)
    context.fill()
    context.fillRect(835, 249, 400, 38)

    context.fillStyle = "#ffffff"
    context.font = "800 20px Arial"
    context.fillText("Para", 885, 253)
    context.font = "900 40px Arial"
    context.fillStyle = "#082E52"
    drawWrappedText(context, recipient, 885, 350, 300, 48)

    context.fillStyle = "#1667B7"
    context.font = "800 26px Arial"
    drawWrappedText(context, giftType, 885, 505, 300, 34)

    context.fillStyle = "rgba(219, 171, 87, 0.18)"
    roundedRect(context, 875, 575, 310, 44, 22)
    context.fill()
    context.fillStyle = "#072B4F"
    context.font = "800 16px Arial"
    context.fillText(cardId, 920, 602)

    context.fillStyle = "#5d6978"
    context.font = "700 16px Arial"
    context.fillText(`Vence: ${expiresAt}`, 910, 635)

    context.fillStyle = "#072B4F"
    context.font = "700 22px Arial"
    context.fillText(`De parte de: ${buyer}`, 110, 690)

    if (dateVal && timeVal) {
      context.fillStyle = "#1667B7"
      context.font = "900 22px Arial"
      context.fillText(`Cita programada: ${dateVal} a las ${timeVal}`, 110, 728)

      context.fillStyle = "#5d6978"
      context.font = "500 20px Arial"
      context.fillText("humanosrehab.com | WhatsApp +1 (555) 646-5891", 110, 768)
    } else {
      context.fillStyle = "#5d6978"
      context.font = "500 20px Arial"
      context.fillText("humanosrehab.com | WhatsApp +1 (555) 646-5891", 110, 735)
    }

    const link = document.createElement("a")
    link.href = canvas.toDataURL("image/png")
    link.download = `tarjeta-regalo-humanos-${recipient.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.png`
    link.click()
  }

  return (
    <section className="border-b border-border/50 bg-transparent py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="rounded-lg border border-border/70 bg-white p-5 shadow-premium sm:p-6 lg:p-8">
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Gift className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-extrabold uppercase text-primary">Crear bono</p>
              <h2 className="font-heading text-2xl font-black text-foreground">Tarjeta de regalo</h2>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="grid gap-2">
              <Label htmlFor="buyerName" className="text-sm font-extrabold text-foreground">
                Tu nombre
              </Label>
              <Input
                id="buyerName"
                value={form.buyerName}
                onChange={(event) => updateField("buyerName", event.target.value)}
                placeholder="Ej. Carolina Gomez"
                className="h-12 rounded-xl bg-white"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="buyerPhone" className="text-sm font-extrabold text-foreground">
                WhatsApp para confirmar la compra
              </Label>
              <Input
                id="buyerPhone"
                value={form.buyerPhone}
                onChange={(event) => updateField("buyerPhone", event.target.value)}
                placeholder="Ej. +57 300 000 0000"
                className="h-12 rounded-xl bg-white"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="recipientName" className="text-sm font-extrabold text-foreground">
                Nombre de la persona especial
              </Label>
              <Input
                id="recipientName"
                value={form.recipientName}
                onChange={(event) => updateField("recipientName", event.target.value)}
                placeholder="Ej. Andres"
                className="h-12 rounded-xl bg-white"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="giftType" className="text-sm font-extrabold text-foreground">
                Elige el regalo
              </Label>
              <select
                id="giftType"
                value={form.giftType}
                onChange={(event) => updateField("giftType", event.target.value)}
                className="h-12 w-full min-w-0 rounded-xl border border-input bg-white px-3 text-sm font-medium text-foreground shadow-xs outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
              >
                {giftOptions.map((option) => (
                  <option key={option.label} value={option.label}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="rounded-xl border border-primary/15 bg-primary/5 p-4">
              <p className="text-xs font-extrabold uppercase text-primary">Valor referencial</p>
              <p className="mt-1 font-heading text-2xl font-black text-foreground">{amount}</p>
              <p className="mt-2 text-xs font-semibold leading-relaxed text-muted-foreground">
                {selectedGift.detail}
              </p>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="appointmentDate" className="text-sm font-extrabold text-foreground">
                Elige la fecha de tu cita (Martes, Jueves o Sábados)
              </Label>
              <select
                id="appointmentDate"
                value={form.appointmentDate}
                onChange={(event) => handleDateChange(event.target.value)}
                className="h-12 w-full min-w-0 rounded-xl border border-input bg-white px-3 text-sm font-medium text-foreground shadow-xs outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15 cursor-pointer"
              >
                <option value="">-- Selecciona un día --</option>
                {availableDates.map((d) => (
                  <option key={d.value} value={d.value}>
                    {d.label}
                  </option>
                ))}
              </select>
            </div>

            {form.appointmentDate ? (
              <div className="grid gap-2">
                <Label htmlFor="appointmentTime" className="text-sm font-extrabold text-foreground">
                  Elige la hora de tu cita
                </Label>
                {isLoadingSlots ? (
                  <div className="flex h-12 items-center gap-2 px-3 text-sm font-semibold text-muted-foreground">
                    <RefreshCw className="h-4 w-4 animate-spin text-primary" />
                    Consultando horarios disponibles...
                  </div>
                ) : (
                  <select
                    id="appointmentTime"
                    value={form.appointmentTime}
                    onChange={(event) => updateField("appointmentTime", event.target.value)}
                    className="h-12 w-full min-w-0 rounded-xl border border-input bg-white px-3 text-sm font-medium text-foreground shadow-xs outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15 cursor-pointer"
                  >
                    <option value="">-- Selecciona una hora --</option>
                    {availableSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                    {!isLoadingSlots && availableSlots.length === 0 ? (
                      <option value="" disabled>No hay horarios disponibles para este día</option>
                    ) : null}
                  </select>
                )}
              </div>
            ) : null}

            <div className="grid gap-2">
              <Label htmlFor="message" className="text-sm font-extrabold text-foreground">
                Mensaje corto
              </Label>
              <Textarea
                id="message"
                value={form.message}
                onChange={(event) => updateField("message", event.target.value)}
                rows={4}
                className="min-h-28 rounded-xl bg-white"
              />
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="relative overflow-hidden rounded-lg border border-border/70 bg-white p-5 shadow-premium sm:p-6 lg:p-8">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#1667B7]/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-44 w-44 rounded-full bg-[#E63946]/10 blur-3xl" />

            <div className="relative aspect-[1.55] overflow-hidden rounded-lg border-[8px] border-primary bg-white shadow-2xl shadow-primary/20">
              <div className="absolute inset-3 z-10 rounded-md border border-[#DBAB57]/50" />
              <div className="absolute inset-0 bg-grid-pattern opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-br from-white via-[#fbfdff] to-[#eaf5ff]" />
              <div className="absolute -right-14 -top-16 h-60 w-60 rounded-full bg-[#1667B7]/10" />
              <div className="absolute -bottom-20 right-20 h-52 w-52 rounded-full bg-[#DBAB57]/20" />
              <div className="absolute bottom-12 right-8 h-24 w-24 rounded-full bg-[#E63946]/10" />

              <div className="relative z-20 flex h-full flex-col justify-between p-5 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <img src="/logo_azul.png" alt="Humanos Rehab" className="h-12 w-auto sm:h-14" />
                  <span className="rounded-full bg-[#E63946] px-3 py-1 text-[10px] font-black uppercase tracking-wide text-white sm:text-xs">
                    Gift Card
                  </span>
                </div>

                <div className="max-w-[64%] -translate-y-1">
                  <p className="text-xs font-extrabold uppercase text-primary">Para</p>
                  <h3 className="mt-1 break-words font-heading text-2xl font-black leading-tight text-foreground sm:text-4xl">
                    {recipient}
                  </h3>
                  <div className="mt-3 h-1.5 w-16 rounded-full bg-[#DBAB57]" />
                  <p className="mt-4 break-words text-xs font-semibold leading-relaxed text-muted-foreground sm:text-sm">
                    {message}
                  </p>
                </div>

                <div className="grid -translate-y-3 gap-2 sm:grid-cols-[1fr_auto] sm:items-end">
                  <div>
                    <p className="text-xs font-extrabold uppercase text-primary">Regalo</p>
                    <p className="mt-1 break-words font-heading text-base font-black leading-tight text-foreground sm:text-xl">
                      {giftType}
                    </p>
                    <p className="mt-1 text-xs font-bold text-muted-foreground">De parte de: {buyer}</p>
                    {form.appointmentDate && form.appointmentTime ? (
                      <p className="mt-1 text-xs font-black text-primary">
                        Cita: {form.appointmentDate} a las {form.appointmentTime}
                      </p>
                    ) : null}
                  </div>
                  <div className="rounded-lg border border-[#DBAB57]/50 bg-primary px-4 py-3 text-white shadow-lg shadow-primary/20 sm:min-w-48">
                    <p className="text-[10px] font-bold uppercase text-[#DBAB57]">ID / vence</p>
                    <p className="max-w-44 break-words text-xs font-black sm:text-sm">{cardId}</p>
                    <p className="mt-1 text-[10px] font-bold text-white/80">{expiresAt}</p>
                  </div>
                </div>
              </div>
            </div>

            {giftCard && giftCard.paymentStatus !== "approved" && checkoutUrl ? (
              <div className="relative mt-5 rounded-lg border border-[#009EE3]/15 bg-[#009EE3]/5 p-4 animate-fade-in-up">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-extrabold uppercase text-[#009EE3]">Pago Pendiente</p>
                    <p className="font-heading text-2xl font-black text-foreground">{amount}</p>
                    <p className="mt-1 text-xs font-semibold text-muted-foreground">
                      Tu solicitud de tarjeta está registrada. Págala para activarla.
                    </p>
                  </div>
                  <Button
                    asChild
                    className="h-12 rounded-xl bg-[#009EE3] hover:bg-[#008FC7] font-bold text-white shadow-lg cursor-pointer"
                  >
                    <a href={checkoutUrl} target="_self" className="flex items-center justify-center gap-2">
                      <CreditCard className="h-4 w-4" />
                      Pagar con Mercado Pago
                    </a>
                  </Button>
                </div>
              </div>
            ) : !giftCard ? (
              <div className="relative mt-5 rounded-lg border border-primary/15 bg-primary/5 p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-extrabold uppercase text-primary">Total a pagar</p>
                    <p className="font-heading text-2xl font-black text-foreground">{amount}</p>
                    <p className="mt-1 text-xs font-semibold text-muted-foreground">
                      El valor no aparece en la tarjeta descargada.
                    </p>
                  </div>
                  <Button
                    type="button"
                    onClick={createGiftCardRequest}
                    disabled={!isFormComplete || isCreating}
                    className="h-12 rounded-xl bg-[#E63946] font-bold hover:bg-[#d92f3d] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <CreditCard className="h-4 w-4" />
                    {isCreating ? "Procesando..." : "Proceder al Pago"}
                  </Button>
                </div>
              </div>
            ) : null}

            <div className="relative mt-5 rounded-lg border border-border/70 bg-white p-4">
              <div className="grid gap-3 sm:grid-cols-3">
                <div>
                  <p className="text-[10px] font-extrabold uppercase text-muted-foreground">ID</p>
                  <p className="break-words text-sm font-black text-foreground">{cardId}</p>
                </div>
                <div>
                  <p className="text-[10px] font-extrabold uppercase text-muted-foreground">Pago</p>
                  <p className="text-sm font-black text-foreground">
                    {giftCard?.paymentStatus === "approved" ? "Aprobado" : "Pendiente"}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-extrabold uppercase text-muted-foreground">Vence</p>
                  <p className="text-sm font-black text-foreground">{expiresAt}</p>
                </div>
              </div>
              {statusMessage ? (
                <p className="mt-3 text-xs font-bold leading-relaxed text-muted-foreground">{statusMessage}</p>
              ) : null}
            </div>

            <div className="relative mt-5 grid gap-3 sm:grid-cols-2">
              <Button
                type="button"
                onClick={downloadGiftCard}
                disabled={!isPaymentApproved}
                className="h-12 rounded-xl font-bold"
              >
                {isPaymentApproved ? <Download className="h-4 w-4" /> : <Lock className="h-4 w-4" />}
                {isPaymentApproved ? "Descargar tarjeta" : "Descarga bloqueada"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={checkPaymentStatus}
                disabled={!giftCard || isChecking}
                className="h-12 rounded-xl font-bold"
              >
                <RefreshCw className="h-4 w-4" />
                {isChecking ? "Revisando..." : "Revisar pago"}
              </Button>
            </div>

          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { icon: UserRound, title: "Personalizada", text: "Nombre, regalo y mensaje." },
              { icon: Lock, title: "Activacion", text: "Descarga solo con pago aprobado." },
              { icon: Send, title: "Notificacion", text: "Avisos listos para comprador y equipo." },
            ].map((item) => {
              const Icon = item.icon

              return (
                <div key={item.title} className="rounded-lg border border-border/70 bg-white p-4 shadow-sm">
                  <Icon className="h-5 w-5 text-primary" />
                  <p className="mt-3 font-heading text-sm font-black text-foreground">{item.title}</p>
                  <p className="mt-1 text-xs font-semibold leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="flex items-start gap-3 rounded-lg border border-amber-500/25 bg-amber-500/10 p-4 text-sm font-semibold leading-6 text-foreground">
            <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
            La tarjeta queda inactiva hasta que Mercado Pago confirme el pago. Al aprobarse, se activan las notificaciones para el comprador y el equipo.
          </div>
        </div>
      </div>
    </section>
  )
}
