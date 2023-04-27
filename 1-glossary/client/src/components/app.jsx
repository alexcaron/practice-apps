import React, { useState, useEffect } from "react";
import WordList from "./wordlist.jsx";
import Search from "./search.jsx";
import AddWord from "./addword.jsx";
import axios from "axios";

const App = () => {

  const [words, setWords] = useState([]);
  const [displayWords, setDisplayWords] = useState([]);

  useEffect(() => {
    axios.get('/words')
    .then((wordData) => {
      setWords(wordData.data);
      setDisplayWords(wordData.data);
    })
  }, []);

  const filterWords = (query) => {
    const filteredWords = words.filter((word) => {
      return word.word.includes(query) || word.definition.includes(query);
    });
    setDisplayWords(filteredWords);
  }

  const checkWordsFor = (word) => {
    return words.map(entry => entry.word).includes(word);
  }

  const addWord = (word, definition) => {
    const entry = { word, definition };
    axios.post('/words', entry)
    .then(() => {
      return axios.get('/words')
    })
    .then((wordData) => {
      setWords(wordData.data);
      setDisplayWords(wordData.data);
    })
    .catch((err) => {
      console.log("there was an error adding the word.");
    })
  }

  const editWord = (id, entry) => {

  };

  const deleteWord = (id) => {
    axios.put('/words', {
      id: id,
      action: 'delete'
    })
    .then(() => {
      return axios.get('/words')
    })
    .then((wordData) => {
      setWords(wordData.data);
      setDisplayWords(wordData.data);
    })
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