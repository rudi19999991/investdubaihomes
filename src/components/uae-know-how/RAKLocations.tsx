
import React from "react";
import { Ship, MapPin, Building, Home } from "lucide-react";
import LocationCard from "./LocationCard";

const RAKLocations = () => {
  return (
    <div className="space-y-8">
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
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <LocationCard 
          icon={Building}
          title="Mina Al Arab"
          imageUrl="https://images.unsplash.com/photo-1565524466218-91ff1e1bf72a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          description="A beachfront community with a focus on nature and sustainability, featuring protected coastal wetlands, walking paths, and eco-friendly designs."
          propertyTypes="Apartments, Villas, Townhouses"
          averagePrice="AED 800 - 1,100/sqft"
          rentalYield="7-8%"
          established="2008"
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
        />
      </div>
    </div>
  );
};

export default RAKLocations;
