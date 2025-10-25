import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ContactInfo() {
  return (
    <div>
      <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Contact Information</h2>
      <p className="text-muted-foreground mb-6">
        You can also reach us directly through any of the following channels.
      </p>

      <div className="space-y-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                <a href="tel:+254736619688" className="text-muted-foreground hover:text-primary transition-colors">
                  +254 736 619 688
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <div className="space-y-1">
                  <a
                    href="mailto:tewawenterprises@gmail.com"
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    tewawenterprises@gmail.com
                  </a>
                  <a
                    href="mailto:tww943@gmail.com"
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    tww943@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Location</h3>
                <p className="text-muted-foreground">
                  Kirinyaga Road, Merchandise Center
                  <br />
                  P.O. Box 13653 - 00400
                  <br />
                  Tom Mboya Street, Nairobi
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                <div className="text-muted-foreground space-y-1">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-foreground mb-3">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/tewaw_enterprises"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Instagram size={20} className="text-primary" />
              </a>
              <a
                href="https://facebook.com/tewaw.house"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Facebook size={20} className="text-primary" />
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
