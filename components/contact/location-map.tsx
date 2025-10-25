export function LocationMap() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">Visit Our Location</h2>
          <p className="text-muted-foreground">Find us at Merchandise Center, Kirinyaga Road, Nairobi</p>
        </div>
        <div className="rounded-lg overflow-hidden border border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8177!2d36.8219!3d-1.2864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnMTEuMCJTIDM2wrA0OScxOC44IkU!5e0!3m2!1sen!2ske!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Tewaw Enterprises Location"
          />
        </div>
      </div>
    </section>
  )
}
