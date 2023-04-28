import React, { useState } from "react";

const Checkout = () => {

  const [currentForm, setCurrentForm] = useState(1);

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
      {currentForm === 1 && <div>FORM FOR YOUR ACCT INFO</div>}
    </div></>
  )


}

export default Checkout;