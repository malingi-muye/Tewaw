import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, DollarSign, Headphones } from "lucide-react"

export function QuoteInfo() {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <h3 className="font-serif text-xl font-bold text-foreground mb-4">What Happens Next?</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-semibold text-primary">1</span>
              </div>
              <div>
                <p className="text-sm text-foreground font-medium">We Review Your Request</p>
                <p className="text-xs text-muted-foreground">Our team analyzes your requirements</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-semibold text-primary">2</span>
              </div>
              <div>
                <p className="text-sm text-foreground font-medium">Prepare Custom Quote</p>
                <p className="text-xs text-muted-foreground">Detailed pricing and timeline</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-semibold text-primary">3</span>
              </div>
              <div>
                <p className="text-sm text-foreground font-medium">Send You the Quote</p>
                <p className="text-xs text-muted-foreground">Within 24 hours via email</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-semibold text-primary">4</span>
              </div>
              <div>
                <p className="text-sm text-foreground font-medium">Discuss & Finalize</p>
                <p className="text-xs text-muted-foreground">We refine details together</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="font-serif text-xl font-bold text-foreground mb-4">Why Choose Us?</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-foreground font-medium">Competitive Pricing</p>
                <p className="text-xs text-muted-foreground">Direct manufacturing advantage</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock size={20} className="text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-foreground font-medium">Fast Turnaround</p>
                <p className="text-xs text-muted-foreground">Timely delivery guaranteed</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <DollarSign size={20} className="text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-foreground font-medium">Flexible Quantities</p>
                <p className="text-xs text-muted-foreground">Small or large orders welcome</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Headphones size={20} className="text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-foreground font-medium">Dedicated Support</p>
                <p className="text-xs text-muted-foreground">We're here to help every step</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-primary text-primary-foreground">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-2">Need Immediate Assistance?</h3>
          <p className="text-sm text-primary-foreground/90 mb-4">Call us directly for urgent inquiries</p>
          <a href="tel:+254736619688" className="text-lg font-bold hover:underline">
            +254 736 619 688
          </a>
        </CardContent>
      </Card>
    </div>
  )
}
