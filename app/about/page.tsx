import type { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { OurStory } from "@/components/about/our-story"
import { VisionMission } from "@/components/about/vision-mission"
import { OurValues } from "@/components/about/our-values"
import { TeamCommitment } from "@/components/about/team-commitment"

export const metadata: Metadata = {
  title: "About Us | Tewaw Enterprises Limited",
  description:
    "Learn about Tewaw Enterprises Limited - Born from a childhood dream to create beautiful, meaningful apparel. 100% Made in Kenya with dedication to quality and craftsmanship.",
}

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <VisionMission />
      <OurValues />
      <TeamCommitment />
    </main>
  )
}
