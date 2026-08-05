"use client";

import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

type TrafficData = {
  name: string;
  value: number;
  color: string;
};

type TrafficChartProps = {
  data?: TrafficData[];
};

export default function TrafficChart({ data }: TrafficChartProps) {
  const defaultData = [
    { name: "Organic Search", value: 48.1, color: "#14b8a6" },
    { name: "Direct", value: 25.1, color: "#3b82f6" },
    { name: "Paid Search", value: 17.5, color: "#a855f7" },
    { name: "Social", value: 10.9, color: "#f59e0b" },
    { name: "Other", value: 7.9, color: "#6b7280" },
  ];

  const chartData = data || defaultData;

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-md lg:text-lg font-semibold text-white">Traffic by Channel</h2>
        </div>
        <label htmlFor="traffic-select" className="sr-only">
          Select traffic metric
        </label>
        <select id="traffic-select" className="px-3 py-1 text-sm bg-slate-800 border border-slate-700 rounded-md text-slate-300 hover:border-slate-600 transition-colors cursor-pointer">
          <option>Sessions</option>
          <option>Users</option>
          <option>Revenue</option>
        </select>
      </div>

      <div className="mt-6 h-75 w-full flex items-center justify-center">
        <ResponsiveContainer width="100%" height={260}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              dataKey="value"
              label={false}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend
              verticalAlign="bottom"
              height={36}
              formatter={(value, entry: any) => (
                <span className="text-sm text-slate-300">{entry.payload.name}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
        {chartData.map((item) => (
          <div key={item.name} className="text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <p className="text-xs text-slate-400">{item.name}</p>
            </div>
            <p className="text-sm font-semibold text-white">{item.value.toFixed(1)}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}
