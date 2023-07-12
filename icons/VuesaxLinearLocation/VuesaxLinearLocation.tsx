/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const VuesaxLinearLocation = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`vuesax-linear-location ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path-2"
        d="M8 8.95334C9.14875 8.95334 10.08 8.02209 10.08 6.87334C10.08 5.72458 9.14875 4.79333 8 4.79333C6.85125 4.79333 5.92 5.72458 5.92 6.87334C5.92 8.02209 6.85125 8.95334 8 8.95334Z"
        stroke="#001C45"
        strokeWidth="1.2"
      />
      <path
        className="path-2"
        d="M2.41333 5.66004C3.72667 -0.113291 12.28 -0.106624 13.5867 5.66671C14.3533 9.05338 12.2467 11.92 10.4 13.6934C9.06 14.9867 6.94 14.9867 5.59333 13.6934C3.75333 11.92 1.64667 9.04671 2.41333 5.66004Z"
        stroke="#001C45"
        strokeWidth="1.2"
      />
    </svg>
  );
};
