import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/store/product-grid"
import { FilterSidebar } from "@/components/store/filter-sidebar"

export default function StorePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <div className="bg-secondary py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
              Our Collection
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Discover premium makeup and beauty essentials
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <FilterSidebar />
            <ProductGrid />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
