import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Wrench,
  CheckCircle,
  Shield,
  Calendar,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Maintenance() {
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
              <Wrench className="h-8 w-8 text-emerald-600" />
            </div>
            <Badge className="rounded-full bg-emerald-100 text-emerald-700 px-4 py-2 text-sm font-semibold">
              Expert Care
            </Badge>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 text-gray-900">
            Maintenance & Repairs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Keep your vehicle running at its best with our comprehensive
            maintenance and repair services. Our certified technicians use OEM
            parts and cutting-edge diagnostic equipment.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <FeatureCard
            icon={<Shield className="h-6 w-6 text-emerald-600" />}
            title="OEM Parts & Fluids"
            description="Genuine manufacturer parts and premium fluids for optimal performance."
          />
          <FeatureCard
            icon={<Calendar className="h-6 w-6 text-emerald-600" />}
            title="Scheduled Services"
            description="Regular maintenance schedules to keep your vehicle in peak condition."
          />
          <FeatureCard
            icon={<Wrench className="h-6 w-6 text-emerald-600" />}
            title="Diagnostics & Repairs"
            description="Advanced diagnostic equipment for accurate problem identification."
          />
          <FeatureCard
            icon={<Award className="h-6 w-6 text-emerald-600" />}
            title="Detailing Packages"
            description="Professional detailing services to keep your vehicle looking pristine."
          />
        </div>

        {/* Services */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Our Service Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCategory
              title="Routine Maintenance"
              price="Starting at $89"
              duration="1-2 hours"
              services={[
                "Oil changes with premium filters",
                "Tire rotation and balancing",
                "Brake inspection and service",
                "Fluid level checks and top-offs",
                "Battery testing and replacement",
              ]}
            />
            <ServiceCategory
              title="Major Repairs"
              price="Starting at $199"
              duration="4-8 hours"
              services={[
                "Engine diagnostics and repairs",
                "Transmission service and repair",
                "Suspension and steering work",
                "Electrical system repairs",
                "AC and heating system service",
              ]}
            />
            <ServiceCategory
              title="Premium Detailing"
              price="Starting at $149"
              duration="3-6 hours"
              services={[
                "Complete interior and exterior wash",
                "Paint correction and protection",
                "Leather conditioning",
                "Engine bay cleaning",
                "Ceramic coating application",
              ]}
            />
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Our Service Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ProcessStep
              step="1"
              title="Schedule Service"
              description="Book your appointment online or call our service department."
            />
            <ProcessStep
              step="2"
              title="Vehicle Inspection"
              description="Comprehensive inspection to identify all service needs."
            />
            <ProcessStep
              step="3"
              title="Service Estimate"
              description="Detailed estimate with pricing and timeline for approval."
            />
            <ProcessStep
              step="4"
              title="Quality Service"
              description="Expert service performed with genuine parts and warranty."
            />
          </div>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Choose Our Service?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Certified ASE technicians
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Latest diagnostic equipment
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Genuine OEM parts only</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    12-month service warranty
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Complimentary loaner vehicles
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Schedule Your Service
              </h3>
              <p className="text-gray-600 mb-6">
                Ready to give your vehicle the care it deserves? Schedule your
                service appointment today and experience the difference of
                expert automotive care.
              </p>
              <div className="space-y-4">
                <Button
                  asChild
                  className="w-full bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  <Link to="/contact">Schedule Service</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/services">View All Services</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Specializations */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Our Specializations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SpecializationCard
              title="Luxury Vehicles"
              description="Specialized service for high-end luxury brands with manufacturer-trained technicians."
              icon={<Award className="h-6 w-6 text-emerald-600" />}
            />
            <SpecializationCard
              title="Performance Cars"
              description="Expert care for sports cars and performance vehicles with specialized equipment."
              icon={<Wrench className="h-6 w-6 text-emerald-600" />}
            />
            <SpecializationCard
              title="Classic Cars"
              description="Restoration and maintenance services for classic and vintage automobiles."
              icon={<Shield className="h-6 w-6 text-emerald-600" />}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <StatCard
            icon={<Wrench className="h-6 w-6 text-emerald-600" />}
            value="25+"
            label="Years Experience"
          />
          <StatCard
            icon={<CheckCircle className="h-6 w-6 text-emerald-600" />}
            value="98%"
            label="First-Time Fix Rate"
          />
          <StatCard
            icon={<Award className="h-6 w-6 text-emerald-600" />}
            value="50,000+"
            label="Vehicles Serviced"
          />
          <StatCard
            icon={<Shield className="h-6 w-6 text-emerald-600" />}
            value="100%"
            label="Customer Satisfaction"
          />
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Ready to Service Your Vehicle?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Trust our expert technicians to keep your vehicle running smoothly
            and safely.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-emerald-600 text-white hover:bg-emerald-700"
            >
              <Link to="/contact">Schedule Service</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Get Service Quote</Link>
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

function ServiceCategory({
  title,
  price,
  duration,
  services,
}: {
  title: string;
  price: string;
  duration: string;
  services: string[];
}) {
  return (
    <Card className="rounded-xl border border-gray-200 bg-white shadow-sm">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="mb-4">
          <div className="text-2xl font-bold text-emerald-600">{price}</div>
          <div className="text-sm text-gray-600">{duration}</div>
        </div>
        <ul className="space-y-2">
          {services.map((service, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-sm text-gray-700"
            >
              <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
              <span>{service}</span>
            </li>
          ))}
        </ul>
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

function SpecializationCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <Card className="rounded-xl border border-gray-200 bg-white shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-3">
          {icon}
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
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
