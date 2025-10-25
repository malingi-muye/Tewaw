import type { Metadata } from "next"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { LocationMap } from "@/components/contact/location-map"

export const metadata: Metadata = {
  title: "Contact Us | Tewaw Enterprises Limited",
  description:
    "Get in touch with Tewaw Enterprises Limited. Visit us in Nairobi or reach out via phone or email. We're here to help with your apparel needs.",
}

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <LocationMap />
    </main>
  )
}
