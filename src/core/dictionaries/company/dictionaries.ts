import zh from "./locale/zh.json";
import en from "./locale/en.json";
import { Locale } from "@/core/utils/i18";

export type CompanyDictionariesType = typeof en | typeof zh;

const dictionaries: { [key: string]: CompanyDictionariesType } = {
  de: zh,
  en: en,
};
export const getCompanyDictionaries = (locale: Locale) => dictionaries[locale];
