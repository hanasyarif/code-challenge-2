import zh from "./locale/zh.json";
import en from "./locale/en.json";
import { Locale } from "@/core/utils/i18";

export type ErrorsDictionariesType = typeof en | typeof zh;

const dictionaries: { [key: string]: ErrorsDictionariesType } = {
  de: zh,
  en: en,
};
export const getErrorsDictionaries = (locale: Locale) => dictionaries[locale];
