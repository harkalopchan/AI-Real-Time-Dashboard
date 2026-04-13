import { Insight } from "@/data/dashboard"

type InsightsPanelProps = {
    insight: Insight
}

export default function InsightsPanel({ insight }: InsightsPanelProps) {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <h2 className="text-lg font-semibold text-white">{insight.title}</h2>

            <div className="mt-4 space-y-4">
                <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500">Summary</p>
                    <p className="mt-1 text-sm leading-6 text-slate-300">{insight.summary}</p>
                </div>

                <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500">Trend</p>
                    <p className="mt-1 text-sm leading-6 text-slate-300">{insight.trend}</p>
                </div>

                <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500">Risk Note</p>
                    <p className="mt-1 text-sm leading-6 text-slate-300">{insight.risk}</p>
                </div>
            </div>
        </div>
    )
}