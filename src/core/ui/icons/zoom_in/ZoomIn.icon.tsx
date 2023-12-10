import * as React from "react";

export interface ZoomInIconProps extends React.HTMLAttributes<SVGElement> {}

export default function ZoomInIcon(props: ZoomInIconProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_675_88)">
        <path
          d="M5.16667 4.66663H4.90334L4.81001 4.57663C5.21001 4.10996 5.41667 3.4733 5.30334 2.79663C5.14667 1.86996 4.37334 1.12996 3.44001 1.01663C2.03001 0.843298 0.846673 2.02996 1.01667 3.43996C1.13001 4.3733 1.87001 5.14663 2.79667 5.3033C3.47334 5.41663 4.11001 5.20996 4.57667 4.80996L4.66667 4.9033V5.16663L6.08667 6.5833C6.22334 6.71996 6.44334 6.71996 6.58001 6.5833L6.58334 6.57996C6.72001 6.4433 6.72001 6.2233 6.58334 6.08663L5.16667 4.66663ZM3.16667 4.66663C2.33667 4.66663 1.66667 3.99663 1.66667 3.16663C1.66667 2.33663 2.33667 1.66663 3.16667 1.66663C3.99667 1.66663 4.66667 2.33663 4.66667 3.16663C4.66667 3.99663 3.99667 4.66663 3.16667 4.66663ZM3.16667 2.3333C3.07334 2.3333 3.00001 2.40663 3.00001 2.49996V2.99996H2.50001C2.40667 2.99996 2.33334 3.0733 2.33334 3.16663C2.33334 3.25996 2.40667 3.3333 2.50001 3.3333H3.00001V3.8333C3.00001 3.92663 3.07334 3.99996 3.16667 3.99996C3.26001 3.99996 3.33334 3.92663 3.33334 3.8333V3.3333H3.83334C3.92667 3.3333 4.00001 3.25996 4.00001 3.16663C4.00001 3.0733 3.92667 2.99996 3.83334 2.99996H3.33334V2.49996C3.33334 2.40663 3.26001 2.3333 3.16667 2.3333Z"
          {...props}
        />
      </g>
      <defs>
        <clipPath id="clip0_675_88">
          <rect width="8" height="8" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}