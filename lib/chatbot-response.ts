export const HUMANOS_WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_HUMANOS_WHATSAPP_NUMBER || "573180810945"

export type ParsedBotResponse =
  | {
      kind: "text"
      message: string
    }
  | {
      kind: "whatsapp_cta"
      message: string
      buttonText: string
      whatsappMessage: string
    }

type WhatsAppCtaPayload = {
  type?: unknown
  message?: unknown
  button_text?: unknown
  whatsapp_message?: unknown
}

function cleanJsonLikeResponse(raw: string) {
  return raw
    .trim()
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/```$/i, "")
    .trim()
}

function extractJsonObjects(text: string) {
  const objects: string[] = []
  let startIndex = -1
  let depth = 0
  let inString = false
  let isEscaped = false

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index]

    if (inString) {
      if (isEscaped) {
        isEscaped = false
      } else if (char === "\\") {
        isEscaped = true
      } else if (char === '"') {
        inString = false
      }

      continue
    }

    if (char === '"') {
      inString = true
      continue
    }

    if (char === "{") {
      if (depth === 0) startIndex = index
      depth += 1
      continue
    }

    if (char === "}" && depth > 0) {
      depth -= 1

      if (depth === 0 && startIndex >= 0) {
        objects.push(text.slice(startIndex, index + 1))
        startIndex = -1
      }
    }
  }

  return objects
}

function normalizeWhatsappCta(data: WhatsAppCtaPayload): ParsedBotResponse | null {
  if (
    data.type === "whatsapp_cta" &&
    typeof data.message === "string" &&
    typeof data.whatsapp_message === "string"
  ) {
    return {
      kind: "whatsapp_cta",
      message: data.message,
      buttonText:
        typeof data.button_text === "string" && data.button_text.trim()
          ? data.button_text
          : "Agendar por WhatsApp",
      whatsappMessage: data.whatsapp_message,
    }
  }

  return null
}

export function parseBotResponse(rawResponse: unknown): ParsedBotResponse {
  if (typeof rawResponse === "object" && rawResponse !== null) {
    const parsed = normalizeWhatsappCta(rawResponse as WhatsAppCtaPayload)

    if (parsed) return parsed

    return {
      kind: "text",
      message: JSON.stringify(rawResponse),
    }
  }

  const text = String(rawResponse || "").trim()

  if (!text) {
    return {
      kind: "text",
      message: "",
    }
  }

  const cleaned = cleanJsonLikeResponse(text)

  try {
    const data = JSON.parse(cleaned)
    const parsed = normalizeWhatsappCta(data)

    if (parsed) return parsed
  } catch {
    // Some model responses include prose before the JSON. Try embedded objects next.
  }

  for (const jsonCandidate of extractJsonObjects(cleaned)) {
    try {
      const data = JSON.parse(cleanJsonLikeResponse(jsonCandidate))
      const parsed = normalizeWhatsappCta(data)

      if (parsed) return parsed
    } catch {
      // Keep trying other objects, then show malformed content as text.
    }
  }

  return {
    kind: "text",
    message: text,
  }
}

export function buildHumanosWhatsAppUrl(whatsappMessage: string) {
  return `https://wa.me/${HUMANOS_WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`
}
