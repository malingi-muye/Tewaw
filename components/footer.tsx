import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Faed24d2cbec541d799681fb6b9c34533%2F7296ab9af661453e816281554952002f?format=webp&width=200"
              alt="Tewaw Enterprises Limited"
              className="h-16 w-auto mb-4"
            />
            <p className="text-sm text-primary-foreground/90 leading-relaxed mb-4">
              Weaving Dreams, Stitching Excellence — Luxury and Comfort in Every Stitch
            </p>
            <p className="text-xs text-primary-foreground/80">100% Proudly Made in Kenya</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/clients"
                  className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  Clients
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/90">
              <li>Sweaters</li>
              <li>Jeans</li>
              <li>Hoodies, Sweatpants & Sweatshirts</li>
              <li>Ponchos</li>
              <li>Undergarments</li>
              <li>Tracksuits & Games Kit</li>
              <li>Shirts & Polo Shirts</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <a
                  href="tel:+254736619688"
                  className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  +254 736 619 688
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a
                    href="mailto:tewawenterprises@gmail.com"
                    className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                  >
                    tewawenterprises@gmail.com
                  </a>
                  <a
                    href="mailto:tww943@gmail.com"
                    className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                  >
                    tww943@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/90">
                  Kirinyaga Rd, Merchandise Center
                  <br />
                  P.O. Box 13653 - 00400
                  <br />
                  Tom Mboya Street, Nairobi
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} Tewaw Enterprises Limited. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href="https://instagram.com/tewaw_enterprises"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com/tewaw.house"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
