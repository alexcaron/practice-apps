import React, { useState } from "react";

const Search = ({ filter }) => {
  return (
    <label>
      <input id="word-to-add" type="search" name="word" placeholder="Search your words"/>
      <button name="search" label="search" onClick={ () => filter(document.getElementById("word-to-add").value) }>Search</button>
    </label>
  )
};

export default Search;