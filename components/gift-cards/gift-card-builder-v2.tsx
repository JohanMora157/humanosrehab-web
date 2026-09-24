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
    label: "Consulta de Valoracion",
    price: "$65.000 COP",
    detail: "Evaluación inicial y orientación del plan terapéutico.",
  },
  {
    label: "Consulta Online",
    price: "$125.000 COP",
    detail: "Atención y orientación fisioterapéutica remota personalizada.",
  },
  {
    label: "Sesion individual de Fisioterapia",
    price: "$100.000 COP",
    detail: "Una sesión personalizada de fisioterapia integral.",
  },
  {
    label: "Sesion Premium de Fisioterapia",
    price: "$210.000 COP",
    detail: "Sesión avanzada con mayor tiempo de atención especializada.",
  },
  {
    label: "Pack de 3 sesiones de fisioterapia",
    price: "$210.000 COP",
    detail: "Programa de 3 sesiones enfocado en alivio y recuperación corta.",
  },
  {
    label: "Pack de 5 sesiones de fisioterapia",
    price: "$315.000 COP",
    detail: "Programa terapéutico de 5 sesiones con seguimiento continuo.",
  },
  {
    label: "Pack de 10 sesiones de fisioterapia",
    price: "$590.000 COP",
    detail: "Plan intensivo de 10 sesiones para rehabilitación integral.",
  },
  {
    label: "Sesion de Sueroterapia",
    price: "$210.000 COP",
    detail: "Terapia de suero de soporte para hidratación y recuperación.",
  },
  {
    label: "Pack de Sueroterapia",
    price: "$630.000 COP",
    detail: "Programa de sueroterapia de varias sesiones de alta efectividad.",
  },
  {
    label: "Masaje descontracturante",
    price: "$200.000 COP",
    detail: "Masaje focalizado para liberar tensión muscular acumulada.",
  },
  {
    label: "Descarga muscular completa",
    price: "$210.000 COP",
    detail: "Terapia profunda para descarga y relajación muscular total.",
  },
]

type GiftForm = {
  buyerName: string
  buyerPhone: string
  recipientName: string
  recipientPhone: string
  giftType: string
  message: string
  appointmentDate: string
  appointmentTime: string
}

const defaultForm: GiftForm = {
  buyerName: "",
  buyerPhone: "",
  recipientName: "",
  recipientPhone: "",
  giftType: "Consulta de Valoracion",
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

const countryPrefixes = ["507", "593", "57", "1", "34", "52", "54", "56", "58", "51"]

function splitPhone(fullPhone: string): { prefix: string; number: string } {
  const clean = fullPhone.replace(/[^\d]/g, "")
  for (const prefix of countryPrefixes) {
    if (clean.startsWith(prefix)) {
      return { prefix, number: clean.slice(prefix.length) }
    }
  }
  return { prefix: "57", number: clean }
}

export function GiftCardBuilderV2() {
  const [form, setForm] = useState<GiftForm>(defaultForm)
  const [buyerPrefix, setBuyerPrefix] = useState("57")
  const [recipientPrefix, setRecipientPrefix] = useState("57")
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
            
            const parsedBuyer = splitPhone(data.giftCard.buyerPhone)
            const parsedRecipient = splitPhone(data.giftCard.recipientPhone || "")
            setBuyerPrefix(parsedBuyer.prefix)
            setRecipientPrefix(parsedRecipient.prefix)

            setForm({
              buyerName: data.giftCard.buyerName,
              buyerPhone: parsedBuyer.number,
              recipientName: data.giftCard.recipientName,
              recipientPhone: parsedRecipient.number,
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
  const buyerPhone = `${buyerPrefix}${form.buyerPhone.replace(/[^\d]/g, "").trim()}`
  const recipientPhone = `${recipientPrefix}${form.recipientPhone.replace(/[^\d]/g, "").trim()}`
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
    form.recipientPhone.trim() &&
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
          recipientPhone,
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
        window.open(data.checkoutUrl, "_blank")
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

    // 1. Draw beautiful clean gradient matching the HTML preview
    const gradient = context.createLinearGradient(0, 0, 1400, 900)
    gradient.addColorStop(0, "#ffffff")
    gradient.addColorStop(0.56, "#fbfdff")
    gradient.addColorStop(1, "#eaf5ff")
    context.fillStyle = gradient
    context.fillRect(0, 0, 1400, 900)

    // 2. Draw grid pattern (subtle 25% opacity blue lines)
    context.strokeStyle = "rgba(22, 103, 183, 0.25)"
    context.lineWidth = 1
    for (let x = 0; x < 1400; x += 50) {
      context.beginPath()
      context.moveTo(x, 0)
      context.lineTo(x, 900)
      context.stroke()
    }
    for (let y = 0; y < 900; y += 50) {
      context.beginPath()
      context.moveTo(0, y)
      context.lineTo(1400, y)
      context.stroke()
    }

    // 3. Draw background bubbles
    context.fillStyle = "rgba(22, 103, 183, 0.08)"
    context.beginPath()
    context.arc(1200, 150, 220, 0, Math.PI * 2)
    context.fill()

    context.fillStyle = "rgba(219, 171, 87, 0.14)"
    context.beginPath()
    context.arc(1050, 750, 180, 0, Math.PI * 2)
    context.fill()

    context.fillStyle = "rgba(230, 57, 70, 0.06)"
    context.beginPath()
    context.arc(950, 620, 100, 0, Math.PI * 2)
    context.fill()

    // 4. Draw outer gold border
    context.strokeStyle = "rgba(219, 171, 87, 0.50)"
    context.lineWidth = 3
    roundedRect(context, 40, 40, 1320, 820, 36)
    context.stroke()

    // 5. Draw logo (larger)
    try {
      const logo = await loadImage("/logo_azul.png")
      context.drawImage(logo, 100, 80, 340, 113)
    } catch {
      context.fillStyle = "#082E52"
      context.font = "700 36px Arial"
      context.fillText("Humanos Rehab", 100, 150)
    }

    // 6. Draw red "GIFT CARD" badge on the right
    context.fillStyle = "#E63946"
    roundedRect(context, 1090, 105, 210, 54, 27)
    context.fill()
    
    context.fillStyle = "#ffffff"
    context.font = "900 18px Arial"
    context.textAlign = "center"
    context.fillText("GIFT CARD", 1195, 138)
    context.textAlign = "left" // Reset text align to default

    // 7. Draw "Para" section
    context.fillStyle = "#1667B7"
    context.font = "800 24px Arial"
    context.fillText("PARA", 100, 260)

    // 8. Draw Recipient name
    context.fillStyle = "#17212f"
    context.font = "900 52px Arial"
    drawWrappedText(context, recipient, 100, 330, 720, 60)

    // 9. Draw gold separator line
    context.fillStyle = "#DBAB57"
    roundedRect(context, 100, 385, 120, 8, 4)
    context.fill()

    // 10. Draw Message
    context.fillStyle = "#5d6978"
    context.font = "500 28px Arial"
    drawWrappedText(context, message, 100, 445, 720, 42)

    // 11. Draw "Regalo" section
    context.fillStyle = "#1667B7"
    context.font = "800 22px Arial"
    context.fillText("REGALO", 100, 620)

    // 12. Draw Gift service type
    context.fillStyle = "#17212f"
    context.font = "900 36px Arial"
    drawWrappedText(context, giftType, 100, 670, 720, 46)

    // 13. Draw Buyer
    context.fillStyle = "#5d6978"
    context.font = "700 24px Arial"
    context.fillText(`De parte de: ${buyer}`, 100, 715)

    // 14. Draw Cita if scheduled
    let finalFooterY = 770
    if (dateVal && timeVal) {
      context.fillStyle = "#1667B7"
      context.font = "900 24px Arial"
      context.fillText(`Cita programada: ${dateVal} a las ${timeVal}`, 100, 755)
      finalFooterY = 805
    }

    // 15. Draw Footer (Social media details with new format)
    context.fillStyle = "#5d6978"
    context.font = "700 16px Arial"
    context.fillText("humanosrehab.com  |  WhatsApp: +57 317 799 5831  |  Instagram/TikTok: @humanosrehab", 100, finalFooterY)

    // 16. Draw Blue Badge (ID / Vence) shifted and resized to avoid overlap and contain ID text
    context.fillStyle = "#082E52"
    roundedRect(context, 860, 530, 430, 190, 20)
    context.fill()

    context.strokeStyle = "rgba(219, 171, 87, 0.50)"
    context.lineWidth = 2
    roundedRect(context, 860, 530, 430, 190, 20)
    context.stroke()

    // ID / Vence text inside the badge
    context.fillStyle = "#DBAB57"
    context.font = "800 20px Arial"
    context.fillText("ID / VENCE", 900, 580)

    context.fillStyle = "#ffffff"
    context.font = "900 32px Arial"
    context.fillText(cardId, 900, 638)

    context.fillStyle = "rgba(255, 255, 255, 0.8)"
    context.font = "700 22px Arial"
    context.fillText(`Vence: ${expiresAt}`, 900, 685)

    const link = document.createElement("a")
    link.href = canvas.toDataURL("image/png")
    link.download = `tarjeta-regalo-humanos-${recipient.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.png`
    link.click()
  }

  return (
    <section className="border-b border-border/50 bg-transparent py-16 lg:py-24">
      <div className={`mx-auto grid gap-8 px-4 sm:px-6 lg:px-8 ${isPaymentApproved ? 'grid-cols-1 max-w-2xl' : 'max-w-7xl lg:grid-cols-[0.9fr_1.1fr]'}`}>
        {!isPaymentApproved ? (
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
              <div className="flex gap-2">
                <select
                  value={buyerPrefix}
                  onChange={(e) => setBuyerPrefix(e.target.value)}
                  className="h-12 rounded-xl bg-white border border-border px-3 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="57">+57 (Col)</option>
                  <option value="1">+1 (USA/Can)</option>
                  <option value="34">+34 (Esp)</option>
                  <option value="52">+52 (Mex)</option>
                  <option value="54">+54 (Arg)</option>
                  <option value="56">+56 (Chl)</option>
                  <option value="58">+58 (Ven)</option>
                  <option value="507">+507 (Pan)</option>
                  <option value="51">+51 (Per)</option>
                  <option value="593">+593 (Ecu)</option>
                </select>
                <Input
                  id="buyerPhone"
                  value={form.buyerPhone}
                  onChange={(event) => updateField("buyerPhone", event.target.value)}
                  placeholder="Ej. 300 000 0000"
                  className="h-12 rounded-xl bg-white flex-1"
                />
              </div>
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
              <Label htmlFor="recipientPhone" className="text-sm font-extrabold text-foreground">
                WhatsApp de la persona especial (para enviarle la tarjeta)
              </Label>
              <div className="flex gap-2">
                <select
                  value={recipientPrefix}
                  onChange={(e) => setRecipientPrefix(e.target.value)}
                  className="h-12 rounded-xl bg-white border border-border px-3 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="57">+57 (Col)</option>
                  <option value="1">+1 (USA/Can)</option>
                  <option value="34">+34 (Esp)</option>
                  <option value="52">+52 (Mex)</option>
                  <option value="54">+54 (Arg)</option>
                  <option value="56">+56 (Chl)</option>
                  <option value="58">+58 (Ven)</option>
                  <option value="507">+507 (Pan)</option>
                  <option value="51">+51 (Per)</option>
                  <option value="593">+593 (Ecu)</option>
                </select>
                <Input
                  id="recipientPhone"
                  value={form.recipientPhone}
                  onChange={(event) => updateField("recipientPhone", event.target.value)}
                  placeholder="Ej. 300 000 0000"
                  className="h-12 rounded-xl bg-white flex-1"
                />
              </div>
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

            <div className="rounded-xl border border-primary/10 bg-primary/5 p-4 text-xs font-semibold leading-relaxed text-muted-foreground mt-2">
              ℹ️ Una vez realizado el pago, la tarjeta de regalo le llegará automáticamente por WhatsApp tanto al comprador como a la persona que recibe el regalo.
            </div>
          </div>
        </div>
        ) : null}

        <div className="space-y-5">
          {isPaymentApproved ? (
            <div className="text-center mb-6 animate-fade-in-up">
              <p className="text-xs font-black uppercase tracking-widest text-[#E63946]">Bono de Bienestar</p>
              <h2 className="mt-1 font-heading text-3xl font-black text-foreground">¡Tienes una Tarjeta de Regalo!</h2>
              <p className="mt-2 text-sm font-semibold text-muted-foreground">
                Descárgala a continuación para guardarla o presentarla en tu cita.
              </p>
            </div>
          ) : null}
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
                    <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
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

            {!isPaymentApproved ? (
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
            ) : null}

            {isPaymentApproved ? (
              <div className="relative mt-5">
                <Button
                  type="button"
                  onClick={downloadGiftCard}
                  className="h-12 w-full rounded-xl bg-primary hover:bg-primary/95 text-white font-bold flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <Download className="h-4 w-4" />
                  Descargar tarjeta
                </Button>
              </div>
            ) : (
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
            )}

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
