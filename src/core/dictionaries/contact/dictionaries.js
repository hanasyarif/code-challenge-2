import en from "./locale/en.json";

const dictionaries = {
  en: en,
};
export const getContactDictionaries = (locale) => dictionaries[locale];
