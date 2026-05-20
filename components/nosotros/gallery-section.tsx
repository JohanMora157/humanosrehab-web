import Image from "next/image"

const images = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pm1Y5QiXI4Md8qgc8KFxrZ2HKcx0h2.png",
    alt: "Tratamiento personalizado en Camilla Clínica",
    title: "Tratamiento Personalizado",
    subtitle: "Atención 1:1 focalizada",
    gridClass: "md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dsYNDGnE85fZdm7sTVQBW43BhvXFS2.png",
    alt: "Ejercicios terapéuticos guiados de miembro inferior",
    title: "Rehabilitación Activa",
    subtitle: "Fortalecimiento neuromuscular",
    gridClass: "aspect-square"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uQhlmMcbHYP9AMQ8TbcGpEUG0A71Ud.png",
    alt: "Aplicación de terapia manual en hombro",
    title: "Terapia Manual",
    subtitle: "Movilización articular avanzada",
    gridClass: "aspect-square"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tFrrZzWAuE3GyimyfBWoUNZpKmZFQ0.png",
    alt: "Alivio y masaje terapéutico en la espalda",
    title: "Masaje Clínico",
    subtitle: "Alivio de tensión y espasmos",
    gridClass: "aspect-square"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-y6Srx6vFmSfcjBAuMdHH3rmdpLNagd.png",
    alt: "Terapia deportiva para pantorrillas y tendón de Aquiles",
    title: "Descarga Muscular",
    subtitle: "Recuperación deportiva óptima",
    gridClass: "aspect-square"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-W7kul7TsRGLitaYXgTnfkQFW5QutbD.png",
    alt: "Readaptación al esfuerzo y fuerza",
    title: "Acondicionamiento Físico",
    subtitle: "Prevención de recaídas clínicas",
    gridClass: "md:col-span-2 aspect-[2/1] md:aspect-auto"
  }
]

export function GallerySection() {
  return (
    <section className="py-16 lg:py-24 bg-transparent relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            Nuestras Instalaciones
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-4.5xl font-black text-foreground tracking-tight leading-none">
            Espacios reales, <span className="text-[#1667B7] text-glow">resultados reales</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground font-semibold max-w-2xl mx-auto">
            Explora imágenes auténticas de nuestro consultorio en Cali, donde combinamos calidez humana, comodidad e instrumentos de nivel profesional.
          </p>
        </div>

        {/* Irregular Bento Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-[24px] shadow-premium border-2 border-white hover:shadow-premium-hover transition-all duration-500 ${image.gridClass}`}
            >
              {/* Image Frame */}
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-w-768px) 100vw, (max-w-1024px) 50vw, 400px"
              />
              
              {/* Dynamic Gradient Mask (fades in on hover) */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300 pointer-events-none" />

              {/* Text overlays */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10 transition-transform duration-300 pointer-events-none">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#E63946] group-hover:text-amber-400 transition-colors">
                  {image.subtitle}
                </span>
                <h4 className="font-heading font-black text-lg sm:text-xl mt-1 tracking-tight">
                  {image.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
