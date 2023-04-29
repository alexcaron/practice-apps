import React from "react";

const Review = ({ info, purchase }) => {
  return (
    <>
    <h3>Review</h3>
    <button onClick={ purchase }>Complete purchase</button>
    <div>
      <div>First name: { info.firstName }</div>
      <div>Last name: { info.lastName }</div>
      <div>Email: { info.email }</div>
      <div>Address: { info.address }</div>
      <div>City: { info.city }</div>
      <div>State: { info.state }</div>
      <div>ZIP: { info.zip }</div>
      <div>Phone number: { info.phoneNumber }</div>
      <div>Name on card: { info.cardholderName }</div>
      <div>Credit card number: { info.cardNumber }</div>
      <div>Expiration month: { info.expirationMonth }</div>
      <div>Expiration year: { info.expirationYear }</div>
      <div>CVC: { info.cardCVC }</div>
      <div>Billing ZIP: { info.billingZip }</div>
    </div>
    </>
  );
}

export default Review;