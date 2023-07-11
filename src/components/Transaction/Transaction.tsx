/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

interface Props {
  className: any;
}

export const Transaction = ({ className }: Props): JSX.Element => {
  return (
    <div className={`transaction ${className}`}>
      <div className="overlap-group">
        <div className="netflix" />
      </div>
      <div className="element-oct">22 Oct 2021</div>
      <div className="text-wrapper">Netflix</div>
      <div className="div"> - $345.00</div>
      <div className="entertainment">Entertainment</div>
    </div>
  );
};
