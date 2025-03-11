
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCurrency } from "@/contexts/CurrencyContext";
import { Receipt, Ruler, Shield, Building } from "lucide-react";

const PropertyYearlyCosts = () => {
  const { translate } = useLanguage();
  const { formatPrice } = useCurrency();

  const costsData = [
    {
      icon: Building,
      title: "costs.serviceCharges.title",
      description: "costs.serviceCharges.description",
      rate: "costs.serviceCharges.rate",
      example: 2000000,
      notes: "costs.serviceCharges.notes"
    },
    {
      icon: Shield,
      title: "costs.propertyInsurance.title",
      description: "costs.propertyInsurance.description",
      rate: "costs.propertyInsurance.rate",
      example: 3000,
      notes: "costs.propertyInsurance.notes"
    },
    {
      icon: Receipt,
      title: "costs.dewaFees.title",
      description: "costs.dewaFees.description",
      rate: "costs.dewaFees.rate",
      example: 5000,
      notes: "costs.dewaFees.notes"
    },
    {
      icon: Ruler,
      title: "costs.chillerFees.title",
      description: "costs.chillerFees.description",
      rate: "costs.chillerFees.rate",
      example: 12000,
      notes: "costs.chillerFees.notes"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="luxury-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">{translate("costs.yearlyCosts")}</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            {translate("costs.yearlyCostsDescription")}
          </p>
          <div className="gold-separator mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {costsData.map((cost, index) => (
            <Card key={index} className="shadow-md">
              <CardHeader className="bg-luxury-navy/5 pb-3">
                <div className="flex items-center">
                  <cost.icon className="h-6 w-6 mr-3 text-luxury-gold" />
                  <CardTitle className="text-xl">{translate(cost.title)}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">{translate(cost.description)}</p>
                
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm">{translate("costs.rate")}:</p>
                    <p>{translate(cost.rate)}</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-sm">{translate("costs.exampleAnnualCost")}:</p>
                    <p className="text-luxury-gold font-medium">{formatPrice(cost.example)}</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-sm">{translate("costs.notes")}:</p>
                    <p className="text-sm">{translate(cost.notes)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mt-10">
          <h3 className="text-xl font-bold mb-4">{translate("costs.additionalConsiderations")}</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>{translate("costs.considerations.lowTaxes")}</li>
            <li>{translate("costs.considerations.noAnnualTax")}</li>
            <li>{translate("costs.considerations.registrationFee")}</li>
            <li>{translate("costs.considerations.taxFreeIncome")}</li>
            <li>{translate("costs.considerations.maintenanceBudget")}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PropertyYearlyCosts;
