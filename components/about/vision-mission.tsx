import { Target, Compass } from "lucide-react"

export function VisionMission() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Vision & Mission
            </h2>
            <p className="text-lg text-muted-foreground">Guiding principles that drive everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-10 border border-primary/10">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Target size={32} className="text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Vision</h3>
              <p className="text-lg text-foreground leading-relaxed">
                "To become the world class garment stitching gurus"
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent/5 to-secondary/5 rounded-2xl p-8 md:p-10 border border-accent/10">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Compass size={32} className="text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Mission</h3>
              <p className="text-lg text-foreground leading-relaxed">
                "To provide the ultimate quality product to our business partners"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
