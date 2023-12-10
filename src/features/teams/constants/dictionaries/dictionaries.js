import "server-only";
import zh from "./locale/zh.json";
import en from "./locale/en.json";

const dictionaries = {
  de: zh,
  en: en,
};
export const getTeamsFeatureDictionaries = (locale) => dictionaries[locale];
