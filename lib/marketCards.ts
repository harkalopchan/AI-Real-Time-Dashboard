import { MetricCardData } from "@/data/dashboard";
import { MarketData } from "@/types/market";

export function buildMetricCards(data: MarketData): MetricCardData[] {
  return [
    {
      title: "BTC Price",
      value: `$${data.stats.price.toLocaleString("en-US", {
        maximumFractionDigits: 0,
      })}`,
      change: `${data.stats.change24h >= 0 ? "+" : ""}${data.stats.change24h.toFixed(2)}%`,
      trend: (data.stats.change24h >= 0 ? "up" : "down") as MetricCardData['trend'],
    },
    {
      title: "24h Volume",
      value: `$${data.stats.volume24h.toLocaleString("en-US", {
        maximumFractionDigits: 0,
      })}`,
      change: data.stats.change24h >= 0 ? "Bullish" : "Bearish",
      trend: (data.stats.change24h >= 0 ? "up" : "down") as MetricCardData['trend'],
    },
    {
      title: "Status",
      value: data.stats.status,
      change: "Polling",
      trend: "neutral",
    },
  ];
}
