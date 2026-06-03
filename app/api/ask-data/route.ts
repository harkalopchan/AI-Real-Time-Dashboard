import { buildChatPrompt } from "@/lib/chat";
import { OpenAI } from "openai";

const client = new OpenAI();

export async function POST(req: Request) {
    try {
        const { question, data } = await req.json();
        
        const prompt = buildChatPrompt(data, question);

        const response = await client.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.3,
        });

        const answer = response.choices[0]?.message?.content || "Not enough data available";

        return Response.json({ answer });
    } catch (error) {
        console.error("Error fetching AI response:", error);
        return Response.json({ error: "Failed to process question" }, { status: 500 });
    }
}