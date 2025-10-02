"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary to-accent">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            Discover Your
            <br />
            <span className="italic">Natural Beauty</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Premium makeup and skincare products crafted with the finest ingredients to enhance your natural radiance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/store"
              className="group inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-sm hover:opacity-90 transition-all duration-300 font-medium"
            >
              Shop Collection
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary rounded-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium"
            >
              Book Consultation
            </Link>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 animate-bounce" style={{ animationDelay: "0.5s" }}>
          <div className="w-3 h-3 bg-primary rounded-full opacity-60" />
        </div>
        <div className="absolute top-1/3 right-20 animate-bounce" style={{ animationDelay: "1s" }}>
          <div className="w-2 h-2 bg-accent rounded-full opacity-60" />
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-bounce" style={{ animationDelay: "1.5s" }}>
          <div className="w-4 h-4 bg-primary rounded-full opacity-40" />
        </div>
      </div>
    </section>
  )
}
