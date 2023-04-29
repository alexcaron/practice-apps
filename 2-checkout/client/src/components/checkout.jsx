import React, { useState } from "react";
import Account from "./account.jsx";
import Shipping from "./shipping.jsx";
import Payment from "./payment.jsx";

const Checkout = () => {
  const [currentForm, setCurrentForm] = useState(1);
  const [formInfo, setFormInfo] = useState({});
  const createAccount = (info) => {
    setFormInfo(info);
    setCurrentForm(2);
  };

  const addShipping = (info) => {
    Object.assign(info, formInfo);
    setFormInfo(info);
    setCurrentForm(3);
  };

  const addPayment = (info) => {
    Object.assign(info, formInfo);
    setFormInfo(info);
//    setCurrentForm(3);
  };

  return (
    <><h1>Checkout</h1>
    <div>
      <h3>Your Cart</h3>
      <ul>
        <li>Floor lamp x 1</li>
        <li>Table lamp x 2</li>
        <li>Low shelf x 1</li>
      </ul>
      <h3>Step 1: Create an account</h3>
      {currentForm === 1 && <Account create={ createAccount }/>}
      <h3>Step 2: Provide your shipping details</h3>
      {currentForm === 2 && <Shipping addShipping={ addShipping }/>}
      <h3>Step 3: Enter your payment information</h3>
      {currentForm === 3 && <Payment addPayment={ addPayment }/>}
    </div></>
  );
};

export default Checkout;