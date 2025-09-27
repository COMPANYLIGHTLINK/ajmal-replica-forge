import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ajmalLogo from "@/assets/ajmal-logo.png";

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Story", href: "/story" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
      { name: "Contact Us", href: "/contact" },
    ],
    customer: [
      { name: "Customer Service", href: "/customer-service" },
      { name: "Returns & Exchanges", href: "/returns" },
      { name: "Shipping Information", href: "/shipping" },
      { name: "Size Guide", href: "/size-guide" },
      { name: "Care Instructions", href: "/care" },
    ],
    policies: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Refund Policy", href: "/refund" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
    connect: [
      { name: "Store Locator", href: "/stores" },
      { name: "Wholesale", href: "/wholesale" },
      { name: "Affiliates", href: "/affiliates" },
      { name: "Newsletter", href: "/newsletter" },
    ],
  };

  return (
    <footer className="bg-accent text-accent-foreground">
      {/* Newsletter Section */}
      <div className="bg-gradient-luxury py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Stay Connected with Ajmal
            </h3>
            <p className="text-white/90 mb-6">
              Subscribe to our newsletter for exclusive offers, new arrivals, and fragrance tips
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white"
              />
              <Button 
                className="bg-white text-primary hover:bg-white/90 font-medium px-8"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center">
                <img 
                  src={ajmalLogo} 
                  alt="Ajmal Perfumes" 
                  className="h-12 w-auto filter brightness-0 invert"
                />
              </div>
              <p className="text-accent-foreground/80 max-w-md">
                For over 60 years, Ajmal has been crafting exquisite fragrances that capture 
                the essence of tradition and luxury. From our farms in Assam to your home, 
                we bring you the finest perfumes and attars.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sm">+91 11 4567 8900</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-sm">info@ajmal.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm">Mumbai, India</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Links Sections */}
            <div className="space-y-6">
              <h4 className="font-semibold text-accent-foreground">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-accent-foreground/70 hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-semibold text-accent-foreground">Customer Care</h4>
              <ul className="space-y-3">
                {footerLinks.customer.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-accent-foreground/70 hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-semibold text-accent-foreground">Legal & Connect</h4>
              <ul className="space-y-3">
                {[...footerLinks.policies, ...footerLinks.connect].map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-accent-foreground/70 hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-accent-foreground/20 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-accent-foreground/60 text-sm">
              © 2024 Ajmal Perfumes. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-accent-foreground/60">
                Secure Payment
              </span>
              <span className="text-accent-foreground/60">
                Free Shipping
              </span>
              <span className="text-accent-foreground/60">
                IFRA Certified
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;