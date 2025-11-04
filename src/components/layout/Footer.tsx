import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
// ⬇️ import your logo (same file you used in the header)
import logo from "@/assets/elite-motors-logo.jpg";

// TikTok icon component
const TikTok = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const navigation = {
  main: [
    { name: "home", href: "/" },
    { name: "inventory", href: "/inventory" },
    { name: "services", href: "/services" },
    { name: "about", href: "/about" },
    { name: "contact", href: "/contact" },
  ],
  services: [
    { name: "carSales", href: "/services" },
    { name: "financingSolutions", href: "/services" },
    { name: "tradeInProgram", href: "/services" },
    { name: "maintenanceRepairs", href: "/services" },
    { name: "testDrives", href: "/services" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61580597323614",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/greenwaymotors.ae/",
      icon: Instagram,
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@greenwaymotors?is_from_webapp=1&sender_device=pc",
      icon: TikTok,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/greenway-motors-fze/posts/?feedView=all",
      icon: Linkedin,
    },
  ],
};

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black/90 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Greenway Motors"
                className="h-9 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white font-display">
                  Greenway Motors
                </span>
                <span className="text-xs text-white/60">Beyond Borders</span>
              </div>
            </Link>

            <div className="space-y-2 text-sm text-white/70">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <div className="leading-tight">
                  <div>Ras Al Khor Industrial Area 3</div>
                  <div>Ducumz Show Room No 94</div>
                  <div>Dubai, United Arab Emirates</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-emerald-500" />
                <span>+971 52 482 5533</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-emerald-500" />
                <span>sales@greenwaymotors.ae</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="ml-12">
            <h3 className="text-sm font-semibold text-white mb-2">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-1.5">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-white/70 hover:text-emerald-400 transition-colors"
                  >
                    {t(item.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-2">
              {t("ourServices")}
            </h3>
            <ul className="space-y-1.5">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <span className="text-sm text-white/70">{t(item.name)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Social */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-2">
              {t("stayConnected")}
            </h3>
            <p className="text-sm text-white/70 mb-3">{t("newsletterText")}</p>

            <div className="flex gap-2 mb-3">
              <input
                type="email"
                placeholder={t("enterEmail")}
                className="flex-1 px-3 py-2 text-sm bg-white/5 text-white placeholder:text-white/50
                           border border-white/10 rounded-md outline-none
                           focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
              <Button
                size="sm"
                className="bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm"
              >
                {t("subscribe")}
              </Button>
            </div>

            <div className="flex items-center gap-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/70 hover:text-emerald-400 transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-white/60">{t("copyright")}</p>
            <div className="flex gap-6 mt-4 sm:mt-0"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
