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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{product.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{product.description}</p>
                <div className="flex flex-col sm:flex-row gap-3">
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
