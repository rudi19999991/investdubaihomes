
import React, { useState, useEffect, createContext, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

// Language options
const languages = [
  { code: "en", name: "English" },
  { code: "de", name: "German" },
  { code: "ru", name: "Russian" },
  { code: "zh", name: "Chinese" },
];

// Create language context
export const LanguageContext = createContext({
  currentLanguage: { code: "en", name: "English" },
  setLanguage: (lang: {code: string, name: string}) => {},
  translate: (key: string) => key,
});

// Language provider component
export const LanguageProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<{code: string, name: string}>({ code: "en", name: "English" });
  const { toast } = useToast();
  
  // Simplified translations (in real app, these would be much more extensive)
  const translations: {[key: string]: {[key: string]: string}} = {
    "en": {
      "Home": "Home",
      "Properties": "Properties",
      "ROI & Investment": "ROI & Investment",
      "Company Setup": "Company Setup",
      "Financing": "Financing",
      "Contact": "Contact",
      "Book Consultation": "Book Consultation",
      "Language Detected": "Language Detected",
      "Language Changed": "Language Changed",
      "browserLangMessage": "Your browser language has been automatically selected.",
      "langChangeMessage": "The website language has been changed to"
    },
    "de": {
      "Home": "Startseite",
      "Properties": "Immobilien",
      "ROI & Investment": "ROI & Investition",
      "Company Setup": "Firmengründung",
      "Financing": "Finanzierung",
      "Contact": "Kontakt",
      "Book Consultation": "Beratung buchen",
      "Language Detected": "Sprache erkannt",
      "Language Changed": "Sprache geändert",
      "browserLangMessage": "Ihre Browsersprache wurde automatisch ausgewählt.",
      "langChangeMessage": "Die Website-Sprache wurde geändert zu"
    },
    "ru": {
      "Home": "Главная",
      "Properties": "Недвижимость",
      "ROI & Investment": "ROI и Инвестиции",
      "Company Setup": "Регистрация компании",
      "Financing": "Финансирование",
      "Contact": "Контакты",
      "Book Consultation": "Записаться на консультацию",
      "Language Detected": "Язык определен",
      "Language Changed": "Язык изменен",
      "browserLangMessage": "Язык вашего браузера был выбран автоматически.",
      "langChangeMessage": "Язык сайта был изменен на"
    },
    "zh": {
      "Home": "首页",
      "Properties": "房产",
      "ROI & Investment": "投资回报",
      "Company Setup": "公司设立",
      "Financing": "融资",
      "Contact": "联系我们",
      "Book Consultation": "预约咨询",
      "Language Detected": "检测到语言",
      "Language Changed": "语言已更改",
      "browserLangMessage": "您的浏览器语言已被自动选择。",
      "langChangeMessage": "网站语言已更改为"
    }
  };

  // Detect browser language on component mount
  useEffect(() => {
    const detectBrowserLanguage = () => {
      const browserLang = navigator.language.split('-')[0]; // Get language code (e.g., "en" from "en-US")
      
      // Find matching language in our supported languages
      const matchedLang = languages.find(lang => lang.code === browserLang);
      
      if (matchedLang) {
        setCurrentLanguage(matchedLang);
        toast({
          title: translations[matchedLang.code]["Language Detected"] || "Language Detected",
          description: translations[matchedLang.code]["browserLangMessage"] || "Your browser language has been automatically selected.",
        });
      }
    };
    
    // Only detect language if it hasn't been manually set before
    if (!localStorage.getItem('preferredLanguage')) {
      detectBrowserLanguage();
    } else {
      // If there's a saved preference, use that
      const savedLang = localStorage.getItem('preferredLanguage');
      const matchedLang = languages.find(lang => lang.code === savedLang);
      if (matchedLang) {
        setCurrentLanguage(matchedLang);
      }
    }
  }, []);

  const handleLanguageChange = (lang: {code: string, name: string}) => {
    setCurrentLanguage(lang);
    // Save preference
    localStorage.setItem('preferredLanguage', lang.code);
    
    toast({
      title: translations[lang.code]["Language Changed"] || "Language Changed",
      description: `${translations[lang.code]["langChangeMessage"] || "The website language has been changed to"} ${lang.name}`,
    });
  };

  // Translation function
  const translate = (key: string) => {
    return translations[currentLanguage.code]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ 
      currentLanguage,
      setLanguage: handleLanguageChange,
      translate 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using language
export const useLanguage = () => useContext(LanguageContext);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { currentLanguage, setLanguage, translate } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Properties", path: "/properties" },
    { name: "ROI & Investment", path: "/roi" },
    { name: "Company Setup", path: "/company-setup" },
    { name: "Financing", path: "/financing" },
    { name: "Contact", path: "/contact" },
  ];

  // Helper function to determine if a link is active
  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="luxury-container">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-luxury-navy">
              <span className="text-luxury-gold">INVEST</span>DUBAI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`transition-colors font-medium ${
                  isActive(link.path)
                    ? "text-luxury-gold"
                    : "text-luxury-charcoal hover:text-luxury-gold"
                }`}
              >
                {translate(link.name)}
              </Link>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center">
                  <Globe className="h-4 w-4 mr-1" />
                  <span>{currentLanguage.code.toUpperCase()}</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem 
                    key={lang.code}
                    onClick={() => setLanguage(lang)}
                    className={currentLanguage.code === lang.code ? "bg-muted" : ""}
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button className="bg-luxury-gold hover:bg-luxury-gold/90 text-white" asChild>
              <Link to="/contact">{translate("Book Consultation")}</Link>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-luxury-navy p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white animate-fade-in">
            <div className="flex flex-col space-y-4 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`py-2 transition-colors ${
                    isActive(link.path)
                      ? "text-luxury-gold"
                      : "text-luxury-charcoal hover:text-luxury-gold"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {translate(link.name)}
                </Link>
              ))}
              
              <div className="py-2 border-t border-gray-100">
                <p className="text-sm text-luxury-charcoal/70 mb-2">Language</p>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <Button 
                      key={lang.code} 
                      variant={currentLanguage.code === lang.code ? "default" : "outline"} 
                      size="sm"
                      onClick={() => setLanguage(lang)}
                      className={currentLanguage.code === lang.code ? "bg-luxury-gold text-white" : ""}
                    >
                      {lang.name}
                    </Button>
                  ))}
                </div>
              </div>
              
              <Button 
                className="bg-luxury-gold hover:bg-luxury-gold/90 text-white w-full mt-2"
                onClick={() => setIsMenuOpen(false)}
                asChild
              >
                <Link to="/contact">{translate("Book Consultation")}</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
