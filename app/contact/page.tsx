import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <div className="bg-secondary py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
