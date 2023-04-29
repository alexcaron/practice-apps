const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
})



// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// // 1. Use mongoose to establish a connection to MongoDB
// // 2. Set up any schema and models needed by the app
// // 3. Export the models
// // 4. Import the models into any modules that need them
// mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});

// const entrySchema = new Schema({
//   word: String,
//   definition: String
// });

// const Entry = mongoose.model('Entry', entrySchema);

const getAllEntries = () => {
  return db.promise().query('SELECT * FROM entries');
  //return Entry.find({});
}

const addEntry = (entry) => {
  const entryValues = [entry.word, entry.definition];
  return db.promise().query('INSERT INTO entries (word, definition) VALUES(?, ?)', entryValues)
  //return Entry.create(entry);
}

const deleteEntry = (id) => {
  return db.promise().query('DELETE FROM entries WHERE id=?', [id]);
  // return Entry.findById(id)
  // .then((entry) => {
  //   return Entry.deleteOne(entry);
  // })
}

const editEntry = (entry) => {
  return db.promise().query('UPDATE entries SET word=?, definition=? WHERE id=?', [entry.word, entry.defintion, entry.id]);
  // return Entry.findById(entry.id)
  // .then((currentEntry) => {
  //   return currentEntry.updateOne({word: entry.word, definition: entry.definition})
  // });
}

module.exports.getAllEntries = getAllEntries;
module.exports.addEntry = addEntry;
module.exports.deleteEntry = deleteEntry;
module.exports.editEntry = editEntry;

// add back to package.json if need mongoose
// "mongoose": "^6.1.4",