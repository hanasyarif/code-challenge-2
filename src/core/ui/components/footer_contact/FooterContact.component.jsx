import * as React from "react";
import clsx from "clsx";
import Image from "next/image";

export default function FooterContact({ title = "", list = [] }) {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start gap-y-[0.75rem]",
        "w-full"
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
          <div
            key={listItem.id}
            className={clsx(
              "grid grid-flow-col items-center content-center justify-start justify-items-start gap-x-[0.5rem]",
              "w-full",
              "px-[0.75rem] py-[0.5rem] md:py-[0.75rem] md:px-[0.75rem]",
              "text-[1rem] text-lotion font-normal"
            )}
          >
            <div className={clsx("w-[1.5rem] h-[1.5rem]", "relative")}>
              <Image
                src={listItem.icon}
                alt={listItem.id}
                fill={true}
                sizes={"(max-width:1024px) 33vw, 100vw"}
              />
            </div>

            <p
              className={clsx(
                "grid grid-cols-1 place-content-start place-items-start",
                "w-full",
                "text-[0.875rem] text-chinese-white font-light"
              )}
            >
              {listItem.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
