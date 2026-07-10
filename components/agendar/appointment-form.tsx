"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageCircle, CheckCircle2, Calendar, CreditCard, Clock, AlertTriangle, ShieldCheck } from "lucide-react"

const services = [
  "Fisioterapia general",
  "Rehabilitación deportiva",
  "Terapia manual",
  "Masaje terapéutico",
  "Descargas musculares",
  "Acondicionamiento físico",
  "Dolor de cuello/espalda",
  "Consulta en línea",
]

const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]

const steps = [
  {
    icon: MessageCircle,
    title: "1. Describe tus Síntomas",
    description: "Cuéntanos brevemente qué te duele y cuál es tu objetivo.",
    color: "text-primary border-primary/20 bg-primary/5"
  },
  {
    icon: CheckCircle2,
    title: "2. Orientación Directa",
    description: "El Prof. Julián analizará tu caso y definirá el abordaje.",
    color: "text-[#1667B7] border-[#1667B7]/20 bg-[#1667B7]/5"
  },
  {
    icon: CreditCard,
    title: "3. Abono de Reserva",
    description: "Realiza el pago de $85.000 COP para asegurar tu bloque.",
    color: "text-[#E63946] border-[#E63946]/20 bg-[#E63946]/5"
  },
  {
    icon: Calendar,
    title: "4. Confirmación de Cita",
    description: "Agendamos tu hora y te enviamos las indicaciones.",
    color: "text-amber-500 border-amber-500/20 bg-amber-500/5"
  },
]

export function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    reason: "",
    service: "",
    day: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = `Hola, me gustaría agendar una cita.\n\nNombre: ${formData.name}\nTeléfono: ${formData.phone}\nMotivo: ${formData.reason}\nServicio: ${formData.service}\nDía preferido: ${formData.day}\n${formData.message ? `Mensaje: ${formData.message}` : ""}`
    window.open(`https://wa.me/15556465891?text=${encodeURIComponent(whatsappMessage)}`, "_blank")
  }

  return (
    <section className="py-16 lg:py-24 bg-transparent relative">
      {/* Decorative colored glow overlays */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-[#1667B7]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Appointment Request Form (spans 7 cols) */}
          <div className="lg:col-span-7">
            <form 
              onSubmit={handleSubmit} 
              className="bg-[#F5F8FB] bg-grid-pattern rounded-[32px] border border-border/70 p-6 sm:p-10 shadow-premium"
            >
              <div className="mb-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
                  Pide tu Valoración
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-black text-foreground tracking-tight">
                  Inicia tu recuperación hoy
                </h3>
                <p className="text-sm text-muted-foreground font-semibold mt-1">
                  Completa los datos y conéctate directamente con nuestro especialista en Cali.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-extrabold text-foreground">
                    Nombre completo
                  </Label>
                  <Input
                    id="name"
                    placeholder="Ej. Carolina Gómez"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12 rounded-xl bg-white border border-border/80 focus-visible:ring-primary/20 shadow-xs"
                  />
                </div>

                {/* WhatsApp Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-extrabold text-foreground">
                    Número de WhatsApp
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Ej. (555) 646-5891"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-12 rounded-xl bg-white border border-border/80 focus-visible:ring-primary/20 shadow-xs"
                  />
                </div>

                {/* Consultation Reason */}
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="reason" className="text-sm font-extrabold text-foreground">
                    Motivo de consulta
                  </Label>
                  <Input
                    id="reason"
                    placeholder="Ej. Dolor lumbar punzante al sentarme hace 3 semanas"
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    required
                    className="h-12 rounded-xl bg-white border border-border/80 focus-visible:ring-primary/20 shadow-xs"
                  />
                </div>

                {/* Service Interest */}
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-sm font-extrabold text-foreground">
                    Servicio de interés
                  </Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger className="h-12 rounded-xl bg-white border border-border/80 focus:ring-primary/20 shadow-xs">
                      <SelectValue placeholder="Selecciona un servicio" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Preferred Day */}
                <div className="space-y-2">
                  <Label htmlFor="day" className="text-sm font-extrabold text-foreground">
                    Día preferido
                  </Label>
                  <Select
                    value={formData.day}
                    onValueChange={(value) => setFormData({ ...formData, day: value })}
                  >
                    <SelectTrigger className="h-12 rounded-xl bg-white border border-border/80 focus:ring-primary/20 shadow-xs">
                      <SelectValue placeholder="Selecciona un día" />
                    </SelectTrigger>
                    <SelectContent>
                      {days.map((day) => (
                        <SelectItem key={day} value={day}>
                          {day}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Optional Message */}
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="message" className="text-sm font-extrabold text-foreground">
                    Detalles adicionales (Opcional)
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntanos si tienes exámenes recientes o antecedentes quirúrgicos..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-[100px] rounded-xl bg-white border border-border/80 focus-visible:ring-primary/20 resize-none shadow-xs"
                  />
                </div>
              </div>

              {/* Action Buttons Grid */}
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <Button type="submit" size="lg" className="rounded-2xl h-14 font-extrabold shadow-md shadow-primary/10">
                  <Calendar className="w-5 h-5 mr-2 stroke-[2.5]" />
                  Enviar Solicitud
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="rounded-2xl h-14 font-extrabold border-2 border-[#25D366] text-[#1E9A4D] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all bg-white shadow-xs"
                  asChild
                >
                  <a
                    href="https://wa.me/15556465891?text=Hola,%20me%20gustar%C3%ADa%20agendar%20una%20cita"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <svg
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp Directo
                  </a>
                </Button>
              </div>

              {/* Outstanding Reservation Fee Alert Callout */}
              <div className="mt-8 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex gap-3.5 items-start">
                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-none" />
                <p className="text-xs sm:text-sm text-foreground font-semibold leading-relaxed">
                  <strong className="text-amber-700 font-extrabold">Importante:</strong> Para confirmar y bloquear de manera definitiva tu espacio reservado en la agenda clínica, se requiere un abono inicial de <span className="text-primary font-black">$85.000 COP</span>.
                </p>
              </div>
            </form>
          </div>

          {/* Elegant Lateral Process Sidebar Guide (spans 5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="bg-[#072B4F] rounded-[32px] p-6 sm:p-8 text-white shadow-premium relative overflow-hidden border border-white/5">
              {/* Background grids */}
              <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#1667B7]/20 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center gap-3.5 mb-8 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/15">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-heading font-black text-xl tracking-tight">
                  Proceso de Reserva
                </h4>
              </div>

              {/* Vertical timeline steps */}
              <div className="space-y-8 relative z-10">
                {steps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-none ${step.color}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        {index < steps.length - 1 && (
                          <div className="w-0.5 h-10 bg-white/10 mt-2" />
                        )}
                      </div>
                      <div>
                        <h5 className="font-heading font-extrabold text-sm text-white">{step.title}</h5>
                        <p className="text-xs text-white/70 font-semibold mt-1 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Trust validation seal */}
              <div className="mt-10 pt-6 border-t border-white/10 flex items-center gap-3 relative z-10">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
                <span className="text-[10px] text-white/60 font-bold uppercase tracking-widest leading-none">
                  Atención Clínica Autorizada en Cali
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
