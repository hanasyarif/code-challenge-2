"use client";
import * as React from "react";
import clsx from "clsx";
import Link from "next/link";

export interface BreadcrumbProps {
  list?: {
    id: string;
    name: string;
    link: string;
    disabled: boolean;
  }[];
  separator?: string;
}

export default function Breadcrumb({
  list = [],
  separator = "/",
}: BreadcrumbProps) {
  const handleClick = (value: string) => {
    const href = `#${value}`;
    localStorage.setItem("navigation_id", href);
  };
  return (
    <div
      className={clsx(
        "grid grid-flow-col items-center content-center justify-start justify-items-start gap-x-[1rem]",
        "w-full"
      )}
    >
      {list.map((listItem) => {
        if (listItem.disabled) {
          return (
            <span
              key={listItem.name}
              className={clsx(
                "text-[1.125rem] font-bold text-primary uppercase whitespace-nowrap"
              )}
            >
              {listItem.name}
            </span>
          );
        }
        return (
          <div
            key={listItem.name}
            className={clsx(
              "grid grid-flow-col items-center content-center justify-start justify-items-start gap-x-[1rem]"
            )}
          >
            <Link
              aria-label={listItem.name}
              href={listItem.link}
              className={clsx(
                "text-[1.125rem] font-light text-spanish-gray uppercase",
                "cursor-pointer",
                "whitespace-nowrap"
              )}
              onClick={() => handleClick(listItem.id)}
            >
              {listItem.name}
            </Link>
            <p
              className={clsx(
                "text-[1.125rem] font-light text-spanish-gray uppercase"
              )}
            >
              {separator}
            </p>
          </div>
        );
      })}
    </div>
  );
}
