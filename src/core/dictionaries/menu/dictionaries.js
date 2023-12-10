import en from "./locale/en.json";

const dictionaries = {
  en: en,
};
export const getMenuDictionaries = (locale) => dictionaries[locale];
