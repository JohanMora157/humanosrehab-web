import { NextResponse } from "next/server"
import { listGiftCards } from "@/lib/gift-cards"

function isAuthorized(request: Request) {
  const password = process.env.HUMANOS_ADMIN_PASSWORD || "humanos-dev"
  return request.headers.get("x-admin-password") === password
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 })
  }

  return NextResponse.json({
    cards: listGiftCards(),
    usingDefaultPassword: !process.env.HUMANOS_ADMIN_PASSWORD,
  })
}
