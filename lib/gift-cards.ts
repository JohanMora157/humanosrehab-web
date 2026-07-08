export type GiftCardPaymentStatus = "pending" | "approved" | "rejected"
export type GiftCardStatus = "inactive" | "active" | "expired" | "cancelled"
export type GiftCardClaimStatus = "pending" | "claimed"

export type GiftCardRecord = {
  id: string
  createdAt: string
  expiresAt: string
  paymentStatus: GiftCardPaymentStatus
  cardStatus: GiftCardStatus
  claimStatus: GiftCardClaimStatus
  buyerName: string
  buyerPhone: string
  recipientName: string
  recipientPhone?: string
  giftType: string
  amount: string
  message: string
  paymentProvider?: string
  paymentId?: string
  preferenceId?: string
  claimedAt?: string
  notes?: string
}

export type GiftCardInput = Pick<
  GiftCardRecord,
  "buyerName" | "buyerPhone" | "recipientName" | "giftType" | "amount" | "message"
>

const globalStore = globalThis as typeof globalThis & {
  humanosGiftCards?: Map<string, GiftCardRecord>
}

const store = globalStore.humanosGiftCards ?? new Map<string, GiftCardRecord>()
globalStore.humanosGiftCards = store

function buildGiftCardId() {
  const year = new Date().getFullYear()
  const random = Math.random().toString(36).slice(2, 8).toUpperCase()
  return `HR-GC-${year}-${random}`
}

export function addOneYear(date = new Date()) {
  const expiresAt = new Date(date)
  expiresAt.setFullYear(expiresAt.getFullYear() + 1)
  return expiresAt.toISOString()
}

async function fetchFromSheet(action: "list" | "get" | "create" | "update", payload?: any) {
  const url = process.env.GOOGLE_SHEET_API_URL
  const token = process.env.GOOGLE_SHEET_API_TOKEN

  if (!url) {
    return null
  }

  try {
    const targetUrl = new URL(url)
    targetUrl.searchParams.set("token", token || "")

    if (action === "list" || action === "get") {
      if (payload?.id) {
        targetUrl.searchParams.set("id", payload.id)
      }
      const res = await fetch(targetUrl.toString(), {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
      })
      if (!res.ok) return null
      return await res.json()
    } else {
      const res = await fetch(targetUrl.toString(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, ...payload }),
        cache: "no-store",
      })
      if (!res.ok) return null
      return await res.json()
    }
  } catch (error) {
    console.error("Error communicating with Google Sheet:", error)
    return null
  }
}

function mapSheetToRecord(row: any): GiftCardRecord {
  let paymentStatus: GiftCardPaymentStatus = "pending"
  const rawPaymentStatus = String(row.estado_pago || row.paymentStatus || "").trim().toLowerCase()
  if (rawPaymentStatus === "pagado" || rawPaymentStatus === "approved") {
    paymentStatus = "approved"
  } else if (rawPaymentStatus === "rechazado" || rawPaymentStatus === "rejected") {
    paymentStatus = "rejected"
  }

  let cardStatus: GiftCardStatus = "inactive"
  const rawCardStatus = String(row.estado_tarjeta || row.cardStatus || "").trim().toLowerCase()
  if (rawCardStatus === "activa" || rawCardStatus === "active") {
    cardStatus = "active"
  } else if (rawCardStatus === "cancelada" || rawCardStatus === "cancelled") {
    cardStatus = "cancelled"
  } else if (rawCardStatus === "expirada" || rawCardStatus === "expired") {
    cardStatus = "expired"
  }

  let claimStatus: GiftCardClaimStatus = "pending"
  const rawClaimStatus = String(row.estado_reclamo || row.claimStatus || "").trim().toLowerCase()
  if (
    rawClaimStatus === "reclamado" ||
    rawClaimStatus === "claimed" ||
    rawClaimStatus === "true" ||
    rawClaimStatus === "sí" ||
    rawClaimStatus === "si"
  ) {
    claimStatus = "claimed"
  }

  return {
    id: row.id_tarjeta || row.id || "",
    createdAt: row.fecha_creacion || row.createdAt || "",
    expiresAt: row.fecha_vencimiento || row.expiresAt || "",
    paymentStatus,
    cardStatus,
    claimStatus,
    buyerName: row.nombre_comprador || row.buyerName || "",
    buyerPhone: row.telefono_comprador || row.buyerPhone || "",
    recipientName: row.nombre_destinatario || row.recipientName || "",
    recipientPhone: row.telefono_destinario || row.recipientPhone || undefined,
    giftType: row.tipo_bono || row.giftType || "",
    amount: row.valor || row.amount || "",
    message: row.mensaje || row.message || "",
    paymentProvider: row.payment_provider || row.paymentProvider || undefined,
    paymentId: row.payment_id || row.paymentId || undefined,
    preferenceId: row.preference_id || row.preferenceId || undefined,
    claimedAt: row.fecha_reclamada || row.claimedAt || undefined,
    notes: row.observaciones || row.notes || undefined,
  }
}

function mapRecordToSheet(record: GiftCardRecord) {
  let estado_pago = "Pendiente"
  if (record.paymentStatus === "approved") {
    estado_pago = "Pagado"
  } else if (record.paymentStatus === "rejected") {
    estado_pago = "Rechazado"
  }

  let estado_tarjeta = "Inactiva"
  if (record.cardStatus === "active") {
    estado_tarjeta = "Activa"
  } else if (record.cardStatus === "cancelled") {
    estado_tarjeta = "Cancelada"
  } else if (record.cardStatus === "expired") {
    estado_tarjeta = "Expirada"
  }

  let estado_reclamo = "FALSE"
  if (record.claimStatus === "claimed") {
    estado_reclamo = "TRUE"
  }

  return {
    id: record.id,
    createdAt: record.createdAt,
    expiresAt: record.expiresAt,
    paymentStatus: record.paymentStatus,
    cardStatus: record.cardStatus,
    claimStatus: record.claimStatus,
    buyerName: record.buyerName,
    buyerPhone: record.buyerPhone,
    recipientName: record.recipientName,
    recipientPhone: record.recipientPhone || "",
    giftType: record.giftType,
    amount: record.amount,
    message: record.message,
    paymentProvider: record.paymentProvider || "",
    paymentId: record.paymentId || "",
    preferenceId: record.preferenceId || "",
    claimedAt: record.claimedAt || "",
    notes: record.notes || "",
    
    id_tarjeta: record.id,
    fecha_creacion: record.createdAt,
    fecha_vencimiento: record.expiresAt,
    estado_pago,
    estado_tarjeta,
    estado_reclamo,
    nombre_comprador: record.buyerName,
    telefono_comprador: record.buyerPhone,
    nombre_destinatario: record.recipientName,
    telefono_destinario: record.recipientPhone || "",
    tipo_bono: record.giftType,
    valor: record.amount,
    mensaje: record.message,
    payment_provider: record.paymentProvider || "",
    payment_id: record.paymentId || "",
    preference_id: record.preferenceId || "",
    fecha_reclamada: record.claimedAt || "",
    observaciones: record.notes || "",
    ultima_actualizacion: new Date().toISOString().split("T")[0],
  }
}

function mapUpdatesToSheet(updates: Partial<GiftCardRecord>) {
  const mapped: any = {}
  
  const add = (engKey: string, espKey: string, val: any) => {
    if (val !== undefined) {
      mapped[engKey] = val
      mapped[espKey] = val
    }
  }

  add("id", "id_tarjeta", updates.id)
  add("createdAt", "fecha_creacion", updates.createdAt)
  add("expiresAt", "fecha_vencimiento", updates.expiresAt)
  add("buyerName", "nombre_comprador", updates.buyerName)
  add("buyerPhone", "telefono_comprador", updates.buyerPhone)
  add("recipientName", "nombre_destinatario", updates.recipientName)
  add("recipientPhone", "telefono_destinario", updates.recipientPhone)
  add("giftType", "tipo_bono", updates.giftType)
  add("amount", "valor", updates.amount)
  add("message", "mensaje", updates.message)
  add("paymentProvider", "payment_provider", updates.paymentProvider)
  add("paymentId", "payment_id", updates.paymentId)
  add("preferenceId", "preference_id", updates.preferenceId)
  add("claimedAt", "fecha_reclamada", updates.claimedAt)
  add("notes", "observaciones", updates.notes)

  if (updates.paymentStatus !== undefined) {
    mapped.paymentStatus = updates.paymentStatus
    let estado_pago = "Pendiente"
    if (updates.paymentStatus === "approved") {
      estado_pago = "Pagado"
    } else if (updates.paymentStatus === "rejected") {
      estado_pago = "Rechazado"
    }
    mapped.estado_pago = estado_pago
  }

  if (updates.cardStatus !== undefined) {
    mapped.cardStatus = updates.cardStatus
    let estado_tarjeta = "Inactiva"
    if (updates.cardStatus === "active") {
      estado_tarjeta = "Activa"
    } else if (updates.cardStatus === "cancelled") {
      estado_tarjeta = "Cancelada"
    } else if (updates.cardStatus === "expired") {
      estado_tarjeta = "Expirada"
    }
    mapped.estado_tarjeta = estado_tarjeta
  }

  if (updates.claimStatus !== undefined) {
    mapped.claimStatus = updates.claimStatus
    mapped.estado_reclamo = updates.claimStatus === "claimed" ? "TRUE" : "FALSE"
  }

  mapped.ultima_actualizacion = new Date().toISOString().split("T")[0]

  return mapped
}

export async function createGiftCard(input: GiftCardInput) {
  const now = new Date()
  const record: GiftCardRecord = {
    id: buildGiftCardId(),
    createdAt: now.toISOString(),
    expiresAt: addOneYear(now),
    paymentStatus: "pending",
    cardStatus: "inactive",
    claimStatus: "pending",
    ...input,
  }

  const sheetResult = await fetchFromSheet("create", { giftCard: mapRecordToSheet(record) })
  if (sheetResult && sheetResult.success) {
    const card = mapSheetToRecord(sheetResult.giftCard)
    store.set(card.id, card)
    return card
  }

  // Fallback to local store
  store.set(record.id, record)
  return record
}

export async function getGiftCard(id: string) {
  const sheetResult = await fetchFromSheet("get", { id })
  if (sheetResult && sheetResult.giftCard) {
    const card = mapSheetToRecord(sheetResult.giftCard)
    store.set(card.id, card)
    return card
  }
  return store.get(id) ?? null
}

export async function listGiftCards() {
  const sheetResult = await fetchFromSheet("list")
  if (sheetResult && Array.isArray(sheetResult.cards)) {
    const cards = sheetResult.cards.map(mapSheetToRecord)
    store.clear()
    cards.forEach((card) => store.set(card.id, card))
    return cards.sort((a, b) => b.createdAt.localeCompare(a.createdAt))
  }
  return Array.from(store.values()).sort((a, b) => b.createdAt.localeCompare(a.createdAt))
}

export async function updateGiftCard(id: string, updates: Partial<GiftCardRecord>) {
  const current = await getGiftCard(id)

  if (!current) {
    return null
  }

  const next: GiftCardRecord = {
    ...current,
    ...updates,
  }

  const sheetResult = await fetchFromSheet("update", { id, updates: mapUpdatesToSheet(updates) })
  if (sheetResult && sheetResult.success) {
    const card = mapSheetToRecord(sheetResult.giftCard)
    store.set(id, card)
    return card
  }

  // Fallback to updating in-memory only
  store.set(id, next)
  return next
}

export async function approveGiftCardPayment(
  id: string,
  payment: Pick<GiftCardRecord, "paymentProvider" | "paymentId" | "preferenceId">,
) {
  return await updateGiftCard(id, {
    ...payment,
    paymentStatus: "approved",
    cardStatus: "active",
  })
}

export async function markGiftCardClaimed(id: string, notes?: string) {
  return await updateGiftCard(id, {
    claimStatus: "claimed",
    claimedAt: new Date().toISOString(),
    notes,
  })
}

export function normalizePhone(phone: string) {
  return phone.replace(/[^\d+]/g, "").trim()
}

export async function notifyGiftCardNotification(event: string, giftCard: GiftCardRecord) {
  const notificationUrl = process.env.GIFT_CARD_NOTIFICATION_URL

  if (!notificationUrl) {
    return { delivered: false, reason: "GIFT_CARD_NOTIFICATION_URL is not configured" }
  }

  const response = await fetch(notificationUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      event,
      source: "humanosrehab-web",
      timestamp: new Date().toISOString(),
      giftCard,
    }),
    cache: "no-store",
  })

  return {
    delivered: response.ok,
    status: response.status,
  }
}
