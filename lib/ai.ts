import { MarketData } from "@/types/market";

export function buildInsightPrompt(data: MarketData) {
    const change = data.stats.change24h.toFixed(2);
    const price = data.stats.price;

    return `
    You are a financial assistant. 
    
    Analyze the following BTC market and the response in JSON format only.
    
    Data:
    - Current Price: $${price}
    - 24h Change: ${change}%
    - Volume: ${data.stats.volume24h}

    Return JSON in this exact format:
    {
      "summary": "A concise summary of the market trend.",
      "trend": "The current trend (e.g., bullish, bearish, neutral).",
      "risk": "An assessment of potential risks (e.g., high, medium, low)."
    }

    Rules:
    - Keep each field under 2 sentences.
    - Be concise and informational.
    - Do not include any exra text outside the JSON response.
`;
}