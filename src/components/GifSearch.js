
import React from 'react'

import React from "react";
function GifSearch({ typeTextFunc, findGif }) {
  return (
    <div>
      <input type="text" placeholder="Search here..." onChange={typeTextFunc} />
      <button onClick={findGif}>Find GIFs</button>
    </div>
  );
}

export default GifSearch;