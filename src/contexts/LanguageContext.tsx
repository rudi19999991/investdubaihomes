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
    "About Us": "About Us",
    "UAE Know How": "UAE Know How",
    "ROI & Investment": "ROI & Investment",
    "Company Setup": "Company Setup",
    "Financing": "Financing",
    "Crypto Buying": "Crypto Buying",
    "Blog": "Blog",
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
    "Down Payment (%)": "Down Payment (%)",
    "Interest Rate (%)": "Interest Rate (%)",
    "Loan Term (Years)": "Loan Term (Years)",
    "Calculate Monthly Payment": "Calculate Monthly Payment",
    "Estimated Monthly Payment": "Estimated Monthly Payment",
    "Total Loan Amount": "Total Loan Amount",
    "Total Interest": "Total Interest",
    "Total Payment": "Total Payment",
    "Mortgage Calculation Complete": "Mortgage Calculation Complete",
    "Your estimated monthly payment is AED": "Your estimated monthly payment is AED",
    
    // ROI Calculator translations
    "ROI Calculator": "ROI Calculator",
    "Property Price (AED)": "Property Price (AED)",
    "Annual Rental Income (AED)": "Annual Rental Income (AED)",
    "Annual Expenses": "Annual Expenses",
    "Service Charge (AED)": "Service Charge (AED)",
    "Annual maintenance fee charged by the building management": "Annual maintenance fee charged by the building management",
    "Property Insurance (AED)": "Property Insurance (AED)",
    "Other Expenses (AED)": "Other Expenses (AED)",
    "Include management fees, maintenance costs, etc.": "Include management fees, maintenance costs, etc.",
    "Investment Returns": "Investment Returns",
    "Annual Return": "Annual Return",
    "Monthly Return": "Monthly Return",
    "Total ROI": "Total ROI",
    "Recalculate ROI": "Recalculate ROI",
    
    // Property Yearly Costs translations
    "Property Yearly Costs": "Property Yearly Costs",
    "Understanding the annual costs of property ownership in the UAE is essential for making informed investment decisions.": "Understanding the annual costs of property ownership in the UAE is essential for making informed investment decisions.",
    "Service Charges": "Service Charges",
    "Annual fees charged by building management for maintenance of common areas": "Annual fees charged by building management for maintenance of common areas",
    "Property Insurance": "Property Insurance",
    "Annual building insurance premium": "Annual building insurance premium",
    "DEWA Fees": "DEWA Fees",
    "Dubai Electricity and Water Authority charges": "Dubai Electricity and Water Authority charges",
    "Chiller Fees": "Chiller Fees",
    "District cooling charges for air conditioning": "District cooling charges for air conditioning",
    "Rate": "Rate",
    "Example Annual Cost": "Example Annual Cost",
    "Notes": "Notes",
    "Varies by building quality and amenities": "Varies by building quality and amenities",
    "Required for all properties": "Required for all properties",
    "Housing fee (5% of annual rent)": "Housing fee (5% of annual rent)",
    "Charged monthly through utility bills": "Charged monthly through utility bills",
    "Variable costs based on consumption": "Variable costs based on consumption",
    "Applies to properties with central cooling systems": "Applies to properties with central cooling systems",
    "Additional Considerations": "Additional Considerations",
    "Property taxes in Dubai are among the lowest globally": "Property taxes in Dubai are among the lowest globally",
    "No annual property tax as commonly found in other countries": "No annual property tax as commonly found in other countries",
    "One-time 4% property registration fee paid at purchase": "One-time 4% property registration fee paid at purchase",
    "Rental income is currently tax-free in the UAE": "Rental income is currently tax-free in the UAE",
    "Budget 1-2% of property value for annual maintenance": "Budget 1-2% of property value for annual maintenance",
    
    // UAE Real Estate Investment Benefits translations
    "Real Estate Investment Calculator": "Real Estate Investment Calculator",
    "Use our calculator to analyze potential returns on your Dubai property investment": "Use our calculator to analyze potential returns on your Dubai property investment",
    "UAE Real Estate Investment Benefits": "UAE Real Estate Investment Benefits",
    "Average Rental Yield": "Average Rental Yield",
    "Significantly higher than global average of 3-4%": "Significantly higher than global average of 3-4%",
    "Income & Property Tax": "Income & Property Tax",
    "Tax-free rental income and no annual property taxes": "Tax-free rental income and no annual property taxes",
    "Price Appreciation (2023)": "Price Appreciation (2023)",
    "Strong market growth continues post-pandemic": "Strong market growth continues post-pandemic",
    
    // Ready vs Off-Plan Comparison translations
    "Ready vs. Off-Plan: Investment Comparison": "Ready vs. Off-Plan: Investment Comparison",
    "Compare the benefits and considerations of investing in ready properties versus off-plan developments": "Compare the benefits and considerations of investing in ready properties versus off-plan developments",
    "Investment Strategy Comparison": "Investment Strategy Comparison",
    "Category": "Category",
    "Ready Property": "Ready Property",
    "Off-Plan Property": "Off-Plan Property",
    "Initial Investment": "Initial Investment",
    "Full payment or mortgage required upfront": "Full payment or mortgage required upfront",
    "Lower initial deposit (20-30%)": "Lower initial deposit (20-30%)",
    "Payment Plan": "Payment Plan",
    "Single payment or mortgage-based": "Single payment or mortgage-based",
    "Payment spread over construction period (2-5 years)": "Payment spread over construction period (2-5 years)",
    "Immediate Income": "Immediate Income",
    "Immediate rental income possible": "Immediate rental income possible",
    "No income until project completion": "No income until project completion",
    "Property Appreciation": "Property Appreciation",
    "Market value growth at standard rates": "Market value growth at standard rates",
    "Potential for higher appreciation upon completion": "Potential for higher appreciation upon completion",
    "Risk Level": "Risk Level",
    "Lower risk - property already exists": "Lower risk - property already exists",
    "Higher risk - potential construction delays": "Higher risk - potential construction delays",
    "Customization": "Customization",
    "Limited modification options": "Limited modification options",
    "More options for layouts and finishes": "More options for layouts and finishes",
    "Ready Property Example": "Ready Property Example",
    "Off-Plan Property Example": "Off-Plan Property Example",
    "Purchase Price": "Purchase Price",
    "Annual Rental Income": "Annual Rental Income",
    "7% yield": "7% yield",
    "Income Start": "Income Start",
    "Immediate": "Immediate",
    "5-Year Total Return": "5-Year Total Return",
    "Rental Income": "Rental Income",
    "Estimated Capital Appreciation": "Estimated Capital Appreciation",
    "Total Return": "Total Return",
    "Payment Structure": "Payment Structure",
    "20% Down Payment": "20% Down Payment",
    "80% Over 3 Years": "80% Over 3 Years",
    "After 3 years (completion)": "After 3 years (completion)",
    "Ready": "Ready",
    "Off-Plan": "Off-Plan",
    "View Details": "View Details"
  },
  "de": {
    // Navbar translations
    "Home": "Startseite",
    "Properties": "Immobilien",
    "About Us": "Über uns",
    "UAE Know How": "VAE Know-how",
    "ROI & Investment": "ROI & Investition",
    "Company Setup": "Firmengründung",
    "Financing": "Finanzierung",
    "Crypto Buying": "Krypto-Kauf",
    "Blog": "Blog",
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
    "Your estimated monthly payment is AED": "Ihre geschätzte monatliche Rate beträgt AED",
    
    // ROI Calculator translations
    "ROI Calculator": "ROI-Rechner",
    "Property Price (AED)": "Immobilienpreis (AED)",
    "Annual Rental Income (AED)": "Jährliches Mieteinnahmen (AED)",
    "Annual Expenses": "Jährliche Ausgaben",
    "Service Charge (AED)": "Servicegebühr (AED)",
    "Annual maintenance fee charged by the building management": "Jährliche Wartungsgebühr, die von der Gebäudeverwaltung erhoben wird",
    "Property Insurance (AED)": "Gebäudeversicherung (AED)",
    "Other Expenses (AED)": "Sonstige Ausgaben (AED)",
    "Include management fees, maintenance costs, etc.": "Inklusive Verwaltungsgebühren, Wartungskosten, etc.",
    "Investment Returns": "Anlagerenditen",
    "Annual Return": "Jährliche Rendite",
    "Monthly Return": "Monatliche Rendite",
    "Total ROI": "Gesamtrendite",
    "Recalculate ROI": "ROI neu berechnen",
    
    // Property Yearly Costs translations
    "Property Yearly Costs": "Jährliche Immobilienkosten",
    "Understanding the annual costs of property ownership in the UAE is essential for making informed investment decisions.": "Das Verständnis der jährlichen Kosten für Immobilienbesitz in den VAE ist für fundierte Investitionsentscheidungen unerlässlich.",
    "Service Charges": "Servicegebühren",
    "Annual fees charged by building management for maintenance of common areas": "Jährliche Gebühren, die von der Gebäudeverwaltung für die Instandhaltung der Gemeinschaftsbereiche erhoben werden",
    "Property Insurance": "Gebäudeversicherung",
    "Annual building insurance premium": "Jährliche Gebäudeversicherungsprämie",
    "DEWA Fees": "DEWA-Gebühren",
    "Dubai Electricity and Water Authority charges": "Gebühren der Dubai Elektrizitäts- und Wasserbehörde",
    "Chiller Fees": "Kühlanlagengebühren",
    "District cooling charges for air conditioning": "Gebühren für Fernkühlung zur Klimatisierung",
    "Rate": "Satz",
    "Example Annual Cost": "Beispiel Jahreskosten",
    "Notes": "Hinweise",
    "Varies by building quality and amenities": "Variiert je nach Gebäudequalität und Ausstattung",
    "Required for all properties": "Erforderlich für alle Immobilien",
    "Housing fee (5% of annual rent)": "Wohngebühr (5% der Jahresmiete)",
    "Charged monthly through utility bills": "Monatlich über Nebenkosten abgerechnet",
    "Variable costs based on consumption": "Variable Kosten basierend auf dem Verbrauch",
    "Applies to properties with central cooling systems": "Gilt für Immobilien mit zentralen Kühlsystemen",
    "Additional Considerations": "Zusätzliche Überlegungen",
    "Property taxes in Dubai are among the lowest globally": "Die Grundsteuern in Dubai gehören zu den niedrigsten weltweit",
    "No annual property tax as commonly found in other countries": "Keine jährliche Grundsteuer wie in anderen Ländern üblich",
    "One-time 4% property registration fee paid at purchase": "Einmalige 4% Immobilienregistrierungsgebühr beim Kauf",
    "Rental income is currently tax-free in the UAE": "Mieteinnahmen sind derzeit in den VAE steuerfrei",
    "Budget 1-2% of property value for annual maintenance": "Budgetieren Sie 1-2% des Immobilienwerts für die jährliche Wartung",
    
    // UAE Real Estate Investment Benefits translations
    "Real Estate Investment Calculator": "Immobilieninvestitionsrechner",
    "Use our calculator to analyze potential returns on your Dubai property investment": "Nutzen Sie unseren Rechner, um potenzielle Renditen Ihrer Dubai-Immobilieninvestition zu analysieren",
    "UAE Real Estate Investment Benefits": "Vorteile von Immobilieninvestitionen in den VAE",
    "Average Rental Yield": "Durchschnittliche Mietrendite",
    "Significantly higher than global average of 3-4%": "Deutlich höher als der globale Durchschnitt von 3-4%",
    "Income & Property Tax": "Einkommens- & Grundsteuer",
    "Tax-free rental income and no annual property taxes": "Steuerfreies Mieteinkommen und keine jährlichen Grundsteuern",
    "Price Appreciation (2023)": "Preissteigerung (2023)",
    "Strong market growth continues post-pandemic": "Starkes Marktwachstum setzt sich nach der Pandemie fort",
    
    // Ready vs Off-Plan Comparison translations
    "Ready vs. Off-Plan: Investment Comparison": "Fertig vs. Rohbau: Investitionsvergleich",
    "Compare the benefits and considerations of investing in ready properties versus off-plan developments": "Vergleichen Sie die Vorteile und Überlegungen bei der Investition in fertige Immobilien versus Immobilien im Rohbau",
    "Investment Strategy Comparison": "Vergleich der Anlagestrategien",
    "Category": "Kategorie",
    "Ready Property": "Fertige Immobilie",
    "Off-Plan Property": "Immobilie im Rohbau",
    "Initial Investment": "Anfangsinvestition",
    "Full payment or mortgage required upfront": "Vollständige Zahlung oder Hypothek im Voraus erforderlich",
    "Lower initial deposit (20-30%)": "Niedrigere Anfangseinzahlung (20-30%)",
    "Payment Plan": "Zahlungsplan",
    "Single payment or mortgage-based": "Einmalzahlung oder hypothekenbasiert",
    "Payment spread over construction period (2-5 years)": "Zahlung über die Bauzeit verteilt (2-5 Jahre)",
    "Immediate Income": "Sofortiges Einkommen",
    "Immediate rental income possible": "Sofortiges Mieteinkommen möglich",
    "No income until project completion": "Kein Einkommen bis zur Fertigstellung des Projekts",
    "Property Appreciation": "Immobilienwertsteigerung",
    "Market value growth at standard rates": "Marktwert wächst mit Standardraten",
    "Potential for higher appreciation upon completion": "Potenzial für höhere Wertsteigerung bei Fertigstellung",
    "Risk Level": "Risikoniveau",
    "Lower risk - property already exists": "Geringeres Risiko - Immobilie existiert bereits",
    "Higher risk - potential construction delays": "Höheres Risiko - mögliche Bauverzögerungen",
    "Customization": "Anpassungsmöglichkeiten",
    "Limited modification options": "Begrenzte Änderungsmöglichkeiten",
    "More options for layouts and finishes": "Mehr Optionen für Grundrisse und Ausstattung",
    "Ready Property Example": "Beispiel für fertige Immobilie",
    "Off-Plan Property Example": "Beispiel für Immobilie im Rohbau",
    "Purchase Price": "Kaufpreis",
    "Annual Rental Income": "Jährliches Mieteinkommen",
    "7% yield": "7% Rendite",
    "Income Start": "Einkommensbeginn",
    "Immediate": "Sofort",
    "5-Year Total Return": "5-Jahres-Gesamtrendite",
    "Rental Income": "Mieteinkommen",
    "Estimated Capital Appreciation": "Geschätzte Kapitalwertsteigerung",
    "Total Return": "Gesamtrendite",
    "Payment Structure": "Zahlungsstruktur",
    "20% Down Payment": "20% Anzahlung",
    "80% Over 3 Years": "80% über 3 Jahre",
    "After 3 years (completion)": "Nach 3 Jahren (Fertigstellung)",
    "Ready": "Fertig",
    "Off-Plan": "Rohbau",
    "View Details": "Details anzeigen"
  },
  "ru": {
    // Navbar translations
    "Home": "Главная",
    "Properties": "Недвижимость",
    "About Us": "О нас",
    "UAE Know How": "Все об ОАЭ",
    "ROI & Investment": "ROI и Инвестиции",
    "Company Setup": "Регистрация компании",
    "Financing": "Финансирование",
    "Crypto Buying": "Покупка за криптовалюту",
    "Blog": "Блог",
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
    "Your estimated monthly payment is AED": "Ваш ориентировочный ежемесячный платеж составляет AED",
    
    // ROI Calculator translations
    "ROI Calculator": "Калькулятор рентабельности инвестиций",
    "Property Price (AED)": "Цена недвижимости (AED)",
    "Annual Rental Income (AED)": "Годовой доход от аренды (AED)",
    "Annual Expenses": "Годовые расходы",
    "Service Charge (AED)": "Сервисный сбор (AED)",
    "Annual maintenance fee charged by the building management": "Ежегодная плата за обслуживание, взимаемая управлением здания",
    "Property Insurance (AED)": "Страхование недвижимости (AED)",
    "Other Expenses (AED)": "Прочие расходы (AED)",
    "Include management fees, maintenance costs, etc.": "Включая плату за управление, расходы на обслуживание и т.д.",
    "Investment Returns": "Доходность инвестиций",
    "Annual Return": "Годовой доход",
    "Monthly Return": "Ежемесячный доход",
    "Total ROI": "Общая рентабельность",
    "Recalculate ROI": "Пересчитать ROI",
    
    // Property Yearly Costs translations
    "Property Yearly Costs": "Ежегодные расходы на недвижимость",
    "Understanding the annual costs of property ownership in the UAE is essential for making informed investment decisions.": "Понимание ежегодных расходов на владение недвижимостью в ОАЭ необходимо для принятия обоснованных инвестиционных решений.",
    "Service Charges": "Сервисные сборы",
    "Annual fees charged by building management for maintenance of common areas": "Ежегодные сборы, взимаемые управлением здания за обслуживание общих территорий",
    "Property Insurance": "Страхование недвижимости",
    "Annual building insurance premium": "Ежегодная страховая премия здания",
    "DEWA Fees": "Сборы DEWA",
    "Dubai Electricity and Water Authority charges": "Сборы Управления электричества и воды Дубая",
    "Chiller Fees": "Плата за охлаждение",
    "District cooling charges for air conditioning": "Плата за централизованное охлаждение для кондиционирования",
    "Rate": "Ставка",
    "Example Annual Cost": "Пример годовых расходов",
    "Notes": "Примечания",
    "Varies by building quality and amenities": "Варьируется в зависимости от качества здания и удобств",
    "Required for all properties": "Необходимо для всех объектов недвижимости",
    "Housing fee (5% of annual rent)": "Жилищный сбор (5% от годовой арендной платы)",
    "Charged monthly through utility bills": "Взимается ежемесячно через счета за коммунальные услуги",
    "Variable costs based on consumption": "Переменные затраты на основе потребления",
    "Applies to properties with central cooling systems": "Применяется к объектам с центральными системами охлаждения",
    "Additional Considerations": "Дополнительные соображения",
    "Property taxes in Dubai are among the lowest globally": "Налоги на недвижимость в Дубае одни из самых низких в мире",
    "No annual property tax as commonly found in other countries": "Отсутствие ежегодного налога на недвижимость, как в других странах",
    "One-time 4% property registration fee paid at purchase": "Единовременный 4% сбор за регистрацию недвижимости при покупке",
    "Rental income is currently tax-free in the UAE": "Доход от аренды в настоящее время не облагается налогом в ОАЭ",
    "Budget 1-2% of property value for annual maintenance": "Бюджет 1-2% от стоимости недвижимости на ежегодное обслуживание",
    
    // UAE Real Estate Investment Benefits translations
    "Real Estate Investment Calculator": "Калькулятор инвестиций в недвижимость",
    "Use our calculator to analyze potential returns on your Dubai property investment": "Используйте наш калькулятор для анализа потенциальной доходности ваших инвестиций в недвижимость Дубая",
    "UAE Real Estate Investment Benefits": "Преимущества инвестиций в недвижимость ОАЭ",
    "Average Rental Yield": "Средняя доходность от аренды",
    "Significantly higher than global average of 3-4%": "Значительно выше глобального среднего показателя в 3-4%",
    "Income & Property Tax": "Налог на доход и недвижимость",
    "Tax-free rental income and no annual property taxes": "Безналоговый доход от аренды и отсутствие ежегодных налогов на недвижимость",
    "Price Appreciation (2023)": "Рост цен (2023)",
    "Strong market growth continues post-pandemic": "Сильный рост рынка продолжается после пандемии",
    
    // Ready vs Off-Plan Comparison translations
    "Ready vs. Off-Plan: Investment Comparison": "Готовая vs. Строящаяся: Сравнение инвестиций",
    "Compare the benefits and considerations of investing in ready properties versus off-plan developments": "Сравните преимущества и особенности инвестирования в готовую недвижимость и в строящиеся объекты",
    "Investment Strategy Comparison": "Сравнение инвестиционных стратегий",
    "Category": "Категория",
    "Ready Property": "Готовая недвижимость",
    "Off-Plan Property": "Строящаяся недвижимость",
    "Initial Investment": "Начальные инвестиции",
    "Full payment or mortgage required upfront": "Требуется полная оплата или ипотека сразу",
    "Lower initial deposit (20-30%)": "Меньший первоначальный взнос (20-30%)",
    "Payment Plan": "План оплаты",
    "Single payment or mortgage-based": "Единовременный платеж или ипотека",
    "Payment spread over construction period (2-5 years)": "Оплата расп��еделена на период строительства (2-5 лет)",
    "Immediate Income": "Немедленный доход",
    "Immediate rental income possible": "Возможен немедленный доход от аренды",
    "No income until project completion": "Нет дохода до завершения проекта",
    "Property Appreciation": "Immobilienwertsteigerung",
    "Market value growth at standard rates": "Рост рыночной стоимости по стандартным ставкам",
    "Potential for higher appreciation upon completion": "Потенциал для более высокого роста стоимости после завершения",
    "Risk Level": "Уровень риска",
    "Lower risk - property already exists": "Низкий риск - недвижимость уже существует",
    "Higher risk - potential construction delays": "Высокий риск - возможные задержки строительства",
    "Customization": "Индивидуализация",
    "Limited modification options": "Ограниченные возможности модификации",
    "More options for layouts and finishes": "Больше вариантов планировки и отделки",
    "Ready Property Example": "Пример готовой недвижимости",
    "Off-Plan Property Example": "Пример строящейся недвижимости",
    "Purchase Price": "Цена покупки",
    "Annual Rental Income": "Годовой доход от аренды",
    "7% yield": "7% доходность",
    "Income Start": "Начало дохода",
    "Immediate": "Немедленно",
    "5-Year Total Return": "Общая доходность за 5 лет",
    "Rental Income": "Доход от аренды",
    "Estimated Capital Appreciation": "Оценка роста капитала",
    "Total Return": "Общая доходность",
    "Payment Structure": "Структура оплаты",
    "20% Down Payment": "20%首付",
    "80% Over 3 Years": "80% в течение 3 лет",
    "After 3 years (completion)": "После 3 лет (завершение)",
    "Ready": "Готово",
    "Off-Plan": "Строящееся",
    "View Details": "Подробнее"
  },
  "zh": {
    // Navbar translations
    "Home": "首页",
    "Properties": "房产",
    "About Us": "关于我们",
    "UAE Know How": "阿联酋知识",
    "ROI & Investment": "投资回报",
    "Company Setup": "公司设立",
    "Financing": "融资",
    "Crypto Buying": "加密货币购买",
    "Blog": "博客",
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
    "All rights reserved": "版权���有",
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
    "Your estimated monthly payment is AED": "您估计的每月付款为AED",
    
    // ROI Calculator translations
    "ROI Calculator": "投资回报率计算器",
    "Property Price (AED)": "房产价格 (AED)",
    "Annual Rental Income (AED)": "年租金收入 (AED)",
    "Annual Expenses": "年度开支",
    "Service Charge (AED)": "服务费 (AED)",
    "Annual maintenance fee charged by the building management": "建筑管理部门收取的年度维护费",
    "Property Insurance (AED)": "房产保险 (AED)",
    "Other Expenses (AED)": "其他开支 (AED)",
    "Include management fees, maintenance costs, etc.": "包括管理费、维护费等",
    "Investment Returns": "投资回报",
    "Annual Return": "年收益",
    "Monthly Return": "月收益",
    "Total ROI": "总投资回报率",
    "Recalculate ROI": "重新计算ROI",
    
    // Property Yearly Costs translations
    "Property Yearly Costs": "房产年度费用",
    "Understanding the annual costs of property ownership in the UAE is essential for making informed investment decisions.": "了解在阿联酋拥有房产的年度费用对于做出明智的投资决策至关重要。",
    "Service Charges": "服务费",
    "Annual fees charged by building management for maintenance of common areas": "建筑管理部门收取的用于维护公共区域的年度费用",
    "Property Insurance": "房产保险",
    "Annual building insurance premium": "年度建筑保险费",
    "DEWA Fees": "DEWA费用",
    "Dubai Electricity and Water Authority charges": "迪拜电力和水务局费用",
    "Chiller Fees": "冷却设备费",
    "District cooling charges for air conditioning": "区域空调冷却费用",
    "Rate": "费率",
    "Example Annual Cost": "年度费用示例",
    "Notes": "备注",
    "Varies by building quality and amenities": "根据建筑质量和设施而异",
    "Required for all properties": "所有房产都需要",
    "Housing fee (5% of annual rent)": "住房费（年租金的5%）",
    "Charged monthly through utility bills": "通过水电费账单按月收取",
    "Variable costs based on consumption": "基于消耗的可变成本",
    "Applies to properties with central cooling systems": "适用于有中央冷却系统的房产",
    "Additional Considerations": "其他考虑因素",
    "Property taxes in Dubai are among the lowest globally": "迪拜的房产税在全球范围内属于最低水平",
    "No annual property tax as commonly found in other countries": "没有其他国家常见的年度房产税",
    "One-time 4% property registration fee paid at purchase": "购买时支付一次性4%的房产登记费",
    "Rental income is currently tax-free in the UAE": "在阿联酋，租金收入目前免税",
    "Budget 1-2% of property value for annual maintenance": "房产价值的1-2%用于年度维护预算",
    
    // UAE Real Estate Investment Benefits translations
    "Real Estate Investment Calculator": "房地产投资计算器",
    "Use our calculator to analyze potential returns on your Dubai property investment": "使用我们的计算器分析您在迪拜房产投资的潜在回报",
    "UAE Real Estate Investment Benefits": "阿联酋房地产投资优势",
    "Average Rental Yield": "平均租金收益率",
    "Significantly higher than global average of 3-4%": "显著高于3-4%的全球平均水平",
    "Income & Property Tax": "收入和房产税",
    "Tax-free rental income and no annual property taxes": "免税租金收入和无年度房产税",
    "Price Appreciation (2023)": "价格增值 (2023)",
    "Strong market growth continues post-pandemic": "疫情后市场持续强劲增长",
    
    // Ready vs Off-Plan Comparison translations
    "Ready vs. Off-Plan: Investment Comparison": "现房与期房：投资对比",
    "Compare the benefits and considerations of investing in ready properties versus off-plan developments": "比较投资现房与期房开发项目的优势与考虑因素",
    "Investment Strategy Comparison": "投资策略对比",
    "Category": "类别",
    "Ready Property": "现房",
    "Off-Plan Property": "期房",
    "Initial Investment": "初始投资",
    "Full payment or mortgage required upfront": "需要全额付款或预先抵押贷款",
    "Lower initial deposit (20-30%)": "较低的首付款(20-30%)",
    "Payment Plan": "付款计划",
    "Single payment or mortgage-based": "一次性付款或基于抵押贷款",
    "Payment spread over construction period (2-5 years)": "付款分散在建设期内(2-5年)",
    "Immediate Income": "即时收入",
    "Immediate rental income possible": "可能立即获得租金收入",
    "No income until project completion": "项目完成前无收入",
    "Property Appreciation": "房产增值",
    "Market value growth at standard rates": "市场价值以标准速率增长",
    "Potential for higher appreciation upon completion": "完工后可能有更高增值",
    "Risk Level": "风险水平",
    "Lower risk - property already exists": "低风险 - 房产已经存在",
    "Higher risk - potential construction delays": "高风险 - 可能出现建设延迟",
    "Customization": "定制化",
    "Limited modification options": "有限的修改选项",
    "More options for layouts and finishes": "更多布局和装修选择",
    "Ready Property Example": "现房示例",
    "Off-Plan Property Example": "期房示例",
    "Purchase Price": "购买价格",
    "Annual Rental Income": "年租金收入",
    "7% yield": "7%收益率",
    "Income Start": "收入开始",
    "Immediate": "立即",
    "5-Year Total Return": "5年总回报",
    "Rental Income": "租金收入",
    "Estimated Capital Appreciation": "预计资本增值",
    "Total Return": "总回报",
    "Payment Structure": "付款结构",
    "20% Down Payment": "20%首付",
    "80% Over 3 Years": "80%分3年支付",
    "After 3 years (completion)": "3年后(完工)",
    "Ready": "现房",
    "Off-Plan": "期房",
    "View Details": "查看详情"
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

