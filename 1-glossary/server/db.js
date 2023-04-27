const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});

const entrySchema = new Schema({
  word: String,
  definition: String
});

const Entry = mongoose.model('Entry', entrySchema);

const getAllEntries = () => {
  return Entry.find({});
}

const addEntry = (entry) => {
  return Entry.create(entry);
}

const deleteEntry = (id) => {
  return Entry.findById(id)
  .then((entry) => {
    return Entry.deleteOne(entry);
  })
}

const editEntry = (entry) => {
  return Entry.findById(entry.id)
  .then((currentEntry) => {
    return currentEntry.updateOne({word: entry.word, definition: entry.definition})
  });
}

module.exports.getAllEntries = getAllEntries;
module.exports.addEntry = addEntry;
module.exports.deleteEntry = deleteEntry;
module.exports.editEntry = editEntry;

// const initialWords = [
//   {word: 'germane', definition: 'relevant to a subject under consideration'},
//   {word: 'sanguine', definition: 'optimistic or positive, especially in an apparently bad or difficult situation'},
//   {word: 'clandestine', definition: 'kept secret or done secretively, especially because illicit'},
//   {word: 'tacit', definition: 'understood or implied without being stated'},
//   {word: 'tacit2', definition: 'understood or implied without being stated'}
// ];

// Entry.insertMany(initialWords);

