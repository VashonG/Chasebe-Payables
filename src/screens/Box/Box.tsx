import React from "react";
import { PaymentSendBox } from "../../components/PaymentSendBox";
import { PaymentSendBoxTwo } from "../../components/PaymentSendBoxTwo";
import { Base } from "../../components/Base";
import "./style.css";

export const Box = (): JSX.Element => {
  return (
    <div className="box">
      <div className="payment-send-box-wrapper">
        <PaymentSendBox className="payment-send-box-instance" />
        <div className="payment-send-box-two-wrapper">
        <PaymentSendBoxTwo
          className="payment-send-box-two-instance"
          overlapGroupClassName="design-component-instance-node"
          pathClassName="payment-send-box-two-3"
          pathClassNameOverride="payment-send-box-two-5"
          shapeClassName="payment-send-box-two-2"
          shapeClassNameOverride="payment-send-box-two-4" />
                <div className="base-wrapper">
        <Base className="base-instance" />
      </div>
      </div>
    </div>
    </div>
  );
}
