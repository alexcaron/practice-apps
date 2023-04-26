require("dotenv").config();
const express = require("express");
const path = require("path");
const { getAllEntries, addEntry } = require(path.join(__dirname, "./db.js"));

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

app.get('/words', function(req, res) {
  getAllEntries()
  .then((entries) => {
    res.send(entries);
  })
  .catch((err) => {
    console.log("there was an issue getting the entries");
    res.sendStatus(500);
  })
});

app.post('/words', function(req, res) {
  addEntry(req.body)
  .then(() => {
    res.send(201);
  })
  .catch((err) => {
    res.send(err);
  })

})

/****
 *
 *
 * Other routes here....
 *
 *
 */

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
