"use client";
import { useRef } from "react";

import { useProductsDictionaries } from "./store";

export default function ProductsFeatureDictionariesStoreInitializer(state) {
  const initialized = useRef(false);
  if (!initialized.current) {
    useProductsDictionaries.setState(state);
    initialized.current = true;
  }
  return null;
}
