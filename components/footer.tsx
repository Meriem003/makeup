import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-sm" />
              <span className="font-serif text-xl font-bold text-foreground">Luxe Beauty</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium makeup and beauty products for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/store" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/store?category=lips"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Lips
                </Link>
              </li>
              <li>
                <Link
                  href="/store?category=eyes"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Eyes
                </Link>
              </li>
              <li>
                <Link
                  href="/store?category=face"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Face
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Stay Connected</h3>
            <p className="text-sm text-muted-foreground mb-4">Subscribe to our newsletter for exclusive offers.</p>
            <div className="flex space-x-3">
              <button
                className="p-2 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </button>
              <button
                className="p-2 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </button>
              <button
                className="p-2 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Luxe Beauty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
