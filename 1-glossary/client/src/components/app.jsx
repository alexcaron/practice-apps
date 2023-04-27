import React, { useState, useEffect } from "react";
import WordList from "./wordlist.jsx";
import Search from "./search.jsx";
import AddWord from "./addword.jsx";
import axios from "axios";

const App = () => {

  const [words, setWords] = useState([]);
  const [displayWords, setDisplayWords] = useState([]);

  const updateWordLists = (response) => {
    setWords(response.data);
    setDisplayWords(response.data);
  }

  useEffect(() => {
    axios.get('/words')
    .then((wordData) => updateWordLists(wordData));
  }, []);

  const filterWords = (query) => {
    setDisplayWords(words.filter((word) => word.word.includes(query) || word.definition.includes(query)));
  }

  const checkWordsFor = (word) => {
    return words.map(entry => entry.word).includes(word);
  }

  const addWord = (word, definition) => {
    const entry = { word, definition };
    axios.post('/words', entry)
    .then(() => axios.get('/words'))
    .then((wordData) => updateWordLists(wordData))
    .catch((err) => {
      console.log("there was an error adding the word.");
    })
  }

  const editWord = (entry) => {
    axios.put('/words', {data: entry})
    .then(() => axios.get('/words'))
    .then((wordData) => updateWordLists(wordData))
    .catch((err) => {
      console.log("there was an error updating the word.");
    })
  };

  const deleteWord = (id) => {
    axios.delete('/words', { data: { id: id }})
    .then(() => axios.get('/words'))
    .then((wordData) => updateWordLists(wordData))
    .catch((err) => {
      console.log("there was an error deleting the word.");
    })
  };

  return (
    <div>
      <h2>Personal Word Glossary</h2>
      <Search filter={ filterWords }/>
      <AddWord checkWordsFor={ checkWordsFor } addWord= { addWord }/>
      <WordList words={ displayWords } edit={ editWord } deleteWord={ deleteWord }/>
    </div>
  );
}

export default App;