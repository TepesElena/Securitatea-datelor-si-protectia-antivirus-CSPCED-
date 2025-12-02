import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

export const DatasetChart = ({ stats }) => {
  const data = [
    { name: "SPAM", value: stats.spam, color: "#ef4444" },
    { name: "HAM", value: stats.ham, color: "#10b981" }
  ];

  return (
    <div className="card border-purple-300 p-6">
      <h2 className="text-xl font-bold mb-4">Distribuția Dataset-ului</h2>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={80} label>
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
