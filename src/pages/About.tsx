import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { CalendarDays, Trophy, Heart, Star } from "lucide-react";

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 font-display">
            {t("aboutGreenwayMotors")}
            <span className="text-emerald-600"></span>
          </h1>
          <p className="mt-4 text-xl text-gray-600">{t("aboutSubtitle")}</p>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <Stat
            icon={<CalendarDays className="h-6 w-6 text-emerald-600" />}
            value="20+"
            label={t("yearsInBusiness")}
          />
          <Stat
            icon={<Trophy className="h-6 w-6 text-emerald-600" />}
            value="5,500+"
            label={t("vehiclesSold")}
          />
          <Stat
            icon={<Heart className="h-6 w-6 text-emerald-600" />}
            value="3,500+"
            label={t("happyCustomers")}
          />
          <Stat
            icon={<Star className="h-6 w-6 text-emerald-600" />}
            value="4.6/5"
            label={t("customerRating")}
          />
        </div>

        {/* Story + Mission */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-3 font-display">
                {t("ourStory")}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t("storyText1")}
                <br />
                <br />
                {t("storyText2")}
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-3 font-display">
                {t("ourMission")}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t("missionText")}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values (optional extra row) */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Value title={t("integrity")} text={t("integrityText")} />
          <Value title={t("quality")} text={t("qualityText")} />
          <Value title={t("service")} text={t("serviceText")} />
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
