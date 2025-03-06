
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  showCta?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
  showCta = true,
}) => {
  return (
    <div
      className="relative h-screen min-h-[600px] flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 hero-gradient" />
      <div className="relative z-10 text-white text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          {title}
        </h1>
        <div className="gold-separator mx-auto" />
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up">
          {subtitle}
        </p>
        {showCta && (
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-slide-up">
            <Button 
              size="lg" 
              className="bg-luxury-gold hover:bg-luxury-gold/90 text-white px-6"
            >
              Explore Properties
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-luxury-navy"
            >
              Book a Consultation
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
