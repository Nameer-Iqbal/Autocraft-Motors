import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  CreditCard,
  CheckCircle,
  Shield,
  Percent,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Financing() {
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
              <CreditCard className="h-8 w-8 text-emerald-600" />
            </div>
            <Badge className="rounded-full bg-emerald-100 text-emerald-700 px-4 py-2 text-sm font-semibold">
              Easy Approval
            </Badge>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 text-gray-900">
            Financing Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get behind the wheel of your dream car with our flexible financing
            options. We work with multiple lenders to find the best rates and
            terms for your budget.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <FeatureCard
            icon={<Percent className="h-6 w-6 text-emerald-600" />}
            title="Competitive Interest Rates"
            description="Low rates starting from 2.9% APR for qualified buyers with excellent credit."
          />
          <FeatureCard
            icon={<CreditCard className="h-6 w-6 text-emerald-600" />}
            title="Lease Options"
            description="Flexible lease terms with low monthly payments and multiple mileage options."
          />
          <FeatureCard
            icon={<CheckCircle className="h-6 w-6 text-emerald-600" />}
            title="Credit Applications"
            description="Quick and easy online application process with instant pre-approval."
          />
          <FeatureCard
            icon={<Shield className="h-6 w-6 text-emerald-600" />}
            title="Insurance Partnerships"
            description="Seamless integration with top insurance providers for complete coverage."
          />
        </div>

        {/* Loan Types */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Financing Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <LoanTypeCard
              title="New Vehicle Financing"
              rate="Starting at 2.9% APR"
              term="Up to 84 months"
              features={[
                "Manufacturer incentives",
                "Extended warranties available",
                "Gap insurance included",
                "No prepayment penalties",
              ]}
            />
            <LoanTypeCard
              title="Used Vehicle Financing"
              rate="Starting at 4.9% APR"
              term="Up to 72 months"
              features={[
                "Certified pre-owned rates",
                "Comprehensive inspections",
                "Extended service contracts",
                "Flexible down payments",
              ]}
            />
            <LoanTypeCard
              title="Lease Programs"
              rate="Low monthly payments"
              term="24-48 months"
              features={[
                "Multiple mileage options",
                "Wear and tear protection",
                "Early termination options",
                "Purchase options available",
              ]}
            />
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ProcessStep
              step="1"
              title="Apply Online"
              description="Fill out our simple online application in just 5 minutes."
            />
            <ProcessStep
              step="2"
              title="Get Pre-Approved"
              description="Receive instant pre-approval with multiple rate options."
            />
            <ProcessStep
              step="3"
              title="Choose Your Vehicle"
              description="Shop with confidence knowing your budget and approval."
            />
            <ProcessStep
              step="4"
              title="Drive Away"
              description="Complete the paperwork and drive your new car home."
            />
          </div>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Choose Our Financing?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Competitive rates from multiple lenders
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Quick approval process</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Flexible payment terms</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    No hidden fees or charges
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Expert guidance throughout the process
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Get Started Today
              </h3>
              <p className="text-gray-600 mb-6">
                Ready to finance your next vehicle? Our financing specialists
                are here to help you find the best options for your budget and
                credit situation.
              </p>
              <div className="space-y-4">
                <Button
                  asChild
                  className="w-full bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  <Link to="/contact">Apply for Financing</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/inventory">Browse Vehicles</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Ready to Get Pre-Approved?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Start your financing application today and drive away in your dream
            car.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-emerald-600 text-white hover:bg-emerald-700"
          >
            <Link to="/contact">Apply Now</Link>
          </Button>
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

function LoanTypeCard({
  title,
  rate,
  term,
  features,
}: {
  title: string;
  rate: string;
  term: string;
  features: string[];
}) {
  return (
    <Card className="rounded-xl border border-gray-200 bg-white shadow-sm">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="mb-4">
          <div className="text-2xl font-bold text-emerald-600">{rate}</div>
          <div className="text-sm text-gray-600">{term}</div>
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
