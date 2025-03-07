
import React, { useState, useEffect, createContext, useContext } from "react";
import { useToast } from "@/hooks/use-toast";

// Language options
export const languages = [
  { code: "en", name: "English" },
  { code: "de", name: "German" },
  { code: "ru", name: "Russian" },
  { code: "zh", name: "Chinese" },
];

// Translations for all components and pages
export const translations: {[key: string]: {[key: string]: string}} = {
  "en": {
    // Navbar translations
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
    "langChangeMessage": "The website language has been changed to",
    
    // Footer translations
    "Quick Links": "Quick Links",
    "Property Types": "Property Types",
    "Contact Us": "Contact Us",
    "Your premier partner": "Your premier partner for luxury property investments and company setup in Dubai and Ras Al Khaimah.",
    "Luxury Apartments": "Luxury Apartments",
    "Premium Villas": "Premium Villas",
    "Exclusive Penthouses": "Exclusive Penthouses",
    "Off-Plan Projects": "Off-Plan Projects",
    "All rights reserved": "All rights reserved",
    "Privacy Policy": "Privacy Policy",
    "Terms of Service": "Terms of Service",
    "Cookie Policy": "Cookie Policy",
    
    // Property page translations
    "Explore Our Properties": "Explore Our Properties",
    "Find your perfect investment": "Find your perfect investment opportunity in Dubai & Ras Al Khaimah",
    "Properties Found": "Properties Found",
    "No properties found": "No properties found",
    "Try adjusting your filters": "Try adjusting your filters to see more results",
    
    // Financing page translations
    "Property Financing Options": "Property Financing Options",
    "Explore mortgage and financing": "Explore mortgage and financing solutions for international investors",
    "Financing Your Dubai Property": "Financing Your Dubai Property",
    "Navigating the financing options": "Navigating the financing options for international property investments can be complex. We're here to simplify the process and help you find the best solutions.",
    "Mortgage Options": "Mortgage Options",
    "Explore a range of mortgage": "Explore a range of mortgage products from local and international banks, tailored to non-resident investors.",
    "Eligibility Criteria": "Eligibility Criteria",
    "Understand the key criteria": "Understand the key criteria for mortgage approval, including credit history, income verification, and property valuation.",
    "Loan-to-Value (LTV)": "Loan-to-Value (LTV)",
    "Learn about typical LTV": "Learn about typical LTV ratios for non-resident mortgages in Dubai and how they impact your down payment requirements.",
    "Our Financing Partners": "Our Financing Partners",
    "We work with leading banks": "We work with leading banks and financial institutions to offer you competitive rates and flexible financing solutions.",
    "Get Personalized Financing Advice": "Get Personalized Financing Advice",
    "Mortgage Calculator": "Mortgage Calculator",
    "Property Price (AED)": "Property Price (AED)",
    "Down Payment (%)": "Down Payment (%)",
    "Interest Rate (%)": "Interest Rate (%)",
    "Loan Term (Years)": "Loan Term (Years)",
    "Calculate Monthly Payment": "Calculate Monthly Payment",
    "Estimated Monthly Payment": "Estimated Monthly Payment",
    "Total Loan Amount": "Total Loan Amount",
    "Total Interest": "Total Interest",
    "Total Payment": "Total Payment",
    "Mortgage Calculation Complete": "Mortgage Calculation Complete",
    "Your estimated monthly payment is AED": "Your estimated monthly payment is AED"
  },
  "de": {
    // Navbar translations
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
    "langChangeMessage": "Die Website-Sprache wurde geändert zu",
    
    // Footer translations
    "Quick Links": "Schnelllinks",
    "Property Types": "Immobilientypen",
    "Contact Us": "Kontaktieren Sie uns",
    "Your premier partner": "Ihr erstklassiger Partner für Luxusimmobilieninvestitionen und Firmengründung in Dubai und Ras Al Khaimah.",
    "Luxury Apartments": "Luxuswohnungen",
    "Premium Villas": "Premium-Villen",
    "Exclusive Penthouses": "Exklusive Penthäuser",
    "Off-Plan Projects": "Bauprojekte",
    "All rights reserved": "Alle Rechte vorbehalten",
    "Privacy Policy": "Datenschutzrichtlinie",
    "Terms of Service": "Nutzungsbedingungen",
    "Cookie Policy": "Cookie-Richtlinie",
    
    // Property page translations
    "Explore Our Properties": "Entdecken Sie unsere Immobilien",
    "Find your perfect investment": "Finden Sie Ihre perfekte Investitionsmöglichkeit in Dubai und Ras Al Khaimah",
    "Properties Found": "Immobilien gefunden",
    "No properties found": "Keine Immobilien gefunden",
    "Try adjusting your filters": "Versuchen Sie, Ihre Filter anzupassen, um mehr Ergebnisse zu sehen",
    
    // Financing page translations
    "Property Financing Options": "Immobilienfinanzierungsoptionen",
    "Explore mortgage and financing": "Entdecken Sie Hypotheken- und Finanzierungslösungen für internationale Investoren",
    "Financing Your Dubai Property": "Finanzierung Ihrer Dubai-Immobilie",
    "Navigating the financing options": "Die Navigation durch die Finanzierungsoptionen für internationale Immobilieninvestitionen kann komplex sein. Wir sind hier, um den Prozess zu vereinfachen und Ihnen zu helfen, die besten Lösungen zu finden.",
    "Mortgage Options": "Hypothekenoptionen",
    "Explore a range of mortgage": "Entdecken Sie eine Reihe von Hypothekenprodukten von lokalen und internationalen Banken, die auf nicht-ansässige Investoren zugeschnitten sind.",
    "Eligibility Criteria": "Zulassungskriterien",
    "Understand the key criteria": "Verstehen Sie die wichtigsten Kriterien für die Hypothekengenehmigung, einschließlich Kredithistorie, Einkommensnachweis und Immobilienbewertung.",
    "Loan-to-Value (LTV)": "Beleihungsquote (LTV)",
    "Learn about typical LTV": "Erfahren Sie mehr über typische LTV-Quoten für Nicht-Resident-Hypotheken in Dubai und wie sie sich auf Ihre Anzahlungsanforderungen auswirken.",
    "Our Financing Partners": "Unsere Finanzierungspartner",
    "We work with leading banks": "Wir arbeiten mit führenden Banken und Finanzinstituten zusammen, um Ihnen wettbewerbsfähige Zinssätze und flexible Finanzierungslösungen anzubieten.",
    "Get Personalized Financing Advice": "Holen Sie sich persönliche Finanzierungsberatung",
    "Mortgage Calculator": "Hypothekenrechner",
    "Property Price (AED)": "Immobilienpreis (AED)",
    "Down Payment (%)": "Anzahlung (%)",
    "Interest Rate (%)": "Zinssatz (%)",
    "Loan Term (Years)": "Kreditlaufzeit (Jahre)",
    "Calculate Monthly Payment": "Monatliche Rate berechnen",
    "Estimated Monthly Payment": "Geschätzte monatliche Rate",
    "Total Loan Amount": "Gesamtkreditbetrag",
    "Total Interest": "Gesamtzinsen",
    "Total Payment": "Gesamtzahlung",
    "Mortgage Calculation Complete": "Hypothekenberechnung abgeschlossen",
    "Your estimated monthly payment is AED": "Ihre geschätzte monatliche Rate beträgt AED"
  },
  "ru": {
    // Navbar translations
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
    "langChangeMessage": "Язык сайта был изменен на",
    
    // Footer translations
    "Quick Links": "Быстрые ссылки",
    "Property Types": "Типы недвижимости",
    "Contact Us": "Свяжитесь с нами",
    "Your premier partner": "Ваш премиальный партнер для инвестиций в элитную недвижимость и создания компаний в Дубае и Рас-аль-Хайме.",
    "Luxury Apartments": "Элитные апартаменты",
    "Premium Villas": "Премиальные виллы",
    "Exclusive Penthouses": "Эксклюзивные пентхаусы",
    "Off-Plan Projects": "Проекты на стадии строительства",
    "All rights reserved": "Все права защищены",
    "Privacy Policy": "Политика конфиденциальности",
    "Terms of Service": "Условия использования",
    "Cookie Policy": "Политика использования файлов cookie",
    
    // Property page translations
    "Explore Our Properties": "Изучите нашу недвижимость",
    "Find your perfect investment": "Найдите идеальную инвестиционную возможность в Дубае и Рас-аль-Хайме",
    "Properties Found": "Найдено объектов",
    "No properties found": "Объекты не найдены",
    "Try adjusting your filters": "Попробуйте изменить параметры фильтра, чтобы увидеть больше результатов",
    
    // Financing page translations
    "Property Financing Options": "Варианты финансирования недвижимости",
    "Explore mortgage and financing": "Изучите ипотечные и финансовые решения для международных инвесторов",
    "Financing Your Dubai Property": "Финансирование вашей недвижимости в Дубае",
    "Navigating the financing options": "Навигация по вариантам финансирования для международных инвестиций в недвижимость может быть сложной. Мы здесь, чтобы упростить процесс и помочь вам найти лучшие решения.",
    "Mortgage Options": "Варианты ипотеки",
    "Explore a range of mortgage": "Изучите ряд ипотечных продуктов от местных и международных банков, специально для нерезидентов-инвесторов.",
    "Eligibility Criteria": "Критерии правомочности",
    "Understand the key criteria": "Понимание ключевых критериев для одобрения ипотеки, включая кредитную историю, подтверждение дохода и оценку недвижимости.",
    "Loan-to-Value (LTV)": "Отношение кредита к стоимости (LTV)",
    "Learn about typical LTV": "Узнайте о типичных соотношениях LTV для ипотеки нерезидентов в Дубае и как они влияют на требования к первоначальному взносу.",
    "Our Financing Partners": "Наши финансовые партнеры",
    "We work with leading banks": "Мы работаем с ведущими банками и финансовыми учреждениями, чтобы предложить вам конкурентоспособные ставки и гибкие решения по финансированию.",
    "Get Personalized Financing Advice": "Получите персонализированный финансовый совет",
    "Mortgage Calculator": "Ипотечный калькулятор",
    "Property Price (AED)": "Цена недвижимости (AED)",
    "Down Payment (%)": "Первоначальный взнос (%)",
    "Interest Rate (%)": "Процентная ставка (%)",
    "Loan Term (Years)": "Срок кредита (лет)",
    "Calculate Monthly Payment": "Рассчитать ежемесячный платеж",
    "Estimated Monthly Payment": "Ориентировочный ежемесячный платеж",
    "Total Loan Amount": "Общая сумма кредита",
    "Total Interest": "Общие проценты",
    "Total Payment": "Общий платеж",
    "Mortgage Calculation Complete": "Расчет ипотеки завершен",
    "Your estimated monthly payment is AED": "Ваш ориентировочный ежемесячный платеж составляет AED"
  },
  "zh": {
    // Navbar translations
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
    "langChangeMessage": "网站语言已更改为",
    
    // Footer translations
    "Quick Links": "快速链接",
    "Property Types": "房产类型",
    "Contact Us": "联系我们",
    "Your premier partner": "您在迪拜和拉斯阿尔海马豪华房产投资和公司设立的首选合作伙伴。",
    "Luxury Apartments": "豪华公寓",
    "Premium Villas": "高级别墅",
    "Exclusive Penthouses": "专属顶层公寓",
    "Off-Plan Projects": "期房项目",
    "All rights reserved": "版权所有",
    "Privacy Policy": "隐私政策",
    "Terms of Service": "服务条款",
    "Cookie Policy": "Cookie政策",
    
    // Property page translations
    "Explore Our Properties": "探索我们的房产",
    "Find your perfect investment": "在迪拜和拉斯阿尔海马找到您完美的投资机会",
    "Properties Found": "找到的房产",
    "No properties found": "未找到房产",
    "Try adjusting your filters": "尝试调整您的筛选条件以查看更多结果",
    
    // Financing page translations
    "Property Financing Options": "房产融资选项",
    "Explore mortgage and financing": "探索国际投资者的抵押贷款和融资解决方案",
    "Financing Your Dubai Property": "为您的迪拜房产融资",
    "Navigating the financing options": "国际房产投资的融资选择可能很复杂。我们在这里简化流程并帮助您找到最佳解决方案。",
    "Mortgage Options": "抵押贷款选项",
    "Explore a range of mortgage": "探索来自本地和国际银行的一系列抵押贷款产品，为非居民投资者量身定制。",
    "Eligibility Criteria": "资格标准",
    "Understand the key criteria": "了解抵押贷款批准的关键标准，包括信用记录、收入验证和房产估值。",
    "Loan-to-Value (LTV)": "贷款价值比(LTV)",
    "Learn about typical LTV": "了解迪拜非居民抵押贷款的典型贷款价值比率以及它们如何影响您的首付要求。",
    "Our Financing Partners": "我们的融资合作伙伴",
    "We work with leading banks": "我们与领先的银行和金融机构合作，为您提供有竞争力的利率和灵活的融资解决方案。",
    "Get Personalized Financing Advice": "获取个性化融资建议",
    "Mortgage Calculator": "抵押贷款计算器",
    "Property Price (AED)": "房产价格(AED)",
    "Down Payment (%)": "首付款(%)",
    "Interest Rate (%)": "利率(%)",
    "Loan Term (Years)": "贷款期限(年)",
    "Calculate Monthly Payment": "计算每月付款",
    "Estimated Monthly Payment": "估计每月付款",
    "Total Loan Amount": "贷款总额",
    "Total Interest": "总利息",
    "Total Payment": "总付款",
    "Mortgage Calculation Complete": "抵押贷款计算完成",
    "Your estimated monthly payment is AED": "您估计的每月付款为AED"
  }
};

// Create language context
export interface LanguageContextType {
  currentLanguage: {code: string, name: string};
  setLanguage: (lang: {code: string, name: string}) => void;
  translate: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: { code: "en", name: "English" },
  setLanguage: () => {},
  translate: (key: string) => key,
});

// Language provider component
export const LanguageProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<{code: string, name: string}>({ code: "en", name: "English" });
  const { toast } = useToast();
  
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
