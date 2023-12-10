import zh from "./locale/zh.json";
import en from "./locale/en.json";
import { Locale } from "@/core/utils/i18";

export type MenuDictionariesType = typeof en | typeof zh;

const dictionaries: { [key: string]: MenuDictionariesType } = {
  zh: zh,
  en: en,
};
export const getMenuDictionaries = (locale: Locale) => dictionaries[locale];
