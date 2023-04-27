import React from "react";

const Word = ({ word, edit, deleteWord }) => {

  return (
    <li>
      <span>{word.word}</span> - <span>{word.definition}</span>
      <button>Edit</button>
      <button onClick={ () => {
        console.log(word._id);
        deleteWord(word._id);
      }}>Delete</button>
    </li>
  );
}

export default Word;