import React, { useState, useEffect } from "react";
import WordList from "./wordlist.jsx";
import axios from "axios";

const App = () => {

  const [words, setWords] = useState([]);

  useEffect(() => {
    axios.get('/words')
    .then((wordData) => {
      setWords(wordData.data);
    })
  }, []);

  return (
    <div>
      <p>Personal Word Glossary</p>
      <WordList words={ words }/>
    </div>
  );
}

export default App;