import "server-only";
import zh from "./locale/zh.json";
import en from "./locale/en.json";
import { Locale } from "@/core/utils/i18";

export type TeamsFeatureDictionariesType = typeof en | typeof zh;

const dictionaries: { [key: string]: TeamsFeatureDictionariesType } = {
  de: zh,
  en: en,
};
export const getTeamsFeatureDictionaries = (locale: Locale) =>
  dictionaries[locale];
