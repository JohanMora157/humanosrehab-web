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
        <svg className="absolute top-[15%] left-0 h-[600px] w-32 fill-none pointer-events-none select-none opacity-100 animate-sway-left" viewBox="0 0 100 600" preserveAspectRatio="none">
          {/* Static anatomical line */}
          <path d="M0,50 Q40,150 10,250 T80,450 T0,550" stroke="#1667B7" strokeWidth="1.5" className="opacity-30" />
          {/* Energy pulse flowing through the anatomical fiber */}
          <path d="M0,50 Q40,150 10,250 T80,450 T0,550" strokeWidth="2.2" stroke="#1667B7" className="opacity-75 animate-flow-fast" strokeDasharray="100, 250" />
          {/* Extra biological fiber (Red Accent) */}
          <path d="M0,90 Q80,180 30,290 T70,410 T0,530" strokeWidth="0.8" stroke="#E63946" className="opacity-45 animate-flow-slow" strokeDasharray="60, 200" />
          {/* Reverse flowing dotted postural reference */}
          <path d="M0,70 Q60,140 20,270 T90,430 T0,570" stroke="#1667B7" strokeWidth="0.8" strokeDasharray="3,3" className="opacity-30 animate-flow-reverse" />
          
          {/* Postural Motion Nodes (articulation analysis markers) */}
          <circle cx="28" cy="200" r="4.5" fill="#E63946" className="animate-pulse opacity-85" />
          <line x1="28" y1="200" x2="48" y2="200" stroke="#E63946" strokeWidth="0.5" strokeDasharray="2,2" className="opacity-60" />
          <circle cx="72" cy="420" r="3.5" fill="#1667B7" className="animate-pulse opacity-90" />
        </svg>

        {/* TRANSVERSAL KINETIC CURVES 1 (Weaving across screen at ~28% height) */}
        <svg className="absolute top-[28%] left-0 w-full h-[400px] fill-none pointer-events-none select-none opacity-80 z-0" viewBox="0 0 1440 400" preserveAspectRatio="none">
          {/* Static main anatomical curve */}
          <path d="M-40,100 C300,320 600,40 1000,360 C1200,440 1350,150 1480,250" stroke="#1667B7" strokeWidth="1" className="opacity-12" />
          {/* Flowing energy pulse */}
          <path d="M-40,100 C300,320 600,40 1000,360 C1200,440 1350,150 1480,250" stroke="#1667B7" strokeWidth="1.8" className="opacity-30 animate-flow-slow" strokeDasharray="120, 280" />
          {/* Secondary dynamic fiber (Red Accent) */}
          <path d="M-40,150 C280,360 580,90 980,310 C1180,390 1380,110 1480,200" stroke="#E63946" strokeWidth="0.8" className="opacity-15 animate-flow-fast" strokeDasharray="65, 220" />
          {/* Reverse flowing dotted postural reference */}
          <path d="M-40,120 C290,340 590,70 990,340 C1190,410 1370,130 1480,230" stroke="#1667B7" strokeWidth="0.8" strokeDasharray="3,3" className="opacity-15 animate-flow-reverse" />
          
          {/* Biomechanical Motion Nodes (Joint capture markers) */}
          <g>
            <circle cx="450" cy="200" r="4.5" fill="#E63946" className="animate-pulse opacity-70" />
            <line x1="430" y1="200" x2="470" y2="200" stroke="#E63946" strokeWidth="0.5" strokeDasharray="2,2" className="opacity-40" />
            <line x1="450" y1="180" x2="450" y2="220" stroke="#E63946" strokeWidth="0.5" strokeDasharray="2,2" className="opacity-40" />
          </g>
          <g>
            <circle cx="1000" cy="360" r="3.5" fill="#1667B7" className="animate-pulse opacity-75" />
            <line x1="980" y1="360" x2="1020" y2="360" stroke="#1667B7" strokeWidth="0.5" strokeDasharray="2,2" className="opacity-40" />
          </g>
        </svg>

        {/* Right-side kinetic curves & postural guide lines (middle third) */}
        <svg className="absolute top-[48%] right-0 h-[700px] w-40 fill-none pointer-events-none select-none opacity-90 animate-sway-right" viewBox="0 0 100 700" preserveAspectRatio="none">
          {/* Static anatomical line */}
          <path d="M100,50 Q60,180 90,300 T20,500 T100,650" stroke="#E63946" strokeWidth="1.5" className="opacity-25" />
          {/* Energy pulse flowing through the anatomical fiber */}
          <path d="M100,50 Q60,180 90,300 T20,500 T100,650" strokeWidth="2.2" stroke="#E63946" className="opacity-70 animate-flow-slow" strokeDasharray="120, 280" />
          {/* Extra biological fiber (Blue Accent) */}
          <path d="M100,90 Q30,190 70,320 T10,470 T100,620" strokeWidth="0.8" stroke="#1667B7" className="opacity-45 animate-flow-fast" strokeDasharray="70, 190" />
          {/* Reverse flowing dotted postural reference */}
          <path d="M100,80 Q40,190 80,320 T10,480 T100,670" stroke="#E63946" strokeWidth="0.8" strokeDasharray="4,4" className="opacity-25 animate-flow-reverse" />
          
          {/* Postural Motion Nodes (articulation analysis markers) */}
          <circle cx="82" cy="250" r="3.5" fill="#1667B7" className="animate-pulse opacity-85" />
          <line x1="82" y1="250" x2="62" y2="250" stroke="#1667B7" strokeWidth="0.5" strokeDasharray="2,2" className="opacity-60" />
          <circle cx="28" cy="460" r="4.5" fill="#E63946" className="animate-pulse opacity-90" />
        </svg>

        {/* TRANSVERSAL KINETIC CURVES 2 (Weaving across screen at ~58% height) */}
        <svg className="absolute top-[58%] left-0 w-full h-[450px] fill-none pointer-events-none select-none opacity-80 z-0" viewBox="0 0 1440 450" preserveAspectRatio="none">
          {/* Static main anatomical curve */}
          <path d="M1480,100 C1140,320 840,40 500,380 C300,460 150,150 -40,250" stroke="#E63946" strokeWidth="1" className="opacity-12" />
          {/* Flowing energy pulse */}
          <path d="M1480,100 C1140,320 840,40 500,380 C300,460 150,150 -40,250" stroke="#E63946" strokeWidth="1.8" className="opacity-30 animate-flow-fast" strokeDasharray="140, 300" />
          {/* Secondary dynamic fiber (Blue Accent) */}
          <path d="M1480,150 C1120,360 820,90 480,330 C280,410 130,110 -40,200" stroke="#1667B7" strokeWidth="0.8" className="opacity-15 animate-flow-slow" strokeDasharray="75, 230" />
          {/* Reverse flowing dotted postural reference */}
          <path d="M1480,120 C1130,340 830,70 490,350 C290,440 140,130 -40,230" stroke="#E63946" strokeWidth="0.8" strokeDasharray="4,4" className="opacity-12 animate-flow-reverse" />
          
          {/* Biomechanical Motion Nodes (Joint capture markers) */}
          <g>
            <circle cx="950" cy="220" r="4.5" fill="#1667B7" className="animate-pulse opacity-70" />
            <line x1="930" y1="220" x2="970" y2="220" stroke="#1667B7" strokeWidth="0.5" strokeDasharray="2,2" className="opacity-40" />
            <line x1="950" y1="200" x2="950" y2="240" stroke="#1667B7" strokeWidth="0.5" strokeDasharray="2,2" className="opacity-40" />
          </g>
          <g>
            <circle cx="350" cy="380" r="3.5" fill="#E63946" className="animate-pulse opacity-75" />
            <line x1="330" y1="380" x2="370" y2="380" stroke="#E63946" strokeWidth="0.5" strokeDasharray="2,2" className="opacity-40" />
          </g>
        </svg>

        {/* Left-side kinetic curves & postural guide lines (lower third) */}
        <svg className="absolute top-[78%] left-0 h-[650px] w-36 fill-none pointer-events-none select-none opacity-95 animate-sway-left" viewBox="0 0 100 650" preserveAspectRatio="none">
          {/* Static anatomical line */}
          <path d="M0,60 Q50,170 15,310 T70,490 T0,600" stroke="#1667B7" strokeWidth="1.5" className="opacity-25" />
          {/* Energy pulse flowing through the anatomical fiber */}
          <path d="M0,60 Q50,170 15,310 T70,490 T0,600" strokeWidth="2.2" stroke="#1667B7" className="opacity-70 animate-flow-fast" strokeDasharray="110, 260" />
          {/* Extra biological fiber (Red Accent) */}
          <path d="M0,100 Q70,200 25,320 T60,460 T0,580" strokeWidth="0.8" stroke="#E63946" className="opacity-45 animate-flow-slow" strokeDasharray="80, 220" />
          {/* Reverse flowing dotted postural reference */}
          <path d="M0,90 Q30,190 35,280 T90,470 T0,620" stroke="#1667B7" strokeWidth="0.8" strokeDasharray="3,3" className="opacity-25 animate-flow-reverse" />
          
          {/* Postural Motion Nodes (articulation analysis markers) */}
          <circle cx="32" cy="240" r="4.5" fill="#E63946" className="animate-pulse opacity-85" />
          <line x1="32" y1="240" x2="52" y2="240" stroke="#E63946" strokeWidth="0.5" strokeDasharray="2,2" className="opacity-60" />
          <circle cx="62" cy="440" r="3.5" fill="#1667B7" className="animate-pulse opacity-90" />
        </svg>

        {/* TRANSVERSAL KINETIC CURVES 3 (Weaving across screen at ~84% height) */}
        <svg className="absolute top-[84%] left-0 w-full h-[400px] fill-none pointer-events-none select-none opacity-80 z-0" viewBox="0 0 1440 400" preserveAspectRatio="none">
          {/* Static main anatomical curve */}
          <path d="M-40,200 C300,50 700,350 1000,100 C1200,20 1350,300 1480,150" stroke="#1667B7" strokeWidth="1" className="opacity-12" />
          {/* Flowing energy pulse */}
          <path d="M-40,200 C300,50 700,350 1000,100 C1200,20 1350,300 1480,150" stroke="#1667B7" strokeWidth="1.8" className="opacity-30 animate-flow-slow" strokeDasharray="110, 260" />
          {/* Secondary dynamic fiber (Red Accent) */}
          <path d="M-40,240 C320,90 680,390 980,140 C1180,60 1370,340 1480,190" stroke="#E63946" strokeWidth="0.8" className="opacity-15 animate-flow-fast" strokeDasharray="70, 180" />
          
          {/* Biomechanical Motion Nodes (Joint capture markers) */}
          <g>
            <circle cx="700" cy="280" r="4.5" fill="#E63946" className="animate-pulse opacity-70" />
            <line x1="680" y1="280" x2="720" y2="280" stroke="#E63946" strokeWidth="0.5" strokeDasharray="2,2" className="opacity-40" />
            <line x1="700" y1="260" x2="700" y2="300" stroke="#E63946" strokeWidth="0.5" strokeDasharray="2,2" className="opacity-40" />
          </g>
          <g>
            <circle cx="1200" cy="100" r="3.5" fill="#1667B7" className="animate-pulse opacity-75" />
          </g>
        </svg>

        <div className="relative z-10">{children}</div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
