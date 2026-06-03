import { MetricCardData } from "@/data/dashboard"

type MetricCardCorps = {
    item: MetricCardData;
}

export default function MetricCard({ item }: MetricCardCorps) {
    const trendColor = item.trend === "up"
        ? "text-emerald-400"
        : item.trend === "down"
            ? "text-red-400"
            : "text-slate-300";

    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-sm">
            <p className="text-sm text-slate-400">{item.title}</p>
            <div className="mt-3 flex items-end justify-between gap-3">
                <h3 className="text-2xl font-semibold text-white">{item.value}</h3>
                {item.change ? (
                    <span className={`text-sm font-medium ${trendColor}`}>{item.change}</span>
                ) : null}
            </div>
        </div>
    )
}