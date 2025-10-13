import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Car,
  Calendar,
  MapPin,
  Clock,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function TestDrive() {
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
              Convenience
            </Badge>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 text-gray-900">
            Test Drives
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience your potential new vehicle firsthand with our
            comprehensive test drive program. We offer flexible scheduling and
            multiple routes to help you make the perfect choice.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <FeatureCard
            icon={<Calendar className="h-6 w-6 text-emerald-600" />}
            title="Flexible Scheduling"
            description="Schedule test drives at your convenience, including evenings and weekends."
          />
          <FeatureCard
            icon={<MapPin className="h-6 w-6 text-emerald-600" />}
            title="Home/Office Visits"
            description="We'll bring the vehicle to your location for maximum convenience."
          />
          <FeatureCard
            icon={<Car className="h-6 w-6 text-emerald-600" />}
            title="Multiple Routes"
            description="Choose from city, highway, or scenic routes to test different driving conditions."
          />
          <FeatureCard
            icon={<CheckCircle className="h-6 w-6 text-emerald-600" />}
            title="Expert Guidance"
            description="Professional sales consultants to answer questions and highlight features."
          />
        </div>

        {/* Test Drive Options */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Test Drive Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestDriveOption
              title="Showroom Test Drive"
              duration="30-45 minutes"
              location="Our dealership"
              features={[
                "Pre-scheduled appointments",
                "Multiple vehicle options",
                "Professional guidance",
                "Immediate availability",
                "Full feature demonstration",
              ]}
            />
            <TestDriveOption
              title="Home/Office Delivery"
              duration="1-2 hours"
              location="Your location"
              features={[
                "Vehicle delivered to you",
                "Extended test drive time",
                "Family/friends can participate",
                "Real-world driving conditions",
                "No pressure environment",
              ]}
            />
            <TestDriveOption
              title="Extended Test Drive"
              duration="24-48 hours"
              location="Your choice"
              features={[
                "Overnight test drive",
                "Daily driving experience",
                "Multiple route testing",
                "Full feature exploration",
                "Family evaluation time",
              ]}
            />
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            How to Schedule Your Test Drive
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ProcessStep
              step="1"
              title="Choose Your Vehicle"
              description="Browse our inventory and select the vehicle you'd like to test drive."
            />
            <ProcessStep
              step="2"
              title="Select Test Drive Type"
              description="Choose between showroom, delivery, or extended test drive options."
            />
            <ProcessStep
              step="3"
              title="Schedule Appointment"
              description="Book your preferred date and time through our online system."
            />
            <ProcessStep
              step="4"
              title="Experience & Decide"
              description="Test drive the vehicle and make your purchasing decision."
            />
          </div>
        </div>

        {/* Routes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Test Drive Routes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RouteCard
              title="City Route"
              duration="20 minutes"
              description="Navigate through city streets to test handling, acceleration, and comfort in urban conditions."
              icon={<MapPin className="h-6 w-6 text-emerald-600" />}
            />
            <RouteCard
              title="Highway Route"
              duration="25 minutes"
              description="Experience highway driving to test acceleration, stability, and fuel efficiency at higher speeds."
              icon={<Car className="h-6 w-6 text-emerald-600" />}
            />
            <RouteCard
              title="Scenic Route"
              duration="30 minutes"
              description="Enjoy a scenic drive through local areas to test comfort and features in a relaxed setting."
              icon={<CheckCircle className="h-6 w-6 text-emerald-600" />}
            />
          </div>
        </div>

        {/* Requirements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Test Drive Requirements
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Valid driver's license required
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Insurance verification</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Age 21 or older for extended drives
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Credit check for overnight drives
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Completed test drive agreement
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Schedule Your Test Drive
              </h3>
              <p className="text-gray-600 mb-6">
                Ready to experience your next vehicle? Schedule your test drive
                today and discover why our customers choose us for their
                automotive needs.
              </p>
              <div className="space-y-4">
                <Button
                  asChild
                  className="w-full bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  <Link to="/contact">Schedule Test Drive</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/inventory">Browse Vehicles</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Test Drive With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BenefitCard
              title="No Pressure Environment"
              description="Take your time to evaluate the vehicle without sales pressure"
              icon={<CheckCircle className="h-6 w-6 text-emerald-600" />}
            />
            <BenefitCard
              title="Expert Knowledge"
              description="Professional sales team with deep product knowledge"
              icon={<Car className="h-6 w-6 text-emerald-600" />}
            />
            <BenefitCard
              title="Flexible Options"
              description="Multiple test drive types to fit your schedule and needs"
              icon={<Calendar className="h-6 w-6 text-emerald-600" />}
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Ready to Test Drive?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Experience the difference quality makes. Schedule your test drive
            today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-emerald-600 text-white hover:bg-emerald-700"
            >
              <Link to="/contact">Schedule Test Drive</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/inventory">View Our Inventory</Link>
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

function TestDriveOption({
  title,
  duration,
  location,
  features,
}: {
  title: string;
  duration: string;
  location: string;
  features: string[];
}) {
  return (
    <Card className="rounded-xl border border-gray-200 bg-white shadow-sm">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="mb-4">
          <div className="text-lg font-semibold text-emerald-600">
            {duration}
          </div>
          <div className="text-sm text-gray-600">{location}</div>
        </div>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-sm text-gray-700"
            >
              <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
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

function RouteCard({
  title,
  duration,
  description,
  icon,
}: {
  title: string;
  duration: string;
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
        <div className="text-sm font-semibold text-emerald-600 mb-2">
          {duration}
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}

function BenefitCard({
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
