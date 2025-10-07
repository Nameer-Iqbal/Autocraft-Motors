import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cars } from "@/data/cars";
import { Search, Filter, Fuel, Gauge, Calendar, Cog, ArrowRight } from "lucide-react";

export default function Inventory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [filterBrand, setFilterBrand] = useState("all");
  const [filterType, setFilterType] = useState("all");

  const brands = Array.from(new Set(cars.map((car) => car.brand)));
  const types = Array.from(new Set(cars.map((car) => car.type)));

  const filteredAndSortedCars = useMemo(() => {
    let filtered = cars.filter((car) => {
      const q = searchTerm.toLowerCase();
      const matchesSearch =
        car.name.toLowerCase().includes(q) ||
        car.brand.toLowerCase().includes(q) ||
        car.model.toLowerCase().includes(q) ||
        car.year.toString().includes(searchTerm);

      const matchesBrand = filterBrand === "all" || car.brand === filterBrand;
      const matchesType = filterType === "all" || car.type === filterType;

      return matchesSearch && matchesBrand && matchesType;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "year":
          return b.year - a.year;
        case "brand":
          return a.brand.localeCompare(b.brand);
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, sortBy, filterBrand, filterType]);

  return (
    <div className="min-h-screen py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 text-gray-900">
            Our Inventory <span className="text-emerald-600"></span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our complete collection of premium vehicles. Each car is carefully
            inspected and certified to meet our highest standards.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search cars..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white border border-gray-200 text-gray-900
                           placeholder:text-gray-400 focus-visible:ring-emerald-500
                           focus-visible:border-emerald-500"
              />
            </div>

            {/* Brand Filter */}
            <Select value={filterBrand} onValueChange={setFilterBrand}>
              <SelectTrigger className="bg-white border border-gray-200 text-gray-900 focus:ring-emerald-500 focus:border-emerald-500">
                <SelectValue placeholder="All Brands" />
              </SelectTrigger>
              <SelectContent className="bg-white text-gray-900 border border-gray-200">
                <SelectItem value="all">All Brands</SelectItem>
                {brands.map((brand) => (
                  <SelectItem key={brand} value={brand}>
                    {brand}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Type Filter */}
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="bg-white border border-gray-200 text-gray-900 focus:ring-emerald-500 focus:border-emerald-500">
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent className="bg-white text-gray-900 border border-gray-200">
                <SelectItem value="all">All Types</SelectItem>
                {types.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="bg-white border border-gray-200 text-gray-900 focus:ring-emerald-500 focus:border-emerald-500">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-white text-gray-900 border border-gray-200">
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="year">Year</SelectItem>
                <SelectItem value="brand">Brand</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-500">
            Showing {filteredAndSortedCars.length} of {cars.length} vehicles
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAndSortedCars.map((car) => (
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
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                {/* Year (neutral, no hover color) */}
                <div className="absolute top-4 left-4">
                  <Badge className="rounded-full bg-white/90 text-gray-800 border border-gray-200 px-3 py-1 text-xs cursor-default pointer-events-none">
                    {car.year}
                  </Badge>
                </div>

                {/* Featured (emerald, no hover color) */}
                {car.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="rounded-full bg-emerald-600 text-white px-3 py-1 text-xs font-semibold cursor-default pointer-events-none">
                      Featured
                    </Badge>
                  </div>
                )}
              </div>

              {/* Content */}
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{car.name}</h3>
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
                    <Gauge className="h-4 w-4 text-emerald-600" />
                    <span>{car.mileage}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="h-4 w-4 text-emerald-600" />
                    <span>{car.type}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-900">Key Features:</p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {car.features.slice(0, 3).map((feature, i) => (
                      <Badge key={i} variant="secondary" className="text-xs bg-gray-100 text-gray-700 hover:bg-gray-100">
                        {feature}
                      </Badge>
                    ))}
                    {car.features.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700 hover:bg-gray-100">
                        +{car.features.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Price + CTA */}
                <div className="mt-5 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-2xl font-bold text-emerald-600">
                    ${car.price.toLocaleString()}
                  </span>
                  <Button
                    size="sm"
                    className="bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-sm"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredAndSortedCars.length === 0 && (
          <div className="text-center py-16">
            <Filter className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No vehicles found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
