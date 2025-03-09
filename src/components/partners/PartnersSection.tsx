
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, Bank, Scale, Briefcase } from "lucide-react";

const PartnersSection = () => {
  const { translate } = useLanguage();

  // Lists of partners by category
  const developers = [
    "Emaar Properties", "Dubai Holding", "Nakheel", "DAMAC Properties", 
    "Meraas", "Sobha Realty", "Omniyat", "Azizi Developments", 
    "Danube Properties", "Binghatti Developers", "RAK Properties", "Al Hamra"
  ];

  const banks = [
    "Emirates NBD", "ADCB", "Dubai Islamic Bank", "Mashreq Bank", 
    "RAKBANK", "HSBC UAE", "FAB", "Standard Chartered UAE", 
    "Ajman Bank", "Commercial Bank of Dubai"
  ];

  const lawFirms = [
    "Al Tamimi & Company", "Baker McKenzie", "Clyde & Co", 
    "Hadef & Partners", "BSA Ahmad Bin Hezeem & Associates", 
    "Galadari Advocates & Legal Consultants", "Global Advocates", 
    "James Berry & Associates"
  ];

  const freeZones = [
    "Dubai Multi Commodities Centre (DMCC)", "Dubai International Financial Centre (DIFC)", 
    "Dubai Silicon Oasis", "Dubai Media City", "Jebel Ali Free Zone (JAFZA)",
    "Dubai Airport Free Zone (DAFZA)", "Ras Al Khaimah Economic Zone (RAKEZ)", 
    "Ajman Free Zone", "Sharjah Media City (SHAMS)"
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="luxury-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">{translate("Our Partners")}</h2>
          <div className="gold-separator mx-auto mb-4" />
          <p className="text-gray-600 max-w-3xl mx-auto">
            {translate("We work with the UAE's most trusted organizations to ensure seamless transactions and exceptional service for our clients.")}
          </p>
        </div>
        
        <Tabs defaultValue="developers" className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-4 mb-8">
            <TabsTrigger value="developers" className="flex items-center gap-2">
              <Building className="h-4 w-4" />
              <span>{translate("Developers")}</span>
            </TabsTrigger>
            <TabsTrigger value="banks" className="flex items-center gap-2">
              <Bank className="h-4 w-4" />
              <span>{translate("Banks")}</span>
            </TabsTrigger>
            <TabsTrigger value="law-firms" className="flex items-center gap-2">
              <Scale className="h-4 w-4" />
              <span>{translate("Law Firms")}</span>
            </TabsTrigger>
            <TabsTrigger value="free-zones" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              <span>{translate("Free Zones")}</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="developers" className="mt-4">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">{translate("Premier Property Developers")}</h3>
              <p className="text-gray-600 mb-6">
                {translate("We've built strong relationships with the UAE's leading property developers, giving our clients access to exclusive launches and special incentives.")}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {developers.map((developer, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                    <Building className="h-6 w-6 mx-auto mb-2 text-luxury-navy" />
                    <div className="font-medium">{developer}</div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="banks" className="mt-4">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">{translate("Financial Partners")}</h3>
              <p className="text-gray-600 mb-6">
                {translate("Our banking partners offer exclusive financing packages for international investors, with competitive rates and streamlined approval processes.")}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {banks.map((bank, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                    <Bank className="h-6 w-6 mx-auto mb-2 text-luxury-navy" />
                    <div className="font-medium">{bank}</div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="law-firms" className="mt-4">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">{translate("Legal Partners")}</h3>
              <p className="text-gray-600 mb-6">
                {translate("We work with prestigious law firms that specialize in UAE real estate law and international investment, ensuring your transactions are legally sound.")}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {lawFirms.map((firm, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                    <Scale className="h-6 w-6 mx-auto mb-2 text-luxury-navy" />
                    <div className="font-medium">{firm}</div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="free-zones" className="mt-4">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">{translate("Free Zone Partners")}</h3>
              <p className="text-gray-600 mb-6">
                {translate("For investors looking to establish a business presence in the UAE, we have partnership agreements with major free zones offering preferential setup terms.")}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {freeZones.map((zone, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                    <Briefcase className="h-6 w-6 mx-auto mb-2 text-luxury-navy" />
                    <div className="font-medium">{zone}</div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PartnersSection;
