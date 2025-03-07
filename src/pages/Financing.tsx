
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { DollarSign, Percent, Calculator, Building, FileText } from "lucide-react";

const Financing = () => {
  // Loan calculator state
  const [loanAmount, setLoanAmount] = useState<number>(1000000);
  const [interestRate, setInterestRate] = useState<number>(3.5);
  const [loanTerm, setLoanTerm] = useState<number>(25);
  const [downPayment, setDownPayment] = useState<number>(20);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [totalPayment, setTotalPayment] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);

  // Calculate loan details
  const calculateLoan = () => {
    const principal = loanAmount * (1 - downPayment / 100);
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    
    const monthlyPaymentValue = principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    setMonthlyPayment(monthlyPaymentValue);
    setTotalPayment(monthlyPaymentValue * numberOfPayments);
    setTotalInterest((monthlyPaymentValue * numberOfPayments) - principal);
  };

  React.useEffect(() => {
    calculateLoan();
  }, [loanAmount, interestRate, loanTerm, downPayment]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative">
          <div className="absolute inset-0 overflow-hidden">
            <video 
              className="w-full h-full object-cover" 
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd8a429b28ac&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-luxury-navy/70" />
          </div>
          
          <div className="relative py-20 md:py-32 luxury-container">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Property Financing</h1>
              <div className="gold-separator mx-auto" />
              <p className="text-xl max-w-2xl mx-auto mt-6">
                Discover flexible financing options for your Dubai property investment with competitive rates from UAE's leading banks.
              </p>
            </div>
          </div>
        </div>
        
        {/* Financing Overview */}
        <section className="py-16">
          <div className="luxury-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Financing Your Property in Dubai</h2>
              <div className="gold-separator" />
              
              <p className="mt-6 text-lg">
                Both UAE residents and non-residents can obtain mortgages to finance property purchases in Dubai. 
                Banks typically offer up to 75% financing for residents and up to 60% for non-residents, with loan 
                terms ranging from 5 to 25 years.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">For UAE Residents</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-luxury-gold mr-2">•</span>
                      <span>Up to 75% loan-to-value ratio</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-luxury-gold mr-2">•</span>
                      <span>25% minimum down payment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-luxury-gold mr-2">•</span>
                      <span>Interest rates from 2.99% (fixed) or EIBOR + 1.5% (variable)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-luxury-gold mr-2">•</span>
                      <span>Loan terms up to 25 years</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-luxury-gold mr-2">•</span>
                      <span>Maximum age at loan maturity: 65-70 years</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">For Non-Residents</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-luxury-gold mr-2">•</span>
                      <span>Up to 60% loan-to-value ratio</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-luxury-gold mr-2">•</span>
                      <span>40% minimum down payment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-luxury-gold mr-2">•</span>
                      <span>Interest rates from 3.49% (fixed) or EIBOR + 2% (variable)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-luxury-gold mr-2">•</span>
                      <span>Loan terms up to 20 years</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-luxury-gold mr-2">•</span>
                      <span>Maximum age at loan maturity: 65 years</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Loan Calculator */}
        <section className="py-16 bg-gray-50">
          <div className="luxury-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Mortgage Calculator</h2>
              <div className="gold-separator mx-auto" />
              <p className="text-lg mt-4 max-w-2xl mx-auto">
                Use our calculator to estimate your monthly payments and total cost of financing.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader className="bg-luxury-navy text-white">
                  <CardTitle className="flex items-center text-2xl">
                    <Calculator className="mr-2 h-6 w-6" /> Mortgage Calculator
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Calculate your mortgage payments based on property price, interest rate, and term
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="loan-amount">Property Price (AED)</Label>
                        <div className="relative mt-1">
                          <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="loan-amount"
                            type="number"
                            value={loanAmount}
                            onChange={(e) => setLoanAmount(Number(e.target.value))}
                            className="pl-10"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="down-payment">Down Payment (%)</Label>
                        <div className="relative mt-1">
                          <Percent className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="down-payment"
                            type="number"
                            value={downPayment}
                            onChange={(e) => setDownPayment(Number(e.target.value))}
                            className="pl-10"
                            min="0"
                            max="100"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="interest-rate">Interest Rate (%)</Label>
                        <div className="relative mt-1">
                          <Percent className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="interest-rate"
                            type="number"
                            value={interestRate}
                            onChange={(e) => setInterestRate(Number(e.target.value))}
                            className="pl-10"
                            step="0.01"
                            min="0"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="loan-term">Loan Term (Years)</Label>
                        <Input
                          id="loan-term"
                          type="number"
                          value={loanTerm}
                          onChange={(e) => setLoanTerm(Number(e.target.value))}
                          min="1"
                          max="25"
                        />
                      </div>
                      
                      <Button onClick={calculateLoan} className="w-full bg-luxury-gold hover:bg-luxury-gold/90">
                        Calculate
                      </Button>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold mb-4">Results</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-gray-500">Loan Amount</p>
                          <p className="text-2xl font-bold">
                            AED {(loanAmount * (1 - downPayment / 100)).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                          </p>
                        </div>
                        
                        <div>
                          <p className="text-sm text-gray-500">Monthly Payment</p>
                          <p className="text-2xl font-bold text-luxury-navy">
                            AED {monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                          </p>
                        </div>
                        
                        <div className="pt-4 border-t border-gray-200">
                          <p className="text-sm text-gray-500">Total Payments</p>
                          <p className="text-xl font-semibold">
                            AED {totalPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                          </p>
                        </div>
                        
                        <div>
                          <p className="text-sm text-gray-500">Total Interest</p>
                          <p className="text-xl font-semibold">
                            AED {totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* UAE Banks */}
        <section className="py-16">
          <div className="luxury-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">UAE Banks Offering Mortgages</h2>
              <div className="gold-separator mx-auto" />
              <p className="text-lg mt-4 max-w-2xl mx-auto">
                Compare mortgage options from leading UAE banks for your Dubai property investment.
              </p>
            </div>
            
            <Tabs defaultValue="residents" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="residents">For UAE Residents</TabsTrigger>
                <TabsTrigger value="non-residents">For Non-Residents</TabsTrigger>
              </TabsList>
              
              <TabsContent value="residents" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Building className="mr-2 h-5 w-5 text-luxury-gold" />
                        Emirates NBD
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-luxury-gold mr-2">•</span>
                          <span>Up to 80% financing for UAE nationals, 75% for expats</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-luxury-gold mr-2">•</span>
                          <span>Interest rates from 2.99% (fixed for 3 years)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-luxury-gold mr-2">•</span>
                          <span>Loan terms up to 25 years</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-luxury-gold mr-2">•</span>
                          <span>Free property valuation</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Building className="mr-2 h-5 w-5 text-luxury-gold" />
                        Abu Dhabi Commercial Bank
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-luxury-gold mr-2">•</span>
                          <span>Up to 75% financing for UAE nationals and expats</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-luxury-gold mr-2">•</span>
                          <span>Interest rates from 3.15% (fixed for 1 year)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-luxury-gold mr-2">•</span>
                          <span>Loan terms up to 25 years</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-luxury-gold mr-2">•</span>
                          <span>Pre-approval within 48 hours</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Building className="mr-2 h-5 w-5 text-luxury-gold" />
                        Dubai Islamic Bank
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-luxury-gold mr-2">•</span>
                          <span>Sharia-compliant home finance up to 75%</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-luxury-gold mr-2">•</span>
                          <span>Profit rates from 3.49% (fixed for 5 years)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-luxury-gold mr-2">•</span>
                          <span>Finance terms up to 25 years</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-luxury-gold mr-2">•</span>
                          <span>No early settlement fees (after 5 years)</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Building className="mr-2 h-5 w-5 text-luxury-gold" />
                        Mashreq Bank
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-luxury-gold mr-2">•</span>
                          <span>Up to 75% financing for ready properties</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-luxury-gold mr-2">•</span>
                          <span>Interest rates from 3.25% (fixed for 2 years)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-luxury-gold mr-2">•</span>
                          <span>Loan terms up to 25 years</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-luxury-gold mr-2">•</span>
                          <span>Life and property insurance available</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="non-residents" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Building className="mr-2 h-5 w-5 text-luxury-gold" />
                        Emirates NBD
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-luxury-gold mr-2">•</span>
                          <span>Up to 60% financing for non-residents</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-luxury-gold mr-2">•</span>
                          <span>Interest rates from 3.99% (fixed for 3 years)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-luxury-gold mr-2">•</span>
                          <span>Loan terms up to 20 years</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-luxury-gold mr-2">•</span>
                          <span>No UAE bank account required initially</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Building className="mr-2 h-5 w-5 text-luxury-gold" />
                        Abu Dhabi Islamic Bank
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-luxury-gold mr-2">•</span>
                          <span>Sharia-compliant finance up to 50% for non-residents</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-luxury-gold mr-2">•</span>
                          <span>Profit rates from 3.99% (fixed for 3 years)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-luxury-gold mr-2">•</span>
                          <span>Finance terms up to 15 years</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-luxury-gold mr-2">•</span>
                          <span>GCC nationals eligible for financing</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Building className="mr-2 h-5 w-5 text-luxury-gold" />
                        RAKBank
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-luxury-gold mr-2">•</span>
                          <span>Up to 50% financing for non-residents</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-luxury-gold mr-2">•</span>
                          <span>Interest rates from 4.25% (fixed for 1 year)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-luxury-gold mr-2">•</span>
                          <span>Loan terms up to 15 years</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-luxury-gold mr-2">•</span>
                          <span>Remote application process available</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Building className="mr-2 h-5 w-5 text-luxury-gold" />
                        HSBC UAE
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-luxury-gold mr-2">•</span>
                          <span>Up to 60% financing for HSBC Premier customers</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-luxury-gold mr-2">•</span>
                          <span>Interest rates from 3.75% (fixed for 2 years)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-luxury-gold mr-2">•</span>
                          <span>Loan terms up to 20 years</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-luxury-gold mr-2">•</span>
                          <span>International banking support in multiple languages</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Required Documents */}
        <section className="py-16 bg-gray-50">
          <div className="luxury-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Required Documents</h2>
              <div className="gold-separator" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <FileText className="mr-2 h-5 w-5 text-luxury-gold" />
                    For UAE Residents
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-luxury-gold mr-2">•</span>
                      <span>Emirates ID and passport copy with visa page</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-luxury-gold mr-2">•</span>
                      <span>Last 6 months bank statements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-luxury-gold mr-2">•</span>
                      <span>Salary certificate or employment contract</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-luxury-gold mr-2">•</span>
                      <span>Trade license (for self-employed applicants)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-luxury-gold mr-2">•</span>
                      <span>Property details and sale agreement</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <FileText className="mr-2 h-5 w-5 text-luxury-gold" />
                    For Non-Residents
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-luxury-gold mr-2">•</span>
                      <span>Passport copy (all pages)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-luxury-gold mr-2">•</span>
                      <span>Last 6 months bank statements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-luxury-gold mr-2">•</span>
                      <span>Proof of income (employment certificate or tax returns)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-luxury-gold mr-2">•</span>
                      <span>Credit report from country of residence</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-luxury-gold mr-2">•</span>
                      <span>Property details and sale agreement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-luxury-gold mr-2">•</span>
                      <span>References from current banking relationships</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16">
          <div className="luxury-container">
            <div className="bg-luxury-navy text-white p-12 rounded-lg text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Need Help with Financing?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Our team can help you navigate financing options and connect you with the right lenders for your investment needs.
              </p>
              <Button asChild size="lg" className="bg-luxury-gold hover:bg-luxury-gold/90">
                <a href="/contact">Schedule a Consultation</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Financing;
