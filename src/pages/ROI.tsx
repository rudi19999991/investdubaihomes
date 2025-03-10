
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { useLanguage } from "@/contexts/LanguageContext";
import RoiCalculator from "@/components/RoiCalculator";
import PropertyYearlyCosts from "@/components/roi/PropertyYearlyCosts";
import ReadyVsOffPlanComparison from "@/components/roi/ReadyVsOffPlanComparison";

const ROI = () => {
  const { translate } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <HeroSection
          title={translate("ROI & Investment")}
          subtitle={translate("Calculate your investment returns in Dubai & RAK real estate")}
          backgroundImage="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          videoUrl="https://player.vimeo.com/external/370467553.sd.mp4?s=41e133c5d8c62dcbea38c34da6255e8d202ba193&profile_id=139&oauth2_token_id=57447761"
          showCta={false}
        />
        
        <section className="section-padding bg-white">
          <div className="luxury-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">{translate("Real Estate Investment Calculator")}</h2>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                {translate("Use our calculator to analyze potential returns on your Dubai property investment")}
              </p>
              <div className="gold-separator mx-auto mt-4" />
            </div>
            
            <div className="max-w-3xl mx-auto">
              <RoiCalculator />
            </div>
          </div>
        </section>
        
        <PropertyYearlyCosts />
        
        <ReadyVsOffPlanComparison />
        
        <section className="section-padding bg-white">
          <div className="luxury-container">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">{translate("UAE Real Estate Investment Benefits")}</h2>
              <div className="gold-separator mx-auto mt-4" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="text-luxury-gold text-4xl font-bold mb-2">8-12%</div>
                <h3 className="text-xl font-semibold mb-2">{translate("Average Rental Yield")}</h3>
                <p className="text-gray-600">
                  {translate("Significantly higher than global average of 3-4%")}
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="text-luxury-gold text-4xl font-bold mb-2">0%</div>
                <h3 className="text-xl font-semibold mb-2">{translate("Income & Property Tax")}</h3>
                <p className="text-gray-600">
                  {translate("Tax-free rental income and no annual property taxes")}
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="text-luxury-gold text-4xl font-bold mb-2">↗ 12.4%</div>
                <h3 className="text-xl font-semibold mb-2">{translate("Price Appreciation (2023)")}</h3>
                <p className="text-gray-600">
                  {translate("Strong market growth continues post-pandemic")}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ROI;
