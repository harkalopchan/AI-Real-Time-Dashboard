import { fetchMarketData } from "@/lib/market";
import { MarketData } from "@/types/market";

let cachedMarketData: MarketData | null = null;
let cachedAt = 0;

const CACHE_DURATION = 60 * 1000; // 60 seconds

export async function GET() {
  try {
    const now = Date.now();

    if (cachedMarketData && now - cachedAt < CACHE_DURATION) {
      return Response.json(cachedMarketData);
    }

    const data = await fetchMarketData();

    cachedMarketData = data;
    cachedAt = now;

    return Response.json(data);
  } catch (error) {
    console.error("Market API error:", error);

    if (cachedMarketData) {
      return Response.json(cachedMarketData);
    }

    return Response.json(
      { error: "Failed to fetch market data. Please try again later." },
      { status: 500 }
    );
  }
}