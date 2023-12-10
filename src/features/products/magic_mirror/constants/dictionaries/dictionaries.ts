import "server-only";
import zh from "./locale/zh.json";
import en from "./locale/en.json";
import { Locale } from "@/core/utils/i18";

export type MagicMirrorFeatureDictionariesType = typeof en | typeof zh;

const dictionaries: { [key: string]: MagicMirrorFeatureDictionariesType } = {
  de: zh,
  en: en,
};
export const getMagicMirrorFeatureDictionaries = (locale: Locale) =>
  dictionaries[locale];
