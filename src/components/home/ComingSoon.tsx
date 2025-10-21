export default function ComingSoon() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            Coming Soon
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            New vehicles and exciting updates are on their way. Stay tuned for
            our latest additions to the inventory.
          </p>
        </div>

        {/* Coming soon content placeholder */}
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-6">
            <svg
              className="w-10 h-10 text-emerald-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Exciting Updates Coming Soon
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're working hard to bring you the latest vehicles and features.
            Check back soon for new arrivals and updates.
          </p>
        </div>
      </div>
    </section>
  );
}
