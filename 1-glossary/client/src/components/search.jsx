import React, { useState } from "react";

const Search = ({ filter }) => {
  return (
    <label>
      <input id="word" name="word"/>
      <button name="search" label="search" onClick={ () => filter(document.getElementById("word").value) }>Search</button>
    </label>
  )
}

export default Search;