
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, GraduationCap, Globe, Building2 } from "lucide-react";

interface PartnerType {
  name: string;
  description: string;
  logoUrl?: string;
}

const PartnersSection = () => {
  const { translate } = useLanguage();

  const developers: PartnerType[] = [
    { name: "Emaar Properties", description: translate("Leading developer of iconic projects including Burj Khalifa") },
    { name: "DAMAC Properties", description: translate("Luxury real estate developer with projects across Dubai") },
    { name: "Nakheel", description: translate("Developer of Palm Jumeirah and other waterfront projects") },
    { name: "Meraas", description: translate("Developer focused on creating unique lifestyle experiences") },
    { name: "Dubai Properties", description: translate("Major developer of residential and commercial real estate") },
    { name: "Sobha Group", description: translate("Developer of premium residential properties") }
  ];

  const banks: PartnerType[] = [
    { name: "Emirates NBD", description: translate("Leading banking group offering comprehensive financial services") },
    { name: "ADCB", description: translate("Abu Dhabi Commercial Bank with specialized property financing") },
    { name: "Dubai Islamic Bank", description: translate("Premier Islamic financial institution with Sharia-compliant options") },
    { name: "Mashreq Bank", description: translate("One of UAE's leading financial institutions with flexible mortgage options") },
    { name: "HSBC", description: translate("International bank offering mortgage solutions for expats and residents") }
  ];

  const lawFirms: PartnerType[] = [
    { name: "Al Tamimi & Company", description: translate("Largest law firm in the Middle East with real estate expertise") },
    { name: "Baker McKenzie Habib Al Mulla", description: translate("Global law firm with strong local presence") },
    { name: "BSA Ahmad Bin Hezeem & Associates", description: translate("Full-service law firm with real estate specialization") },
    { name: "Clyde & Co", description: translate("International law firm with expertise in UAE property laws") }
  ];

  const freeZones: PartnerType[] = [
    { name: "Dubai Multi Commodities Centre (DMCC)", description: translate("World's #1 free zone focused on commodities trade") },
    { name: "Dubai International Financial Centre (DIFC)", description: translate("Leading financial hub for the Middle East") },
    { name: "Dubai Silicon Oasis", description: translate("Technology park and free zone for tech businesses") },
    { name: "Jebel Ali Free Zone", description: translate("One of the world's largest free zones") },
    { name: "Dubai Media City", description: translate("Free zone for media and creative businesses") }
  ];

  const renderPartnersList = (partners: PartnerType[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {partners.map((partner) => (
        <div key={partner.name} className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-lg mb-2">{partner.name}</h4>
          <p className="text-gray-600 text-sm">{partner.description}</p>
        </div>
      ))}
    </div>
  );

  return (
    <section className="section-padding bg-gray-50">
      <div className="luxury-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">{translate("Our Partners")}</h2>
          <div className="mx-auto w-20 h-1 bg-luxury-gold mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {translate("We collaborate with Dubai's leading developers, financial institutions, legal experts, and free zones to provide you with comprehensive investment solutions.")}
          </p>
        </div>

        <Tabs defaultValue="developers" className="mt-8">
          <TabsList className="flex flex-wrap justify-center space-x-2 mb-8">
            <TabsTrigger value="developers" className="flex items-center gap-2">
              <Building className="h-4 w-4" />
              {translate("Developers")}
            </TabsTrigger>
            <TabsTrigger value="banks" className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              {translate("Banks")}
            </TabsTrigger>
            <TabsTrigger value="lawFirms" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              {translate("Law Firms")}
            </TabsTrigger>
            <TabsTrigger value="freeZones" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              {translate("Free Zones")}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="developers" className="animate-fade-in">
            {renderPartnersList(developers)}
          </TabsContent>

          <TabsContent value="banks" className="animate-fade-in">
            {renderPartnersList(banks)}
          </TabsContent>

          <TabsContent value="lawFirms" className="animate-fade-in">
            {renderPartnersList(lawFirms)}
          </TabsContent>

          <TabsContent value="freeZones" className="animate-fade-in">
            {renderPartnersList(freeZones)}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PartnersSection;
