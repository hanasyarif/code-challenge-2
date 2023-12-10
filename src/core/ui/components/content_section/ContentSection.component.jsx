import * as React from "react";
import clsx from "clsx";

export default function ContentSection({ children }) {
  return <div className={clsx("max-w-screen-lg w-full")}>{children}</div>;
}
