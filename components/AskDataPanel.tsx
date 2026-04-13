export default function AskDataPanel() {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <h2 className="text-lg font-semibold text-white">Ask the Data</h2>
            <p className="mt-1 text-sm text-slate-400">
                Ask natural-language questions about dashboard trends.
            </p>

            <div className="mt-4 space-y-3">
                <textarea
                    placeholder="Example: Summarize the last 1 hour trend"
                    className="min-h-[120px] w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
                />

                <button className="rounded-xl bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-sky-400">
                    Ask
                </button>
            </div>
        </div>
    )
}