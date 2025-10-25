import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cars, type Car as CarType } from "@/data/cars";
import {
  Search,
  Filter,
  Fuel,
  Calendar,
  Cog,
  ArrowRight,
  Car,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

export default function Inventory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [filterBrand, setFilterBrand] = useState("all");
  const [filterType, setFilterType] = useState("all");
  const [filterDriveType, setFilterDriveType] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCar, setSelectedCar] = useState<CarType | null>(null);
  const carsPerPage = 6;

  const brands = Array.from(new Set(cars.map((car) => car.brand)));
  const types = Array.from(new Set(cars.map((car) => car.type)));
  const driveTypes = Array.from(new Set(cars.map((car) => car.driveType)));

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
      const matchesDriveType =
        filterDriveType === "all" || car.driveType === filterDriveType;

      return matchesSearch && matchesBrand && matchesType && matchesDriveType;
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
  }, [searchTerm, sortBy, filterBrand, filterType, filterDriveType]);

  // Pagination logic
  const totalPages = Math.ceil(filteredAndSortedCars.length / carsPerPage);
  const startIndex = (currentPage - 1) * carsPerPage;
  const endIndex = startIndex + carsPerPage;
  const currentCars = filteredAndSortedCars.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [searchTerm, sortBy, filterBrand, filterType, filterDriveType]);

  return (
    <div className="min-h-screen py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 text-gray-900">
            Our Inventory <span className="text-emerald-600"></span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our complete collection of premium vehicles. Each car is
            carefully inspected and certified to meet our highest standards.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
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

            {/* Drive Type Filter */}
            <Select value={filterDriveType} onValueChange={setFilterDriveType}>
              <SelectTrigger className="bg-white border border-gray-200 text-gray-900 focus:ring-emerald-500 focus:border-emerald-500">
                <SelectValue placeholder="All Drive Types" />
              </SelectTrigger>
              <SelectContent className="bg-white text-gray-900 border border-gray-200">
                <SelectItem value="all">All Drive Types</SelectItem>
                {driveTypes.map((driveType) => (
                  <SelectItem key={driveType} value={driveType}>
                    {driveType}
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
            Showing {startIndex + 1}-
            {Math.min(endIndex, filteredAndSortedCars.length)} of{" "}
            {filteredAndSortedCars.length} vehicles
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCars.map((car) => (
            <Card
              key={car.id}
              className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-sm"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 object-cover"
                />

                {/* Year (neutral, no hover color) */}
                <div className="absolute top-4 left-4">
                  <Badge className="rounded-full bg-white/90 text-gray-800 border border-gray-200 px-3 py-1 text-xs cursor-default pointer-events-none">
                    {car.year}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {car.name}
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
                    onClick={() => setSelectedCar(car)}
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

        {filteredAndSortedCars.length === 0 ? (
          <div className="text-center py-16">
            <Filter className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No vehicles found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search criteria or filters.
            </p>
          </div>
        ) : (
          <>
            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-12 flex items-center justify-center gap-4">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="flex items-center gap-1 h-8 px-3 text-sm"
                >
                  <ChevronLeft className="h-3 w-3" />
                  Previous
                </Button>

                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <Button
                        key={page}
                        variant="outline"
                        onClick={() => setCurrentPage(page)}
                        className={`h-8 w-8 text-sm border-gray-300 ${
                          currentPage === page
                            ? "bg-black text-white"
                            : "bg-emerald-600 text-white"
                        }`}
                      >
                        {page}
                      </Button>
                    )
                  )}
                </div>

                <Button
                  variant="outline"
                  onClick={() =>
                    setCurrentPage(Math.min(totalPages, currentPage + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-1 h-8 px-3 text-sm"
                >
                  Next
                  <ChevronRight className="h-3 w-3" />
                </Button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Car Details Dialog */}
      <Dialog
        open={!!selectedCar}
        onOpenChange={(open) => !open && setSelectedCar(null)}
      >
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white">
          {selectedCar && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-900">
                  {selectedCar.name} {selectedCar.model}
                </DialogTitle>
                <DialogDescription className="text-lg">
                  {selectedCar.brand} • {selectedCar.year}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6">
                {/* Main Image */}
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={selectedCar.image}
                    alt={selectedCar.name}
                    className="w-full h-64 object-cover"
                  />
                </div>

                {/* Price */}
                <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-lg">
                  <span className="text-2xl font-bold text-emerald-600">
                    ${selectedCar.price.toLocaleString()}
                  </span>
                  <Badge className="bg-emerald-600 text-white px-3 py-1">
                    {selectedCar.year}
                  </Badge>
                </div>

                {/* Specifications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Fuel className="h-5 w-5 text-emerald-600" />
                    <div>
                      <p className="text-sm text-gray-500">Fuel Type</p>
                      <p className="font-semibold text-gray-900">
                        {selectedCar.fuelType}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Cog className="h-5 w-5 text-emerald-600" />
                    <div>
                      <p className="text-sm text-gray-500">Transmission</p>
                      <p className="font-semibold text-gray-900">
                        {selectedCar.transmission}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Car className="h-5 w-5 text-emerald-600" />
                    <div>
                      <p className="text-sm text-gray-500">Drive Type</p>
                      <p className="font-semibold text-gray-900">
                        {selectedCar.driveType}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Calendar className="h-5 w-5 text-emerald-600" />
                    <div>
                      <p className="text-sm text-gray-500">Vehicle Type</p>
                      <p className="font-semibold text-gray-900">
                        {selectedCar.type}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                {selectedCar.features && selectedCar.features.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-3">
                      Features
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCar.features.map((feature, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="px-3 py-1 text-black"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Description
                  </h3>
                  <p className="text-gray-600">
                    This {selectedCar.year} {selectedCar.brand}{" "}
                    {selectedCar.model} is a premium{" "}
                    {selectedCar.type.toLowerCase()}
                    {selectedCar.type === "SUV" ? " with excellent" : ""}{" "}
                    performance and reliability.
                    {selectedCar.fuelType === "Hybrid"
                      ? " Featuring advanced hybrid technology for superior fuel efficiency."
                      : ""}{" "}
                    The {selectedCar.transmission.toLowerCase()} transmission
                    ensures smooth driving, while the {selectedCar.driveType}{" "}
                    configuration provides optimal handling and control.
                  </p>
                </div>

                {/* Contact CTA */}
                <div className="pt-4 border-t border-gray-200">
                  <Button className="w-full bg-emerald-600 text-white hover:bg-emerald-700">
                    Contact Us
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
