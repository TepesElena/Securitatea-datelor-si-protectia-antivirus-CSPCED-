import React from "react";
import { Shield } from "lucide-react";

export const Header = () => (
  <div className="mb-8 text-center">
    <div className="flex justify-center items-center gap-3 mb-4">
      <Shield className="w-12 h-12 text-purple-400 logo" />
      <h1 className="text-4xl font-bold text-purple-700">Detector Anti-Spam ML</h1>
    </div>
    <p className="text-purple-500 italic">Machine Learning pentru Mesaje în Română</p>
  </div>
);
