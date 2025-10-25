import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const products = [
  {
    title: "Hoodies, Sweatpants & Sweatshirts",
    slug: "hoodies-sweatpants-sweatshirts",
    description: "Soft, warm, and perfect for branding. Premium cotton fleece for ultimate comfort and style.",
    image: "/hoodie-sweatpants-set.jpg",
  },
  {
    title: "Shirts & Polo Shirts",
    slug: "shirts-polo-shirts",
    description: "Professional and versatile options. Customization with embroidery and screen printing.",
    image: "/shirts-polo-collection.jpg",
  },
  {
    title: "Tracksuits & Games Kit",
    slug: "tracksuits-games-kit",
    description: "Complete athletic sets for teams and individuals. Durable and stylish performance wear.",
    image: "/tracksuit-games-kit.jpg",
  },
  {
    title: "Sweaters",
    slug: "sweaters",
    description: "Premium knit comfort wear. Perfect for layering and custom branding options.",
    image: "/sweater-collection-display.jpg",
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From everyday essentials to custom corporate wear, we craft apparel that combines quality with affordability
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow gap-4 rounded-lg py-4">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-serif text-lg md:text-xl font-bold text-foreground mb-1">{product.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">{product.description}</p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/products/${product.slug}`}>View Details</Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link href="/quote">Request Quote</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
