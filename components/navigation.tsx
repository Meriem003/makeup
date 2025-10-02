"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ShoppingBag, Menu, X, Search, User } from "lucide-react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Get cart count from localStorage
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]")
      setCartCount(cart.length)
    }
    updateCartCount()
    window.addEventListener("storage", updateCartCount)
    window.addEventListener("cartUpdated", updateCartCount)
    return () => {
      window.removeEventListener("storage", updateCartCount)
      window.removeEventListener("cartUpdated", updateCartCount)
    }
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-sm" />
            <span className="font-serif text-2xl font-bold text-foreground">Luxe Beauty</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/store" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Shop
            </Link>
            <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-secondary rounded-full transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-secondary rounded-full transition-colors" aria-label="Account">
              <User className="w-5 h-5" />
            </button>
            <button
              className="p-2 hover:bg-secondary rounded-full transition-colors relative"
              aria-label="Shopping bag"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-secondary rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border animate-slide-in">
          <div className="px-4 py-6 space-y-4">
            <Link
              href="/"
              className="block text-lg font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/store"
              className="block text-lg font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/contact"
              className="block text-lg font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
