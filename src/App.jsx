import React, { useEffect, useState } from "react";

import { trainingData } from "./ml/trainingData";
import { trainNaiveBayes } from "./ml/model";
import { predictMessage } from "./ml/predict";

import { Header } from "./components/Header";
import { StatsCards } from "./components/StatsCards";
import { MessageInput } from "./components/MessageInput";
import { ResultPanel } from "./components/ResultPanel";
import { DatasetChart } from "./components/DatasetChart";

import "./index.css";

const App = () => {
  const [message, setMessage] = useState("");
  const [model, setModel] = useState(null);
  const [result, setResult] = useState(null);
  const [stats, setStats] = useState({ spam: 0, ham: 0, total: 0 });

  useEffect(() => {
    const m = trainNaiveBayes(trainingData);
    setModel(m);
    setStats({
      spam: trainingData.filter(t => t.label === 1).length,
      ham: trainingData.filter(t => t.label === 0).length,
      total: trainingData.length
    });
  }, []);

  const classify = () => {
    if (!message.trim()) return;
    setResult(predictMessage(message, model));
  };

  const quickExamples = [
    "FELICITĂRI! Ai câștigat 10.000 lei!",
    "OFERTĂ GRATUITĂ! Comandă acum!",
    "Bună, ne vedem la birou mâine?"
  ];

  return (
    <div className="app-wrapper">
      <Header />
      <StatsCards stats={stats} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <MessageInput
          message={message}
          setMessage={setMessage}
          handleClassify={classify}
          examples={quickExamples}
        />

        <ResultPanel result={result} />
      </div>

      <DatasetChart stats={stats} />
    </div>
  );
};

export default App;
