import type { Metadata } from "next"
import { GiftCardAdminPanel } from "@/components/gift-cards/gift-card-admin-panel"

export const metadata: Metadata = {
  title: "Panel tarjetas de regalo | Humanos Rehab",
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminTarjetasRegaloPage() {
  return <GiftCardAdminPanel />
}
