require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

app.get('/words', function(req, res) {
  // get all of the words from the database and return them as array
  // hardcoded here for now

  const words = [
    {word: 'germane', definition: 'relevant to a subject under consideration'},
    {word: 'sanguine', definition: 'optimistic or positive, especially in an apparently bad or difficult situation'},
    {word: 'clandestine', definition: 'kept secret or done secretively, especially because illicit'},
    {word: 'tacit', definition: 'understood or implied without being stated'},
  ];
  res.send(words);
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
