import { NextResponse } from "next/server"
import { approveGiftCardPayment, notifyGiftCardNotification } from "@/lib/gift-cards"

function isAuthorized(request: Request, bodySecret: unknown) {
  const secret = process.env.GIFT_CARD_PAYMENT_SECRET

  if (!secret) {
    return true
  }

  return request.headers.get("x-gift-card-secret") === secret || bodySecret === secret
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    if (!isAuthorized(request, body.secret)) {
      return NextResponse.json({ error: "No autorizado." }, { status: 401 })
    }

    const id = String(body.id ?? "").trim()
    const status = String(body.paymentStatus ?? "").trim()

    if (!id || status !== "approved") {
      return NextResponse.json(
        { error: "Envia id y paymentStatus='approved' para activar la tarjeta." },
        { status: 400 },
      )
    }

    const giftCard = await approveGiftCardPayment(id, {
      paymentProvider: String(body.paymentProvider ?? "mercado_pago"),
      paymentId: body.paymentId ? String(body.paymentId) : undefined,
      preferenceId: body.preferenceId ? String(body.preferenceId) : undefined,
    })

    if (!giftCard) {
      return NextResponse.json({ error: "No encontramos esa tarjeta." }, { status: 404 })
    }

    const notifications = await notifyGiftCardNotification("gift_card_payment_approved", giftCard).catch(
      (error) => ({
        delivered: false,
        reason: error instanceof Error ? error.message : "notification request failed",
      }),
    )

    return NextResponse.json({ giftCard, notifications })
  } catch {
    return NextResponse.json({ error: "No se pudo verificar el pago." }, { status: 500 })
  }
}
