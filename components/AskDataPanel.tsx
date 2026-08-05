"use client";

import { useState } from "react";
import { ChatMessage } from "@/types/chat";
import { MarketData } from "@/types/market";

type Props = {
    data: MarketData;
};

export default function AskDataPanel({ data }: Props) {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            role: "user",
            content: "What drove the BTC price increase this week?",
        },
        {
            role: "assistant",
            content: "BTC price increased 12.6% compared to May 5 – May 11, primarily driven by increased trading volume (+18%) and positive market sentiment reflecting improving fundamentals.",
        },
    ]);
    const [loading, setLoading] = useState(false);

    async function handleAsk(question?: string) {
        const questionToAsk = question || input;
        if (!questionToAsk.trim()) return;

        const userMessage: ChatMessage = { role: "user", content: questionToAsk };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");

        try {
            setLoading(true);
            const res = await fetch("/api/ask-data", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ question: questionToAsk, data }),
            });
            const result = await res.json();
            const aiMessage: ChatMessage = { role: "assistant", content: result.answer || "Not enough data available" };
            setMessages((prev) => [...prev, aiMessage]);
        } catch (err) {
            console.error("Error fetching AI response:", err);
        } finally {
            setLoading(false);
        }
    }

    const suggestedQuestions = [
        "What is today's trend?",
        "Is BTC showing bullish signals?",
    ];

    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="flex items-center gap-2 mb-4">
                <h2 className="text-md lg:text-lg font-semibold text-white">Ask the Data</h2>
                <span className="inline-flex items-center gap-1 rounded-full bg-teal-500/20 text-teal-400 px-2.5 py-0.5 text-xs font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                    AI
                </span>
            </div>

            <div className="mt-4 h-80 overflow-y-auto space-y-4 pr-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                        <div
                            className={`rounded-lg px-4 py-2 text-sm max-w-xs ${msg.role === "user"
                                    ? "bg-teal-500/20 text-teal-300 border border-teal-500/30"
                                    : "bg-slate-800 text-slate-200 border border-slate-700"
                                }`}
                        >
                            {msg.role === "user" && (
                                <div className="font-medium text-xs uppercase tracking-wide text-teal-400/70 mb-1">
                                    Q:
                                </div>
                            )}
                            {msg.role === "assistant" && (
                                <div className="font-medium text-xs uppercase tracking-wide text-slate-500 mb-1">
                                    A:
                                </div>
                            )}
                            {msg.content}
                        </div>
                    </div>
                ))}

                {loading && (
                    <div className="flex justify-start">
                        <div className="bg-slate-800 text-slate-300 rounded-lg px-4 py-2 text-sm">
                            Thinking...
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-4 space-y-3">
                <div className="flex gap-2">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === "Enter" && !loading && input.trim()) {
                                handleAsk();
                            }
                        }}
                        placeholder="Ask about the data..."
                        className="flex-1 rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-transparent"
                    />

                    <button
                        onClick={() => handleAsk()}
                        disabled={loading || !input.trim()}
                        className="rounded-lg bg-teal-500 hover:bg-teal-600 disabled:bg-slate-700 disabled:cursor-not-allowed px-4 py-2 text-sm text-slate-950 font-medium transition-colors"
                    >
                        {loading ? "..." : "Ask"}
                    </button>
                </div>

                <div className="flex gap-2 flex-wrap">
                    <span className="text-xs text-slate-500">Try asking:</span>
                    {suggestedQuestions.map((question) => (
                        <button
                            key={question}
                            onClick={() => handleAsk(question)}
                            disabled={loading}
                            className="text-xs px-3 py-1 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 hover:bg-slate-700 hover:border-slate-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {question}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}