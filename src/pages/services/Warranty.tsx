import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  ShieldCheck,
  CheckCircle,
  Phone,
  Award,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Warranty() {
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
              <ShieldCheck className="h-8 w-8 text-emerald-600" />
            </div>
            <Badge className="rounded-full bg-emerald-100 text-emerald-700 px-4 py-2 text-sm font-semibold">
              Peace of Mind
            </Badge>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 text-gray-900">
            Warranty & Protection
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Protect your investment with our comprehensive warranty and
            protection programs. Drive with confidence knowing you're covered
            for unexpected repairs and incidents.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <FeatureCard
            icon={<ShieldCheck className="h-6 w-6 text-emerald-600" />}
            title="Extended Warranties"
            description="Comprehensive coverage beyond manufacturer warranty with flexible terms."
          />
          <FeatureCard
            icon={<Phone className="h-6 w-6 text-emerald-600" />}
            title="Roadside Assistance"
            description="24/7 emergency assistance for towing, jump-starts, and lockout services."
          />
          <FeatureCard
            icon={<CheckCircle className="h-6 w-6 text-emerald-600" />}
            title="Gap & Tire Protection"
            description="Protection against depreciation and tire/wheel damage from road hazards."
          />
          <FeatureCard
            icon={<Award className="h-6 w-6 text-emerald-600" />}
            title="Claims Support"
            description="Dedicated claims specialists to guide you through the process."
          />
        </div>

        {/* Protection Plans */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Protection Plans Available
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProtectionPlan
              title="Extended Warranty"
              price="Starting at $1,499"
              coverage="Up to 10 years/100,000 miles"
              features={[
                "Engine and transmission coverage",
                "Electrical system protection",
                "Air conditioning coverage",
                "Steering and suspension",
                "Transferable to new owner",
              ]}
            />
            <ProtectionPlan
              title="Roadside Assistance"
              price="Starting at $99/year"
              coverage="24/7 nationwide coverage"
              features={[
                "Towing up to 100 miles",
                "Jump-start service",
                "Lockout assistance",
                "Flat tire service",
                "Emergency fuel delivery",
              ]}
            />
            <ProtectionPlan
              title="Tire & Wheel Protection"
              price="Starting at $299"
              coverage="Up to 5 years protection"
              features={[
                "Road hazard damage coverage",
                "Tire replacement or repair",
                "Wheel repair or replacement",
                "No deductible required",
                "Nationwide service network",
              ]}
            />
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Choose Our Protection Plans?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BenefitCard
              title="Nationwide Coverage"
              description="Service available at thousands of locations across the country"
              icon={<Award className="h-6 w-6 text-emerald-600" />}
            />
            <BenefitCard
              title="No Deductibles"
              description="Most plans include zero-deductible coverage for your peace of mind"
              icon={<CheckCircle className="h-6 w-6 text-emerald-600" />}
            />
            <BenefitCard
              title="Transferable"
              description="Extend your protection to the next owner, increasing resale value"
              icon={<ShieldCheck className="h-6 w-6 text-emerald-600" />}
            />
            <BenefitCard
              title="Easy Claims"
              description="Simple claims process with dedicated support specialists"
              icon={<Phone className="h-6 w-6 text-emerald-600" />}
            />
            <BenefitCard
              title="Flexible Terms"
              description="Choose coverage periods that fit your needs and budget"
              icon={<Star className="h-6 w-6 text-emerald-600" />}
            />
            <BenefitCard
              title="Renewable"
              description="Extend your coverage with renewable protection plans"
              icon={<Award className="h-6 w-6 text-emerald-600" />}
            />
          </div>
        </div>

        {/* Coverage Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                What's Covered
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Engine and transmission repairs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Electrical system components
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Air conditioning system</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Steering and suspension</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Fuel system components</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Get Protected Today
              </h3>
              <p className="text-gray-600 mb-6">
                Don't wait until it's too late. Protect your vehicle investment
                with our comprehensive warranty and protection plans. Get a
                quote today.
              </p>
              <div className="space-y-4">
                <Button
                  asChild
                  className="w-full bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  <Link to="/contact">Get Protection Quote</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/contact">Learn More</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <StatCard
            icon={<ShieldCheck className="h-6 w-6 text-emerald-600" />}
            value="50,000+"
            label="Protected Vehicles"
          />
          <StatCard
            icon={<CheckCircle className="h-6 w-6 text-emerald-600" />}
            value="98%"
            label="Claim Approval Rate"
          />
          <StatCard
            icon={<Award className="h-6 w-6 text-emerald-600" />}
            value="$2M+"
            label="Claims Paid"
          />
          <StatCard
            icon={<Star className="h-6 w-6 text-emerald-600" />}
            value="4.9/5"
            label="Customer Rating"
          />
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Protect Your Investment Today
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Don't leave your vehicle unprotected. Get comprehensive coverage
            that gives you peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-emerald-600 text-white hover:bg-emerald-700"
            >
              <Link to="/contact">Get Protection Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact Us</Link>
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

function ProtectionPlan({
  title,
  price,
  coverage,
  features,
}: {
  title: string;
  price: string;
  coverage: string;
  features: string[];
}) {
  return (
    <Card className="rounded-xl border border-gray-200 bg-white shadow-sm">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="mb-4">
          <div className="text-2xl font-bold text-emerald-600">{price}</div>
          <div className="text-sm text-gray-600">{coverage}</div>
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
