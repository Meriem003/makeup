"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const categories = ["All", "Lips", "Eyes", "Face", "Brushes"]
const priceRanges = ["Under $25", "$25 - $50", "$50 - $75", "Over $75"]
const brands = ["Luxe Beauty", "Premium Line", "Signature Collection"]

export function FilterSidebar() {
  const [openSections, setOpenSections] = useState({
    category: true,
    price: true,
    brand: true,
  })

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  return (
    <aside className="lg:w-64 flex-shrink-0">
      <div className="bg-card border border-border rounded-sm p-6 sticky top-24">
        <h2 className="font-semibold text-lg text-foreground mb-6">Filters</h2>

        {/* Category Filter */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection("category")}
            className="flex items-center justify-between w-full mb-3 font-medium text-foreground"
          >
            Category
            {openSections.category ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {openSections.category && (
            <div className="space-y-2 animate-scale-in">
              {categories.map((category) => (
                <label key={category} className="flex items-center cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded border-border text-primary focus:ring-primary" />
                  <span className="ml-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {category}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Price Filter */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection("price")}
            className="flex items-center justify-between w-full mb-3 font-medium text-foreground"
          >
            Price Range
            {openSections.price ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {openSections.price && (
            <div className="space-y-2 animate-scale-in">
              {priceRanges.map((range) => (
                <label key={range} className="flex items-center cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded border-border text-primary focus:ring-primary" />
                  <span className="ml-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {range}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Brand Filter */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection("brand")}
            className="flex items-center justify-between w-full mb-3 font-medium text-foreground"
          >
            Brand
            {openSections.brand ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {openSections.brand && (
            <div className="space-y-2 animate-scale-in">
              {brands.map((brand) => (
                <label key={brand} className="flex items-center cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded border-border text-primary focus:ring-primary" />
                  <span className="ml-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {brand}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        <button className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-sm hover:opacity-90 transition-opacity text-sm font-medium">
          Apply Filters
        </button>
      </div>
    </aside>
  )
}
