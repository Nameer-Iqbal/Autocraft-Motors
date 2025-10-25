import { Clock } from "lucide-react";

export default function ComingSoon() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 lg:p-12">
          <div className="flex flex-col items-center text-center">
            <div className="bg-emerald-100 rounded-full p-4 mb-6">
              <Clock className="h-8 w-8 text-emerald-600" />
            </div>

            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Coming Soon
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl">
              We're working on adding exciting new vehicles to our inventory.
              Check back soon to see our latest additions!
            </p>

            <div className="mt-8 pt-6 border-t border-gray-200 w-full">
              <p className="text-sm text-gray-500">
                Stay tuned for updates on our newest arrivals
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
