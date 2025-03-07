
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import RoiCalculator from "@/components/RoiCalculator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, DollarSign, BarChart, Building, CheckSquare } from "lucide-react";

const ROI = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <HeroSection
          title="ROI & Investment Benefits"
          subtitle="Maximize your returns with strategic property investments in Dubai & Ras Al Khaimah"
          videoUrl="https://player.vimeo.com/external/414899151.sd.mp4?s=c27eecc69a27dbc4c2b23d3a50ba3dfa20bcfb2e&profile_id=139&oauth2_token_id=57447761"
          backgroundImage="https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          showCta={false}
        />
        
        <section className="section-padding">
          <div className="luxury-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* ROI Calculator Column */}
              <div>
                <RoiCalculator />
              </div>
              
              {/* Info Column */}
              <div>
                <h2 className="text-3xl font-bold mb-4">Understanding ROI in Dubai Real Estate</h2>
                <div className="gold-separator" />
                <p className="text-gray-600 mb-6">
                  Dubai and Ras Al Khaimah offer some of the world's most attractive returns on property investments. Understanding how ROI is calculated will help you make informed investment decisions.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-luxury-navy/10 p-3 rounded-full mr-4">
                      <TrendingUp className="h-6 w-6 text-luxury-navy" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Higher Than Global Average</h3>
                      <p className="text-gray-600">
                        Dubai properties typically offer rental yields between 6-10%, significantly higher than global averages of 3-4% in most developed markets.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-luxury-navy/10 p-3 rounded-full mr-4">
                      <DollarSign className="h-6 w-6 text-luxury-navy" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Tax-Free Returns</h3>
                      <p className="text-gray-600">
                        With 0% income tax, your rental income in Dubai is completely tax-free, maximizing your net returns compared to other global investment destinations.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-luxury-navy/10 p-3 rounded-full mr-4">
                      <BarChart className="h-6 w-6 text-luxury-navy" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Capital Appreciation</h3>
                      <p className="text-gray-600">
                        Beyond rental yields, Dubai's property market has shown strong capital appreciation over time, particularly in prime and upcoming areas.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-luxury-navy/10 p-3 rounded-full mr-4">
                      <Building className="h-6 w-6 text-luxury-navy" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Best Areas for Investment</h3>
                      <p className="text-gray-600">
                        Downtown Dubai, Dubai Marina, Palm Jumeirah, and emerging areas in Ras Al Khaimah consistently provide strong returns for investors.
                      </p>
                    </div>
                  </div>
                </div>
                
                <Button asChild className="mt-8 bg-luxury-gold hover:bg-luxury-gold/90">
                  <Link to="/properties">
                    Explore High-ROI Properties
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Comparison Section */}
        <section className="section-padding bg-gray-50">
          <div className="luxury-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Ready vs. Off-Plan: Investment Comparison</h2>
              <div className="gold-separator mx-auto" />
              <p className="text-gray-600 max-w-3xl mx-auto">
                Understanding the advantages of each property type will help you build a balanced investment portfolio in the UAE.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Ready Properties */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-luxury-navy">Ready Properties</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckSquare className="h-5 w-5 mr-3 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Immediate Rental Income</h4>
                      <p className="text-gray-600">
                        Start generating returns immediately by renting out your property.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckSquare className="h-5 w-5 mr-3 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">What You See Is What You Get</h4>
                      <p className="text-gray-600">
                        Inspect the exact property and surroundings before purchasing.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckSquare className="h-5 w-5 mr-3 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Immediate Residency Eligibility</h4>
                      <p className="text-gray-600">
                        Qualify for UAE residency visa immediately upon purchase.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckSquare className="h-5 w-5 mr-3 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Typical ROI: 5-8%</h4>
                      <p className="text-gray-600">
                        Stable rental yields in established communities.
                      </p>
                    </div>
                  </div>
                </div>
                
                <Button asChild className="mt-8 bg-green-600 hover:bg-green-700 w-full">
                  <Link to="/properties?status=ready">
                    Browse Ready Properties
                  </Link>
                </Button>
              </div>
              
              {/* Off-Plan Properties */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-luxury-gold">Off-Plan Properties</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckSquare className="h-5 w-5 mr-3 text-luxury-gold mt-1" />
                    <div>
                      <h4 className="font-semibold">Lower Purchase Price</h4>
                      <p className="text-gray-600">
                        Typically 20-30% cheaper than comparable ready properties.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckSquare className="h-5 w-5 mr-3 text-luxury-gold mt-1" />
                    <div>
                      <h4 className="font-semibold">Attractive Payment Plans</h4>
                      <p className="text-gray-600">
                        Many developers offer 30/70 or 40/60 payment plans spread through construction.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckSquare className="h-5 w-5 mr-3 text-luxury-gold mt-1" />
                    <div>
                      <h4 className="font-semibold">Higher Capital Appreciation</h4>
                      <p className="text-gray-600">
                        Potential for 20-40% appreciation from purchase to completion.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckSquare className="h-5 w-5 mr-3 text-luxury-gold mt-1" />
                    <div>
                      <h4 className="font-semibold">Potential ROI: 8-12%</h4>
                      <p className="text-gray-600">
                        Higher potential returns in emerging neighborhoods.
                      </p>
                    </div>
                  </div>
                </div>
                
                <Button asChild className="mt-8 bg-luxury-gold hover:bg-luxury-gold/90 w-full">
                  <Link to="/properties?status=offplan">
                    Browse Off-Plan Projects
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Investment Advice */}
        <section className="section-padding">
          <div className="luxury-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Smart Investment Strategies</h2>
              <div className="gold-separator mx-auto" />
              <p className="text-gray-600 max-w-3xl mx-auto">
                Follow these guidelines to ensure successful property investments in Dubai and Ras Al Khaimah.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-luxury-navy">
                <h3 className="text-xl font-bold mb-3">Research the Developer</h3>
                <p className="text-gray-600">
                  Invest with reputable developers with proven track records of delivering quality projects on time.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-luxury-navy">
                <h3 className="text-xl font-bold mb-3">Location is Key</h3>
                <p className="text-gray-600">
                  Properties near metro stations, beaches, or major attractions consistently deliver better returns.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-luxury-navy">
                <h3 className="text-xl font-bold mb-3">Understand the Market Cycle</h3>
                <p className="text-gray-600">
                  Time your investments based on market trends and upcoming infrastructure developments.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-luxury-navy">
                <h3 className="text-xl font-bold mb-3">Diversify Property Types</h3>
                <p className="text-gray-600">
                  Balance your portfolio between residential, commercial, and hospitality properties for optimal returns.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-luxury-navy">
                <h3 className="text-xl font-bold mb-3">Consider Management Costs</h3>
                <p className="text-gray-600">
                  Factor in service charges, maintenance, and property management fees when calculating ROI.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-luxury-navy">
                <h3 className="text-xl font-bold mb-3">Legal Due Diligence</h3>
                <p className="text-gray-600">
                  Ensure all properties are registered with the Dubai Land Department or RAK authorities.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link to="/contact">
                  Get Professional Investment Advice
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ROI;
