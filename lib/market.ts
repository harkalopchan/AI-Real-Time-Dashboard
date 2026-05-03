import { MarketChartPoint, MarketData } from "@/types/market";

const COINGECKO_PRICE_URL = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true&include_24hr_vol=true';
const COINGECKO_CHART_URL = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1&interval=hourly';

function formatTimeLabel(timestamp: number): string {
    return new Date(timestamp).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    });
}

async function fetchPriceStats() {
    const res = await fetch(COINGECKO_PRICE_URL, {
        next: { revalidate: 0 },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch price stats');
    }

    const data = await res.json();
    const btc = data.bitcoin;

    return {
        price: btc.usd,
        change24h: btc.usd_24h_change,
        volume24h: btc.usd_24h_vol,
        status: "Live",
    };
}

async function fetchChartData(): Promise<MarketChartPoint[]> {
    const res = await fetch(COINGECKO_CHART_URL, {
        next: { revalidate: 0 },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch chart data');
    }

    const data = await res.json();
    return data.prices.map((entry: [number, number]) => ({
        time: formatTimeLabel(entry[0]),
        price: Number(entry[1].toFixed(2)),
    }));
}

export async function fetchMarketData(): Promise<MarketData> {
    const [stats, chart] = await Promise.all([
        fetchPriceStats(),
        fetchChartData(),
    ]);

    return { stats, chart };
}

export function buildMetricCards(data: MarketData) {
    return [
        {
            title: "BTC Price",
            value: `$${data.stats.price.toLocaleString("en-US", {
                maximumFractionDigits: 0,
            })}`,
            change: `${data.stats.change24h >= 0 ? "+" : ""}${data.stats.change24h.toFixed(2)}%`,
            trend: data.stats.change24h >= 0 ? "up" : "down",
        },
        {
            title: "24h Volume",
            value: data.stats.volume24h >= 0 ? "Bullish" : "Bearish",
            change: `${Math.abs(data.stats.volume24h).toFixed(2)}%`,
            trend: data.stats.change24h >= 0 ? "up" : "down",
        },
        {
            title: "Status",
            value: data.stats.status,
            change: "Polling",
            trend: "neutral" as const,
        },
    ];
}