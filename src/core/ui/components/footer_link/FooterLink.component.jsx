"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const REGEX_TARGET_ID = /.*\#/;

export default function FooterLink({
  title = "",
  list = [],
  activeTargetID = "",
  defaultLink = "/",
  onClick,
}) {
  const pathname = usePathname();

  const handleClick = (e) => {
    if (pathname === defaultLink) {
      scrollToAnchor(e.currentTarget.value);
    } else {
      if (onClick) {
        onClick(e.currentTarget.value);
      }
    }
  };

  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start gap-y-[0.75rem] w-full"
      )}
    >
      <p
        className={clsx(
          "text-[1.25rem] font-medium uppercase text-white",
          "whitespace-nowrap"
        )}
      >
        {title}
      </p>

      <div
        className={clsx(
          "grid grid-cols-1 place-content-start place-items-start gap-y-[0.5rem]",
          "w-full"
        )}
      >
        {list.map((listItem) => (
          <button
            aria-label={listItem.name}
            className={clsx(
              "grid grid-cols-1 place-content-start place-items-start",
              "w-full",
              "px-[0.75rem] py-[0.5rem] md:py-[0.75rem] md:px-[0.75rem]",
              "text-[0.875rem] font-light uppercase",
              activeTargetID === "/" && listItem.id === "home"
                ? "text-primary"
                : activeTargetID !== "/" && activeTargetID.includes(listItem.id)
                ? "text-primary"
                : "text-chinese-white hover:text-primary",
              "cursor-pointer"
            )}
            key={listItem.name}
            value={listItem.link}
            onClick={handleClick}
          >
            {listItem.name}
          </button>
        ))}
      </div>
    </div>
  );
}
