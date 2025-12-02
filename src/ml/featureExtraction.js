import { normalizeDiacritics } from "../utils/normalize";

export const extractFeatures = (text) => {
  const lower = text.toLowerCase();
  const norm = normalizeDiacritics(lower);

  return {
    length: text.length,
    upperCaseCount: (text.match(/[A-ZĂÎÂȘȚ]/g) || []).length,
    upperCaseRatio: (text.match(/[A-ZĂÎÂȘȚ]/g) || []).length / text.length,
    hasCastig: (/castig|câștig|premiu/i.test(lower) || /castig|premiu/i.test(norm)) ? 1 : 0,
    hasGratuit: (/gratuit|gratis|cadou/i.test(lower)) ? 1 : 0,
    hasBani: (/bani|lei|credit/i.test(lower)) ? 1 : 0,
    hasUrgent: (/urgent|acum|rapid/i.test(lower)) ? 1 : 0,
    hasClick: (/click|acceseaza|link/i.test(lower)) ? 1 : 0,
    hasOferta: (/ofert|reducere|promotie/i.test(lower)) ? 1 : 0,
    exclamationCount: (text.match(/!/g) || []).length,
    questionCount: (text.match(/\?/g) || []).length,
    hasNumbers: /\d/.test(text) ? 1 : 0,
    numberCount: (text.match(/\d/g) || []).length,
    wordCount: text.split(/\s+/).length
  };
};
