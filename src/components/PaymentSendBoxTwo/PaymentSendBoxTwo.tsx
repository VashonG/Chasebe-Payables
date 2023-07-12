/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

interface Props {
  className: any;
  overlapGroupClassName: any;
  shapeClassName: any;
  pathClassName: any;
  shapeClassNameOverride: any;
  pathClassNameOverride: any;
}

export const PaymentSendBoxTwo = ({
  className,
  overlapGroupClassName,
  shapeClassName,
  pathClassName,
  shapeClassNameOverride,
  pathClassNameOverride,
}: Props): JSX.Element => {
  return (
    <div className={`payment-send-box-two ${className}`}>
      <p className="for-more-information">
        <span className="text-wrapper">For more information about the payment, read our </span>
        <span className="span">user agreement</span>
      </p>
      <div className="card">
        <div className="button">
          <div className="text">
            <div className="send-payment-now">Send payment now</div>
          </div>
        </div>
        <div className="fee">$630,00 USD</div>
        <div className="you-ll-pay">You’ll pay</div>
        <div className="div">Fee</div>
        <div className="fee-wrapper">
          <div className="text-wrapper-2">$0,00 USD</div>
        </div>
        <div className="charge-funding-sourc">Charge Funding Source</div>
        <div className="item">
          <div className="overlap">
            <div className="cuboid-balance-USD">Chasebe Balance (USD)</div>
            <div className="element-USD-wrapper">
              <div className="text-wrapper-2">$630,00 USD</div>
            </div>
            <div className="logo">
              <div className={`overlap-group ${overlapGroupClassName}`}>
                <div className={`shape ${shapeClassName}`} />
                <img className={`path ${pathClassName}`} alt="Path" src="/img/path.svg" />
                <div className={`shape-2 ${shapeClassNameOverride}`} />
                <img className={`img ${pathClassNameOverride}`} alt="Path" src="/img/path-2.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="you-re-sending-with">You’re sending with</div>
        <img className="ic-chevron-right" alt="Ic chevron right" src="/img/ic-chevron-right.png" />
      </div>
      <div className="card-2">
        <div className="overlap-group-wrapper">
          <div className="overlap-group-2">
            <div className="item-2">
              <div className="element">630,00</div>
              <div className="element-wrapper">
                <div className="element-2">$</div>
              </div>
            </div>
            <div className="you-send">You send</div>
          </div>
        </div>
        <p className="thanks-for-your-hard">Thanks for your hard work dude!</p>
        <div className="ic-create">
          <img className="bounds" alt="Bounds" src="/img/bounds.png" />
          <img className="shape-3" alt="Shape" src="/img/shape.svg" />
        </div>
      </div>
      <div className="recipient">
        <div className="image" />
        <div className="mike-townsend">Mike Townsend</div>
      </div>
    </div>
  );
};
