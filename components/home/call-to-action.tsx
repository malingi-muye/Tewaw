import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"

export function CallToAction() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8 md:p-12 lg:p-16 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you need corporate uniforms, promotional apparel, or a custom collection, we're here to bring your
            vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button asChild size="lg" className="text-base px-8">
              <Link href="/quote">Request a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base px-8 bg-transparent">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-muted-foreground">
            <a href="tel:+254736619688" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Phone size={16} />
              +254 736 619 688
            </a>
            <a
              href="mailto:tewawenterprises@gmail.com"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Mail size={16} />
              tewawenterprises@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
