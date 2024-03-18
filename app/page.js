import MarketingLayout from "./components/marketingLayout";

export default function Page() {
  return (
    <MarketingLayout>
      <main>
        <section className="max-w-7xl mx-auto p-5 md:p-10">
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl md:text-6xl text-center">
              The real-time financial dashboard for growing SaaS companies.
            </h1>
            <p className="md:text-xl opacity-60 leading-relaxed max-w-2xl mx-auto text-center">
              Rotini helps SaaS companies understand their PPC efforts and other
              growth marketing metrics in a single, real-time dashboard that
              integrates with all the tools you already use.
            </p>
            <div className="flex flex-col md:flex-row gap-5 max-w-2xl w-full mx-auto">
              <input
                className="bg-black w-full flex-grow bg-opacity-5 px-5 py-3 rounded-lg placeholder:text-gray-500"
                placeholder="Your email"
              />
              <button className="w-full md:w-fit flex-shrink-0 bg-amber-300 px-5 py-3 rounded-lg">
                Get early access
              </button>
            </div>
          </div>
        </section>
      </main>
    </MarketingLayout>
  );
}
