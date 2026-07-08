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

export function createGiftCard(input: GiftCardInput) {
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

  store.set(record.id, record)
  return record
}

export function getGiftCard(id: string) {
  return store.get(id) ?? null
}

export function listGiftCards() {
  return Array.from(store.values()).sort((a, b) => b.createdAt.localeCompare(a.createdAt))
}

export function updateGiftCard(id: string, updates: Partial<GiftCardRecord>) {
  const current = store.get(id)

  if (!current) {
    return null
  }

  const next: GiftCardRecord = {
    ...current,
    ...updates,
  }

  store.set(id, next)
  return next
}

export function approveGiftCardPayment(
  id: string,
  payment: Pick<GiftCardRecord, "paymentProvider" | "paymentId" | "preferenceId">,
) {
  return updateGiftCard(id, {
    ...payment,
    paymentStatus: "approved",
    cardStatus: "active",
  })
}

export function markGiftCardClaimed(id: string, notes?: string) {
  return updateGiftCard(id, {
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
