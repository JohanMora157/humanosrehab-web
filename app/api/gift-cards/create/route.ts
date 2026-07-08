import { NextResponse } from "next/server"
import { createGiftCard, normalizePhone, notifyGiftCardNotification } from "@/lib/gift-cards"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const buyerName = String(body.buyerName ?? "").trim()
    const buyerPhone = normalizePhone(String(body.buyerPhone ?? ""))
    const recipientName = String(body.recipientName ?? "").trim()
    const giftType = String(body.giftType ?? "").trim()
    const amount = String(body.amount ?? "").trim()
    const message = String(body.message ?? "").trim()

    if (!buyerName || !buyerPhone || !recipientName || !giftType || !amount) {
      return NextResponse.json(
        { error: "Completa comprador, WhatsApp, destinatario, regalo y valor." },
        { status: 400 },
      )
    }

    const giftCard = createGiftCard({
      buyerName,
      buyerPhone,
      recipientName,
      giftType,
      amount,
      message,
    })

    const notifications = await notifyGiftCardNotification("gift_card_created", giftCard).catch((error) => ({
      delivered: false,
      reason: error instanceof Error ? error.message : "notification request failed",
    }))

    return NextResponse.json({
      giftCard,
      notifications,
      checkoutUrl: null,
      message: "Tarjeta creada en estado pendiente. Mercado Pago debe aprobarla para activar la descarga.",
    })
  } catch {
    return NextResponse.json({ error: "No se pudo crear la tarjeta." }, { status: 500 })
  }
}
