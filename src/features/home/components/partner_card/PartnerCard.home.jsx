import * as React from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function PartnerCardHome({ id = "", image = "", site = "" }) {
  return (
    <Link
      className={clsx("w-full")}
      aria-label={id}
      href={site}
      target={"_blank"}
    >
      <div
        className={clsx(
          "grid grid-cols-1 place-content-center place-items-center",
          "w-full",
          "border border-light-silver",
          "rounded-[1rem]",
          "py-[1.5rem]"
        )}
      >
        <div className={clsx("w-[274px] h-[102px]", "aspect-auto", "relative")}>
          <Image
            src={image}
            alt={id}
            fill={true}
            sizes={"(max-width:1024px) 100vw, 50vw"}
          />
        </div>
      </div>
    </Link>
  );
}
