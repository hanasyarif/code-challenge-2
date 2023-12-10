import "server-only";
import en from "./locale/en.json";

const dictionaries = {
  en: en,
};
export const getAboutUsFeatureDictionaries = (locale) => dictionaries[locale];
