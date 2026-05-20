import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 relative overflow-hidden bg-white">
        {/* Extremely faint technical dot grid & blueprint lines */}
        <div className="absolute inset-0 bg-grid-lines pointer-events-none opacity-[0.8]" />
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-[0.95]" />

        {/* Dynamic low-opacity color blobs spaced along the entire page scroll */}
        <div className="absolute top-[5%] left-[-15%] w-[600px] h-[600px] bg-[#1667B7]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-[28%] right-[-15%] w-[700px] h-[700px] bg-[#E63946]/5.5 rounded-full blur-[170px] pointer-events-none" />
        <div className="absolute top-[52%] left-[-10%] w-[650px] h-[650px] bg-[#072B4F]/8 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-[75%] right-[-10%] w-[700px] h-[700px] bg-[#1667B7]/8 rounded-full blur-[170px] pointer-events-none" />
        <div className="absolute top-[92%] left-[-8%] w-[600px] h-[600px] bg-[#E63946]/5 rounded-full blur-[140px] pointer-events-none" />
        
        {/* Left-side kinetic curves & postural guide lines (top third) */}
        <svg className="absolute top-[15%] left-0 h-[600px] w-32 stroke-[#1667B7]/32 fill-none pointer-events-none select-none opacity-100 animate-sway-left" viewBox="0 0 100 600" preserveAspectRatio="none">
          {/* Static anatomical line */}
          <path d="M0,50 Q40,150 10,250 T80,450 T0,550" strokeWidth="1.5" />
          {/* Energy pulse flowing through the anatomical fiber */}
          <path d="M0,50 Q40,150 10,250 T80,450 T0,550" strokeWidth="2.2" stroke="#1667B7" className="opacity-75 animate-flow-fast" strokeDasharray="100, 250" />
          {/* Reverse flowing dotted postural reference */}
          <path d="M0,70 Q60,140 20,270 T90,430 T0,570" strokeWidth="0.8" strokeDasharray="3,3" className="animate-flow-reverse" />
        </svg>

        {/* Right-side kinetic curves & postural guide lines (middle third) */}
        <svg className="absolute top-[48%] right-0 h-[700px] w-40 stroke-[#E63946]/24 fill-none pointer-events-none select-none opacity-90 animate-sway-right" viewBox="0 0 100 700" preserveAspectRatio="none">
          {/* Static anatomical line */}
          <path d="M100,50 Q60,180 90,300 T20,500 T100,650" strokeWidth="1.5" />
          {/* Energy pulse flowing through the anatomical fiber */}
          <path d="M100,50 Q60,180 90,300 T20,500 T100,650" strokeWidth="2.2" stroke="#E63946" className="opacity-70 animate-flow-slow" strokeDasharray="120, 280" />
          {/* Reverse flowing dotted postural reference */}
          <path d="M100,80 Q40,190 80,320 T10,480 T100,670" strokeWidth="0.8" strokeDasharray="4,4" className="animate-flow-reverse" />
        </svg>

        {/* Left-side kinetic curves & postural guide lines (lower third) */}
        <svg className="absolute top-[78%] left-0 h-[650px] w-36 stroke-[#1667B7]/26 fill-none pointer-events-none select-none opacity-95 animate-sway-left" viewBox="0 0 100 650" preserveAspectRatio="none">
          {/* Static anatomical line */}
          <path d="M0,60 Q50,170 15,310 T70,490 T0,600" strokeWidth="1.5" />
          {/* Energy pulse flowing through the anatomical fiber */}
          <path d="M0,60 Q50,170 15,310 T70,490 T0,600" strokeWidth="2.2" stroke="#1667B7" className="opacity-70 animate-flow-fast" strokeDasharray="110, 260" />
          {/* Reverse flowing dotted postural reference */}
          <path d="M0,90 Q30,190 35,280 T90,470 T0,620" strokeWidth="0.8" strokeDasharray="3,3" className="animate-flow-reverse" />
        </svg>

        <div className="relative z-10">{children}</div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
