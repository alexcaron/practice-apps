import React from "react";
import axios from "axios";

const WordList = ({ words }) => {

  return (
    <ul>
      {words.map((word) => {
        return <li><span>{word.word}</span> - <span>{word.definition}</span></li>
      })}
    </ul>
  );
};



export default WordList;