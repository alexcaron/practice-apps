import React, { useState } from "react";

const AddWord = ({ checkWordsFor, addWord }) => {
  const [existsAlert, setExistsAlert] = useState(false);
  const onSubmit = () => {
    const word = document.getElementById("word-to-add").value;
    console.log(word);
    const definition = document.getElementById("def-to-add").value;
    checkWordsFor(word) ? setExistsAlert(true) : addWord(word, definition);
  }
  const clearError = () => {
    if (existsAlert) {
      setExistsAlert(false);
    }
  }
  return (
    <div>
      <label>
        <input id="word-to-add" name="word" placeholder="your new word" onChange={ clearError }/> - <input id="def-to-add" name="definition" placeholder="and its definition"/>
        <button name="submit" onClick={ onSubmit }>Add word</button>
        { existsAlert && <div className="error">That word already exists. Edit it instead, or add a different word.</div> }
      </label>
    </div>
  );
}

export default AddWord;