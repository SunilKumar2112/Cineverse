import { Box } from '@chakra-ui/react'
import React from 'react'
import { genre } from "../../entities/genre";
import './styles.scss';
const Genres = ({data}:{data:any}) => {
    console.log(data.length);
    
  return (
    <Box className="genres">
    {data?.length > 0 &&
      data?.map((genre: genre) => (
        <Box className="genre">
          {genre.name}
        </Box>
      ))}
  </Box>
  )
}

export default Genres