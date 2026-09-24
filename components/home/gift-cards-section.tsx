import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Gift, ShieldCheck, HeartPulse, Send } from "lucide-react"

export function GiftCardsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#fbfdff] relative overflow-hidden border-t border-primary/5">
      {/* Background gradients */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#1667B7]/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#E63946]/5 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Left Column: Copywriting */}
          <div className="space-y-6 max-w-xl">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E63946]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#E63946]">
                🎁 Regala Bienestar
              </span>
              <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight">
                Tarjetas de Regalo de Humanos Rehab
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              ¿Quieres hacer un regalo especial? Regala salud, alivio del dolor y mejor calidad de vida. Con nuestras Gift Cards personalizadas, puedes regalar sesiones individuales o packs de valoración y terapia a tus seres queridos.
            </p>

            {/* Feature list */}
            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm">100% Seguras</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Pago digital en línea y activación automática.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DBAB57]/10 text-[#DBAB57]">
                  <HeartPulse className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm">Regalo Personalizado</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Personaliza el mensaje y el destinatario.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-2xl px-8 h-14 text-base font-semibold shadow-lg hover:shadow-xl transition-all">
                <Link href="/tarjetas-regalo" className="flex items-center gap-2">
                  <Gift className="w-5 h-5" />
                  Comprar Tarjeta de Regalo
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Gift Card Mockup */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in">
            {/* Visual background grids */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10 -rotate-3 scale-110 pointer-events-none" />
            
            {/* The mockup card */}
            <div className="relative w-full max-w-md aspect-[1.55] overflow-hidden rounded-2xl border-[6px] border-primary bg-white shadow-2xl transition-all duration-500 hover:scale-105 hover:rotate-1">
              <div className="absolute inset-2.5 z-10 rounded-xl border border-[#DBAB57]/50" />
              <div className="absolute inset-0 bg-gradient-to-br from-white via-[#fbfdff] to-[#eaf5ff] opacity-90" />
              <div className="absolute -right-14 -top-16 h-60 w-60 rounded-full bg-[#1667B7]/10" />
              <div className="absolute -bottom-20 right-20 h-52 w-52 rounded-full bg-[#DBAB57]/20" />
              
              <div className="relative z-20 flex h-full flex-col justify-between p-5 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <img src="/logo_azul.png" alt="Humanos Rehab" className="h-10 w-auto" />
                  <span className="rounded-full bg-[#E63946] px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-white">
                    GIFT CARD
                  </span>
                </div>

                <div className="max-w-[70%]">
                  <p className="text-[10px] font-black uppercase tracking-wider text-primary/80">Para</p>
                  <h3 className="mt-0.5 font-heading text-xl sm:text-2xl font-black text-foreground leading-tight">
                    Alguien Especial
                  </h3>
                  <p className="mt-2 text-[11px] font-medium leading-normal text-muted-foreground">
                    "Un regalo para cuidarte, moverte mejor y sentirte increíble."
                  </p>
                </div>

                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-wider text-primary/80">Regalo</p>
                    <p className="mt-0.5 text-[11px] font-bold text-foreground">
                      Valoración + Fisioterapia
                    </p>
                  </div>
                  <div className="rounded bg-primary px-2.5 py-1.5 text-white text-[9px] font-bold border border-[#DBAB57]/30">
                    Código Activo
                  </div>
                </div>
              </div>
            </div>
            
            {/* Elegant overlay badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 rounded-2xl bg-white p-4 shadow-xl border border-primary/5 flex items-center gap-3 max-w-xs animate-bounce-slow">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1E9A4D]/10 text-[#1E9A4D]">
                <Send className="h-5.5 w-5.5" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-xs leading-none">Envío Automático</h4>
                <p className="text-[10px] text-muted-foreground mt-1 leading-normal">Se envía directamente por WhatsApp al completarse el pago.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
