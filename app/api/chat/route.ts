import { NextResponse } from "next/server"

const webhookUrl = "https://n8n.globalautomate.co/webhook/e9ea6cf5-b7d9-462e-adb4-cc8c79685f2e"

function isWhatsappCta(data: unknown) {
  return (
    typeof data === "object" &&
    data !== null &&
    "type" in data &&
    "message" in data &&
    "whatsapp_message" in data &&
    (data as { type?: unknown }).type === "whatsapp_cta"
  )
}

export async function POST(request: Request) {
  try {
    const { message, sessionId } = await request.json()

    if (!message || typeof message !== "string") {
      return NextResponse.json({ reply: "Mensaje invalido." }, { status: 400 })
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message,
        sessionId,
        conversation_id: sessionId,
        source: "humanosrehab-web",
        timestamp: new Date().toISOString(),
      }),
      cache: "no-store",
    })

    if (!response.ok) {
      return NextResponse.json(
        { reply: "El asistente no respondio. Intenta de nuevo en un momento." },
        { status: 502 },
      )
    }

    const data = await response.json().catch(() => ({}))
    const arrayReply = Array.isArray(data)
      ? data[0]?.reply ??
        data[0]?.response ??
        data[0]?.text ??
        data[0]?.message ??
        (isWhatsappCta(data[0]) ? data[0] : null)
      : null
    const reply =
      (isWhatsappCta(data) ? data : null) ??
      data.reply ??
      data.response ??
      data.text ??
      data.message ??
      arrayReply

    return NextResponse.json({
      reply: reply || "Gracias por escribirnos. Me compartes un poco mas de contexto?",
    })
  } catch {
    return NextResponse.json(
      { reply: "Error interno conectando con el asistente." },
      { status: 500 },
    )
  }
}
