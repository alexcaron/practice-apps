require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const { addUser, addPurchase } = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

app.use(express.json());

app.post("/purchase", function(req, res) {
  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  }
  const purchase = {
    purchaseItemsId: 1,
    cardholderName: req.body.cardholderName,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    phoneNumber: req.body.phoneNumber,
    cardNumber: req.body.cardNumber,
    cardCVC: req.body.cardCVC,
    expirationMonth: req.body.expirationMonth,
    expirationYear: req.body.expirationYear,
    billingZip: req.body.billingZip
  }
  addUser(user)
  .then((userId) => {
    Object.assign(purchase, { userId });
    console.log("the purchase object is ", purchase);
    return addPurchase(purchase);
  })
  .then((result) => res.sendStatus(201))
  .catch((error) => console.log("there was an error adding the purchase"));
});

/****
 *
 *
 * Other routes here....
 *
 *
 */

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
