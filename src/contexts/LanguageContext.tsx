import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ar" | "sw";

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
    swahili: "Swahili",
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
    fobPrice: "FOB Price",
    getFOBPriceQuote: "Get FOB Price Quote",
    getCIFPrice: "Get CIF Price",
    soldOut: "Sold Out",
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
    swahili: "السواحيلية",
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
    fobPrice: "سعر FOB",
    getFOBPriceQuote: "الحصول على عرض سعر FOB",
    getCIFPrice: "الحصول على سعر CIF",
    soldOut: "نفدت الكمية",
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
  sw: {
    // Navigation
    home: "Nyumbani",
    inventory: "Orodha ya Magari",
    services: "Huduma",
    about: "Kuhusu Sisi",
    contact: "Wasiliana",
    // Auth
    signIn: "Ingia",
    signUp: "Jisajili",
    logout: "Ondoka",
    profile: "Wasifu",
    // Language selector
    language: "Lugha",
    english: "Kiingereza",
    arabic: "Kiarabu",
    swahili: "Kiswahili",
    // Footer
    quickLinks: "Viungo vya Haraka",
    ourServices: "Huduma Zetu",
    stayConnected: "Kaa Umeunganishwa",
    subscribe: "Jisajili",
    enterEmail: "Weka barua pepe yako",
    newsletterText:
      "Jisajili kwa jarida letu upokee taarifa za hivi punde kuhusu magari mapya na ofa maalum.",
    copyright: "© 2005 Greenway Motors. Haki zote zimehifadhiwa.",
    // Hero Section
    premiumExcellence: "Ubora wa Magari wa Daraja la Juu",
    heroTitle: "Greenway Motors",
    heroSubtitle:
      "Greenway Motors inajishughulisha na kusafirisha magari ya kifahari kutoka Japani na UAE kwenda masoko mbalimbali barani Afrika. Kwa bei wazi, uteuzi mpana na usafirishaji unaoaminika, tunahakikisha kila mteja anapata uzoefu rahisi na wa kuridhisha wa kununua gari — popote walipo ulimwenguni.",
    viewInventory: "Tazama Orodha",
    aboutUs: "Kuhusu Sisi",
    customerRating: "Ukadiriaji wa Wateja",
    happyCustomers: "Wateja Walioridhika",
    yearsExperience: "Miaka ya Uzoefu",
    // Coming Soon
    comingSoon: "Inakuja Hivi Karibuni",
    comingSoonText:
      "Tunafanya kazi kuongeza magari mapya ya kuvutia katika orodha yetu.",
    comingSoonSubtext: "Rudi hivi karibuni kuona nyongeza zetu za karibuni!",
    stayTuned: "Endelea kufuatilia masasisho ya magari mapya yanayowasili",
    // Inventory
    ourInventory: "Orodha Yetu ya Magari",
    inventorySubtitle:
      "Gundua mkusanyiko wetu kamili wa magari ya kifahari. Kila gari hukaguliwa kwa uangalifu na kuthibitishwa ili kufikia viwango vyetu vya juu.",
    searchCars: "Tafuta magari...",
    allBrands: "Chapa Zote",
    allTypes: "Aina Zote",
    allDriveTypes: "Aina Zote za Uendeshaji",
    sortBy: "Panga kwa",
    name: "Jina",
    priceLowToHigh: "Bei: Chini hadi Juu",
    priceHighToLow: "Bei: Juu hadi Chini",
    year: "Mwaka",
    brand: "Chapa",
    showing: "Inaonyesha",
    of: "ya",
    vehicles: "magari",
    viewMore: "Tazama Zaidi",
    noVehiclesFound: "Hakuna magari yaliyopatikana",
    tryAdjustingFilters: "Jaribu kubadilisha vigezo vya utafutaji au vichujio.",
    previous: "Iliyotangulia",
    next: "Inayofuata",
    fuelType: "Aina ya Mafuta",
    transmission: "Gia",
    driveType: "Aina ya Uendeshaji",
    vehicleType: "Aina ya Gari",
    features: "Vipengele",
    description: "Maelezo",
    contactUs: "Wasiliana Nasi",
    fobPrice: "Bei ya FOB",
    getFOBPriceQuote: "Omba Nukuu ya Bei ya FOB",
    getCIFPrice: "Omba Bei ya CIF",
    soldOut: "Imeuzwa",
    carDescription1: "Hii",
    carDescription2: "ni gari la kifahari",
    carDescription3: "lenye utendaji bora na",
    carDescription4: "uaminifu wa juu.",
    carDescription5:
      "Inatumia teknolojia ya mseto ya kisasa kwa ufanisi mkubwa wa mafuta.",
    carDescription6: "Kifaa",
    carDescription7: "cha gia kinahakikisha uendeshaji laini, huku",
    carDescription8: "mpangilio ukitoa udhibiti na uthabiti bora.",
    // Services
    completeAutomotiveSolutions: "Suluhisho Kamili za Magari",
    servicesSubtitle:
      "Kuanzia mauzo hadi huduma, tunatoa suluhisho za kina za magari zilizoundwa kuzidi matarajio yako katika kila hatua ya safari yako.",
    bestSelection: "Uteuzi Bora",
    carSales: "Uuzaji wa Magari",
    certifiedPreOwned: "Magari Yaliyothibitishwa Yametumika",
    newVehicleSales: "Uuzaji wa Magari Mapya",
    tradeInEvaluations: "Tathmini za Kubadilishana",
    vehicleHistoryReports: "Ripoti za Historia ya Gari",
    easyApproval: "Uidhinishaji Rahisi",
    financingSolutions: "Suluhisho za Ufadhili",
    competitiveInterestRates: "Viwango vya Riba Vinavyoshindana",
    leaseOptions: "Chaguo za Kukodisha",
    creditApplications: "Maombi ya Mkopo",
    insurancePartnerships: "Ushirikiano wa Bima",
    bestValue: "Thamani Bora",
    tradeInProgram: "Mpango wa Kubadilishana Gari",
    fairMarketValuations: "Tathmini za Soko la Haki",
    instantAppraisals: "Tathmini za Haraka",
    hassleFreeProcess: "Mchakato Usio na Usumbufu",
    sameDayTransactions: "Miamala Siku Hiyo Hiyo",
    expertCare: "Huduma ya Kitaalamu",
    maintenanceRepairs: "Matengenezo na Marekebisho",
    oemPartsFluids: "Sehemu Asilia za OEM na Vilainishi",
    scheduledServices: "Huduma za Ratiba",
    diagnosticsRepairs: "Utambuzi na Marekebisho",
    detailingPackages: "Paketiti za Usafishaji wa Kina",
    peaceOfMind: "Amani ya Akili",
    warrantyProtection: "Dhamana na Ulinzi",
    extendedWarranties: "Dhamana Zilizoongezwa",
    roadsideAssistance: "Msaada wa Njia",
    gapTireProtection: "Ulinzi wa GAP na Matairi",
    claimsSupport: "Msaada wa Madai",
    convenience: "Urahisi",
    testDrives: "Majaribio ya Kuendesha",
    flexibleScheduling: "Ratiba Inayonyumbulika",
    homeOfficeVisits: "Ziara za Nyumbani/Ofisini",
    multipleRoutes: "Njia Nyingi",
    expertGuidance: "Mwongozo wa Kitaalamu",
    // About
    aboutGreenwayMotors: "Kuhusu Greenway Motors",
    aboutSubtitle:
      "Kwa zaidi ya miaka 20, Greenway Motors imekuwa kituo kinachoongoza kwa magari ya kifahari na ya daraja la juu — ikiweka kiwango cha ubora katika mauzo na huduma za magari.",
    yearsInBusiness: "Miaka ya Biashara",
    vehiclesSold: "Magari Yaliyouzwa",
    ourStory: "Hadithi Yetu",
    storyText1:
      "Greenway Motors ilianzishwa mwaka 2005 ikiwa na maono ya kuleta mageuzi katika uzoefu wa kununua gari kupitia anasa, ubora na uaminifu. Kilichoanza kama juhudi ya kifamilia kimekua kuwa duka linalotambulika duniani likiwa na shughuli Japani, Pakistan, Afrika na UAE.",
    storyText2:
      "Tunahusika katika kusafirisha magari ya kifahari, na tunajivunia kuwaunganisha wateja duniani kote na magari bora. Tukiongozwa na uadilifu, kutegemewa na kuridhika kwa wateja, Greenway Motors inaendelea kuendeleza ubora katika soko la kimataifa la magari.",
    ourMission: "Dhamira Yetu",
    missionText:
      "Katika Greenway Motors, dhamira yetu ni kufanya magari ya kifahari yaweze kufikiwa kupitia bei wazi na shindani huku tukihakikisha usafirishaji wa kimataifa usio na kikwazo. Tunajitahidi kujenga uhusiano wa kudumu na wateja wetu kwa kutoa kutegemewa bila kifani, huduma bora na kuridhika kamili katika kila hatua — kuanzia uteuzi hadi usafirishaji na zaidi.",
    integrity: "Uadilifu",
    integrityText: "Mwongozo wa uwazi na uadilifu — kila wakati.",
    quality: "Ubora",
    qualityText: "Magari yaliyothibitishwa, ukaguzi mkali, huduma ya OEM.",
    service: "Huduma",
    serviceText: "Huduma ya kibinafsi kabla na baada ya ununuzi.",
    // Contact
    getInTouch: "Wasiliana Nasi",
    contactSubtitle:
      "Uko tayari kupata gari lako kamili? Timu yetu iko hapa kukusaidia katika kila hatua.",
    visitOurShowroom: "Tembelea Jumba letu la Maonyesho",
    showroomAddress:
      "Ras Al Khor Industrial Area 3, Ducumz Show Room No 94, Dubai, UAE",
    showroomDescription:
      "Jumba letu la kisasa linaonyesha mifano ya hivi karibuni.",
    callUs: "Piga Simu",
    phoneNumber: "+971 52 482 5533",
    callUsDescription: "Zungumza moja kwa moja na wataalamu wetu wa magari.",
    emailUs: "Tutumie Barua Pepe",
    emailAddress: "sales@greenwaymotors.ae",
    emailUsDescription: "Pata taarifa za kina kuhusu gari lolote.",
    businessHours: "Saa za Kazi",
    businessHoursTime: "Jumatatu - Jumamosi: 10am - 8pm",
    businessHoursDescription: "Saa zilizoongezwa kwa urahisi wako.",
    sendUsAMessage: "Tutumie Ujumbe",
    fullName: "Jina kamili",
    emailAddressPlaceholder: "Anwani ya barua pepe",
    phoneOptional: "Simu (hiari)",
    subject: "Mada",
    yourMessage: "Ujumbe wako…",
    sendMessage: "Tuma Ujumbe",
    quickActions: "Vitendo vya Haraka",
    getDirections: "Pata Maelekezo",
    emailUsButton: "Tutumie Barua Pepe",
    chatLaterText:
      "Unapenda kuzungumza baadaye? Tuma ujumbe wako na timu yetu itakujibu ndani ya siku moja ya kazi.",
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
        savedLanguage === "sw")
    ) {
      setLanguageState(savedLanguage);
    } else if (savedLanguage) {
      // If saved language is not valid (e.g., "ur"), reset to English
      localStorage.setItem("preferred_language", "en");
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("preferred_language", lang);
    // Toggle dir attribute on document element (RTL for Arabic)
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  };

  // Apply direction on mount
  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
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
