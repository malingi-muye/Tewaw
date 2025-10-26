import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import "./clipboard.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Suspense } from "react"
import ClientWidgets from "@/components/ui/client-widgets"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://tewawenterprises.com"),
  title: {
    default: "Tewaw Enterprises Limited | Premium Kenyan Apparel Manufacturer",
    template: "%s | Tewaw Enterprises Limited",
  },
  description:
    "Weaving Dreams, Stitching Excellence — Luxury and Comfort in Every Stitch. Dealers in cotton and fleece apparel including hoodies, t-shirts, sweatpants, jackets, and more. 100% Made in Kenya.",
  keywords: [
    "Kenyan apparel",
    "cotton fleece",
    "hoodies Kenya",
    "t-shirts manufacturer",
    "corporate uniforms Kenya",
    "Maasai shukas",
    "custom branding",
    "Made in Kenya",
    "Nairobi apparel",
    "bulk clothing orders",
    "school uniforms Kenya",
    "promotional merchandise",
  ],
  authors: [{ name: "Tewaw Enterprises Limited" }],
  creator: "Tewaw Enterprises Limited",
  publisher: "Tewaw Enterprises Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://tewawenterprises.com",
    siteName: "Tewaw Enterprises Limited",
    title: "Tewaw Enterprises Limited | Premium Kenyan Apparel Manufacturer",
    description:
      "Weaving Dreams, Stitching Excellence. Premium cotton and fleece apparel, 100% Made in Kenya. Custom branding for corporate, schools, NGOs, and more.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tewaw Enterprises Limited - Premium Kenyan Apparel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tewaw Enterprises Limited | Premium Kenyan Apparel Manufacturer",
    description: "Weaving Dreams, Stitching Excellence. Premium cotton and fleece apparel, 100% Made in Kenya.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.jpg" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${playfair.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Navigation />
          {children}
          <Footer />
        </Suspense>
        <ClientWidgets />
        <Analytics />
      </body>
    </html>
  )
}
