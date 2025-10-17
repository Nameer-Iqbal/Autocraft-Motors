import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getFeaturedCars } from "@/data/cars";
import { ArrowRight, Fuel, Calendar, Cog, Car } from "lucide-react";
import { Link } from "react-router-dom";

export default function FeaturedCars() {
  const featuredCars = getFeaturedCars();

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            Coming Soon
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our handpicked selection of luxury vehicles, each
            representing the pinnacle of automotive engineering and design.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCars.map((car) => (
            <Card
              key={car.id}
              className="group rounded-2xl border border-gray-200 bg-white shadow-sm
                 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
                 hover:ring-1 hover:ring-emerald-500/20"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="rounded-full bg-white/90 text-gray-800 border border-gray-200 px-3 py-1 text-xs">
                    {car.year}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-5">
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900">
                  {car.year} {car.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {car.brand} {car.model}
                </p>

                {/* Specs */}
                <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Fuel className="h-4 w-4 text-emerald-600" />
                    <span>{car.fuelType}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Cog className="h-4 w-4 text-emerald-600" />
                    <span>{car.transmission}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Car className="h-4 w-4 text-emerald-600" />
                    <span>{car.driveType}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="h-4 w-4 text-emerald-600" />
                    <span>{car.type}</span>
                  </div>
                </div>

                {/* Price + CTA */}
                <div className="mt-5 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xl font-bold text-emerald-600">
                    ${car.price.toLocaleString()}
                  </span>

                  <Button
                    size="sm"
                    className="bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-sm"
                  >
                    View More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-emerald-600 text-white hover:bg-emerald-700"
          >
            <Link to="/inventory" className="flex items-center gap-2">
              <span>View All Vehicles</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
