
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, TrendingUp, DollarSign } from "lucide-react";

const RoiCalculator: React.FC = () => {
  const [propertyPrice, setPropertyPrice] = useState<number>(1000000);
  const [rentalIncome, setRentalIncome] = useState<number>(80000);
  const [expenses, setExpenses] = useState<number>(10000);
  const [results, setResults] = useState({
    annualReturn: 0,
    monthlyReturn: 0,
    roi: 0,
  });

  const calculateRoi = () => {
    const netIncome = rentalIncome - expenses;
    const roi = (netIncome / propertyPrice) * 100;
    
    setResults({
      annualReturn: netIncome,
      monthlyReturn: netIncome / 12,
      roi: roi,
    });
  };

  useEffect(() => {
    calculateRoi();
  }, [propertyPrice, rentalIncome, expenses]);

  return (
    <Card className="w-full">
      <CardHeader className="bg-luxury-navy text-white rounded-t-lg">
        <CardTitle className="flex items-center text-2xl">
          <Calculator className="mr-2 h-6 w-6" /> ROI Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="property-price">Property Price (AED)</Label>
            <Input
              id="property-price"
              type="number"
              value={propertyPrice}
              onChange={(e) => setPropertyPrice(Number(e.target.value))}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="rental-income">Annual Rental Income (AED)</Label>
            <Input
              id="rental-income"
              type="number"
              value={rentalIncome}
              onChange={(e) => setRentalIncome(Number(e.target.value))}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="expenses">Annual Expenses (AED)</Label>
            <Input
              id="expenses"
              type="number"
              value={expenses}
              onChange={(e) => setExpenses(Number(e.target.value))}
              className="mt-1"
            />
            <p className="text-sm text-muted-foreground mt-1">
              Include service charges, maintenance, management fees, etc.
            </p>
          </div>

          <div className="pt-4 border-t">
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <TrendingUp className="mr-2 h-5 w-5 text-luxury-gold" /> Investment Returns
            </h4>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-sm text-muted-foreground mb-1">Annual Return</p>
                <p className="text-xl font-bold text-luxury-navy">
                  AED {results.annualReturn.toLocaleString()}
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-sm text-muted-foreground mb-1">Monthly Return</p>
                <p className="text-xl font-bold text-luxury-navy">
                  AED {Math.round(results.monthlyReturn).toLocaleString()}
                </p>
              </div>
              
              <div className="bg-luxury-gold/10 p-4 rounded-lg text-center">
                <p className="text-sm text-luxury-gold/80 mb-1">Total ROI</p>
                <p className="text-xl font-bold text-luxury-gold">
                  {results.roi.toFixed(2)}%
                </p>
              </div>
            </div>
          </div>

          <Button 
            onClick={calculateRoi} 
            className="w-full bg-luxury-navy hover:bg-luxury-navy/90 mt-2"
          >
            Recalculate ROI
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RoiCalculator;
