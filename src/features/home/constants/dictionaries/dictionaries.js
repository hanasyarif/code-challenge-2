import "server-only";
import en from "./locale/en.json";

const dictionaries = {
  en: en,
};
export const getHomeFeatureDictionaries = (locale) => dictionaries[locale];
