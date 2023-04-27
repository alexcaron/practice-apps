import React, { useState } from "react";

const Word = ({ word, edit, deleteWord }) => {
  const [editing, setEditing] = useState(false);

  const onEdit = (entry) => {
    setEditing(!editing);
    const word = "fake";
    const definition = entry.definition;
    const id = entry._id;
    const newEntry = { id, word, definition };
    edit(newEntry);
  }

  return (
    <li>
      { editing ? <><input id="word"/> - <input id="def"/></> : <><span>{word.word}</span> - <span>{word.definition}</span></> }
      <button onClick={ () => onEdit(word) }>{ editing ? 'Submit' : 'Edit' }</button>
      <button onClick={ () => deleteWord(word._id) }>Delete</button>
    </li>
  );
}

export default Word;