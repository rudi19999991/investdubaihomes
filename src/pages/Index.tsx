
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import PropertyCard, { PropertyProps } from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // Sample featured properties
  const featuredProperties: PropertyProps[] = [
    {
      id: "prop1",
      title: "Luxury Apartment in Dubai Marina",
      location: "Dubai Marina",
      price: 2500000,
      type: "Apartment",
      bedrooms: 2,
      bathrooms: 2.5,
      area: 1500,
      roi: 7.2,
      imageUrl: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      status: "ready",
    },
    {
      id: "prop2",
      title: "Beachfront Villa on Palm Jumeirah",
      location: "Palm Jumeirah",
      price: 15000000,
      type: "Villa",
      bedrooms: 5,
      bathrooms: 6,
      area: 7000,
      roi: 5.8,
      imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      status: "ready",
    },
    {
      id: "prop3",
      title: "Off-Plan Apartment in Downtown Dubai",
      location: "Downtown Dubai",
      price: 1800000,
      type: "Apartment",
      bedrooms: 1,
      bathrooms: 1.5,
      area: 950,
      roi: 9.1,
      imageUrl: "https://images.unsplash.com/photo-1606046604972-77cc76aee944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      status: "offplan",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection
          title="Luxury Property Investment in Dubai & Ras Al Khaimah"
          subtitle="Secure your future with high-ROI properties and tax-free returns in the UAE's most prestigious locations."
          backgroundImage="https://images.unsplash.com/photo-1582398626929-4d39ff61ceaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
        />

        <FeatureSection />
        
        {/* Featured Properties */}
        <section className="section-padding">
          <div className="luxury-container">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold">Featured Properties</h2>
                <div className="gold-separator" />
              </div>
              <Button asChild variant="ghost" className="hidden md:flex">
                <Link to="/properties">
                  View All Properties <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-luxury-navy hover:bg-luxury-navy/90">
                <Link to="/properties">
                  Explore All Properties <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Investment Benefits */}
        <section className="section-padding bg-luxury-navy text-white">
          <div className="luxury-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Investment Benefits
              </h2>
              <div className="gold-separator mx-auto" />
              <p className="text-gray-300 max-w-3xl mx-auto">
                Dubai and Ras Al Khaimah offer exceptional advantages for property investors looking for strong returns and capital growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-luxury-navy/40 backdrop-blur-sm p-8 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-luxury-gold">Tax-Free Investment</h3>
                <p className="text-gray-300">
                  Enjoy 0% income tax, 0% capital gains tax, and 0% property tax on your UAE investments.
                </p>
              </div>
              
              <div className="bg-luxury-navy/40 backdrop-blur-sm p-8 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-luxury-gold">High Rental Yields</h3>
                <p className="text-gray-300">
                  Dubai properties offer rental yields between 6-10%, significantly higher than global averages.
                </p>
              </div>
              
              <div className="bg-luxury-navy/40 backdrop-blur-sm p-8 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-luxury-gold">Residency Visas</h3>
                <p className="text-gray-300">
                  Property investment can qualify you for UAE residence visas, offering global mobility.
                </p>
              </div>
              
              <div className="bg-luxury-navy/40 backdrop-blur-sm p-8 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-luxury-gold">Secure Investment</h3>
                <p className="text-gray-300">
                  UAE's stable political environment and strong regulatory framework protect investor interests.
                </p>
              </div>
              
              <div className="bg-luxury-navy/40 backdrop-blur-sm p-8 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-luxury-gold">Crypto-Friendly</h3>
                <p className="text-gray-300">
                  Purchase properties using cryptocurrencies like Bitcoin and Ethereum with ease.
                </p>
              </div>
              
              <div className="bg-luxury-navy/40 backdrop-blur-sm p-8 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-luxury-gold">Strong Appreciation</h3>
                <p className="text-gray-300">
                  Dubai's property market consistently shows strong capital appreciation over time.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-luxury-gold hover:bg-luxury-gold/90">
                <Link to="/roi">
                  Learn More About ROI <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="relative py-20">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url(https://images.unsplash.com/photo-1609520505218-7421df70787f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.2,
            }}
          />
          <div className="luxury-container relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Investment Journey?
              </h2>
              <p className="text-xl mb-8">
                Contact our experts for a personalized consultation on Dubai and RAK property investments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-luxury-gold hover:bg-luxury-gold/90">
                  <Link to="/contact">Book a Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/properties">Browse Properties</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
