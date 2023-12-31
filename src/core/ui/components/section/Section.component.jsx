import clsx from "clsx";
import * as React from "react";

export default function Section({ children }) {
  return (
    <section
      className={clsx(
        "grid grid-cols-1 place-content-center place-items-center",
        "w-full",
        "px-[1rem] sm:px-[1.5rem]"
      )}
    >
      {children}
    </section>
  );
}
