"use client"

import { useState } from "react"
import { ShoppingBag, Heart, Star } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Velvet Matte Lipstick",
    category: "Lips",
    price: 28,
    rating: 4.8,
    reviews: 124,
    image: "/luxury-red-lipstick.jpg",
  },
  {
    id: 2,
    name: "Radiant Glow Foundation",
    category: "Face",
    price: 45,
    rating: 4.9,
    reviews: 89,
    image: "/luxury-foundation-bottle.jpg",
  },
  {
    id: 3,
    name: "Silk Eye Shadow Palette",
    category: "Eyes",
    price: 52,
    rating: 5.0,
    reviews: 156,
    image: "/luxury-eyeshadow-palette.jpg",
  },
  {
    id: 4,
    name: "Luminous Highlighter",
    category: "Face",
    price: 38,
    rating: 4.7,
    reviews: 92,
    image: "/luxury-highlighter-compact.jpg",
  },
  {
    id: 5,
    name: "Precision Eyeliner",
    category: "Eyes",
    price: 22,
    rating: 4.6,
    reviews: 78,
    image: "/luxury-eyeliner-pen.jpg",
  },
  {
    id: 6,
    name: "Plumping Lip Gloss",
    category: "Lips",
    price: 24,
    rating: 4.8,
    reviews: 103,
    image: "/luxury-lip-gloss.jpg",
  },
  {
    id: 7,
    name: "Volumizing Mascara",
    category: "Eyes",
    price: 32,
    rating: 4.9,
    reviews: 145,
    image: "/luxury-mascara.jpg",
  },
  {
    id: 8,
    name: "Setting Powder",
    category: "Face",
    price: 36,
    rating: 4.7,
    reviews: 67,
    image: "/luxury-setting-powder.jpg",
  },
  {
    id: 9,
    name: "Cream Blush",
    category: "Face",
    price: 29,
    rating: 4.8,
    reviews: 88,
    image: "/luxury-cream-blush.jpg",
  },
]

export function ProductGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const addToCart = (product: (typeof products)[0]) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")
    cart.push(product)
    localStorage.setItem("cart", JSON.stringify(cart))
    window.dispatchEvent(new Event("cartUpdated"))
    alert(`${product.name} added to cart!`)
  }

  return (
    <div className="flex-1">
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-muted-foreground">Showing {products.length} products</p>
        <select className="px-4 py-2 border border-border rounded-sm text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
          <option>Sort by: Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest</option>
          <option>Best Rating</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group"
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
                <button
                  onClick={() => addToCart(product)}
                  className="p-2 bg-background rounded-full shadow-lg hover:bg-secondary transition-colors"
                >
                  <ShoppingBag className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{product.category}</p>
              <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">{product.name}</h3>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span className="ml-1 text-sm font-medium text-foreground">{product.rating}</span>
                </div>
                <span className="text-xs text-muted-foreground">({product.reviews} reviews)</span>
              </div>
              <p className="font-semibold text-foreground">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
