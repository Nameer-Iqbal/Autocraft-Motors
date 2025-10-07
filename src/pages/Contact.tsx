// src/pages/Contact.tsx
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Navigation,
  PhoneCall,
  AtSign,
} from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
            Get in Touch<span className="text-emerald-600"></span>
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Ready to find your perfect vehicle? Our team is here to help at
            every step.
          </p>
        </div>

        {/* Info cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <InfoCard
            icon={<MapPin className="h-6 w-6 text-emerald-600" />}
            title="Visit Our Showroom"
            primary="123 Luxury Drive, Auto City, AC 12345"
            secondary="Our state-of-the-art showroom features the latest models."
          />
          <InfoCard
            icon={<Phone className="h-6 w-6 text-emerald-600" />}
            title="Call Us"
            primary="(555) 123-4567"
            secondary="Speak directly with our automotive experts."
          />
          <InfoCard
            icon={<Mail className="h-6 w-6 text-emerald-600" />}
            title="Email Us"
            primary="info@elitemotors.com"
            secondary="Get detailed info about any vehicle."
          />
          <InfoCard
            icon={<Clock className="h-6 w-6 text-emerald-600" />}
            title="Business Hours"
            primary="Mon–Sat: 9AM–8PM, Sun: 11AM–6PM"
            secondary="Extended hours for your convenience."
          />
        </div>

        {/* Form + Quick actions */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <Card className="lg:col-span-2 rounded-2xl border border-gray-200 bg-white shadow-sm">
            <CardContent className="p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Send us a Message
              </h2>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Full name"
                  className="bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400
                             focus-visible:ring-emerald-500 focus-visible:border-emerald-500"
                />
                <Input
                  type="email"
                  placeholder="Email address"
                  className="bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400
                             focus-visible:ring-emerald-500 focus-visible:border-emerald-500"
                />
                <Input
                  placeholder="Phone (optional)"
                  className="bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400
                             focus-visible:ring-emerald-500 focus-visible:border-emerald-500"
                />
                <Input
                  placeholder="Subject"
                  className="bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400
                             focus-visible:ring-emerald-500 focus-visible:border-emerald-500"
                />

                <div className="md:col-span-2">
                  <Textarea
                    rows={6}
                    placeholder="Your message…"
                    className="bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400
                               focus-visible:ring-emerald-500 focus-visible:border-emerald-500"
                  />
                </div>

                <div className="md:col-span-2 flex flex-col sm:flex-row gap-3 mt-2">
                  <Button className="bg-emerald-600 text-white hover:bg-emerald-700">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Quick actions */}
          <Card className="rounded-2xl border border-gray-200 bg-white shadow-sm">
            <CardContent className="p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Quick Actions
              </h2>
              <div className="space-y-3">
                <Button
                  className="w-full bg-black text-white hover:bg-emerald-600"
                  asChild
                >
                  <a href="tel:+15551234567">
                    Call Now
                    <PhoneCall className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  className="w-full bg-emerald-600 text-white hover:bg-emerald-700"
                  asChild
                >
                  <a
                    href="https://maps.google.com/?q=123+Luxury+Drive,+Auto+City,+AC+12345"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get Directions
                    <Navigation className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-white text-emerald-600 border-emerald-600 hover:bg-emerald-600 hover:text-white"
                  asChild
                >
                  <a href="mailto:info@elitemotors.com">
                    Email Us
                    <Mail className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              <p className="mt-6 text-sm text-gray-600">
                Prefer to chat later? Send your message and our team will reach
                out within one business day.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Optional map (static placeholder) */}
        <div className="mt-12">
          <div className="rounded-2xl overflow-hidden border border-gray-200">
            {/* Replace with your map embed if you like */}
            <iframe
              title="Showroom Location"
              className="w-full h-72"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537363153169!3d-37.81627974201266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAwLjYiUyAxNDTCsDU3JzE1LjQiRQ!5e0!3m2!1sen!2sus!4v1700000000000"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- helpers ---------- */

function InfoCard({
  icon,
  title,
  primary,
  secondary,
}: {
  icon: React.ReactNode;
  title: string;
  primary: string;
  secondary: string;
}) {
  return (
    <Card className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow">
      <CardContent className="p-6 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm font-medium text-gray-900">{primary}</p>
        <p className="mt-1 text-sm text-gray-600">{secondary}</p>
      </CardContent>
    </Card>
  );
}
