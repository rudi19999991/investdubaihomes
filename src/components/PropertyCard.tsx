
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Building, Bed, Bath, Home, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface PropertyProps {
  id: string;
  title: string;
  location: string;
  price: number;
  currency?: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  roi: number;
  imageUrl: string;
  status: "ready" | "offplan";
}

interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const {
    id,
    title,
    location,
    price,
    currency = "AED",
    type,
    bedrooms,
    bathrooms,
    area,
    roi,
    imageUrl,
    status,
  } = property;

  const formattedPrice = new Intl.NumberFormat("en-US").format(price);

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative">
        <Link to={`/properties/${id}`}>
          <img
            src={imageUrl}
            alt={title}
            className="h-64 w-full object-cover"
          />
          <Badge 
            className={`absolute top-4 left-4 ${
              status === "ready" ? "bg-green-600" : "bg-luxury-gold"
            }`}
          >
            {status === "ready" ? "Ready to Move" : "Off-Plan"}
          </Badge>
          <div className="absolute bottom-4 right-4 bg-luxury-navy text-white px-3 py-1 rounded-full text-sm font-medium">
            {roi}% ROI
          </div>
        </Link>
      </div>

      <CardContent className="pt-6">
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{location}</span>
        </div>
        <Link to={`/properties/${id}`}>
          <h3 className="text-xl font-semibold mb-2 line-clamp-1 hover:text-luxury-gold transition-colors">{title}</h3>
        </Link>
        <p className="text-luxury-gold font-bold text-lg mb-4">
          {currency} {formattedPrice}
        </p>

        <div className="grid grid-cols-3 gap-2 text-sm">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1 text-luxury-navy" />
            <span>{bedrooms} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1 text-luxury-navy" />
            <span>{bathrooms} Baths</span>
          </div>
          <div className="flex items-center">
            <Home className="h-4 w-4 mr-1 text-luxury-navy" />
            <span>{area} sqft</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Button 
          asChild 
          className="w-full bg-luxury-navy hover:bg-luxury-navy/90"
        >
          <Link to={`/properties/${id}`}>
            View Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
