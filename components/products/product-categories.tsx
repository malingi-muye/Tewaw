import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const categories = [
  {
    title: "Sweaters",
    slug: "sweaters",
    description:
      "Premium knit sweaters crafted for comfort and style. Perfect for casual wear, corporate branding, and custom designs. Available in multiple colors and sizes.",
    features: ["Quality knit fabric", "Custom embroidery", "Multiple color options", "Bulk orders available"],
    image: "/sweater-collection-display.jpg",
  },
  {
    title: "Jeans",
    slug: "jeans",
    description:
      "Durable and comfortable denim wear for everyday use. Customizable with your brand or design, perfect for corporate casual or personal wear.",
    features: ["Premium denim", "Multiple styles", "Custom branding", "Fast turnaround"],
    image: "/jeans-variety-collection.jpg",
  },
  {
    title: "Hoodies, Sweatpants & Sweatshirts",
    slug: "hoodies-sweatpants-sweatshirts",
    description:
      "Versatile comfort wear perfect for loungewear, athletic activities, or casual corporate wear. Premium fleece and cotton blends for ultimate comfort.",
    features: ["Soft fleece interior", "Elastic waistbands", "Custom designs", "Matching sets available"],
    image: "/hoodie-sweatpants-set.jpg",
  },
  {
    title: "Ponchos",
    slug: "ponchos",
    description:
      "Stylish and practical ponchos for all seasons. Perfect for outdoor events, layering, or unique fashion statements with custom branding options.",
    features: ["Premium fabrics", "One-size-fits-most", "Custom colors", "Easy to wear"],
    image: "/poncho-collection-display.jpg",
  },
  {
    title: "Undergarments",
    slug: "undergarments",
    description:
      "High-quality undergarments with custom branding options. Perfect for corporate giveaways, personal use, and retail offerings.",
    features: ["Comfortable fit", "Quality materials", "Custom designs", "Bulk availability"],
    image: "/undergarment-collection.jpg",
  },
  {
    title: "Tracksuits & Games Kit",
    slug: "tracksuits-games-kit",
    description:
      "Complete athletic sets combining style and functionality. Ideal for sports teams, schools, corporate wellness programs, and active individuals.",
    features: ["Coordinated sets", "Moisture-wicking fabric", "Custom team colors", "Durable construction"],
    image: "/tracksuit-games-kit.jpg",
  },
  {
    title: "Shirts & Polo Shirts",
    slug: "shirts-polo-shirts",
    description:
      "Professional and casual shirt options including T-shirts and polo shirts. Perfect for corporate environments, events, and brand promotion.",
    features: ["Breathable fabrics", "Multiple styles", "Logo embroidery", "Screen printing available"],
    image: "/shirts-polo-collection.jpg",
  },
]

export function ProductCategories() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Product Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive apparel solutions for businesses, organizations, and individuals
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category, index) => (
            <Card key={index} className="overflow-hidden">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent
                  className={`p-6 md:p-8 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">{category.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{category.description}</p>
                  <ul className="space-y-2 mb-6">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild variant="outline" className="w-fit bg-transparent">
                      <Link href={`/products/${category.slug}`}>View Details</Link>
                    </Button>
                    <Button asChild className="w-fit">
                      <Link href="/quote">Request Quote</Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
