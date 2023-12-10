import * as React from "react";
import clsx from "clsx";
import { useTeamsDictionaries } from "../../zustand/dictionaries/store";
import Banner from "@/core/ui/components/banner/Banner.component";

export default function BannerTeams(props) {
  const dict = useTeamsDictionaries.getState().dict.banner;
  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start pt-[72px]"
      )}
    >
      <Banner image={dict.image} alt={dict.alt} />
    </div>
  );
}
