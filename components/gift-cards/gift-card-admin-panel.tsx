"use client"

import { useState } from "react"
import { CheckCircle2, Eye, EyeOff, LockKeyhole, RefreshCw, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { GiftCardRecord } from "@/lib/gift-cards"

function formatDate(date?: string) {
  if (!date) return "-"

  return new Intl.DateTimeFormat("es-CO", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date))
}

function statusLabel(card: GiftCardRecord) {
  if (card.claimStatus === "claimed") return "Reclamada"
  if (card.paymentStatus !== "approved") return "Pago pendiente"
  if (card.cardStatus === "active") return "Activa"
  return card.cardStatus
}

export function GiftCardAdminPanel() {
  const [password, setPassword] = useState("")
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [cards, setCards] = useState<GiftCardRecord[]>([])
  const [query, setQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [usingDefaultPassword, setUsingDefaultPassword] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const filteredCards = cards.filter((card) => {
    const haystack = [
      card.id,
      card.buyerName,
      card.buyerPhone,
      card.recipientName,
      card.giftType,
      card.paymentStatus,
      card.claimStatus,
    ].join(" ").toLowerCase()

    return haystack.includes(query.toLowerCase())
  })

  const loadCards = async () => {
    setIsLoading(true)
    setMessage("")

    try {
      const response = await fetch("/api/gift-cards/admin/list", {
        headers: { "x-admin-password": password },
        cache: "no-store",
      })
      const data = await response.json()

      if (!response.ok) {
        setMessage(data.error || "No se pudo entrar al panel.")
        setIsUnlocked(false)
        return
      }

      setCards(data.cards)
      setUsingDefaultPassword(Boolean(data.usingDefaultPassword))
      setIsUnlocked(true)
    } catch {
      setMessage("No se pudo cargar el panel.")
    } finally {
      setIsLoading(false)
    }
  }

  const claimCard = async (id: string) => {
    setMessage("")

    try {
      const response = await fetch("/api/gift-cards/admin/claim", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-password": password,
        },
        body: JSON.stringify({ id }),
      })
      const data = await response.json()

      if (!response.ok) {
        setMessage(data.error || "No se pudo marcar la tarjeta.")
        return
      }

      setCards((current) => current.map((card) => (card.id === id ? data.giftCard : card)))
      setMessage(`Tarjeta ${id} marcada como reclamada.`)
    } catch {
      setMessage("No se pudo marcar la tarjeta.")
    }
  }

  return (
    <section className="min-h-screen bg-background py-12">
      <div
        className={
          isUnlocked
            ? "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
            : "mx-auto flex min-h-[calc(100vh-6rem)] max-w-xl flex-col justify-center px-4 sm:px-6"
        }
      >
        <div
          className={
            isUnlocked
              ? "mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
              : "mb-8 text-center"
          }
        >
          <div>
            <p className="text-xs font-extrabold uppercase text-primary">Panel interno</p>
            <h1 className="font-heading text-3xl font-black text-foreground sm:text-4xl">
              Tarjetas de regalo
            </h1>
            <p
              className={
                isUnlocked
                  ? "mt-2 max-w-2xl text-sm font-semibold leading-6 text-muted-foreground"
                  : "mx-auto mt-2 max-w-lg text-sm font-semibold leading-6 text-muted-foreground"
              }
            >
              Consulta tarjetas activas, pendientes y reclamadas. Esta primera version queda
              preparada para reemplazar la memoria local por Google Sheets.
            </p>
          </div>
        </div>

        {!isUnlocked ? (
          <div className="mx-auto w-full max-w-md rounded-lg border border-border/70 bg-white p-6 shadow-premium">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <LockKeyhole className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-extrabold uppercase text-primary">Acceso privado</p>
                <h2 className="font-heading text-xl font-black text-foreground">Ingresar</h2>
              </div>
            </div>

            <form
              className="grid gap-3"
              onSubmit={(event) => {
                event.preventDefault()
                loadCards()
              }}
            >
              <Label htmlFor="adminPassword" className="text-sm font-extrabold text-foreground">
                Contrasena del equipo
              </Label>
              <div className="relative">
                <Input
                  id="adminPassword"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="HUMANOS_ADMIN_PASSWORD"
                  className="h-12 rounded-xl bg-white pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((current) => !current)}
                  className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-muted-foreground transition hover:bg-primary/5 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                  aria-label={showPassword ? "Ocultar contrasena" : "Mostrar contrasena"}
                  title={showPassword ? "Ocultar contrasena" : "Mostrar contrasena"}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              <Button type="submit" disabled={isLoading} className="h-12 rounded-xl font-bold">
                {isLoading ? "Entrando..." : "Entrar al panel"}
              </Button>
            </form>

            {message ? <p className="mt-4 text-sm font-bold text-muted-foreground">{message}</p> : null}
          </div>
        ) : (
          <div className="space-y-5">
            {usingDefaultPassword ? (
              <div className="rounded-lg border border-amber-500/25 bg-amber-500/10 p-4 text-sm font-bold text-foreground">
                Estas usando la contrasena temporal de desarrollo: humanos-dev. Cambiala con
                HUMANOS_ADMIN_PASSWORD antes de publicar.
              </div>
            ) : null}

            <div className="grid gap-3 rounded-lg border border-border/70 bg-white p-4 shadow-sm sm:grid-cols-[1fr_auto]">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Buscar por ID, comprador, destinatario o estado"
                  className="h-12 rounded-xl bg-white pl-10"
                />
              </div>
              <Button type="button" variant="outline" onClick={loadCards} disabled={isLoading} className="h-12 rounded-xl">
                <RefreshCw className="h-4 w-4" />
                Actualizar
              </Button>
            </div>

            {message ? <p className="text-sm font-bold text-muted-foreground">{message}</p> : null}

            <div className="overflow-hidden rounded-lg border border-border/70 bg-white shadow-premium">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[980px] text-left text-sm">
                  <thead className="border-b border-border/70 bg-primary/5 text-xs uppercase text-primary">
                    <tr>
                      <th className="px-4 py-3 font-black">ID</th>
                      <th className="px-4 py-3 font-black">Comprador</th>
                      <th className="px-4 py-3 font-black">Recibe</th>
                      <th className="px-4 py-3 font-black">Regalo</th>
                      <th className="px-4 py-3 font-black">Valor</th>
                      <th className="px-4 py-3 font-black">Vence</th>
                      <th className="px-4 py-3 font-black">Estado</th>
                      <th className="px-4 py-3 font-black">Accion</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredCards.map((card) => (
                      <tr key={card.id} className="border-b border-border/60 last:border-0">
                        <td className="px-4 py-4 font-black text-foreground">{card.id}</td>
                        <td className="px-4 py-4">
                          <p className="font-bold text-foreground">{card.buyerName}</p>
                          <p className="text-xs font-semibold text-muted-foreground">{card.buyerPhone}</p>
                        </td>
                        <td className="px-4 py-4 font-bold text-foreground">{card.recipientName}</td>
                        <td className="px-4 py-4 font-semibold text-muted-foreground">{card.giftType}</td>
                        <td className="px-4 py-4 font-black text-foreground">{card.amount}</td>
                        <td className="px-4 py-4 font-semibold text-muted-foreground">{formatDate(card.expiresAt)}</td>
                        <td className="px-4 py-4">
                          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-black text-primary">
                            {statusLabel(card)}
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          <Button
                            type="button"
                            size="sm"
                            disabled={card.claimStatus === "claimed" || card.paymentStatus !== "approved"}
                            onClick={() => claimCard(card.id)}
                          >
                            <CheckCircle2 className="h-4 w-4" />
                            Reclamar
                          </Button>
                        </td>
                      </tr>
                    ))}
                    {filteredCards.length === 0 ? (
                      <tr>
                        <td colSpan={8} className="px-4 py-10 text-center font-bold text-muted-foreground">
                          No hay tarjetas para mostrar.
                        </td>
                      </tr>
                    ) : null}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
