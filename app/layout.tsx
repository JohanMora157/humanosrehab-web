import type { Metadata } from 'next'
import { Sora, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const sora = Sora({ subsets: ["latin"], variable: "--font-heading" });
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: 'Humanos Fisioterapia y Rehabilitación Deportiva | Cali, Colombia',
  description: 'Fisioterapia y rehabilitación deportiva en Cali. Tratamientos personalizados para aliviar el dolor, recuperar movilidad y volver a tus actividades. Prof. Julian Mauricio Saenz Barahona.',
  keywords: 'fisioterapia cali, rehabilitación deportiva, terapia manual, dolor de espalda, dolor de cuello, lesiones deportivas, masaje terapéutico',
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
