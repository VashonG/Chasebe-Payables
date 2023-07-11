/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

interface Props {
  className: any;
}

export const Item = ({ className }: Props): JSX.Element => {
  return (
    <div className={`item ${className}`}>
      <div className="overlap-3">
        <div className="button">
          <div className="transfer-funds">Transfer funds</div>
        </div>
        <img
          className="hero-bg"
          alt="Hero bg"
          src="https://generation-sessions.s3.amazonaws.com/9e570af1ed9e3b08a958a4d8ae789ce9/img/hero-bg-1-1.png"
        />
        <div className="element-wrapper">
          <div className="element-4">1,980.00</div>
        </div>
        <div className="overlap-group-wrapper">
          <div className="overlap-group-2">
            <div className="available-wrapper">
              <div className="available">Available</div>
            </div>
            <div className="base" />
          </div>
        </div>
        <div className="div-wrapper">
          <div className="element-5">$</div>
        </div>
        <div className="coboid-balance-wrapper">
          <div className="coboid-balance">Account Balance</div>
        </div>
      </div>
      <div className="ic-more-vert">
        <img
          className="img"
          alt="Shape"
          src="https://generation-sessions.s3.amazonaws.com/9e570af1ed9e3b08a958a4d8ae789ce9/img/shape-3.svg"
        />
      </div>
    </div>
  );
};
