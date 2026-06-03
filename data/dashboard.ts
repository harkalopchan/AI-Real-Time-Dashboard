export type MetricCardData = {
  title: string;
  value: string;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
};

export type ChartPoint = {
    time: string;
    price: number;
};

export type Insight = {
    title: string;
    summary: string;
    trend: string;
    risk: string;
};