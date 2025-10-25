import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Tewaw Enterprises delivered exceptional quality uniforms for our entire school. The attention to detail and timely delivery exceeded our expectations.",
    author: "Principal Sarah Mwangi",
    organization: "Nairobi Academy",
    category: "Education",
  },
  {
    quote:
      "We've been working with Tewaw for our corporate branding needs for over two years. Their consistency and professionalism are unmatched.",
    author: "David Ochieng",
    organization: "Tech Solutions Ltd",
    category: "Corporate",
  },
  {
    quote:
      "The custom t-shirts for our environmental campaign were perfect. Great quality, affordable pricing, and they understood our mission.",
    author: "Grace Wanjiru",
    organization: "Green Kenya Initiative",
    category: "NGO",
  },
  {
    quote:
      "Fast turnaround, excellent quality, and competitive pricing. Tewaw is our go-to supplier for all staff uniform needs.",
    author: "James Kimani",
    organization: "County Government Office",
    category: "Government",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from organizations we've had the pleasure of working with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card">
              <CardContent className="p-6 md:p-8">
                <Quote size={32} className="text-primary/20 mb-4" />
                <p className="text-foreground leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.organization}</p>
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {testimonial.category}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
