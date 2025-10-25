import { Palette, Printer, Scissors, Sparkles } from "lucide-react"

const options = [
  {
    icon: Palette,
    title: "Custom Colors",
    description: "Choose from a wide range of fabric colors or request custom color matching for your brand.",
  },
  {
    icon: Printer,
    title: "Screen Printing",
    description: "High-quality screen printing for logos, designs, and text. Perfect for bulk orders.",
  },
  {
    icon: Scissors,
    title: "Embroidery",
    description: "Premium embroidery services for a professional, long-lasting finish on any garment.",
  },
  {
    icon: Sparkles,
    title: "Specialized Fabrics",
    description: "Request specific fabric blends, weights, or treatments to meet your exact requirements.",
  },
]

export function CustomizationOptions() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Customization Options
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Make every piece uniquely yours with our comprehensive customization services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {options.map((option, index) => {
            const Icon = option.icon
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon size={28} className="text-primary" />
                </div>
                <h3 className="font-semibold text-xl text-foreground mb-2">{option.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{option.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-primary/10 text-center">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Flexible Order Quantities</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you need 10 pieces or 10,000, we accommodate orders of all sizes. Our flexible manufacturing process
            ensures quality regardless of quantity, with competitive pricing for bulk orders.
          </p>
        </div>
      </div>
    </section>
  )
}
