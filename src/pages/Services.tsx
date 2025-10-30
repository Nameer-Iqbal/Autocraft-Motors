import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Car,
  CreditCard,
  RefreshCw,
  Wrench,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function Services() {
  const { t } = useLanguage();

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
            {t("completeAutomotiveSolutions")}
            <span className="text-emerald-600"></span>
          </h1>
          <p className="mt-4 text-xl text-gray-600">{t("servicesSubtitle")}</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Car className="h-6 w-6 text-emerald-600" />}
            label={t("bestSelection")}
            title={t("carSales")}
            points={[
              t("certifiedPreOwned"),
              t("newVehicleSales"),
              t("tradeInEvaluations"),
              t("vehicleHistoryReports"),
            ]}
            link="/services/car-sales"
          />

          <ServiceCard
            icon={<CreditCard className="h-6 w-6 text-emerald-600" />}
            label={t("easyApproval")}
            title={t("financingSolutions")}
            points={[
              t("competitiveInterestRates"),
              t("leaseOptions"),
              t("creditApplications"),
              t("insurancePartnerships"),
            ]}
            link="/services/financing"
          />

          <ServiceCard
            icon={<RefreshCw className="h-6 w-6 text-emerald-600" />}
            label={t("bestValue")}
            title={t("tradeInProgram")}
            points={[
              t("fairMarketValuations"),
              t("instantAppraisals"),
              t("hassleFreeProcess"),
              t("sameDayTransactions"),
            ]}
            link="/services/trade-in"
          />

          <ServiceCard
            icon={<Wrench className="h-6 w-6 text-emerald-600" />}
            label={t("expertCare")}
            title={t("maintenanceRepairs")}
            points={[
              t("oemPartsFluids"),
              t("scheduledServices"),
              t("diagnosticsRepairs"),
              t("detailingPackages"),
            ]}
            link="/services/maintenance"
          />

          <ServiceCard
            icon={<ShieldCheck className="h-6 w-6 text-emerald-600" />}
            label={t("peaceOfMind")}
            title={t("warrantyProtection")}
            points={[
              t("extendedWarranties"),
              t("roadsideAssistance"),
              t("gapTireProtection"),
              t("claimsSupport"),
            ]}
            link="/services/warranty"
          />

          <ServiceCard
            icon={<Car className="h-6 w-6 text-emerald-600" />}
            label={t("convenience")}
            title={t("testDrives")}
            points={[
              t("flexibleScheduling"),
              t("homeOfficeVisits"),
              t("multipleRoutes"),
              t("expertGuidance"),
            ]}
            link="/services/test-drive"
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  label,
  title,
  points,
  link,
}: {
  icon: React.ReactNode;
  label: string;
  title: string;
  points: string[];
  link: string;
}) {
  return (
    <Card className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-12 w-12 rounded-full bg-emerald-50 flex items-center justify-center">
            {icon}
          </div>
          <Badge className="rounded-full bg-emerald-100 text-emerald-700 px-3 py-1 text-xs font-semibold cursor-default pointer-events-none">
            {label}
          </Badge>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">
          {/* Optional short description per card; keep concise or remove if not needed */}
        </p>

        <ul className="space-y-2 mb-6">
          {points.map((p, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-700">
              <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500 inline-block" />
              <span className="text-sm">{p}</span>
            </li>
          ))}
        </ul>

        {/* <Button
          asChild
          size="sm"
          className="bg-emerald-600 text-white hover:bg-emerald-600"
        >
          <Link to={link}>
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button> */}
      </CardContent>
    </Card>
  );
}
