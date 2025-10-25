export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tewaw Enterprises Limited",
    description: "Premium Kenyan apparel manufacturer specializing in cotton and fleece products. 100% Made in Kenya.",
    url: "https://tewawenterprises.com",
    logo: "https://tewawenterprises.com/logo.png",
    image: "https://tewawenterprises.com/og-image.jpg",
    telephone: "+254736619688",
    email: "tewawenterprises@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kirinyaga Road, Merchandise Center, Tom Mboya Street",
      addressLocality: "Nairobi",
      postalCode: "00400",
      addressCountry: "KE",
    },
    sameAs: ["https://instagram.com/tewaw_enterprises", "https://facebook.com/tewaw.house"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+254736619688",
      contactType: "Customer Service",
      areaServed: "KE",
      availableLanguage: ["English", "Swahili"],
    },
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: "Tewaw Enterprises Limited",
    description: "Premium cotton and fleece apparel manufacturer in Nairobi, Kenya",
    url: "https://tewawenterprises.com",
    telephone: "+254736619688",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kirinyaga Road, Merchandise Center",
      addressLocality: "Nairobi",
      postalCode: "00400",
      addressCountry: "KE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -1.2864,
      longitude: 36.8219,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "16:00",
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    </>
  )
}
