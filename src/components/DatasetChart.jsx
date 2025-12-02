import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

export const DatasetChart = ({ stats }) => {
  const data = [
    { name: "SPAM", value: stats.spam, color: "#ff7aa8" },
    { name: "HAM", value: stats.ham, color: "#7dffb1" }
  ];

  return (
    <div className="card border-purple-300 p-6 bg-white/60 backdrop-blur-md shadow-xl rounded-2xl">
      <h2 className="text-xl font-bold mb-4 text-purple-700">Distribuția Dataset</h2>

      <div style={{ width: "100%", height: 320 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={90}
              label
              stroke="#fff"
              strokeWidth={2}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} className="chart-slice" />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                background: "rgba(255,255,255,0.9)",
                borderRadius: "12px",
                border: "1px solid rgba(200,150,200,0.3)",
                color: "#d4379c"
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

    
      <div className="flex justify-center gap-6 mt-4 text-sm font-semibold text-purple-600">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full inline-block" style={{ background: data[0].color }}></span>
          SPAM: {stats.spam}
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full inline-block" style={{ background: data[1].color }}></span>
          HAM: {stats.ham}
        </div>
      </div>
    </div>
  );
};
