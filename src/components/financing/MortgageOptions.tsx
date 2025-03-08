
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Home, Building2 } from "lucide-react";

interface MortgageOptionsProps {
  type: 'resident' | 'non-resident';
}

const MortgageOptions: React.FC<MortgageOptionsProps> = ({ type }) => {
  const { translate } = useLanguage();
  
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">
        {type === 'resident' 
          ? translate("Mortgage Options for UAE Residents")
          : translate("Mortgage Options for Non-Residents")}
      </h3>
      <p className="text-gray-600">
        {type === 'resident'
          ? translate("As a UAE resident, you have access to a wide range of mortgage products from local and international banks.")
          : translate("International investors can secure financing for Dubai property purchases, though terms differ from resident options.")}
      </p>
      
      <div className="grid gap-6 mt-6">
        <div className="rounded-lg border p-4">
          <div className="flex items-center gap-3">
            <div className="bg-luxury-navy/10 p-2 rounded-full">
              {type === 'resident' 
                ? <Home className="h-5 w-5 text-luxury-navy" />
                : <Building2 className="h-5 w-5 text-luxury-navy" />}
            </div>
            <div>
              <h4 className="font-semibold">
                {type === 'resident'
                  ? translate("For Residents")
                  : translate("For Non-Residents")}
              </h4>
            </div>
          </div>
          <ul className="mt-3 space-y-2 pl-10 list-disc text-gray-600">
            {type === 'resident' ? (
              <>
                <li>{translate("Up to 80% LTV for properties under AED 5 million")}</li>
                <li>{translate("Up to 75% LTV for properties over AED 5 million")}</li>
                <li>{translate("Interest rates starting from 3.99% (variable) and 4.49% (fixed)")}</li>
                <li>{translate("Loan terms up to 25 years")}</li>
                <li>{translate("Minimum salary requirement: AED 15,000/month")}</li>
              </>
            ) : (
              <>
                <li>{translate("Up to 65-70% LTV for completed properties")}</li>
                <li>{translate("Limited financing options for off-plan properties")}</li>
                <li>{translate("Interest rates typically starting from 4.99% (variable) and 5.49% (fixed)")}</li>
                <li>{translate("Loan terms up to 20 years")}</li>
                <li>{translate("More extensive documentation requirements")}</li>
                <li>{translate("Minimum income typically USD 8,000/month or equivalent")}</li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MortgageOptions;
