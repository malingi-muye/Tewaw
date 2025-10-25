import { CheckCircle, Zap, Shield, Users, Package, Clock } from "lucide-react"

const strengths = [
  {
    icon: CheckCircle,
    title: "Made in Kenya",
    description: "Entire process, from fabric to finish, proudly crafted in Kenya",
  },
  {
    icon: Users,
    title: "Custom Orders",
    description: "Bulk and corporate branding tailored to your specific needs",
  },
  {
    icon: Shield,
    title: "Quality Focused",
    description: "Top-grade cotton fleece and blends for lasting durability",
  },
  {
    icon: Package,
    title: "Affordable Pricing",
    description: "Direct manufacturing cost advantage passed to you",
  },
  {
    icon: Zap,
    title: "Flexible Quantities",
    description: "Catering for both small and large orders with ease",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Timely production and delivery to meet your deadlines",
  },
]

export function Strengths() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Why Choose Tewaw</h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            We combine traditional craftsmanship with modern efficiency to deliver exceptional value
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strengths.map((strength, index) => {
            const Icon = strength.icon
            return (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                    <Icon size={24} className="text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{strength.title}</h3>
                  <p className="text-sm text-primary-foreground/80 leading-relaxed">{strength.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
