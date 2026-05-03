"use client";

import { useState } from "react";
import { ChatMessage } from "@/types/chat";

type Props = {
    data: any;
};

export default function AskDataPanel({ data }: Props) {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [loading, setLoading] = useState(false);

    async function handleAsk() {
        if (!input.trim()) return;

        const userMessage: ChatMessage = { role: "user", content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        
        try {
            setLoading(true);
            const res = await fetch("/api/ask-data", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ question: input, data }),
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

    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <h2 className="text-lg font-semibold text-white">Ask the Data</h2>
            <div className="mt-4 h-64 overflow-y-auto space-y-3">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`rounded-md px-3 py-2 text-sm ${
              msg.role === "user"
                ? "bg-sky-500 text-slate-950 ml-auto w-fit"
                : "bg-slate-800 text-white"
            }`}
          >
            {msg.content}
          </div>
        ))}

        {loading && (
          <div className="text-sm text-slate-400">
            Thinking...
          </div>
        )}
      </div>

      <div className="mt-4 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about the data..."
          className="flex-1 rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white"
        />

        <button
          onClick={handleAsk}
          className="rounded-md bg-sky-500 px-4 py-2 text-sm text-slate-950"
        >
          Ask
        </button>
      </div>
    </div>
  );
}