type ChartsStatsProps = {
    high: number;
    low: number;
    avg: number;
}

function formatPrice(value: number) {
    return `$${value.toLocaleString("en-US", {
        maximumFractionDigits: 0,
    })}`;
}

export default function ChartStats({ high, low, avg }: ChartsStatsProps) {
    const items = [
        { label: "High", value: formatPrice(high) },
        { label: "Low", value: formatPrice(low) },
        { label: "Avg", value: formatPrice(avg) },
    ];

    return (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {items.map((item) => (
                <div key={item.label} className="rounded-xl border border-slate-800 bg-slate-900 p-4"
                >
                    <p className="text-xs uppercase tracking-wide text-slate-500">
                        {item.label}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                </div>
            ))}
        </div>
    );
}