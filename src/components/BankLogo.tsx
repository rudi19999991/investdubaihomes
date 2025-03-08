
import React from 'react';

interface BankLogoProps {
  bank: string;
  className?: string;
}

const BankLogo: React.FC<BankLogoProps> = ({ bank, className = "" }) => {
  const getBankLogo = () => {
    switch(bank.toLowerCase()) {
      case 'emirates nbd':
        return 'https://upload.wikimedia.org/wikipedia/commons/1/10/Emirates_NBD_Logo.svg';
      case 'adcb':
        return 'https://upload.wikimedia.org/wikipedia/commons/5/57/ADCB-Logo-Eng.svg';
      case 'dib':
        return 'https://upload.wikimedia.org/wikipedia/commons/2/27/Dubai_Islamic_Bank_logo.svg';
      case 'mashreq bank':
      case 'mashreq':
        return 'https://upload.wikimedia.org/wikipedia/commons/6/60/Mashreq_bank_logo.svg';
      case 'rakbank':
        return 'https://upload.wikimedia.org/wikipedia/commons/4/4f/RAKBANK_logo.svg';
      case 'hsbc':
        return 'https://upload.wikimedia.org/wikipedia/commons/a/aa/HSBC_logo_%282018%29.svg';
      case 'enbd - islamic banking':
        return 'https://upload.wikimedia.org/wikipedia/commons/1/10/Emirates_NBD_Logo.svg';
      default:
        return 'https://placeholder.pics/svg/200x100/DEDEDE/555555/Bank%20Logo';
    }
  };

  return (
    <div className={`flex items-center justify-center bg-white p-2 rounded-md ${className}`}>
      <img 
        src={getBankLogo()} 
        alt={`${bank} logo`}
        className="h-6 object-contain max-w-full"
      />
    </div>
  );
};

export default BankLogo;
