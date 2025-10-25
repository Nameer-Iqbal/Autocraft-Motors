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
