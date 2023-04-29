import React from 'react'

function GifList({ data, alt }) {
    const allData = data.data;
    return (
      <>
        {allData?.map((item, index) => {
          return (
            <ul key={index}>
              <li>
                <img src={item.images.original.url} alt={alt} />
              </li>
            </ul>
          );
        })}
      </>
    );
  }

  export default GifList;