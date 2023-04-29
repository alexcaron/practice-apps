import React from "react";

const Payment = ({ addPayment }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const fields = document.getElementById("payment-info-form").elements;
    const payment = {
      cardholderName: fields["cardholder-name"].value,
      cardNumber: fields["card-number"].value,
      expirationMonth: fields["card-expiration-month"].value,
      expirationYear: fields["card-expiration-year"].value,
      cardCVC: fields["card-cvc"].value,
      billingZip: fields["billing-zip"].value
    }
    addPayment(payment);
  };

  return (
    <form id="payment-info-form" className="form" onSubmit={handleSubmit}>
      <div className="payment-input">
        <label htmlFor="cardholder-name">Name on card:</label>
        <input type="text" name="cardholder-name" id="cardholder-name" required/>
      </div>
      <div className="payment-input">
        <label htmlFor="card-number">Credit card number:</label>
        <input type="text" name="card-number" id="card-number" required/>
      </div>
      <div className="payment-input">
        <label htmlFor="card-expiration-month">Expiration Month:</label>
        <input type="text" name="card-expiration-month" id="card-expiration-month" required/>
      </div>
      <div className="payment-input">
        <label htmlFor="card-expiration-year">Expiration Year:</label>
        <input type="text" name="card-expiration-year" id="card-expiration-year" required/>
      </div>
      <div className="payment-input">
        <label htmlFor="card-cvc">CVC:</label>
        <input type="text" name="card-cvc" id="card-cvc" required/>
      </div>
      <div className="payment-input">
        <label htmlFor="billing-zip">Billing zip:</label>
        <input type="text" name="billing-zip" id="billing-zip" required/>
      </div>
      <div className="payment-input">
        <button type="submit">Review</button>
      </div>
    </form>
  );
}

export default Payment;