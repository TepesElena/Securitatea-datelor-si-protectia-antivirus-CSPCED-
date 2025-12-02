import React from "react";
import { Mail } from "lucide-react";

export const MessageInput = ({ message, setMessage, handleClassify, examples }) => {
  return (
    <div className="card border-purple-300">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Mail className="w-6 h-6" />
        Testează Mesajul
      </h2>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Introdu un mesaj..."
        className="w-full h-32 bg-white/30 rounded-lg p-4 border border-purple-200 focus:outline-none mb-4"
      />

     <button className="btn-primary" onClick={handleClassify}>
      Clasifică Mesajul
    </button>

      <div className="mt-4 space-y-2">
        {examples.map((ex, idx) => (
          <button key={idx} onClick={() => setMessage(ex)} className="w-full text-left">
            {ex}
          </button>
        ))}
      </div>
    </div>
  );
};
