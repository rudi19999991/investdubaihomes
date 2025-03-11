import React from "react";
import { Ship, MapPin, Building, Home, Mountain, Hotel, Trophy, TrendingUp } from "lucide-react";
import LocationCard from "./LocationCard";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const RAKLocations = () => {
  const navigate = useNavigate();
  const { translate } = useLanguage();

  const handleViewDevelopments = (area: string) => {
    navigate(`/uae-know-how/${area.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <div className="space-y-8">
      <div className="bg-luxury-navy/5 rounded-xl p-6 mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Hotel className="mr-2 h-6 w-6 text-luxury-navy" />
          {translate("Wynn Resort & Casino Development")}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <Trophy className="h-6 w-6 text-luxury-gold mb-2" />
            <h3 className="font-semibold mb-2">{translate("World-Class Entertainment")}</h3>
            <p className="text-gray-600 text-sm">
              {translate("Opening in 2026, RAK's $3.9 billion integrated resort will feature luxury hotels, high-end shopping, and the region's first gaming facilities.")}
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <TrendingUp className="h-6 w-6 text-luxury-gold mb-2" />
            <h3 className="font-semibold mb-2">{translate("Investment Potential")}</h3>
            <p className="text-gray-600 text-sm">
              {translate("Expected to attract over 1 million additional annual visitors, driving significant property value appreciation and rental demand.")}
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <Building className="h-6 w-6 text-luxury-gold mb-2" />
            <h3 className="font-semibold mb-2">{translate("Infrastructure Growth")}</h3>
            <p className="text-gray-600 text-sm">
              {translate("Major infrastructure developments including expanded transport links and new lifestyle amenities are underway to support the resort.")}
            </p>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm">
          {translate("The Wynn Resort development is transforming RAK into a premier luxury destination, making it an excellent time to invest in the emirate's rapidly growing real estate market.")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <LocationCard 
          icon={Ship}
          title="Al Marjan Island"
          imageUrl="https://images.unsplash.com/photo-1580223530027-c6a0d516b523?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          description="A man-made archipelago extending into the clear waters of the Arabian Gulf, offering waterfront living with stunning views."
          propertyTypes="Apartments, Villas, Hotel Residences"
          averagePrice="AED 800 - 1,400/sqft"
          rentalYield="8-10%"
          established="2007"
          onViewDevelopments={() => handleViewDevelopments("Al Marjan Island")}
        />
        
        <LocationCard 
          icon={MapPin}
          title="Al Hamra Village"
          imageUrl="https://images.unsplash.com/photo-1540202404-a2f29016b523?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          description="An integrated community featuring a championship golf course, marina, shopping mall, and various residential options."
          propertyTypes="Villas, Townhouses, Apartments"
          averagePrice="AED 750 - 1,200/sqft"
          rentalYield="7-9%"
          established="2003"
          onViewDevelopments={() => handleViewDevelopments("Al Hamra Village")}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <LocationCard 
          icon={Building}
          title="Mina Al Arab"
          imageUrl="https://images.unsplash.com/photo-1565524466218-91ff1e1bf72a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          description="A beachfront community with a focus on nature and sustainability, featuring protected coastal wetlands, walking paths, and eco-friendly designs."
          propertyTypes="Apartments, Villas, Townhouses"
          averagePrice="AED 800 - 1,100/sqft"
          rentalYield="7-8%"
          established="2008"
          onViewDevelopments={() => handleViewDevelopments("Mina Al Arab")}
        />
        
        <LocationCard 
          icon={Home}
          title="Gateway Residences"
          imageUrl="https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          description="Modern residential towers in the heart of Ras Al Khaimah city, offering convenient urban living with good connectivity to Dubai."
          propertyTypes="Apartments"
          averagePrice="AED 650 - 950/sqft"
          rentalYield="8-10%"
          established="2012"
          onViewDevelopments={() => handleViewDevelopments("Gateway Residences")}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <LocationCard 
          icon={Mountain}
          title="Jebel Jais"
          imageUrl="https://images.unsplash.com/photo-1518602164209-4e2c3dff3ada?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          description="Luxury mountain residences near the UAE's highest peak, offering breathtaking views, cooler temperatures, and adventure activities nearby."
          propertyTypes="Villas, Chalets"
          averagePrice="AED 900 - 1,500/sqft"
          rentalYield="6-8%"
          established="2018"
          onViewDevelopments={() => handleViewDevelopments("Jebel Jais")}
        />
      </div>
    </div>
  );
};

export default RAKLocations;
