const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync('CREATE TABLE IF NOT EXISTS responses (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY)'))
  .then(() =>
    db.queryAsync(`CREATE TABLE IF NOT EXISTS users (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(50) NULL,
        last_name VARCHAR(50) NULL,
        email VARCHAR(100) NULL,
        password VARCHAR(100) NULL)`))
  .then(() =>
    db.queryAsync(`CREATE TABLE IF NOT EXISTS purchases (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        user_id INT NULL,
        purchased_items_id INT NULL,
        cardholder_name VARCHAR(100) NULL,
        address VARCHAR(100) NULL,
        city VARCHAR(50) NULL,
        state VARCHAR(25) NULL,
        zip INT NULL,
        phone_number INT NULL,
        card_number INT NULL,
        card_cvc INT NULL,
        expiration_month INT NULL,
        expiration_year INT NULL,
        billing_zip INT NULL,
        FOREIGN KEY(user_id) REFERENCES users(id)
    )`))
  .catch((err) => console.log(err));

module.exports = {
  addUser: (user) => {
    const userValues = [user.firstName, user.lastName, user.email, user.password];
    return db.queryAsync('INSERT INTO users (first_name, last_name, email, password) VALUES(?, ?, ?, ?)', userValues)
    .then((results) => results[0].insertId)
    .catch((err) => console.log("there was an error adding the user to the database. err msg: ", error));
  },
  addPurchase: (pi) => {
    const purchaseValues = [parseInt(pi.userId), parseInt(pi.purchaseItemsId), pi.cardholderName, pi.address, pi.city, pi.state, parseInt(pi.zip),
      parseInt(pi.phoneNumber), parseInt(pi.cardNumber), parseInt(pi.cardCVC), parseInt(pi.expirationMonth), parseInt(pi.expirationYear), parseInt(pi.billingZip)];
    console.log(purchaseValues);
    return db.queryAsync('INSERT INTO purchases (user_id, purchased_items_id, cardholder_name, address, city, state, zip, phone_number, card_number, card_cvc, expiration_month, expiration_year, billing_zip) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', purchaseValues)
    .catch((err) => console.log("there was an error adding the purhcase to the database. err msg: ", error));
  }
};
