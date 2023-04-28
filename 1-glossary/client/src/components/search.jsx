import React, { useState } from "react";

const Search = ({ filter }) => {
  return (
    <label>
      <input id="word-to-search" type="search" name="word" placeholder="Search your words"/>
      <button name="search" label="search" onClick={ () => filter(document.getElementById("word-to-search").value) }>Search</button>
    </label>
  )
};

export default Search;