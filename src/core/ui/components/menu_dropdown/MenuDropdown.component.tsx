"use client";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import CloseIcon from "../../icons/close/Close.icon";
import MenuIcon from "../../icons/menu/Menu.icon";
import useScrollToAnchor from "../../hooks/useScrollToAnchor";
import { usePathname } from "next/navigation";
export interface MenuDropdownProps {
  activeTargetID?: string;
  defaultLink?: string;
  list?: { id: string; name: string; link: string; type: string }[];
  onClick?: (value: string) => void;
}

const REGEX_TARGET_ID = /.*\#/;

export default function MenuDropdown({
  activeTargetID = "",
  defaultLink = "/",
  list = [],
  onClick,
}: MenuDropdownProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [targetID, setTargetID] = useState<string>("");

  const scrollToAnchor = useScrollToAnchor(42);

  useEffect(() => {
    if (!!activeTargetID.length) {
      setTargetID((_) => activeTargetID);
      scrollToAnchor(activeTargetID);
    }
  }, [activeTargetID]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.value.includes("/")) {
      if (onClick) {
        onClick(e.currentTarget.value);
      }
      return;
    }
    const href = e.currentTarget.value;
    const id = href.replace(REGEX_TARGET_ID, "");
    setTargetID((prev) => id);
    setIsOpen((prev) => !prev);
    if (pathname === defaultLink) {
      scrollToAnchor(e.currentTarget.value);
    } else {
      if (onClick) {
        onClick(e.currentTarget.value);
      }
    }
  };

  const handleClickHamburgerMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={clsx("relative")}>
      <button
        className={clsx(
          "lg:hidden",
          "w-[2rem] h-[2rem]",
          "bg-anti-flash-white",
          "rounded-[0.25rem]",
          "flex items-center justify-center",
          "cursor-pointer"
        )}
        aria-label={"menu"}
        onClick={handleClickHamburgerMenu}
      >
        {isOpen ? (
          <CloseIcon
            className={clsx("w-[1.375rem] h-[1.375rem]", "fill-outer-space")}
          />
        ) : (
          <MenuIcon
            className={clsx("w-[1.375rem] h-[1.375rem]", "fill-outer-space")}
          />
        )}
      </button>

      <div
        className={clsx(
          "fixed top-[72px] md:top-[88px] left-0 right-0",
          "bg-white",
          "z-20",
          isOpen ? "block" : "hidden"
        )}
      >
        {list.map((listItem, listIndex) => (
          <button
            aria-label={listItem.id}
            key={listIndex}
            className={clsx(
              "py-[0.625rem] px-[1.125rem]",
              listItem.link.replace(REGEX_TARGET_ID, "") === targetID
                ? "bg-davys-grey text-white"
                : "bg-white text-eerie-black hover:bg-davys-grey hover:text-white",
              "text-[1rem] font-medium uppercase leading-[2rem]",
              "h-max-content",
              "flex items-center justify-start",
              "w-full",
              "cursor-pointer"
            )}
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
