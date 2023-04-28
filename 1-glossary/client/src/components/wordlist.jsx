import React, { useState } from "react";
import Word from "./word.jsx";

const WordList = ({ words, edit, deleteWord }) => {
  return (
    <div>
      <h3>Your words</h3>
      {words.map((word, index) => {
        return <Word key={ index } word={ word } edit={ edit } deleteWord={ deleteWord }/>
      })}
    </div>
  );
};

export default WordList;