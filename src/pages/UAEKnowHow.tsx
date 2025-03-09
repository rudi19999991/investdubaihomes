
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, PalmTree, MapPin, Home, Landmark, Ship } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const UAEKnowHow = () => {
  const { translate } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <HeroSection
          title={translate("UAE Know How")}
          subtitle={translate("Discover the premier freehold areas and communities in Dubai and Ras Al Khaimah")}
          backgroundImage="https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          showCta={false}
        />
        
        <section className="section-padding bg-white">
          <div className="luxury-container">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-bold mb-3">{translate("Understanding Freehold Property in the UAE")}</h2>
              <div className="gold-separator mx-auto mb-6" />
              <p className="text-gray-600">
                {translate("Since 2002, the UAE has allowed foreign nationals to purchase property on a freehold basis in designated areas. This means foreign investors can buy, sell, lease, or rent their properties without restriction, opening the door to one of the world's most dynamic real estate markets.")}
              </p>
            </div>
            
            <Tabs defaultValue="dubai" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="dubai">{translate("Dubai")}</TabsTrigger>
                <TabsTrigger value="rak">{translate("Ras Al Khaimah")}</TabsTrigger>
              </TabsList>
              
              <TabsContent value="dubai" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <Card>
                    <CardHeader className="bg-luxury-navy text-white rounded-t-lg">
                      <div className="flex items-center">
                        <Building className="h-6 w-6 mr-3" />
                        <CardTitle>{translate("Dubai Marina")}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="aspect-video rounded-md overflow-hidden mb-4">
                        <img 
                          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                          alt="Dubai Marina" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="space-y-4">
                        <p className="text-gray-600">
                          {translate("One of Dubai's most iconic waterfront communities, featuring over 200 residential towers, a 7km promenade, and a vibrant lifestyle.")}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-semibold">{translate("Property Types")}:</p>
                            <p className="text-gray-600">{translate("Apartments, Penthouses")}</p>
                          </div>
                          <div>
                            <p className="font-semibold">{translate("Average Price")}:</p>
                            <p className="text-gray-600">AED 1,500 - 2,200/sqft</p>
                          </div>
                          <div>
                            <p className="font-semibold">{translate("Rental Yield")}:</p>
                            <p className="text-gray-600">6-8%</p>
                          </div>
                          <div>
                            <p className="font-semibold">{translate("Established")}:</p>
                            <p className="text-gray-600">2003</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="bg-luxury-navy text-white rounded-t-lg">
                      <div className="flex items-center">
                        <PalmTree className="h-6 w-6 mr-3" />
                        <CardTitle>{translate("Palm Jumeirah")}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="aspect-video rounded-md overflow-hidden mb-4">
                        <img 
                          src="https://images.unsplash.com/photo-1578974721235-91bea6f095c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                          alt="Palm Jumeirah" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="space-y-4">
                        <p className="text-gray-600">
                          {translate("The world-famous man-made island shaped like a palm tree, featuring luxury villas, high-end apartments, and 5-star hotels.")}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-semibold">{translate("Property Types")}:</p>
                            <p className="text-gray-600">{translate("Villas, Apartments, Penthouses")}</p>
                          </div>
                          <div>
                            <p className="font-semibold">{translate("Average Price")}:</p>
                            <p className="text-gray-600">AED 2,500 - 4,000/sqft</p>
                          </div>
                          <div>
                            <p className="font-semibold">{translate("Rental Yield")}:</p>
                            <p className="text-gray-600">4-6%</p>
                          </div>
                          <div>
                            <p className="font-semibold">{translate("Established")}:</p>
                            <p className="text-gray-600">2001</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader className="bg-luxury-navy text-white rounded-t-lg">
                      <div className="flex items-center">
                        <Landmark className="h-6 w-6 mr-3" />
                        <CardTitle>{translate("Downtown Dubai")}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="aspect-video rounded-md overflow-hidden mb-4">
                        <img 
                          src="https://images.unsplash.com/photo-1546412414-e1885e51cfa5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                          alt="Downtown Dubai" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="space-y-4">
                        <p className="text-gray-600">
                          {translate("Home to the iconic Burj Khalifa, Dubai Mall, and Dubai Fountain, Downtown is the prestigious central district of Dubai.")}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-semibold">{translate("Property Types")}:</p>
                            <p className="text-gray-600">{translate("Apartments, Penthouses")}</p>
                          </div>
                          <div>
                            <p className="font-semibold">{translate("Average Price")}:</p>
                            <p className="text-gray-600">AED 2,000 - 3,500/sqft</p>
                          </div>
                          <div>
                            <p className="font-semibold">{translate("Rental Yield")}:</p>
                            <p className="text-gray-600">5-7%</p>
                          </div>
                          <div>
                            <p className="font-semibold">{translate("Established")}:</p>
                            <p className="text-gray-600">2006</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="bg-luxury-navy text-white rounded-t-lg">
                      <div className="flex items-center">
                        <Home className="h-6 w-6 mr-3" />
                        <CardTitle>{translate("Dubai Hills Estate")}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="aspect-video rounded-md overflow-hidden mb-4">
                        <img 
                          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                          alt="Dubai Hills Estate" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="space-y-4">
                        <p className="text-gray-600">
                          {translate("A premium community developed by Emaar, featuring an 18-hole championship golf course, parks, and luxury villas and apartments.")}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-semibold">{translate("Property Types")}:</p>
                            <p className="text-gray-600">{translate("Villas, Townhouses, Apartments")}</p>
                          </div>
                          <div>
                            <p className="font-semibold">{translate("Average Price")}:</p>
                            <p className="text-gray-600">AED 1,400 - 2,200/sqft</p>
                          </div>
                          <div>
                            <p className="font-semibold">{translate("Rental Yield")}:</p>
                            <p className="text-gray-600">5-7%</p>
                          </div>
                          <div>
                            <p className="font-semibold">{translate("Established")}:</p>
                            <p className="text-gray-600">2014</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="rak" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <Card>
                    <CardHeader className="bg-luxury-navy text-white rounded-t-lg">
                      <div className="flex items-center">
                        <Ship className="h-6 w-6 mr-3" />
                        <CardTitle>{translate("Al Marjan Island")}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="aspect-video rounded-md overflow-hidden mb-4">
                        <img 
                          src="https://images.unsplash.com/photo-1580223530027-c6a0d516ab1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                          alt="Al Marjan Island" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="space-y-4">
                        <p className="text-gray-600">
                          {translate("A man-made archipelago extending into the clear waters of the Arabian Gulf, offering waterfront living with stunning views.")}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-semibold">{translate("Property Types")}:</p>
                            <p className="text-gray-600">{translate("Apartments, Villas, Hotel Residences")}</p>
                          </div>
                          <div>
                            <p className="font-semibold">{translate("Average Price")}:</p>
                            <p className="text-gray-600">AED 800 - 1,400/sqft</p>
                          </div>
                          <div>
                            <p className="font-semibold">{translate("Rental Yield")}:</p>
                            <p className="text-gray-600">8-10%</p>
                          </div>
                          <div>
                            <p className="font-semibold">{translate("Established")}:</p>
                            <p className="text-gray-600">2007</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="bg-luxury-navy text-white rounded-t-lg">
                      <div className="flex items-center">
                        <MapPin className="h-6 w-6 mr-3" />
                        <CardTitle>{translate("Al Hamra Village")}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="aspect-video rounded-md overflow-hidden mb-4">
                        <img 
                          src="https://images.unsplash.com/photo-1540202404-a2f29016b523?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                          alt="Al Hamra Village" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="space-y-4">
                        <p className="text-gray-600">
                          {translate("An integrated community featuring a championship golf course, marina, shopping mall, and various residential options.")}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-semibold">{translate("Property Types")}:</p>
                            <p className="text-gray-600">{translate("Villas, Townhouses, Apartments")}</p>
                          </div>
                          <div>
                            <p className="font-semibold">{translate("Average Price")}:</p>
                            <p className="text-gray-600">AED 750 - 1,200/sqft</p>
                          </div>
                          <div>
                            <p className="font-semibold">{translate("Rental Yield")}:</p>
                            <p className="text-gray-600">7-9%</p>
                          </div>
                          <div>
                            <p className="font-semibold">{translate("Established")}:</p>
                            <p className="text-gray-600">2003</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader className="bg-luxury-navy text-white rounded-t-lg">
                      <div className="flex items-center">
                        <Building className="h-6 w-6 mr-3" />
                        <CardTitle>{translate("Mina Al Arab")}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="aspect-video rounded-md overflow-hidden mb-4">
                        <img 
                          src="https://images.unsplash.com/photo-1565524466218-91ff1e1bf72a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                          alt="Mina Al Arab" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="space-y-4">
                        <p className="text-gray-600">
                          {translate("A beachfront community with a focus on nature and sustainability, featuring protected coastal wetlands, walking paths, and eco-friendly designs.")}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-semibold">{translate("Property Types")}:</p>
                            <p className="text-gray-600">{translate("Apartments, Villas, Townhouses")}</p>
                          </div>
                          <div>
                            <p className="font-semibold">{translate("Average Price")}:</p>
                            <p className="text-gray-600">AED 800 - 1,100/sqft</p>
                          </div>
                          <div>
                            <p className="font-semibold">{translate("Rental Yield")}:</p>
                            <p className="text-gray-600">7-8%</p>
                          </div>
                          <div>
                            <p className="font-semibold">{translate("Established")}:</p>
                            <p className="text-gray-600">2008</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="bg-luxury-navy text-white rounded-t-lg">
                      <div className="flex items-center">
                        <Home className="h-6 w-6 mr-3" />
                        <CardTitle>{translate("Gateway Residences")}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="aspect-video rounded-md overflow-hidden mb-4">
                        <img 
                          src="https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                          alt="Gateway Residences" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="space-y-4">
                        <p className="text-gray-600">
                          {translate("Modern residential towers in the heart of Ras Al Khaimah city, offering convenient urban living with good connectivity to Dubai.")}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-semibold">{translate("Property Types")}:</p>
                            <p className="text-gray-600">{translate("Apartments")}</p>
                          </div>
                          <div>
                            <p className="font-semibold">{translate("Average Price")}:</p>
                            <p className="text-gray-600">AED 650 - 950/sqft</p>
                          </div>
                          <div>
                            <p className="font-semibold">{translate("Rental Yield")}:</p>
                            <p className="text-gray-600">8-10%</p>
                          </div>
                          <div>
                            <p className="font-semibold">{translate("Established")}:</p>
                            <p className="text-gray-600">2012</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        <section className="section-padding bg-gray-50">
          <div className="luxury-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">{translate("UAE Real Estate Facts & Figures")}</h2>
              <div className="gold-separator mx-auto mb-6" />
              <p className="text-gray-600 max-w-3xl mx-auto">
                {translate("The UAE property market continues to demonstrate remarkable resilience and growth, making it a preferred destination for global investors.")}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-luxury-navy">
                <h3 className="text-xl font-bold mb-3">{translate("Market Size")}</h3>
                <p className="text-gray-600 mb-4">
                  {translate("The UAE real estate market was valued at approximately AED 240 billion in 2022, with Dubai accounting for over 60% of transactions.")}
                </p>
                <p className="text-sm text-gray-500">
                  {translate("Source: Dubai Land Department, 2023")}
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-luxury-navy">
                <h3 className="text-xl font-bold mb-3">{translate("Foreign Investment")}</h3>
                <p className="text-gray-600 mb-4">
                  {translate("International investors from over 150 countries purchased property in Dubai in 2022, with Indians, British, and Chinese forming the top three demographics.")}
                </p>
                <p className="text-sm text-gray-500">
                  {translate("Source: Dubai Land Department, 2023")}
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-luxury-navy">
                <h3 className="text-xl font-bold mb-3">{translate("Capital Appreciation")}</h3>
                <p className="text-gray-600 mb-4">
                  {translate("Average property values in Dubai have increased by 17% in 2022, with premium areas like Palm Jumeirah seeing up to 25% growth.")}
                </p>
                <p className="text-sm text-gray-500">
                  {translate("Source: Property Monitor, 2023")}
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-luxury-navy">
                <h3 className="text-xl font-bold mb-3">{translate("Rental Yields")}</h3>
                <p className="text-gray-600 mb-4">
                  {translate("Dubai and Ras Al Khaimah offer some of the world's highest rental yields, averaging 6-8% annually, compared to 3-4% in most global cities.")}
                </p>
                <p className="text-sm text-gray-500">
                  {translate("Source: Global Property Guide, 2023")}
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-luxury-navy">
                <h3 className="text-xl font-bold mb-3">{translate("New Developments")}</h3>
                <p className="text-gray-600 mb-4">
                  {translate("Over 50,000 new residential units are expected to be delivered in Dubai between 2023-2025, with significant development also underway in Ras Al Khaimah.")}
                </p>
                <p className="text-sm text-gray-500">
                  {translate("Source: JLL MENA, 2023")}
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-luxury-navy">
                <h3 className="text-xl font-bold mb-3">{translate("Tax Benefits")}</h3>
                <p className="text-gray-600 mb-4">
                  {translate("The UAE offers 0% income tax, 0% capital gains tax, and minimal property registration fees (4% in Dubai, 2% in Ras Al Khaimah).")}
                </p>
                <p className="text-sm text-gray-500">
                  {translate("Source: UAE Ministry of Finance, 2023")}
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

export default UAEKnowHow;
