import { MarketChartPoint, MarketData } from "@/types/market";
import { COINGECKO_PRICE_URL, COINGECKO_CHART_URL } from "@/lib/apiConfig";

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

