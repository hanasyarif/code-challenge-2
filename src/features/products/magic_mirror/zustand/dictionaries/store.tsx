import { create } from "zustand";
import { MagicMirrorFeatureDictionariesType } from "../../constants/dictionaries";

export interface MagicMirrorDictionariesStore {
  dict: MagicMirrorFeatureDictionariesType;
}

export const useMagicMirrorDictionaries = create<MagicMirrorDictionariesStore>(
  (set) => ({
    dict: {} as MagicMirrorFeatureDictionariesType,
  })
);
