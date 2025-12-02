import { extractFeatures } from "./featureExtraction";

export const predictMessage = (text, model) => {
  const features = extractFeatures(text);
  let spamScore = 0, hamScore = 0;

  if (features.hasCastig) spamScore += 2.5;
  if (features.hasGratuit) spamScore += 2;
  if (features.hasBani) spamScore += 2;
  if (features.hasUrgent) spamScore += 1.5;
  if (features.hasClick) spamScore += 1;
  if (features.hasOferta) spamScore += 1.5;

  if (features.upperCaseRatio > 0.3) spamScore += 2;
  if (features.exclamationCount > 2) spamScore += 2;

  if (features.wordCount > 5 && features.wordCount < 30) hamScore += 1;
  if (features.upperCaseRatio < 0.1) hamScore += 1.5;
  if (features.exclamationCount === 0) hamScore += 0.5;
  if (features.questionCount > 0 && features.questionCount <= 2) hamScore += 1;

  const total = spamScore - hamScore;
  const confidence = Math.min(Math.abs(total) / 10 * 100, 100);

  return {
    isSpam: total > 0,
    confidence: confidence.toFixed(1),
    spamScore: spamScore.toFixed(2),
    hamScore: hamScore.toFixed(2),
    features
  };
};
