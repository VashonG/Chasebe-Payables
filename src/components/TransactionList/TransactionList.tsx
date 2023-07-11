/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Transaction } from "../Transaction";
import "./style.css";

interface Props {
  className: any;
  transactionTransactionClassName: any;
  itemClassName: any;
  itemClassNameOverride: any;
  divClassName: any;
}

export const TransactionList = ({
  className,
  transactionTransactionClassName,
  itemClassName,
  itemClassNameOverride,
  divClassName,
}: Props): JSX.Element => {
  return (
    <div className={`transaction-list ${className}`}>
      <div className="list">
        <Transaction className={transactionTransactionClassName} />
        <div className={`item-2 ${itemClassName}`}>
          <div className="overlap">
            <div className="spotify" />
          </div>
          <div className="element-may">13 May 2021</div>
          <div className="text-wrapper-2">Spotify</div>
          <div className="element-2"> - $345.00</div>
          <div className="text-wrapper-3">Entertainment</div>
        </div>
        <div className={`item-3 ${itemClassNameOverride}`}>
          <div className="image" />
          <div className="element-nov">14 Nov 2021</div>
          <div className="text-wrapper-2">Antonio Bennett</div>
          <div className="element-3"> + $345.00</div>
          <div className="text-wrapper-3">Transfer to account</div>
        </div>
        <div className={`item-4 ${divClassName}`}>
          <div className="image" />
          <div className="element-dec">22 Dec 2021</div>
          <div className="text-wrapper-2">Mittie Wolfe</div>
          <div className="element-3"> + $345.00</div>
          <div className="text-wrapper-3">Transfer to account</div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap-2">
            <div className="apple-wrapper">
              <div className="apple" />
            </div>
            <div className="element-apr">25 Apr 2021</div>
            <div className="text-wrapper-2">Apple</div>
            <div className="element-2"> - $345.00</div>
            <div className="text-wrapper-3">Entertainment</div>
          </div>
        </div>
      </div>
      <div className="transaction-history">Transaction history</div>
      <div className="text">
        <div className="all-transaction">All transaction</div>
      </div>
    </div>
  );
};
