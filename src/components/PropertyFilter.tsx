
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Search, Building, MapPin, DollarSign, Percent } from "lucide-react";

interface FilterProps {
  onFilter: (filters: FilterOptions) => void;
}

interface FilterOptions {
  priceRange: [number, number];
  location: string;
  propertyType: string;
  bedrooms: string;
  status: string;
  minRoi: number;
}

const PropertyFilter: React.FC<FilterProps> = ({ onFilter }) => {
  const [filters, setFilters] = useState<FilterOptions>({
    priceRange: [500000, 10000000],
    location: "",
    propertyType: "",
    bedrooms: "",
    status: "",
    minRoi: 5,
  });

  const handlePriceChange = (value: number[]) => {
    setFilters({ ...filters, priceRange: [value[0], value[1]] });
  };

  const handleRoiChange = (value: number[]) => {
    setFilters({ ...filters, minRoi: value[0] });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter(filters);
  };

  const formatPrice = (value: number) => {
    return `AED ${(value / 1000000).toFixed(1)}M`;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-6 flex items-center">
        <Search className="mr-2 h-5 w-5 text-luxury-gold" /> Find Your Ideal Investment
      </h3>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Price Range */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-2">
              <Label className="flex items-center">
                <DollarSign className="h-4 w-4 mr-1 text-luxury-navy" /> Price Range
              </Label>
              <span className="text-sm text-muted-foreground">
                {formatPrice(filters.priceRange[0])} - {formatPrice(filters.priceRange[1])}
              </span>
            </div>
            <Slider
              defaultValue={[500000, 10000000]}
              max={20000000}
              min={500000}
              step={100000}
              value={[filters.priceRange[0], filters.priceRange[1]]}
              onValueChange={handlePriceChange}
              className="my-4"
            />
          </div>

          {/* Location */}
          <div>
            <Label htmlFor="location" className="flex items-center">
              <MapPin className="h-4 w-4 mr-1 text-luxury-navy" /> Location
            </Label>
            <Select
              value={filters.location}
              onValueChange={(value) => setFilters({ ...filters, location: value })}
            >
              <SelectTrigger id="location" className="mt-2">
                <SelectValue placeholder="All Locations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Locations</SelectItem>
                <SelectItem value="dubai-marina">Dubai Marina</SelectItem>
                <SelectItem value="downtown-dubai">Downtown Dubai</SelectItem>
                <SelectItem value="palm-jumeirah">Palm Jumeirah</SelectItem>
                <SelectItem value="dubai-hills">Dubai Hills</SelectItem>
                <SelectItem value="rak">Ras Al Khaimah</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Property Type */}
          <div>
            <Label htmlFor="property-type" className="flex items-center">
              <Building className="h-4 w-4 mr-1 text-luxury-navy" /> Property Type
            </Label>
            <Select
              value={filters.propertyType}
              onValueChange={(value) => setFilters({ ...filters, propertyType: value })}
            >
              <SelectTrigger id="property-type" className="mt-2">
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Types</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="penthouse">Penthouse</SelectItem>
                <SelectItem value="townhouse">Townhouse</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Bedrooms */}
          <div>
            <Label htmlFor="bedrooms" className="flex items-center">
              Bedrooms
            </Label>
            <Select
              value={filters.bedrooms}
              onValueChange={(value) => setFilters({ ...filters, bedrooms: value })}
            >
              <SelectTrigger id="bedrooms" className="mt-2">
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Any</SelectItem>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Status */}
          <div>
            <Label htmlFor="status" className="flex items-center">
              Status
            </Label>
            <Select
              value={filters.status}
              onValueChange={(value) => setFilters({ ...filters, status: value })}
            >
              <SelectTrigger id="status" className="mt-2">
                <SelectValue placeholder="All Properties" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Properties</SelectItem>
                <SelectItem value="ready">Ready</SelectItem>
                <SelectItem value="offplan">Off-Plan</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Min ROI */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <Label className="flex items-center">
                <Percent className="h-4 w-4 mr-1 text-luxury-navy" /> Minimum ROI
              </Label>
              <span className="text-sm text-muted-foreground">
                {filters.minRoi}%
              </span>
            </div>
            <Slider
              defaultValue={[5]}
              max={15}
              min={0}
              step={0.5}
              value={[filters.minRoi]}
              onValueChange={handleRoiChange}
              className="my-4"
            />
          </div>
        </div>

        <Button type="submit" className="w-full mt-6 bg-luxury-navy hover:bg-luxury-navy/90">
          Search Properties
        </Button>
      </form>
    </div>
  );
};

export default PropertyFilter;
