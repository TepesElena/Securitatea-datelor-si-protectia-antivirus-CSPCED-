import React from "react";
import { Brain, AlertTriangle, CheckCircle } from "lucide-react";

export const StatsCards = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="card border-purple-300">
        <div className="flex items-center gap-3">
          <Brain className="w-8 h-8 text-purple-400" />
          <div>
            <p className="text-purple-700 text-sm">Total Mesaje</p>
            <p className="text-3xl font-bold">{stats.total}</p>
          </div>
        </div>
      </div>

      <div className="card border-red-300">
        <div className="flex items-center gap-3">
          <AlertTriangle className="w-8 h-8 text-red-400" />
          <div>
            <p className="text-purple-700 text-sm">SPAM Detectat</p>
            <p className="text-3xl font-bold">{stats.spam}</p>
          </div>
        </div>
      </div>

      <div className="card border-green-300">
        <div className="flex items-center gap-3">
          <CheckCircle className="w-8 h-8 text-green-400" />
          <div>
            <p className="text-purple-700 text-sm">HAM (Legitime)</p>
            <p className="text-3xl font-bold">{stats.ham}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
