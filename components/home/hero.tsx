import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/luxury-cotton-fabric-texture-warm-tones.jpg" alt="Premium cotton fabric" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            Weaving Dreams, Stitching Excellence
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
            Luxury and Comfort in Every Stitch
          </p>
          <p className="text-base sm:text-lg text-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Premium cotton and fleece apparel, 100% proudly made in Kenya. From corporate uniforms to custom branding,
            we craft quality that speaks for itself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="text-base px-8">
              <Link href="/products">
                Explore Our Products
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base px-8 bg-transparent">
              <Link href="/quote">Get a Custom Quote</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-foreground/30 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
