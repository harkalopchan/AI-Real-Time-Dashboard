import { MarketData } from "@/types/market";

export function buildChatPrompt(data: MarketData, question: string) {
  return `
  You are a financial assistant. 

  Answer the user's question ONLY using the provided data.
  
  DATA:
  - Current Price: ${data.stats.price}
  - 24h Change: ${data.stats.change24h}%
  - Volume: ${data.stats.volume24h}

  USER QUESTION:
    ${question}

  Rules:
  - Be concise (max 2-3 sentences)
  - Do NOT make up data
  - If not answerable, say: "Not enough data available"
  `;
}