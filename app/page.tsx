import { Hero } from "@/components/home/hero"
import { FeaturedProducts } from "@/components/home/featured-products"
import { BrandStory } from "@/components/home/brand-story"
import { Strengths } from "@/components/home/strengths"
import { CallToAction } from "@/components/home/call-to-action"
import { StructuredData } from "@/components/structured-data"

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <main>
        <Hero />
        <FeaturedProducts />
        <BrandStory />
        <Strengths />
        <CallToAction />
      </main>
    </>
  )
}
