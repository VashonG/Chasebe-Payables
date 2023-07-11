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

export const Topbar = ({
  className,
  overlapGroupClassName,
  shapeClassName,
  pathClassName,
  shapeClassNameOverride,
  pathClassNameOverride,
}: Props): JSX.Element => {
  return (
    <div className={`topbar ${className}`}>
      <div className="overlap-4">
        <div className="line" />
        <div className="selector" />
      </div>
      <div className="summary-wrapper">
        <div className="summary">Summary</div>
      </div>
      <div className="payment-wrapper">
        <div className="text-wrapper-4">Payment</div>
      </div>
      <div className="activities-wrapper">
        <div className="text-wrapper-4">Activities</div>
      </div>
      <div className="wallet-wrapper">
        <div className="text-wrapper-4">Wallet</div>
      </div>
      <div className="offer-wrapper">
        <div className="text-wrapper-4">Offer</div>
      </div>
      <div className="help-wrapper">
        <div className="text-wrapper-4">Help</div>
      </div>
      <div className="profile">
        <div className="base-2" />
        <div className="eureka">Eureka</div>
      </div>
      <div className="overlap-5">
        <div className="ic-notifications">
          <img
            className="bounds"
            alt="Bounds"
            src="https://generation-sessions.s3.amazonaws.com/9e570af1ed9e3b08a958a4d8ae789ce9/img/bounds-5@2x.png"
          />
          <img
            className="shape-2"
            alt="Shape"
            src="https://generation-sessions.s3.amazonaws.com/9e570af1ed9e3b08a958a4d8ae789ce9/img/shape-1.svg"
          />
        </div>
        <div className="notification">
          <div className="element-6">4</div>
        </div>
      </div>
      <div className="cuboid-logo">
        <div className="logo">
          <div className={`overlap-group-3 ${overlapGroupClassName}`}>
            <div className={`shape-3 ${shapeClassName}`} />
            <img
              className={`path ${pathClassName}`}
              alt="Path"
              src="https://generation-sessions.s3.amazonaws.com/9e570af1ed9e3b08a958a4d8ae789ce9/img/path-3.svg"
            />
            <div className={`shape-4 ${shapeClassNameOverride}`} />
            <img
              className={`path-2 ${pathClassNameOverride}`}
              alt="Path"
              src="https://generation-sessions.s3.amazonaws.com/9e570af1ed9e3b08a958a4d8ae789ce9/img/path-1.svg"
            />
          </div>
        </div>
        <img
          className="cuboid"
          alt="Cuboid"
          src="https://generation-sessions.s3.amazonaws.com/9e570af1ed9e3b08a958a4d8ae789ce9/img/cuboid-1.svg"
        />
      </div>
    </div>
  );
};
