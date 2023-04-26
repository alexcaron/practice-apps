import React from "react";

const WordList = () => {

  // hardcode this data for now
  const words = [
    {word: 'germane', definition: 'relevant to a subject under consideration'},
    {word: 'sanguine', definition: 'optimistic or positive, especially in an apparently bad or difficult situation'},
    {word: 'clandestine', definition: 'kept secret or done secretively, especially because illicit'},
  ];

  return (
    <ul>
      {words.map((word) => {
        return <li><span>{word.word}</span> - <span>{word.definition}</span></li>
      })}
    </ul>
  );
};



export default WordList;