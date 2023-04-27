import React, { useState } from "react";
import Word from "./word.jsx";

const WordList = ({ words, edit, deleteWord }) => {
  console.log("word list rerender with words: ", words);
  // if (query !== '') {
  //   setDisplayWords(words.filter((word) => word.word.includes(query) || word.definition.includes(query)));
  // }
  return (
    <ul>
      {words.map((word, index) => {
        return <Word key={ index } word={ word } edit={ edit } deleteWord={ deleteWord }/>
      })}
    </ul>
  );
};

export default WordList;