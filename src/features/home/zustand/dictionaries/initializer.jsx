"use client";
import { useRef } from "react";

import { useHomeDictionaries } from "./store";

export default function HomeFeatureDictionariesStoreInitializer(state) {
  const initialized = useRef(false);
  if (!initialized.current) {
    useHomeDictionaries.setState(state);
    initialized.current = true;
  }
  return null;
}
