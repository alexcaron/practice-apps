import React from "react";
import { render } from "react-dom";
import WordList from "./components/wordlist.jsx";

render(
  <div>
    <p>Personal Word Glossary</p>
    <WordList />
  </div>,
  document.getElementById("root")
);
