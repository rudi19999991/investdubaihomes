
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroAndIntro from "@/components/uae-know-how/HeroAndIntro";
import LocationTabs from "@/components/uae-know-how/LocationTabs";
import FactsAndFigures from "@/components/uae-know-how/FactsAndFigures";

const UAEKnowHow = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <HeroAndIntro />
        
        <section className="section-padding bg-white">
          <LocationTabs />
        </section>
        
        <FactsAndFigures />
      </main>
      
      <Footer />
    </div>
  );
};

export default UAEKnowHow;
