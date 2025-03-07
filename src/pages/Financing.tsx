import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Bank, FileSearch, Scale, Handshake } from "lucide-react";

const Financing = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <HeroSection
          title="Property Financing Options"
          subtitle="Explore mortgage and financing solutions for international investors"
          videoUrl="https://player.vimeo.com/external/371865381.sd.mp4?s=5229ddd1a93a2daeb3e1acc49187664b43d0bfd3&profile_id=139&oauth2_token_id=57447761"
          backgroundImage="https://images.unsplash.com/photo-1604756228445-7419dbd85e7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          showCta={false}
        />
        
        <section className="section-padding">
          <div className="luxury-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Financing Information */}
              <div>
                <h2 className="text-3xl font-bold mb-4">Financing Your Dubai Property</h2>
                <div className="gold-separator" />
                <p className="text-gray-600 mb-6">
                  Navigating the financing options for international property investments can be complex. We're here to simplify the process and help you find the best solutions.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-luxury-navy/10 p-3 rounded-full mr-4">
                      <Bank className="h-6 w-6 text-luxury-navy" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Mortgage Options</h3>
                      <p className="text-gray-600">
                        Explore a range of mortgage products from local and international banks, tailored to non-resident investors.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-luxury-navy/10 p-3 rounded-full mr-4">
                      <FileSearch className="h-6 w-6 text-luxury-navy" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Eligibility Criteria</h3>
                      <p className="text-gray-600">
                        Understand the key criteria for mortgage approval, including credit history, income verification, and property valuation.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-luxury-navy/10 p-3 rounded-full mr-4">
                      <Scale className="h-6 w-6 text-luxury-navy" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Loan-to-Value (LTV)</h3>
                      <p className="text-gray-600">
                        Learn about typical LTV ratios for non-resident mortgages in Dubai and how they impact your down payment requirements.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-luxury-navy/10 p-3 rounded-full mr-4">
                      <Handshake className="h-6 w-6 text-luxury-navy" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Our Financing Partners</h3>
                      <p className="text-gray-600">
                        We work with leading banks and financial institutions to offer you competitive rates and flexible financing solutions.
                      </p>
                    </div>
                  </div>
                </div>
                
                <Button asChild className="mt-8 bg-luxury-gold hover:bg-luxury-gold/90">
                  <Link to="/contact">
                    Get Personalized Financing Advice
                  </Link>
                </Button>
              </div>
              
              {/* Mortgage Calculator */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Mortgage Calculator</h2>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="property-price" className="block text-sm font-medium text-gray-700">
                      Property Price (AED)
                    </label>
                    <input
                      type="number"
                      id="property-price"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-luxury-gold focus:ring-luxury-gold sm:text-sm"
                      placeholder="1,500,000"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="down-payment" className="block text-sm font-medium text-gray-700">
                      Down Payment (%)
                    </label>
                    <input
                      type="number"
                      id="down-payment"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-luxury-gold focus:ring-luxury-gold sm:text-sm"
                      placeholder="25"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="interest-rate" className="block text-sm font-medium text-gray-700">
                      Interest Rate (%)
                    </label>
                    <input
                      type="number"
                      id="interest-rate"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-luxury-gold focus:ring-luxury-gold sm:text-sm"
                      placeholder="4.5"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="loan-term" className="block text-sm font-medium text-gray-700">
                      Loan Term (Years)
                    </label>
                    <input
                      type="number"
                      id="loan-term"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-luxury-gold focus:ring-luxury-gold sm:text-sm"
                      placeholder="20"
                    />
                  </div>
                  
                  <Button className="w-full bg-luxury-navy hover:bg-luxury-navy/90">
                    Calculate Monthly Payment
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Financing;
