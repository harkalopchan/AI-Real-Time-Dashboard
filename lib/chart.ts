import { MarketChartPoint } from "@/types/market";

export type TimeRange = "6H" | "12H" | "1D" | "1W" | "1M";

export function filterChartDataByRange(data: MarketChartPoint[], range: TimeRange): MarketChartPoint[] {
    const hoursMap: Record<TimeRange, number> = {
        "6H": 6,
        "12H": 12,
        "1D": 24,
        "1W": 7 * 24,
        "1M": 30 * 24,
    };

    const limit = hoursMap[range];
    
    return data.slice(-limit);
}

export function calculateChartStats(data: MarketChartPoint[]) {
    if (!data.length) {
        return {
            high: 0,
            low: 0,
            avg: 0,
        };
    }

    const prices = data.map(point => point.price);
    const high = Math.max(...prices);
    const low = Math.min(...prices);
    const avg = prices.reduce((sum, price) => sum + price, 0) / prices.length;

    return {
        high,
        low,
        avg
    };
};