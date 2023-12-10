import "server-only";
import en from "./locale/en.json";

const dictionaries = {
  en: en,
};
export const getTeamsFeatureDictionaries = (locale) => dictionaries[locale];
