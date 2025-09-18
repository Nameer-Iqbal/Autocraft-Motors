import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Award, Shield, Target, Heart, Star, Calendar, Trophy } from "lucide-react";

const stats = [
  { label: "Years in Business", value: "25+", icon: Calendar },
  { label: "Vehicles Sold", value: "10,000+", icon: Trophy },
  { label: "Happy Customers", value: "8,500+", icon: Heart },
  { label: "Customer Rating", value: "4.9/5", icon: Star },
];

const values = [
  {
    icon: Shield,
    title: "Trust & Transparency",
    description: "We believe in honest communication and transparent business practices. Every vehicle comes with a complete history report and comprehensive inspection."
  },
  {
    icon: Award,
    title: "Excellence in Service",
    description: "Our commitment to excellence drives everything we do. From the moment you walk in until long after your purchase, we're dedicated to exceptional service."
  },
  {
    icon: Target,
    title: "Customer First",
    description: "Your needs come first. We take time to understand your requirements and provide personalized solutions that match your lifestyle and budget."
  },
  {
    icon: Users,
    title: "Expert Knowledge",
    description: "Our team consists of automotive experts with decades of combined experience. We're passionate about cars and love sharing our knowledge."
  }
];

const team = [
  {
    name: "Michael Rodriguez",
    role: "Founder & CEO",
    experience: "25+ years",
    specialization: "Luxury Vehicles",
    description: "Michael founded Elite Motors with a vision to create the premier luxury car buying experience."
  },
  {
    name: "Sarah Chen",
    role: "Sales Director",
    experience: "15+ years",
    specialization: "Customer Relations",
    description: "Sarah ensures every customer receives personalized attention and finds their perfect vehicle match."
  },
  {
    name: "David Thompson",
    role: "Service Manager",
    experience: "20+ years",
    specialization: "Technical Expertise",
    description: "David leads our service team with his extensive knowledge of luxury vehicle maintenance and repair."
  }
];

export default function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            About Elite Motors
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Your Trusted <span className="bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">Automotive Partner</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For over 25 years, Elite Motors has been the premier destination for luxury and premium vehicles, setting the standard for excellence in automotive sales and service.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Elite Motors was founded in 1999 with a simple mission: to provide an exceptional car buying experience that combines luxury, quality, and trust. What started as a small family business has grown into the region's most respected premium automotive dealership.
              </p>
              <p>
                Our founder, Michael Rodriguez, recognized that buying a car should be more than just a transaction—it should be a relationship built on trust, expertise, and mutual respect. This philosophy continues to guide everything we do today.
              </p>
              <p>
                Over the decades, we've helped thousands of customers find their perfect vehicles, from high-performance sports cars to elegant luxury sedans. Our commitment to excellence has earned us numerous awards and, more importantly, the loyalty of our customers.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-gold/20 rounded-2xl transform -rotate-3"></div>
            <Card className="relative card-gradient shadow-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground mb-6">
                  To provide an unparalleled automotive experience through exceptional service, premium vehicles, and lasting relationships with our customers.
                </p>
                <h3 className="text-xl font-semibold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the most trusted and respected premium automotive dealership, setting the standard for excellence in our industry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core values shape our culture and guide our interactions with customers, partners, and each other.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-gradient shadow-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced team of automotive professionals is passionate about helping you find the perfect vehicle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="card-gradient shadow-card border-border text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex justify-center items-center space-x-2">
                      <Badge variant="secondary" className="text-xs">
                        {member.experience}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {member.specialization}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-card rounded-2xl p-12 shadow-card">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Experience the Elite Motors Difference
          </h3>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Visit our showroom today and discover why thousands of customers choose Elite Motors for their automotive needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gold-gradient shadow-gold">
              Visit Our Showroom
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