import React from 'react'

import React,{useState} from "react";
import GifSearch from "./GifSearch";
import GifList from "./GifList";

function GifListContainer() {

  const [searchedName, setSearchedName] = useState([]);
  const [newData, setNewData] = useState([]);
  function typeTextFunc(event) {
    setSearchedName(event.target.value);
  }
  function findGif() {
      fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=YbDTiWrz7xscirKqeMRYdNncZbcJXOZy&q=${searchedName}&limit=3&offset=0&rating=g&lang=en`
      )
        .then((res) => res.json())
        .then((data) => setNewData(data));
  }
  return (
    <>
      <GifSearch typeTextFunc={typeTextFunc} findGif={findGif} />
      <GifList data={newData} alt={searchedName} />
    </>
  );
}

export default GifListContainer;