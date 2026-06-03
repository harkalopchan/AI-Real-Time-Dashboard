export default function Header() {
    return (
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-white">AI Powered Real-Time Dashboard</h1>
                <p className="mt-1 text-sm text-slate-400">
                    Monitor live market trends, AI-generated summaries, and conversational insights.
                </p>
            </div>
            <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">
                Live Preview
            </div>
        </div>
    )
}