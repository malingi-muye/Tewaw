import { Button } from "@/components/ui/button"
import Link from "next/link"

export function BrandStory() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
            <img src="/kenyan-textile-manufacturing-craftsmanship.jpg" alt="Tewaw craftsmanship" className="w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
              Our Story
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Born from a Childhood Dream
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Tewaw Enterprises Limited was envisioned to become a home of beautiful, meaningful apparel — created
                with heart and purpose. We began our journey with the desire to offer not just garments but experiences
                stitched with excellence.
              </p>
              <p>
                Over time, we have grown into a trusted name by staying true to our founding values: authenticity,
                quality, and care for our clients. Every piece tells a story of dedication, luxury, and affordability.
              </p>
              <p className="font-semibold text-foreground">When you wear Tewaw, you wear a dream realized.</p>
            </div>

            <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Vision</h3>
                  <p className="text-sm text-muted-foreground">To become the world class garment stitching gurus</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Mission</h3>
                  <p className="text-sm text-muted-foreground">
                    To provide the ultimate quality product to our business partners
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
