import { Star, Users, ThumbsUp, Award } from "lucide-react"

const stats = [
  { icon: Star, value: "5.0", label: "Calificación en Google", color: "text-amber-500" },
  { icon: Users, value: "+171", label: "Opiniones verificadas", color: "text-primary" },
  { icon: ThumbsUp, value: "100%", label: "Pacientes satisfechos", color: "text-green-500" },
  { icon: Award, value: "Top", label: "Fisioterapia en Cali", color: "text-ring" },
]

export function TestimonialsStats() {
  return (
    <section className="py-12 bg-transparent border-b border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary mb-4 ${stat.color}`}>
                <stat.icon className="w-7 h-7" />
              </div>
              <p className="font-heading text-3xl sm:text-4xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
