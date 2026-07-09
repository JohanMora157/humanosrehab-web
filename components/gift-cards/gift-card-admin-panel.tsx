"use client"

import { useState } from "react"
import { CheckCircle2, Eye, EyeOff, LockKeyhole, RefreshCw, Search, Mail, ShieldCheck, Activity, Award, Hourglass } from "lucide-react"
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
  if (card.claimStatus === "claimed") return "Redimida"
  if (card.paymentStatus !== "approved") return "Pago pendiente"
  if (card.cardStatus === "active") return "Activa"
  return card.cardStatus
}

export function GiftCardAdminPanel() {
  const [email, setEmail] = useState("")
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
        headers: { 
          "x-admin-email": email,
          "x-admin-password": password 
        },
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
          "x-admin-email": email,
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
      setMessage(`Tarjeta ${id} marcada como redimida.`)
    } catch {
      setMessage("No se pudo marcar la tarjeta.")
    }
  }

  const totalCount = cards.length
  const activeCount = cards.filter((c) => c.paymentStatus === "approved" && c.claimStatus !== "claimed").length
  const claimedCount = cards.filter((c) => c.claimStatus === "claimed").length
  const pendingCount = cards.filter((c) => c.paymentStatus !== "approved").length

  function getStatusStyles(card: GiftCardRecord) {
    if (card.claimStatus === "claimed") {
      return "bg-[#f1f5f9] text-[#475569] border-[#e2e8f0]"
    }
    if (card.paymentStatus !== "approved") {
      return "bg-[#fffbeb] text-[#d97706] border-[#fde68a]"
    }
    return "bg-[#f0fdf4] text-[#16a34a] border-[#bbf7d0]"
  }

  return (
    <section className="relative min-h-screen bg-[#fafbfc] py-16 lg:py-24 overflow-hidden">
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#E63946]/5 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {!isUnlocked ? (
          /* Login Card Form */
          <div className="mx-auto flex min-h-[calc(100vh-14rem)] max-w-md flex-col justify-center">
            <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/70 p-8 shadow-premium backdrop-blur-md animate-fade-in-up">
              <div className="mb-8 text-center">
                <img src="/logo_azul.png" alt="Humanos Rehab" className="h-16 mx-auto mb-6 object-contain hover:scale-105 transition duration-300" />
                <p className="text-xs font-black uppercase tracking-widest text-primary">Panel Administrativo</p>
                <h2 className="mt-1 font-heading text-2xl font-black text-foreground">Acceso Seguro</h2>
                <p className="mt-2 text-xs font-semibold text-muted-foreground">
                  Ingresa tus credenciales del equipo para gestionar las tarjetas de regalo.
                </p>
              </div>

              <form
                className="grid gap-4"
                onSubmit={(event) => {
                  event.preventDefault()
                  loadCards()
                }}
              >
                <div className="grid gap-2">
                  <Label htmlFor="adminEmail" className="text-xs font-black uppercase tracking-wider text-foreground">
                    Correo electrónico
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="adminEmail"
                      type="email"
                      required
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="humanosrehab@gmail.com"
                      className="h-12 rounded-xl border-border bg-white pl-10 focus-visible:ring-2 focus-visible:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="adminPassword" className="text-xs font-black uppercase tracking-wider text-foreground">
                    Contraseña del equipo
                  </Label>
                  <div className="relative">
                    <LockKeyhole className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="adminPassword"
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      placeholder="••••••••••••"
                      className="h-12 rounded-xl border-border bg-white pl-10 pr-12 focus-visible:ring-2 focus-visible:ring-primary/20"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((current) => !current)}
                      className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-muted-foreground transition hover:bg-primary/5 hover:text-primary focus:outline-none"
                      aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                      title={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <Button type="submit" disabled={isLoading} className="h-12 rounded-xl font-bold bg-primary hover:bg-[#051e36] text-white shadow-lg transition duration-200">
                  {isLoading ? "Validando..." : "Entrar al panel"}
                </Button>
              </form>

              {message ? (
                <div className="mt-4 rounded-xl border border-destructive/25 bg-destructive/10 p-3 text-center text-xs font-bold text-destructive animate-fade-in-up">
                  {message}
                </div>
              ) : null}
            </div>
          </div>
        ) : (
          /* Dashboard */
          <div className="space-y-8 animate-fade-in-up">
            {/* Header section with Logo and Title */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-border/50 pb-6">
              <div className="flex items-center gap-4">
                <img src="/logo_azul.png" alt="Humanos Rehab" className="h-12 object-contain" />
                <div className="h-8 w-px bg-border" />
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-primary">Administración</p>
                  <h1 className="font-heading text-3xl font-black text-foreground">Tarjetas de Regalo</h1>
                </div>
              </div>

              {usingDefaultPassword ? (
                <div className="rounded-xl border border-amber-500/25 bg-amber-500/10 px-4 py-3 text-xs font-bold text-foreground max-w-md animate-float">
                  Advertencia: Usando contraseña temporal de desarrollo. Configura HUMANOS_ADMIN_PASSWORD.
                </div>
              ) : null}
            </div>

            {/* Metrics cards grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Total Tarjetas", value: totalCount, icon: Award, color: "text-blue-600 bg-blue-50 border-blue-100" },
                { label: "Activas", value: activeCount, icon: Activity, color: "text-green-600 bg-green-50 border-green-100" },
                { label: "Redimidas", value: claimedCount, icon: ShieldCheck, color: "text-purple-600 bg-purple-50 border-purple-100" },
                { label: "Pago Pendiente", value: pendingCount, icon: Hourglass, color: "text-amber-600 bg-amber-50 border-amber-100" },
              ].map((stat) => {
                const Icon = stat.icon
                return (
                  <div key={stat.label} className="flex items-center justify-between rounded-2xl border border-border/80 bg-white p-5 shadow-premium transition duration-200 hover:scale-[1.02] hover:shadow-premium-hover">
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-muted-foreground">{stat.label}</p>
                      <h3 className="mt-2 font-heading text-3xl font-black text-foreground">{stat.value}</h3>
                    </div>
                    <span className={`flex h-12 w-12 items-center justify-center rounded-xl border ${stat.color}`}>
                      <Icon className="h-6 w-6" />
                    </span>
                  </div>
                )
              })}
            </div>

            {/* Controls panel: Search and Refresh */}
            <div className="flex flex-col gap-3 rounded-2xl border border-border/80 bg-white p-4 shadow-premium sm:flex-row">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Buscar por ID, comprador, destinatario o estado..."
                  className="h-12 rounded-xl border-border bg-white pl-11 pr-4 focus-visible:ring-2 focus-visible:ring-primary/20"
                />
              </div>
              <Button type="button" variant="outline" onClick={loadCards} disabled={isLoading} className="h-12 rounded-xl px-6 font-bold shadow-sm hover:bg-slate-50 cursor-pointer">
                <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                Actualizar Lista
              </Button>
            </div>

            {message ? (
              <div className="rounded-xl border border-amber-500/25 bg-amber-500/10 p-4 text-sm font-semibold text-foreground">
                {message}
              </div>
            ) : null}

            {/* Main Cards Table */}
            <div className="overflow-hidden rounded-2xl border border-border/85 bg-white shadow-premium">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[980px] text-left text-sm">
                  <thead className="border-b border-border/85 bg-slate-50/70 text-xs font-black uppercase tracking-wider text-slate-500">
                    <tr>
                      <th className="px-6 py-4">ID</th>
                      <th className="px-6 py-4">Comprador</th>
                      <th className="px-6 py-4">Recibe</th>
                      <th className="px-6 py-4">Regalo</th>
                      <th className="px-6 py-4">Valor</th>
                      <th className="px-6 py-4">Vence</th>
                      <th className="px-6 py-4">Estado</th>
                      <th className="px-6 py-4 text-right">Acción</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60">
                    {filteredCards.map((card) => (
                      <tr key={card.id} className="transition duration-150 hover:bg-slate-50/50">
                        <td className="px-6 py-4 font-black text-foreground">{card.id}</td>
                        <td className="px-6 py-4">
                          <p className="font-bold text-foreground">{card.buyerName}</p>
                          <p className="text-xs font-semibold text-muted-foreground">{card.buyerPhone}</p>
                        </td>
                        <td className="px-6 py-4">
                          <p className="font-bold text-foreground">{card.recipientName}</p>
                          {card.recipientPhone ? (
                            <p className="text-xs font-semibold text-muted-foreground">{card.recipientPhone}</p>
                          ) : null}
                        </td>
                        <td className="px-6 py-4">
                          <p className="font-semibold text-muted-foreground">{card.giftType}</p>
                          {card.appointmentDate && card.appointmentTime ? (
                            <p className="text-[#1667B7] text-xs font-black mt-1">
                              Cita: {card.appointmentDate} a las {card.appointmentTime}
                            </p>
                          ) : null}
                        </td>
                        <td className="px-6 py-4 font-black text-foreground">{card.amount}</td>
                        <td className="px-6 py-4 font-semibold text-muted-foreground">{formatDate(card.expiresAt)}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-black tracking-wide ${getStatusStyles(card)}`}>
                            {statusLabel(card)}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <Button
                            type="button"
                            size="sm"
                            disabled={card.claimStatus === "claimed" || card.paymentStatus !== "approved"}
                            onClick={() => claimCard(card.id)}
                            className={`rounded-xl font-bold transition duration-200 shadow-sm cursor-pointer ${
                              card.claimStatus === "claimed"
                                ? "bg-slate-100 text-slate-400 hover:bg-slate-100"
                                : "bg-primary hover:bg-[#051e36] text-white hover:shadow-md"
                            }`}
                          >
                            <CheckCircle2 className="h-4 w-4 mr-1.5" />
                            {card.claimStatus === "claimed" ? "Redimida" : "Redimir"}
                          </Button>
                        </td>
                      </tr>
                    ))}
                    {filteredCards.length === 0 ? (
                      <tr>
                        <td colSpan={8} className="px-6 py-12 text-center font-bold text-muted-foreground">
                          No hay tarjetas de regalo para mostrar.
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
