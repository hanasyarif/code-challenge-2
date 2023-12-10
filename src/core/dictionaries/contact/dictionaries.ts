import zh from "./locale/zh.json";
import en from "./locale/en.json";
import { Locale } from "@/core/utils/i18";

export type ContactDictionariesType = typeof en | typeof zh;

const dictionaries: { [key: string]: ContactDictionariesType } = {
  zh: zh,
  en: en,
};
export const getContactDictionaries = (locale: Locale) => dictionaries[locale];
