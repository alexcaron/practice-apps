import React from "react";
import Word from "./word.jsx";

const WordList = ({ words, edit, deleteWord }) => {
  return (
    <ul>
      {words.map((word, index) => {
        return <Word key={ index } word={ word } edit={ edit } deleteWord={ deleteWord }/>
      })}
    </ul>
  );
};

export default WordList;