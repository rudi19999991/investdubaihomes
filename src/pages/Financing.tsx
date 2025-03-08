
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CircleDollarSign, FileSearch, Scale, Handshake, Calculator, PieChart, Home, Building2, Landmark } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Financing = () => {
  const { toast } = useToast();
  const { translate } = useLanguage();
  const [propertyPrice, setPropertyPrice] = useState<number>(1500000);
  const [downPayment, setDownPayment] = useState<number>(25);
  const [interestRate, setInterestRate] = useState<number>(4.5);
  const [loanTerm, setLoanTerm] = useState<number>(20);
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);

  const handleCalculate = () => {
    // Calculate loan amount
    const loanAmount = propertyPrice * (1 - downPayment / 100);
    
    // Convert annual interest rate to monthly and decimal
    const monthlyInterestRate = interestRate / 100 / 12;
    
    // Calculate number of payments
    const numberOfPayments = loanTerm * 12;
    
    // Calculate monthly payment using the mortgage formula
    const monthlyPaymentValue = loanAmount * 
      (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / 
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    
    setMonthlyPayment(monthlyPaymentValue);
    
    toast({
      title: translate("Mortgage Calculation Complete"),
      description: `${translate("Your estimated monthly payment is AED")} ${monthlyPaymentValue.toLocaleString('en-US', { maximumFractionDigits: 0 })}`,
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <HeroSection
          title={translate("Property Financing Options")}
          subtitle={translate("Explore mortgage and financing")}
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
                  {translate("Navigating the financing options")}
                </p>

                <Tabs defaultValue="resident" className="mt-8 mb-8">
                  <TabsList className="grid grid-cols-2 mb-6">
                    <TabsTrigger value="resident">{translate("UAE Residents")}</TabsTrigger>
                    <TabsTrigger value="non-resident">{translate("Non-Residents")}</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="resident" className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">
                        {translate("Mortgage Options for UAE Residents")}
                      </h3>
                      <p className="text-gray-600">
                        {translate("As a UAE resident, you have access to a wide range of mortgage products from local and international banks.")}
                      </p>
                      
                      <div className="grid gap-6 mt-6">
                        <div className="rounded-lg border p-4">
                          <div className="flex items-center gap-3">
                            <div className="bg-luxury-navy/10 p-2 rounded-full">
                              <Home className="h-5 w-5 text-luxury-navy" />
                            </div>
                            <div>
                              <h4 className="font-semibold">{translate("For Residents")}</h4>
                            </div>
                          </div>
                          <ul className="mt-3 space-y-2 pl-10 list-disc text-gray-600">
                            <li>{translate("Up to 80% LTV for properties under AED 5 million")}</li>
                            <li>{translate("Up to 75% LTV for properties over AED 5 million")}</li>
                            <li>{translate("Interest rates starting from 3.99% (variable) and 4.49% (fixed)")}</li>
                            <li>{translate("Loan terms up to 25 years")}</li>
                            <li>{translate("Minimum salary requirement: AED 15,000/month")}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg mt-6">
                      <h3 className="text-xl font-semibold mb-4">{translate("Local Banks Offering Resident Mortgages")}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-md shadow-sm">
                          <div className="flex items-center mb-2">
                            <Landmark className="h-5 w-5 mr-2 text-luxury-navy" />
                            <h4 className="font-medium">Emirates NBD</h4>
                          </div>
                          <p className="text-sm text-gray-600">{translate("Offers both conventional and Islamic financing options, with competitive rates for UAE nationals and residents.")}</p>
                        </div>
                        
                        <div className="bg-white p-4 rounded-md shadow-sm">
                          <div className="flex items-center mb-2">
                            <Landmark className="h-5 w-5 mr-2 text-luxury-navy" />
                            <h4 className="font-medium">ADCB</h4>
                          </div>
                          <p className="text-sm text-gray-600">{translate("Flexible mortgage options with attractive interest rates and special benefits for premium customers.")}</p>
                        </div>
                        
                        <div className="bg-white p-4 rounded-md shadow-sm">
                          <div className="flex items-center mb-2">
                            <Landmark className="h-5 w-5 mr-2 text-luxury-navy" />
                            <h4 className="font-medium">DIB</h4>
                          </div>
                          <p className="text-sm text-gray-600">{translate("Islamic home finance with Shariah-compliant options and competitive profit rates.")}</p>
                        </div>
                        
                        <div className="bg-white p-4 rounded-md shadow-sm">
                          <div className="flex items-center mb-2">
                            <Landmark className="h-5 w-5 mr-2 text-luxury-navy" />
                            <h4 className="font-medium">Mashreq Bank</h4>
                          </div>
                          <p className="text-sm text-gray-600">{translate("Fast approval process and special rates for premium properties.")}</p>
                        </div>
                        
                        <div className="bg-white p-4 rounded-md shadow-sm">
                          <div className="flex items-center mb-2">
                            <Landmark className="h-5 w-5 mr-2 text-luxury-navy" />
                            <h4 className="font-medium">RAKBANK</h4>
                          </div>
                          <p className="text-sm text-gray-600">{translate("Competitive rates with options for both ready and off-plan properties.")}</p>
                        </div>
                        
                        <div className="bg-white p-4 rounded-md shadow-sm">
                          <div className="flex items-center mb-2">
                            <Landmark className="h-5 w-5 mr-2 text-luxury-navy" />
                            <h4 className="font-medium">HSBC</h4>
                          </div>
                          <p className="text-sm text-gray-600">{translate("International bank offering mortgages with global account benefits.")}</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="non-resident" className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">
                        {translate("Mortgage Options for Non-Residents")}
                      </h3>
                      <p className="text-gray-600">
                        {translate("International investors can secure financing for Dubai property purchases, though terms differ from resident options.")}
                      </p>
                      
                      <div className="grid gap-6 mt-6">
                        <div className="rounded-lg border p-4">
                          <div className="flex items-center gap-3">
                            <div className="bg-luxury-navy/10 p-2 rounded-full">
                              <Building2 className="h-5 w-5 text-luxury-navy" />
                            </div>
                            <div>
                              <h4 className="font-semibold">{translate("For Non-Residents")}</h4>
                            </div>
                          </div>
                          <ul className="mt-3 space-y-2 pl-10 list-disc text-gray-600">
                            <li>{translate("Up to 65-70% LTV for completed properties")}</li>
                            <li>{translate("Limited financing options for off-plan properties")}</li>
                            <li>{translate("Interest rates typically starting from 4.99% (variable) and 5.49% (fixed)")}</li>
                            <li>{translate("Loan terms up to 20 years")}</li>
                            <li>{translate("More extensive documentation requirements")}</li>
                            <li>{translate("Minimum income typically USD 8,000/month or equivalent")}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg mt-6">
                      <h3 className="text-xl font-semibold mb-4">{translate("Banks Offering Non-Resident Mortgages")}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-md shadow-sm">
                          <div className="flex items-center mb-2">
                            <Landmark className="h-5 w-5 mr-2 text-luxury-navy" />
                            <h4 className="font-medium">Emirates NBD</h4>
                          </div>
                          <p className="text-sm text-gray-600">{translate("Non-resident mortgage program with up to 65% financing.")}</p>
                        </div>
                        
                        <div className="bg-white p-4 rounded-md shadow-sm">
                          <div className="flex items-center mb-2">
                            <Landmark className="h-5 w-5 mr-2 text-luxury-navy" />
                            <h4 className="font-medium">ENBD - Islamic Banking</h4>
                          </div>
                          <p className="text-sm text-gray-600">{translate("Shariah-compliant home finance options for non-residents.")}</p>
                        </div>
                        
                        <div className="bg-white p-4 rounded-md shadow-sm">
                          <div className="flex items-center mb-2">
                            <Landmark className="h-5 w-5 mr-2 text-luxury-navy" />
                            <h4 className="font-medium">Mashreq Bank</h4>
                          </div>
                          <p className="text-sm text-gray-600">{translate("International mortgage program with digital application process.")}</p>
                        </div>
                        
                        <div className="bg-white p-4 rounded-md shadow-sm">
                          <div className="flex items-center mb-2">
                            <Landmark className="h-5 w-5 mr-2 text-luxury-navy" />
                            <h4 className="font-medium">ADCB</h4>
                          </div>
                          <p className="text-sm text-gray-600">{translate("Non-resident mortgage with doorstep service in select countries.")}</p>
                        </div>
                      </div>
                      
                      <div className="mt-6 bg-luxury-navy/10 p-4 rounded">
                        <h4 className="font-semibold mb-2">{translate("Documentation Required for Non-Residents")}</h4>
                        <ul className="space-y-1 pl-6 list-disc text-gray-600 text-sm">
                          <li>{translate("Passport copies and residence proof in home country")}</li>
                          <li>{translate("6 months' bank statements")}</li>
                          <li>{translate("Proof of income/employment (min. 2 years in current job)")}</li>
                          <li>{translate("Credit report from home country (if available)")}</li>
                          <li>{translate("Property details and sale agreement")}</li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
                
                <div className="space-y-6 mt-8">
                  <div className="flex items-start">
                    <div className="bg-luxury-navy/10 p-3 rounded-full mr-4">
                      <PieChart className="h-6 w-6 text-luxury-navy" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{translate("Islamic Banking Options")}</h3>
                      <p className="text-gray-600">
                        {translate("Dubai offers extensive Shariah-compliant financing options through Islamic banks and Islamic windows of conventional banks.")}
                      </p>
                      <div className="mt-2">
                        <h4 className="font-medium">{translate("Popular Islamic Home Finance Products:")}</h4>
                        <ul className="list-disc pl-6 mt-2 text-gray-600">
                          <li>{translate("Ijara (lease-to-own structure)")}</li>
                          <li>{translate("Murabaha (cost-plus financing)")}</li>
                          <li>{translate("Diminishing Musharaka (declining balance partnership)")}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-luxury-navy/10 p-3 rounded-full mr-4">
                      <CircleDollarSign className="h-6 w-6 text-luxury-navy" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{translate("Developer Payment Plans")}</h3>
                      <p className="text-gray-600">
                        {translate("Many developers offer attractive payment plans for off-plan properties, with some extending post-handover payment options of 3-5 years, reducing the need for bank financing.")}
                      </p>
                    </div>
                  </div>
                </div>
                
                <Button asChild className="mt-8 bg-luxury-gold hover:bg-luxury-gold/90">
                  <Link to="/contact">
                    {translate("Get Personalized Financing Advice")}
                  </Link>
                </Button>
              </div>
              
              {/* Mortgage Calculator */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">{translate("Mortgage Calculator")}</h2>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="property-price" className="block text-sm font-medium text-gray-700">
                      {translate("Property Price (AED)")}
                    </label>
                    <input
                      type="number"
                      id="property-price"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-luxury-gold focus:ring-luxury-gold sm:text-sm"
                      placeholder="1,500,000"
                      value={propertyPrice}
                      onChange={(e) => setPropertyPrice(Number(e.target.value))}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="down-payment" className="block text-sm font-medium text-gray-700">
                      {translate("Down Payment (%)")}
                    </label>
                    <input
                      type="number"
                      id="down-payment"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-luxury-gold focus:ring-luxury-gold sm:text-sm"
                      placeholder="25"
                      value={downPayment}
                      onChange={(e) => setDownPayment(Number(e.target.value))}
                      min="0"
                      max="100"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="interest-rate" className="block text-sm font-medium text-gray-700">
                      {translate("Interest Rate (%)")}
                    </label>
                    <input
                      type="number"
                      id="interest-rate"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-luxury-gold focus:ring-luxury-gold sm:text-sm"
                      placeholder="4.5"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      min="0"
                      step="0.1"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="loan-term" className="block text-sm font-medium text-gray-700">
                      {translate("Loan Term (Years)")}
                    </label>
                    <input
                      type="number"
                      id="loan-term"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-luxury-gold focus:ring-luxury-gold sm:text-sm"
                      placeholder="20"
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(Number(e.target.value))}
                      min="1"
                      max="30"
                    />
                  </div>
                  
                  <Button className="w-full bg-luxury-navy hover:bg-luxury-navy/90" onClick={handleCalculate}>
                    {translate("Calculate Monthly Payment")}
                  </Button>
                  
                  {monthlyPayment !== null && (
                    <div className="mt-4 p-4 bg-gray-100 rounded-md">
                      <h3 className="text-lg font-medium mb-2">{translate("Estimated Monthly Payment")}</h3>
                      <p className="text-2xl font-bold text-luxury-gold">
                        AED {monthlyPayment.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                      </p>
                      <div className="mt-2 space-y-1 text-sm text-gray-600">
                        <p>{translate("Total Loan Amount")}: AED {(propertyPrice * (1 - downPayment / 100)).toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                        <p>{translate("Total Interest")}: AED {((monthlyPayment * loanTerm * 12) - (propertyPrice * (1 - downPayment / 100))).toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                        <p>{translate("Total Payment")}: AED {(monthlyPayment * loanTerm * 12).toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                      </div>
                    </div>
                  )}
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
