"use client";
import { useRef } from "react";

import { useTeamsDictionaries } from "./store";

export default function TeamsFeatureDictionariesStoreInitializer(state) {
  const initialized = useRef(false);
  if (!initialized.current) {
    useTeamsDictionaries.setState(state);
    initialized.current = true;
  }
  return null;
}
