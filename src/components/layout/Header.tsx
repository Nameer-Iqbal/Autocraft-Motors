import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";

// 1) ⬇️ Import your logo here
import logo from "@/assets/elite-motors-logo.jpg"; // <- change to your file

const navigation = [
  { name: "Home", href: "/" },
  { name: "Inventory", href: "/inventory" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuth();

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
        <div className="hidden lg:flex lg:gap-x-10">
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
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* RIGHT: Auth buttons */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-3">
          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <span className="text-white text-sm">
                {/* Welcome, {user?.firstName || user?.email} */}
              </span>
              <Button
                onClick={logout}
                className="bg-red-600 text-white hover:bg-red-700 transition-colors h-8 px-3 text-sm"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          ) : (
            <>
              <Button
                asChild
                className="bg-white text-emerald-600 border border-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors h-8 px-3 text-sm"
              >
                <Link to="/login">Sign In</Link>
              </Button>
              <Button
                asChild
                className="bg-emerald-600 text-white hover:bg-emerald-700 transition-colors h-8 px-3 text-sm"
              >
                <Link to="/signup">Sign Up</Link>
              </Button>
            </>
          )}
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
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="mt-6">
                {isAuthenticated ? (
                  <div className="space-y-3">
                    <div className="text-center">
                      <span className="text-white text-sm">
                        Welcome, {user?.firstName || user?.email}
                      </span>
                    </div>
                    <Button
                      onClick={() => {
                        logout();
                        setMobileMenuOpen(false);
                      }}
                      className="w-full bg-red-600 text-white hover:bg-red-700 h-8 text-sm"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      asChild
                      className="bg-white text-emerald-600 border border-emerald-600 hover:bg-emerald-600 hover:text-white h-8 text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Link to="/login">Sign In</Link>
                    </Button>
                    <Button
                      asChild
                      className="bg-emerald-600 text-white hover:bg-emerald-700 h-8 text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Link to="/signup">Sign Up</Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
