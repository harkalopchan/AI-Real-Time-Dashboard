import AskDataPanel from "@/components/AskDataPanel";
import Header from "@/components/Header";
import InsightsPanel from "@/components/InsightsPanel";
import MetricCard from "@/components/MetricCard";
import PriceChart from "@/components/PriceChart";
import { aiInsights, chartData, metricCards } from "@/data/mockDashboardData";

export default function HomePage() {
  return (

    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl p-6">
        <Header />

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {metricCards.map((item) => (
            <MetricCard key={item.title} item={item} />
          ))}
        </section>

        <section className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <PriceChart data={chartData} />
          </div>
          <div className="xl:col-span-1">
            <InsightsPanel insight={aiInsights} />
          </div>
        </section>
        
        <section className="mt-4">
          <AskDataPanel />
        </section>

      </div>
    </main>
  );
}
