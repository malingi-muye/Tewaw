import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navigation() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/clients", label: "Clients" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Faed24d2cbec541d799681fb6b9c34533%2F7296ab9af661453e816281554952002f?format=webp&width=200"
              alt="Tewaw Enterprises Limited"
              className="h-12 md:h-14 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={cn("text-sm font-medium transition-colors relative text-foreground hover:text-primary")}>
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button asChild>
              <a href="/quote">Get a Quote</a>
            </Button>
          </div>

          {/* Mobile Menu (CSS-only) */}
          <details className="md:hidden">
            <summary className="p-2 text-foreground hover:text-primary cursor-pointer">Menu</summary>
            <div className="py-4 border-t border-border">
              <div className="flex flex-col gap-4 px-4">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className={cn("text-sm font-medium transition-colors py-2 px-3 rounded-md text-foreground hover:text-primary hover:bg-muted")}>
                    {link.label}
                  </a>
                ))}
                <Button asChild className="w-full">
                  <a href="/quote">Get a Quote</a>
                </Button>
              </div>
            </div>
          </details>
        </div>
      </div>
    </nav>
  )
}
