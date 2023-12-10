"use client";
import { useState, useEffect } from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import MenuDropdown from "../menu_dropdown/MenuDropdown.component";

export default function Navbar({
  activeTargetID = "",
  defaultLink = "/",
  list = [],

  onClick,
}) {
  const handleClick = (e) => {
    if (e.currentTarget.value.includes("/")) {
      if (onClick) {
        onClick(e.currentTarget.value);
      }
      return;
    }
  };

  return (
    <nav
      className={clsx(
        "w-full",
        "fixed top-0 left-0 right-0",
        "z-20",
        "bg-white",
        "grid grid-cols-1 place-content-center place-items-center w-full",
        "px-[1rem] sm:px-[1.5rem]"
      )}
    >
      <div
        className={clsx(
          "grid grid-flow-col items-center content-center justify-between justify-items-start",
          "w-full max-w-screen-lg",
          "h-[72px] sm:h-[88px]"
        )}
      >
        <Link href={"/"} aria-label={"logo"}>
          <div
            className={clsx(
              "h-[40px] sm:h-[54px]",
              "aspect-[4000/2664]",
              "relative"
            )}
          >
            <Image
              src={"/logo/navbar-logo-2.jpeg"}
              alt={"logo"}
              fill={true}
              sizes={"(max-width: 1536px) 100vw, 1536px"}
            />
          </div>
        </Link>

        <MenuDropdown
          defaultLink={defaultLink}
          list={list}
          activeTargetID={activeTargetID}
          onClick={onClick}
        />

        <div
          className={clsx(
            "hidden",
            "lg:grid grid-flow-col items-center content-center justify-end justify-items-end gap-x-[0.5rem]",
            "h-full"
          )}
        >
          {list.map((listItem, listIndex) => (
            <button
              aria-label={listItem.id}
              key={listIndex}
              className={clsx(
                "py-[0.625rem] px-[1.125rem]",
                activeTargetID === "/" && listItem.id === "home"
                  ? "border-b-[2px] border-b-primary"
                  : activeTargetID !== "/" &&
                    activeTargetID.includes(listItem.id)
                  ? "border-b-[2px] border-b-primary"
                  : "border-b-[2px] border-b-white hover:border-b-primary",
                activeTargetID === "/" && listItem.id === "home"
                  ? "text-primary"
                  : activeTargetID !== "/" &&
                    activeTargetID.includes(listItem.id)
                  ? "text-primary"
                  : "text-eerie-black hover:text-primary",

                "text-[1rem] font-medium uppercase leading-[2rem]",
                "h-max-content",
                "flex items-center justify-center",
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
    </nav>
  );
}
