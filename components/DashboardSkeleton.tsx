function SkeletonBox({ className = "" }: { className?: string }) {
    return (
        <div className={`animate-pulse rounded-2xl bg-slate-800/70 ${className}`} />
    );
}

export default function DashboardSkeleton() {
    return (
        <main className="min-h-screen bg-slate-950 text-white">
            <div className="mx-auto max-w-7xl p-6">
                <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div className="space-y-3">
                        <SkeletonBox className="h-8 w-80" />
                        <SkeletonBox className="h-4 w-96" />
                    </div>
                    <SkeletonBox className="h-9 w-36" />
                </div>

                <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    <SkeletonBox className="h-28" />
                    <SkeletonBox className="h-28" />
                    <SkeletonBox className="h-28" />
                    <SkeletonBox className="h-28" />
                </section>

                <section className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
                    <div className="xl:col-span-2">
                        <SkeletonBox className="h-96" />
                    </div>
                    <div>
                        <SkeletonBox className="h-96" />
                    </div>
                </section>

                <section className="mt-6">
                    <SkeletonBox className="h-48" />
                </section>
            </div>
        </main>
    );
}