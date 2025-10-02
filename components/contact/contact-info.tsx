"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"

const contactDetails = [
  {
    icon: MapPin,
    title: "Visit Us",
    content: "123 Beauty Avenue, Suite 456\nNew York, NY 10001",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+1 (555) 123-4567\nMon-Fri, 9am-6pm EST",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "hello@luxebeauty.com\nsupport@luxebeauty.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Monday - Friday: 9am - 6pm\nSaturday: 10am - 4pm\nSunday: Closed",
  },
]

export function ContactInfo() {
  return (
    <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
      <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Contact Information</h2>
      <p className="text-muted-foreground mb-8 leading-relaxed">
        Have questions about our products or services? Our team is here to help you find the perfect beauty solutions.
      </p>

      <div className="space-y-6 mb-12">
        {contactDetails.map((detail, index) => (
          <div
            key={index}
            className="flex gap-4 p-6 bg-card border border-border rounded-sm hover:shadow-md transition-shadow"
          >
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <detail.icon className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">{detail.title}</h3>
              <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">{detail.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-secondary p-8 rounded-sm">
        <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Book a Consultation</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          Get personalized beauty advice from our expert consultants. Schedule a complimentary consultation today.
        </p>
        <button className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-sm hover:opacity-90 transition-opacity font-medium">
          Schedule Appointment
        </button>
      </div>
    </div>
  )
}
