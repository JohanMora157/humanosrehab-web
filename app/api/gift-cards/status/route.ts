import { NextResponse } from "next/server"
import { getGiftCard } from "@/lib/gift-cards"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")?.trim()

  if (!id) {
    return NextResponse.json({ error: "Falta el ID de la tarjeta." }, { status: 400 })
  }

  const giftCard = await getGiftCard(id)

  if (!giftCard) {
    return NextResponse.json({ error: "No encontramos esa tarjeta." }, { status: 404 })
  }

  return NextResponse.json({ giftCard })
}
