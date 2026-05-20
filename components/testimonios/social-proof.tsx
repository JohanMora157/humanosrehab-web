import { Instagram, Play, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialVideos = [
  {
    id: 1,
    title: "Cuando te duele el cuello",
    description: "Autocuidado y ejercicios clave para aliviar la tensión cervical.",
    platform: "Instagram",
    bgGradient: "from-rose-500/30 to-[#072B4F]/90",
    views: "12.4k",
    url: "https://instagram.com/humanosrehab"
  },
  {
    id: 2,
    title: "Medias de compresión",
    description: "Mitos y realidades de su uso en recuperación deportiva y clínica.",
    platform: "TikTok",
    bgGradient: "from-cyan-500/30 to-[#072B4F]/90",
    views: "8.9k",
    url: "https://tiktok.com/@humanosrehab"
  },
  {
    id: 3,
    title: "Evitar caídas cuidando rodillas",
    description: "Rutina biomecánica para fortalecer estabilidad articular.",
    platform: "Instagram",
    bgGradient: "from-amber-500/30 to-[#072B4F]/90",
    views: "15.1k",
    url: "https://instagram.com/humanosrehab"
  },
  {
    id: 4,
    title: "Movilización visceral",
    description: "Cómo influye la salud digestiva en tus dolores de espalda.",
    platform: "TikTok",
    bgGradient: "from-emerald-500/30 to-[#072B4F]/90",
    views: "21.3k",
    url: "https://tiktok.com/@humanosrehab"
  },
  {
    id: 5,
    title: "Radiculitis vs Radiculopatía",
    description: "Aprende a diferenciar el dolor de nervio comprimido en segundos.",
    platform: "Instagram",
    bgGradient: "from-violet-500/30 to-[#072B4F]/90",
    views: "11.7k",
    url: "https://instagram.com/humanosrehab"
  },
  {
    id: 6,
    title: "Dolor al caminar o correr",
    description: "Análisis biomecánico rápido de la pisada y correcciones habituales.",
    platform: "TikTok",
    bgGradient: "from-[#E63946]/30 to-[#072B4F]/90",
    views: "24.5k",
    url: "https://tiktok.com/@humanosrehab"
  }
]

export function SocialProof() {
  return (
    <section className="py-20 lg:py-24 bg-[#F5F8FB] bg-grid-pattern border-t border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-primary/5">
            Comunidad & Aprendizaje
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-4.5xl font-black text-foreground tracking-tight leading-none">
            Educación física en <span className="text-[#1667B7] text-glow">nuestras redes</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground font-semibold max-w-2xl mx-auto">
            Creemos en la prevención y el aprendizaje activo. Sigue nuestro canal educativo y accede a explicaciones directas para cuidar tu cuerpo.
          </p>
        </div>

        {/* Video grid of 6 vertical cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mb-14">
          {socialVideos.map((video) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[9/16] bg-[#072B4F] rounded-[24px] overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-500 hover:-translate-y-1 block border border-border/50"
            >
              {/* Colored abstract mock video frame bg */}
              <div className={`absolute inset-0 bg-gradient-to-br ${video.bgGradient} transition-transform duration-700 group-hover:scale-105`} />
              
              {/* Grid texture overlay */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />

              {/* Action buttons layer (glowing Play button) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-md group-hover:scale-110 group-hover:bg-[#E63946] group-hover:text-white transition-all duration-300 text-white">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
              </div>

              {/* Top metadata tags */}
              <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/15 backdrop-blur-md text-[9px] font-black text-white uppercase tracking-wider border border-white/10">
                  {video.platform === "Instagram" ? (
                    <Instagram className="w-2.5 h-2.5" />
                  ) : (
                    <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  )}
                  {video.platform}
                </span>

                <span className="inline-flex items-center gap-0.5 text-white/80 text-[10px] font-extrabold">
                  <Eye className="w-3 h-3" />
                  {video.views}
                </span>
              </div>

              {/* Bottom text overlays */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/95 via-black/50 to-transparent z-10 pt-10">
                <h4 className="font-heading font-extrabold text-white text-sm tracking-tight leading-snug group-hover:text-amber-300 transition-colors">
                  {video.title}
                </h4>
                <p className="text-[10px] text-white/70 font-semibold mt-1.5 leading-normal line-clamp-2">
                  {video.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Brand redirect buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild variant="outline" className="rounded-2xl h-12 px-6 font-bold shadow-sm">
            <a
              href="https://instagram.com/humanosrehab"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Instagram className="w-5 h-5 text-[#E63946]" />
              Sigue en Instagram
            </a>
          </Button>
          <Button asChild variant="outline" className="rounded-2xl h-12 px-6 font-bold shadow-sm">
            <a
              href="https://tiktok.com/@humanosrehab"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <svg className="w-4 h-4 fill-current text-foreground" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              Sigue en TikTok
            </a>
          </Button>
        </div>

      </div>
    </section>
  )
}
