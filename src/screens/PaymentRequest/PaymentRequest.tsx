import React from "react";
import "./style.css";

export const PaymentRequest = (): JSX.Element => {
  return (
    <div className="payment-request">
      <div className="div">
        <div className="card">
          <div className="item">
            <div className="image" />
            <div className="ic-description">
              <img className="shape" alt="Shape" src="shape.svg" />
            </div>
            <div className="text-wrapper">Create Invoice</div>
            <p className="customize-track-and">customize, track and send invoices</p>
          </div>
          <div className="item-2">
            <div className="image" />
            <div className="ic-contacts">
              <img className="img" alt="Shape" src="shape-2.svg" />
            </div>
            <div className="text-wrapper-2">Share account</div>
            <p className="share-link-to-receiv">share link to receive payment</p>
          </div>
          <div className="tab">
            <div className="overlap-group">
              <div className="line" />
              <div className="line-2" />
              <div className="line-3" />
              <div className="text-wrapper-3">Send</div>
              <div className="text">
                <div className="text-wrapper-4">Request</div>
              </div>
              <div className="text-wrapper-5">Contact</div>
              <div className="text-wrapper-6">Other</div>
            </div>
          </div>
          <div className="request-payment-from">
            <div className="form">
              <div className="overlap-group">
                <div className="item-3">
                  <div className="ic-account-child">
                    <img className="shape-2" alt="Shape" src="shape-3.svg" />
                  </div>
                  <div className="text-wrapper-7">0/20</div>
                </div>
                <div className="button">
                  <div className="send-invitation">
                    <div className="text-wrapper-8">Next</div>
                  </div>
                  <img className="ic-arrow-forward" alt="Ic arrow forward" src="ic-arrow-forward.png" />
                </div>
                <p className="name-username-ema">Name, @username, email, or phone number</p>
              </div>
            </div>
            <p className="up-to-people-can">
              Up to 20 people can pay you back, even if they don&#39;t have an account yet. Just use their email or cell
              phone number to request payment.
            </p>
            <div className="text-wrapper-9">Request payment from anyone</div>
          </div>
          <div className="recent-contact">
            <div className="div-wrapper">
              <div className="text-2">
                <div className="text-wrapper-10">Manage contacts</div>
              </div>
            </div>
            <div className="text-wrapper-9">Recent Contact</div>
            <div className="item-4">
              <div className="item-5">
                <div className="image-2" />
                <div className="leah-edwards">
                  Leah <br />
                  Edwards
                </div>
              </div>
              <div className="item-6">
                <div className="image-2" />
                <div className="mike-townsend">
                  Mike <br />
                  Townsend
                </div>
              </div>
              <div className="item-7">
                <div className="item-8">
                  <img className="bounds" alt="Bounds" src="bounds-3.svg" />
                  <img className="shape-3" alt="Shape" src="shape-4.svg" />
                </div>
                <div className="text-wrapper-11">
                  Eugene <br />
                  Hughes
                </div>
              </div>
              <div className="item-9">
                <div className="image-2" />
                <div className="text-wrapper-11">
                  Rodney
                  <br />
                  Ramsey
                </div>
              </div>
              <div className="item-10">
                <div className="image-2" />
                <div className="cody-coleman">
                  Cody <br />
                  Coleman
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-2">
          <div className="div-2">
            <div className="overlap">
              <div className="line-4" />
              <div className="selector" />
            </div>
            <div className="text-3">
              <div className="text-wrapper-12">Summary</div>
            </div>
            <div className="text-4">
              <div className="text-wrapper-12">Payment</div>
            </div>
            <div className="text-5">
              <div className="text-wrapper-12">Activities</div>
            </div>
            <div className="text-6">
              <div className="text-wrapper-12">Wallet</div>
            </div>
            <div className="text-7">
              <div className="text-wrapper-12">Offer</div>
            </div>
            <div className="text-8">
              <div className="text-wrapper-12">Help</div>
            </div>
            <div className="profile">
              <div className="base" />
              <div className="text-wrapper-13">Eureka</div>
            </div>
            <div className="overlap-2">
              <div className="ic-notifications">
                <img className="bounds-2" alt="Bounds" src="bounds-4.svg" />
                <img className="shape-4" alt="Shape" src="shape-5.svg" />
              </div>
              <div className="notification">
                <div className="text-wrapper-14">4</div>
              </div>
            </div>
            <div className="cuboid-logo">
              <div className="logo">
                <div className="overlap-group-2">
                  <div className="shape-5" />
                  <img className="path" alt="Path" src="path.svg" />
                  <div className="shape-6" />
                  <img className="path-2" alt="Path" src="path-2.svg" />
                </div>
              </div>
              <img className="cuboid" alt="Cuboid" src="cuboid.svg" />
            </div>
          </div>
          <img className="chasebe" alt="Chasebe" src="chasebe-1.png" />
        </div>
      </div>
    </div>
  );
};
