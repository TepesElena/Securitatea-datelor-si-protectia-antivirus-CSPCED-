import React from "react";
import { CheckCircle, AlertTriangle } from "lucide-react";

export const ResultPanel = ({ result }) => {
  if (!result)
    return (
      <div className="card border-purple-300 text-purple-500 py-12">
        Introdu un mesaj și apasă "Clasifică"
      </div>
    );

  return (
    <div className="card border-purple-300 space-y-4">
      {/* Indicație SPAM/HAM */}
      <div className={result.isSpam ? "bg-red-100 p-4 rounded flex items-center gap-3" : "bg-green-100 p-4 rounded flex items-center gap-3"}>
        {result.isSpam ? <AlertTriangle className="w-8 h-8 text-red-400" /> : <CheckCircle className="w-8 h-8 text-green-400" />}
        <div>
          <p className="font-bold text-lg">{result.isSpam ? "SPAM" : "HAM (Legitim)"}</p>
          <p className="text-sm text-purple-600">Încredere: {result.confidence}%</p>
        </div>
      </div>

      {/* Caseta cu scoruri */}
      <div className="result-scores">
        <h3>Scoruri Detaliate</h3>
        <div className="result-score-item">
          <span className="result-score-label">SPAM</span>
          <span className="result-score-value">{result.spamScore}</span>
        </div>
        <div className="result-score-item">
          <span className="result-score-label">HAM</span>
          <span className="result-score-value">{result.hamScore}</span>
        </div>
      </div>
    </div>
  );
};
