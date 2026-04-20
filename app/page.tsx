"use client";

import AskDataPanel from "@/components/AskDataPanel";
import Header from "@/components/Header";
import InsightsPanel from "@/components/InsightsPanel";
import MetricCard from "@/components/MetricCard";
import PriceChart from "@/components/PriceChart";
import { aiInsights, chartData, metricCards } from "@/data/mockDashboardData";
import { useMarketData } from "@/hooks/useMarketData";
import { buildMetricCards } from "@/lib/market";

export default function HomePage() {

  const { data, loading, error } = useMarketData();

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <Header />
        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-300">
          Loading live market data...
        </div>
      </main>
    );
  }

  if (error || !data) {
    return (
      <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <Header />
        <div className="mt-6 rounded-2xl border border-red-500/30 bg-red-500/10 p-6 text-red-200">
          Failed to load market data: {error ?? "Unknown error"}
        </div>
      </main>
    );
  }

  const metricCards = buildMetricCards(data);

  const aiInsights = {
    title: "AI Market Summary",
    summary: data.stats.change24h >= 0
        ? "BTC is showing positive 24-hour momentum with healthy trading activity."
        : "BTC is under short-term pressure with negative 24-hour movement.",
    trend:
      data.stats.change24h >= 0
        ? "Short-term trend is upward based on current 24h movement."
        : "Short-term trend is downward based on current 24h movement.",
    risk:
      "This is a rule-based placeholder. Day 4 will replace this with real AI-generated insight.",
  };
  
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
            <PriceChart data={data.chart} />
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
