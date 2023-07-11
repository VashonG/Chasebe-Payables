/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

interface Props {
  className: any;
}

export const LinkedAccount = ({ className }: Props): JSX.Element => {
  return (
    <div className={`linked-account ${className}`}>
      <div className="bank-mandiri-TBK">Bank Mandiri TBK</div>
      <div className="element">****8787</div>
      <div className="giro">Giro</div>
      <div className="ic-account-balance-wrapper">
        <div className="ic-account-balance">
          <img
            className="shape"
            alt="Shape"
            src="https://generation-sessions.s3.amazonaws.com/9e570af1ed9e3b08a958a4d8ae789ce9/img/shape-8.svg"
          />
        </div>
      </div>
    </div>
  );
};
