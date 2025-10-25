import { Card, CardContent } from "@/components/ui/card"
import { Zap, Scissors, Grid3x3, Pencil, Cog, Layers, Wind, Lock } from "lucide-react"

const services = [
  {
    title: "Blind Hemming",
    description: "Precision hemming with minimal visible stitching for a clean, professional finish.",
    icon: Scissors,
  },
  {
    title: "Button Hole & Button Attach",
    description: "Expert buttonhole creation and secure button attachment for durability.",
    icon: Grid3x3,
  },
  {
    title: "Pleating",
    description: "Professional pleating services for structured, stylish garment designs.",
    icon: Layers,
  },
  {
    title: "Straight Stitching",
    description: "Clean, precise straight stitching for seams and hems with consistent quality.",
    icon: Pencil,
  },
  {
    title: "Knitting",
    description: "Custom knitting services for sweaters, garments, and specialized textile creation.",
    icon: Cog,
  },
  {
    title: "Kansai Stitching",
    description: "Specialized Kansai stitching technique for decorative and functional seams.",
    icon: Zap,
  },
  {
    title: "Overlock Stitching",
    description: "Durable overlock stitching that secures and finishes fabric edges professionally.",
    icon: Wind,
  },
  {
    title: "Flat-Lock Stitching",
    description: "Flat-lock technique for comfortable, flexible seams ideal for performance wear.",
    icon: Lock,
  },
]

export function MachineServices() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Machine Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional finishing and specialized stitching services to elevate your garments with precision and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 md:mt-16 p-8 md:p-12 bg-secondary/10 rounded-lg border border-secondary/20">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Complete Garment Solutions
            </h3>
            <p className="text-muted-foreground mb-6">
              Combine our quality apparel with professional machine services for the perfect finished product. Whether you need simple hemming or complex custom stitching, our team has the expertise and equipment to deliver exceptional results.
            </p>
            <p className="text-sm text-foreground/80">
              Contact us for a custom quote on your specific finishing and stitching requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
