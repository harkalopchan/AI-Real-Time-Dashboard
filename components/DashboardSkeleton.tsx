import Sidebar from "./Sidebar";

function SkeletonBox({ className = "" }: { className?: string }) {
    return (
        <div className={`animate-pulse rounded-2xl bg-slate-800/70 ${className}`} />
    );
}

export default function DashboardSkeleton() {
    return (
        <main className="min-h-screen bg-slate-950 text-white text-xs lg:text-sm">
            <Sidebar />
            <div className="ml-14 lg:ml-20 flex flex-col min-h-screen">
                <div className="mx-auto w-full max-w-7xl p-6 flex-1">
                    <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <SkeletonBox className="h-8 w-40" />
                        <div className="flex gap-3">
                            <SkeletonBox className="h-10 w-52" />
                            <SkeletonBox className="h-10 w-36" />
                        </div>
                    </div>

                    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <SkeletonBox className="h-32" />
                        <SkeletonBox className="h-32" />
                        <SkeletonBox className="h-32" />
                        <SkeletonBox className="h-32" />
                    </section>

                    <section className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
                        <div className="lg:col-span-2">
                            <SkeletonBox className="h-96 mb-4" />
                            <SkeletonBox className="h-24" />
                        </div>
                        <div>
                            <SkeletonBox className="h-80" />
                        </div>
                    </section>

                    <section className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
                        <div className="lg:col-span-2">
                            <SkeletonBox className="h-80" />
                        </div>
                        <div>
                            <SkeletonBox className="h-80" />
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}