import type { Metadata } from "next"
import { QuoteHero } from "@/components/quote/quote-hero"
import { QuoteForm } from "@/components/quote/quote-form"
import { QuoteInfo } from "@/components/quote/quote-info"

export const metadata: Metadata = {
  title: "Request a Quote | Tewaw Enterprises Limited",
  description:
    "Get a custom quote for your apparel needs. Fill out our detailed form and we'll provide you with competitive pricing for your project.",
}

export default function QuotePage() {
  return (
    <main>
      <QuoteHero />
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <QuoteForm />
            </div>
            <div>
              <QuoteInfo />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
