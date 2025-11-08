import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Languages, ChevronDown } from "lucide-react";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const languages = [
    { code: "en" as const, label: "English", flag: "🇺🇸" },
    { code: "ar" as const, label: "العربية", flag: "🇸🇦" },
    { code: "sw" as const, label: "Kiswahili", flag: "🇹🇿" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === language);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white text-sm h-8"
      >
        <Languages className="h-4 w-4" />
        <span className="hidden sm:inline">{currentLanguage?.flag}</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      {isOpen && (
        <div
          className={`absolute mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50 ${
            language === "ar" ? "left-0" : "right-0"
          }`}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 ${
                language === "ar" ? "text-right" : "text-left"
              } hover:bg-gray-100 transition-colors flex items-center gap-3 ${
                language === lang.code
                  ? "bg-emerald-50 text-emerald-600"
                  : "text-gray-700"
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
              <span className="font-medium">{lang.label}</span>
              {language === lang.code && (
                <span
                  className={`text-emerald-600 ${
                    language === "ar" ? "mr-auto" : "ml-auto"
                  }`}
                >
                  ✓
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
