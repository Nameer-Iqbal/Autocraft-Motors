import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  RefreshCw,
  DollarSign,
  Clock,
  CheckCircle,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function TradeIn() {
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
              <RefreshCw className="h-8 w-8 text-emerald-600" />
            </div>
            <Badge className="rounded-full bg-emerald-100 text-emerald-700 px-4 py-2 text-sm font-semibold">
              Best Value
            </Badge>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 text-gray-900">
            Trade-In Program
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get the best value for your current vehicle with our comprehensive
            trade-in program. We offer fair market valuations and instant
            appraisals to make your upgrade seamless.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <FeatureCard
            icon={<DollarSign className="h-6 w-6 text-emerald-600" />}
            title="Fair Market Valuations"
            description="Get top dollar for your vehicle with our competitive market-based pricing."
          />
          <FeatureCard
            icon={<Clock className="h-6 w-6 text-emerald-600" />}
            title="Instant Appraisals"
            description="Quick 15-minute evaluations with immediate offers on the spot."
          />
          <FeatureCard
            icon={<CheckCircle className="h-6 w-6 text-emerald-600" />}
            title="Hassle-Free Process"
            description="Simple paperwork and seamless transaction process with no hidden fees."
          />
          <FeatureCard
            icon={<Award className="h-6 w-6 text-emerald-600" />}
            title="Same-Day Transactions"
            description="Complete your trade-in and drive away in your new vehicle the same day."
          />
        </div>

        {/* Process Section */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            How Our Trade-In Process Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ProcessStep
              step="1"
              title="Schedule Appointment"
              description="Book a convenient time for your vehicle appraisal."
            />
            <ProcessStep
              step="2"
              title="Vehicle Inspection"
              description="Professional inspection of your vehicle's condition and features."
            />
            <ProcessStep
              step="3"
              title="Receive Offer"
              description="Get your fair market value offer based on current market data."
            />
            <ProcessStep
              step="4"
              title="Complete Trade"
              description="Accept the offer and complete your trade-in transaction."
            />
          </div>
        </div>

        {/* Valuation Factors */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            What We Consider in Your Valuation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ValuationFactor
              title="Vehicle Condition"
              description="Overall condition, mileage, and maintenance history"
              icon={<CheckCircle className="h-6 w-6 text-emerald-600" />}
            />
            <ValuationFactor
              title="Market Demand"
              description="Current market trends and buyer demand for your vehicle"
              icon={<DollarSign className="h-6 w-6 text-emerald-600" />}
            />
            <ValuationFactor
              title="Features & Options"
              description="Premium features, technology packages, and special equipment"
              icon={<Award className="h-6 w-6 text-emerald-600" />}
            />
            <ValuationFactor
              title="Service History"
              description="Complete maintenance records and service documentation"
              icon={<RefreshCw className="h-6 w-6 text-emerald-600" />}
            />
            <ValuationFactor
              title="Accident History"
              description="Clean accident history and proper repairs"
              icon={<CheckCircle className="h-6 w-6 text-emerald-600" />}
            />
            <ValuationFactor
              title="Location & Market"
              description="Regional market conditions and local buyer preferences"
              icon={<DollarSign className="h-6 w-6 text-emerald-600" />}
            />
          </div>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Trade With Us?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Competitive market-based pricing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    No appointment necessary
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Instant appraisal and offer
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Transparent valuation process
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Trade value applies to tax savings
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Get Your Instant Quote
              </h3>
              <p className="text-gray-600 mb-6">
                Want to know what your vehicle is worth? Get an instant online
                estimate or visit us for a professional appraisal.
              </p>
              <div className="space-y-4">
                <Button
                  asChild
                  className="w-full bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  <Link to="/contact">Get Instant Quote</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/inventory">Browse New Vehicles</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <StatCard
            icon={<DollarSign className="h-6 w-6 text-emerald-600" />}
            value="$2.5M+"
            label="Paid to Customers"
          />
          <StatCard
            icon={<Award className="h-6 w-6 text-emerald-600" />}
            value="15,000+"
            label="Vehicles Traded"
          />
          <StatCard
            icon={<CheckCircle className="h-6 w-6 text-emerald-600" />}
            value="99%"
            label="Satisfied Customers"
          />
          <StatCard
            icon={<Clock className="h-6 w-6 text-emerald-600" />}
            value="15 min"
            label="Average Appraisal Time"
          />
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Ready to Trade Your Vehicle?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get the best value for your trade-in and drive away in your dream
            car today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-emerald-600 text-white hover:bg-emerald-700"
            >
              <Link to="/contact">Get Trade-In Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/inventory">View Inventory</Link>
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

function ValuationFactor({
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
