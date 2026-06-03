import OpenAI from "openai";
import { buildInsightPrompt } from "@/lib/ai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return Response.json(
        { error: "Missing OPENAI_API_KEY" },
        { status: 500 }
      );
    }

    const body = await req.json();
    const prompt = buildInsightPrompt(body);

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.2,
      response_format: { type: "json_object" },
    });

    const content = response.choices[0]?.message?.content;

    if (!content) {
      return Response.json(
        { error: "No AI response content" },
        { status: 500 }
      );
    }

    const parsed = JSON.parse(content);

    return Response.json(parsed);
  } catch (error) {
    console.error("AI insights API error:", error);

    return Response.json(
      { error: "Failed to generate AI insights" },
      { status: 500 }
    );
  }
}