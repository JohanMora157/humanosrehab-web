import Image from "next/image"

interface PageHeaderProps {
  badge?: string
  title: string
  description?: string
  bgImage?: string
}

export function PageHeader({ badge, title, description, bgImage }: PageHeaderProps) {
  return (
    <section className="relative py-20 lg:py-28 text-white overflow-hidden bg-[#072B4F]">
      {/* Blurred image background layer (Carousel effect) */}
      {bgImage && (
        <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none">
          <Image
            src={bgImage}
            alt={title}
            fill
            priority
            className="object-cover blur-[5px] scale-[1.05] opacity-40 transition-opacity duration-700"
          />
        </div>
      )}

      {/* Deep clinical gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-[#1667B7]/90 to-[#072B4F]/98 mix-blend-multiply" />

      {/* Micro grid & blueprint lines overlaying the background image */}
      <div className="absolute inset-0 bg-grid-lines pointer-events-none opacity-[0.25]" />
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-[0.35]" />

      {/* Active kinetic thread inside the banner for maximum continuity */}
      <svg className="absolute bottom-0 left-0 w-full h-12 stroke-white/20 fill-none pointer-events-none select-none" viewBox="0 0 1000 50" preserveAspectRatio="none">
        <path d="M0,25 Q250,5 500,25 T1000,25" strokeWidth="1" strokeDasharray="5,5" />
        <path d="M0,20 Q250,0 500,20 T1000,20" strokeWidth="1.5" className="opacity-40 animate-flow-slow" strokeDasharray="100, 300" />
      </svg>
      
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-md text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 shadow-xs border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#E63946] animate-pulse" />
            {badge}
          </div>
        )}
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-[52px] font-black tracking-tight text-balance leading-none">
          {title}
        </h1>
        {description && (
          <p className="mt-6 text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed font-semibold max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}

