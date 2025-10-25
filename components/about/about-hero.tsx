export function AboutHero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/kenyan-artisan-textile-worker.jpg"
          alt="Tewaw craftsmanship"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
            About Tewaw Enterprises
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            Crafting Excellence Since Day One
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Tewaw Enterprises Limited, we specialize in the design and manufacturing of high-quality cotton fleece
            apparel. Every piece tells a story of dedication, luxury, and affordability.
          </p>
        </div>
      </div>
    </section>
  )
}
