"use client"

import { useMemo, useState } from "react"
import { BadgeCheck, CreditCard, Download, Gift, MessageCircle, Send, UserRound } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const giftOptions = [
  {
    label: "Consulta de Valoración",
    price: "$65.000 COP",
    detail: "Evaluación inicial y orientación del plan terapéutico.",
  },
  {
    label: "Consulta Online",
    price: "$125.000 COP",
    detail: "Atención y orientación fisioterapéutica remota personalizada.",
  },
  {
    label: "Sesión individual de Fisioterapia",
    price: "$100.000 COP",
    detail: "Una sesión personalizada de fisioterapia integral.",
  },
  {
    label: "Sesión Premium de Fisioterapia",
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
    label: "Sesión de Sueroterapia",
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
  recipientName: string
  giftType: string
  message: string
}

const defaultForm: GiftForm = {
  buyerName: "",
  recipientName: "",
  giftType: "Consulta de Valoración",
  message: "Un regalo para cuidar tu cuerpo, recuperar movimiento y sentirte mejor.",
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

export function GiftCardBuilder() {
  const [form, setForm] = useState<GiftForm>(defaultForm)

  const recipient = form.recipientName.trim() || "Nombre del regalo"
  const buyer = form.buyerName.trim() || "Humanos Rehab"
  const giftType = form.giftType || "Bono de regalo"
  const selectedGift = giftOptions.find((option) => option.label === giftType) || giftOptions[0]
  const amount = selectedGift.price
  const message = form.message.trim() || defaultForm.message

  const whatsappUrl = useMemo(() => {
    const text = [
      "Hola, quisiera comprar una tarjeta de regalo en Humanos Rehab.",
      `Para: ${recipient}`,
      `Regalo: ${giftType}`,
      `Valor: ${amount}`,
      `De parte de: ${buyer}`,
    ].join("\n")

    return `https://wa.me/573180810945?text=${encodeURIComponent(text)}`
  }, [amount, buyer, giftType, recipient])

  const paymentUrl = useMemo(() => {
    const text = [
      "Hola, quiero pagar una tarjeta de regalo en Humanos Rehab.",
      `Para: ${recipient}`,
      `Regalo: ${giftType}`,
      `Valor: ${amount}`,
      `De parte de: ${buyer}`,
      "Por favor envíenme el link o instrucciones de pago.",
    ].join("\n")

    return `https://wa.me/573180810945?text=${encodeURIComponent(text)}`
  }, [amount, buyer, giftType, recipient])

  const updateField = (field: keyof GiftForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  const downloadGiftCard = async () => {
    const canvas = document.createElement("canvas")
    const scale = 2
    canvas.width = 1400 * scale
    canvas.height = 900 * scale
    const context = canvas.getContext("2d")

    if (!context) return

    context.scale(scale, scale)

    const gradient = context.createLinearGradient(0, 0, 1400, 900)
    gradient.addColorStop(0, "#ffffff")
    gradient.addColorStop(0.52, "#f5f9fc")
    gradient.addColorStop(1, "#eaf4ff")
    context.fillStyle = gradient
    context.fillRect(0, 0, 1400, 900)

    context.strokeStyle = "rgba(22, 103, 183, 0.12)"
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

    context.fillStyle = "#072B4F"
    roundedRect(context, 70, 70, 1260, 760, 44)
    context.fill()

    const cardGradient = context.createLinearGradient(90, 90, 1310, 810)
    cardGradient.addColorStop(0, "#ffffff")
    cardGradient.addColorStop(0.68, "#f7fbff")
    cardGradient.addColorStop(1, "#edf6ff")
    context.fillStyle = cardGradient
    roundedRect(context, 92, 92, 1216, 716, 36)
    context.fill()

    context.fillStyle = "rgba(22, 103, 183, 0.09)"
    context.beginPath()
    context.arc(1170, 180, 190, 0, Math.PI * 2)
    context.fill()
    context.fillStyle = "rgba(230, 57, 70, 0.08)"
    context.beginPath()
    context.arc(1120, 720, 150, 0, Math.PI * 2)
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
    roundedRect(context, 110, 230, 170, 38, 19)
    context.fill()
    context.fillStyle = "#ffffff"
    context.font = "700 18px Arial"
    context.fillText("GIFT CARD", 140, 255)

    context.fillStyle = "#17212f"
    context.font = "900 72px Arial"
    drawWrappedText(context, "Un regalo para moverse mejor", 110, 355, 690, 80)

    context.fillStyle = "#5d6978"
    context.font = "500 30px Arial"
    drawWrappedText(context, message, 112, 550, 700, 42)

    context.fillStyle = "#ffffff"
    roundedRect(context, 835, 205, 400, 440, 30)
    context.fill()
    context.strokeStyle = "rgba(7, 43, 79, 0.12)"
    context.stroke()

    context.fillStyle = "#072B4F"
    context.font = "700 24px Arial"
    context.fillText("Para", 885, 280)
    context.font = "900 40px Arial"
    drawWrappedText(context, recipient, 885, 350, 300, 48)

    context.fillStyle = "#1667B7"
    context.font = "800 26px Arial"
    drawWrappedText(context, giftType, 885, 525, 300, 34)

    context.fillStyle = "rgba(230, 57, 70, 0.08)"
    roundedRect(context, 875, 575, 310, 42, 21)
    context.fill()
    context.fillStyle = "#E63946"
    context.font = "800 18px Arial"
    context.fillText("Bono personalizado", 925, 602)

    context.fillStyle = "#072B4F"
    context.font = "700 22px Arial"
    context.fillText(`De parte de: ${buyer}`, 110, 725)

    context.fillStyle = "#5d6978"
    context.font = "500 20px Arial"
    context.fillText("humanosrehab.com | WhatsApp +57 318 0810945", 110, 765)

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
                Nombre de quien regala
              </Label>
              <Input
                id="buyerName"
                value={form.buyerName}
                onChange={(event) => updateField("buyerName", event.target.value)}
                placeholder="Ej. Carolina Gómez"
                className="h-12 rounded-xl bg-white"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="recipientName" className="text-sm font-extrabold text-foreground">
                Nombre de quien recibe
              </Label>
              <Input
                id="recipientName"
                value={form.recipientName}
                onChange={(event) => updateField("recipientName", event.target.value)}
                placeholder="Ej. Andrés"
                className="h-12 rounded-xl bg-white"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="giftType" className="text-sm font-extrabold text-foreground">
                Qué quieres regalar
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

            <div className="relative aspect-[1.55] overflow-hidden rounded-lg border-[6px] border-primary bg-white shadow-2xl shadow-primary/15">
              <div className="absolute inset-0 bg-grid-pattern opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f8fbff] to-[#edf6ff]" />
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#1667B7]/10" />
              <div className="absolute -bottom-20 right-20 h-52 w-52 rounded-full bg-[#E63946]/10" />

              <div className="relative flex h-full flex-col justify-between p-5 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <img src="/logo_azul.png" alt="Humanos Rehab" className="h-12 w-auto sm:h-14" />
                  <span className="rounded-full bg-[#E63946] px-3 py-1 text-[10px] font-black uppercase tracking-wide text-white sm:text-xs">
                    Gift Card
                  </span>
                </div>

                <div className="max-w-[65%]">
                  <p className="text-xs font-extrabold uppercase text-primary">Para</p>
                  <h3 className="mt-1 break-words font-heading text-2xl font-black leading-tight text-foreground sm:text-4xl">
                    {recipient}
                  </h3>
                  <p className="mt-4 break-words text-xs font-semibold leading-relaxed text-muted-foreground sm:text-sm">
                    {message}
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
                  <div>
                    <p className="text-xs font-extrabold uppercase text-primary">Regalo</p>
                    <p className="mt-1 break-words font-heading text-lg font-black text-foreground sm:text-2xl">
                      {giftType}
                    </p>
                    <p className="mt-2 text-xs font-bold text-muted-foreground">De parte de: {buyer}</p>
                  </div>
                  <div className="rounded-lg bg-[#E63946] px-4 py-3 text-white shadow-lg">
                    <p className="text-[10px] font-bold uppercase opacity-70">Bono</p>
                    <p className="max-w-44 break-words text-sm font-black sm:text-base">
                      Personalizado
                    </p>
                  </div>
                </div>
              </div>
            </div>

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
                  asChild
                  className="h-12 rounded-xl bg-[#E63946] font-bold hover:bg-[#d92f3d]"
                >
                  <a href={paymentUrl} target="_blank" rel="noopener noreferrer">
                    <CreditCard className="h-4 w-4" />
                    Pagar bono
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative mt-5 grid gap-3 sm:grid-cols-2">
              <Button
                type="button"
                onClick={downloadGiftCard}
                className="h-12 rounded-xl font-bold"
              >
                <Download className="h-4 w-4" />
                Descargar tarjeta
                </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-xl border-[#25D366] font-bold text-[#1E9A4D] hover:bg-[#EBFBF0]"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  Confirmar por WhatsApp
                </a>
              </Button>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { icon: UserRound, title: "Personalizada", text: "Nombre, regalo y mensaje." },
              { icon: Download, title: "Descargable", text: "Imagen lista para enviar." },
              { icon: Send, title: "Confirmación", text: "Compra coordinada por WhatsApp." },
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
            La tarjeta descargada sirve como diseño de regalo. La activación final del bono se confirma con el equipo de Humanos Rehab.
          </div>
        </div>
      </div>
    </section>
  )
}
