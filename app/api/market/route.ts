import { fetchMarketData } from "@/lib/market";

export async function GET() {
  try {
    const data = await fetchMarketData();
    return Response.json(data);
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch market data" },
      { status: 500 }
    );
  }
}
