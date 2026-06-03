"use client";

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ReactNode } from "react";
import { MarketChartPoint } from "@/types/market";

type PriceChartProps = {
    data: MarketChartPoint[];
    headerRight?: ReactNode;
    className?: string;
}

export default function PriceChart({className, data, headerRight }: PriceChartProps) {
    return (
        <div className={`rounded-2xl border border-slate-800 bg-slate-900 p-5 ${className || ""}`}>
            <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                    <h2 className="text-lg font-semibold text-white">BTC Price Trend</h2>
                    <p className="text-sm text-slate-400">
                        Live hourly market data from CoinGecko
                    </p>
                </div>
                {headerRight && <div>{headerRight}</div>}
            </div>
            <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <XAxis
                            dataKey="time"
                            stroke="#94a3b8"
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis
                            stroke="#94a3b8"
                            tickLine={false}
                            axisLine={false}
                            domain={["dataMin - 300", "dataMax + 300"]}
                        />
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