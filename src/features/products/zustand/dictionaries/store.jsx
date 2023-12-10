import { create } from "zustand";

export const useProductsDictionaries = create((set) => ({
  dict: {},
}));
