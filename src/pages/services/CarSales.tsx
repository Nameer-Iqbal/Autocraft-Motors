import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Car, CheckCircle, Star, Shield, Award } from "lucide-react";
import { Link } from "react-router-dom";

export default function CarSales() {
  return (
    <div className="min-h-screen py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Button asChild variant="outline" className="gap-2">
            <Link to="/services">
              <ArrowLeft className="h-4 w-4" />
              Back to Services
            </Link>
          </Button>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-16 w-16 rounded-full bg-emerald-50 flex items-center justify-center">
              <Car className="h-8 w-8 text-emerald-600" />
            </div>
            <Badge className="rounded-full bg-emerald-100 text-emerald-700 px-4 py-2 text-sm font-semibold">
              Best Selection
            </Badge>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 text-gray-900">
            Car Sales
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our extensive collection of premium vehicles, each
            carefully selected and inspected to meet our highest standards of
            quality and performance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <FeatureCard
            icon={<CheckCircle className="h-6 w-6 text-emerald-600" />}
            title="Certified Pre-Owned"
            description="Every pre-owned vehicle comes with comprehensive certification and warranty coverage."
          />
          <FeatureCard
            icon={<Car className="h-6 w-6 text-emerald-600" />}
            title="New Vehicle Sales"
            description="Latest models from top manufacturers with full manufacturer warranty."
          />
          <FeatureCard
            icon={<Shield className="h-6 w-6 text-emerald-600" />}
            title="Vehicle History Reports"
            description="Complete vehicle history and inspection reports for transparency."
          />
          <FeatureCard
            icon={<Award className="h-6 w-6 text-emerald-600" />}
            title="Trade-In Evaluations"
            description="Fair market value assessments for your current vehicle."
          />
        </div>

        {/* Process Section */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Our Sales Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProcessStep
              step="1"
              title="Browse & Select"
              description="Explore our inventory online or visit our showroom to find your perfect vehicle."
            />
            <ProcessStep
              step="2"
              title="Test Drive"
              description="Schedule a test drive to experience the vehicle's performance and comfort."
            />
            <ProcessStep
              step="3"
              title="Purchase"
              description="Complete your purchase with our streamlined financing and documentation process."
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <StatCard
            icon={<Star className="h-6 w-6 text-emerald-600" />}
            value="500+"
            label="Vehicles in Stock"
          />
          <StatCard
            icon={<CheckCircle className="h-6 w-6 text-emerald-600" />}
            value="98%"
            label="Customer Satisfaction"
          />
          <StatCard
            icon={<Award className="h-6 w-6 text-emerald-600" />}
            value="25+"
            label="Years Experience"
          />
          <StatCard
            icon={<Shield className="h-6 w-6 text-emerald-600" />}
            value="100%"
            label="Quality Guaranteed"
          />
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Ready to Find Your Perfect Vehicle?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact our sales team today to schedule a visit or test drive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-emerald-600 text-white hover:bg-emerald-700"
            >
              <Link to="/inventory">View Our Inventory</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact Sales Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="rounded-xl border border-gray-200 bg-white shadow-sm">
      <CardContent className="p-6 text-center">
        <div className="flex justify-center mb-4">{icon}</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}

function ProcessStep({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="h-12 w-12 rounded-full bg-emerald-600 text-white flex items-center justify-center text-lg font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <Card className="rounded-xl border border-gray-200 bg-white shadow-sm">
      <CardContent className="p-6 text-center">
        <div className="flex justify-center mb-3">{icon}</div>
        <div className="text-3xl font-bold text-emerald-600 mb-1">{value}</div>
        <div className="text-sm text-gray-600">{label}</div>
      </CardContent>
    </Card>
  );
}
