import en from "./locale/en.json";
const dictionaries = {
  de: zh,
  en: en,
};
export const getErrorsDictionaries = (locale) => dictionaries[locale];
