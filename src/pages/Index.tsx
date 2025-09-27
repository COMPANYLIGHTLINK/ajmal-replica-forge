import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ProductSection from "@/components/ProductSection";
import perfume1 from "@/assets/perfume-1.jpg";
import perfume2 from "@/assets/perfume-2.jpg";
import perfume3 from "@/assets/perfume-3.jpg";
import perfume4 from "@/assets/perfume-4.jpg";

const Index = () => {
  // Sample product data
  const featuredProducts = [
    {
      id: "1",
      name: "Ajmal Amber Wood Intense",
      price: 4500,
      originalPrice: 6000,
      image: perfume1,
      rating: 4.5,
      reviewCount: 128,
      badge: "Bestseller",
      category: "Men's Perfume"
    },
    {
      id: "2",
      name: "Ajmal Rose Elixir",
      price: 3800,
      originalPrice: 4500,
      image: perfume2,
      rating: 4.8,
      reviewCount: 95,
      badge: "New",
      category: "Women's Perfume"
    },
    {
      id: "3",
      name: "Ajmal Mukhallat Dahn Al Oudh",
      price: 8500,
      image: perfume3,
      rating: 4.9,
      reviewCount: 203,
      category: "Unisex Perfume"
    },
    {
      id: "4",
      name: "Ajmal Dahn Al Oudh Moattaq",
      price: 12000,
      originalPrice: 15000,
      image: perfume4,
      rating: 4.7,
      reviewCount: 156,
      badge: "Premium",
      category: "Oud Collection"
    },
    {
      id: "5",
      name: "Ajmal Wisal Dhahab",
      price: 5200,
      image: perfume1,
      rating: 4.6,
      reviewCount: 89,
      category: "Men's Perfume"
    },
    {
      id: "6",
      name: "Ajmal Qafiya Pour Femme",
      price: 4200,
      originalPrice: 5000,
      image: perfume2,
      rating: 4.4,
      reviewCount: 67,
      badge: "Sale",
      category: "Women's Perfume"
    },
    {
      id: "7",
      name: "Ajmal Hatkora Wood",
      price: 6800,
      image: perfume3,
      rating: 4.8,
      reviewCount: 142,
      category: "Unisex Perfume"
    },
    {
      id: "8",
      name: "Ajmal Evoke Gold Edition",
      price: 7500,
      originalPrice: 9000,
      image: perfume4,
      rating: 4.5,
      reviewCount: 178,
      badge: "Limited",
      category: "Premium Collection"
    }
  ];

  const newArrivals = featuredProducts.slice(0, 4);
  const bestSellers = featuredProducts.slice(4, 8);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      
      <ProductSection 
        title="New Arrivals"
        subtitle="Discover our latest fragrances crafted with the finest ingredients"
        products={newArrivals}
      />
      
      <div className="bg-secondary/20">
        <ProductSection 
          title="Best Sellers"
          subtitle="Our most loved fragrances chosen by fragrance enthusiasts worldwide"
          products={bestSellers}
        />
      </div>
      
      {/* Additional Sections */}
      <section className="py-16 bg-gradient-luxury">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            The Art of Perfumery Since 1960
          </h2>
          <p className="text-white/90 text-lg max-w-3xl mx-auto mb-8">
            From our heritage in traditional Arabic perfumery to modern innovations, 
            Ajmal has been crafting exceptional fragrances that tell stories, evoke memories, 
            and create lasting impressions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-lg font-medium transition-colors">
              Our Story
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-medium transition-colors">
              Visit Our Stores
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
