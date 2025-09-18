import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getFeaturedCars } from "@/data/cars";
import { ArrowRight, Fuel, Gauge, Calendar, Cog } from "lucide-react";
import { Link } from "react-router-dom";

export default function FeaturedCars() {
  const featuredCars = getFeaturedCars();

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Featured Collection
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Premium Vehicles
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our handpicked selection of luxury vehicles, each representing the pinnacle of automotive engineering and design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCars.map((car) => (
            <Card key={car.id} className="card-gradient shadow-card border-border transition-smooth hover:shadow-gold group">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-64 object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">
                    {car.year}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="gold-gradient shadow-gold">
                    Featured
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {car.name}
                    </h3>
                    <p className="text-muted-foreground">{car.brand} {car.model}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Fuel className="h-4 w-4" />
                      <span>{car.fuelType}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Cog className="h-4 w-4" />
                      <span>{car.transmission}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Gauge className="h-4 w-4" />
                      <span>{car.mileage}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{car.type}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <span className="text-2xl font-bold text-foreground">
                        ${car.price.toLocaleString()}
                      </span>
                    </div>
                    <Button variant="outline" size="sm" className="transition-smooth hover:bg-primary hover:text-primary-foreground">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="transition-smooth">
            <Link to="/inventory" className="flex items-center space-x-2">
              <span>View All Vehicles</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}