
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, Landmark, Scale, Briefcase } from "lucide-react";

const PartnersSection = () => {
  const { translate } = useLanguage();

  // Lists of partners by category with logos
  const developers = [
    { name: "Emaar Properties", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Emaar_Properties_logo.svg/1200px-Emaar_Properties_logo.svg.png" },
    { name: "Dubai Holding", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Dubai_Holding_logo_vector.svg/2560px-Dubai_Holding_logo_vector.svg.png" },
    { name: "Nakheel", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Nakheel_logo.svg/1200px-Nakheel_logo.svg.png" },
    { name: "DAMAC Properties", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Damac_properties_logo.svg/1200px-Damac_properties_logo.svg.png" },
    { name: "Meraas", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Meraas_Holding_logo.svg/1200px-Meraas_Holding_logo.svg.png" },
    { name: "Sobha Realty", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Sobha_Limited_Logo.svg/1200px-Sobha_Limited_Logo.svg.png" },
    { name: "Omniyat", logo: "https://www.omniyat.com/themes/custom/omniyat/logo.svg" },
    { name: "Azizi Developments", logo: "https://www.azizidevelopments.com/assets/imgs/logo-black.png" },
    { name: "Danube Properties", logo: "https://www.danubeproperties.ae/images/logo.png" },
    { name: "Binghatti Developers", logo: "https://binghatti.com/wp-content/uploads/2022/04/Binghatti-Logo-Horizontal-Light.svg" },
    { name: "RAK Properties", logo: "https://www.rakproperties.net/Themes/RAKGROUP/Content/img/logo.png" },
    { name: "Al Hamra", logo: "https://alhamra.ae/wp-content/themes/alhamra/assets/images/logo.svg" }
  ];

  const banks = [
    { name: "Emirates NBD", logo: "https://www.emiratesnbd.com/Style%20Library/EmiratesNBD/img/logo.png" },
    { name: "ADCB", logo: "https://www.adcb.com/Style%20Library/images/logo.svg" },
    { name: "Dubai Islamic Bank", logo: "https://www.dib.ae/images/dib-logo-eng.svg" },
    { name: "Mashreq Bank", logo: "https://www.mashreqbank.com/sites/default/files/2022-03/Mashreq-Logo-Digital_1.svg" },
    { name: "RAKBANK", logo: "https://rakbank.ae/wps/wcm/connect/rakbank_contentsource/Website-Template/Home/RAKBANK-LOGO.svg" },
    { name: "HSBC UAE", logo: "https://www.hsbc.ae/-/media/hsbc/hsbc-ae/brand/logo-hsbc-white-transparent.svg" },
    { name: "FAB", logo: "https://www.bankfab.com/-/media/fabgroup/images/homepage/fab-logo.svg" },
    { name: "Standard Chartered UAE", logo: "https://av.sc.com/ae/content/images/uae-sc-logo-white.png" },
    { name: "Ajman Bank", logo: "https://www.ajmanbank.ae/-/media/Project/AjmanBank/Images/svg/ajman-bank-logo-with-slogan-eng.svg" },
    { name: "Commercial Bank of Dubai", logo: "https://www.cbd.ae/Style%20Library/images/logo.svg" }
  ];

  const lawFirms = [
    { name: "Al Tamimi & Company", logo: "https://www.tamimi.com/wp-content/themes/tamimi/assets/images/logo.svg" },
    { name: "Baker McKenzie", logo: "https://www.bakermckenzie.com/-/media/images/bm-logo.png" },
    { name: "Clyde & Co", logo: "https://www.clydeco.com/themes/custom/clyde_theme/logo.svg" },
    { name: "Hadef & Partners", logo: "https://www.hadefpartners.com/logo-light.svg" },
    { name: "BSA Ahmad Bin Hezeem & Associates", logo: "https://bsabh.com/wp-content/themes/bsa/assets/img/logo.png" },
    { name: "Galadari Advocates & Legal Consultants", logo: "https://galadarilaw.com/wp-content/themes/galadari/assets/images/logo-black.svg" },
    { name: "Global Advocates", logo: "https://www.globaladvocates.com/assets/images/global-advocates-dubai-law-firm-logo.png" },
    { name: "James Berry & Associates", logo: "https://www.jamesberrylaw.com/wp-content/uploads/2020/01/JB-Legal-logo-1-1.png" }
  ];

  const freeZones = [
    { name: "Dubai Multi Commodities Centre (DMCC)", logo: "https://www.dmcc.ae/themes/custom/dmcc/images/logo.svg" },
    { name: "Dubai International Financial Centre (DIFC)", logo: "https://www.difc.ae/images/logo.svg" },
    { name: "Dubai Silicon Oasis", logo: "https://www.dsoa.ae/content/dam/dsoa/logo/logo-en.svg" },
    { name: "Dubai Media City", logo: "https://www.dmc.ae/wp-content/themes/mediaCity/images/logo.svg" },
    { name: "Jebel Ali Free Zone (JAFZA)", logo: "https://jafza.ae/wp-content/themes/jafza/assets/img/logo.svg" },
    { name: "Dubai Airport Free Zone (DAFZA)", logo: "https://www.dafz.ae/en/PublishingImages/dafza-logo.svg" },
    { name: "Ras Al Khaimah Economic Zone (RAKEZ)", logo: "https://www.rakez.com/resources/img/rakez-logo-white.svg" },
    { name: "Ajman Free Zone", logo: "https://www.ajmanfreezone.gov.ae/content/dam/afz/portal/brand-footer/AJMAN%20FREE%20ZONE-F.svg" },
    { name: "Sharjah Media City (SHAMS)", logo: "https://www.shams.ae/en/images/logo.svg" }
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
              <Landmark className="h-4 w-4" />
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
                  <div key={index} className="bg-gray-50 p-4 rounded-lg flex flex-col items-center justify-center h-32">
                    <div className="h-16 flex items-center justify-center mb-2">
                      <img 
                        src={developer.logo} 
                        alt={developer.name} 
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div className="text-center text-sm font-medium mt-auto">{developer.name}</div>
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
                  <div key={index} className="bg-gray-50 p-4 rounded-lg flex flex-col items-center justify-center h-32">
                    <div className="h-16 flex items-center justify-center mb-2">
                      <img 
                        src={bank.logo} 
                        alt={bank.name} 
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div className="text-center text-sm font-medium mt-auto">{bank.name}</div>
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
                  <div key={index} className="bg-gray-50 p-4 rounded-lg flex flex-col items-center justify-center h-32">
                    <div className="h-16 flex items-center justify-center mb-2">
                      <img 
                        src={firm.logo} 
                        alt={firm.name} 
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div className="text-center text-sm font-medium mt-auto">{firm.name}</div>
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
                  <div key={index} className="bg-gray-50 p-4 rounded-lg flex flex-col items-center justify-center h-32">
                    <div className="h-16 flex items-center justify-center mb-2">
                      <img 
                        src={zone.logo} 
                        alt={zone.name} 
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div className="text-center text-sm font-medium mt-auto">{zone.name}</div>
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
