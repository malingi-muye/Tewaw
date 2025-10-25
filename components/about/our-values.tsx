import { Heart, Award, Handshake, Sparkles } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Authenticity",
    description: "We stay true to our roots, creating genuine products that reflect Kenyan heritage and craftsmanship.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "Every stitch, every fabric choice, every detail is carefully considered to ensure excellence.",
  },
  {
    icon: Handshake,
    title: "Client Care",
    description: "Your satisfaction is our priority. We build lasting relationships through exceptional service.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "We blend traditional techniques with modern methods to create apparel that stands out.",
  },
]

export function OurValues() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">Our Values</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide our work and define who we are
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon size={28} className="text-primary" />
                </div>
                <h3 className="font-semibold text-xl text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
