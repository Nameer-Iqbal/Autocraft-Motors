import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-showroom.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury car showroom"
          className="w-full h-full object-cover"
        />
        {/* darker overlay for contrast like the green design */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8">
            <div className="space-y-4">
              {/* small pill badge, green */}
              <div className="inline-flex items-center space-x-2 text-emerald-600 text-sm font-medium bg-white/90 px-4 py-2 rounded-full shadow-sm">
                <Award className="h-4 w-4" />
                <span>Premium Automotive Excellence</span>
              </div>

              {/* Heading: white + green accent */}
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-white">
                <span className="block text-emerald-500">Greenway Motors</span>
              </h1>

              {/* Subhead: light gray for readability on dark */}
              <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
                At Greenway Motors, we specialize in exporting premium vehicles
                from Japan and the UAE to markets across Africa. With
                transparent pricing, a wide selection, and trusted global
                logistics, we ensure every customer enjoys a seamless and
                satisfying car-buying experience — wherever they are in the
                world.
              </p>
            </div>

            {/* CTAs: primary = green, secondary = white w/ green text */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="default"
                className="bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-lg"
              >
                <Link to="/inventory" className="flex items-center gap-2">
                  <span>View Inventory</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="default"
                className="bg-white text-emerald-600 border border-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors shadow-lg"
              >
                <Link to="/about">About Us</Link>
              </Button>
            </div>

            {/* Stats: green icons + white text */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <Star className="h-5 w-5 text-emerald-500" />
                  <span className="text-2xl font-bold text-white">4.6</span>
                </div>
                <p className="text-sm text-white/70">Customer Rating</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <Users className="h-5 w-5 text-emerald-500" />
                  <span className="text-2xl font-bold text-white">3,500+</span>
                </div>
                <p className="text-sm text-white/70">Happy Customers</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <Award className="h-5 w-5 text-emerald-500" />
                  <span className="text-2xl font-bold text-white">20+</span>
                </div>
                <p className="text-sm text-white/70">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right side removed on lg to match the green design */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}
