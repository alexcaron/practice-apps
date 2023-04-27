import React, { useState } from "react";

const AddWord = ({ checkWordsFor, addWord }) => {
  const onSubmit = () => {
    const word = document.getElementById("word-to-add").value;
    if (!checkWordsFor(word)) {
      const definition = document.getElementById("def-to-add").value;
      addWord(word, definition);
    } else {
      alert("word already exists!");
    }
  }
  return (
    <div>
      <label>
        <input id="word-to-add" name="word" placeholder="your new word"/> - <input id="def-to-add" name="definition" placeholder="and its definition"/>
        <button name="submit" onClick={ onSubmit }>Add word</button>
      </label>
    </div>
  );
}

export default AddWord;