import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, Trophy, Heart, Star } from "lucide-react";

export default function About() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
            About Greenway Motors<span className="text-emerald-600"></span>
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            For over 20 years, Greenway Motors has been the premier destination
            for luxury and premium vehicles—setting the standard for excellence
            in automotive sales and service.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <Stat
            icon={<CalendarDays className="h-6 w-6 text-emerald-600" />}
            value="20+"
            label="Years in Business"
          />
          <Stat
            icon={<Trophy className="h-6 w-6 text-emerald-600" />}
            value="5,500+"
            label="Vehicles Sold"
          />
          <Stat
            icon={<Heart className="h-6 w-6 text-emerald-600" />}
            value="3,500+"
            label="Happy Customers"
          />
          <Stat
            icon={<Star className="h-6 w-6 text-emerald-600" />}
            value="4.6/5"
            label="Customer Rating"
          />
        </div>

        {/* Story + Mission */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Our Story
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Established in 2005, Greenway Motors set out with a clear vision
                — to redefine the car-buying experience through luxury, quality,
                and trust. What started as a family initiative has evolved into
                a globally recognized dealership with operations across Japan,
                Pakistan, Africa, and the UAE.
                <br />
                <br />
                Specializing in the export of premium vehicles, we take pride in
                connecting customers worldwide with the finest automobiles.
                Guided by integrity, reliability, and customer satisfaction,
                Greenway Motors continues to drive excellence in the global
                automotive market.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                At Greenway Motors, our mission is to make premium vehicles
                accessible through transparent and competitive pricing while
                ensuring seamless global exports. We strive to build lasting
                relationships with our customers by delivering unmatched
                reliability, exceptional service, and complete satisfaction at
                every step — from selection to shipment and beyond.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values (optional extra row) */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Value
            title="Integrity"
            text="Honest guidance and transparent processes—always."
          />
          <Value
            title="Quality"
            text="Certified vehicles, rigorous inspections, OEM care."
          />
          <Value
            title="Service"
            text="Personalized attention before and after purchase."
          />
        </div>
      </div>
    </section>
  );
}

function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50">
        {icon}
      </div>
      <div className="text-2xl font-extrabold text-gray-900">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}

function Value({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{text}</p>
    </div>
  );
}
