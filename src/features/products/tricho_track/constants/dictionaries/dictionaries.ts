import "server-only";
import zh from "./locale/zh.json";
import en from "./locale/en.json";
import { Locale } from "@/core/utils/i18";

export type TrichoTrackFeatureDictionariesType = typeof en | typeof zh;

const dictionaries: { [key: string]: TrichoTrackFeatureDictionariesType } = {
  de: zh,
  en: en,
};
export const getTrichoTrackFeatureDictionaries = (locale: Locale) =>
  dictionaries[locale];
