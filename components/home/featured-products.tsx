"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ShoppingBag, Heart } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Velvet Matte Lipstick",
    category: "Lips",
    price: 28,
    image: "/luxury-red-lipstick.jpg",
  },
  {
    id: 2,
    name: "Radiant Glow Foundation",
    category: "Face",
    price: 45,
    image: "/luxury-foundation-bottle.jpg",
  },
  {
    id: 3,
    name: "Silk Eye Shadow Palette",
    category: "Eyes",
    price: 52,
    image: "/luxury-eyeshadow-palette.jpg",
  },
  {
    id: 4,
    name: "Luminous Highlighter",
    category: "Face",
    price: 38,
    image: "/luxury-highlighter-compact.jpg",
  },
]

export function FeaturedProducts() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
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

    const element = document.getElementById("featured-products")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="featured-products" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">Featured Collection</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most loved products, carefully curated for you
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden rounded-sm bg-card mb-4">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-primary/10 transition-opacity duration-300 ${
                    hoveredId === product.id ? "opacity-100" : "opacity-0"
                  }`}
                />
                <div
                  className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300 ${
                    hoveredId === product.id ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  }`}
                >
                  <button className="p-2 bg-background rounded-full shadow-lg hover:bg-secondary transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="p-2 bg-background rounded-full shadow-lg hover:bg-secondary transition-colors">
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{product.category}</p>
                <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="font-semibold text-foreground">${product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/store"
            className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-sm hover:opacity-90 transition-opacity font-medium"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
