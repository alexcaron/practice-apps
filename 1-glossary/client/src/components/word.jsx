import React from "react";

const Word = ({ word, edit, deleteWord }) => {
  const onEdit = (entry) => {
    const word = "fake";
    const definition = entry.definition;
    const id = entry._id;
    const newEntry = { id, word, definition };
    edit(newEntry);
  }

  return (
    <li>
      <span>{word.word}</span> - <span>{word.definition}</span>
      <button onClick={ () => onEdit(word) }>Edit</button>
      <button onClick={ () => deleteWord(word._id) }>Delete</button>
    </li>
  );
}

export default Word;