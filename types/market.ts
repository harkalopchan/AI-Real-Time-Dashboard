export type MarketStats = {
    price: number;
    change24h: number;
    volume24h: number;
    status: string;
};

export type MarketChartPoint = {
    time: string;
    price: number;
};

export type MarketData = {
    stats: MarketStats;
    chart: MarketChartPoint[];
}