import React from 'react'

const imgUtils = (poster_path:string|undefined) => {


   return  `https://image.tmdb.org/t/p/original${poster_path}`;
  
}

export default imgUtils