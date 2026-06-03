"use client";

import { MarketData } from "@/types/market";
import { useState, useEffect } from "react";

type UseMarketDataResult = {
    data: MarketData | null;
    loading: boolean;
    error: string | null;
}

export function useMarketData(intervalMs = 15000): UseMarketDataResult {
    const [data, setData] = useState<MarketData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        async function load() {
            try {
                setError(null);
                const res = await fetch('/api/market');
                if (!res.ok) throw new Error('Failed to fetch');
                const result = await res.json();
                if (isMounted) {
                    setData(result);
                    setLoading(false);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err instanceof Error ? err.message : 'Something went wrong');
                    setLoading(false);
                }
            }
        }

        load();

        const interval = setInterval(load, intervalMs);

        return () => {
            isMounted = false;
            clearInterval(interval);
        };
    }, [intervalMs]);
    return { data, loading, error };
}