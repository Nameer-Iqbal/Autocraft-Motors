import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
// ⬇️ import your logo (same file you used in the header)
import logo from "@/assets/elite-motors-logo.jpg";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Inventory", href: "/inventory" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Car Sales", href: "/services" },
    { name: "Financing", href: "/services" },
    { name: "Trade-in", href: "/services" },
    { name: "Maintenance", href: "/services" },
    { name: "Test Drives", href: "/services" },
  ],
  social: [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "LinkedIn", href: "#", icon: Linkedin },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black/90 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Greenway Motors"
                className="h-9 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white">
                  Greenway Motors
                </span>
                <span className="text-xs text-white/60">
                  Premium Car Showroom
                </span>
              </div>
            </Link>

            <p className="text-sm text-white/70 mb-6">
              Your trusted partner in finding the perfect luxury vehicle. We
              offer the finest selection of premium cars with exceptional
              service.
            </p>

            <div className="space-y-2 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-emerald-500" />
                <span>123 Luxury Drive, Auto City, AC 12345</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-emerald-500" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-emerald-500" />
                <span>info@elitemotors.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-white/70 hover:text-emerald-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              Our Services
            </h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-white/70 hover:text-emerald-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Social */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              Stay Connected
            </h3>
            <p className="text-sm text-white/70 mb-4">
              Subscribe to our newsletter for the latest updates on new arrivals
              and exclusive offers.
            </p>

            <div className="flex gap-2 mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 text-sm bg-white/5 text-white placeholder:text-white/50
                           border border-white/10 rounded-md outline-none
                           focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
              <Button
                size="sm"
                className="bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm"
              >
                Subscribe
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
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Greenway Motors. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <Link
                to="#"
                className="text-sm text-white/70 hover:text-emerald-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="#"
                className="text-sm text-white/70 hover:text-emerald-400 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
