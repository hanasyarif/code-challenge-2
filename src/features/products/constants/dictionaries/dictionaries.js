import "server-only";
import en from "./locale/en.json";

const dictionaries = {
  en: en,
};
export const getProductsFeatureDictionaries = (locale) => dictionaries[locale];
