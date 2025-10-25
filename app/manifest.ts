import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tewaw Enterprises Limited",
    short_name: "Tewaw",
    description: "Premium Kenyan apparel manufacturer specializing in cotton and fleece products. 100% Made in Kenya.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF8F5",
    theme_color: "#8B6F47",
    icons: [
      {
        src: "/icon-192.jpg",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.jpg",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
