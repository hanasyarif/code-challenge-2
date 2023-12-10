import en from "./locale/en.json";

const dictionaries = {
  en: en,
};
export const getCompanyDictionaries = (locale) => dictionaries[locale];
