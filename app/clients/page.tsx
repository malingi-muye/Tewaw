import type { Metadata } from "next"
import { ClientsHero } from "@/components/clients/clients-hero"
import { ClientCategories } from "@/components/clients/client-categories"
import { Testimonials } from "@/components/clients/testimonials"
import { ClientsCTA } from "@/components/clients/clients-cta"

export const metadata: Metadata = {
  title: "Our Clients | Tewaw Enterprises Limited",
  description:
    "Trusted by schools, corporations, NGOs, government institutions, and businesses across Kenya. Join our growing list of satisfied clients.",
}

export default function ClientsPage() {
  return (
    <main>
      <ClientsHero />
      <ClientCategories />
      <Testimonials />
      <ClientsCTA />
    </main>
  )
}
