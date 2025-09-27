import { useState } from "react";
import { Search, User, ShoppingBag, Menu, X, Globe, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ajmalLogo from "@/assets/ajmal-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Shop All", href: "/shop" },
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "Gifting", href: "/gifting" },
    { name: "Corporate Gifting", href: "/corporate-gifting" },
    { name: "Sale / Offers", href: "/sale" },
    { name: "Our Store", href: "/stores" },
    { name: "Contact Us", href: "/contact" },
  ];

  const categories = [
    { name: "Men's Perfumes", href: "/category/men" },
    { name: "Women's Perfumes", href: "/category/women" },
    { name: "Unisex Perfumes", href: "/category/unisex" },
    { name: "Bakhoor & Dakhoon", href: "/category/bakhoor" },
    { name: "Deodorants", href: "/category/deodorants" },
    { name: "Gift Sets", href: "/category/gift-sets" },
  ];

  return (
    <header className="relative z-50">
      {/* Promotional Banner */}
      <div className="bg-gradient-gold text-white py-2 px-4 text-center text-sm font-medium overflow-hidden">
        <div className="animate-slide-left whitespace-nowrap">
          Enjoy exclusive discounts and offers on your favorite Perfumes at Ajmal – shop now!
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>

            {/* Logo */}
            <div className="flex items-center">
              <img 
                src={ajmalLogo} 
                alt="Ajmal Perfumes" 
                className="h-12 lg:h-16 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search your Perfume"
                  className="pl-10 pr-4 bg-muted/50 border-border focus:border-primary"
                />
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-2 lg:space-x-4">
              {/* Search Button - Mobile */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search className="h-5 w-5" />
              </Button>

              {/* Language & User Actions */}
              <div className="hidden lg:flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                  <Globe className="h-4 w-4" />
                  <span>EN</span>
                </Button>
              </div>

              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>

              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>

              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {isSearchOpen && (
            <div className="lg:hidden py-4 border-t border-border">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search your Perfume"
                  className="pl-10 pr-4 bg-muted/50 border-border focus:border-primary"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Category Menu */}
      <div className="bg-secondary/50 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center py-3 space-x-8 overflow-x-auto">
            <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">By Category:</span>
            {categories.map((category) => (
              <a
                key={category.name}
                href={category.href}
                className="text-sm text-foreground hover:text-primary transition-colors whitespace-nowrap"
              >
                {category.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg">
          <nav className="container mx-auto px-4 py-6">
            <div className="space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <hr className="border-border my-4" />
              <div className="space-y-2">
                <h3 className="font-medium text-foreground">Categories</h3>
                {categories.map((category) => (
                  <a
                    key={category.name}
                    href={category.href}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category.name}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;