import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut, UserCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";

// 1) ⬇️ Import your logo here
import logo from "@/assets/elite-motors-logo.jpg"; // <- change to your file

const navigation = [
  { name: "home", href: "/" },
  { name: "inventory", href: "/inventory" },
  { name: "services", href: "/services" },
  { name: "about", href: "/about" },
  { name: "contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuth();
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8 ">
        {/* LEFT: Logo */}
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5  flex items-center gap-3">
            {/* 2) ⬇️ Use your logo instead of the Car icon */}
            <img
              src={logo}
              alt="Greenway Motors"
              className="h-12 w-auto object-contain"
              style={{ maxHeight: "48px" }}
            />
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden lg:flex lg:gap-x-10 lg:-ml-24">
          {navigation.map((item) => {
            const active = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "relative text-sm font-semibold transition-colors",
                  active
                    ? "text-white after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-0.5 after:w-12 after:bg-emerald-500 after:rounded"
                    : "text-white/80 hover:text-emerald-400"
                )}
              >
                {t(item.name)}
              </Link>
            );
          })}
        </div>

        {/* RIGHT: Auth buttons and Language */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-3 lg:-mr-24">
          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              <Link
                to="/profile"
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
              >
                <UserCircle className="h-5 w-5 text-white" />
                <span className="text-white text-sm">
                  {user?.firstName || user?.email}
                </span>
              </Link>
              <Button
                onClick={logout}
                className="bg-red-600 text-white hover:bg-red-700 transition-colors h-8 px-2 text-sm whitespace-nowrap flex items-center justify-center gap-1"
              >
                <LogOut className="h-4 w-4" />
                <span>{t("logout")}</span>
              </Button>
            </div>
          ) : null}
          <LanguageSelector />
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black/95 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <Link
                to="/"
                className="-m-1.5 p-1.5 flex items-center gap-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                <img
                  src={logo}
                  alt="Greenway Motors"
                  className="h-8 w-auto object-contain"
                />
              </Link>
              <Button
                variant="ghost"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            <div className="mt-6">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block rounded-md px-3 py-2 text-base font-medium",
                      location.pathname === item.href
                        ? "text-emerald-400 bg-white/5"
                        : "text-white/90 hover:text-emerald-400 hover:bg-white/5"
                    )}
                  >
                    {t(item.name)}
                  </Link>
                ))}
              </div>

              <div className="mt-6">
                <div className="mb-4">
                  <LanguageSelector />
                </div>
                {isAuthenticated ? (
                  <div className="space-y-3">
                    <Link
                      to="/profile"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      <UserCircle className="h-5 w-5 text-white" />
                      <span className="text-white text-sm font-medium">
                        {user?.firstName || user?.email}
                      </span>
                    </Link>
                    <Button
                      onClick={() => {
                        logout();
                        setMobileMenuOpen(false);
                      }}
                      className="w-full bg-red-600 text-white hover:bg-red-700 h-8 text-sm"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      {t("logout")}
                    </Button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
