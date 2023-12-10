"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";
import useScrollToAnchor from "../../hooks/useScrollToAnchor";
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
  const [targetID, setTargetID] = useState("#hero");

  const scrollToAnchor = useScrollToAnchor(42);
  useEffect(() => {
    if (!!activeTargetID.length) {
      setTargetID((_) => activeTargetID);
      scrollToAnchor(activeTargetID);
    }
  }, [activeTargetID]);

  const handleClick = (e) => {
    const href = e.currentTarget.value;
    setTargetID((prev) => href);
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
              listItem.link.replace(REGEX_TARGET_ID, "") === targetID
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
