import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { FeaturedProducts } from "@/components/home/featured-products"
import { CategoryShowcase } from "@/components/home/category-showcase"
import { TestimonialsSection } from "@/components/home/testimonials-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <CategoryShowcase />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
