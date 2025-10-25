import { GraduationCap, Building2, Heart, Landmark, Users, Store, Briefcase, Globe } from "lucide-react"

const clientTypes = [
  {
    icon: GraduationCap,
    title: "Schools & Educational Institutions",
    description:
      "Uniforms, sports kits, and event merchandise for primary schools, secondary schools, and universities across Kenya.",
    examples: ["School uniforms", "Sports team kits", "Graduation merchandise", "Event t-shirts"],
  },
  {
    icon: Building2,
    title: "Corporate Organizations",
    description:
      "Professional uniforms and branded apparel for businesses of all sizes, from startups to established corporations.",
    examples: ["Corporate uniforms", "Branded merchandise", "Team building apparel", "Employee gifts"],
  },
  {
    icon: Heart,
    title: "NGOs & Non-Profits",
    description:
      "Custom apparel for campaigns, events, and staff uniforms. Supporting organizations making a difference.",
    examples: ["Campaign t-shirts", "Event merchandise", "Staff uniforms", "Volunteer kits"],
  },
  {
    icon: Landmark,
    title: "Government Institutions",
    description: "Quality uniforms and apparel for government departments and public sector organizations.",
    examples: ["Official uniforms", "Department branding", "Event apparel", "Staff jackets"],
  },
  {
    icon: Store,
    title: "Bars & Restaurants",
    description: "Professional hospitality uniforms including aprons, polo shirts, and custom branded apparel.",
    examples: ["Server uniforms", "Chef aprons", "Branded polo shirts", "Bar staff attire"],
  },
  {
    icon: Briefcase,
    title: "SACCOs & Financial Institutions",
    description: "Professional apparel for member events, staff uniforms, and promotional merchandise.",
    examples: ["Member gifts", "Staff uniforms", "AGM merchandise", "Promotional items"],
  },
  {
    icon: Users,
    title: "Private Organizations",
    description: "Custom solutions for clubs, associations, and private groups requiring quality branded apparel.",
    examples: ["Club uniforms", "Association merchandise", "Group events", "Custom orders"],
  },
  {
    icon: Globe,
    title: "Individuals",
    description: "Personal orders for events, gifts, or custom apparel needs. No order too small.",
    examples: ["Personal gifts", "Family events", "Custom designs", "Special occasions"],
  },
]

export function ClientCategories() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">Who We Serve</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our diverse client base spans multiple sectors and industries across Kenya
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clientTypes.map((client, index) => {
            const Icon = client.icon
            return (
              <div
                key={index}
                className="bg-card rounded-lg p-6 md:p-8 border border-border hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon size={24} className="text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">{client.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{client.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {client.examples.map((example, idx) => (
                        <span key={idx} className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
