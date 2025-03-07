
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CircleDollarSign, FileSearch, Scale, Handshake, Calculator } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

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
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-luxury-navy/10 p-3 rounded-full mr-4">
                      <CircleDollarSign className="h-6 w-6 text-luxury-navy" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{translate("Mortgage Options")}</h3>
                      <p className="text-gray-600">
                        {translate("Explore a range of mortgage")}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-luxury-navy/10 p-3 rounded-full mr-4">
                      <FileSearch className="h-6 w-6 text-luxury-navy" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{translate("Eligibility Criteria")}</h3>
                      <p className="text-gray-600">
                        {translate("Understand the key criteria")}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-luxury-navy/10 p-3 rounded-full mr-4">
                      <Scale className="h-6 w-6 text-luxury-navy" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{translate("Loan-to-Value (LTV)")}</h3>
                      <p className="text-gray-600">
                        {translate("Learn about typical LTV")}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-luxury-navy/10 p-3 rounded-full mr-4">
                      <Handshake className="h-6 w-6 text-luxury-navy" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{translate("Our Financing Partners")}</h3>
                      <p className="text-gray-600">
                        {translate("We work with leading banks")}
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
