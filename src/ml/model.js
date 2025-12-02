import { extractFeatures } from "./featureExtraction";

export const trainNaiveBayes = (data) => {
  const spam = data.filter(d => d.label === 1);
  const ham = data.filter(d => d.label === 0);

  return {
    spamProb: spam.length / data.length,
    hamProb: ham.length / data.length,
    spamFeatures: spam.map(m => extractFeatures(m.text)),
    hamFeatures: ham.map(m => extractFeatures(m.text)),
    type: "NaiveBayes"
  };
};
