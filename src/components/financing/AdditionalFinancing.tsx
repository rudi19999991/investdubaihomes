
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { PieChart, CircleDollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AdditionalFinancing = () => {
  const { translate } = useLanguage();
  
  return (
    <div className="space-y-6 mt-8">
      <div className="flex items-start">
        <div className="bg-luxury-navy/10 p-3 rounded-full mr-4">
          <PieChart className="h-6 w-6 text-luxury-navy" />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{translate("Islamic Banking Options")}</h3>
          <p className="text-gray-600">
            {translate("Dubai offers extensive Shariah-compliant financing options through Islamic banks and Islamic windows of conventional banks.")}
          </p>
          <div className="mt-2">
            <h4 className="font-medium">{translate("Popular Islamic Home Finance Products:")}</h4>
            <ul className="list-disc pl-6 mt-2 text-gray-600">
              <li>{translate("Ijara (lease-to-own structure)")}</li>
              <li>{translate("Murabaha (cost-plus financing)")}</li>
              <li>{translate("Diminishing Musharaka (declining balance partnership)")}</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="flex items-start">
        <div className="bg-luxury-navy/10 p-3 rounded-full mr-4">
          <CircleDollarSign className="h-6 w-6 text-luxury-navy" />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{translate("Developer Payment Plans")}</h3>
          <p className="text-gray-600">
            {translate("Many developers offer attractive payment plans for off-plan properties, with some extending post-handover payment options of 3-5 years, reducing the need for bank financing.")}
          </p>
        </div>
      </div>
      
      <Button asChild className="mt-8 bg-luxury-gold hover:bg-luxury-gold/90">
        <Link to="/contact">
          {translate("Get Personalized Financing Advice")}
        </Link>
      </Button>
    </div>
  );
};

export default AdditionalFinancing;
