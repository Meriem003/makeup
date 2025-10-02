"use client"

import { useEffect, useState } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sophie Anderson",
    role: "Beauty Enthusiast",
    content: "The quality is absolutely incredible. These products have transformed my daily routine.",
    rating: 5,
  },
  {
    id: 2,
    name: "Emma Williams",
    role: "Makeup Artist",
    content: "Professional-grade products that deliver stunning results. My clients love them!",
    rating: 5,
  },
  {
    id: 3,
    name: "Olivia Martinez",
    role: "Fashion Blogger",
    content: "Luxurious textures and beautiful packaging. Worth every penny for the quality you get.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("testimonials")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground">Join thousands of satisfied customers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-card p-8 rounded-sm border border-border transition-all duration-700 hover:shadow-lg ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
