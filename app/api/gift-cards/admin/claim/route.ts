import { NextResponse } from "next/server"
import { markGiftCardClaimed, notifyGiftCardNotification } from "@/lib/gift-cards"

function isAuthorized(request: Request, bodyPassword: unknown, bodyEmail: unknown) {
  const password = process.env.HUMANOS_ADMIN_PASSWORD || "humanos-dev"
  const email = "humanosrehab@gmail.com"
  
  const reqPassword = request.headers.get("x-admin-password") || (bodyPassword ? String(bodyPassword) : "")
  const reqEmail = request.headers.get("x-admin-email") || (bodyEmail ? String(bodyEmail) : "")

  return (
    reqPassword === password &&
    reqEmail.trim().toLowerCase() === email
  )
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    if (!isAuthorized(request, body.password, body.email)) {
      return NextResponse.json({ error: "No autorizado." }, { status: 401 })
    }

    const id = String(body.id ?? "").trim()

    if (!id) {
      return NextResponse.json({ error: "Falta el ID de la tarjeta." }, { status: 400 })
    }

    const giftCard = await markGiftCardClaimed(id, body.notes ? String(body.notes) : undefined)

    if (!giftCard) {
      return NextResponse.json({ error: "No encontramos esa tarjeta." }, { status: 404 })
    }

    const notifications = await notifyGiftCardNotification("gift_card_claimed", giftCard).catch((error) => ({
      delivered: false,
      reason: error instanceof Error ? error.message : "notification request failed",
    }))

    return NextResponse.json({ giftCard, notifications })
  } catch {
    return NextResponse.json({ error: "No se pudo marcar la tarjeta." }, { status: 500 })
  }
}
