import React, { useState } from "react";
import Account from "./account.jsx";

const Checkout = () => {
  const [currentForm, setCurrentForm] = useState(1);

  const createAccount = (info) => {
    // create account helper function

    // move to form 2

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
    </div></>
  );
};

export default Checkout;