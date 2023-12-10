import * as React from "react";
import clsx from "clsx";
import Image from "next/image";

export default function Banner({ image = "", alt = "" }) {
  return (
    <div className={clsx("w-full h-[166px] md:h-[40rem]", "relative")}>
      <Image
        className={clsx("object-cover")}
        src={image}
        alt={alt}
        fill={true}
        loading={"eager"}
        sizes={"100vw"}
      />
    </div>
  );
}
