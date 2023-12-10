"use client";
import * as React from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function ProductCardHome({
  illustration = "",
  launch_type = "",
  launch_type_icon = "",
  name = "",
  headline = "",
  description = "",
  isReverse = false,
  cta = {
    primary: {
      name: "",
      link: "",
    },
  },
  onClick,
}) {
  const illustrationType = illustration.includes(".mov") ? "video" : "image";

  return (
    <div
      className={clsx(
        "grid grid-cols-1 lg:grid-cols-2 place-content-center place-items-center gap-y-[1.25rem] gap-x-[1.25rem]",
        "pt-[50px] pb-[50px]",
        "w-full"
      )}
    >
      <div
        className={clsx(
          "grid grid-cols-1 place-content-center place-items-center w-full",
          isReverse ? "order-2" : "order-1"
        )}
      >
        <div
          className={clsx(
            "w-full",
            "rounded-[0.5rem]",
            "overflow-hidden",
            "aspect-square",
            "relative"
          )}
        >
          {illustrationType === "image" && (
            <Image
              src={illustration}
              alt={name}
              fill={true}
              sizes={"(max-width:1024px) 100vw, 50vw"}
            />
          )}
          {illustrationType === "video" && (
            <video
              autoPlay={true}
              loop={true}
              muted={true}
              playsInline
              className={clsx("w-full h-[31.375rem]")}
            >
              <source src={illustration} />
            </video>
          )}
        </div>
      </div>

      <div
        className={clsx(
          "grid grid-cols-1 items-center content-center justify-start justify-items-start gap-y-[1.25rem]",
          "w-full",
          isReverse ? "order-1" : "order-2"
        )}
      >
        <div
          className={clsx(
            "grid grid-flow-col items-center content-center justify-start justify-items-start gap-x-[0.5rem]",
            "w-full"
          )}
        >
          <div className={clsx("w-[1.5rem] h-[1.5rem]", "relative")}>
            <Image
              src={launch_type_icon}
              alt={launch_type}
              fill={true}
              sizes={"2rem"}
            />
          </div>

          <h4
            className={clsx(
              "text-[1.125rem] leading-[2rem] text-raisin-black font-normal uppercase tracking-[0.3rem]",
              "whitespace-nowrap"
            )}
          >
            {launch_type}
          </h4>
        </div>

        <h2
          className={clsx(
            "text-[3rem] leading-[4rem] text-eerie-black font-semibold"
          )}
        >
          {name}
        </h2>
        <h3
          className={clsx(
            "text-[1rem] leading-[1.5rem] md:text-[1.125rem] md:leading-[2rem] text-primary font-light"
          )}
        >
          {headline}
        </h3>
        <p
          className={clsx(
            "text-[1rem] leading-[1.5rem] md:text-[1.125rem] md:leading-[2rem] text-granite-gray font-light"
          )}
        >
          {description}
        </p>

        <button
          aria-label={name}
          className={clsx(
            "grid grid-flow-col place-content-center place-items-center",
            "px-[1.25rem] py-[0.625rem]",
            "bg-white",
            "border border-primary",
            "rounded-[0.375rem]",
            "text-[1rem] leading-[2rem] text-primary font-semibold uppercase",
            "whitespace-nowrap"
          )}
          value={cta.primary.link}
          onClick={onClick}
        >
          {cta.primary.name}
        </button>
      </div>
    </div>
  );
}
