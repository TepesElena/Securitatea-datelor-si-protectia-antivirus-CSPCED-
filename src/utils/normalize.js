export const normalizeDiacritics = (text) => {
  return text
    .replace(/[ăâ]/gi, "a")
    .replace(/[îi]/gi, "i")
    .replace(/[ș]/gi, "s")
    .replace(/[ț]/gi, "t");
};
