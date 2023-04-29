import React from "react";

const Shipping = ({ addShipping }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const fields = document.getElementById("shipping-info-form").elements;
    const shippingInfo = {
      address: fields["address"].value,
      city: fields["city"].value,
      state: fields["state"].value,
      zip: fields["zip-code"].value,
      phone: fields["phone-number"].value
    }
    addShipping(shippingInfo);
  }

  return (
    <form id="shipping-info-form" className="form" onSubmit={handleSubmit}>
      <div className="shipping-input">
        <label htmlFor="address">Address:</label>
        <input type="text" name="address" id="address" required/>
      </div>
      <div className="shipping-input">
        <label htmlFor="city">City:</label>
        <input type="text" name="city" id="city" required/>
      </div>
      <div className="shipping-input">
        <label htmlFor="state">State:</label>
        <input type="text" name="state" id="state" required/>
      </div>
      <div className="shipping-input">
        <label htmlFor="zip-code">ZIP code:</label>
        <input type="text" name="zip-code" id="zip-code" required/>
      </div>
      <div className="shipping-input">
        <label htmlFor="phone-number">Phone number:</label>
        <input type="text" name="phone-number" id="phone-number" required/>
      </div>
      <div className="shipping-input">
        <button type="submit">Next</button>
      </div>
    </form>
  );
}

export default Shipping;