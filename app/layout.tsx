import type { Metadata } from 'next'
import { Sora, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const sora = Sora({ subsets: ["latin"], variable: "--font-heading" });
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: 'HUMANOS | Fisioterapia, Readaptación y Movimiento en Cali',
  description: 'Ecosistema de fisioterapia y movimiento en Cali: atención clínica musculoesquelética, acondicionamiento y fuerza, movilidad asistida y formación profesional en Cali Norte.',
  keywords: 'fisioterapia cali, rehabilitación deportiva, terapia manual, dolor de espalda, dolor de cuello, lesiones deportivas, acondicionamiento fisico, stretching cali',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background" suppressHydrationWarning>
      <body className={`${sora.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
