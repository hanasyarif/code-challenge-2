import { flexRender } from "@tanstack/react-table";
import * as React from "react";
import clsx from "clsx";

export const TableBody = ({ table = null }) => {
  return (
    <tbody className={clsx("bg-[#649E84]")}>
      {table !== null &&
        table.getRowModel().rows.map((row) => {
          return (
            <tr key={row.id} role={"table-row"}>
              {row.getVisibleCells().map((cell) => {
                return (
                  <td
                    key={cell.id}
                    className={clsx(
                      "text-center",
                      "border-[0.125rem] border-white"
                    )}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                );
              })}
            </tr>
          );
        })}
    </tbody>
  );
};
