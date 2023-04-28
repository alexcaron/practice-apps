import React, { useState } from "react";
import Account from "./account.jsx";
import Shipping from "./shipping.jsx";

const Checkout = () => {
  const [currentForm, setCurrentForm] = useState(1);
  const [formInfo, setFormInfo] = useState({});
  const createAccount = (info) => {
    // create account helper function
    setFormInfo(info);
    console.log(info);
    // move to form 2
    setCurrentForm(2);
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
      {currentForm === 2 && <Shipping />}
    </div></>
  );
};

export default Checkout;