import { Card, CardContent } from "@/components/ui/card"

const portfolioItems = [
  {
    title: "Corporate Uniforms - Tech Company",
    category: "Corporate",
    description: "Custom branded polo shirts and hoodies for a leading Nairobi tech startup. 200+ pieces delivered.",
    image: "/portfolio-corporate-tech-uniforms.jpg",
  },
  {
    title: "School Sports Kits",
    category: "Education",
    description: "Complete tracksuit sets with school branding for athletics program. Durable and comfortable.",
    image: "/portfolio-school-sports-kits.jpg",
  },
  {
    title: "NGO Event Merchandise",
    category: "NGO",
    description: "Branded t-shirts and tote bags for environmental conservation campaign. 500+ units.",
    image: "/portfolio-ngo-event-merchandise.jpg",
  },
  {
    title: "Restaurant Staff Uniforms",
    category: "Hospitality",
    description: "Professional aprons and polo shirts for upscale restaurant chain. Custom embroidery.",
    image: "/portfolio-restaurant-uniforms.jpg",
  },
  {
    title: "Government Institution Jackets",
    category: "Government",
    description: "High-quality fleece jackets with official branding for government department staff.",
    image: "/portfolio-government-jackets.jpg",
  },
  {
    title: "SACCO Promotional Items",
    category: "Financial",
    description: "Branded hoodies and caps for member appreciation event. Quality materials, fast delivery.",
    image: "/portfolio-sacco-promotional.jpg",
  },
  {
    title: "Cultural Heritage Collection",
    category: "Retail",
    description: "Fleece-lined Maasai shukas and kikoys for tourism retail. Authentic patterns, modern comfort.",
    image: "/portfolio-cultural-heritage.jpg",
  },
  {
    title: "Corporate Wellness Program",
    category: "Corporate",
    description: "Custom sweatpants and sweatshirts for employee wellness initiative. Bulk order, competitive pricing.",
    image: "/portfolio-wellness-program.jpg",
  },
  {
    title: "Event Staff Uniforms",
    category: "Events",
    description: "Branded t-shirts and caps for large-scale conference. Quick turnaround, consistent quality.",
    image: "/portfolio-event-staff-uniforms.jpg",
  },
]

export function PortfolioGallery() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Recent Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of our diverse client work across various industries and sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
