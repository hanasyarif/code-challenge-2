import * as React from "react";
import { useTrichoTrackDictionaries } from "../../zustand/dictionaries/store";
import Banner from "@/core/ui/components/banner/Banner.component";

export interface BannerTrichoTrackProps {}

export default function BannerTrichoTrack(props: BannerTrichoTrackProps) {
  const dict = useTrichoTrackDictionaries.getState().dict.banner;
  return <Banner image={dict.image} alt={dict.alt} />;
}
