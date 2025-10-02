"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

const categories = [
  {
    name: "Lips",
    description: "Bold colors, lasting wear",
    image: "/luxury-lipstick-collection.jpg",
    link: "/store?category=lips",
  },
  {
    name: "Eyes",
    description: "Dramatic looks, endless possibilities",
    image: "/luxury-eye-makeup.jpg",
    link: "/store?category=eyes",
  },
  {
    name: "Face",
    description: "Flawless finish, natural glow",
    image: "/luxury-face-makeup.jpg",
    link: "/store?category=face",
  },
]

export function CategoryShowcase() {
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

    const element = document.getElementById("category-showcase")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="category-showcase" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">Shop by Category</h2>
          <p className="text-lg text-muted-foreground">Find the perfect products for every look</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              href={category.link}
              className={`group relative overflow-hidden rounded-sm aspect-[4/5] transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-primary-foreground">
                <h3 className="font-serif text-3xl font-bold mb-2 group-hover:translate-y-[-4px] transition-transform duration-300">
                  {category.name}
                </h3>
                <p className="text-sm opacity-90">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
