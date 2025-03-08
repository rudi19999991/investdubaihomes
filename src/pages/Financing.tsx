
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { useLanguage } from "@/contexts/LanguageContext";
import MortgageCalculator from "@/components/financing/MortgageCalculator";
import FinancingTabs from "@/components/financing/FinancingTabs";
import AdditionalFinancing from "@/components/financing/AdditionalFinancing";

const Financing = () => {
  const { translate } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <HeroSection
          title={translate("Property Financing Options")}
          subtitle={translate("Explore mortgage and financing options for your Dubai investment")}
          videoUrl="https://player.vimeo.com/external/371865381.sd.mp4?s=5229ddd1a93a2daeb3e1acc49187664b43d0bfd3&profile_id=139&oauth2_token_id=57447761"
          backgroundImage="https://images.unsplash.com/photo-1604756228445-7419dbd85e7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          showCta={false}
        />
        
        <section className="section-padding">
          <div className="luxury-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Financing Information */}
              <div>
                <h2 className="text-3xl font-bold mb-4">{translate("Financing Your Dubai Property")}</h2>
                <div className="gold-separator" />
                <p className="text-gray-600 mb-6">
                  {translate("Navigating the financing options for your Dubai property investment is a crucial step in your investment journey. Below are the available options for both UAE residents and international investors.")}
                </p>

                <FinancingTabs />
                <AdditionalFinancing />
              </div>
              
              {/* Mortgage Calculator */}
              <MortgageCalculator />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Financing;
