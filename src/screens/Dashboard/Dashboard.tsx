import React from "react";
import { Item } from "../../components/Item";
import { LinkedAccount } from "../../components/LinkedAccount";
import { Topbar } from "../../components/Topbar";
import { TransactionList } from "../../components/TransactionList";
import "./style.css";

export const Dashboard = (): JSX.Element => {
  return (
    <div className="dashboard">
      <div className="div-2">
        <div className="item-5">
          <div className="text-wrapper-5">Bank and cards</div>
          <LinkedAccount className="linked-account-instance" />
          <div className="button-2">
            <div className="text-2">
              <p className="text-wrapper-6">Connect bank or cards &gt;</p>
            </div>
          </div>
        </div>
        <div className="item-6">
          <div className="text-wrapper-5">Current activity</div>
          <p className="check-out-when-funds">Your unpaid invoices will show up here...</p>
          <div className="button-3">
            <div className="text-2">
              <div className="text-wrapper-6">Show all activity &gt;</div>
            </div>
          </div>
        </div>
        <div className="item-7">
          <div className="item-8">
            <div className="image-2" />
            <div className="leah-edwards">
              Leah <br />
              Edwards
            </div>
          </div>
          <div className="item-9">
            <div className="image-2" />
            <div className="mike-townse">
              Mike <br />
              Townse
            </div>
          </div>
          <div className="item-10">
            <div className="ic-person-wrapper">
              <div className="ic-person">
                <img
                  className="shape-5"
                  alt="Shape"
                  src="https://generation-sessions.s3.amazonaws.com/9e570af1ed9e3b08a958a4d8ae789ce9/img/shape-6.svg"
                />
              </div>
            </div>
            <div className="eugene-hughes">
              Eugene <br />
              Hughes
            </div>
          </div>
          <div className="item-11">
            <div className="overlap-6">
              <div className="manual-wrapper">
                <div className="manual">Issue Card</div>
              </div>
            </div>
            <div className="ic-credit-card">
              <div className="overlap-group-4">
                <img
                  className="shape-6"
                  alt="Shape"
                  src="https://generation-sessions.s3.amazonaws.com/9e570af1ed9e3b08a958a4d8ae789ce9/img/shape-5.svg"
                />
                <div className="ic-swap-horiz" />
              </div>
            </div>
          </div>
          <div className="text-wrapper-5">Quick Transaction</div>
        </div>
        <TransactionList
          className="transaction-list-instance"
          divClassName="transaction-list-2"
          itemClassName="transaction-list-2"
          itemClassNameOverride="transaction-list-2"
          transactionTransactionClassName="design-component-instance-node"
        />
        <h1 className="good-morning-eureka">Good Morning, Eureka!</h1>
        <Item className="item-instance" />
        <div className="overlap-7">
          <Topbar
            className="topbar-instance"
            overlapGroupClassName="topbar-2"
            pathClassName="topbar-4"
            pathClassNameOverride="topbar-6"
            shapeClassName="topbar-3"
            shapeClassNameOverride="topbar-5"
          />
          <img
            className="chasebe"
            alt="Chasebe"
            src="https://generation-sessions.s3.amazonaws.com/9e570af1ed9e3b08a958a4d8ae789ce9/img/chasebe-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};
