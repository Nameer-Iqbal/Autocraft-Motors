import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ar" | "ur";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

// Translation dictionary
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    home: "Home",
    inventory: "Inventory",
    services: "Services",
    about: "About",
    contact: "Contact",
    // Auth
    signIn: "Sign In",
    signUp: "Sign Up",
    logout: "Logout",
    profile: "Profile",
    // Language selector
    language: "Language",
    english: "English",
    arabic: "العربية",
    // Footer
    quickLinks: "Quick Links",
    ourServices: "Our Services",
    stayConnected: "Stay Connected",
    subscribe: "Subscribe",
    enterEmail: "Enter your email",
    newsletterText:
      "Subscribe to our newsletter for the latest updates on new arrivals and exclusive offers.",
    copyright: "© 2005 Greenway Motors. All rights reserved.",
    // Hero Section
    premiumExcellence: "Premium Automotive Excellence",
    heroTitle: "Greenway Motors",
    heroSubtitle:
      "At Greenway Motors, we specialize in exporting premium vehicles from Japan and the UAE to markets across Africa. With transparent pricing, a wide selection, and trusted global logistics, we ensure every customer enjoys a seamless and satisfying car-buying experience — wherever they are in the world.",
    viewInventory: "View Inventory",
    aboutUs: "About Us",
    customerRating: "Customer Rating",
    happyCustomers: "Happy Customers",
    yearsExperience: "Years Experience",
    // Coming Soon
    comingSoon: "Coming Soon",
    comingSoonText:
      "We're working on adding exciting new vehicles to our inventory.",
    comingSoonSubtext: "Check back soon to see our latest additions!",
    stayTuned: "Stay tuned for updates on our newest arrivals",
    // Inventory
    ourInventory: "Our Inventory",
    inventorySubtitle:
      "Discover our complete collection of premium vehicles. Each car is carefully inspected and certified to meet our highest standards.",
    searchCars: "Search cars...",
    allBrands: "All Brands",
    allTypes: "All Types",
    allDriveTypes: "All Drive Types",
    sortBy: "Sort by",
    name: "Name",
    priceLowToHigh: "Price: Low to High",
    priceHighToLow: "Price: High to Low",
    year: "Year",
    brand: "Brand",
    showing: "Showing",
    of: "of",
    vehicles: "vehicles",
    viewMore: "View More",
    noVehiclesFound: "No vehicles found",
    tryAdjustingFilters: "Try adjusting your search criteria or filters.",
    previous: "Previous",
    next: "Next",
    fuelType: "Fuel Type",
    transmission: "Transmission",
    driveType: "Drive Type",
    vehicleType: "Vehicle Type",
    features: "Features",
    description: "Description",
    contactUs: "Contact Us",
    getFOBPriceQuote: "Get FOB Price Quote",
    carDescription1: "This",
    carDescription2: "is a premium",
    carDescription3: "with excellent",
    carDescription4: "performance and reliability.",
    carDescription5:
      "Featuring advanced hybrid technology for superior fuel efficiency.",
    carDescription6: "The",
    carDescription7: "transmission ensures smooth driving, while the",
    carDescription8: "configuration provides optimal handling and control.",
    // Services
    completeAutomotiveSolutions: "Complete Automotive Solutions",
    servicesSubtitle:
      "From sales to service, we provide comprehensive automotive solutions designed to exceed your expectations at every step of your journey.",
    bestSelection: "Best Selection",
    carSales: "Car Sales",
    certifiedPreOwned: "Certified Pre-Owned",
    newVehicleSales: "New Vehicle Sales",
    tradeInEvaluations: "Trade-In Evaluations",
    vehicleHistoryReports: "Vehicle History Reports",
    easyApproval: "Easy Approval",
    financingSolutions: "Financing Solutions",
    competitiveInterestRates: "Competitive Interest Rates",
    leaseOptions: "Lease Options",
    creditApplications: "Credit Applications",
    insurancePartnerships: "Insurance Partnerships",
    bestValue: "Best Value",
    tradeInProgram: "Trade-In Program",
    fairMarketValuations: "Fair Market Valuations",
    instantAppraisals: "Instant Appraisals",
    hassleFreeProcess: "Hassle-Free Process",
    sameDayTransactions: "Same-Day Transactions",
    expertCare: "Expert Care",
    maintenanceRepairs: "Maintenance & Repairs",
    oemPartsFluids: "OEM Parts & Fluids",
    scheduledServices: "Scheduled Services",
    diagnosticsRepairs: "Diagnostics & Repairs",
    detailingPackages: "Detailing Packages",
    peaceOfMind: "Peace of Mind",
    warrantyProtection: "Warranty & Protection",
    extendedWarranties: "Extended Warranties",
    roadsideAssistance: "Roadside Assistance",
    gapTireProtection: "Gap & Tire Protection",
    claimsSupport: "Claims Support",
    convenience: "Convenience",
    testDrives: "Test Drives",
    flexibleScheduling: "Flexible Scheduling",
    homeOfficeVisits: "Home/Office Visits",
    multipleRoutes: "Multiple Routes",
    expertGuidance: "Expert Guidance",
    // About
    aboutGreenwayMotors: "About Greenway Motors",
    aboutSubtitle:
      "For over 20 years, Greenway Motors has been the premier destination for luxury and premium vehicles—setting the standard for excellence in automotive sales and service.",
    yearsInBusiness: "Years in Business",
    vehiclesSold: "Vehicles Sold",
    ourStory: "Our Story",
    storyText1:
      "Established in 2005, Greenway Motors set out with a clear vision — to redefine the car-buying experience through luxury, quality, and trust. What started as a family initiative has evolved into a globally recognized dealership with operations across Japan, Pakistan, Africa, and the UAE.",
    storyText2:
      "Specializing in the export of premium vehicles, we take pride in connecting customers worldwide with the finest automobiles. Guided by integrity, reliability, and customer satisfaction, Greenway Motors continues to drive excellence in the global automotive market.",
    ourMission: "Our Mission",
    missionText:
      "At Greenway Motors, our mission is to make premium vehicles accessible through transparent and competitive pricing while ensuring seamless global exports. We strive to build lasting relationships with our customers by delivering unmatched reliability, exceptional service, and complete satisfaction at every step — from selection to shipment and beyond.",
    integrity: "Integrity",
    integrityText: "Honest guidance and transparent processes—always.",
    quality: "Quality",
    qualityText: "Certified vehicles, rigorous inspections, OEM care.",
    service: "Service",
    serviceText: "Personalized attention before and after purchase.",
    // Contact
    getInTouch: "Get in Touch",
    contactSubtitle:
      "Ready to find your perfect vehicle? Our team is here to help at every step.",
    visitOurShowroom: "Visit Our Showroom",
    showroomAddress:
      "Ras Al Khor Industrial Area 3, Ducumz Show Room No 94, Dubai, UAE",
    showroomDescription:
      "Our state-of-the-art showroom features the latest models.",
    callUs: "Call Us",
    phoneNumber: "+971 52 482 5533",
    callUsDescription: "Speak directly with our automotive experts.",
    emailUs: "Email Us",
    emailAddress: "sales@greenwaymotors.ae",
    emailUsDescription: "Get detailed info about any vehicle.",
    businessHours: "Business Hours",
    businessHoursTime: "Mon - Sat: 10am - 8pm",
    businessHoursDescription: "Extended hours for your convenience.",
    sendUsAMessage: "Send us a Message",
    fullName: "Full name",
    emailAddressPlaceholder: "Email address",
    phoneOptional: "Phone (optional)",
    subject: "Subject",
    yourMessage: "Your message…",
    sendMessage: "Send Message",
    quickActions: "Quick Actions",
    getDirections: "Get Directions",
    emailUsButton: "Email Us",
    chatLaterText:
      "Prefer to chat later? Send your message and our team will reach out within one business day.",
  },
  ar: {
    // Navigation
    home: "الرئيسية",
    inventory: "المخزون",
    services: "الخدمات",
    about: "نبذة عنا",
    contact: "اتصل بنا",
    // Auth
    signIn: "تسجيل الدخول",
    signUp: "إنشاء حساب",
    logout: "تسجيل الخروج",
    profile: "الملف الشخصي",
    // Language selector
    language: "اللغة",
    english: "English",
    arabic: "العربية",
    urdu: "اردو",
    // Footer
    quickLinks: "روابط سريعة",
    ourServices: "خدماتنا",
    stayConnected: "ابق على اتصال",
    subscribe: "اشترك",
    enterEmail: "أدخل بريدك الإلكتروني",
    newsletterText:
      "اشترك في نشرتنا الإخبارية للحصول على آخر التحديثات حول الوافدين الجدد والعروض الحصرية.",
    copyright: "© 2005 Greenway Motors. جميع الحقوق محفوظة.",
    // Hero Section
    premiumExcellence: "التميز السياراتي الفاخر",
    heroTitle: "Greenway Motors",
    heroSubtitle:
      "في Greenway Motors، نخصص في تصدير المركبات الفاخرة من اليابان والإمارات إلى الأسواق في جميع أنحاء أفريقيا. مع تسعير شفاف، مجموعة واسعة من الاختيارات، ولوجستيات عالمية موثوقة، نضمن أن يتمتع كل عميل بتجربة شراء سيارة سلسة وممتعة — أينما كانوا في العالم.",
    viewInventory: "عرض المخزون",
    aboutUs: "عنا",
    customerRating: "تقييم العملاء",
    happyCustomers: "عملاء سعداء",
    yearsExperience: "سنوات الخبرة",
    // Coming Soon
    comingSoon: "قريباً",
    comingSoonText: "نحن نعمل على إضافة مركبات جديدة ومثيرة إلى مخزوننا.",
    comingSoonSubtext: "عد قريباً لرؤية أحدث إضافاتنا!",
    stayTuned: "ابق متابعًا للحصول على آخر أخبار وصولنا الجديدة",
    // Inventory
    ourInventory: "مخزوننا",
    inventorySubtitle:
      "اكتشف مجموعتنا الكاملة من المركبات الفاخرة. يتم فحص كل سيارة بعناية والتأكد من أنها تلبي أعلى معاييرنا.",
    searchCars: "ابحث عن السيارات...",
    allBrands: "جميع الماركات",
    allTypes: "جميع الأنواع",
    allDriveTypes: "جميع أنواع القيادة",
    sortBy: "ترتيب حسب",
    name: "الاسم",
    priceLowToHigh: "السعر: من الأقل للأعلى",
    priceHighToLow: "السعر: من الأعلى للأقل",
    year: "السنة",
    brand: "الماركة",
    showing: "عرض",
    of: "من",
    vehicles: "مركبة",
    viewMore: "عرض المزيد",
    noVehiclesFound: "لم يتم العثور على مركبات",
    tryAdjustingFilters: "حاول تعديل معايير البحث أو المرشحات.",
    previous: "السابق",
    next: "التالي",
    fuelType: "نوع الوقود",
    transmission: "نوع ناقل الحركة",
    driveType: "نوع القيادة",
    vehicleType: "نوع المركبة",
    features: "المميزات",
    description: "الوصف",
    contactUs: "اتصل بنا",
    getFOBPriceQuote: "الحصول على عرض سعر FOB",
    carDescription1: "هذه",
    carDescription2: "هي",
    carDescription3: "بمميزات ممتازة",
    carDescription4: "أداء وموثوقية.",
    carDescription5: "تتميز بتقنية هجينة متقدمة لكفاءة وقود فائقة.",
    carDescription6: "ضمانات",
    carDescription7: "ناقل الحركة قيادة سلسة، بينما يوفر",
    carDescription8: "التكوين تحكمًا وقيادة مثالية.",
    // Services
    completeAutomotiveSolutions: "حلول السيارات الشاملة",
    servicesSubtitle:
      "من المبيعات إلى الخدمة، نقدم حلولًا سيارات شاملة مصممة لتتجاوز توقعاتك في كل خطوة من رحلتك.",
    bestSelection: "أفضل اختيار",
    carSales: "مبيعات السيارات",
    certifiedPreOwned: "سيارات مستعملة معتمدة",
    newVehicleSales: "مبيعات مركبات جديدة",
    tradeInEvaluations: "تقييمات المقايضة",
    vehicleHistoryReports: "تقارير تاريخ المركبة",
    easyApproval: "موافقة سهلة",
    financingSolutions: "حلول التمويل",
    competitiveInterestRates: "أسعار فائدة تنافسية",
    leaseOptions: "خيارات الإيجار",
    creditApplications: "طلبات الائتمان",
    insurancePartnerships: "شراكات التأمين",
    bestValue: "أفضل قيمة",
    tradeInProgram: "برنامج المقايضة",
    fairMarketValuations: "تقييمات السوق العادلة",
    instantAppraisals: "تقييمات فورية",
    hassleFreeProcess: "عملية بدون إزعاج",
    sameDayTransactions: "معاملات في نفس اليوم",
    expertCare: "رعاية خبيرة",
    maintenanceRepairs: "الصيانة والإصلاح",
    oemPartsFluids: "قطع غيار OEM ومواد التشحيم",
    scheduledServices: "خدمات مجدولة",
    diagnosticsRepairs: "التشخيص والإصلاح",
    detailingPackages: "باقات التفصيل",
    peaceOfMind: "راحة البال",
    warrantyProtection: "الضمان والحماية",
    extendedWarranties: "ضمانات ممتدة",
    roadsideAssistance: "المساعدة على الطريق",
    gapTireProtection: "حماية الفجوة والإطارات",
    claimsSupport: "دعم المطالبات",
    convenience: "الراحة",
    testDrives: "تجارب القيادة",
    flexibleScheduling: "جدولة مرنة",
    homeOfficeVisits: "زيارات منزلية/مكتبية",
    multipleRoutes: "طرق متعددة",
    expertGuidance: "إرشاد خبير",
    // About
    aboutGreenwayMotors: "حول Greenway Motors",
    aboutSubtitle:
      "منذ أكثر من 20 عامًا، كانت Greenway Motors الوجهة الرئيسية للسيارات الفاخرة والمركبات المميزة — مما يضع معيارًا للتميز في مبيعات وخدمات السيارات.",
    yearsInBusiness: "سنوات في العمل",
    vehiclesSold: "المركبات المباعة",
    ourStory: "قصتنا",
    storyText1:
      "تأسست Greenway Motors في عام 2005 برؤية واضحة — لإعادة تعريف تجربة شراء السيارة من خلال الرفاهية والجودة والثقة. ما بدأ كمبادرة عائلية تطورت إلى وكالة معترف بها عالميًا مع عمليات في جميع أنحاء اليابان وباكستان وأفريقيا والإمارات.",
    storyText2:
      "نتخصص في تصدير المركبات الفاخرة، ونتفخر بربط العملاء في جميع أنحاء العالم بسيارات فاخرة. موجهة بالنزاهة والموثوقية ورضا العملاء، تواصل Greenway Motors دفع التميز في السوق العالمية للسيارات.",
    ourMission: "مهمتنا",
    missionText:
      "في Greenway Motors، مهمتنا هي جعل المركبات الفاخرة في المتناول من خلال تسعير شفاف وتنافسي مع ضمان الصادرات العالمية السلسة. نسعى جاهدين لبناء علاقات دائمة مع عملائنا من خلال تقديم موثوقية لا مثيل لها وخدمة استثنائية ورضا كامل في كل خطوة — من الاختيار إلى الشحن وما بعده.",
    integrity: "النزاهة",
    integrityText: "إرشاد صادق وعمليات شفافة — دائمًا.",
    quality: "الجودة",
    qualityText: "مركبات معتمدة، فحوصات صارمة، رعاية OEM.",
    service: "الخدمة",
    serviceText: "اهتمام شخصي قبل وبعد الشراء.",
    // Contact
    getInTouch: "تواصل معنا",
    contactSubtitle:
      "هل أنت مستعد للعثور على مركبتك المثالية؟ فريقنا هنا للمساعدة في كل خطوة.",
    visitOurShowroom: "قم بزيارة صالة عرضنا",
    showroomAddress:
      "منطقة رأس الخور الصناعية 3، صالة عرض دوكامز رقم 94، دبي، الإمارات",
    showroomDescription: "تتميز صالة عرضنا الحديثة بأحدث الموديلات.",
    callUs: "اتصل بنا",
    phoneNumber: "+971 52 482 5533",
    callUsDescription: "تحدث مباشرة مع خبرائنا في السيارات.",
    emailUs: "أرسل لنا بريدًا إلكترونيًا",
    emailAddress: "sales@greenwaymotors.ae",
    emailUsDescription: "احصل على معلومات مفصلة حول أي مركبة.",
    businessHours: "ساعات العمل",
    businessHoursTime: "الإثنين - السبت: 10 صباحًا - 8 مساءً",
    businessHoursDescription: "ساعات عمل ممتدة لراحتك.",
    sendUsAMessage: "أرسل لنا رسالة",
    fullName: "الاسم الكامل",
    emailAddressPlaceholder: "عنوان البريد الإلكتروني",
    phoneOptional: "الهاتف (اختياري)",
    subject: "الموضوع",
    yourMessage: "رسالتك…",
    sendMessage: "إرسال الرسالة",
    quickActions: "إجراءات سريعة",
    getDirections: "احصل على الاتجاهات",
    emailUsButton: "أرسل لنا بريدًا إلكترونيًا",
    chatLaterText:
      "تفضل الدردشة لاحقًا؟ أرسل رسالتك وسيتواصل فريقنا معك خلال يوم عمل واحد.",
  },
  ur: {
    // Navigation
    home: "ہوم",
    inventory: "موجودہ گاڑیاں",
    services: "خدمات",
    about: "ہمارے بارے میں",
    contact: "رابطہ",
    // Auth
    signIn: "لاگ ان",
    signUp: "اکاؤنٹ بنائیں",
    logout: "لاگ آؤٹ",
    profile: "پروفائل",
    // Language selector
    language: "زبان",
    english: "English",
    arabic: "العربية",
    urdu: "اردو",
    // Footer
    quickLinks: "فوری لنکس",
    ourServices: "ہماری خدمات",
    stayConnected: "جڑے رہیں",
    subscribe: "سبسکرائب کریں",
    enterEmail: "اپنا ای میل درج کریں",
    newsletterText:
      "نئی گاڑیوں اور خصوصی پیشکشوں کی تازہ ترین معلومات کے لیے ہمارے نیوز لیٹر کو سبسکرائب کریں۔",
    copyright: "© 2005 Greenway Motors. جملہ حقوق محفوظ ہیں۔",
    // Hero Section
    premiumExcellence: "پریمیم آٹوموٹیو ایکسیلنس",
    heroTitle: "Greenway Motors",
    heroSubtitle:
      "Greenway Motors پر، ہم جاپان اور متحدہ عرب امارات سے پریمیم گاڑیوں کو افریقہ کے مارکیٹوں میں برآمد کرنے میں مہارت رکھتے ہیں۔ شفاف قیمتوں، وسیع انتخاب، اور قابل اعتماد عالمی لاجسٹکس کے ساتھ، ہم یقینی بناتے ہیں کہ ہر گاہک ایک بے عیب اور اطمینان بخش کار خریدنے کا تجربہ حاصل کرے — خواہ وہ دنیا کے کسی بھی حصے میں ہوں۔",
    viewInventory: "موجودہ گاڑیاں دیکھیں",
    aboutUs: "ہمارے بارے میں",
    customerRating: "کسٹمر ریٹنگ",
    happyCustomers: "خوش گاہکوں",
    yearsExperience: "سال کا تجربہ",
    // Coming Soon
    comingSoon: "جلد آرہا ہے",
    comingSoonText:
      "ہم اپنے موجودہ ذخیرے میں دلچسپ نئی گاڑیاں شامل کرنے پر کام کر رہے ہیں۔",
    comingSoonSubtext: "ہماری تازہ ترین اضافات دیکھنے کے لیے جلد واپس آئیں!",
    stayTuned: "اپنے نئے آرائیولز کی اپ ڈیٹس کے لیے ہمارے ساتھ جڑے رہیں",
    // Inventory
    ourInventory: "ہمارا موجودہ ذخیرہ",
    inventorySubtitle:
      "پریمیم گاڑیوں کے اپنے مکمل مجموعے کو دریافت کریں۔ ہر گاڑی کی احتیاط سے جانچ کی جاتی ہے اور ہمارے اعلیٰ ترین معیارات کو پورا کرنے کے لیے تصدیق کی جاتی ہے۔",
    searchCars: "گاڑیاں تلاش کریں...",
    allBrands: "تمام برانڈز",
    allTypes: "تمام قسمیں",
    allDriveTypes: "تمام ڈرائیو اقسام",
    sortBy: "ترتیب دیں",
    name: "نام",
    priceLowToHigh: "قیمت: کم سے زیادہ",
    priceHighToLow: "قیمت: زیادہ سے کم",
    year: "سال",
    brand: "برانڈ",
    showing: "دکھا رہا ہے",
    of: "از",
    vehicles: "گاڑیاں",
    viewMore: "مزید دیکھیں",
    noVehiclesFound: "کوئی گاڑی نہیں ملی",
    tryAdjustingFilters:
      "اپنے تلاش کے معیار یا فلٹرز کو ایڈجسٹ کرنے کی کوشش کریں۔",
    previous: "پچھلا",
    next: "اگلا",
    fuelType: "ایندھن کی قسم",
    transmission: "ٹرانسمیشن",
    driveType: "ڈرائیو کی قسم",
    vehicleType: "گاڑی کی قسم",
    features: "خصوصیات",
    description: "تفصیل",
    contactUs: "ہم سے رابطہ کریں",
    getFOBPriceQuote: "FOB قیمت کا تخمینہ حاصل کریں",
    carDescription1: "یہ",
    carDescription2: "پریمیم ہے",
    carDescription3: "بہترین",
    carDescription4: "کارکردگی اور استحکام کے ساتھ۔",
    carDescription5:
      "اعلیٰ ایندھن کی کارکردگی کے لیے جدید ہائبرڈ ٹیکنالوجی کی خصوصیات۔",
    carDescription6: "یہ",
    carDescription7: "ٹرانسمیشن ہموار ڈرائیونگ کو یقینی بناتی ہے، جبکہ",
    carDescription8: "کنفیگریشن بہترین کنٹرول اور ہینڈلنگ فراہم کرتی ہے۔",
    // Services
    completeAutomotiveSolutions: "مکمل آٹوموٹیو حل",
    servicesSubtitle:
      "سیرز سے خدمات تک، ہم جامع آٹوموٹیو حل فراہم کرتے ہیں جو آپ کی توقع سے تجاوز کرنے کے لیے ڈیزائن کیے گئے ہیں۔",
    bestSelection: "بہترین انتخاب",
    carSales: "کار سیلز",
    certifiedPreOwned: "سرٹیفائیڈ پری-اونڈ",
    newVehicleSales: "نئی گاڑیوں کی فروخت",
    tradeInEvaluations: "ٹریڈ-ان تشخیصات",
    vehicleHistoryReports: "گاڑی کی تاریخ کی رپورٹس",
    easyApproval: "آسان منظوری",
    financingSolutions: "فنانسنگ حل",
    competitiveInterestRates: "مسابقتی سود کی شرحیں",
    leaseOptions: "لیز اختیارات",
    creditApplications: "کریڈٹ درخواستیں",
    insurancePartnerships: "انشورنس پارٹنرشپس",
    bestValue: "بہترین قیمت",
    tradeInProgram: "ٹریڈ-ان پروگرام",
    fairMarketValuations: "منصفانہ مارکیٹ تشخیصات",
    instantAppraisals: "فوری تشخیصات",
    hassleFreeProcess: "بنا پریشانی کے عمل",
    sameDayTransactions: "اسی دن کی لین دین",
    expertCare: "ماہر نگہداشت",
    maintenanceRepairs: "ڈھانچہ اور مرمت",
    oemPartsFluids: "OEM پارٹس اور سیال",
    scheduledServices: "طے شدہ خدمات",
    diagnosticsRepairs: "تشخیص اور مرمت",
    detailingPackages: "تفصیل پیکیجز",
    peaceOfMind: "اطمینان",
    warrantyProtection: "وارنٹی اور تحفظ",
    extendedWarranties: "توسیع شدہ ضمانتیں",
    roadsideAssistance: "سڑک کی مدد",
    gapTireProtection: "گیپ اور ٹائر کی حفاظت",
    claimsSupport: "دعووں کی مدد",
    convenience: "سہولت",
    testDrives: "ٹیسٹ ڈرائیوز",
    flexibleScheduling: "لچکدار شیڈولنگ",
    homeOfficeVisits: "ہوم/آفس ملاقاتیں",
    multipleRoutes: "متعدد راستے",
    expertGuidance: "ماہر رہنمائی",
    // About
    aboutGreenwayMotors: "Greenway Motors کے بارے میں",
    aboutSubtitle:
      "20 سے زیادہ سالوں سے، Greenway Motors عیش و آرام اور پریمیم گاڑیوں کے لیے اعلیٰ ترین منزل رہا ہے — آٹوموٹیو سیلز اور خدمات میں ایکسیلنس کا معیار قائم کر رہا ہے۔",
    yearsInBusiness: "کاروبار میں سال",
    vehiclesSold: "فروخت شدہ گاڑیاں",
    ourStory: "ہماری کہانی",
    storyText1:
      "2005 میں قائم کیا گیا، Greenway Motors نے ایک واضح وژن کے ساتھ آغاز کیا — عیش و آرام، معیار اور بھروسے کے ذریعے کار خریدنے کے تجربے کو دوبارہ تعریف کرنا۔ جو ایک خاندانی اقدام کے طور پر شروع ہوا تھا وہ جاپان، پاکستان، افریقہ اور UAE میں کارروائیوں کے ساتھ ایک عالمی سطح پر تسلیم شدہ ڈیلرشپ میں تیار ہوا ہے۔",
    storyText2:
      "پریمیم گاڑیوں کی برآمد میں خصوصیت، ہم پوری دنیا کے صارفین کو بہترین آٹوموبائلز سے جوڑنے پر فخر کرتے ہیں۔ دیانتداری، اعتماد اور کسٹمر کی اطمینان سے رہنمائی کرتے ہوئے، Greenway Motors عالمی آٹوموٹیو مارکیٹ میں برتری کی طرف بڑھتی رہتی ہے۔",
    ourMission: "ہمارا مشن",
    missionText:
      "Greenway Motors پر، ہمارا مشن شفاف اور مسابقتی قیمتوں کے ذریعے پریمیم گاڑیوں تک رسائی ممکن بنانا ہے جبکہ ہموار عالمی برآمدات کو یقینی بناتے ہوئے۔ ہم ہر قدم پر — انتخاب سے شپمنٹ اور اس سے آگے تک — بے مثال اعتماد، غیر معمولی خدمات اور مکمل اطمینان فراہم کرکے اپنے صارفین کے ساتھ دیرپا تعلقات قائم کرنے کی کوشش کرتے ہیں۔",
    integrity: "دیانتداری",
    integrityText: "ایماندارانہ رہنمائی اور شفاف عمل — ہمیشہ۔",
    quality: "معیار",
    qualityText: "سرٹیفائیڈ گاڑیاں، سخت معائنے، OEM دیکھ بھال۔",
    service: "خدمت",
    serviceText: "خریدنے سے پہلے اور بعد میں ذاتی توجہ۔",
    // Contact
    getInTouch: "رابطہ کریں",
    contactSubtitle:
      "اپنی مثالی گاڑی تلاش کرنے کے لیے تیار ہیں؟ ہماری ٹیم ہر قدم پر مدد کے لیے یہاں ہے۔",
    visitOurShowroom: "ہماری شو روم دیکھیں",
    showroomAddress:
      "راس الخور انڈسٹریل ایریا 3، ڈوکمز شو روم نمبر 94، دبئی، UAE",
    showroomDescription:
      "ہماری جدید ترین شو روم میں تازہ ترین ماڈلز کی خصوصیات ہیں۔",
    callUs: "ہمیں کال کریں",
    phoneNumber: "+971 52 482 5533",
    callUsDescription: "ہمارے آٹوموٹیو ماہرین سے براہ راست بات کریں۔",
    emailUs: "ہمیں ای میل کریں",
    emailAddress: "sales@greenwaymotors.ae",
    emailUsDescription: "کسی بھی گاڑی کے بارے میں تفصیلی معلومات حاصل کریں۔",
    businessHours: "کاروباری اوقات",
    businessHoursTime: "سوموار - ہفتہ: صبح 10 بجے - شام 8 بجے",
    businessHoursDescription: "آپ کی سہولت کے لیے توسیع شدہ اوقات۔",
    sendUsAMessage: "ہمیں پیغام بھیجیں",
    fullName: "پورا نام",
    emailAddressPlaceholder: "ای میل ایڈریس",
    phoneOptional: "فون (اختیاری)",
    subject: "موضوع",
    yourMessage: "آپ کا پیغام…",
    sendMessage: "پیغام بھیجیں",
    quickActions: "فوری کارروائی",
    getDirections: "ہدایات حاصل کریں",
    emailUsButton: "ہمیں ای میل کریں",
    chatLaterText:
      "بعد میں چاٹ کرنا پسند کریں گے؟ اپنا پیغام بھیجیں اور ہماری ٹیم ایک کاروباری دن کے اندر رابطہ کرے گی۔",
  },
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem(
      "preferred_language"
    ) as Language;
    if (
      savedLanguage &&
      (savedLanguage === "en" ||
        savedLanguage === "ar" ||
        savedLanguage === "ur")
    ) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("preferred_language", lang);
    // Toggle dir attribute on document element (RTL for Arabic and Urdu)
    document.documentElement.dir =
      lang === "ar" || lang === "ur" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  };

  // Apply direction on mount
  useEffect(() => {
    document.documentElement.dir =
      language === "ar" || language === "ur" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const value = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
