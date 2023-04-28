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
    <div className="entry">
      { editing ?
        <div className="words"><input id="word-to-update" placeholder={word.word}/> - <input id="def-to-update" placeholder={word.definition}/></div> :
        <div className="words"><span>{word.word}</span> - <span>{word.definition}</span></div>
      }
      <div className="edit-buttons">
        <button className="edit-button" onClick={ () => onEdit(word) }>{ editing ? 'Submit' : 'Edit' }</button>
        <button className="edit-button" onClick={ () => deleteWord(word._id) }>Delete</button>
      </div>
    </div>
  );
}

export default Word;