
import React from "react";
import { Building, Palmtree, Landmark, Home } from "lucide-react";
import LocationCard from "./LocationCard";

const DubaiLocations = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <LocationCard 
          icon={Building}
          title="Dubai Marina"
          imageUrl="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          description="One of Dubai's most iconic waterfront communities, featuring over 200 residential towers, a 7km promenade, and a vibrant lifestyle."
          propertyTypes="Apartments, Penthouses"
          averagePrice="AED 1,500 - 2,200/sqft"
          rentalYield="6-8%"
          established="2003"
        />
        
        <LocationCard 
          icon={Palmtree}
          title="Palm Jumeirah"
          imageUrl="https://images.unsplash.com/photo-1578974721235-91bea6f095c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          description="The world-famous man-made island shaped like a palm tree, featuring luxury villas, high-end apartments, and 5-star hotels."
          propertyTypes="Villas, Apartments, Penthouses"
          averagePrice="AED 2,500 - 4,000/sqft"
          rentalYield="4-6%"
          established="2001"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <LocationCard 
          icon={Landmark}
          title="Downtown Dubai"
          imageUrl="https://images.unsplash.com/photo-1546412414-e1885e51cfa5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          description="Home to the iconic Burj Khalifa, Dubai Mall, and Dubai Fountain, Downtown is the prestigious central district of Dubai."
          propertyTypes="Apartments, Penthouses"
          averagePrice="AED 2,000 - 3,500/sqft"
          rentalYield="5-7%"
          established="2006"
        />
        
        <LocationCard 
          icon={Home}
          title="Dubai Hills Estate"
          imageUrl="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          description="A premium community developed by Emaar, featuring an 18-hole championship golf course, parks, and luxury villas and apartments."
          propertyTypes="Villas, Townhouses, Apartments"
          averagePrice="AED 1,400 - 2,200/sqft"
          rentalYield="5-7%"
          established="2014"
        />
      </div>
    </div>
  );
};

export default DubaiLocations;
