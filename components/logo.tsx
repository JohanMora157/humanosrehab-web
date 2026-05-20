import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  variant?: "default" | "light"
}

export function Logo({ className = "", variant = "default" }: LogoProps) {
  const src = variant === "light" ? "/logo_blanco.png" : "/logo_azul.png"
  
  return (
    <div className={cn("relative flex items-center select-none", className)}>
      <img
        src={src}
        alt="Humanos Fisioterapia y Rehabilitación Deportiva"
        className="h-full w-auto max-w-full object-contain rounded-sm"
        loading="eager"
      />
    </div>
  )
}
