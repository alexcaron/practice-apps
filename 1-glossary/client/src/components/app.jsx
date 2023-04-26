import React, { useState, useEffect } from "react";
import WordList from "./wordlist.jsx";
import Search from "./search.jsx";
import axios from "axios";

const App = () => {

  const [words, setWords] = useState([]);
  const [displayWords, setDisplayWords] = useState([]);

  const filterWords = (query) => {
    const filteredWords = words.filter((word) => {
      return word.word.includes(query) || word.definition.includes(query);
    });
    setDisplayWords(filteredWords);
  }

  useEffect(() => {
    axios.get('/words')
    .then((wordData) => {
      setWords(wordData.data);
      setDisplayWords(wordData.data);
    })
  }, []);

  return (
    <div>
      <h2>Personal Word Glossary</h2>
      <Search filter={ filterWords } />
      <WordList words={ displayWords }/>
    </div>
  );
}

export default App;