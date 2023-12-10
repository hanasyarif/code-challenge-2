"use client";
import { useRef } from "react";

import { useAboutUsDictionaries } from "./store";

export default function AboutUsFeatureDictionariesStoreInitializer(state) {
  const initialized = useRef(false);
  if (!initialized.current) {
    useAboutUsDictionaries.setState(state);
    initialized.current = true;
  }
  return null;
}
