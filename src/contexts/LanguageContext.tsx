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
    
    // Developer and Financing translations
    "Major UAE Developers": "Major UAE Developers",
    "Dubai and Ras Al Khaimah are home to some of the world's most prestigious property developers, each with their own signature styles and areas of expertise:": "Dubai and Ras Al Khaimah are home to some of the world's most prestigious property developers, each with their own signature styles and areas of expertise:",
    "When purchasing from these developers, you can often access special payment plans and financing options.": "When purchasing from these developers, you can often access special payment plans and financing options.",
    "Developer Payment Plans": "Developer Payment Plans",
    "Post-Handover Payment Plans": "Post-Handover Payment Plans",
    "Many developers offer 3-5 year payment plans after property handover, effectively providing a form of developer financing with typically no interest.": "Many developers offer 3-5 year payment plans after property handover, effectively providing a form of developer financing with typically no interest.",
    "Construction-Linked Payment Plans": "Construction-Linked Payment Plans",
    "For off-plan properties, payments are often tied to construction milestones, letting you spread the cost throughout the build phase.": "For off-plan properties, payments are often tied to construction milestones, letting you spread the cost throughout the build phase.",
    "DLD Fee Waivers": "DLD Fee Waivers",
    "Some developers offer to cover the Dubai Land Department registration fee (4%), effectively reducing your initial costs.": "Some developers offer to cover the Dubai Land Department registration fee (4%), effectively reducing your initial costs.",
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
    
    // Developer and Financing translations
    "Major UAE Developers": "Wichtige VAE-Entwickler",
    "Dubai and Ras Al Khaimah are home to some of the world's most prestigious property developers, each with their own signature styles and areas of expertise:": "Dubai und Ras Al Khaimah beherbergen einige der renommiertesten Immobilienentwickler der Welt, jeder mit eigenem Stil und Fachgebieten:",
    "When purchasing from these developers, you can often access special payment plans and financing options.": "Beim Kauf von diesen Entwicklern können Sie oft auf spezielle Zahlungspläne und Finanzierungsoptionen zugreifen.",
    "Developer Payment Plans": "Entwickler-Zahlungspläne",
    "Post-Handover Payment Plans": "Zahlungspläne nach Übergabe",
    "Many developers offer 3-5 year payment plans after property handover, effectively providing a form of developer financing with typically no interest.": "Viele Entwickler bieten 3-5 Jahre Zahlungspläne nach der Immobilienübergabe an, was effektiv eine Form der Entwicklerfinanzierung ohne Zinsen darstellt.",
    "Construction-Linked Payment Plans": "Baufortschrittsabhängige Zahlungspläne",
    "For off-plan properties, payments are often tied to construction milestones, letting you spread the cost throughout the build phase.": "Bei Immobilien im Bauplan sind Zahlungen oft an Baufortschritte gekoppelt, sodass Sie die Kosten über die Bauphase verteilen können.",
    "DLD Fee Waivers": "DLD-Gebührenerlasse",
    "Some developers offer to cover the Dubai Land Department registration fee (4%), effectively reducing your initial costs.": "Einige Entwickler bieten an, die Registrierungsgebühr des Dubai Land Department (4%) zu übernehmen, was Ihre Anfangskosten effektiv reduziert.",
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
    
    // Developer and Financing translations
    "Major UAE Developers": "Основные застройщики ОАЭ",
    "Dubai and Ras Al Khaimah are home to some of the world's most prestigious property developers, each with their own signature styles and areas of expertise:": "Дубай и Рас-эль-Хайма являются домом для некоторых из самых престижных застройщиков в мире, каждый со своим фирменным стилем и областями специализации:",
    "When purchasing from these developers, you can often access special payment plans and financing options.": "При покупке у этих застройщиков вы часто можете получить доступ к специальным планам оплаты и вариантам финансирования.",
    "Developer Payment Plans": "Планы оплаты от застройщиков",
    "Post-Handover Payment Plans": "Планы оплаты после передачи",
    "Many developers offer 3-5 year payment plans after property handover, effectively providing a form of developer financing with typically no interest.": "Многие застройщики предлагают 3-5-летние планы оплаты после передачи недвижимости, что фактически является формой финансирования от застройщика обычно без процентов.",
    "Construction-Linked Payment Plans": "Планы оплаты, связанные со строительством",
    "For off-plan properties, payments are often tied to construction milestones, letting you spread the cost throughout the build phase.": "Для объектов на стадии строительства платежи часто привязаны к этапам строительства, позволяя распределить стоимость на протяжении всего этапа строительства.",
    "DLD Fee Waivers": "Освобождение от сборов DLD",
    "Some developers offer to cover the Dubai Land Department registration fee (4%), effectively reducing your initial costs.": "Некоторые застройщики предлагают покрыть регистрационный сбор Земельного департамента Дубая (4%), что эффективно снижает ваши первоначальные затраты.",
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
    
    // Developer and Financing translations
    "Major UAE Developers": "阿联酋主要开发商",
    "Dubai and Ras Al Khaimah are home to some of the world's most prestigious property developers, each with their own signature styles and areas of expertise:": "迪拜和拉斯海玛是世界上一些最负盛名的房地产开发商的所在地，每个开发商都有自己的特色风格和专业领域：",
    "When purchasing from these developers, you can often access special payment plans and financing options.": "从这些开发商购买时，您通常可以获得特殊的付款计划和融资选项。",
    "Developer Payment Plans": "开发商付款计划",
    "Post-Handover Payment Plans": "交房后付款计划",
    "Many developers offer 3-5 year payment plans after property handover, effectively providing a form of developer financing with typically no interest.": "许多开发商在房产交付后提供3-5年的付款计划，实际上提供了一种通常无利息的开发商融资形式。",
    "Construction-Linked Payment Plans": "与建筑进度相关的付款计划",
    "For off-plan properties, payments are often tied to construction milestones, letting you spread the cost throughout the build phase.": "对于期房，付款通常与建筑里程碑相关联，让您在整个建造阶段分摊成本。",
    "DLD Fee Waivers": "DLD费用减免",
    "Some developers offer to cover the Dubai Land Department registration fee (4%), effectively reducing your initial costs.": "一些开发商提供支付迪拜土地部门登记费（4%），有效降低您的初始成本。",
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
