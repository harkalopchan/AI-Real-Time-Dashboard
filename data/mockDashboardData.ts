import { ChartPoint, Insight, MetricCardData } from "./dashboard";

export const metricCards: MetricCardData[] = [
    {
        title: "BTC Price",
        value: "$64,200",
        change: "+2.4%",
        trend: "up",
    }, {
        title: "24h Volume",
        value: "28.4B",
        change: "+5.1%",
        trend: "up",
    }, {
        title: "Market Volatility",
        value: "Moderate",
        change: "-0.8%",
        trend: "down",
    }, {
        title: "Status",
        value: "Live",
        change: "Streaming",
        trend: "neutral",
    }
];

export const chartData: ChartPoint[] = [
    { time: "09:00", price: 62800 },
    { time: "10:00", price: 63150 },
    { time: "11:00", price: 63500 },
    { time: "12:00", price: 63320 },
    { time: "13:00", price: 63890 },
    { time: "14:00", price: 64100 },
    { time: "15:00", price: 64200 },
];

export const aiInsights: Insight = {
    title: "AI Market Summary",
    summary:"BTC shows a steady upward trend over the selected period, with mild volatility and positive short-term momentum.",
    trend: "Upward momentum with stable intraday pullbacks.",
    risk: "Watch for volatility spikes around high-volume trading windows.",
};