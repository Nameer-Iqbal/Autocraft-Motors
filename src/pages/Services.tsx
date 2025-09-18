import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Car, CreditCard, RefreshCw, Wrench, Clock, Shield, Users, Award, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Car Sales",
    description: "Browse our extensive inventory of premium vehicles from luxury brands worldwide.",
    features: ["Certified Pre-Owned", "New Vehicle Sales", "Trade-In Evaluations", "Vehicle History Reports"],
    highlight: "Best Selection"
  },
  {
    icon: CreditCard,
    title: "Financing Solutions",
    description: "Flexible financing options tailored to your budget and credit profile.",
    features: ["Competitive Interest Rates", "Lease Options", "Credit Applications", "Insurance Partnerships"],
    highlight: "Easy Approval"
  },
  {
    icon: RefreshCw,
    title: "Trade-In Program",
    description: "Get the best value for your current vehicle with our transparent trade-in process.",
    features: ["Fair Market Valuations", "Instant Appraisals", "Hassle-Free Process", "Same-Day Transactions"],
    highlight: "Best Value"
  },
  {
    icon: Wrench,
    title: "Maintenance & Repair",
    description: "Expert service from certified technicians using genuine parts and advanced equipment.",
    features: ["Scheduled Maintenance", "Warranty Repairs", "Performance Upgrades", "Emergency Service"],
    highlight: "Expert Care"
  },
  {
    icon: Clock,
    title: "Test Drive Experience",
    description: "Experience your dream car with our comprehensive test drive program.",
    features: ["Extended Test Drives", "Multiple Vehicle Comparison", "Professional Guidance", "Flexible Scheduling"],
    highlight: "Try Before You Buy"
  },
  {
    icon: Shield,
    title: "Extended Warranty",
    description: "Comprehensive coverage plans to protect your investment and ensure peace of mind.",
    features: ["Bumper-to-Bumper Coverage", "Roadside Assistance", "Rental Car Benefits", "Nationwide Service"],
    highlight: "Complete Protection"
  }
];

const benefits = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Our certified professionals have decades of automotive experience."
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized for excellence in customer service and vehicle quality."
  },
  {
    icon: Shield,
    title: "Trusted Service",
    description: "Transparent pricing and honest recommendations you can trust."
  }
];

export default function Services() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Our Services
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Complete Automotive <span className="bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">Solutions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From sales to service, we provide comprehensive automotive solutions designed to exceed your expectations at every step of your journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="card-gradient shadow-card border-border transition-smooth hover:shadow-gold group">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="mb-2">
                  <Badge className="gold-gradient shadow-gold text-xs">
                    {service.highlight}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="mt-6 transition-smooth hover:bg-primary hover:text-primary-foreground group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-smooth group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Why Choose Elite Motors?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            We're committed to providing exceptional service and building lasting relationships with our customers.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card rounded-2xl p-12 shadow-card">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Experience Elite Service?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Contact us today to schedule a consultation or test drive. Our team is ready to help you find the perfect vehicle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gold-gradient shadow-gold">
              Schedule Service
            </Button>
            <Button variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}