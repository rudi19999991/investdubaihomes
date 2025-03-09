
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface LocationCardProps {
  icon: LucideIcon;
  title: string;
  imageUrl: string;
  description: string;
  propertyTypes: string;
  averagePrice: string;
  rentalYield: string;
  established: string;
}

const LocationCard: React.FC<LocationCardProps> = ({
  icon: Icon,
  title,
  imageUrl,
  description,
  propertyTypes,
  averagePrice,
  rentalYield,
  established,
}) => {
  const { translate } = useLanguage();

  return (
    <Card>
      <CardHeader className="bg-luxury-navy text-white rounded-t-lg">
        <div className="flex items-center">
          <Icon className="h-6 w-6 mr-3" />
          <CardTitle>{translate(title)}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="aspect-video rounded-md overflow-hidden mb-4">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="space-y-4">
          <p className="text-gray-600">
            {translate(description)}
          </p>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold">{translate("Property Types")}:</p>
              <p className="text-gray-600">{translate(propertyTypes)}</p>
            </div>
            <div>
              <p className="font-semibold">{translate("Average Price")}:</p>
              <p className="text-gray-600">{averagePrice}</p>
            </div>
            <div>
              <p className="font-semibold">{translate("Rental Yield")}:</p>
              <p className="text-gray-600">{rentalYield}</p>
            </div>
            <div>
              <p className="font-semibold">{translate("Established")}:</p>
              <p className="text-gray-600">{established}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LocationCard;
