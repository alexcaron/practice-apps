require("dotenv").config();
const express = require("express");
const path = require("path");
const { getAllEntries, addEntry, deleteEntry, editEntry } = require(path.join(__dirname, "./db.js"));

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

app.get('/words', function(req, res) {
  getAllEntries()
  .then(([rows]) => {
    console.log(rows);
    res.send(rows);
  })
  .catch((err) => {
    console.log("there was an issue getting the entries");
    res.sendStatus(500);
  })
});

app.post('/words', function(req, res) {
  addEntry(req.body)
  .then(() => {
    res.sendStatus(201);
  })
  .catch((err) => {
    res.send(err);
  });
});

app.delete('/words', function(req, res) {
  deleteEntry(req.body.id)
  .then(() => {
    res.sendStatus(201);
  })
});

app.put('/words', function(req, res) {
  editEntry(req.body.data)
  .then(() => {
    res.sendStatus(201);
  })
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
