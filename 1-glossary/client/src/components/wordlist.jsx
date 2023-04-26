import React from "react";
import Word from "./word.jsx";

const WordList = ({ words }) => {

  return (
    <ul>
      {words.map((word, index) => {
        return <Word key={ index } word={ word } />
      })}
    </ul>
  );
};

export default WordList;