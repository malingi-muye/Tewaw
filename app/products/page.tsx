import type { Metadata } from "next"
import { ProductsHero } from "@/components/products/products-hero"
import { ProductCategories } from "@/components/products/product-categories"
import { CustomizationOptions } from "@/components/products/customization-options"
import { MachineServices } from "@/components/products/machine-services"
import { ProductsCTA } from "@/components/products/products-cta"

export const metadata: Metadata = {
  title: "Our Products | Tewaw Enterprises Limited",
  description:
    "Explore our range of premium apparel including sweaters, jeans, hoodies, ponchos, undergarments, tracksuits, and shirts. Professional machine services including hemming, stitching, and knitting available.",
}

export default function ProductsPage() {
  return (
    <main>
      <ProductsHero />
      <ProductCategories />
      <MachineServices />
      <CustomizationOptions />
      <ProductsCTA />
    </main>
  )
}
