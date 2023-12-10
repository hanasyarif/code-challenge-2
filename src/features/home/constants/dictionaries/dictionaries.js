import "server-only";
import zh from "./locale/zh.json";
import en from "./locale/en.json";

const dictionaries = {
  zh: zh,
  en: en,
};
export const getHomeFeatureDictionaries = (locale) => dictionaries[locale];
