import React, { useState } from "react";

const Word = ({ word, edit, deleteWord }) => {
  const [editing, setEditing] = useState(false);

  const onEdit = (entry) => {
    if (editing) {
      const id = entry._id;
      const word = document.getElementById("word-to-update").value;
      const definition = document.getElementById("def-to-update").value;
      edit({ id, word, definition });
    }
    setEditing(!editing);
  }

  return (
    <li className="word">
      { editing ? <><input id="word-to-update"/> - <input id="def-to-update"/></> : <><span>{word.word}</span> - <span>{word.definition}</span></> }
      <button onClick={ () => onEdit(word) }>{ editing ? 'Submit' : 'Edit' }</button>
      <button onClick={ () => deleteWord(word._id) }>Delete</button>
    </li>
  );
}

export default Word;