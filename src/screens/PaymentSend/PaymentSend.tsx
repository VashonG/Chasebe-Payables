import React from "react";
import "./style.css";

export const PaymentSend = (): JSX.Element => {
  return (
    <div className="payment-send">
      <div className="div">
        <div className="card">
          <div className="item">
            <div className="overlap-group">
              <div className="ic-description">
                <img className="bounds" alt="Bounds" src="/img/bounds.png" />
                <img className="shape" alt="Shape" src="/img/shape-2.svg" />
              </div>
            </div>
            <div className="text-wrapper">Create Invoice</div>
            <p className="customize-track-and">customize, track and send invoices</p>
          </div>
          <div className="recent-contact">
            <div className="button">
              <div className="text">
                <div className="text-wrapper-2">Manage contacts</div>
              </div>
            </div>
            <div className="text-wrapper-3">Recent Contact</div>
            <div className="item-2">
              <div className="item-3">
                <div className="image" />
                <div className="leah-edwards">
                  Leah <br />
                  Edwards
                </div>
              </div>
              <div className="item-4">
                <div className="image" />
                <div className="mike-townsend">
                  Mike <br />
                  Townsend
                </div>
              </div>
              <div className="item-5">
                <div className="item-6">
                  <img className="img" alt="Bounds" src="/img/bounds-2.png" />
                  <img className="shape-2" alt="Shape" src="/img/shape-1.svg" />
                </div>
                <div className="text-wrapper-4">
                  Eugene <br />
                  Hughes
                </div>
              </div>
              <div className="item-7">
                <div className="image" />
                <div className="text-wrapper-4">
                  Rodney
                  <br />
                  Ramsey
                </div>
              </div>
              <div className="item-8">
                <div className="image" />
                <div className="cody-coleman">
                  Cody <br />
                  Coleman
                </div>
              </div>
            </div>
          </div>
          <div className="send-payment">
            <div className="form">
              <div className="overlap-group-2">
                <div className="button-2">
                  <div className="send-invitation">
                    <div className="text-wrapper-5">Next</div>
                  </div>
                  <img className="ic-arrow-forward" alt="Ic arrow forward" src="/img/ic-arrow-forward.png" />
                </div>
                <p className="name-username-ema">Name, @username, email, or phone number</p>
              </div>
            </div>
            <div className="text-wrapper-3">Send payment</div>
          </div>
        </div>
        <div className="topbar">
          <div className="overlap">
            <div className="line" />
            <div className="selector" />
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-6">Summary</div>
          </div>
          <div className="text-2">
            <div className="text-wrapper-6">Payment</div>
          </div>
          <div className="text-3">
            <div className="text-wrapper-6">Activities</div>
          </div>
          <div className="text-4">
            <div className="text-wrapper-6">Wallet</div>
          </div>
          <div className="text-5">
            <div className="text-wrapper-6">Offer</div>
          </div>
          <div className="text-6">
            <div className="text-wrapper-6">Help</div>
          </div>
          <div className="profile">
            <div className="base" />
            <div className="text-wrapper-7">Eureka</div>
          </div>
          <div className="overlap-2">
            <div className="ic-notifications">
              <img className="bounds-2" alt="Bounds" src="/img/bounds-1.png" />
              <img className="shape-3" alt="Shape" src="/img/shape.svg" />
            </div>
            <div className="notification">
              <div className="text-wrapper-8">4</div>
            </div>
          </div>
          <div className="cuboid-logo">
            <div className="overlap-3">
              <div className="logo">
                <div className="overlap-group-3">
                  <div className="shape-4" />
                  <img className="path" alt="Path" src="/img/path-1.svg" />
                  <div className="shape-5" />
                  <img className="path-2" alt="Path" src="/img/path.svg" />
                </div>
              </div>
              <img className="cuboid" alt="Cuboid" src="/img/cuboid.svg" />
              <img className="chasebe" alt="Chasebe" src="/img/chasebe-1.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
