"use client";

import { ChartPoint } from "@/data/dashboard";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

type priceChartProps = {
    data: ChartPoint[];
}

export default function PriceChart({ data }: priceChartProps) {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <div className="mb-4">
                <h2 className="text-lg font-semibold text-white">Price Trend</h2>
                <p className="text-sm text-slate-400">Static preview with sample intraday data</p>
            </div>
            <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <XAxis dataKey="time" stroke="#94a3b8" tickLine={false} axisLine={false} />
                        <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#0f172a",
                                border: "1px solid #1e293b",
                                borderRadius: "12px",
                                color: "#fff",
                            }}
                        />
                        <Line
                            type="monotone"
                            dataKey="price"
                            stroke="#38bdf8"
                            strokeWidth={3}
                            dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}