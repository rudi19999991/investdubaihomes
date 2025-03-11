
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroAndIntro from "@/components/uae-know-how/HeroAndIntro";
import LocationTabs from "@/components/uae-know-how/LocationTabs";
import FactsAndFigures from "@/components/uae-know-how/FactsAndFigures";
import { useLanguage } from "@/contexts/LanguageContext";

const UAEKnowHow = () => {
  const { translate } = useLanguage();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <HeroAndIntro />
        
        <section className="section-padding bg-white">
          <div className="luxury-container mb-8">
            <h2 className="text-2xl font-bold mb-4">{translate("Key Investment Locations")}</h2>
            <p className="text-gray-600 max-w-3xl">
              {translate("Explore the most promising investment areas in Dubai and Ras Al Khaimah. Each location offers unique advantages for property investors.")}
            </p>
            <div className="gold-separator mt-4" />
          </div>
          
          <LocationTabs />
        </section>
        
        <FactsAndFigures />
      </main>
      
      <Footer />
    </div>
  );
};

export default UAEKnowHow;
