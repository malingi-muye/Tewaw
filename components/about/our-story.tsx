export function OurStory() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Born from a Childhood Dream
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Tewaw Enterprises Limited was envisioned to become a home of beautiful, meaningful apparel — created
                with heart and purpose. We began our journey with the desire to offer not just garments but experiences
                stitched with excellence.
              </p>
              <p>
                Over time, we have grown into a trusted name by staying true to our founding values: authenticity,
                quality, and care for our clients. From our humble beginnings to becoming a recognized manufacturer in
                Kenya, every step has been guided by our commitment to craftsmanship.
              </p>
              <p>
                We work with companies, event organizers, marketing agencies, missions, schools, NGOs, government
                institutions, and individual clients seeking comfort, durability, and Kenyan excellence.
              </p>
              <p className="font-semibold text-foreground text-lg">When you wear Tewaw, you wear a dream realized.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <img
                  src="/cotton-fabric-weaving-process.jpg"
                  alt="Cotton weaving"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <img
                  src="/textile-stitching-craftsmanship.jpg"
                  alt="Stitching process"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <img
                  src="/quality-control-apparel-inspection.jpg"
                  alt="Quality control"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <img
                  src="/finished-garments-display.jpg"
                  alt="Finished products"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
