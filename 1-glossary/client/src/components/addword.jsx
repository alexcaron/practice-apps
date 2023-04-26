import React, { useState } from "react";

const AddWord = ({ checkWordsFor, addWord }) => {
  //const [wordExists, setWordExists] = useState(false);
  const onSubmit = () => {
    const word = document.getElementById("word-to-add").value;
    if (!checkWordsFor(word)) {
      const definition = document.getElementById("def-to-add").value;
      addWord(word, definition);
    } else {
      console.log("word already exists!");
    }
  }
  return (
    <div>
      <label>
        <input id="word-to-add" name="word" />
        <input id="def-to-add" name="definition" />
        <button name="submit" onClick={ onSubmit }>Add word</button>
      </label>
    </div>
  );
}

export default AddWord;