import FacebookSection from "./(app)/sections/facebookAds";
import GoogleSection from "./(app)/sections/googleAds";
import KeyMetricsSection from "./(app)/sections/keyMetrics";
import RevenueMetrics from "./(app)/sections/revenueMetrics";
import AppLayout from "./components/appLayout";
import Header from "./(app)/header";

export default function Page() {
  return (
    <AppLayout>
      <main>
        <div className="p-5 flex flex-col gap-10">
          <Header title="Dashboard" />
          <KeyMetricsSection />
          <GoogleSection />
          <FacebookSection />
          <RevenueMetrics />
        </div>
      </main>
    </AppLayout>
  );
}
