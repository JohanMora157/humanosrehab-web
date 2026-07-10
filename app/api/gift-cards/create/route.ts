import { NextResponse } from "next/server"
import { createGiftCard, normalizePhone, notifyGiftCardNotification } from "@/lib/gift-cards"

function parseAmountToNumber(amountStr: string): number {
  const clean = amountStr.replace(/[^0-9]/g, "")
  const num = parseInt(clean, 10)
  return isNaN(num) ? 80000 : num
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const buyerName = String(body.buyerName ?? "").trim()
    const buyerPhone = normalizePhone(String(body.buyerPhone ?? ""))
    const recipientName = String(body.recipientName ?? "").trim()
    const giftType = String(body.giftType ?? "").trim()
    const amount = String(body.amount ?? "").trim()
    const message = String(body.message ?? "").trim()
    const appointmentDate = body.appointmentDate ? String(body.appointmentDate).trim() : undefined
    const appointmentTime = body.appointmentTime ? String(body.appointmentTime).trim() : undefined

    if (!buyerName || !buyerPhone || !recipientName || !giftType || !amount) {
      return NextResponse.json(
        { error: "Completa comprador, WhatsApp, destinatario, regalo y valor." },
        { status: 400 },
      )
    }

    const giftCard = await createGiftCard({
      buyerName,
      buyerPhone,
      recipientName,
      giftType,
      amount,
      message,
      appointmentDate,
      appointmentTime,
    })

    const notifications = await notifyGiftCardNotification("gift_card_created", giftCard).catch((error) => ({
      delivered: false,
      reason: error instanceof Error ? error.message : "notification request failed",
    }))

    let checkoutUrl: string | null = null
    const mpToken = process.env.MERCADO_PAGO_ACCESS_TOKEN || "APP_USR-5937169679297290-062518-0a6bd19ff13147203c8c287175d8cf4b-3497419399"

    if (mpToken) {
      try {
        const parsedPrice = parseAmountToNumber(amount)
        const host = request.headers.get("host") || "localhost:3000"
        const isLocal = host.includes("localhost") || host.includes("127.0.0.1")
        const domain = isLocal ? "https://humanosrehab.com" : `https://${host}`

        const mpRes = await fetch("https://api.mercadopago.com/checkout/preferences", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${mpToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: [
              {
                title: `Tarjeta Regalo Humanos Rehab - ${giftType}`,
                quantity: 1,
                currency_id: "COP",
                unit_price: parsedPrice,
              },
            ],
            external_reference: giftCard.id,
            notification_url: "https://n8n.globalautomate.co/webhook/mercadopago-gift-card",
            back_urls: {
              success: `${domain}/tarjetas-regalo?status=success&id=${giftCard.id}`,
              pending: `${domain}/tarjetas-regalo?status=pending&id=${giftCard.id}`,
              failure: `${domain}/tarjetas-regalo?status=failure&id=${giftCard.id}`,
            },
            auto_return: "approved",
            metadata: {
              celular: buyerPhone,
              nombre_completo: buyerName,
              destinatario: recipientName,
              tipo_bono: giftType,
              fecha_cita: appointmentDate || "",
              hora_cita: appointmentTime || "",
              canal: "web_gift_cards",
            },
          }),
        })

        if (mpRes.ok) {
          const mpData = await mpRes.json()
          checkoutUrl = mpData.init_point || null
          const preferenceId = mpData.id || null

          if (preferenceId) {
            const { updateGiftCard } = await import("@/lib/gift-cards")
            await updateGiftCard(giftCard.id, { preferenceId })
            giftCard.preferenceId = preferenceId
          }
        } else {
          const errText = await mpRes.text()
          console.error("Error creating MP preference:", errText)
        }
      } catch (error) {
        console.error("Error in Mercado Pago preference creation:", error)
      }
    }

    return NextResponse.json({
      giftCard,
      notifications,
      checkoutUrl,
      message: checkoutUrl
        ? "Tarjeta creada. Redirigiendo a Mercado Pago para completar la compra."
        : "Tarjeta creada en estado pendiente. Mercado Pago debe aprobarla para activar la descarga.",
    })
  } catch {
    return NextResponse.json({ error: "No se pudo crear la tarjeta." }, { status: 500 })
  }
}
