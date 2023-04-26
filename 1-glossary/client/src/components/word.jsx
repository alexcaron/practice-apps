import React from "react";

const Word = ({ word }) => {
  return (
    <li><span>{word.word}</span> - <span>{word.definition}</span></li>
  );
}

export default Word;