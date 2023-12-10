import * as React from "react";
import { useTrichoTrackDictionaries } from "../../zustand/dictionaries/store";
import Breadcrumb from "@/core/ui/components/breadcrumb/Breadcrumb.component";

export interface NavigationTrichoTrackProps {}

export default function NavigationTrichoTrack(
  props: NavigationTrichoTrackProps
) {
  const dict = useTrichoTrackDictionaries.getState().dict;
  return <Breadcrumb list={dict.breadcrumb} />;
}
