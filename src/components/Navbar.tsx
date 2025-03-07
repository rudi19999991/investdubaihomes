
import React, { useState, useEffect } from "react";
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

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<{code: string, name: string}>({ code: "en", name: "English" });
  const location = useLocation();
  const { toast } = useToast();

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

  // Detect browser language on component mount
  useEffect(() => {
    const detectBrowserLanguage = () => {
      const browserLang = navigator.language.split('-')[0]; // Get language code (e.g., "en" from "en-US")
      
      // Find matching language in our supported languages
      const matchedLang = languages.find(lang => lang.code === browserLang);
      
      if (matchedLang) {
        setCurrentLanguage(matchedLang);
        toast({
          title: "Language Detected",
          description: `Your browser language (${matchedLang.name}) has been automatically selected.`,
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
      title: "Language Changed",
      description: `The website language has been changed to ${lang.name}`,
    });
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
                {link.name}
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
                    onClick={() => handleLanguageChange(lang)}
                    className={currentLanguage.code === lang.code ? "bg-muted" : ""}
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button className="bg-luxury-gold hover:bg-luxury-gold/90 text-white" asChild>
              <Link to="/contact">Book Consultation</Link>
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
                  {link.name}
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
                      onClick={() => handleLanguageChange(lang)}
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
                <Link to="/contact">Book Consultation</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
