import { create } from "zustand";
import { TeamsFeatureDictionariesType } from "../../constants/dictionaries";

export const useTeamsDictionaries = create((set) => ({
  dict: {},
}));
