import { getSupabaseServerClient } from "@/lib/supabase/server"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowLeft, Phone, Mail } from "lucide-react"
import type { Metadata } from "next"

interface ProductPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const supabase = await getSupabaseServerClient()
  const { data: product } = await supabase.from("products").select("*").eq("slug", slug).single()

  if (!product) {
    return {
      title: "Product Not Found",
    }
  }

  return {
    title: `${product.name} | Tewaw Enterprises`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const supabase = await getSupabaseServerClient()
  const { data: product } = await supabase.from("products").select("*").eq("slug", slug).single()

  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <section className="bg-background py-6 border-b">
        <div className="container mx-auto px-4">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
              <Image
                src={product.image_url || `/placeholder.svg?height=600&width=600&query=${product.name}`}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <p className="text-sm text-primary font-medium mb-2">{product.category}</p>
                <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">{product.name}</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">{product.description}</p>
              </div>

              {/* Features */}
              {product.features && product.features.length > 0 && (
                <div className="space-y-3">
                  <h2 className="font-serif text-2xl text-foreground">Key Features</h2>
                  <ul className="space-y-2">
                    {product.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Price Range */}
              {product.price_range && (
                <div className="bg-muted/50 rounded-lg p-6">
                  <p className="text-sm text-muted-foreground mb-1">Price Range</p>
                  <p className="text-2xl font-semibold text-foreground">{product.price_range}</p>
                  <p className="text-sm text-muted-foreground mt-2">Prices vary based on quantity and customization</p>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="flex-1">
                  <Link href="/quote">Request Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="flex-1 bg-transparent">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>

              {/* Contact Info */}
              <div className="border-t pt-6 space-y-3">
                <p className="text-sm font-medium text-foreground">Need help choosing?</p>
                <div className="flex flex-col gap-2">
                  <a
                    href="tel:+254736619688"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span>+254 736 619 688</span>
                  </a>
                  <a
                    href="mailto:tewawenterprises@gmail.com"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span>tewawenterprises@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Customization Options</h2>
              <p className="text-lg text-muted-foreground">Make it uniquely yours with our customization services</p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-background rounded-lg p-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Embroidery</h3>
                <p className="text-sm text-muted-foreground">High-quality embroidered logos and designs</p>
              </div>

              <div className="bg-background rounded-lg p-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Screen Printing</h3>
                <p className="text-sm text-muted-foreground">Vibrant prints for bulk orders</p>
              </div>

              <div className="bg-background rounded-lg p-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Custom Colors</h3>
                <p className="text-sm text-muted-foreground">Match your brand colors perfectly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Tewaw */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 text-center">Why Choose Tewaw?</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">100% Made in Kenya</h3>
                <p className="text-muted-foreground">
                  From weaving to stitching, every piece is proudly crafted in Kenya
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">Quality Guaranteed</h3>
                <p className="text-muted-foreground">Top-grade materials and expert craftsmanship in every product</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">Flexible Quantities</h3>
                <p className="text-muted-foreground">From small orders to bulk production, we cater to all needs</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">Fast Turnaround</h3>
                <p className="text-muted-foreground">Timely production and delivery to meet your deadlines</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
