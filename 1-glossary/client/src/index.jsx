import React from "react";
import { render } from "react-dom";
import WordList from "./components/wordlist.jsx";
import axios from "axios";



// const words = [
//   {word: 'germane', definition: 'relevant to a subject under consideration'},
//   {word: 'sanguine', definition: 'optimistic or positive, especially in an apparently bad or difficult situation'},
//   {word: 'clandestine', definition: 'kept secret or done secretively, especially because illicit'},
//   {word: 'tacit', definition: 'understood or implied without being stated'},
// ];

axios.get('/words')
.then((response) => {
  const words = response.data;
  render(
    <div>
      <p>Personal Word Glossary</p>
      <WordList words={ words }/>
    </div>,
    document.getElementById("root")
  );
})
