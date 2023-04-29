import React from "react";

const Account = ({ create }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const fields = document.getElementById("account-info-form").elements
    const account = {
      firstName: fields["first-name"].value,
      lastName: fields["last-name"].value,
      email: fields["email"].value,
      password: fields["password"].value,
    }
    create(account);
  }

  return (
    <form id="account-info-form" className="form" onSubmit={handleSubmit}>
      <div className="account-input">
        <label htmlFor="first-name">First name:</label>
        <input type="text" name="first-name" id="first-name" required/>
      </div>
      <div className="account-input">
        <label htmlFor="last-name">Last name:</label>
        <input type="text" name="last-name" id="last-name" required/>
      </div>
      <div className="account-input">
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" required/>
      </div>
      <div className="account-input">
        <label htmlFor="password">Choose a password:</label>
        <input type="text" name="password" id="password" required/>
      </div>
      <div className="account-input">
        <button type="submit">Next</button>
      </div>
    </form>
  );
}

export default Account;