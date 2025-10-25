import type { Metadata } from "next"
import { PortfolioHero } from "@/components/portfolio/portfolio-hero"
import { PortfolioGallery } from "@/components/portfolio/portfolio-gallery"
import { PortfolioCTA } from "@/components/portfolio/portfolio-cta"

export const metadata: Metadata = {
  title: "Portfolio | Tewaw Enterprises Limited",
  description:
    "View our portfolio of custom apparel projects for schools, corporations, NGOs, and government institutions. Quality craftsmanship in every piece.",
}

export default function PortfolioPage() {
  return (
    <main>
      <PortfolioHero />
      <PortfolioGallery />
      <PortfolioCTA />
    </main>
  )
}
