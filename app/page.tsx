"use client";

import AskDataPanel from "@/components/AskDataPanel";
import ChartStats from "@/components/ChartStats";
import DashboardSkeleton from "@/components/DashboardSkeleton";
import Header from "@/components/Header";
import InsightsPanel from "@/components/InsightsPanel";
import MetricCard from "@/components/MetricCard";
import PriceChart from "@/components/PriceChart";
import RangeSelector from "@/components/RangeSelector";
import Sidebar from "@/components/Sidebar";
import TrafficChart from "@/components/TrafficChart";
import { useMarketData } from "@/hooks/useMarketData";
import { calculateChartStats, filterChartDataByRange, TimeRange } from "@/lib/chart";
import { buildMetricCards } from "@/lib/marketCards";
import { AIInsightResponse } from "@/types/ai";
import { useMemo, useState, useEffect } from "react";

export default function HomePage() {

  const { data, loading, error } = useMarketData();
  const [selectedRange, setSelectedRange] = useState<TimeRange>("1D");
  const [aiInsight, setAiInsight] = useState<AIInsightResponse | null>(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [hasFetchedAI, setHasFetchedAI] = useState(false);

  useEffect(() => {
  if (!data || hasFetchedAI) return;

  async function fetchAI() {
    try {
      setAiLoading(true);

      const res = await fetch("/api/ai-insights", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        console.error("AI API error:", result);
        return;
      }

      setAiInsight(result);
      setHasFetchedAI(true);
    } catch (err) {
      console.error("AI fetch error:", err);
    } finally {
      setAiLoading(false);
    }
  }

  fetchAI();
}, [data, hasFetchedAI]);

  const filteredChartData = useMemo(() => {
    if (!data) return [];
    return filterChartDataByRange(data.chart, selectedRange);
  }, [data, selectedRange]);

  const metricCards = useMemo(() => {
    if (!data) return [];
    return buildMetricCards(data);
  }, [data]);

  const chartStats = useMemo(() => {
    return calculateChartStats(filteredChartData)
  }, [filteredChartData]);

  if (loading) {
    return <DashboardSkeleton />;
  }

  if (error || !data) {
    return (
      <main className="min-h-screen bg-slate-950 text-white text-xs lg:text-sm">
        <Sidebar />
        <div className="ml-14 lg:ml-20 flex flex-col min-h-screen">
          <div className="mx-auto max-w-7xl p-6 flex-1">
            <Header />
            <div className="mt-6 rounded-2xl border border-red-500/30 bg-red-500/10 p-6 text-red-200">
              Failed to load market data: {error ?? "Unknown error"}
            </div>
          </div>
        </div>
      </main>
    );
  }
  return (
    <main className="min-h-screen bg-slate-950 text-white text-xs lg:text-sm">
      <Sidebar />
      <div className="ml-14 lg:ml-20 flex flex-col min-h-screen">
        <div className="mx-auto w-full max-w-7xl p-4 lg:p-6 flex-1">
          <Header />

          <section className="grid grid-cols-1 gap-2 md:gap-3 lg:gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {metricCards.map((item) => (
              <MetricCard key={item.title} item={item} />
            ))}
          </section>

          <section className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <PriceChart
                className="mb-4"
                data={filteredChartData}
                headerRight={
                  <RangeSelector
                    selected={selectedRange}
                    onChange={setSelectedRange}
                  />
                }
              />

              <ChartStats
                high={chartStats.high}
                low={chartStats.low}
                avg={chartStats.avg}
              />
            </div>
            <div className="xl:col-span-1">
              <TrafficChart />
            </div>
          </section>

          <section className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="md:col-span-1 lg:col-span-2">
              <AskDataPanel data={data} />
            </div>
            <div className="lg:col-span-1">
              <InsightsPanel insight={{
                title: "Ai Market Summary",
                summary: aiLoading ? "Generating AI insights..." : aiInsight?.summary || "No data available",
                trend: aiInsight?.trend || "No data available",
                risk: aiInsight?.risk || "No data available",
              }} />
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
