import * as React from "react";
import clsx from "clsx";
import { useProductsDictionaries } from "../../zustand/dictionaries/store";
import Banner from "@/core/ui/components/banner/Banner.component";

export default function BannerProducts(props) {
  const dict = useProductsDictionaries.getState().dict.banner;
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
