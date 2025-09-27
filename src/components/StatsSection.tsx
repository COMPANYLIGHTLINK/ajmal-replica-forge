import { Globe, Store, Award } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Globe,
      number: "60+",
      label: "Countries",
      description: "Global presence across continents"
    },
    {
      icon: Store,
      number: "300+",
      label: "Stores Worldwide",
      description: "Physical stores serving customers"
    },
    {
      icon: Award,
      number: "IFRA",
      label: "Certified",
      description: "International Fragrance Association certified"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 bg-gradient-gold rounded-full mb-6 group-hover:shadow-luxury transition-all duration-300 group-hover:animate-float">
                <stat.icon className="h-10 w-10 lg:h-12 lg:w-12 text-white" />
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-xl lg:text-2xl font-semibold text-foreground">
                  {stat.label}
                </div>
                <p className="text-muted-foreground max-w-xs mx-auto">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;