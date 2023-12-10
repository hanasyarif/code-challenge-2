import { create } from "zustand";

export const useHomeDictionaries = create((set) => ({
  dict: {},
}));
